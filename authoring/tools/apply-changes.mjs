#!/usr/bin/env node
/**
 * apply-changes.mjs — apply machine-readable review changes to the authored
 * strand files in src/strands/.
 *
 *   node authoring/tools/apply-changes.mjs <changes.json> [--dry-run]
 *
 * <changes.json> is an array of { findingId, change } where `change` uses the
 * proposedChanges vocabulary from the review briefs: edge-remove, edge-add,
 * edge-strength, edge-reverse, retag-stages, set-cefr, edit-field,
 * framework-add, framework-remove, remove-citation. Other kinds are reported
 * and skipped (they need editorial work).
 *
 * Every change is checked before it is applied: text edits need an exact
 * match of `oldText`, edge additions must keep the graph acyclic, and
 * removed prerequisites are cleared from reteachPrerequisiteId. Results are
 * printed as a log that can be pasted into reports/adversarial-review.md.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CEFR, STAGES, SRC, cefrIndex, loadStrandFiles } from '../../scripts/lib.mjs';
import { findDependencyCycle } from '../../scripts/graph.mjs';

const [, , changesPath, flag] = process.argv;
const dryRun = flag === '--dry-run';
const changes = JSON.parse(readFileSync(changesPath, 'utf8'));
const files = loadStrandFiles();

const topicFile = new Map();
for (const f of files) for (const t of f.data.topics) topicFile.set(t.id, f);
const domainFile = new Map();
for (const f of files) for (const d of f.data.domains) domainFile.set(d.code, f);
const allDeps = () => files.flatMap((f) => f.data.dependencies);
const findEdge = (a, b) => {
  for (const f of files) {
    const i = f.data.dependencies.findIndex((d) => d.topicId === a && d.prerequisiteId === b);
    if (i >= 0) return { f, i, d: f.data.dependencies[i] };
  }
  return null;
};
const clearReteach = (topicId, prereq) => {
  const f = topicFile.get(topicId);
  for (const g of f.data.guidance) if (g.topicId === topicId) for (const x of g.difficulties) if (x.reteachPrerequisiteId === prereq) x.reteachPrerequisiteId = null;
};

/** Resolve a path like "difficulties[1].pattern" or "masteryEvidence[2]" on an object. */
function resolvePath(obj, path) {
  const parts = path.match(/[^.[\]]+/g);
  let parent = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    parent = parent?.[/^\d+$/.test(parts[i]) ? Number(parts[i]) : parts[i]];
  }
  const last = parts[parts.length - 1];
  return { parent, key: /^\d+$/.test(last) ? Number(last) : last };
}

const results = { applied: [], skipped: [] };
const ok = (c, msg) => results.applied.push(`${c.findingId}: ${msg}`);
const skip = (c, msg) => results.skipped.push(`${c.findingId}: ${msg}`);

for (const entry of changes) {
  const c = { findingId: entry.findingId, ...entry.change };
  try {
    switch (c.kind) {
      case 'edge-remove': {
        const e = findEdge(c.topicId, c.prerequisiteId);
        if (!e) { skip(c, `edge ${c.topicId} <- ${c.prerequisiteId} not found`); break; }
        e.f.data.dependencies.splice(e.i, 1);
        clearReteach(c.topicId, c.prerequisiteId);
        ok(c, `removed ${c.topicId} <- ${c.prerequisiteId}`);
        break;
      }
      case 'edge-strength': {
        const e = findEdge(c.topicId, c.prerequisiteId);
        if (!e) { skip(c, `edge ${c.topicId} <- ${c.prerequisiteId} not found`); break; }
        e.d.strength = c.strength;
        ok(c, `set ${c.topicId} <- ${c.prerequisiteId} to ${c.strength}`);
        break;
      }
      case 'edge-add': {
        const f = topicFile.get(c.topicId);
        if (!f || !topicFile.has(c.prerequisiteId)) { skip(c, `unknown topic in edge ${c.topicId} <- ${c.prerequisiteId}`); break; }
        if (findEdge(c.topicId, c.prerequisiteId)) { skip(c, `edge ${c.topicId} <- ${c.prerequisiteId} already exists`); break; }
        const edge = { topicId: c.topicId, prerequisiteId: c.prerequisiteId, strength: c.strength ?? 'soft', reason: c.reason };
        if (!edge.reason) { skip(c, `edge-add without reason`); break; }
        if (findDependencyCycle([...allDeps(), edge])) { skip(c, `edge ${c.topicId} <- ${c.prerequisiteId} would create a cycle`); break; }
        f.data.dependencies.push(edge);
        ok(c, `added ${c.topicId} <- ${c.prerequisiteId} (${edge.strength})`);
        break;
      }
      case 'edge-reverse': {
        const e = findEdge(c.topicId, c.prerequisiteId);
        if (!e) { skip(c, `edge ${c.topicId} <- ${c.prerequisiteId} not found`); break; }
        const rev = { topicId: c.prerequisiteId, prerequisiteId: c.topicId, strength: e.d.strength, reason: c.reason ?? e.d.reason };
        const without = allDeps().filter((d) => d !== e.d);
        if (findDependencyCycle([...without, rev])) { skip(c, `reversing ${c.topicId} <- ${c.prerequisiteId} would create a cycle`); break; }
        e.f.data.dependencies.splice(e.i, 1);
        clearReteach(c.topicId, c.prerequisiteId);
        topicFile.get(rev.topicId).data.dependencies.push(rev);
        ok(c, `reversed to ${rev.topicId} <- ${rev.prerequisiteId}`);
        break;
      }
      case 'retag-stages': {
        if (!c.stages?.length || !c.stages.every((s) => STAGES.includes(s))) { skip(c, `bad stages ${c.stages}`); break; }
        for (const id of c.topicIds) {
          const t = topicFile.get(id)?.data.topics.find((x) => x.id === id);
          if (!t) { skip(c, `unknown topic ${id}`); continue; }
          t.stages = STAGES.filter((s) => c.stages.includes(s));
          ok(c, `${id} stages -> ${t.stages.join(', ')}`);
        }
        break;
      }
      case 'set-cefr': {
        const t = topicFile.get(c.topicId)?.data.topics.find((x) => x.id === c.topicId);
        if (!t) { skip(c, `unknown topic ${c.topicId}`); break; }
        const start = c.cefrStart ?? t.cefrStart;
        const end = c.cefrEnd ?? t.cefrEnd;
        if (!CEFR.includes(start) || !CEFR.includes(end) || cefrIndex(start) > cefrIndex(end)) { skip(c, `bad CEFR ${start}-${end}`); break; }
        t.cefrStart = start;
        t.cefrEnd = end;
        ok(c, `${c.topicId} CEFR -> ${start}–${end}`);
        break;
      }
      case 'edit-field': {
        const fileKind = c.file ?? 'topics';
        let target;
        if (fileKind === 'domains') target = domainFile.get(c.domainCode ?? c.topicId)?.data.domains.find((d) => d.code === (c.domainCode ?? c.topicId));
        else if (fileKind === 'guidance') target = topicFile.get(c.topicId)?.data.guidance.find((g) => g.topicId === c.topicId);
        else target = topicFile.get(c.topicId)?.data.topics.find((t) => t.id === c.topicId);
        if (!target) { skip(c, `target not found for ${fileKind} ${c.topicId ?? c.domainCode}`); break; }
        const { parent, key } = resolvePath(target, c.path);
        if (parent == null || !(key in parent)) { skip(c, `path ${c.path} not found on ${c.topicId}`); break; }
        const current = parent[key];
        if (typeof current !== 'string') { skip(c, `path ${c.path} on ${c.topicId} is not text`); break; }
        if (c.oldText && current !== c.oldText) {
          const n = current.split(c.oldText).length - 1;
          if (n !== 1) { skip(c, `oldText not found exactly once in ${c.topicId} ${c.path}`); break; }
          parent[key] = current.replace(c.oldText, c.newValue);
        } else {
          parent[key] = c.newValue;
        }
        ok(c, `edited ${fileKind} ${c.topicId ?? c.domainCode} ${c.path}`);
        break;
      }
      case 'framework-add': {
        const t = topicFile.get(c.topicId)?.data.topics.find((x) => x.id === c.topicId);
        if (!t) { skip(c, `unknown topic ${c.topicId}`); break; }
        t.frameworks ??= [];
        if (t.frameworks.some((f) => f.key === c.key)) { skip(c, `${c.topicId} already links ${c.key}`); break; }
        t.frameworks.push({ key: c.key, ...(c.levels?.length ? { levels: c.levels } : {}), contribution: c.contribution ?? 'related' });
        ok(c, `${c.topicId} + framework ${c.key}`);
        break;
      }
      case 'framework-remove': {
        const t = topicFile.get(c.topicId)?.data.topics.find((x) => x.id === c.topicId);
        const before = t?.frameworks?.length ?? 0;
        if (t) t.frameworks = t.frameworks.filter((f) => f.key !== c.key);
        if (!t || t.frameworks.length === before) { skip(c, `${c.topicId} has no framework ${c.key}`); break; }
        ok(c, `${c.topicId} - framework ${c.key}`);
        break;
      }
      case 'remove-citation': {
        const isGuide = c.file === 'guidance';
        const target = isGuide ? topicFile.get(c.topicId)?.data.guidance.find((g) => g.topicId === c.topicId) : topicFile.get(c.topicId)?.data.topics.find((t) => t.id === c.topicId);
        if (!target) { skip(c, `target not found ${c.topicId}`); break; }
        const { parent, key } = resolvePath(target, c.path ?? 'citations');
        const arr = parent?.[key];
        if (!Array.isArray(arr) || !arr.includes(c.referenceKey)) { skip(c, `${c.referenceKey} not in ${c.topicId} ${c.path}`); break; }
        if ((c.path ?? 'citations') === 'citations' && arr.length === 1) { skip(c, `would leave ${c.topicId} ${c.file} with no citations`); break; }
        parent[key] = arr.filter((k) => k !== c.referenceKey);
        ok(c, `removed ${c.referenceKey} from ${c.topicId} ${c.file ?? 'topics'} ${c.path ?? 'citations'}`);
        break;
      }
      default:
        skip(c, `kind ${c.kind} needs editorial handling`);
    }
  } catch (err) {
    skip(c, `error: ${err.message}`);
  }
}

if (!dryRun) for (const f of files) writeFileSync(resolve(SRC, 'strands', f.file), JSON.stringify(f.data, null, 2) + '\n');
console.log(JSON.stringify({ applied: results.applied.length, skipped: results.skipped.length }, null, 0));
writeFileSync(changesPath.replace(/\.json$/, '.log.json'), JSON.stringify(results, null, 2) + '\n');

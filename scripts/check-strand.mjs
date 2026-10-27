#!/usr/bin/env node
/**
 * check-strand.mjs — validate one authored strand file (src/strands/*.json)
 * against the skeleton, bibliography and framework catalogue.
 *
 *   node scripts/check-strand.mjs src/strands/01-vocabulary.json
 *
 * Exits non-zero and lists every problem found.
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  CEFR,
  CONTRIBUTIONS,
  DIFFICULTY_KINDS,
  SPECIFICITY,
  STAGES,
  TYPES,
  cefrIndex,
  parseFrameworks,
  parseReferences,
  parseSkeleton,
} from './lib.mjs';

export function checkStrand(data, { skeleton, refKeys, frameworkKeys }) {
  const errors = [];
  const warnings = [];
  const err = (m) => errors.push(m);
  const warn = (m) => warnings.push(m);
  const nonEmpty = (v) => typeof v === 'string' && v.trim().length > 0;
  const proposed = new Set((data.proposedReferences ?? []).map((r) => r.key));
  const citable = (k) => refKeys.has(k) || proposed.has(k);

  const skelById = new Map(skeleton.topics.map((t) => [t.id, t]));
  const ownDomains = new Set((data.domains ?? []).map((d) => d.code));
  const skelDomains = new Map(skeleton.domains.map((d) => [d.code, d]));

  for (const key of ['group', 'domains', 'topics', 'dependencies', 'guidance']) {
    if (!(key in data)) err(`missing top-level key "${key}"`);
  }

  // --- domains -------------------------------------------------------------
  for (const d of data.domains ?? []) {
    const s = skelDomains.get(d.code);
    if (!s) err(`domain ${d.code}: not in skeleton`);
    else if (d.name !== s.name || d.strand !== s.strand) err(`domain ${d.code}: name/strand must match skeleton (${s.name} / ${s.strand})`);
    for (const f of ['summary', 'learnerSummary']) if (!nonEmpty(d[f])) err(`domain ${d.code}: empty ${f}`);
    if (!d.stageEmphasis || typeof d.stageEmphasis !== 'object') err(`domain ${d.code}: stageEmphasis missing`);
    else for (const k of Object.keys(d.stageEmphasis)) if (!STAGES.includes(k)) err(`domain ${d.code}: unknown stageEmphasis key ${k}`);
    for (const c of d.keyReferences ?? []) if (!citable(c)) err(`domain ${d.code}: unknown reference ${c}`);
  }

  // --- topics --------------------------------------------------------------
  const expected = skeleton.topics.filter((t) => ownDomains.has(t.domainCode));
  const seen = new Set();
  const topicById = new Map();
  for (const t of data.topics ?? []) {
    const where = `topic ${t.id}`;
    const s = skelById.get(t.id);
    if (!s) { err(`${where}: id not in skeleton`); continue; }
    if (!ownDomains.has(s.domainCode)) err(`${where}: belongs to domain ${s.domainCode}, which this file does not own`);
    if (seen.has(t.id)) err(`${where}: duplicate`);
    seen.add(t.id);
    topicById.set(t.id, t);
    if (t.strand !== s.strand) err(`${where}: strand must be "${s.strand}"`);
    if (t.domain !== s.domain) err(`${where}: domain must be "${s.domain}"`);
    if (!TYPES.includes(t.type)) err(`${where}: bad type ${t.type}`);
    if (!nonEmpty(t.name)) err(`${where}: empty name`);
    if (!nonEmpty(t.description)) err(`${where}: empty description`);
    if (!CEFR.includes(t.cefrStart) || !CEFR.includes(t.cefrEnd)) err(`${where}: cefrStart/cefrEnd must be one of ${CEFR.join(', ')}`);
    else if (cefrIndex(t.cefrStart) > cefrIndex(t.cefrEnd)) err(`${where}: cefrStart after cefrEnd`);
    if (!Array.isArray(t.stages) || t.stages.length === 0) err(`${where}: stages empty`);
    else for (const st of t.stages) if (!STAGES.includes(st)) err(`${where}: unknown stage ${st}`);
    if (!SPECIFICITY.includes(t.specificity)) err(`${where}: specificity must be EGAP or ESAP`);
    if (!Array.isArray(t.masteryEvidence) || t.masteryEvidence.length < 3 || t.masteryEvidence.length > 6) err(`${where}: masteryEvidence needs 3–6 items`);
    if (!nonEmpty(t.assessmentPrompt)) err(`${where}: empty assessmentPrompt`);
    if (!Array.isArray(t.citations) || t.citations.length < 1) err(`${where}: needs at least one citation`);
    for (const c of t.citations ?? []) if (!citable(c)) err(`${where}: unknown reference ${c}`);
    for (const f of t.frameworks ?? []) {
      if (!frameworkKeys.has(f.key)) err(`${where}: unknown framework key ${f.key}`);
      if (!CONTRIBUTIONS.includes(f.contribution)) err(`${where}: framework ${f.key} contribution must be one of ${CONTRIBUTIONS.join('/')}`);
      for (const l of f.levels ?? []) if (!CEFR.includes(l)) err(`${where}: framework ${f.key} bad level ${l}`);
    }
    const allowed = new Set(['id', 'type', 'strand', 'domain', 'name', 'description', 'cefrStart', 'cefrEnd', 'stages', 'specificity', 'masteryEvidence', 'assessmentPrompt', 'citations', 'frameworks']);
    for (const k of Object.keys(t)) if (!allowed.has(k)) err(`${where}: unexpected field ${k}`);
  }
  for (const s of expected) if (!seen.has(s.id)) err(`missing topic ${s.id}`);

  // --- dependencies ----------------------------------------------------------
  const prereqsOf = new Map();
  const edgeSeen = new Set();
  for (const d of data.dependencies ?? []) {
    const where = `edge ${d.topicId} <- ${d.prerequisiteId}`;
    if (!topicById.has(d.topicId)) err(`${where}: topicId must be a topic in this file`);
    if (!skelById.has(d.prerequisiteId)) err(`${where}: prerequisite not in skeleton`);
    if (d.topicId === d.prerequisiteId) err(`${where}: self-loop`);
    if (!['hard', 'soft'].includes(d.strength)) err(`${where}: strength must be hard or soft`);
    if (!nonEmpty(d.reason)) err(`${where}: empty reason`);
    const k = `${d.topicId}|${d.prerequisiteId}`;
    if (edgeSeen.has(k)) err(`${where}: duplicate edge`);
    edgeSeen.add(k);
    if (!prereqsOf.has(d.topicId)) prereqsOf.set(d.topicId, new Set());
    prereqsOf.get(d.topicId).add(d.prerequisiteId);
  }

  // local cycle check (edges within this file)
  const adj = new Map();
  for (const d of data.dependencies ?? []) {
    if (!adj.has(d.topicId)) adj.set(d.topicId, []);
    adj.get(d.topicId).push(d.prerequisiteId);
  }
  const state = new Map();
  const visit = (n, path) => {
    if (state.get(n) === 1) { err(`cycle: ${[...path, n].join(' -> ')}`); return; }
    if (state.get(n) === 2) return;
    state.set(n, 1);
    for (const m of adj.get(n) ?? []) visit(m, [...path, n]);
    state.set(n, 2);
  };
  for (const n of adj.keys()) visit(n, []);

  // --- guidance ----------------------------------------------------------------
  const guided = new Set();
  for (const g of data.guidance ?? []) {
    const where = `guidance ${g.topicId}`;
    if (!topicById.has(g.topicId)) { err(`${where}: topic not in this file`); continue; }
    if (guided.has(g.topicId)) err(`${where}: duplicate`);
    guided.add(g.topicId);
    if (!nonEmpty(g.summary)) err(`${where}: empty summary`);
    if (!Array.isArray(g.activities) || g.activities.length < 1 || g.activities.length > 3) err(`${where}: needs 1–3 activities`);
    for (const a of g.activities ?? []) {
      for (const f of ['title', 'intendedInsight', 'rationale']) if (!nonEmpty(a[f])) err(`${where}: activity missing ${f}`);
      if (!Array.isArray(a.learnerActions) || a.learnerActions.length < 2) err(`${where}: activity "${a.title}" needs 2+ learnerActions`);
      for (const c of a.citations ?? []) if (!citable(c)) err(`${where}: activity unknown reference ${c}`);
    }
    if (!Array.isArray(g.difficulties) || g.difficulties.length < 2 || g.difficulties.length > 4) err(`${where}: needs 2–4 difficulties`);
    for (const x of g.difficulties ?? []) {
      for (const f of ['pattern', 'revealedBy', 'response']) if (!nonEmpty(x[f])) err(`${where}: difficulty missing ${f}`);
      if (!DIFFICULTY_KINDS.includes(x.kind)) err(`${where}: difficulty kind must be one of ${DIFFICULTY_KINDS.join(', ')}`);
      if (x.reteachPrerequisiteId != null && !prereqsOf.get(g.topicId)?.has(x.reteachPrerequisiteId)) {
        err(`${where}: reteachPrerequisiteId ${x.reteachPrerequisiteId} must be a declared prerequisite of this topic`);
      }
    }
    const dg = g.diagnostic ?? {};
    for (const f of ['task', 'strongResponse', 'partialResponse', 'gapResponse']) if (!nonEmpty(dg[f])) err(`${where}: diagnostic missing ${f}`);
    if (!nonEmpty(g.contextNotes)) err(`${where}: empty contextNotes`);
    if (!Array.isArray(g.citations) || g.citations.length < 1) err(`${where}: needs at least one citation`);
    for (const c of g.citations ?? []) if (!citable(c)) err(`${where}: unknown reference ${c}`);
    if (!Array.isArray(g.reviewNotes)) err(`${where}: reviewNotes must be an array (may be empty)`);
  }
  for (const id of topicById.keys()) if (!guided.has(id)) err(`missing guidance for ${id}`);

  // --- soft checks -------------------------------------------------------------
  for (const t of data.topics ?? []) {
    if (!prereqsOf.has(t.id)) warn(`topic ${t.id} has no prerequisites (fine only for genuine entry points)`);
  }
  for (const r of data.proposedReferences ?? []) {
    if (refKeys.has(r.key)) err(`proposedReference ${r.key} already exists in bibliography`);
    if (!nonEmpty(r.apa) || !nonEmpty(r.note)) err(`proposedReference ${r.key}: needs apa and note`);
  }
  return { errors, warnings };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const file = process.argv[2];
  if (!file) {
    console.error('usage: node scripts/check-strand.mjs <src/strands/file.json>');
    process.exit(2);
  }
  const data = JSON.parse(readFileSync(resolve(file), 'utf8'));
  const skeleton = parseSkeleton();
  const refKeys = new Set(parseReferences().map((r) => r.key));
  const frameworkKeys = new Set(parseFrameworks().flatMap((s) => s.items.map((i) => i.key)));
  const { errors, warnings } = checkStrand(data, { skeleton, refKeys, frameworkKeys });
  for (const w of warnings) console.warn(`  warn: ${w}`);
  if (errors.length) {
    console.error(`✗ ${errors.length} problem(s) in ${file}:`);
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`✓ ${file}: ${data.topics.length} topics, ${data.dependencies.length} edges, ${data.guidance.length} guidance records`);
}

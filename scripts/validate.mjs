#!/usr/bin/env node
/**
 * validate.mjs — dependency-free integrity check for the published dataset
 * in data/. Independent of the authoring sources, so consumers can run it on
 * a downloaded copy.
 *
 *   node scripts/validate.mjs
 *
 * Checks declared counts, field enums, referential integrity (edges,
 * citations, framework links, guidance, domains), acyclicity, the manifest
 * checksums, and level/stage sanity. Exits non-zero on any error; prints
 * warnings for editorial issues worth a look.
 */

import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { findDependencyCycle } from './graph.mjs';
import { CEFR, CONTRIBUTIONS, DATA, DIFFICULTY_KINDS, ID_PATTERN, SPECIFICITY, STAGES, TYPES, cefrIndex } from './lib.mjs';

const load = (name) => JSON.parse(readFileSync(resolve(DATA, name), 'utf8'));
const errors = [];
const warnings = [];
const check = (cond, msg) => {
  if (!cond) errors.push(msg);
};

const topics = load('topics.json');
const deps = load('dependencies.json');
const domains = load('domains.json');
const guidance = load('teaching-guidance.json');
const references = load('references.json');
const frameworks = load('frameworks.json');
const manifest = load('manifest.json');

// --- declared counts ----------------------------------------------------------
check(topics.topicCount === topics.topics.length, 'topics: topicCount mismatch');
check(deps.edgeCount === deps.dependencies.length, 'dependencies: edgeCount mismatch');
check(domains.domainCount === domains.domains.length, 'domains: domainCount mismatch');
check(guidance.recordCount === guidance.records.length, 'teaching-guidance: recordCount mismatch');
check(references.referenceCount === references.references.length, 'references: referenceCount mismatch');

// --- lookups --------------------------------------------------------------------
const topicById = new Map();
for (const t of topics.topics) {
  check(ID_PATTERN.test(t.id), `topic id malformed: ${t.id}`);
  check(!topicById.has(t.id), `duplicate topic id ${t.id}`);
  topicById.set(t.id, t);
}
const refKeys = new Set(references.references.map((r) => r.key));
const frameworkKeys = new Set(frameworks.sources.flatMap((s) => s.items.map((i) => i.key)));
const domainNames = new Map(domains.domains.map((d) => [d.name, d]));

// --- topics -----------------------------------------------------------------------
for (const t of topics.topics) {
  const w = `topic ${t.id}`;
  check(TYPES.includes(t.type), `${w}: bad type`);
  check(domainNames.has(t.domain), `${w}: unknown domain ${t.domain}`);
  check(domainNames.get(t.domain)?.strand === t.strand, `${w}: strand does not match its domain`);
  check(CEFR.includes(t.cefrStart) && CEFR.includes(t.cefrEnd), `${w}: bad CEFR level`);
  check(cefrIndex(t.cefrStart) <= cefrIndex(t.cefrEnd), `${w}: cefrStart after cefrEnd`);
  check(t.stages.length > 0 && t.stages.every((s) => STAGES.includes(s)), `${w}: bad stages`);
  check(SPECIFICITY.includes(t.specificity), `${w}: bad specificity`);
  check(t.masteryEvidence.length >= 3, `${w}: fewer than 3 mastery evidence items`);
  check(t.citations.length >= 1, `${w}: no citations`);
  for (const c of t.citations) check(refKeys.has(c), `${w}: unknown citation ${c}`);
  for (const f of t.frameworks) {
    check(frameworkKeys.has(f.key), `${w}: unknown framework ${f.key}`);
    check(CONTRIBUTIONS.includes(f.contribution), `${w}: bad framework contribution`);
  }
  check(typeof t.centrality === 'number' && t.centrality >= 0 && t.centrality <= 1, `${w}: centrality out of range`);
  if (t.strand === 'Disciplinary Literacies') check(t.specificity === 'ESAP', `${w}: disciplinary topics must be ESAP`);
}

// --- dependencies -------------------------------------------------------------------
const edgeKeys = new Set();
const prereqsOf = new Map();
for (const d of deps.dependencies) {
  const w = `edge ${d.topicId} <- ${d.prerequisiteId}`;
  check(topicById.has(d.topicId), `${w}: unknown topicId`);
  check(topicById.has(d.prerequisiteId), `${w}: unknown prerequisiteId`);
  check(d.topicId !== d.prerequisiteId, `${w}: self-loop`);
  check(d.strength === 'hard' || d.strength === 'soft', `${w}: bad strength`);
  check(typeof d.reason === 'string' && d.reason.length > 0, `${w}: empty reason`);
  const k = `${d.topicId}|${d.prerequisiteId}`;
  check(!edgeKeys.has(k), `${w}: duplicate`);
  edgeKeys.add(k);
  if (!prereqsOf.has(d.topicId)) prereqsOf.set(d.topicId, new Set());
  prereqsOf.get(d.topicId).add(d.prerequisiteId);
  const a = topicById.get(d.topicId);
  const b = topicById.get(d.prerequisiteId);
  if (a && b && d.strength === 'hard' && cefrIndex(b.cefrStart) > cefrIndex(a.cefrEnd)) {
    warnings.push(`${w}: hard prerequisite starts (${b.cefrStart}) above the topic's end level (${a.cefrEnd})`);
  }
  const firstStage = (t) => Math.min(...t.stages.map((s) => STAGES.indexOf(s)));
  if (a && b && d.strength === 'hard' && firstStage(b) > firstStage(a)) {
    warnings.push(`${w}: hard prerequisite is first taught at a later stage (${STAGES[firstStage(b)]}) than the topic (${STAGES[firstStage(a)]})`);
  }
}
const cycle = findDependencyCycle(deps.dependencies);
check(cycle === null, `dependency cycle: ${cycle?.join(' -> ')}`);

// --- guidance ------------------------------------------------------------------------
const guided = new Set();
for (const g of guidance.records) {
  const w = `guidance ${g.topicId}`;
  check(topicById.has(g.topicId), `${w}: unknown topic`);
  check(!guided.has(g.topicId), `${w}: duplicate`);
  guided.add(g.topicId);
  for (const c of g.citations) check(refKeys.has(c), `${w}: unknown citation ${c}`);
  for (const a of g.activities) for (const c of a.citations ?? []) check(refKeys.has(c), `${w}: unknown activity citation ${c}`);
  for (const x of g.difficulties) {
    check(DIFFICULTY_KINDS.includes(x.kind), `${w}: bad difficulty kind ${x.kind}`);
    if (x.reteachPrerequisiteId != null) {
      check(prereqsOf.get(g.topicId)?.has(x.reteachPrerequisiteId), `${w}: reteach target ${x.reteachPrerequisiteId} is not a prerequisite`);
    }
  }
}
for (const id of topicById.keys()) check(guided.has(id), `topic ${id} has no guidance record`);

// --- domains ---------------------------------------------------------------------------
for (const d of domains.domains) {
  check([...topicById.values()].some((t) => t.domain === d.name), `domain ${d.code}: no topics`);
  for (const c of d.keyReferences ?? []) check(refKeys.has(c), `domain ${d.code}: unknown reference ${c}`);
}

// --- references ---------------------------------------------------------------------------
for (const r of references.references) {
  if (!r.citedByTopics.length && !r.citedInGuidance && !r.citedByDomains.length) warnings.push(`reference ${r.key} is not cited anywhere`);
}

// --- manifest checksums ---------------------------------------------------------------------
for (const [name, meta] of Object.entries(manifest.files)) {
  const bytes = readFileSync(resolve(DATA, name));
  check(createHash('sha256').update(bytes).digest('hex') === meta.sha256, `checksum mismatch for ${name}`);
  check(bytes.length === meta.bytes, `byte count mismatch for ${name}`);
}
check(manifest.counts.topics === topics.topics.length, 'manifest topic count mismatch');
check(manifest.counts.dependencies === deps.dependencies.length, 'manifest dependency count mismatch');

// --- report ----------------------------------------------------------------------------------
const verbose = process.argv.includes('--verbose');
if (warnings.length) {
  console.warn(`! ${warnings.length} warning(s)${verbose ? ':' : ' (run with --verbose to list)'}`);
  if (verbose) for (const w of warnings) console.warn(`  - ${w}`);
}
if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):`);
  for (const e of errors.slice(0, 100)) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(
  `✓ valid — ${topics.topics.length} topics, ${deps.dependencies.length} dependencies, ${guidance.records.length} guidance records, ` +
    `${references.references.length} references, ${frameworkKeys.size} framework items. Referential integrity, acyclicity and checksums OK.`,
);

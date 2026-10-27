#!/usr/bin/env node
// Build explorer/index.html: a single-file, offline browser for the taxonomy.
// Reads the published data/ files, compacts them and embeds them in explorer/template.html.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => JSON.parse(readFileSync(resolve(ROOT, 'data', f), 'utf8'));

const topics = read('topics.json');
const deps = read('dependencies.json');
const guidance = read('teaching-guidance.json');
const references = read('references.json');
const frameworks = read('frameworks.json');
const domains = read('domains.json');
const pathways = read('pathways.json');
const retired = read('retired-topics.json');

const TOPIC_FIELDS = [
  'id', 'type', 'strand', 'domain', 'name', 'description', 'cefrStart', 'cefrEnd', 'coreBand',
  'stageRoles', 'specificity', 'disciplines', 'audience', 'masteryEvidence', 'assessmentPrompt',
  'citations', 'frameworks', 'depth', 'downstreamCount',
];

const data = {
  topics: topics.topics.map((t) => Object.fromEntries(TOPIC_FIELDS.map((k) => [k, t[k]]))),
  // [topicId, prerequisiteId, 1 = hard / 0 = soft, reason]
  deps: deps.dependencies.map((d) => [d.topicId, d.prerequisiteId, d.strength === 'hard' ? 1 : 0, d.reason]),
  guidance: Object.fromEntries(guidance.records.map(({ topicId, ...g }) => [topicId, g])),
  // key → [citation, doi, verification]
  refs: Object.fromEntries(references.references.map((r) => [r.key, [r.citation, r.doi ?? '', r.verification]])),
  // key → [title, source · group]
  fw: Object.fromEntries(frameworks.sources.flatMap((s) => s.items.map((i) => [i.key, [i.title, `${s.name} · ${i.group}`]]))),
  domains: domains.domains,
  strands: domains.strands,
  pathways,
  retired: Object.fromEntries(Object.entries(retired.retired).map(([id, r]) => [id, r.replacedBy])),
  meta: {
    version: topics.version,
    topics: topics.topics.length,
    strands: domains.strands.length,
    domains: domains.domains.length,
    edges: deps.dependencies.length,
    hard: deps.dependencies.filter((d) => d.strength === 'hard').length,
    refs: references.references.length,
    verified: references.references.filter((r) => r.verification === 'web-verified').length,
    note:
      'CEFR ranges, stage roles and prerequisite strengths are expert judgements, not empirical calibrations. ' +
      'Teaching activities are research-informed proposals; a citation supports the principle, not necessarily the specific activity. ' +
      'Framework links are mapping judgements, not certified alignments. The content was written and adversarially reviewed by AI agents ' +
      'and has not yet been reviewed by a human expert.',
  },
};

// Keep the embedded JSON from closing the <script> element early.
const json = JSON.stringify(data).replace(/</g, '\\u003c');
const template = readFileSync(resolve(ROOT, 'explorer', 'template.html'), 'utf8');
const html = template.replace('/*__DATA__*/', () => json);
const out = resolve(ROOT, 'explorer', 'index.html');
writeFileSync(out, html);
console.log(`✓ explorer/index.html — ${(html.length / 1024 / 1024).toFixed(2)} MB, ${data.topics.length} topics`);

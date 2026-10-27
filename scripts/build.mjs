#!/usr/bin/env node
/**
 * build.mjs — assemble the published dataset in data/ from the authored
 * sources in src/ and authoring/skeleton.txt.
 *
 *   node scripts/build.mjs
 *
 * Steps: validate each strand file, merge, check the whole graph is acyclic,
 * compute derived fields (centrality, depth, prerequisite/unlock counts),
 * attach reference usage and verification status, write data/*.json and the
 * manifest with SHA-256 checksums. Output is deterministic for a given input.
 */

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { checkStrand } from './check-strand.mjs';
import { findDependencyCycle } from './graph.mjs';
import {
  DATA,
  ROOT,
  SRC,
  STAGES,
  loadStrandFiles,
  parseFrameworks,
  parseReferences,
  parseSkeleton,
} from './lib.mjs';

const pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf8'));
const VERSION = pkg.taxonomyVersion;
const RELEASE_DATE = pkg.releaseDate;

const DRAFT = process.argv.includes('--draft');
const skeleton = parseSkeleton();
const references = parseReferences();
const strandFiles = loadStrandFiles();
const baseRefKeys = new Set(references.map((r) => r.key));
if (DRAFT) {
  // Draft builds include references still awaiting verification, so the
  // dataset can be reviewed before the bibliography is finalised.
  const known = new Set(references.map((r) => r.key));
  for (const { data } of strandFiles) {
    for (const r of data.proposedReferences ?? []) {
      if (known.has(r.key)) continue;
      known.add(r.key);
      references.push({ key: r.key, kind: 'article', year: Number((r.apa.match(/\((\d{4})/) ?? [])[1]) || null, citation: r.apa, draft: true });
    }
  }
}
const frameworks = parseFrameworks();
const frameworkKeys = new Set(frameworks.flatMap((s) => s.items.map((i) => i.key)));

// --- 1. per-file validation -----------------------------------------------
const problems = [];
for (const { file, data } of strandFiles) {
  const { errors } = checkStrand(data, { skeleton, refKeys: baseRefKeys, frameworkKeys });
  for (const e of errors) problems.push(`${file}: ${e}`);
  if (!DRAFT) for (const r of data.proposedReferences ?? []) problems.push(`${file}: unresolved proposedReference ${r.key} (add to src/meta/references.txt or remove)`);
}

// --- 2. merge -----------------------------------------------------------------
const order = new Map(skeleton.topics.map((t, i) => [t.id, i]));
const topics = strandFiles.flatMap((f) => f.data.topics).sort((a, b) => order.get(a.id) - order.get(b.id));
const dependencies = strandFiles
  .flatMap((f) => f.data.dependencies)
  .sort((a, b) => order.get(a.topicId) - order.get(b.topicId) || order.get(a.prerequisiteId) - order.get(b.prerequisiteId));
const guidance = strandFiles.flatMap((f) => f.data.guidance).sort((a, b) => order.get(a.topicId) - order.get(b.topicId));
const domainOrder = new Map(skeleton.domains.map((d, i) => [d.code, i]));
const domains = strandFiles.flatMap((f) => f.data.domains).sort((a, b) => domainOrder.get(a.code) - domainOrder.get(b.code));

const ids = new Set(topics.map((t) => t.id));
for (const t of skeleton.topics) if (!ids.has(t.id)) problems.push(`skeleton topic ${t.id} has no authored record`);
for (const d of skeleton.domains) if (!domains.some((x) => x.code === d.code)) problems.push(`skeleton domain ${d.code} has no authored record`);
for (const d of dependencies) if (!ids.has(d.prerequisiteId)) problems.push(`edge ${d.topicId} <- ${d.prerequisiteId}: unknown prerequisite`);

const cycle = findDependencyCycle(dependencies);
if (cycle) problems.push(`dependency cycle: ${cycle.join(' -> ')}`);

if (problems.length) {
  console.error(`✗ build failed with ${problems.length} problem(s):`);
  for (const p of problems.slice(0, 200)) console.error(`  - ${p}`);
  if (problems.length > 200) console.error(`  …and ${problems.length - 200} more`);
  process.exit(1);
}

// --- 3. derived graph metrics -----------------------------------------------
// Counts use all edges. Depth, downstream reach and centrality use hard edges
// only: soft edges mean "usually taught first" and would otherwise turn
// orientation topics into spurious hubs (adversarial review R3-01).
const allPrereqs = new Map([...ids].map((id) => [id, []]));
const unlocks = new Map([...ids].map((id) => [id, []]));
const prereqs = new Map([...ids].map((id) => [id, []]));
const hardUnlocks = new Map([...ids].map((id) => [id, []]));
for (const d of dependencies) {
  allPrereqs.get(d.topicId).push(d.prerequisiteId);
  unlocks.get(d.prerequisiteId).push(d.topicId);
  if (d.strength === 'hard') {
    prereqs.get(d.topicId).push(d.prerequisiteId);
    hardUnlocks.get(d.prerequisiteId).push(d.topicId);
  }
}

// depth: length of the longest prerequisite chain below a topic (entry points = 0)
const depth = new Map();
const depthOf = (id) => {
  if (depth.has(id)) return depth.get(id);
  const ps = prereqs.get(id);
  const v = ps.length ? 1 + Math.max(...ps.map(depthOf)) : 0;
  depth.set(id, v);
  return v;
};
for (const id of ids) depthOf(id);

// transitive downstream reach: how many topics (directly or indirectly) depend on this one
const reach = new Map();
const reachOf = (id) => {
  if (reach.has(id)) return reach.get(id);
  const set = new Set();
  for (const u of hardUnlocks.get(id)) {
    set.add(u);
    for (const x of reachOf(u)) set.add(x);
  }
  reach.set(id, set);
  return set;
};
for (const id of ids) reachOf(id);

// centrality: PageRank over hard edges pointing from a topic to its prerequisites,
// so foundational topics that many others build on score highly. Normalised
// to a maximum of 1.
const N = ids.size;
const damping = 0.85;
let rank = new Map([...ids].map((id) => [id, 1 / N]));
for (let iter = 0; iter < 100; iter++) {
  const next = new Map([...ids].map((id) => [id, (1 - damping) / N]));
  let dangling = 0;
  for (const id of ids) {
    const ps = prereqs.get(id);
    if (ps.length === 0) dangling += rank.get(id);
    else for (const p of ps) next.set(p, next.get(p) + (damping * rank.get(id)) / ps.length);
  }
  for (const id of ids) next.set(id, next.get(id) + (damping * dangling) / N);
  rank = next;
}
const maxRank = Math.max(...rank.values());
const round = (x) => Math.round(x * 10000) / 10000;

const enriched = topics.map((t) => ({
  ...t,
  stages: STAGES.filter((s) => s in t.stageRoles),
  frameworks: t.frameworks ?? [],
  prerequisiteCount: allPrereqs.get(t.id).length,
  unlockCount: unlocks.get(t.id).length,
  downstreamCount: reach.get(t.id).size,
  depth: depth.get(t.id),
  centrality: round(rank.get(t.id) / maxRank),
}));

// --- 4. references: usage + verification -----------------------------------
const verificationPath = resolve(SRC, 'meta', 'reference-verification.txt');
const verification = new Map();
if (existsSync(verificationPath)) {
  for (const line of readFileSync(verificationPath, 'utf8').split('\n')) {
    if (!line.trim() || line.startsWith('#')) continue;
    const [key, status, note] = line.split(' | ').map((p) => p.trim());
    verification.set(key, { status, note: note || undefined });
  }
}
const usage = new Map(references.map((r) => [r.key, { topics: new Set(), guidance: new Set(), domains: new Set() }]));
for (const t of topics) for (const c of t.citations) usage.get(c).topics.add(t.id);
for (const g of guidance) {
  for (const c of g.citations) usage.get(c).guidance.add(g.topicId);
  for (const a of g.activities) for (const c of a.citations ?? []) usage.get(c).guidance.add(g.topicId);
}
for (const d of domains) for (const c of d.keyReferences ?? []) usage.get(c).domains.add(d.code);
const publishedRefs = references.map((r) => {
  const u = usage.get(r.key);
  const v = r.draft ? { status: 'unverified', note: 'Draft build: proposed reference awaiting verification.' } : verification.get(r.key) ?? { status: 'unverified' };
  delete r.draft;
  return {
    ...r,
    verification: v.status,
    ...(v.note ? { verificationNote: v.note } : {}),
    citedByTopics: [...u.topics].sort((a, b) => order.get(a) - order.get(b)),
    citedInGuidance: u.guidance.size,
    citedByDomains: [...u.domains],
  };
});

// --- 5. write ----------------------------------------------------------------
const write = (name, obj) => writeFileSync(resolve(DATA, name), JSON.stringify(obj, null, 2) + '\n');

const strandList = skeleton.strands.map((name) => ({
  name,
  domains: skeleton.domains.filter((d) => d.strand === name).map((d) => d.code),
}));

write('topics.json', { version: VERSION, topicCount: enriched.length, topics: enriched });
write('dependencies.json', {
  version: VERSION,
  note: '`topicId` depends on `prerequisiteId`. Directed edges of an acyclic graph; reverse an edge to read "unlocks".',
  edgeCount: dependencies.length,
  dependencies,
});
write('domains.json', { version: VERSION, strandCount: strandList.length, strands: strandList, domainCount: domains.length, domains });
const byStrand = {};
for (const t of topics) {
  byStrand[t.strand] ??= { topics: 0, withGuidance: 0 };
  byStrand[t.strand].topics++;
}
for (const g of guidance) byStrand[topics.find((t) => t.id === g.topicId).strand].withGuidance++;
write('teaching-guidance.json', {
  version: VERSION,
  recordCount: guidance.length,
  coverage: { topicCount: topics.length, withGuidance: guidance.length, byStrand },
  notes: [
    'Guidance records were drafted by AI agents working to AUTHORING.md, reviewed adversarially and revised; see reports/adversarial-review.md.',
    'Activities are research-informed proposals, not empirically validated interventions. A citation supports the rationale or principle, not necessarily the specific activity.',
    'Citation keys resolve in references.json, which records each reference’s verification status.',
  ],
  records: guidance,
});
write('references.json', {
  version: VERSION,
  referenceCount: publishedRefs.length,
  verificationStatuses: {
    'web-verified': 'Bibliographic details checked against an online record during authoring.',
    'curator-checked': 'Checked by the curator against their own knowledge of the work; not independently re-fetched.',
    unverified: 'Not yet checked. Treat details with caution.',
  },
  references: publishedRefs,
});
write('frameworks.json', {
  version: VERSION,
  note: 'Codes and titles only. No descriptor or band-descriptor text is reproduced. Topic links are mapping judgements, not coverage certifications.',
  sourceCount: frameworks.length,
  itemCount: frameworks.reduce((n, s) => n + s.items.length, 0),
  sources: frameworks,
});

const retired = JSON.parse(readFileSync(resolve(SRC, 'meta', 'retired-topics.json'), 'utf8'));
for (const [id, r] of Object.entries(retired)) if (!ids.has(r.replacedBy)) throw new Error(`retired ${id} points to unknown ${r.replacedBy}`);
write('retired-topics.json', {
  version: VERSION,
  note: 'Topic IDs retired by merge or rename. Map an old ID to replacedBy to find its current topic.',
  retiredCount: Object.keys(retired).length,
  retired,
});

const files = ['topics.json', 'dependencies.json', 'domains.json', 'teaching-guidance.json', 'references.json', 'frameworks.json', 'retired-topics.json'];
const sha = (name) => createHash('sha256').update(readFileSync(resolve(DATA, name))).digest('hex');
const countBy = (arr, f) => arr.reduce((acc, x) => ((acc[f(x)] = (acc[f(x)] ?? 0) + 1), acc), {});
const stageCounts = Object.fromEntries(
  STAGES.map((s) => [s, Object.fromEntries(['core', 'develop', 'revisit'].map((r) => [r, topics.filter((t) => t.stageRoles[s] === r).length]))]),
);
const manifest = {
  dataset: 'EAP Skill Taxonomy',
  taxonomyVersion: VERSION,
  releaseDate: RELEASE_DATE,
  counts: {
    strands: strandList.length,
    domains: domains.length,
    topics: topics.length,
    topicsByStrand: countBy(topics, (t) => t.strand),
    topicsByType: countBy(topics, (t) => t.type),
    topicsByStage: stageCounts,
    topicsBySpecificity: countBy(topics, (t) => t.specificity),
    topicsByAudience: countBy(topics, (t) => t.audience),
    topicsByDiscipline: countBy(topics.flatMap((t) => t.disciplines.map((d) => ({ d }))), (x) => x.d),
    retiredTopics: Object.keys(retired).length,
    dependencies: dependencies.length,
    hardDependencies: dependencies.filter((d) => d.strength === 'hard').length,
    crossStrandDependencies: dependencies.filter(
      (d) => topics.find((t) => t.id === d.topicId).strand !== topics.find((t) => t.id === d.prerequisiteId).strand,
    ).length,
    guidanceRecords: guidance.length,
    references: references.length,
    referencesCited: publishedRefs.filter((r) => r.citedByTopics.length || r.citedInGuidance || r.citedByDomains.length).length,
    frameworkItems: frameworks.reduce((n, s) => n + s.items.length, 0),
    topicFrameworkLinks: topics.reduce((n, t) => n + (t.frameworks?.length ?? 0), 0),
  },
  files: Object.fromEntries(files.map((f) => [f, { bytes: readFileSync(resolve(DATA, f)).length, sha256: sha(f) }])),
};
write('manifest.json', manifest);
console.log(
  `✓ built ${topics.length} topics, ${dependencies.length} edges (${manifest.counts.crossStrandDependencies} cross-strand), ` +
    `${guidance.length} guidance records, ${references.length} references → data/`,
);

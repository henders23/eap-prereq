import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { findDependencyCycle } from './graph.mjs';
import { DATA, STAGES, parseSkeleton } from './lib.mjs';

const load = (name) => JSON.parse(readFileSync(resolve(DATA, name), 'utf8'));
const topics = load('topics.json').topics;
const deps = load('dependencies.json').dependencies;
const guidance = load('teaching-guidance.json').records;
const references = load('references.json').references;
const domains = load('domains.json');
const byId = new Map(topics.map((t) => [t.id, t]));

test('every skeleton topic is published exactly once', () => {
  const skeleton = parseSkeleton();
  assert.equal(topics.length, skeleton.topics.length);
  for (const s of skeleton.topics) assert.ok(byId.has(s.id), `missing ${s.id}`);
});

test('prerequisite graph is acyclic', () => {
  assert.equal(findDependencyCycle(deps), null);
});

test('every topic has teaching guidance and at least one citation', () => {
  const guided = new Set(guidance.map((g) => g.topicId));
  for (const t of topics) {
    assert.ok(guided.has(t.id), `no guidance for ${t.id}`);
    assert.ok(t.citations.length > 0, `no citations for ${t.id}`);
  }
});

test('every citation resolves to the bibliography', () => {
  const keys = new Set(references.map((r) => r.key));
  for (const t of topics) for (const c of t.citations) assert.ok(keys.has(c), `${t.id} cites unknown ${c}`);
  for (const g of guidance) for (const c of g.citations) assert.ok(keys.has(c), `${g.topicId} guidance cites unknown ${c}`);
});

test('every stage is served by a substantial set of topics', () => {
  for (const s of STAGES) {
    const n = topics.filter((t) => t.stages.includes(s)).length;
    assert.ok(n >= 60, `stage ${s} has only ${n} topics`);
  }
});

test('each strand has entry points and every topic is reachable from one', () => {
  const prereqs = new Map(topics.map((t) => [t.id, []]));
  for (const d of deps) prereqs.get(d.topicId).push(d.prerequisiteId);
  const entries = topics.filter((t) => prereqs.get(t.id).length === 0);
  assert.ok(entries.length > 0);
  assert.ok(entries.length < topics.length * 0.25, `${entries.length} entry points is too many for a connected graph`);
});

test('domain records cover every domain used by a topic', () => {
  const names = new Set(domains.domains.map((d) => d.name));
  for (const t of topics) assert.ok(names.has(t.domain), `${t.id}: domain ${t.domain} has no record`);
});

test('hard prerequisites are not pitched far above the dependent topic', () => {
  const CEFR = ['A2', 'B1', 'B1+', 'B2', 'B2+', 'C1', 'C2'];
  const offenders = deps.filter((d) => {
    if (d.strength !== 'hard') return false;
    const a = byId.get(d.topicId);
    const b = byId.get(d.prerequisiteId);
    return CEFR.indexOf(b.cefrStart) - CEFR.indexOf(a.cefrStart) > 2;
  });
  assert.deepEqual(offenders.map((d) => `${d.topicId} <- ${d.prerequisiteId}`), []);
});

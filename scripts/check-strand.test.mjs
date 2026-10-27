import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkStrand } from './check-strand.mjs';

const skeleton = {
  domains: [{ code: 'AAA', name: 'Alpha', strand: 'S' }],
  topics: [
    { id: 'aaa.one', domainCode: 'AAA', strand: 'S', domain: 'Alpha' },
    { id: 'aaa.two', domainCode: 'AAA', strand: 'S', domain: 'Alpha' },
  ],
};
const ctx = { skeleton, refKeys: new Set(['ref1']), frameworkKeys: new Set(['fw:x']) };

const topic = (id) => ({
  id,
  type: 'PROCEDURAL',
  strand: 'S',
  domain: 'Alpha',
  name: 'N',
  description: 'D',
  cefrStart: 'B1',
  cefrEnd: 'B2',
  coreBand: 'B1+',
  stageRoles: { 'pre-sessional-ug': 'core' },
  specificity: 'EGAP',
  disciplines: [],
  audience: 'learner',
  masteryEvidence: ['a', 'b', 'c'],
  assessmentPrompt: 'P',
  citations: ['ref1'],
  frameworks: [{ key: 'fw:x', contribution: 'core' }],
});
const guide = (topicId, reteach = null) => ({
  topicId,
  summary: 'S',
  activities: [{ title: 'T', learnerActions: ['a', 'b'], intendedInsight: 'I', rationale: 'R', citations: [] }],
  difficulties: [
    { pattern: 'p', kind: 'developmental', revealedBy: 'r', response: 'x', reteachPrerequisiteId: reteach },
    { pattern: 'p', kind: 'affective', revealedBy: 'r', response: 'x', reteachPrerequisiteId: null },
  ],
  diagnostic: { task: 't', strongResponse: 's', partialResponse: 'p', gapResponse: 'g' },
  contextNotes: 'c',
  citations: ['ref1'],
  reviewNotes: [],
});
const valid = () => ({
  group: 'g',
  domains: [{ code: 'AAA', strand: 'S', name: 'Alpha', summary: 's', learnerSummary: 'l', stageEmphasis: {} }],
  topics: [topic('aaa.one'), topic('aaa.two')],
  dependencies: [{ topicId: 'aaa.two', prerequisiteId: 'aaa.one', strength: 'hard', reason: 'r' }],
  guidance: [guide('aaa.one'), guide('aaa.two', 'aaa.one')],
});

test('a valid strand passes', () => {
  assert.deepEqual(checkStrand(valid(), ctx).errors, []);
});

test('flags unknown citations, missing topics and bad levels', () => {
  const d = valid();
  d.topics[0].citations = ['nope'];
  d.topics[0].cefrStart = 'C2';
  d.topics.pop();
  const errors = checkStrand(d, ctx).errors.join('\n');
  assert.match(errors, /unknown reference nope/);
  assert.match(errors, /cefrStart after cefrEnd/);
  assert.match(errors, /missing topic aaa.two/);
});

test('reteach target must be a declared prerequisite', () => {
  const d = valid();
  d.guidance[0].difficulties[0].reteachPrerequisiteId = 'aaa.two';
  assert.match(checkStrand(d, ctx).errors.join('\n'), /must be a declared prerequisite/);
});

test('detects a cycle inside one file', () => {
  const d = valid();
  d.dependencies.push({ topicId: 'aaa.one', prerequisiteId: 'aaa.two', strength: 'soft', reason: 'r' });
  assert.match(checkStrand(d, ctx).errors.join('\n'), /cycle/);
});

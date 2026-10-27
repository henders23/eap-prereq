import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findDependencyCycle, findRedundantEdges } from './graph.mjs';

const e = (topicId, prerequisiteId) => ({ topicId, prerequisiteId, strength: 'hard', reason: 'r' });

test('acyclic graph has no cycle', () => {
  assert.equal(findDependencyCycle([e('a', 'b'), e('b', 'c'), e('a', 'c')]), null);
});

test('detects a direct cycle', () => {
  const cycle = findDependencyCycle([e('a', 'b'), e('b', 'a')]);
  assert.ok(cycle);
  assert.equal(cycle[0], cycle[cycle.length - 1]);
});

test('detects a long cycle and reports its members', () => {
  const cycle = findDependencyCycle([e('a', 'b'), e('b', 'c'), e('c', 'd'), e('d', 'b')]);
  assert.deepEqual(new Set(cycle), new Set(['b', 'c', 'd']));
});

test('handles deep chains without stack overflow', () => {
  const edges = Array.from({ length: 20000 }, (_, i) => e(`n${i}`, `n${i + 1}`));
  assert.equal(findDependencyCycle(edges), null);
});

test('finds edges implied by a longer path', () => {
  const redundant = findRedundantEdges([e('a', 'b'), e('b', 'c'), e('a', 'c')]);
  assert.deepEqual(redundant.map((d) => `${d.topicId}>${d.prerequisiteId}`), ['a>c']);
});

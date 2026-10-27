#!/usr/bin/env node
/**
 * check-graph.mjs — cross-file checks while strands are being revised:
 * unknown prerequisite IDs (against the skeleton), cycles across all strand
 * files, and per-stage core counts.
 */
import { STAGES, loadStrandFiles, parseSkeleton } from '../../scripts/lib.mjs';
import { findDependencyCycle } from '../../scripts/graph.mjs';

const files = loadStrandFiles();
const skeleton = new Set(parseSkeleton().topics.map((t) => t.id));
const deps = files.flatMap((f) => f.data.dependencies);
let bad = 0;
for (const d of deps) if (!skeleton.has(d.prerequisiteId) || !skeleton.has(d.topicId)) { console.log(`unknown id in edge ${d.topicId} <- ${d.prerequisiteId}`); bad++; }
const cycle = findDependencyCycle(deps);
if (cycle) { console.log(`cycle: ${cycle.join(' -> ')}`); bad++; }
const topics = files.flatMap((f) => f.data.topics);
const core = Object.fromEntries(STAGES.map((s) => [s, topics.filter((t) => t.stageRoles?.[s] === 'core').length]));
console.log(`topics authored: ${topics.length}/${skeleton.size}; core per stage: ${JSON.stringify(core)}`);
process.exit(bad ? 1 : 0);

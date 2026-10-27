#!/usr/bin/env node
/**
 * merge-parts.mjs — combine per-domain authoring parts into one strand file
 * and validate it.
 *
 *   node scripts/merge-parts.mjs 01-vocabulary
 *
 * Reads authoring/parts/<name>/*.json (each with any of: domains, topics,
 * dependencies, guidance, proposedReferences, authorNotes) and writes
 * src/strands/<name>.json, then runs check-strand on it.
 */

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT } from './lib.mjs';

const name = process.argv[2];
if (!name) {
  console.error('usage: node scripts/merge-parts.mjs <group-name>');
  process.exit(2);
}
const dir = resolve(ROOT, 'authoring', 'parts', name);
const out = { group: name, domains: [], topics: [], dependencies: [], guidance: [], proposedReferences: [], authorNotes: [] };
for (const f of readdirSync(dir).filter((f) => f.endsWith('.json')).sort()) {
  let part;
  try {
    part = JSON.parse(readFileSync(resolve(dir, f), 'utf8'));
  } catch (e) {
    console.error(`✗ ${f}: invalid JSON — ${e.message}`);
    process.exit(1);
  }
  for (const k of Object.keys(out)) if (k !== 'group' && Array.isArray(part[k])) out[k].push(...part[k]);
}
const target = resolve(ROOT, 'src', 'strands', `${name}.json`);
writeFileSync(target, JSON.stringify(out, null, 2) + '\n');
console.log(`wrote ${target}`);
try {
  execFileSync(process.execPath, [resolve(ROOT, 'scripts', 'check-strand.mjs'), target], { stdio: 'inherit' });
} catch {
  process.exit(1);
}

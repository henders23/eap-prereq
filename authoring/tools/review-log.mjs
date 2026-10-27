#!/usr/bin/env node
/**
 * review-log.mjs — generate the disposition table in
 * reports/adversarial-review.md from the reviewers' JSON findings, the
 * applied-change logs, the curator's structural decisions and the strand
 * authors' "Review response:" notes. The narrative header lives in
 * authoring/revision/review-log-header.md.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT } from '../../scripts/lib.mjs';

const R = resolve(ROOT, 'reports', 'review');
const reviews = readdirSync(R).filter((f) => f.endsWith('.json')).sort();
const read = (p) => JSON.parse(readFileSync(resolve(ROOT, p), 'utf8'));
const appliedLines = [
  ...read('authoring/revision/phase-a.log.json').applied,
  ...read('authoring/revision/cross-edges.log.json').applied,
];
const appliedCount = new Map();
for (const l of appliedLines) {
  const id = l.split(':')[0];
  appliedCount.set(id, (appliedCount.get(id) ?? 0) + 1);
}
const guidance = read('data/teaching-guidance.json').records;
const responses = new Map();
for (const g of guidance) {
  for (const n of g.reviewNotes) {
    if (!n.startsWith('Review response')) continue;
    for (const id of n.match(/R\d-\d+/g) ?? []) (responses.get(id) ?? responses.set(id, new Set()).get(id)).add(g.topicId);
  }
}
const retired = read('src/meta/retired-topics.json');
const mergedBy = new Map();
for (const r of Object.values(retired)) {
  const m = r.reason.match(/R\d-\d+/);
  if (m) mergedBy.set(m[0], (mergedBy.get(m[0]) ?? 0) + 1);
}
const decisions = read('authoring/revision/curator-decisions.json');

const short = (s) => {
  const first = s.split(/(?<=[.!?])\s/)[0];
  return (first.length > 170 ? first.slice(0, 167) + '…' : first).replace(/\|/g, '\\|');
};
const lines = [readFileSync(resolve(ROOT, 'authoring', 'revision', 'review-log-header.md'), 'utf8'), '## Disposition of every finding', ''];
lines.push(
  'Statuses: **Applied** means the reviewer\'s checked changes were applied mechanically (count in brackets). **Structural** means the curator implemented it as a schema, merge or strand change. **Revised** means a strand author addressed it in the revision pass. **Response** means the author recorded a reasoned partial or full decline in the named topics\' `reviewNotes`. **Declined** or **Deferred** decisions by the curator give the reason.',
  '',
);
for (const f of reviews) {
  const findings = JSON.parse(readFileSync(resolve(R, f), 'utf8'));
  lines.push(`### ${f.replace('.json', '')}`, '', '| ID | Severity | Finding | Disposition |', '|---|---|---|---|');
  for (const x of findings) {
    const parts = [];
    if (decisions[x.id]) parts.push(decisions[x.id]);
    if (appliedCount.get(x.id)) parts.push(`Applied (${appliedCount.get(x.id)})`);
    if (mergedBy.get(x.id)) parts.push(`Structural: ${mergedBy.get(x.id)} merge(s)/rename(s)`);
    if (responses.get(x.id)) parts.push(`Response in ${[...responses.get(x.id)].slice(0, 4).map((t) => `\`${t}\``).join(', ')}${responses.get(x.id).size > 4 ? ', …' : ''}`);
    if (!parts.length) parts.push('Revised in strand pass');
    lines.push(`| ${x.id} | ${x.severity} | ${short(x.finding)} | ${parts.join('; ')} |`);
  }
  lines.push('');
}
writeFileSync(resolve(ROOT, 'reports', 'adversarial-review.md'), lines.join('\n'));
console.log('wrote reports/adversarial-review.md');

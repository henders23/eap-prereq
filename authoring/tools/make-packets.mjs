#!/usr/bin/env node
/** Build one revision packet per strand group from the review findings. */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, loadStrandFiles } from '../../scripts/lib.mjs';

const R = resolve(ROOT, 'reports', 'review');
const reviews = readdirSync(R).filter((f) => f.endsWith('.json'));
const findings = reviews.flatMap((f) => JSON.parse(readFileSync(resolve(R, f), 'utf8')));
const applied = JSON.parse(readFileSync(resolve(ROOT, 'authoring', 'revision', 'phase-a.log.json'), 'utf8'));
const appliedBy = new Map();
for (const line of applied.applied) {
  const [id, msg] = line.split(/: (.*)/s);
  (appliedBy.get(id) ?? appliedBy.set(id, []).get(id)).push(msg);
}
const retired = JSON.parse(readFileSync(resolve(ROOT, 'src', 'meta', 'retired-topics.json'), 'utf8'));
const newTopics = JSON.parse(readFileSync(resolve(ROOT, 'authoring', 'revision', 'new-topics.json'), 'utf8'));
const absorbedDir = resolve(ROOT, 'authoring', 'revision', 'absorbed');
const absorbed = readdirSync(absorbedDir).map((f) => JSON.parse(readFileSync(resolve(absorbedDir, f), 'utf8')));

for (const { file, data } of loadStrandFiles()) {
  const group = file.replace('.json', '');
  const codes = new Set(data.domains.map((d) => d.code.toLowerCase()));
  const mine = (id) => codes.has(id.split('.')[0]);
  const relevant = findings.filter((f) => {
    const ids = [...(f.topicIds ?? []), ...(f.proposedChanges ?? []).flatMap((c) => [c.topicId, c.prerequisiteId, c.id, c.keep, ...(c.absorb ?? []), ...(c.topicIds ?? []), c.domainCode?.toLowerCase() + '.'])].filter(Boolean);
    return ids.some((id) => mine(id) || mine(retired[id]?.replacedBy ?? ''));
  });
  const lines = [`# Revision packet: ${group}`, '', `Domains: ${data.domains.map((d) => `${d.code} (${d.name})`).join(', ')}`, ''];
  const news = newTopics.filter((n) => mine(n.id));
  lines.push('## New topics to author', '');
  if (!news.length) lines.push('None.', '');
  for (const n of news) lines.push(`- \`${n.id}\` | ${n.type} | **${n.name}** — ${n.scope} (from ${n.source})`);
  lines.push('');
  const abs = absorbed.filter((a) => mine(a.mergedInto) || mine(a.topic.id));
  lines.push('## Merges affecting your domains', '');
  if (!abs.length) lines.push('None.', '');
  for (const a of abs) {
    lines.push(`- \`${a.topic.id}\` was merged into \`${a.mergedInto}\` (${a.finding}). The absorbed record is in authoring/revision/absorbed/${a.topic.id}.json. ${mine(a.mergedInto) ? 'You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.' : 'The survivor belongs to another group; no action needed except updating any references in your text.'}`);
  }
  lines.push('', '## Review findings touching your domains', '', 'Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic\'s guidance reviewNotes (prefix "Review response:").', '');
  for (const f of relevant) {
    lines.push(`### ${f.id} (${f.severity}, ${f.category})`, '', `Topics: ${(f.topicIds ?? []).join(', ') || '—'}`, '', `**Finding.** ${f.finding}`, '', `**Recommendation.** ${f.recommendation}`, '');
    const ap = appliedBy.get(f.id);
    if (ap?.length) lines.push(`Already applied: ${ap.length} change(s) — ${ap.slice(0, 8).join('; ')}${ap.length > 8 ? '; …' : ''}`, '');
    const pending = (f.proposedChanges ?? []).filter((c) => !['edge-remove', 'edge-add', 'edge-strength', 'edge-reverse', 'set-cefr', 'edit-field', 'framework-add', 'framework-remove', 'remove-citation'].includes(c.kind) || (f.id.startsWith('R1') && c.kind === 'retag-stages'));
    if (pending.length) lines.push('Not applied mechanically (handle editorially if it concerns your topics):', '', ...pending.map((c) => `- ${JSON.stringify(c)}`), '');
  }
  writeFileSync(resolve(ROOT, 'authoring', 'revision', 'packets', `${group}.md`), lines.join('\n'));
  console.log(group, 'findings', relevant.length, 'new', news.length, 'merges', abs.length);
}

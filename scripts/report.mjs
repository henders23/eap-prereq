#!/usr/bin/env node
/**
 * report.mjs — generate human-readable reports from data/.
 *
 *   node scripts/report.mjs
 *
 * Writes:
 *   reports/coverage.md         counts, graph shape, framework and reference coverage
 *   reports/stage-pathways.md   per-stage topic sequences in prerequisite order
 *   reports/catalogue.md        every topic with its description, level, stages and prerequisites
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CEFR, DATA, ROOT, STAGES } from './lib.mjs';

const load = (name) => JSON.parse(readFileSync(resolve(DATA, name), 'utf8'));
const topics = load('topics.json').topics;
const deps = load('dependencies.json').dependencies;
const domainsFile = load('domains.json');
const references = load('references.json').references;
const frameworks = load('frameworks.json').sources;
const manifest = load('manifest.json');

const byId = new Map(topics.map((t) => [t.id, t]));
const prereqs = new Map(topics.map((t) => [t.id, []]));
for (const d of deps) prereqs.get(d.topicId).push(d);

const STAGE_LABEL = {
  foundation: 'Foundation / pathway',
  'pre-sessional': 'Pre-sessional',
  'in-sessional-ug': 'In-sessional (undergraduate)',
  'in-sessional-pgt': 'In-sessional (taught postgraduate)',
  pgr: 'Postgraduate research',
};
const table = (head, rows) => [`| ${head.join(' | ')} |`, `|${head.map((h, i) => (i === 0 ? '---' : '---:')).join('|')}|`, ...rows.map((r) => `| ${r.join(' | ')} |`)].join('\n');
const anchor = (id) => id.replace(/\./g, '');

/** Topological order (prerequisites first), ties broken by skeleton order. */
function topoOrder(ids) {
  const set = new Set(ids);
  const order = new Map(topics.map((t, i) => [t.id, i]));
  const indeg = new Map(ids.map((id) => [id, 0]));
  const out = new Map(ids.map((id) => [id, []]));
  for (const d of deps) {
    if (set.has(d.topicId) && set.has(d.prerequisiteId)) {
      indeg.set(d.topicId, indeg.get(d.topicId) + 1);
      out.get(d.prerequisiteId).push(d.topicId);
    }
  }
  const ready = ids.filter((id) => indeg.get(id) === 0).sort((a, b) => order.get(a) - order.get(b));
  const result = [];
  while (ready.length) {
    const id = ready.shift();
    result.push(id);
    for (const n of out.get(id)) {
      indeg.set(n, indeg.get(n) - 1);
      if (indeg.get(n) === 0) {
        ready.push(n);
        ready.sort((a, b) => order.get(a) - order.get(b));
      }
    }
  }
  return result;
}

// --- coverage.md -------------------------------------------------------------
{
  const c = manifest.counts;
  const lines = [];
  lines.push('# Coverage report', '', `Generated from \`data/\` (taxonomy ${manifest.taxonomyVersion}, release ${manifest.releaseDate}). Regenerate with \`node scripts/report.mjs\`.`, '');
  lines.push('## Totals', '');
  lines.push(
    table(
      ['Measure', 'Count'],
      [
        ['Strands', c.strands],
        ['Domains', c.domains],
        ['Topics', c.topics],
        ['Prerequisite edges', c.dependencies],
        ['…of which hard', c.hardDependencies],
        ['…of which cross-strand', c.crossStrandDependencies],
        ['Teaching-guidance records', c.guidanceRecords],
        ['References in bibliography', c.references],
        ['References cited', c.referencesCited],
        ['Framework items', c.frameworkItems],
        ['Topic–framework links', c.topicFrameworkLinks],
      ],
    ),
    '',
  );

  lines.push('## Topics by strand and domain', '');
  const rows = [];
  for (const s of domainsFile.strands) {
    for (const code of s.domains) {
      const d = domainsFile.domains.find((x) => x.code === code);
      const ts = topics.filter((t) => t.domain === d.name);
      rows.push([s.name, `${d.name} (\`${code}\`)`, ts.length, ts.filter((t) => t.specificity === 'ESAP').length]);
    }
  }
  lines.push(table(['Strand', 'Domain', 'Topics', 'ESAP'], rows).replace('|---:|---:|---:|', '|---|---:|---:|'), '');

  lines.push('## Topics by type', '');
  lines.push(table(['Type', 'Topics'], Object.entries(c.topicsByType).sort((a, b) => b[1] - a[1])), '');

  lines.push('## Topics by stage', '', 'A topic counts towards every stage at which it is taught or revisited.', '');
  lines.push(table(['Stage', 'Topics'], STAGES.map((s) => [STAGE_LABEL[s], c.topicsByStage[s]])), '');

  lines.push('## Entry level (cefrStart)', '');
  lines.push(table(['CEFR', 'Topics starting here'], CEFR.map((l) => [l, topics.filter((t) => t.cefrStart === l).length])), '');

  lines.push('## Graph shape', '');
  const entries = topics.filter((t) => t.prerequisiteCount === 0);
  const maxDepth = Math.max(...topics.map((t) => t.depth));
  lines.push(`- Entry points (no prerequisites): **${entries.length}**`);
  lines.push(`- Longest prerequisite chain: **${maxDepth + 1} topics**`);
  lines.push(`- Mean prerequisites per topic: **${(deps.length / topics.length).toFixed(2)}**`, '');
  lines.push('### Most central topics', '', 'PageRank over prerequisite edges: foundational topics that much of the taxonomy builds on.', '');
  lines.push(
    table(
      ['Topic', 'Strand', 'Centrality', 'Topics building on it'],
      [...topics].sort((a, b) => b.centrality - a.centrality).slice(0, 25).map((t) => [`${t.name} (\`${t.id}\`)`, t.strand, t.centrality.toFixed(3), t.downstreamCount]),
    ).replace('|---:|---:|---:|', '|---|---:|---:|'),
    '',
  );
  lines.push('### Deepest topics', '', 'Topics at the end of the longest prerequisite chains, typically integrated genres and research communication.', '');
  lines.push(table(['Topic', 'Depth'], [...topics].sort((a, b) => b.depth - a.depth).slice(0, 15).map((t) => [`${t.name} (\`${t.id}\`)`, t.depth])), '');
  lines.push('### Entry points', '');
  lines.push(entries.map((t) => `\`${t.id}\``).join(', '), '');

  lines.push('## Framework alignment', '', 'Links are mapping judgements (core / component / related), not coverage certifications.', '');
  const linkCount = new Map();
  for (const t of topics) for (const f of t.frameworks) linkCount.set(f.key, (linkCount.get(f.key) ?? 0) + 1);
  for (const s of frameworks) {
    const linked = s.items.filter((i) => linkCount.has(i.key));
    lines.push(`### ${s.name}`, '', `${linked.length} of ${s.items.length} items linked.`, '');
    lines.push(table(['Item', 'Topics'], s.items.map((i) => [`${i.title} (\`${i.key}\`)`, linkCount.get(i.key) ?? 0])), '');
  }

  lines.push('## Bibliography usage', '');
  const ver = references.reduce((acc, r) => ((acc[r.verification] = (acc[r.verification] ?? 0) + 1), acc), {});
  lines.push(table(['Verification status', 'References'], Object.entries(ver)), '');
  const top = [...references].sort((a, b) => b.citedByTopics.length - a.citedByTopics.length).slice(0, 20);
  lines.push('### Most-cited works (by topics)', '');
  lines.push(table(['Reference', 'Topics'], top.map((r) => [r.citation.replace(/\|/g, '\\|'), r.citedByTopics.length])).replace('|---:|', '|---:|'), '');
  const unused = references.filter((r) => !r.citedByTopics.length && !r.citedInGuidance && !r.citedByDomains.length);
  lines.push(`Uncited references: ${unused.length ? unused.map((r) => `\`${r.key}\``).join(', ') : 'none'}.`, '');
  writeFileSync(resolve(ROOT, 'reports', 'coverage.md'), lines.join('\n'));
}

// --- stage-pathways.md -----------------------------------------------------------
{
  const lines = ['# Stage pathways', '', 'For each stage, the topics taught there, grouped by strand and listed in prerequisite order: earlier items are prerequisites of, or independent of, later ones. Use these as a starting point for syllabus design, not a fixed sequence. Prerequisites from other stages are shown as *assumed*.', ''];
  for (const s of STAGES) {
    const ids = topics.filter((t) => t.stages.includes(s)).map((t) => t.id);
    const set = new Set(ids);
    lines.push(`## ${STAGE_LABEL[s]}`, '', `${ids.length} topics.`, '');
    for (const strand of domainsFile.strands) {
      const inStrand = topoOrder(ids.filter((id) => byId.get(id).strand === strand.name));
      if (!inStrand.length) continue;
      lines.push(`### ${strand.name}`, '');
      for (const id of inStrand) {
        const t = byId.get(id);
        const assumed = prereqs.get(id).filter((d) => !set.has(d.prerequisiteId) && d.strength === 'hard').map((d) => `\`${d.prerequisiteId}\``);
        lines.push(`- **${t.name}** (\`${id}\`, ${t.cefrStart}–${t.cefrEnd})${assumed.length ? ` — *assumed:* ${assumed.join(', ')}` : ''}`);
      }
      lines.push('');
    }
  }
  writeFileSync(resolve(ROOT, 'reports', 'stage-pathways.md'), lines.join('\n'));
}

// --- catalogue.md --------------------------------------------------------------------
{
  const lines = ['# Topic catalogue', '', `All ${topics.length} topics, grouped by strand and domain. Full records, including mastery evidence, assessment prompts and teaching guidance, are in \`data/\`.`, ''];
  for (const strand of domainsFile.strands) {
    lines.push(`## ${strand.name}`, '');
    for (const code of strand.domains) {
      const d = domainsFile.domains.find((x) => x.code === code);
      lines.push(`### ${d.name}`, '', d.summary, '');
      for (const t of topics.filter((x) => x.domain === d.name)) {
        lines.push(`<a id="${anchor(t.id)}"></a>`);
        lines.push(`#### ${t.name}`, '');
        lines.push(`\`${t.id}\` · ${t.type} · ${t.cefrStart}–${t.cefrEnd} · ${t.stages.join(', ')} · ${t.specificity}`, '');
        lines.push(t.description, '');
        const ps = prereqs.get(t.id);
        if (ps.length) lines.push(`Prerequisites: ${ps.map((p) => `[${byId.get(p.prerequisiteId).name}](#${anchor(p.prerequisiteId)})${p.strength === 'soft' ? ' (soft)' : ''}`).join(', ')}`, '');
      }
    }
  }
  writeFileSync(resolve(ROOT, 'reports', 'catalogue.md'), lines.join('\n'));
}
console.log('✓ wrote reports/coverage.md, reports/stage-pathways.md, reports/catalogue.md');

/**
 * lib.mjs — shared parsers and constants for the EAP Skill Taxonomy tooling.
 * Dependency-free (Node >= 20).
 */

import { readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const SRC = resolve(ROOT, 'src');
export const DATA = resolve(ROOT, 'data');

export const TYPES = ['CONCEPTUAL', 'PROCEDURAL', 'LINGUISTIC', 'GENRE', 'STRATEGIC', 'SOCIOPRAGMATIC'];
export const CEFR = ['A2', 'A2+', 'B1', 'B1+', 'B2', 'B2+', 'C1', 'C2'];
export const STAGES = ['foundation', 'pre-sessional-ug', 'pre-sessional-pg', 'in-sessional-ug', 'in-sessional-pgt', 'pgr'];
export const STAGE_ROLES = ['core', 'develop', 'revisit'];
/** Typical entry band per stage, used to flag 'core' roles for topics learners should already control. */
export const STAGE_ENTRY_BAND = {
  foundation: 'A2+',
  'pre-sessional-ug': 'B1',
  'pre-sessional-pg': 'B1+',
  'in-sessional-ug': 'B2',
  'in-sessional-pgt': 'B2+',
  pgr: 'C1',
};
export const AUDIENCES = ['learner', 'teacher', 'both'];
export const DISCIPLINES = [
  'sciences',
  'engineering',
  'computing',
  'mathematics-statistics',
  'health-medicine',
  'business-management',
  'finance-accounting',
  'economics',
  'law',
  'social-sciences',
  'psychology',
  'education',
  'humanities',
  'arts-design',
  'media-communication',
];
export const SPECIFICITY = ['EGAP', 'ESAP'];
export const CONTRIBUTIONS = ['core', 'component', 'related'];
export const DIFFICULTY_KINDS = [
  'L1-transfer',
  'developmental',
  'conceptual',
  'prior-schooling',
  'overgeneralisation',
  'performance',
  'affective',
  'institutional',
];
export const ID_PATTERN = /^[a-z]{3}\.[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const cefrIndex = (level) => CEFR.indexOf(level);

const lines = (text) =>
  text
    .split('\n')
    .map((l) => l.trimEnd())
    .filter((l) => l.trim() && !l.trimStart().startsWith('#'));

/** Parse authoring/skeleton.txt into strands, domains and topic stubs. */
export function parseSkeleton(path = resolve(ROOT, 'authoring', 'skeleton.txt')) {
  const text = readFileSync(path, 'utf8');
  const strands = [];
  const domains = [];
  const topics = [];
  let strand = null;
  let domain = null;
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line || (line.startsWith('#') && !line.startsWith('##'))) continue;
    let m;
    if ((m = line.match(/^## STRAND: (.+)$/))) {
      strand = m[1].trim();
      strands.push(strand);
      continue;
    }
    if ((m = line.match(/^### DOMAIN ([A-Z]{3}): (.+)$/))) {
      domain = { code: m[1], name: m[2].trim(), strand };
      domains.push(domain);
      continue;
    }
    const parts = line.split('|').map((p) => p.trim());
    if (parts.length === 4) {
      const [id, type, name, scope] = parts;
      topics.push({ id, type, name, scope, strand, domain: domain.name, domainCode: domain.code });
    }
  }
  return { strands, domains, topics };
}

/** Parse src/meta/references.txt. */
export function parseReferences(path = resolve(SRC, 'meta', 'references.txt')) {
  const refs = [];
  for (const line of lines(readFileSync(path, 'utf8'))) {
    // A line ending in a bare ' |' has an empty DOI column.
    const [key, kind, citation, doi] = line.split(/ \|(?: |$)/).map((p) => (p ?? '').trim());
    const year = Number((citation.match(/\((\d{4})/) ?? [])[1]) || null;
    const ref = { key, kind, year, citation };
    if (doi) ref.doi = doi;
    refs.push(ref);
  }
  return refs;
}

/** Parse src/meta/frameworks.txt. */
export function parseFrameworks(path = resolve(SRC, 'meta', 'frameworks.txt')) {
  const sources = [];
  let current = null;
  for (const line of lines(readFileSync(path, 'utf8'))) {
    if (line.startsWith('@source ')) {
      const [slug, name, publisher, version, url, idPolicy] = line
        .slice('@source '.length)
        .split(' | ')
        .map((p) => p.trim());
      current = { slug, name, publisher, version, url, idPolicy, items: [] };
      sources.push(current);
      continue;
    }
    const [code, title, group] = line.split(' | ').map((p) => p.trim());
    current.items.push({ key: `${current.slug}:${code}`, code, title, group });
  }
  return sources;
}

/** Load every authored strand file in src/strands. */
export function loadStrandFiles(dir = resolve(SRC, 'strands')) {
  return readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => ({ file: f, data: JSON.parse(readFileSync(resolve(dir, f), 'utf8')) }));
}

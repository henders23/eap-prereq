#!/usr/bin/env node
/**
 * merge-proposed.mjs — move verified proposed references into
 * src/meta/references.txt, apply verifier corrections, record verification
 * status in src/meta/reference-verification.txt and strip proposedReferences
 * from the strand files. One-off authoring step; kept for provenance.
 */
import { readFileSync, writeFileSync, appendFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, SRC, loadStrandFiles } from '../../scripts/lib.mjs';

const V = resolve(ROOT, 'authoring', 'verification');
const parseLines = (f) => readFileSync(resolve(V, f), 'utf8').split('\n').filter((l) => l.includes(' | '));
const proposed = new Map(parseLines('proposed.txt').map((l) => { const [key, apa, doi] = l.split(' | '); return [key.trim(), { apa: apa.trim(), doi: (doi ?? '').trim() }]; }));
const verdicts = new Map();
for (const f of ['proposed-A.txt', 'proposed-B.txt']) for (const l of parseLines(f)) {
  const [key, status, ...rest] = l.split(' | ');
  verdicts.set(key.trim(), { status: status.trim(), note: rest.join(' | ').trim() });
}
const kindOf = (apa) => (/https?:\/\//.test(apa) && !/\*\d/.test(apa) ? 'web' : / In [^.]*\(Eds?\.\)/.test(apa) ? 'chapter' : /\*[^*]+,\s*\d+\*/.test(apa) || /\*\d+\*/.test(apa) ? 'article' : 'book');
const out = ['', '# --- Added during authoring; proposed by strand authors and verified by web search ---'];
const ver = [];
let added = 0;
for (const [key, p] of proposed) {
  const v = verdicts.get(key);
  if (!v || v.status === 'not-found' || v.status === 'unchecked') { console.log('SKIP', key, v?.status); continue; }
  let { apa, doi } = p;
  if (v.status === 'corrected') {
    const m = v.note.match(/CORRECTED:\s*(.+?)\s*\|\|\s*DOI:\s*(\S+)/);
    if (!m) { console.log('UNPARSED', key); continue; }
    apa = m[1].trim();
    doi = m[2] === 'none' ? '' : m[2].replace(/[.;,]$/, '');
  } else if (v.status === 'doi-doubtful') {
    doi = '';
  } else if (!doi) {
    const m = v.note.match(/DOI (10\.\d{4,}\/[^\s;,]+?)[.)]?(\s|$)/);
    if (m) doi = m[1];
  }
  out.push(`${key} | ${kindOf(apa)} | ${apa} | ${doi}`);
  ver.push(`${key} | web-verified | ${v.status === 'corrected' ? 'Details corrected during verification.' : v.status === 'doi-doubtful' ? 'DOI could not be confirmed and was omitted.' : ''}`);
  added++;
}
appendFileSync(resolve(SRC, 'meta', 'references.txt'), out.join('\n') + '\n');
// verification records for the original bibliography
for (const f of ['batch-1.txt', 'batch-2.txt', 'batch-3.txt']) for (const l of parseLines(f)) {
  const [key, status, ...rest] = l.split(' | ');
  const s = status?.trim();
  if (s === 'web-verified') ver.push(`${key.trim()} | web-verified | `);
  else if (s === 'doi-doubtful') ver.push(`${key.trim()} | web-verified | Work confirmed; DOI not confirmed by the verifier.`);
}
const header = '# Reference verification status: key | status | note\n# status: web-verified | curator-checked | unverified (default when absent)\n';
const path = resolve(SRC, 'meta', 'reference-verification.txt');
const existing = existsSync(path) ? readFileSync(path, 'utf8') : header;
writeFileSync(path, existing + ver.join('\n') + '\n');
for (const { file, data } of loadStrandFiles()) {
  delete data.proposedReferences;
  writeFileSync(resolve(SRC, 'strands', file), JSON.stringify(data, null, 2) + '\n');
}
console.log('added', added, 'verification lines', ver.length);

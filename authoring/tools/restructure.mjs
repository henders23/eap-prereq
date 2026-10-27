#!/usr/bin/env node
/**
 * restructure.mjs — structural revision after adversarial review (phase B).
 *
 * Applies topic merges and renames to the strand files (retargeting edges,
 * reteach targets and framework links), moves domains between strands,
 * renames strands, adds new topic stubs to the skeleton, and records retired
 * IDs in src/meta/retired-topics.json. Absorbed records are saved under
 * authoring/revision/absorbed/ so that survivors can be rewritten to cover
 * the merged scope.
 *
 *   node authoring/tools/restructure.mjs
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, SRC, loadStrandFiles } from '../../scripts/lib.mjs';
import { findDependencyCycle } from '../../scripts/graph.mjs';

// --- decisions ---------------------------------------------------------------
const RENAMES = [
  ['ges.explanation-essay', 'ges.expository-essays', 'R1-16: pattern essays consolidated into one expository-essay genre'],
  ['sen.apostrophes-hyphens-dashes', 'sen.punctuation-mechanics', 'R1-19: punctuation mechanics consolidated'],
  ['prg.acknowledgements', 'res.acknowledgements', 'R1-33: acknowledgements are a thesis/article part-genre'],
];
const MERGES = [
  ['exm.question-analysis', 'wpr.task-analysis', 'R1-13'],
  ['ess.answering-question', 'wpr.task-analysis', 'R1-13'],
  ['rdc.reading-for-writing', 'wpr.reading-to-write', 'R1-14'],
  ['tst.integrated-test-tasks', 'syn.integrated-tasks', 'R1-14'],
  ['src.source-functions', 'cit.citation-functions', 'R1-15'],
  ['grp.student-abstract', 'res.abstracts', 'R1-15'],
  ['sta.generalisation-qualification', 'sta.hedging', 'R1-15'],
  ['coh.connector-precision', 'coh.linking-adverbials', 'R1-15'],
  ['ess.essay-types', 'ges.genre-families', 'R1-16'],
  ['ges.compare-contrast-essay', 'ges.expository-essays', 'R1-16'],
  ['ges.problem-solution-essay', 'ges.expository-essays', 'R1-16'],
  ['edt.editing-tools', 'dig.automated-feedback-tools', 'R1-17'],
  ['gai.prompting-for-learning', 'gai.language-support', 'R1-17'],
  ['coh.spoken-signposting', 'prs.signposting', 'R1-18'],
  ['sen.capitalisation', 'sen.punctuation-mechanics', 'R1-19'],
  ['sen.quotation-punctuation', 'sen.punctuation-mechanics', 'R1-19'],
  ['sen.numbers-units-style', 'num.number-expressions', 'R1-19'],
  ['mmd.poster-design', 'prs.posters', 'R1-30'],
  ['rdc.critical-questions', 'crt.questioning', 'R1-31'],
  ['lrn.autonomy', 'lrn.self-regulation', 'R1-32'],
  ['src.signal-phrases', 'src.reporting-verbs', 'R1-37'],
];
const STRAND_RENAMES = {
  'Academic Listening': 'Academic Listening & Note-making',
  'Academic Socialisation & Communication': 'Academic Socialisation, Identity & Communication',
};
const DOMAIN_MOVES = {
  IDN: 'Academic Socialisation, Identity & Communication',
  FBK: 'Assessment & Progression',
  EXM: 'Assessment & Progression',
  TST: 'Assessment & Progression',
};
// New topics: id | type | name | scope | source finding(s)
const NEW_TOPICS = `
grm.spoken-grammar | LINGUISTIC | Grammar of spoken academic interaction | Features and accuracy priorities of spoken academic English (heads and tails, ellipsis, vague language, discourse markers, clause chaining) for seminars, tutorials and presentations. | R1-21
grm.genitive-noun-modifiers | LINGUISTIC | Genitive and noun-modifier choices | Choosing between 's, of-phrases and noun + noun modifiers (the study's aim / the aim of the study / study aim), including inanimate genitives and the myth that they are wrong. | R2-11
grm.unaccusative-verbs | LINGUISTIC | Unaccusative and ergative verbs | Verbs such as occur, happen, emerge, increase and change that describe events without an agent or alternate between transitive and intransitive use; avoiding *was happened and *was emerged. | R2-12
sem.explaining-concepts | PROCEDURAL | Explaining concepts and readings to peers | Mediating a concept, text or dataset for classmates: simplifying, exemplifying, checking understanding and drawing on shared languages, in seminars, study groups and peer teaching. | R1-22
prs.research-pitches | GENRE | Short-format research pitches | Three-minute thesis and elevator-style pitches that compress a project into a single accessible narrative for mixed audiences. | R1-05
ges.extended-source-based-project | GENRE | Extended source-based project | An independently researched essay or report of several thousand words on a self-chosen focus in the learner's field, developed through proposal, annotated sources, drafts and tutorials, often with a reflective commentary; the capstone of many pre-sessional and foundation EAP courses. | R1-20
cit.citation-politics | CONCEPTUAL | Whose knowledge is cited | Recognising that citation and indexing practices shape whose knowledge becomes visible, including the dominance of English-language, Global North and highly indexed sources, and making deliberate, justified citation choices. | R5-14
res.progression-review | GENRE | Doctoral progression and confirmation reviews | Confirmation, upgrade and annual progression reports and the accompanying oral review: summarising progress, revising questions and design, presenting preliminary findings, planning, and responding to panel questions. | R1-05, R6-01
res.publication-based-thesis | GENRE | Thesis by publication | Framing chapters, linking narratives and co-authorship statements that turn stand-alone papers into one coherent thesis argument. | R1-05
res.systematic-review-writing | GENRE | Writing systematic and scoping reviews | Writing the protocol and report of a systematic, scoping or other structured review in any discipline: registration, transparent search and selection reporting, appraisal and synthesis, following reporting guidance such as PRISMA 2020. | R1-34, R6-02
res.instrument-wording | PROCEDURAL | Wording survey and interview questions | Writing clear, neutral, single-focus questionnaire items, response scales and interview prompts, and piloting them for comprehension with the intended participants. | R1-26
res.teaching-as-pgr | SOCIOPRAGMATIC | Teaching, demonstrating and marking as a doctoral researcher | Communicating as a graduate teaching assistant or demonstrator: explaining concepts and procedures, questioning, managing small-group discussion, giving spoken and written feedback, and handling student queries. | R1-05, R6-04
pub.funding-applications | GENRE | Funding, fellowship and grant applications | Case for support, lay summary, impact statement and track-record sections for studentships, travel grants and early-career fellowships. | R1-05
pub.conference-participation | SOCIOPRAGMATIC | Participating in conferences | Asking and answering questions from the floor, chairing a session, and networking and following up contacts at conferences and research seminars. | R1-05
pub.personal-statements | GENRE | Personal statements for postgraduate study and funding | Statements of purpose and scholarship applications that show fit, motivation and capability with evidence. | R1-34
pub.thesis-corrections | GENRE | Examiners' reports and thesis corrections | Interpreting examiners' reports and viva outcomes, turning them into a corrections plan, and documenting the changes made. | R6-01
pub.thesis-to-article | PROCEDURAL | From thesis to articles | Turning thesis chapters into journal articles, or integrating published papers into a thesis: re-scoping the argument for a journal readership, compressing the literature and methods, and managing self-plagiarism rules. | R6-01
pub.open-research | PROCEDURAL | Open research practices and statements | Writing the texts open-research practices require: preprints and versions, preregistration and registered reports, data and code availability statements, and other disclosure statements. | R6-02
dig.assistive-technology | STRATEGIC | Assistive technology and study adjustments | Using assistive and accessibility technologies (text-to-speech, dictation, screen readers, reading and planning supports) and institutional adjustments as legitimate academic practice, within assessment rules. | R5-07
prg.informal-academic-interaction | SOCIOPRAGMATIC | Informal academic interaction and networking | Small talk and relationship-building with peers, lab colleagues and staff around teaching and at departmental events, moving between informal and academic talk. | R1-21
prg.professional-applications | GENRE | Applications and interviews for placements and graduate roles | Cover letters, competency-based answers and interview talk that translate academic experience into evidence for employers. | R1-36
idn.translingual-writing | CONCEPTUAL | Translingual writing and code-meshing | Understanding translingual approaches in which writers deliberately bring other languages or Englishes into academic texts, when and how this is accepted, and how to negotiate it with readers and assessors. | R5-06
tst.score-reports | CONCEPTUAL | Score reports, validity and test choice | Reading proficiency-test score reports (overall and component scores, retake and combined-sitting rules where they exist), judging whether they meet a requirement, and choosing a test. | R6-25
dse.lab-notebooks | GENRE | Laboratory notebooks and research records | Keeping contemporaneous, reproducible lab, computational or fieldwork records that meet research-integrity and data-management expectations. | R1-04
dhl.clinical-reasoning-writing | PROCEDURAL | Writing clinical reasoning | Making assessment, problem identification and intervention reasoning explicit in nursing, pharmacy and allied-health assignments, linked to evidence and professional standards. | R1-04
dhl.care-plans | GENRE | Care plans | Care plans and care-planning assignments that move from holistic assessment to prioritised, person-centred needs, goals, evidence-based interventions and evaluation. | R6-09
dbe.accounting-finance-discourse | GENRE | Language and genres of accounting and finance | Financial statement commentary, audit and valuation reports, and the evaluative and hedged language of financial analysis in finance and accounting assessments. | R1-04
dbe.consultancy-report | GENRE | Consultancy and client project reports | Client-facing reports for live or simulated consultancy projects: problem framing, evidence-based recommendations, implementation and reflection, for a client and an academic marker. | R1-04
dlw.mooting | GENRE | Mooting and oral legal argument | Preparing and delivering oral legal submissions in moots and assessed advocacy: skeleton arguments, ordering grounds, citing authority orally and answering judicial questions. | R6-03
dlw.legal-research-writing | PROCEDURAL | Legal research and dissertation writing | Planning and writing a law dissertation: choosing and justifying a doctrinal, socio-legal, comparative or theoretical method, building a research question, and structuring sustained legal argument. | R6-03
dss.psychology-research-report | GENRE | Psychology research reports | APA-style empirical reports in psychology: hypotheses, participants and materials, statistical reporting conventions and the discipline's stance conventions. | R1-04
dss.education-practice-genres | GENRE | Education and TESOL practice genres | Lesson plans with rationale, teaching-practice reflections, materials evaluations and small-scale classroom research reports in education and TESOL programmes. | R1-04
dad.practice-research-exegesis | GENRE | Practice-based research and exegesis | The exegesis or critical commentary that accompanies practice-based research in art, design and performance, situating the practice in its field and articulating its contribution. | R6-03
`
  .trim()
  .split('\n')
  .map((l) => {
    const [id, type, name, scope, source] = l.split(' | ').map((s) => s.trim());
    return { id, type, name, scope, source };
  });

// --- load ----------------------------------------------------------------------
const files = loadStrandFiles();
const prefixToCode = (id) => id.split('.')[0].toUpperCase();
const fileForDomain = new Map();
for (const f of files) for (const d of f.data.domains) fileForDomain.set(d.code, f);
const findTopic = (id) => {
  for (const f of files) {
    const t = f.data.topics.find((x) => x.id === id);
    if (t) return { f, t, g: f.data.guidance.find((x) => x.topicId === id) };
  }
  return null;
};
const allDeps = () => files.flatMap((f) => f.data.dependencies);
const log = [];
const retired = {};
mkdirSync(resolve(ROOT, 'authoring', 'revision', 'absorbed'), { recursive: true });

// Replace every reference to `from` with `to` across edges, reteach targets
// and the graph; drop resulting self-loops and duplicates (keeping 'hard').
function retarget(from, to) {
  for (const f of files) {
    for (const d of f.data.dependencies) {
      if (d.topicId === from) d.topicId = to;
      if (d.prerequisiteId === from) d.prerequisiteId = to;
    }
    for (const g of f.data.guidance) for (const x of g.difficulties) if (x.reteachPrerequisiteId === from) x.reteachPrerequisiteId = to;
  }
  // move edges whose topicId changed into the file that owns `to`
  const owner = findTopic(to)?.f ?? fileForDomain.get(prefixToCode(to));
  for (const f of files) {
    if (f === owner) continue;
    const moving = f.data.dependencies.filter((d) => d.topicId === to);
    if (moving.length) {
      f.data.dependencies = f.data.dependencies.filter((d) => d.topicId !== to);
      owner.data.dependencies.push(...moving);
    }
  }
  for (const f of files) {
    const seen = new Map();
    const kept = [];
    for (const d of f.data.dependencies) {
      if (d.topicId === d.prerequisiteId) continue;
      const k = `${d.topicId}|${d.prerequisiteId}`;
      if (seen.has(k)) {
        if (d.strength === 'hard') seen.get(k).strength = 'hard';
        continue;
      }
      seen.set(k, d);
      kept.push(d);
    }
    f.data.dependencies = kept;
  }
  // a reteach target must remain a prerequisite of its topic
  const prereqs = new Map();
  for (const d of allDeps()) (prereqs.get(d.topicId) ?? prereqs.set(d.topicId, new Set()).get(d.topicId)).add(d.prerequisiteId);
  for (const f of files) for (const g of f.data.guidance) for (const x of g.difficulties) {
    if (x.reteachPrerequisiteId && !prereqs.get(g.topicId)?.has(x.reteachPrerequisiteId)) x.reteachPrerequisiteId = null;
  }
}

// --- renames -------------------------------------------------------------------
for (const [from, to, why] of RENAMES) {
  const hit = findTopic(from);
  const targetFile = fileForDomain.get(prefixToCode(to));
  const targetDomain = targetFile.data.domains.find((d) => d.code === prefixToCode(to));
  hit.t.id = to;
  hit.t.domain = targetDomain.name;
  hit.t.strand = targetDomain.strand;
  hit.g.topicId = to;
  if (targetFile !== hit.f) {
    hit.f.data.topics = hit.f.data.topics.filter((x) => x !== hit.t);
    hit.f.data.guidance = hit.f.data.guidance.filter((x) => x !== hit.g);
    targetFile.data.topics.push(hit.t);
    targetFile.data.guidance.push(hit.g);
  }
  retarget(from, to);
  retired[from] = { status: 'renamed', replacedBy: to, reason: why };
  log.push(`- Renamed \`${from}\` → \`${to}\` (${why}).`);
}

// --- merges --------------------------------------------------------------------
for (const [from, into, finding] of MERGES) {
  const absorbed = findTopic(from);
  const survivor = findTopic(into);
  if (!absorbed || !survivor) throw new Error(`merge ${from} -> ${into}: missing topic`);
  writeFileSync(
    resolve(ROOT, 'authoring', 'revision', 'absorbed', `${from}.json`),
    JSON.stringify({ mergedInto: into, finding, topic: absorbed.t, guidance: absorbed.g }, null, 2) + '\n',
  );
  for (const fw of absorbed.t.frameworks ?? []) {
    if (!survivor.t.frameworks.some((x) => x.key === fw.key) && survivor.t.frameworks.length < 3) survivor.t.frameworks.push(fw);
  }
  absorbed.f.data.topics = absorbed.f.data.topics.filter((x) => x.id !== from);
  absorbed.f.data.guidance = absorbed.f.data.guidance.filter((x) => x.topicId !== from);
  retarget(from, into);
  retired[from] = { status: 'merged', replacedBy: into, reason: `Merged after adversarial review (${finding}).` };
  log.push(`- Merged \`${from}\` into \`${into}\` (${finding}).`);
}
const cycle = findDependencyCycle(allDeps());
if (cycle) throw new Error(`cycle after merges: ${cycle.join(' -> ')}`);

// --- strands -------------------------------------------------------------------
for (const f of files) {
  for (const d of f.data.domains) {
    if (STRAND_RENAMES[d.strand]) d.strand = STRAND_RENAMES[d.strand];
    if (DOMAIN_MOVES[d.code]) d.strand = DOMAIN_MOVES[d.code];
  }
  for (const t of f.data.topics) {
    const d = f.data.domains.find((x) => x.name === t.domain) ?? [...fileForDomain.values()].flatMap((x) => x.data.domains).find((x) => x.name === t.domain);
    t.strand = d.strand;
  }
}
log.push(`- Renamed strands: ${Object.entries(STRAND_RENAMES).map(([a, b]) => `"${a}" → "${b}"`).join('; ')}.`);
log.push(`- Moved domains: ${Object.entries(DOMAIN_MOVES).map(([c, s]) => `${c} → "${s}"`).join('; ')} (R1-11, R1-12).`);

for (const f of files) writeFileSync(resolve(SRC, 'strands', f.file), JSON.stringify(f.data, null, 2) + '\n');
writeFileSync(resolve(SRC, 'meta', 'retired-topics.json'), JSON.stringify(retired, null, 2) + '\n');

// --- skeleton --------------------------------------------------------------------
// Rebuild authoring/skeleton.txt from the strand files (current names and
// scope from descriptions are not used; scope notes are kept where present)
// plus the new topic stubs.
const oldSkel = readFileSync(resolve(ROOT, 'authoring', 'skeleton.txt'), 'utf8');
const scopeById = new Map();
const typeById = new Map();
for (const line of oldSkel.split('\n')) {
  const p = line.split(' | ');
  if (p.length === 4) {
    scopeById.set(p[0].trim(), p[3].trim());
    typeById.set(p[0].trim(), p[1].trim());
  }
}
const strandOrder = [
  ['Academic Language', ['VOC', 'PHR', 'REG', 'GRM', 'SEN']],
  ['Academic Discourse', ['COH', 'STA', 'FUN']],
  ['Academic Reading', ['RDP', 'RDS', 'RDC']],
  ['Academic Listening & Note-making', ['LIS', 'NTK']],
  ['Academic Speaking', ['SEM', 'PRS', 'PRN', 'GRW']],
  ['Academic Writing', ['WPR', 'PAR', 'ESS', 'EDT']],
  ['Sources & Academic Integrity', ['INF', 'SRC', 'SYN', 'CIT', 'INT']],
  ['Argument & Critical Thinking', ['CRT', 'ARG']],
  ['Academic Genres', ['GES', 'GRP']],
  ['Research Communication', ['RES', 'PUB']],
  ['Data, Numeracy & Multimodality', ['DAT', 'NUM', 'MMD']],
  ['Learning & Autonomy', ['LRN']],
  ['Assessment & Progression', ['FBK', 'EXM', 'TST']],
  ['Academic Socialisation, Identity & Communication', ['ACU', 'PRG', 'IDN']],
  ['Digital Literacy & AI', ['DIG', 'GAI']],
  ['Disciplinary Literacies', ['DSE', 'DHL', 'DBE', 'DLW', 'DSS', 'DHU', 'DAD']],
];
const allDomains = files.flatMap((f) => f.data.domains);
const oldOrder = new Map(oldSkel.split('\n').map((l) => l.split(' | ')[0].trim()).map((id, i) => [id, i]));
const lines = [
  '# EAP Skill Taxonomy — master skeleton',
  '# Format:',
  '#   ## STRAND: <strand name>',
  '#   ### DOMAIN <CODE>: <domain name>',
  '#   <topic id> | <TYPE> | <name> | <scope note>',
  '# The skeleton fixes topic IDs, names and scope so that strand authors can',
  '# cross-reference prerequisites across strands. Authors may sharpen names and',
  '# scope but must not change IDs. Retired IDs are listed in',
  '# src/meta/retired-topics.json. Types: CONCEPTUAL, PROCEDURAL, LINGUISTIC,',
  '# GENRE, STRATEGIC, SOCIOPRAGMATIC.',
  '',
];
for (const [strand, codes] of strandOrder) {
  lines.push(`## STRAND: ${strand}`, '');
  for (const code of codes) {
    const d = allDomains.find((x) => x.code === code);
    lines.push(`### DOMAIN ${code}: ${d.name}`);
    const topics = files
      .flatMap((f) => f.data.topics)
      .filter((t) => t.domain === d.name)
      .sort((a, b) => (oldOrder.get(a.id) ?? 1e9) - (oldOrder.get(b.id) ?? 1e9));
    for (const t of topics) lines.push(`${t.id} | ${t.type} | ${t.name} | ${scopeById.get(t.id) ?? t.description.split('. ')[0]}`);
    for (const n of NEW_TOPICS.filter((x) => prefixToCode(x.id) === code)) lines.push(`${n.id} | ${n.type} | ${n.name} | ${n.scope}`);
    lines.push('');
  }
}
writeFileSync(resolve(ROOT, 'authoring', 'skeleton.txt'), lines.join('\n'));
writeFileSync(resolve(ROOT, 'authoring', 'revision', 'new-topics.json'), JSON.stringify(NEW_TOPICS, null, 2) + '\n');
writeFileSync(resolve(ROOT, 'authoring', 'revision', 'restructure.log'), log.join('\n') + '\n');
console.log(log.join('\n'));
console.log(`new topic stubs: ${NEW_TOPICS.length}`);

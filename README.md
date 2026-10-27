# EAP Skill Taxonomy

An open, structured taxonomy of **English for Academic Purposes**: what
learners need to master to study, write, speak and research in English at
university. Learning is broken into fine-grained topics, wired into a
prerequisite graph, mapped to international frameworks, given
research-informed teaching guidance, and grounded in a verified academic
bibliography.

> **Version:** `v1` · **Topics:** 569 · **Prerequisite edges:** 1,473 (520 hard) · **Strands:** 16 · **Domains:** 51 · **References:** 480 (478 web-verified)

It covers:

- the **full span of EAP provision**: international foundation and pathway
  programmes; pre-sessional courses for undergraduate and postgraduate
  entry; in-sessional support for undergraduates and taught master's
  students; and doctoral researchers, including publication;
- **general and discipline-specific EAP**: language, discourse, reading,
  listening, speaking, writing, sources and integrity, argument, genres,
  research communication, data and multimodality, learning and assessment,
  academic socialisation, digital and AI literacy, and seven disciplinary
  families.

The data model is inspired by the
[Marble Skill Taxonomy](https://github.com/withmarbleapp/os-taxonomy) for
primary education. See [PROVENANCE.md](PROVENANCE.md).

## What is in it

| | |
|---|---|
| **569 topics** | Each topic is one teachable, assessable element of academic English competence: a concept, procedure, linguistic resource, genre, strategy or sociopragmatic practice. Each has a description, 3–6 observable mastery statements, a diagnostic assessment prompt, a CEFR range with a core band, a role at each stage, discipline and audience facets, citations and framework links. |
| **1,473 prerequisite edges** | An acyclic graph in which *topic depends on prerequisite*. 520 edges are `hard` (cannot be learned without) and 953 are `soft` (usually taught first, or helps). Every edge carries a one-line reason. |
| **569 teaching-guidance records** | One for every topic: a research-informed approach, 1–3 activities with learner actions and rationale, common difficulties with how they show and what to do (including difficulties caused by institutions rather than learners), a diagnostic with strong, partial and gap responses, and notes on how emphasis changes by stage. |
| **480 references** | A closed bibliography: every citation resolves to it. 478 entries were checked by web search against publisher, repository or library records, and each carries its verification status. |
| **Framework alignment** | 1,000+ links to CEFR Companion Volume scales, IELTS Academic criteria, the ACRL Framework for Information Literacy and the Vitae Researcher Development Framework. Codes and titles only. |
| **Pathways** | Assessed-task anchors and worked course templates, such as 6-, 10- and 12-week pre-sessionals, a foundation module, in-sessional series and a doctoral programme. |
| **Adversarial review** | Six expert-briefed reviews (167 findings) and a log of how each finding was handled ([reports/adversarial-review.md](reports/adversarial-review.md)). |

### Strands

| Strand | Topics | Domains |
|---|---:|---|
| Academic Language | 83 | Vocabulary · Phraseology · Register & style · Grammar · Sentence construction & punctuation |
| Academic Discourse | 39 | Cohesion & coherence · Stance & metadiscourse · Rhetorical functions |
| Academic Reading | 35 | Processes & fluency · Strategies & comprehension · Critical & multiple-text reading |
| Academic Listening & Note-making | 27 | Lecture & academic listening · Note-taking & note-making |
| Academic Speaking | 49 | Seminars & discussion · Presentations · Pronunciation & fluency · Group work |
| Academic Writing | 39 | Writing process · Paragraphs · Essay construction · Revising & editing |
| Sources & Academic Integrity | 53 | Information literacy · Summarising, paraphrasing & quoting · Synthesis · Citation · Integrity |
| Argument & Critical Thinking | 28 | Critical thinking · Academic argumentation |
| Academic Genres | 27 | Essay & exam genres · Report & practice-based genres |
| Research Communication | 45 | Research writing · Publication & dissemination |
| Data, Numeracy & Multimodality | 22 | Data commentary & visuals · Numeracy language · Multimodal composition |
| Learning & Autonomy | 12 | Self-regulated learning |
| Assessment & Progression | 21 | Feedback & assessment literacy · Exams · Proficiency tests & progression |
| Academic Socialisation, Identity & Communication | 29 | Academic culture · Pragmatics & correspondence · Identity, plurilingualism & intercultural competence |
| Digital Literacy & AI | 18 | Digital scholarship tools · Generative AI literacy |
| Disciplinary Literacies | 42 | Science, engineering & computing · Health · Business & economics · Law · Social sciences & education · Humanities · Creative arts & design |

Counts by stage, type, discipline and framework are in
[reports/coverage.md](reports/coverage.md). All topics, grouped by domain
with their prerequisites, are in [reports/catalogue.md](reports/catalogue.md).

## Stages and roles

Each topic gives a role for every stage where it belongs:

| Stage | Meaning |
|---|---|
| `foundation` | International foundation, pathway or pre-degree programme (typical entry A2+–B1) |
| `pre-sessional-ug` | Intensive EAP before an undergraduate degree |
| `pre-sessional-pg` | Intensive EAP before a postgraduate degree |
| `in-sessional-ug` | Support during an undergraduate degree, generic or embedded |
| `in-sessional-pgt` | Support during a taught master's |
| `pgr` | Doctoral and research students, including publication |

The roles are:

- `core`: explicitly taught and normally assessed at that stage;
- `develop`: taught where the cohort, discipline or course length makes it
  relevant;
- `revisit`: assumed, reviewed or self-access.

[reports/stage-pathways.md](reports/stage-pathways.md) lists each stage's
core topics in hard-prerequisite order.
[docs/curriculum-design.md](docs/curriculum-design.md) explains how to go
from needs analysis to a syllabus.

## Files

All data is UTF-8 JSON in [`data/`](data/). JSON Schemas are in
[`schema/`](schema/), and counts and SHA-256 checksums are in
[`data/manifest.json`](data/manifest.json).

| File | Contents |
|---|---|
| [`topics.json`](data/topics.json) | The topics (graph nodes), with derived graph metrics. |
| [`dependencies.json`](data/dependencies.json) | Prerequisite edges. |
| [`teaching-guidance.json`](data/teaching-guidance.json) | One guidance record per topic. |
| [`domains.json`](data/domains.json) | Strands and domains, with teacher-facing and learner-facing summaries and stage emphasis. |
| [`references.json`](data/references.json) | The bibliography, with verification status and where each work is cited. |
| [`frameworks.json`](data/frameworks.json) | Framework catalogue (codes and titles only). |
| [`pathways.json`](data/pathways.json) | Task anchors and course templates. |
| [`retired-topics.json`](data/retired-topics.json) | IDs retired by merge or rename, and their replacements. |
| [`manifest.json`](data/manifest.json) | Counts and checksums. |

### A topic

```json
{
  "id": "src.paraphrasing",
  "type": "PROCEDURAL",
  "strand": "Sources & Academic Integrity",
  "domain": "Summarising, Paraphrasing & Quoting",
  "name": "Paraphrasing",
  "description": "Restate a specific idea from a source in substantially new wording and sentence structure while preserving its meaning, scope and degree of certainty, and attribute it. …",
  "cefrStart": "B1+",
  "cefrEnd": "C1",
  "coreBand": "B2",
  "stageRoles": {
    "foundation": "core", "pre-sessional-ug": "core", "pre-sessional-pg": "core",
    "in-sessional-ug": "develop", "in-sessional-pgt": "develop", "pgr": "revisit"
  },
  "specificity": "EGAP",
  "disciplines": [],
  "audience": "learner",
  "masteryEvidence": [
    "Produces a paraphrase that a reader judges equivalent in meaning, including hedges, qualifications and scope",
    "Changes both vocabulary and sentence structure without retaining strings of source wording beyond technical terms and fixed expressions",
    "…"
  ],
  "assessmentPrompt": "Give the learner a 50–70-word paragraph containing one hedged claim and one technical term. Ask for a paraphrase written with the source covered. Check whether …",
  "citations": ["pecorari2003", "keck2006", "shi2004", "hirveladu2013"],
  "frameworks": [
    { "key": "cefr-cv:med.text.processing-text", "levels": ["B2", "C1"], "contribution": "component" }
  ],
  "prerequisiteCount": 4, "unlockCount": 5, "downstreamCount": 2, "depth": 2, "centrality": 0.0957
}
```

- `id` is a stable identifier: a three-letter domain prefix and a slug.
  Retired IDs resolve through `retired-topics.json`.
- `stages` (derived) lists the keys of `stageRoles` in stage order.
- `downstreamCount`, `depth` and `centrality` are computed over **hard**
  edges only. `prerequisiteCount` and `unlockCount` count all edges.

### A dependency

```json
{ "topicId": "src.paraphrasing", "prerequisiteId": "src.paraphrase-techniques",
  "strength": "hard", "reason": "Paraphrasing applies lexical and syntactic transformation techniques to whole propositions" }
```

## Using it

The data is plain JSON, with no runtime and no dependencies.

```js
import topics from './data/topics.json' with { type: 'json' };
import deps from './data/dependencies.json' with { type: 'json' };
import guidance from './data/teaching-guidance.json' with { type: 'json' };

const byId = new Map(topics.topics.map((t) => [t.id, t]));

// Core topics for a postgraduate-entry pre-sessional
const core = topics.topics.filter((t) => t.stageRoles['pre-sessional-pg'] === 'core');

// What must be taught before writing a literature review?
const hardPrereqs = deps.dependencies
  .filter((d) => d.topicId === 'res.literature-review' && d.strength === 'hard')
  .map((d) => byId.get(d.prerequisiteId).name);

// Teaching guidance for hedging
const hedging = guidance.records.find((g) => g.topicId === 'sta.hedging');
```

To validate, rebuild and test:

```bash
node scripts/validate.mjs   # integrity, acyclicity, checksums
node scripts/build.mjs      # rebuild data/ from src/ (deterministic)
node scripts/report.mjs     # regenerate reports/
npm test                    # schema and dataset tests
```

## How it was made

The content was written by AI agents working to a fixed specification
([AUTHORING.md](AUTHORING.md)), in five stages:

1. A curator designed the skeleton, compiled a closed bibliography and
   wrote the authoring specification.
2. Sixteen author agents each drafted one group of strands, citing only
   bibliography entries and proposing new sources for verification.
3. Six reviewer agents, each briefed as a different kind of expert, then
   critiqued the built dataset adversarially.
4. The taxonomy was restructured and revised in response.
5. Every reference was checked by web search.

The full process is described in [PROVENANCE.md](PROVENANCE.md) and
[reports/adversarial-review.md](reports/adversarial-review.md).

**Limits.** These are expert judgements, not empirical calibrations:

- CEFR ranges and stage roles have not been tested against learner data.
- Prerequisite strengths have not been validated with practitioners.
- Teaching activities are research-informed proposals, not tested
  interventions. A citation supports the principle or rationale, not
  necessarily the specific activity.
- No human expert has yet reviewed this release.

## Authoring and contributing

The published files in `data/` are generated. Edit the sources instead:

- `src/strands/*.json`: topics, edges, guidance and domains, one file per
  strand group;
- `src/meta/references.txt`, `reference-verification.txt`,
  `frameworks.txt`, `pathways.json` and `retired-topics.json`;
- `authoring/skeleton.txt`: topic IDs.

Then run `node scripts/build.mjs`, `node scripts/report.mjs` and `npm test`.
`node scripts/check-strand.mjs <file>` validates a single strand file.

## Licence

No licence has been chosen yet. Until one is added, all rights are
reserved by the repository owner. Before publishing it, consider an open
database licence (such as ODbL) for the data and a Creative Commons licence
for the text. Third-party framework names are factual identifiers; consult
each framework owner's terms before reproducing their descriptor text.

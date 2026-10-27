# Authoring guide

This guide defines how topics, prerequisite edges, teaching guidance and
domain summaries are written. It applies to every file in `src/strands/`.
`scripts/check-strand.mjs` enforces the structural rules; the editorial rules
below are enforced by review.

## 1. What a topic is

A topic is **one teachable, assessable element of academic English
competence**: a concept (what plagiarism is), a procedure (paraphrasing), a
linguistic resource (hedging devices), a genre (the lab report), a strategy
(previewing a text) or a sociopragmatic practice (writing to a lecturer).

- Keep each topic focused. A genre topic covers the genre's purpose, structure
  and characteristic language; the component skills it draws on are separate
  topics linked as prerequisites.
- Do not create level variants of one topic. The CEFR range records where the
  topic is taught; mastery claims describe the target, not every stage.
- Topic IDs are fixed in `authoring/skeleton.txt`. Names and scope may be
  sharpened, but a topic must keep the meaning its ID and scope note set.

### Types

| Type | Use for |
|---|---|
| `CONCEPTUAL` | Understanding an idea, convention or distinction (cohesion vs coherence; what counts as evidence). |
| `PROCEDURAL` | Carrying out a multi-step academic process (paraphrasing, reverse outlining, briefing a case). |
| `LINGUISTIC` | Controlling a lexicogrammatical resource (articles, reporting verbs, hedges, lexical bundles). |
| `GENRE` | Producing or participating in a recognisable academic genre (lab report, viva, email to staff). |
| `STRATEGIC` | Self-directed strategies for learning, comprehension or performance (skimming, spaced retrieval). |
| `SOCIOPRAGMATIC` | Socially appropriate interaction (turn-taking, requests, politeness, inclusive collaboration). |

## 2. Fields

```jsonc
{
  "id": "src.paraphrasing",                 // from the skeleton
  "type": "PROCEDURAL",
  "strand": "Sources & Academic Integrity",  // exactly as in the skeleton
  "domain": "Summarising, Paraphrasing & Quoting",
  "name": "Paraphrasing",
  "description": "…",                       // 1–3 sentences: what the learner understands or does, and why it matters
  "cefrStart": "B1+",                        // where explicit teaching typically begins
  "cefrEnd": "C1",                           // where control is typically expected
  "coreBand": "B2",                          // where explicit teaching pays off most
  "stageRoles": {                            // one role per stage where the topic belongs
    "foundation": "develop",
    "pre-sessional-ug": "core",
    "pre-sessional-pg": "core",
    "in-sessional-ug": "develop",
    "in-sessional-pgt": "revisit"
  },
  "specificity": "EGAP",                     // EGAP (general academic) or ESAP (discipline-specific)
  "disciplines": [],                         // controlled list; empty for general topics
  "audience": "learner",                     // learner | teacher | both
  "masteryEvidence": ["…", "…", "…"],        // 3–6 observable statements, each starting with a verb
  "assessmentPrompt": "…",                   // one teacher-facing diagnostic check
  "citations": ["pecorari2003", "keck2006"], // 1–4 keys from src/meta/references.txt
  "frameworks": [
    { "key": "cefr-cv:med.text.processing-text", "levels": ["B2", "C1"], "contribution": "component" }
  ]
}
```

### CEFR range

Use the scale `A2, A2+, B1, B1+, B2, B2+, C1, C2`. The range is an
**authoring judgement**, not a calibrated CEFR claim.

- `cefrStart` — the lowest level at which explicit teaching usually becomes
  productive in EAP. Foundation and early pre-sessional learners are typically
  B1–B1+; most pre-sessional learners start at B1+–B2; undergraduate
  in-sessional learners are typically B2–B2+; postgraduate taught learners are
  B2+–C1; doctoral researchers are C1 or above, although their written
  production in some areas may be below their reception. International
  foundation programmes often admit learners at around A2+–B1.
- `cefrEnd` — the level by which a learner on a typical trajectory controls
  the topic. Use `C2` only when development continues into expert
  performance (for example, stance in research writing).
- `coreBand` — the single band, within the range, where explicit teaching
  pays off most. Course designers filter on it.

### Stages and stage roles

| Stage | Meaning |
|---|---|
| `foundation` | International foundation year, pathway or pre-degree programme. Often combines EAP, study skills and subject content. Typical entry A2+–B1. |
| `pre-sessional-ug` | Intensive EAP before an undergraduate degree, leading to a progression decision. |
| `pre-sessional-pg` | Intensive EAP before a taught or research postgraduate degree, leading to a progression decision. |
| `in-sessional-ug` | EAP or academic literacy support during an undergraduate degree, generic or embedded. |
| `in-sessional-pgt` | Support during a taught master's degree: short, dissertation-driven and discipline-embedded. |
| `pgr` | Doctoral and other research students, including early publication. |

`stageRoles` gives a role for each stage where the topic belongs; omit
stages where it does not.

- `core` — explicitly taught and normally assessed in a typical programme
  of that type. Core must discriminate: across the whole taxonomy each stage
  should have roughly 80–140 core topics, so most topics are core at one or
  two stages at most.
- `develop` — taught or extended where the cohort, discipline or course
  length makes it relevant.
- `revisit` — assumed from earlier stages; reviewed, remediated or left to
  self-access.

Do not make a topic `core` at a stage whose typical entry band is above the
topic's `cefrEnd` (in-sessional-ug B2, in-sessional-pgt B2+, pgr C1); such
learners should already control it. Research-writing and proposal genres
belong to `pre-sessional-pg`, not `pre-sessional-ug`. EMI programmes and
transnational branch campuses map onto these stages by function: pre-degree
English provision as foundation or pre-sessional, and support during a degree
as in-sessional. Note context differences in `contextNotes`.

### Audience

`learner` topics are taught and assessed. `teacher` topics are curriculum
principles that shape teaching but are not assessed in learners, such as an
academic literacies stance. `both` topics have a learner-facing skill and a
teacher-facing principle. Every `learner` or `both` topic needs mastery
evidence that an assessor can observe.

### Disciplines

`disciplines` uses this controlled list: `sciences`, `engineering`,
`computing`, `mathematics-statistics`, `health-medicine`,
`business-management`, `finance-accounting`, `economics`, `law`,
`social-sciences`, `psychology`, `education`, `humanities`, `arts-design`,
`media-communication`. ESAP topics need at least one discipline. General
topics with a strong disciplinary skew (such as numeric citation or the lab
report) list the disciplines where they matter most; other general topics
leave the list empty.

### Specificity

`EGAP` topics are taught across disciplines. `ESAP` topics depend on a
discipline's genres, knowledge-making or conventions. All topics in the
Disciplinary Literacies strand are `ESAP`. Some topics elsewhere, such as the
lab report, are also `ESAP`.

### Mastery evidence

Write observable behaviour at the target level, with each statement starting
with a verb, such as "Restates…", "Identifies…", "Distinguishes…". Avoid
"understands" unless the statement names how understanding is shown.
Statements must describe the learner, not the teacher.

### Assessment prompt

One discriminating task a teacher can use in a few minutes, for example "Give
the learner a 60-word paragraph and ask for a paraphrase without looking back
at the source; check…". State what to look for.

### Citations

Cite only keys from `src/meta/references.txt`. Each citation must support the
topic's framing; do not attach a famous source for decoration. If no listed
source fits, you may propose one under `proposedReferences` with a full APA 7
reference, DOI if known, and a note about your confidence. Proposed references
are checked before publication, and unverifiable proposals are removed with
any claims that depend on them. **Never invent a reference, DOI, page range or
finding.**

### Frameworks

Link at most three framework items per topic, using keys from
`src/meta/frameworks.txt`:

- `core` — the topic is central to that scale or criterion.
- `component` — the topic is one ingredient of it.
- `related` — the topic supports it indirectly.

For CEFR scales, give the CEFR levels at which the link is most relevant.
Never reproduce descriptor or band-descriptor text. A link is a mapping
judgement, not a claim that the topic covers the whole scale.

## 3. Prerequisite edges

```json
{ "topicId": "src.paraphrasing", "prerequisiteId": "src.paraphrase-techniques",
  "strength": "hard", "reason": "Paraphrasing applies lexical and syntactic transformation techniques to whole propositions" }
```

- `topicId` depends on `prerequisiteId`. Only add incoming edges for topics in
  your own file; prerequisites can be any skeleton ID.
- `hard` — the topic cannot be meaningfully learned or performed without the
  prerequisite. `soft` — the prerequisite substantially helps or is usually
  taught first.
- Prefer two to four direct prerequisites. Do not add an edge already implied
  by a chain (if A→B→C, do not also add A→C unless the direct dependency is
  distinct and important).
- Prerequisites must be more foundational. If two topics develop together,
  choose the direction learners usually meet first and make it `soft`, or
  leave them unlinked. The whole graph must be acyclic.
- Write the `reason` as a specific dependency, not "related to".
- Entry-point topics may have no prerequisites.

## 4. Teaching guidance

Each topic has one guidance record:

```jsonc
{
  "topicId": "src.paraphrasing",
  "summary": "…",                  // 2–4 sentences: research-informed approach
  "activities": [{                 // 2 activities (1–3 allowed)
    "title": "…",
    "learnerActions": ["…", "…"],  // what learners do, step by step
    "intendedInsight": "…",
    "rationale": "…",              // why, linked to the evidence where possible
    "citations": ["…"]
  }],
  "difficulties": [{               // 2–3 common difficulties
    "pattern": "…",                // the learner's view or behaviour, in their voice where natural
    "kind": "L1-transfer",         // L1-transfer | developmental | conceptual | prior-schooling | overgeneralisation | performance | affective | institutional
    "revealedBy": "…",             // the evidence teachers see
    "response": "…",               // what to do; for developmental or performance difficulties, include what NOT to do
    "reteachPrerequisiteId": null  // a declared prerequisite to return to, or null
  }],
  "diagnostic": {
    "task": "…", "strongResponse": "…", "partialResponse": "…", "gapResponse": "…"
  },
  "contextNotes": "…",             // how emphasis differs across the stages listed for the topic
  "citations": ["…"],
  "reviewNotes": []                // uncertainties; never resolve them by inventing evidence
}
```

Activities are research-informed proposals, not tested interventions. Do not
describe an activity as "proven", "evidence-based" or as one that "works best"
unless the cited source tested that activity, and do not state untested effects
as facts ("reduces anxiety"); write "may help" or "is intended to".

Use `institutional` when a difficulty is caused by others or by institutional
practice, not by the learner: unclear briefs, unequal turn allocation by peers,
inaccessible formats, or unexamined native-speaker norms in marking. Its
`response` addresses the teacher or institution as well as the learner. `L1-transfer` should name a mechanism ("languages without
articles…"), not stereotype a nationality. When a pattern stems from schooling
or assessment cultures, use `prior-schooling` and avoid essentialising
"culture".

## 5. Domain summaries

Each domain has a record:

```jsonc
{
  "code": "SRC",
  "strand": "Sources & Academic Integrity",
  "name": "Summarising, Paraphrasing & Quoting",
  "summary": "…",          // 2–4 sentences for teachers and curriculum designers
  "learnerSummary": "…",   // 1–2 plain-language sentences addressed to the learner ("You will learn…")
  "stageEmphasis": {       // one sentence per relevant stage
    "foundation": "…", "pre-sessional": "…", "in-sessional-ug": "…", "in-sessional-pgt": "…", "pgr": "…"
  },
  "keyReferences": ["…"]
}
```

## 6. Editorial standards

- Write in British English spelling, in a precise, practitioner-facing voice.
- Present contested positions as contested, for example the AWL's
  cross-disciplinary status, the place of critical thinking instruction,
  contrastive rhetoric and patchwriting as a developmental stage.
- Do not repeat myths: learning styles, "never use I", "never start a
  sentence with And/But" as absolute rules, "the passive is objective", speed
  reading at unrealistic rates or similarity scores as plagiarism verdicts.
- Do not describe learners deficiently. Treat multilingual repertoires as
  resources and make tacit expectations explicit.
- Avoid stock learner caricatures, especially the deferential learner who
  "will not criticise experts". Use it only where it is the topic's real
  difficulty, and attribute it to assessment practices rather than to a
  culture.
- Use "users of English as an additional language" or "multilingual
  writers". Keep "native/non-native" only when reporting a study's own
  categories. Name the comparison corpus when citing learner-corpus
  "overuse" or "underuse", and treat it as a difference from expert practice,
  not as an error against native students.
- Do not present UK practice as the universal target. Write "in your target
  context" and mention variation where practice differs, for example in
  EMI, TNE, North American and continental European universities.
- Similarity and AI-detection scores never establish misconduct, and the
  burden of proof lies with the institution. Learners are not responsible for
  proving their innocence, and a difference in style is never evidence on
  its own.
- Consider accessibility and learning differences (such as dyslexia, ADHD,
  autism and sensory impairments) where they change how a skill is shown,
  and accept multiple modes of participation.
- Do not reproduce copyrighted framework descriptor text or test materials.
- Give example language in quotation marks or italics only when it is your
  own, or when it is a single short corpus-attested phrase.

## 7. Worked example

```json
{
  "id": "src.paraphrasing",
  "type": "PROCEDURAL",
  "strand": "Sources & Academic Integrity",
  "domain": "Summarising, Paraphrasing & Quoting",
  "name": "Paraphrasing",
  "description": "Restate a specific idea from a source in substantially new wording and sentence structure while preserving its meaning, scope and degree of certainty, and attribute it. Paraphrase lets writers integrate sources into their own argument rather than stitching quotations together.",
  "cefrStart": "B1+",
  "cefrEnd": "C1",
  "stages": ["foundation", "pre-sessional", "in-sessional-ug", "in-sessional-pgt"],
  "specificity": "EGAP",
  "masteryEvidence": [
    "Produces a paraphrase that a reader judges equivalent in meaning, including hedges and qualifications",
    "Changes both vocabulary and sentence structure without retaining strings of source wording beyond technical terms",
    "Retains discipline-specific technical terms that should not be synonymised",
    "Attributes the paraphrase with a correctly formatted citation and signals where the attributed content ends",
    "Explains why a given paraphrase is acceptable, patchwritten or distorted"
  ],
  "assessmentPrompt": "Give the learner a 50–70-word paragraph with one hedged claim and one technical term. Ask for a paraphrase written with the source covered. Check whether meaning and certainty are preserved, structure is changed, the technical term is kept, and a citation is included.",
  "citations": ["pecorari2003", "keck2006", "shi2004", "hirveladu2013"],
  "frameworks": [
    { "key": "cefr-cv:med.text.processing-text", "levels": ["B2", "C1"], "contribution": "component" }
  ]
}
```

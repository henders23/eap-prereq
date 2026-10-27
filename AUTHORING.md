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
  "stages": ["foundation", "pre-sessional", "in-sessional-ug", "in-sessional-pgt"],
  "specificity": "EGAP",                     // EGAP (general academic) or ESAP (discipline-specific)
  "masteryEvidence": ["…", "…", "…"],        // 3–6 observable statements, each starting with a verb
  "assessmentPrompt": "…",                   // one teacher-facing diagnostic check
  "citations": ["pecorari2003", "keck2006"], // 1–4 keys from src/meta/references.txt
  "frameworks": [
    { "key": "cefr-cv:med.text.processing-text", "levels": ["B2", "C1"], "contribution": "component" }
  ]
}
```

### CEFR range

Use the scale `A2, B1, B1+, B2, B2+, C1, C2`. The range is an **authoring
judgement**, not a calibrated CEFR claim.

- `cefrStart` — the lowest level at which explicit teaching usually becomes
  productive in EAP. Foundation and early pre-sessional learners are typically
  B1–B1+; most pre-sessional learners start at B1+–B2; undergraduate
  in-sessional learners are typically B2–B2+; postgraduate taught learners are
  B2+–C1; doctoral researchers are C1 or above, although their written
  production in some areas may be below their reception.
- `cefrEnd` — the level by which a learner on a typical trajectory controls
  the topic. Use `C2` only when development continues into expert
  performance (for example, stance in research writing).

### Stages

| Stage | Meaning |
|---|---|
| `foundation` | International foundation year, pathway or pre-degree programme. Often combines EAP, study skills and subject content. |
| `pre-sessional` | Intensive EAP before a degree programme, typically leading to a progression decision. |
| `in-sessional-ug` | EAP or academic literacy support during an undergraduate degree, generic or embedded. |
| `in-sessional-pgt` | Support during a taught master's degree. |
| `pgr` | Doctoral and other research students, including early publication. |

List every stage at which the topic is usually taught or revisited, not only
where it is first met.

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
    "kind": "L1-transfer",         // L1-transfer | developmental | conceptual | prior-schooling | overgeneralisation | performance | affective
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
describe an activity as "proven" or "evidence-based" unless the cited source
tested that activity. `L1-transfer` should name a mechanism ("languages without
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

# Adversarial review and revision log

This log records the expert review of the first build of the taxonomy and
how each finding was handled. The full reviews are in
[`reports/review/`](review/): one Markdown report and one machine-readable
JSON file per reviewer.

## Process

Six independent reviewer agents were briefed as senior experts and given the
built dataset (`data/`), the generated reports and the authoring
specification. They were not given the authors' reasoning. Each was told to
find what was wrong, missing or unusable, not to praise. Each reviewer
produced findings with a severity, evidence and machine-applicable changes
where possible, and checked every proposed text edit for an exact match
against the data.

| Review | Persona | Scope | Findings |
|---|---|---|---:|
| [R1](review/R1-curriculum.md) | BALEAP Senior Fellow and EAP programme director | Coverage, overlap, granularity, stage and level realism, structure, usability for syllabus design | 41 (4 critical) |
| [R2](review/R2-linguistics.md) | Professor of applied linguistics (corpus, SFL, SLA, phonology) | Linguistic accuracy, attributions, L1-transfer claims, linguistic assessment items | 45 |
| [R3](review/R3-graph.md) | Learning scientist and knowledge-graph engineer | Prerequisite logic, hubs, direction and strength, level/stage coherence | 18 |
| [R4](review/R4-citations.md) | Research-integrity editor | Whether citations support the claims attached to them (220 claim–citation pairs) | 16 |
| [R5](review/R5-critical.md) | Professor of academic literacies and critical EAP | Stereotyping, deficit framing, normativity, inclusion, integrity and AI fairness | 21 (3 critical) |
| [R6](review/R6-esap-pgr-assessment.md) | Doctoral-writing and language-assessment specialist | Research genres, disciplinary conventions, test claims, framework mapping | 26 |

Verdicts in brief:

- **R1:** "Not yet fit for syllabus design. It is a strong inventory but a weak curriculum."
- **R2:** "Linguistically sound and well informed by research", but with specific misclassifications, over-generalised rules and weak L1-transfer mechanisms.
- **R3:** "Usable as a curriculum map, but not yet safe as a sequencing or diagnosis graph", because soft edges created spurious hubs.
- **R4:** About 83% of sampled citations are supported, 10% need hedging, 2% are misattributed and 4% overclaim or are decorative.
- **R5:** "Progressive surface, assimilationist structure." The deferential-learner caricature recurs, critical topics come last in the graph, and the AI-integrity guidance places the burden of proof on learners.
- **R6:** "Sound and usable", but with gaps in PGR milestones, viva variation across countries, ESAP coverage, dated test formats and decorative framework links.

## Revision

1. **Mechanical fixes.** 354 checked changes (text corrections, edge
   removals and softening, new edges, level and stage corrections, framework
   links, citation removals) were applied with
   `authoring/tools/apply-changes.mjs`. One duplicate was skipped.
2. **Structural changes**, decided by the curator:
   - Per-stage roles (`core`/`develop`/`revisit`), with pre-sessional split
     into undergraduate- and postgraduate-entry stages.
   - New fields: `coreBand`, `audience` and a `disciplines` facet.
   - An A2+ level and an `institutional` difficulty kind.
   - Graph metrics computed on hard edges only.
   - 21 merges and 3 renames, with retired IDs mapped in
     `data/retired-topics.json`.
   - Two domain moves, a new Assessment & Progression strand and two strand
     renames.
   - 33 new topics.
3. **Strand revision.** Sixteen author agents, one per strand group,
   received a packet of the findings that touched their domains. They
   rewrote merge survivors, authored the new topics, assigned stage roles,
   and addressed or answered every remaining recommendation.
4. **Integration.** The curator then:
   - applied 18 cross-strand edges;
   - verified and merged 13 further references;
   - re-ran web verification of the bibliography (478 of 480 references are
     now web-verified);
   - authored task anchors and course templates;
   - re-audited the result.

## Before and after

| Measure | First build | After revision |
|---|---:|---:|
| Topics | 557 | 569 |
| Prerequisite edges (hard) | 1,347 (522) | 1,473 (520) |
| Topics tagged for undergraduate in-sessional | 524 (94%) | 59 core / 569 |
| Downstream reach of `acu.university-structures` | 368 (all edges) | 0 (hard edges) |
| Longest prerequisite chain | 20 (all edges) | 9 (hard edges) |
| Difficulty records using the deferential-learner caricature | ~28 | 1 (retained in `ess.criticality`, recoded as affective) |
| Mentions of dyslexia, ADHD, autism or neurodiversity | 0 | 41 |
| Difficulties attributed to institutional causes | 0 | 54 |
| Web-verified references | 286 of 467 | 478 of 480 |
| Validator warnings | 42 | 0 |

## What remains open

- Stage roles, CEFR ranges and edge strengths are still expert
  judgements. Practitioners have not validated them.
- No human expert has reviewed this release. The reviews above were
  conducted by AI agents briefed as experts.
- ESAP coverage has grown to 64 topics but remains thinner than general EAP
  coverage. Media, architecture, pharmacy and languages have no dedicated
  topics.
- A per-topic context facet (EMI, TNE, campus) and teaching-time estimates
  were deferred.
- Two references (`basturkmen2003`, `aguilar2004`) could not be confirmed
  online and are marked unverified.

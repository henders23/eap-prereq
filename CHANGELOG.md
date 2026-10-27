# Changelog

## v1 — 2026-10-27

First release.

### Built

- 569 topics in 16 strands and 51 domains, covering:
  - foundation, pre-sessional (undergraduate and postgraduate entry),
    in-sessional (undergraduate and taught postgraduate) and doctoral
    provision;
  - general (EGAP) and discipline-specific (ESAP) EAP.
- 1,473 prerequisite edges: 520 hard and 953 soft. 745 of them cross
  strands. The graph is acyclic.
- A teaching-guidance record for every topic. Each has a research-informed
  summary, activities with rationales, common difficulties with diagnostic
  cues and responses, a diagnostic task with response levels, and context
  notes.
- A bibliography of 480 references. 478 are web-verified, and every
  citation resolves to it.
- Alignment to CEFR Companion Volume scales, IELTS assessment criteria, the
  ACRL Framework and the Vitae Researcher Development Framework, as codes
  and titles only.
- Task anchors and worked course templates (`data/pathways.json`).
- Retired-ID mappings for topics merged or renamed during review
  (`data/retired-topics.json`).
- JSON Schemas, a dependency-free validator, tests and generated reports.

### Adversarial review and revision

Six expert-briefed reviewer agents examined the first build and reported
167 findings. The release incorporates the revision. The main changes were:

- **Stage tagging.** Flat stage tags became per-stage roles. Pre-sessional
  was split into undergraduate- and postgraduate-entry stages.
- **New fields.** The schema gained `coreBand`, `audience` and
  `disciplines`, an A2+ level, and an `institutional` difficulty kind.
- **Graph metrics.** Depth, reach and centrality are now computed on hard
  edges only.
- **Topic set.** 21 overlapping topics were merged and 3 renamed. 33 topics
  were added, including PGR milestones, ESAP genres, spoken grammar,
  mediation, assistive technology, translingual writing and citation
  politics.
- **Strands.** Identity and intercultural topics moved into the
  socialisation strand. A new Assessment & Progression strand was created.
- **Content.**
  - Corrected linguistic misclassifications and weak L1-transfer
    mechanisms.
  - Removed misattributed citations and hedged overclaims.
  - Replaced stereotyped learner caricatures.
  - Placed the burden of proof for AI and similarity flags on institutions.
  - Added accessibility considerations.
  - Removed UK-as-default framing.

See [`reports/adversarial-review.md`](reports/adversarial-review.md) for
every finding and its disposition.

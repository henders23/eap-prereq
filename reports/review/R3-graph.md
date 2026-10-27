# R3 — Prerequisite-graph review

Reviewer persona: learning scientist and knowledge-graph/adaptive-learning engineer with an EAP teaching background.
Scope: hubs, edge direction and strength, missing edges, level/stage coherence, entry points and depth, and reteach coupling.
Data: taxonomy v1 as rebuilt on 2026-10-27 (557 topics, 1,347 edges, 522 hard). The edge set is identical to the pre-rebuild data, and PRN now sits in Academic Speaking.

## Overall verdict

**Usable as a curriculum map, but not yet safe as a sequencing or diagnosis graph for an adaptive system.**

Most individual edges are defensible, and the reasons are unusually specific. Hard edges are mostly well chosen inside domains. The graph-level behaviour, however, is distorted by two systemic problems:

1. **The derived metrics treat soft edges as dependencies.** Of 20,047 transitive prerequisite pairs, 92% exist only through soft "usually taught first" edges. As a result, the published `downstreamCount`, `depth` and `centrality` mostly measure soft-edge chaining. The #2 and #3 "hubs" (`acu.university-structures`, `acu.teaching-formats`) have hard-only reach of 3 and 0.
2. **A small number of mis-pitched edges chain foundation B1 topics behind B2 grammar.** The worst is a soft "reading spine" (nominalisation → parsing → main ideas → fact/opinion → argument → essay). It puts *essay structure* at depth 9, and the single edge `rds.main-ideas <- rdp.parsing-complex-sentences` accounts for 988 transitive pairs.

On top of these, 23 hard edges violate stage order (validator warnings), and **44 hard edges have a prerequisite that starts above the dependent's CEFR start**. The validator cannot see the latter group. There are also clear gaps:

- presentations hardly touch pronunciation;
- research writing is weakly coupled to stance;
- source-based essay genres never reach in-text citation;
- *parsing complex sentences* does not depend on subordination.

The proposed changes fix all of these mechanically. I applied the full set to a scratch copy of the repo with `authoring/tools/apply-changes.mjs`: 106 changes applied, and only the 7 `other` items were skipped. After `build` + `validate`, the graph has **0 stage warnings, 0 hard edges with prerequisite cefrStart above the dependent's, no cycles**, and `npm test` passes 24/24.

### Proposed changes by kind

| Kind | Count |
|---|---:|
| edge-remove | 19 |
| edge-strength (hard → soft) | 34 |
| edge-add | 18 (all acyclic, checked) |
| set-cefr | 20 |
| retag-stages | 4 topics |
| edit-field (guidance reteach) | 11 |
| other (metric/validator/editorial) | 7 |

### Before and after (measured on a scratch copy with all changes applied)

| Measure | Now | After R3 |
|---|---:|---:|
| Transitive prerequisite pairs (all edges) | 20,047 | 16,401 |
| …through hard edges only | 1,614 | 1,272 |
| Hard edges | 522 | 493 |
| Max depth, all edges (longest chain) | 19 (20 topics) | 17 (18 topics) |
| Max depth, hard edges only | 8 | 7 |
| Entry points | 18 | 22 |
| Validator stage warnings | 23 | 0 |
| Hard edges with prerequisite cefrStart > dependent cefrStart | 44 | 0 |
| `acu.university-structures` downstream (hard-only) | 368 (3) | 226 (3) |
| `rdp.parsing-complex-sentences` downstream | 262 | 37 |
| `grm.nominalisation` downstream | 276 | 102 |
| `sem.turn-taking` depth | 11 | 3 |
| `ess.essay-structure` depth | 9 | 7 |
| Foundation B1/B1+ topics at depth ≥ 6 | 61 of 170 | 51 of 170 |

### Method

- **Edges reviewed:** all 1,347 edges, with their reasons and endpoint levels and stages. This includes every hard edge in every domain, well beyond the brief's minimum of 250 edges and 6 domains.
- **Reach impact:** for every edge I measured how many transitive pairs disappear when it alone is removed.
- **Hard-only metrics:** recomputed depth and reach on hard edges only.
- **Level and stage checks:** checked every edge for CEFR-start and first-stage order. The checks were stricter than the validator's and covered soft edges too.
- **Ancestry checks:** confirmed that genre, research, presentation and seminar topics reach the components an expert would expect.
- **Reteach review:** checked all 882 reteach targets against their difficulty patterns.

The scripts are in the session scratchpad, not in the repo.

### Applying the changes

- `R3-graph.json` uses the brief's vocabulary, plus `edit-field` (`file: "guidance"`) for reteach targets, which `apply-changes.mjs` supports.
- **Order matters for the R3-04 and R3-06 reteach edits.** Each one appears *before* the edge removal it relates to, because `edge-remove` clears matching reteach targets to null. Apply findings in file order.
- The tool clears the other reteach targets that point at removed edges to null; that is the intended outcome for them.
- `other` items need code or editorial work.

---

## Critical

### R3-01 — The metrics count soft edges as dependencies; the hubs are mostly artefacts
- **The soft-edge share is overwhelming.** 18,433 of 20,047 transitive pairs (92%) exist only through soft edges.
- **The acu hubs vanish under hard-only reach.** `acu.university-structures` has downstream 368 and centrality 0.55 (rank #2). `acu.teaching-formats` has 326 and 0.50 (#3). Their hard-only reach is 3 and 0.
- **The grammar hub shrinks too.** `grm.clause-elements` reaches 463 topics, but only 81 through hard edges.
- **Why this matters in production:**
  - Centrality-weighted diagnosis would probe "How universities are organised" before grammar or reading.
  - Gating on transitive soft prerequisites would block, for example, B1 essay structure behind B2 nominalisation.
- **The validator has a blind spot.** Its CEFR check compares a hard prerequisite's `cefrStart` with the dependent's `cefrEnd`, which never fires, so the 44 issues in R3-08 are invisible.
- **Recommendation:**
  - Compute `downstreamCount`, `depth` and `centrality` on hard edges only, or publish hard-only variants alongside them.
  - Document soft edges as one-step ordering hints that must not be composed.
  - Add validator warnings for (a) hard edges where the prerequisite's `cefrStart` is above the dependent's `cefrStart`, and (b) soft edges with a gap of two or more CEFR steps or stages.

### R3-02 — A soft "reading spine" gates foundation literacy behind B2 grammar
The current longest path to `ess.essay-structure` runs:

> voc.high-frequency-base → phr.collocation-awareness → grm.prepositions → grm.np-postmodification =H⇒ grm.nominalisation (B2, not foundation) =H⇒ rdp.parsing-complex-sentences → rds.main-ideas (B1) → rds.fact-opinion-claim → arg.argument-concept → ess.essay-structure

The edges with the most spurious reach (pairs removed if the edge alone is deleted):

| Edge | Pairs | Problem |
|---|---:|---|
| rds.main-ideas ← rdp.parsing-complex-sentences (soft) | 988 | A B1 FP skill placed behind a depth-5 topic. The two co-develop; parsing is a remedial pointer, not a prerequisite. |
| sta.hedging ← grm.anticipatory-it (soft) | 809 | Hedging starts with modals and adverbs. It-frames are already modelled by `phr.bundles-stance`, which hard-depends on anticipatory *it*. |
| rds.fact-opinion-claim ← sta.hedging (soft) | 628 | Gates B1 receptive status-judging behind B1+–C2 productive hedging. The natural order is the reverse, and it is already present via `crt.evidence-types → sta.claim-calibration`. |
| rdp.parsing-complex-sentences ← grm.nominalisation (hard) | 597 | Validator warning: the hard prerequisite starts at pre-sessional, the dependent at foundation. |

**Recommendation:** remove the first three and soften the fourth. R3-10 supplies the real clause-level prerequisites of parsing. After these changes, `rds.main-ideas` drops from depth 6 to 4, `arg.argument-concept` from 8 to 6, and `rdp.parsing-complex-sentences` reach from 262 to 37.

## Major

### R3-03 — The acu orientation hub: edges that are analogies or co-occurrences
Remove:

- `reg.register-awareness ← acu.teaching-formats`: register analysis needs contrasting situations, not knowledge of seminar formats.
- `acu.discourse-communities ← acu.university-structures`: the reason itself says administrative units must be "reconceptualised", so the link is an analogy.
- `wpr.audience-purpose ← acu.academic-expectations`.
- `voc.command-words ← voc.university-terminology`: the two co-occur in briefs, which is not a dependency.
- `lrn.goal-setting ← acu.academic-expectations`: goal setting is self-regulation and is already hard-dependent on `lrn.self-regulation`.

The residual reach of 226 flows through `crt.concept ← acu.academic-expectations`. I kept that edge because it is a sound ordering hint and a good reteach target. Its transitive composition is still meaningless, which is why R3-01 is the real fix.

### R3-04 — Seminar and collaboration over-chaining
- **Turn-taking is placed behind advanced listening.** `sem.turn-taking` (B1+, F) hard-depends on `lis.multi-party-discussion` (B2, not F), which hard-depends on `lis.speaker-stance`. The full chain behind turn-taking runs through `acu.academic-literacies` and `idn.elf`, giving depth 11.
- **Two other edges are pitched far above their dependents:**
  - `grw.contribution-assessment` (B1+, F) is at depth 16 because of `← grw.meetings` (B2).
  - `idn.diversity-as-resource` (B1) depends on `acu.academic-literacies` (B2+, U/M/R only), a gap of three steps.
- **Recommendation:**
  - Remove `sem.turn-taking ← lis.multi-party-discussion`.
  - Add `sem.building-on-others ← lis.multi-party-discussion` (soft), which is where tracking contributions is actually needed.
  - Soften `lis.multi-party-discussion ← lis.speaker-stance`.
  - Remove the other two edges.
  - Repoint the turn-taking reteach ("I wait for a long enough pause to be polite…") to `prg.politeness`, which fits the pattern better.

### R3-05 — Backwards or non-dependencies
- **`dig.word-processing ← grp.report-conventions` (347 pairs).** A basic tool skill is placed downstream of the essay and argument chain, and pulls accessibility, reference managers and digital collaboration with it.
- **`sen.capitalisation ← cit.referencing-systems`.** This is backwards: capitalisation is already a soft prerequisite of `cit.reference-list`.
- **`src.reporting-verbs` (B1+, F) ← `rds.writer-stance` (B2, not F).** This edge lies on the 20-topic chain. Stance-sensitive verb choice is already modelled by `sta.evaluating-others-language`.

**Recommendation:** remove all three.

### R3-06 — Soft edges pitched far above the dependent
Remove:

- `par.topic-sentences` (B1) ← `voc.abstract-shell-nouns` (B2, not F). Repoint its reteach to `par.paragraph-unit` first.
- `par.concluding-sentences` (B1) ← `coh.signalling-nouns` (B2).
- `prs.openings` (B1+) ← `sta.engagement-markers` (B2+, U/M/R).
- `crt.applying-theory` (B1+, F) ← `rdc.theoretical-texts` (B2+, U/M/R).
- `wpr.generating-ideas` (B1) ← `crt.questioning`, which puts drafting at depth 9.

### R3-07 — The 23 stage-order warnings
Every warning is real.

**Soften** these over-strong edges:

| Dependent | Prerequisite |
|---|---|
| rdc.critical-response | rdc.evidence-evaluation |
| src.voice-boundaries | sta.averral-attribution |
| crt.multiple-perspectives | rds.writer-stance |
| ges.argumentative-essay | arg.extended-argument |
| grp.lab-report | dat.data-commentary |
| prs.explaining-visuals | dat.data-commentary |
| prn.prominence | coh.given-new |
| dse.scientific-language | grm.nominalisation |
| dse.mathematical-writing | crt.reasoning-types |
| dhl.professional-communication | reg.non-specialist-audiences |
| res.conclusions-implications | res.contribution |
| res.research-proposal | res.literature-review |

**Add hard edges** where softening would remove the only foundation-level hard support:

- `ges.argumentative-essay ← arg.position`
- `grp.lab-report ← dat.referring-to-visuals`
- `prs.explaining-visuals ← dat.describing-trends`

**Re-tag or re-level prerequisites** that are mis-tagged:

- `syn.gaps-tensions`: add pre-sessional and set B2–C2. It has three hard dependents taught at pre-sessional.
- `prs.handling-questions`: add foundation and set B1+–C1. Q&A is routine in foundation presentations.
- `voc.subtechnical-polysemy`: add foundation and set B1+–C1. It is core foundation science and law vocabulary.

**Re-tag the dependent** `sem.debate` to pre-sessional and UG only. It starts at B2 and both of its defining moves start at pre-sessional.

### R3-08 — 44 hard edges whose prerequisite starts at a higher CEFR level
The dependent cannot be unlocked at its own stated entry level. Fixes, edge by edge:

- **Soften:**
  - `grm.subject-verb-agreement ← grm.np-postmodification`
  - `sen.apostrophes-hyphens-dashes ← grm.np-premodification`
  - `lis.main-points ← lis.relevance-markers`
  - `sem.opinions ← fun.explaining`
  - `prs.structure ← reg.spoken-vs-written`
  - `prs.speaking-from-notes ← reg.spoken-vs-written`
  - `src.signal-phrases ← grm.reporting-structures`
- **Lower the prerequisite's start:**
  - `grm.reference-pronouns` → B1
  - `coh.spoken-signposting` → B1
  - `sen.quotation-punctuation` → B1
  - `cit.referencing-systems` → B1
  - `crt.evidence-types` → B1
  - `prg.politeness` → B1
  - `prg.requests` → B1
  - `sta.evaluating-others-language` → B2
  - `res.research-questions` → B2
  - `pub.journal-selection` → B2+
- **Raise composite dependents:**
  - `ges.discussion-essay`, `ges.explanation-essay`, `ges.problem-solution-essay` and `ges.short-answer` → B1+
  - `ess.answering-question` → B1+
  - `prs.delivery-voice` → B1+
  - `gai.authorship-voice` → B2+

Combined with R3-07, every hard edge then satisfies prerequisite `cefrStart` ≤ dependent `cefrStart`. I checked that none of the re-levels creates a new violation.

### R3-10 — Missing: *parsing complex sentences* lacks clause-combining grammar
`rdp.parsing-complex-sentences` cannot reach `grm.subordination` or `sen.sentence-types`; its only prerequisites are noun-phrase premodification and nominalisation.

**Recommendation:** add hard edges from `grm.subordination` and `grm.relative-clauses`. Both are B1 and foundation-tagged.

### R3-11 — Missing: research writing is weakly coupled to stance
- `res.discussion` reaches `sta.claim-calibration` only via `res.results → dat.data-commentary`.
- `res.limitations`, `res.introductions-cars`, `res.gap-niche`, `res.methods` and `res.literature-review` do not reach it at all.
- No `res.*` topic except contribution and positionality reaches self-mention or impersonality, even though methods sections are the classic site of the passive-versus-"we" choice.

**Recommendation:**
- Add `res.discussion ← sta.claim-calibration` (hard).
- Add `res.limitations ← sta.claim-calibration` (soft).
- Add `res.methods ← reg.impersonality-presence` (soft).
- Soften `dat.data-commentary ← sta.claim-calibration` so that foundation data work is not gated by a B2–C2 topic.

### R3-12 — Missing: presentations barely touch pronunciation
- Only `prs.delivery-voice` links to `prn.*`.
- `prs.research-presentations` depends on neither delivery nor signposting.
- `pub.viva`, `exm.oral-exams` and `dad.studio-critique` reach no `prn.*` topic.

**Recommendation:** add soft edges `prs.research-presentations ← prs.delivery-voice`, `prs.research-presentations ← prs.signposting` and `prs.delivery-voice ← prn.fluency`.

### R3-13 — Missing: source-based essays never reach in-text citation
- `par.integrating-evidence` has no citation-format prerequisite.
- The discussion, compare–contrast, explanation and problem–solution essays do not reach `par.integrating-evidence`, `src.paraphrasing` or any `cit.*` format topic. A system could therefore certify a learner on university essays with no citation skill.
- `ges.reflective-writing` is not linked to `lrn.reflective-logs`, its natural precursor.

**Recommendation:** add `par.integrating-evidence ← cit.author-date-in-text`, the four essay genres `← par.integrating-evidence`, and `ges.reflective-writing ← lrn.reflective-logs`. All are soft.

### R3-14 — Entry points and depth
- **The entry points themselves are sensible.** The 18 are clause analysis, high-frequency vocabulary, orientation, and concept topics for reading, writing, sources, integrity, listening, notes, learning, AI, data and testing.
- **But too few topics behave like entry points**, because soft chaining pushes basic topics deep: 61 of 170 foundation B1/B1+ topics have depth ≥ 6.
- **The 20-topic longest chain is a symptom of over-chaining.** It runs: grammar → reading → argument → sources → synthesis → coursework literature review → project report → dissertation → thesis → chapter metatext.
  - A long PGR pathway is plausible in itself.
  - The defect is that its first nine links are foundation topics gated by B2 grammar, and 14 of its 19 links are soft.
- **After R3:**
  - There are 22 entry points; `reg.register-awareness`, `sen.capitalisation`, `acu.discourse-communities` and `dig.word-processing` become entries.
  - Max depth falls from 19 to 17, and hard-only depth is 7.
  - Report hard-only depth (R3-01).

### R3-15 — Reteach coupling
- **The validator couples guidance to edges.** It requires `reteachPrerequisiteId` to be a direct prerequisite, which puts pressure on authors to add edges in order to license remediation. `rds.main-ideas ← rdp.parsing-complex-sentences` appears to be one such edge.
- **Nine reteach targets rest on edges removed here.**
  - Two are repointed: turn-taking → `prg.politeness`; topic sentences → `par.paragraph-unit`.
  - The other seven are cleared to null by the tool.
- **Nine further reteach choices do not address their difficulty pattern.** Each is fixed with `edit-field`:

  | Topic | Difficulty | New target |
  |---|---|---|
  | voc.countability-academic-nouns | Greco-Latin plurals | voc.dictionary-use |
  | rdc.critical-response | opinion unconnected to the text | rdc.critical-questions |
  | prn.repair | not noticing listener confusion | prn.intelligibility |
  | exm.objective-questions | cue-based tricks | exm.exam-formats |
  | coh.writer-responsibility | over-explicitness | wpr.audience-purpose |
  | crt.multiple-perspectives | "essays must not take sides" | null |
  | coh.text-patterns | missing evaluation element | null |
  | sem.preparation | underestimating reading time | null |
  | res.literature-review | "I am only a student" | null |

- **Coverage:** 563 of 1,445 difficulties (39%) have no reteach target.
- **Longer-term recommendation:** add an optional `remedialTopicIds` field, allowed to point at any ancestor or related topic, so that guidance no longer drives graph structure.

## Minor

### R3-09 — Over-strong hard edges (no level problem)
These are not "cannot be learned without". Soften all twelve:

- voc.academic-verbs ← voc.word-grammar-patterns
- grm.np-premodification ← voc.word-families-morphology
- prn.word-stress ← voc.word-families-morphology
- grm.conditionals ← grm.epistemic-modality
- grm.fronting-inversion ← grm.tense-aspect
- grm.linking-adverbial-placement ← sen.semicolons-colons
- fun.recommending ← grm.complement-clauses
- prs.purpose-audience ← reg.register-awareness
- grw.inclusive-collaboration ← idn.elf
- src.paraphrasing ← cit.when-to-cite (an integrity obligation, not a component of the linguistic skill)
- ges.reflective-writing ← crt.applying-theory
- lrn.time-management ← lrn.goal-setting

### R3-16 — Transitively implied hard edges
69 hard edges are implied by a longer path, contrary to AUTHORING section 3. Examples: `sta.claim-calibration ← sta.hedging`, `grm.passive-voice ← grm.clause-elements`, `grp.dissertation-overview ← ges.literature-review-assignment`.

Many are distinct and important, and `findRedundantEdges` counts soft paths too. **Recommendation:** after applying R3, re-run the check on hard edges only and prune editorially, not mechanically.

### R3-17 — Foundation-tagged topics that start at B2
AUTHORING says foundation learners are typically B1–B1+, yet 15 foundation-tagged topics start at B2. `sem.debate` is fixed in R3-07. The rest need an editorial decision (lower the start to B1+, or drop the foundation tag):

- exm.open-book, prg.formal-statements
- dse.protocols-specifications, dse.mathematical-writing
- dhl.evidence-based-practice
- dbe.business-case-analysis, dbe.economic-reasoning, dbe.critical-frameworks
- dlw.legal-language, dlw.case-reading
- dhu.close-reading
- dad.studio-critique, dad.artist-statement, dad.design-rationale

Three remaining soft edges with gaps of two or more steps are tied to this question:

- dhl.evidence-based-practice ← num.interpreting-statistics
- dbe.critical-frameworks ← crt.evaluating-theories
- dad.artist-statement ← reg.non-specialist-audiences

### R3-18 — Weakly connected topics
- **Degree-1 topics:** lis.digressions, prn.segmental-priorities, par.length-division, cit.locators, lrn.motivation, acu.critical-eap, acu.emi-tne and dig.automated-feedback-tools.
- **Leaves:** 133 topics have no dependents.
- **Weak cross-links:**
  - `prn.segmental-priorities` has no link to listening decoding or to `prn.technical-terms`.
  - Seminar topics other than turn-taking and questions link to no listening topic.

These are mostly acceptable. Consider them in the next speaking-strand revision; no mechanical change is proposed.

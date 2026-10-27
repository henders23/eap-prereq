# R6 — Expert review: research communication, genres, disciplinary literacies and assessment

**Reviewer persona:** doctoral-writing specialist and language-assessment expert (PGR supervision and viva examining, journal editing, ESAP co-teaching with law, health, engineering and business, IELTS/CEFR alignment work).

**Scope:** every topic and guidance record in RES (22), PUB (11), GES (16), GRP (13), DSE (6), DHL (5), DBE (4), DLW (5), DSS (4), DHU (4), DAD (4), TST (6), EXM (8) and FBK (8), which is 116 topics. The audit of framework links covers the whole dataset (1018 links). All proposed changes in the companion JSON were checked against the rebuilt `data/`:

- every `oldText` occurs exactly once in its field;
- every removed link exists;
- no topic exceeds the three-link cap after the changes.

**Companion file:** `reports/review/R6-esap-pgr-assessment.json` (26 findings, 86 proposed changes).

## Overall verdict

**Sound and usable, but it needs revision before it can be presented as covering PGR and ESAP provision.** Genre and move descriptions are accurate and well hedged. The work rests on the right literature (Swales, Paltridge, Bunton, Kwan, Yang & Allison, Hyland, Gardner & Nesi, Parkinson, Nathan, Bhatia, Twining & Miers). It consistently tells teachers to defer to local exemplars, briefs and regulations, which is the single most important ESAP principle. Assessment content avoids score-to-CEFR concordances and frames UKVI rules as changeable, as it should.

I found **no critical errors**: nothing would actively misinform a learner in a way that causes serious harm. The weaknesses are of four kinds:

1. **Coverage gaps at the PGR end.** These include progression reviews, post-viva corrections, thesis-to-article work, systematic reviews, open research and graduate teaching assistants. In addition, no law, business or creative-arts topic reaches PGR.
2. **Currency of the assessment content.** Test-format examples describe a legacy TOEFL task design.
3. **Oversimplification in a few high-stakes descriptions.** These are viva formats, PICO-only question framing, a bundled care-plan topic and peer-review confidentiality.
4. **Framework mapping that is systematic but partly decorative.** IELTS links appear on PGR-level topics, Vitae links on non-PGR topics, and "Reports and essays" is used as a default scale.

Severity counts: **0 critical, 12 major, 14 minor.**

## What is right (briefly)

- **CARS, IMRaD variation, the move structure of discussion sections** (Hopkins & Dudley-Evans), **commentary in results sections** (Yang & Allison; Basturkmen), **Paltridge's thesis typology**, **Bunton on PhD introductions, conclusions and metatext**, and **Connor & Mauranen's grant-proposal moves** are all represented accurately.
- **Law.** Ratio and obiter, headnotes as non-authority, the court hierarchy, IRAC and its critiques, "held" reserved for courts, and OSCOLA (5th ed., 2026, now verified) are handled competently.
- **Health.** Sackett's three-part definition of EBP, Lingard on the school–workplace tension in case presentations, PRISMA 2020 and confidentiality are all good.
- **Assessment.** Bachman & Palmer's use-argument framing, measurement error, the distinction between diagnostic and gatekeeping purposes, Moore & Morton on the gap between test tasks and university tasks, and careful WCF hedging are all strong. Grading-system content is appropriately framed as "typical, check regulations".
- **Framework mapping.** Note-taking mapping is sound: all `ntk.*` topics link "Note-taking (lectures, seminars, meetings, etc.)". Data commentary, `res.results` and `prs.explaining-visuals` link "Explaining data". Vitae links on PGR topics are mostly apt (C1 for authorship and ethics, B2/C2 for productivity, D3 for engagement, B3 for CVs, A3 for contribution).

## Framework-link audit (whole dataset)

| Observation | Evidence |
|---|---|
| Generic-scale over-use | `prod.writ.reports-essays` has 90 of 1018 links (9%), nearly twice the next scale (`rec.read.information-argument`, 48). |
| Unused scales with obvious homes | `prod.writ.creative` (accounts of experience, which is the recount stage of reflection), `prod.oral.describing-experience` and `rec.read.correspondence` (decision letters, supervisor comments) each have 0 links. |
| IELTS imbalance | 97 IELTS links. Writing Lexical Resource and Grammatical Range and Accuracy have 33 links; their Speaking counterparts have 0. 27 IELTS links sit on pgr-tagged topics. `dat.data-commentary` links Task 1 although its own description contrasts it with Task 1. |
| Vitae outside PGR | 7 Vitae links on topics with no pgr stage (`grw.*`, `crt.problem-solving`, `ess.criticality`, `mmd.multimodal-literacy`). Only one PGT/PGR-only topic (`res.chapter-metatext`) lacks a Vitae link. |
| Levels beyond topic range | 5 RES links claim C1/C2 on topics capped at C1. |
| Unlinked topics | 39 topics have no links, including all of FBK except two, most of EXM, and `tst.cefr-entry`. This is defensible, since no CEFR scale fits, but it should be stated in documentation. |

## Findings

### Major

**R6-01 (coverage): PGR milestones are missing.** Nothing covers confirmation, upgrade or progression reviews, examiners' reports and corrections, or turning a thesis into articles (including text recycling and copyright). These are among the most-requested PGR workshops.
*Proposed topics:* `res.progression-review`, `pub.thesis-corrections`, `pub.thesis-to-article`.

**R6-02 (coverage): two cross-disciplinary genres are missing or misplaced.**
- Systematic and scoping review writing exists only inside `dhl.critical-appraisal`, which bundles single-study appraisal for UG health students with PRISMA reporting for PGR. Its own review note says these are distinct genres.
- Open-research texts are absent: preregistration and registered reports, data availability statements, data management plans, and funder open-access and rights-retention statements.

*Proposed topics:* `res.systematic-review-writing`, `pub.open-research`. Narrow `dhl.critical-appraisal` to appraisal.

**R6-03 (coverage): ESAP stops at PGT for law, business and arts.**
- Law: nothing covers mooting and oral advocacy, or LLM and PhD legal research and dissertation writing. Doctrinal method is not IMRaD, and nothing in RES addresses it.
- Arts: nothing covers the practice-based exegesis.

*Proposed topics:* `dlw.mooting`, `dlw.legal-research-writing`, `dad.practice-research-exegesis`.

**R6-04 (coverage): graduate teaching assistants are absent.** Teaching, demonstrating and marking in English is a staple of PGR ESAP provision.
*Proposed topic:* `res.teaching-as-pgr`.

**R6-05 (assessment): test-format examples are dated.**
- `tst.test-formats` lists "independent and integrated writing" as a generic format.
- `tst.integrated-test-tasks` uses "a talk that challenges a reading" as its prototype. This is the legacy TOEFL iBT integrated task. TOEFL iBT dropped its independent essay in 2023 and was redesigned again from January 2026; the current task list should be verified with ETS.
- Other tests have added integrated tasks, and adaptive delivery is not mentioned.

*Fix:* generic wording, plus an instruction to check the test owner's current task list.

**R6-06 (accuracy): viva formats are oversimplified.**
- In much of continental Europe the written thesis is approved before the public defence. The topic presents these defences as parallel to a UK viva.
- "Dutch defence with an opponent" is wrong: several committee members act as opponents.
- North American proposal defences and qualifying examinations are omitted.
- UK revise-and-resubmit and lower awards are omitted, as are online and hybrid vivas.
- The mock viva has no follow-up probing, so it does not discriminate at C1–C2.

*Fix:* edits to the description, ME[0], the prompt and the context notes.

**R6-07 (accuracy): peer-review ethics omit generative AI.** The topic does not say that uploading a manuscript to a generative AI tool breaches confidentiality, which is the most likely current breach. It also omits the editor's permission needed for co-reviewing.
*Fix:* edits to ME[4] and the summary.

**R6-08 (accuracy): PICO-only question framing.** `dhl.evidence-based-practice` ME[1] would mark a correctly framed qualitative question (PEO or SPIDER) as wrong. Evidence hierarchies should also be set beside certainty grading (GRADE).

**R6-09 (accuracy and coverage): `dhl.case-reports-care-plans` bundles two professions' genres.** The medical case presentation and the nursing care plan have different structures. The care plan's nursing-process structure is not described, and "case report" clashes with published case reports, which have their own guideline (CARE).
*Fix:* split the topic into case presentations and `dhl.care-plans`.

**R6-10 (framework-mapping): Vitae links on non-PGR topics.** Remove 7 links, add D2 to `res.chapter-metatext`, and consider A3 for `arg.extended-argument`.

**R6-11 (framework-mapping): decorative and contradictory IELTS links.** Remove 4 links, including the self-contradictory `dat.data-commentary` → Task 1 link. Add the missing Speaking Lexical Resource link. Adopt a linking rule: IELTS criteria only on foundation and pre-sessional topics that serve test preparation or transition.

**R6-12 (framework-mapping): reflective genres mapped to "Reports and essays".** The CEFR "Creative writing" scale (accounts of experience) is the better match for the recount stage. Link it from `ges.reflective-writing`, `dhl.reflective-practice` and `lrn.reflective-logs`.

### Minor

**R6-13: default use of "Reports and essays".** Remove decorative links, such as `cit.author-date-in-text`, and prefer the mediation scales for source integration. Consider `rec.read.correspondence` for interpreting decision letters.

**R6-14: link changes on individual topics.**
- `res.abstracts`: "Processing text" should be core.
- `dat.captions-labelling`: add "Explaining data".
- `dhl.case-reports-care-plans`: add a written-production link.
- `dhu.interpretive-argument`: make "Reports and essays" core, since "Analysis and criticism of creative texts" does not fit historical interpretation.

**R6-15: link levels and one range.** Five RES link levels exceed the topics' C1 ceiling; trim them to C1. Change `pub.journal-selection` from C1–C1 to B2+–C1.

**R6-16: CARS versions conflated.** The description mixes Swales's 1990 Move 1 and Move 3 labels with the 2004 revision; name both versions.

**R6-17: ICMJE and CRediT nuances.**
- Under ICMJE, data acquisition can satisfy criterion 1, and contributors who meet it should be offered the chance to meet the other criteria.
- CRediT records roles; it does not decide who qualifies as an author.

**R6-18: UKVI wording incomplete.** Add the B1 requirement below degree level, the conditions for a provider's own assessment, exemptions, and the fact that approved-test arrangements change. Generalise the UK-centric ME[3].

**R6-19: reflective-model attributions and a safety point.**
- "What? So what? Now what?" originates with Borton and was developed by Driscoll and Rolfe et al.
- The 4Rs come via Bain and colleagues.
- Add the post-Bawa-Garba regulatory advice that reflective accounts can be requested in legal proceedings, so they should be anonymised and focused on learning.

**R6-20: statutory interpretation.** The literal, golden and mischief "rules" should be presented as textbook heuristics; UK courts now describe a contextual, purposive method.

**R6-21: artist statements.** Statements are not "usually first person" when they are wall labels, catalogue entries or bios.

**R6-22: thesis typology and a dependency.** Add the retrospective PhD by published works, practice-based theses and professional-doctorate portfolios. Soften the hard dependency `res.imrad` → `res.thesis-macrostructure`.

**R6-23: smaller research-writing points.**
- Report very small p-values as p < .001.
- Name the reporting-guideline families (EQUATOR).
- Cite Braun & Clarke's reflexive thematic analysis (2019/2021).
- Add transparent review, registered reports and preprint review to the review models.

**R6-24: two unobservable mastery items.** `res.positionality-writing` ME[2] and `res.writing-productivity` ME[2]. Mastery evidence is otherwise strong in these domains: product-based, with quality conditions.

**R6-25 (coverage): score reports.** Add `tst.score-reports`, covering component scores, retakes, validity periods, remote-proctored tests and test integrity.

**R6-26: Gardner and Nesi families.** The family list in `ges.genre-families` omits Empathy Writing.

## Notes for the editors

- The JSON's `other` entries hold changes that cannot be applied as field edits: splitting or narrowing topics, a dependency strength change, and bibliography additions (Braun & Clarke 2019/2021).
- New topics need prerequisite edges, guidance records and framework links authored to AUTHORING.md before release.
- Claims marked "verify" in the JSON, chiefly the details of the 2026 TOEFL iBT redesign and the current UK approved-test arrangements, concern fast-moving facts. They should be checked against official sources at release, consistent with the dataset's own policy.

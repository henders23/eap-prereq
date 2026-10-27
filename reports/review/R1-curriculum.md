# R1: Curriculum architecture review

**Reviewer stance.** I reviewed this as a BALEAP Senior Fellow and EAP programme director who has designed and accredited foundation, pre-sessional, in-sessional (UG and PGT) and doctoral provision. My question was whether a director could use this dataset to build and defend a syllabus, and if not, what stops them.

**Scope.** Coverage, overlap and granularity, stage and CEFR realism, strand/domain structure, and usability of `reports/stage-pathways.md`. I queried taxonomy v1 (557 topics, 51 domains, 1,347 edges) directly with node. All counts below come from `data/` as rebuilt with verified references, with PRN in the Academic Speaking strand.

## Overall verdict

**Not yet fit for syllabus design. It is a strong inventory but a weak curriculum.**

The topic-level writing is mostly sound and well informed. The language, discourse, sources and integrity domains are recognisably what an experienced EAP team would list, and the domain summaries handle contested positions honestly. As curriculum architecture, though, the dataset does not do the job it claims:

1. **Stage tags do not discriminate.** 94% of topics are tagged UG in-sessional, 86% pre-sessional and 84% PGT. 66% carry four or five stages. The tags record where a topic *could* appear, not where it *belongs*.
2. **The pathways are indexes, not syllabuses.** The pre-sessional pathway is one list of 477 topics ordered strand by strand, with no time weights, no core/optional distinction, no assessed-task anchors and no split by entry band or by UG/PG destination. No director could build a 6-, 10- or 12-week course from it without redoing the analysis themselves.
3. **The specificity balance is inverted.** Sentence mechanics and citation formatting are atomised into 20 topics. Meanwhile the disciplines that fill UK PGT (business, finance and accounting, education/TESOL) get a handful, and there is no discipline facet to filter by.
4. **Doctoral and non-UK contexts are underserved.** Signature PGR genres and practices are missing, while PGR tags are padded with B1-level orientation. EMI and TNE are reduced to one conceptual topic.
5. **Duplication is widespread.** Several clusters (task analysis, reading-into-writing, essay types, AI/editing tools, signposting) and several level variants contradict the dataset's own authoring rule.

Most of the fixes are architectural rather than editorial: per-stage roles, a discipline facet, a pathways/task-anchor layer, and around 20 targeted merges and 20 additions. None of them requires rewriting the good topic content. Until the critical findings are addressed, I would not recommend the dataset to a BALEAP-accredited centre as a syllabus source. I would recommend it as a checklist for auditing an existing syllabus.

**Key to stage abbreviations:** F foundation, P pre-sessional, U in-sessional UG, T in-sessional PGT, R PGR.

## Critical findings

### R1-01. Stage tags accumulate instead of discriminating

*Category:* stage-level · *Topics:* `sen.capitalisation`, `acu.university-structures`, `lrn.wellbeing`, `int.integrity-values`, `prn.intelligibility`

**Evidence and finding.** AUTHORING.md §2 tells authors to list every stage at which a topic is 'taught or revisited', so tags pile up rather than discriminate. 524 of 557 topics (94%) are tagged in-sessional-ug, 477 (86%) pre-sessional, 467 (84%) in-sessional-pgt and 372 (67%) foundation. 369 topics (66%) carry four or five stages, 107 carry all five, and only 40 carry one or two. A UG in-sessional team typically has tens of contact hours with a cohort, not hundreds. A tag that covers 94% of the taxonomy tells that team almost nothing about what to teach, and the same applies to the 84% PGT figure. The tags record where a topic might plausibly appear, not where it belongs. That is the main reason the stage pathways cannot be used (R1-02).

**Recommendation.** Replace the flat stages[] array with a per-stage role such as stageRoles: {foundation:'core', 'pre-sessional':'develop', 'in-sessional-ug':'revisit', ...}. 'Core' should mean explicitly taught and normally assessed at that stage. Cap core topics per stage (indicatively 80–120) and audit every domain against the cap. Add a validation rule: a stage cannot be 'core' for a topic whose cefrEnd is below that stage's typical entry band (UG B2, PGT B2+, PGR C1). Report counts and pathways on core topics only, with develop/revisit topics shown as optional.

**Proposed changes**

- Schema change: replace topics[].stages (string[]) with topics[].stageRoles (object keyed by stage; values 'core' | 'develop' | 'revisit'). Keep a derived stages[] for backward compatibility.
- Validation (scripts/check-strand.mjs): reject stageRoles[stage]==='core' where cefrEnd < entry band for that stage (in-sessional-ug B2, in-sessional-pgt B2+, pgr C1). Warn when a stage has more than 120 core topics.
- Re-run a stage audit domain by domain with practitioners. Start with SEN, LRN, ACU, PRG, DIG and GAI, where nearly every topic is tagged FPUT or FPUTR.

### R1-02. Stage pathways cannot be turned into a 6-, 10- or 12-week pre-sessional

*Category:* usability · *Topics:* `grm.clause-elements`, `voc.high-frequency-base`, `tst.presessional-progression`

**Evidence and finding.** reports/stage-pathways.md gives the pre-sessional as one undifferentiated list of 477 topics, grouped by strand and topologically sorted within each strand. Academic Language comes first with 79 topics, so a director reading top to bottom meets grammar and vocabulary metalanguage before any integrated task. A 10-week pre-sessional of about 20–25 contact hours a week has 200–250 hours, which is roughly 25–30 minutes per topic before tutorials, assessment or induction. Nothing tells a director what to keep for 6 weeks (B2+ entry) versus 12 weeks (B1+ entry). The dataset has no time or weight estimate per topic, no core/optional flag, and no link from topics to the assessed tasks around which UK pre-sessionals are actually built (extended source-based essay or project, seminar, presentation, reading-into-writing exam, reflective portfolio; see tst.presessional-progression). There are also no integrated units or clusters. As it stands, the pathway is an index, not a syllabus.

**Recommendation.** Add a pathways layer above the topic graph. (a) Give each topic an indicative teaching-time band (e.g. <1h, 1–3h, 3–6h, ongoing). (b) Define assessed-task anchors (pre-sessional extended project, seminar, presentation, integrated reading-into-writing exam, listening-into-note-making) and map core topics to them. (c) Publish worked templates for 6-, 10- and 12-week pre-sessionals by entry band and destination, as week-by-week integrated units of about 60–90 core topics each. (d) In stage-pathways.md, order by unit and hard prerequisite rather than by strand.

**Proposed changes**

- Add topics[].teachingTime ('<1h' | '1-3h' | '3-6h' | 'ongoing') and topics[].assessedIn (array of task-anchor ids).
- Add data/pathways.json defining task anchors and course templates: pre-sessional-6wk-B2plus-PG, pre-sessional-10wk-B2-PG, pre-sessional-12wk-B1plus-UG, foundation-EAP-module-2-terms, in-sessional-PGT-dissertation-series. Each template lists ordered units of core topic ids.
- Regenerate reports/stage-pathways.md by unit/anchor and hard-edge order, showing only core topics plus an 'optional extension' list per unit.

### R1-03. One pre-sessional stage covers both UG and PG destinations and every entry band

*Category:* stage-level · *Topics:* `res.introductions-cars`, `res.gap-niche`, `res.research-questions`, `res.research-proposal`, `par.peel`, `par.paragraph-unit`, `ess.essay-structure`, `voc.high-frequency-base`

**Evidence and finding.** The single 'pre-sessional' stage covers B1 learners heading for a first degree and B2+ learners heading for master's study, on courses of anything from 5 to 40+ weeks. Within that one tag, par.peel, par.paragraph-unit and voc.high-frequency-base (A2–B1+) sit beside res.introductions-cars, res.gap-niche and res.research-proposal (B2+–C2). 166 pre-sessional topics start at B1 and 122 start at B2 or above. The RES domain's own stageEmphasis begins 'On postgraduate pre-sessionals…', which concedes the problem. In many UK institutions most pre-sessional students progress to PGT, and their syllabus (critical reading of research articles, a source-based project or dissertation-proposal genre, seminar argument) differs materially from a UG-entry pre-sessional.

**Recommendation.** Split the stage into pre-sessional-ug and pre-sessional-pg, or add a destination qualifier, and retag. Research-writing and proposal topics should be PG-only. Paragraph scaffolds (PEEL, paragraph-unit) should be core for UG-entry and long courses only. Record course length or entry band in the pathway templates (R1-02), not in the topic.

**Proposed changes**

- Replace stage 'pre-sessional' with 'pre-sessional-ug' and 'pre-sessional-pg' (update AUTHORING.md stage table, schema enum and reports).
- Restrict to pre-sessional-pg (remove from pre-sessional-ug): res.introductions-cars, res.gap-niche, res.research-questions, res.research-proposal, res.imrad, rds.research-article-navigation, ges.literature-review-assignment, grp.project-proposal, phr.bundles-research-oriented.
- Mark as core for pre-sessional-ug and at most 'revisit' for pre-sessional-pg: par.peel, par.paragraph-unit, par.concluding-sentences, ess.essay-structure, sen.sentence-types, voc.high-frequency-base, ges.discussion-essay.

### R1-04. Disciplinary (ESAP) coverage is thin and topics cannot be filtered by discipline

*Category:* coverage · *Topics:* `dbe.professional-genres`, `dbe.business-case-analysis`, `dss.operationalising-concepts`, `grp.lab-report`, `res.methods`, `cit.numeric`

**Evidence and finding.** Only 55 of 557 topics (10%) are ESAP. The Disciplinary Literacies strand has 32 topics spread over seven discipline groupings (4–6 each), while sentence mechanics alone (SEN) has 12 and grammar has 29. Business & Economics has 4 topics, even though business, management, finance and accounting make up the largest international PGT cohorts in UK universities. Accounting and finance discourse, consultancy/client reports, psychology research reports, education/TESOL practice genres (the MA TESOL is a large international PGT market), pharmacy/nursing specifics, architecture and media all have no topics. There is also no discipline facet. ESAP topics outside the DL strand (grp.lab-report, grp.business-report, res.methods, res.results, cit.numeric, cit.note-based, voc.technical-terminology) cannot be filtered by field. A director building a science-and-engineering pre-sessional strand, or an embedded in-sessional for a business school, therefore cannot pull a coherent set.

**Recommendation.** (1) Add a disciplines[] facet to every topic (empty or 'all' for EGAP) with a controlled list (e.g. sciences, engineering, computing, health, business-management, finance-accounting, economics, law, social-sciences, education, psychology, humanities, arts-design). (2) Treat ESAP as a cross-cutting lens rather than only a strand. (3) Expand discipline coverage towards 60–80 topics, prioritising the largest international cohorts. Starter additions are proposed below.

**Proposed changes**

- Add topics[].disciplines (string[], controlled vocabulary) and populate for all 55 ESAP topics and for EGAP topics with strong disciplinary skew.
- Add `dbe.accounting-finance-discourse` (DBE, GENRE): **Language and genres of accounting and finance**. Financial statement commentary, audit and valuation reports, and the evaluative and hedged language of financial analysis in MSc Finance/Accounting assessments.
- Add `dbe.consultancy-report` (DBE, GENRE): **Consultancy and client project reports**. Client-facing reports for live or simulated consultancy projects: problem framing, evidence-based recommendations, implementation and reflection, written for a non-academic client and an academic marker.
- Add `dss.education-practice-genres` (DSS, GENRE): **Education and TESOL practice genres**. Lesson plans with rationale, teaching-practice reflections, materials evaluations and small-scale classroom research reports in education and TESOL programmes.
- Add `dss.psychology-research-report` (DSS, GENRE): **Psychology research reports**. APA-style empirical reports in psychology, including hypotheses, statistical reporting conventions, participants and materials sections, and the discipline's stance conventions.
- Add `dse.lab-notebooks` (DSE, GENRE): **Laboratory notebooks and research records**. Keeping contemporaneous, reproducible lab or computational notebooks and fieldwork records that meet research-integrity and data-management expectations.
- Add `dhl.clinical-reasoning-writing` (DHL, PROCEDURAL): **Writing clinical reasoning**. Making assessment, diagnosis/problem identification and intervention reasoning explicit in nursing, pharmacy and allied-health assignments, linked to evidence and professional standards.

## Major findings

### R1-05. Doctoral (PGR) provision is missing its signature genres and practices

*Category:* coverage · *Topics:* `res.thesis-macrostructure`, `pub.viva`, `res.research-proposal`, `prs.research-presentations`

**Evidence and finding.** Searches of names, descriptions and mastery evidence return nothing for graduate teaching assistants, upgrade/confirmation or annual progress review, funding or fellowship applications, networking, or three-minute/short-format research pitches. The thesis by publication appears only as one clause inside res.thesis-macrostructure. These are standard parts of UK doctoral EAP and researcher development, and they map to Vitae RDF B3, C2, C3 and D1. Those RDF items have only 2, 3, 1 and 9 topic links respectively. The international GTA's teaching communication is a particular gap: in many institutions it is a compulsory language-screened role.

**Recommendation.** Add the PGR topics below and link them to RES/PUB prerequisites and to Vitae RDF. Re-pitch PGR content around these genres rather than revisiting foundation-level orientation (see R1-06).

**Proposed changes**

- Add `res.progression-review` (RES, GENRE): **Doctoral progression and upgrade documents**. Confirmation/upgrade reports, annual progress reviews and the accompanying oral review: summarising progress, justifying the plan, responding to panel questions.
- Add `res.publication-based-thesis` (RES, GENRE): **Thesis by publication**. Framing chapters, linking narratives and co-authorship statements that turn stand-alone papers into one coherent thesis argument.
- Add `pub.funding-applications` (PUB, GENRE): **Funding, fellowship and grant applications**. Case for support, lay summary, impact statement and track-record sections for studentships, travel grants and early-career fellowships.
- Add `sem.teaching-as-gta` (SEM, PROCEDURAL): **Leading seminars, labs and tutorials as a teaching assistant**. Classroom communication for international graduate teaching assistants: explaining, questioning, managing discussion, giving spoken feedback and handling student queries.
- Add `prs.research-pitches` (PRS, GENRE): **Short-format research pitches**. Three-minute thesis and elevator-style pitches that compress a project into a single accessible narrative for mixed audiences.
- Add `pub.conference-participation` (PUB, SOCIOPRAGMATIC): **Participating in conferences**. Asking and answering questions from the floor, chairing a session, and following up contacts at conferences and research seminars.

### R1-06. PGR tags are padded with orientation and B1-level topics

*Category:* stage-level · *Topics:* `acu.university-structures`, `acu.roles-address`, `acu.academic-expectations`, `lrn.support-services`, `lrn.time-management`, `lrn.goal-setting`, `int.integrity-values`, `prg.messaging-channels`, `dig.word-processing`, `sem.preparation`, `prs.rehearsal-timing`, `arg.argument-concept`

**Evidence and finding.** 261 topics are tagged pgr. 43 of them start at B1 and 29 are expected to be controlled by B2+ (cefrEnd ≤ B2+), which is below the C1 baseline that AUTHORING.md itself gives for doctoral researchers. Examples are acu.university-structures (B1–B2), acu.roles-address (B1–B2), lrn.time-management (B1–B2), lrn.support-services (B1–B2), int.integrity-values (B1–B2+) and arg.argument-concept (B1–B2+). A doctoral writing programme that followed the pathway would spend time on how universities are organised and what an argument is, while R1-05 shows its own core genres are missing. The PGR pathway's ordering also starts with B2-level vocabulary and grammar, not with doctoral genres.

**Recommendation.** Remove pgr from orientation and B1-entry topics where a PGR-specific topic already exists (int.research-integrity, res.writing-productivity, res.supervision, acu.hidden-curriculum). Keep pgr only where the PGR treatment is materially different, and say so in contextNotes.

**Proposed changes**

- Retag `acu.university-structures`, `acu.roles-address`, `acu.academic-expectations`, `lrn.support-services`, `lrn.time-management`, `lrn.goal-setting`, `int.integrity-values`, `prg.messaging-channels`, `dig.word-processing`, `sem.preparation`, `prs.rehearsal-timing`, `arg.argument-concept` → foundation, pre-sessional, in-sessional-ug, in-sessional-pgt

### R1-07. PGT tags include routine mechanics that do not fit a compressed one-year programme

*Category:* stage-level · *Topics:* `sen.capitalisation`, `sen.lists-bullets`, `sen.apostrophes-hyphens-dashes`, `prs.nonverbal`, `sen.quotation-punctuation`

**Evidence and finding.** 467 topics (84%) are tagged in-sessional-pgt, and 10 of the 12 SEN mechanics topics are among them. PGT in-sessional provision is short and dissertation-driven, and its time goes to critical reading, the literature review, research-informed argument and data commentary. When capitalisation, bullet lists and non-verbal communication carry the same PGT tag as the dissertation literature review, the PGT pathway loses its shape.

**Recommendation.** Remove PGT from low-level mechanics and generic presentation-delivery topics. Handle them through self-access and proofreading guidance rather than taught provision. Pair this with the core/revisit roles in R1-01.

**Proposed changes**

- Retag `sen.capitalisation`, `sen.lists-bullets`, `sen.apostrophes-hyphens-dashes`, `prs.nonverbal` → foundation, pre-sessional, in-sessional-ug

### R1-08. Foundation is pitched above typical foundation entry, with a few clearly mis-tagged topics

*Category:* stage-level · *Topics:* `dse.mathematical-writing`, `dse.protocols-specifications`, `sen.sentence-types`, `rds.scanning`, `rds.skimming`, `prg.emails-to-staff`

**Evidence and finding.** Only one topic (voc.high-frequency-base) starts below B1, and the scale has no A2+ step. International foundation programmes commonly admit students at around IELTS 4.0–5.0, which is roughly A2+ to B1. 186 foundation-tagged topics have cefrEnd C1 or C2, so the 'foundation' pathway reads as the whole undergraduate curriculum. Two DSE topics tagged foundation are degree-level: dse.mathematical-writing (writing proofs) and dse.protocols-specifications (engineering specifications). In addition, 77 foundation topics are CONCEPTUAL, which is a heavy conceptual load for A2+/B1 learners combining EAP with subject modules.

**Recommendation.** Add A2+ to the CEFR scale. Lower cefrStart for the genuine entry topics used at the start of foundation. Remove foundation from degree-level ESAP genres. When stageRoles are introduced, limit foundation 'core' to topics whose cefrStart is B1+ or below.

**Proposed changes**

- Add 'A2+' to the CEFR scale in AUTHORING.md and the schema.
- Set `sen.sentence-types` CEFR to A2–B2
- Set `rds.scanning` CEFR to A2–B2
- Set `rds.skimming` CEFR to A2–B2
- Set `prg.emails-to-staff` CEFR to A2–B2+
- Retag `dse.mathematical-writing`, `dse.protocols-specifications` → in-sessional-ug, in-sessional-pgt, pgr

### R1-09. CEFR ranges are too wide to support entry-band decisions

*Category:* stage-level · *Topics:* `ess.headings`, `sem.debate`, `grm.articles`, `sta.hedging`

**Evidence and finding.** 505 of 557 topics (91%) span two or more steps of a seven-step scale, and 39 span four. 335 (60%) end at C1, and 361 (65%) start at B1 or B1+. With ranges this uniform, cefrStart/cefrEnd cannot tell a 12-week B1+ cohort's syllabus from a 6-week B2+ cohort's. Some ranges also contradict the stage tags: ess.headings starts at B2 although grp.report-conventions (B1+) and foundation report writing need headings, and sem.debate starts at B2 although it is tagged foundation, where debate is a staple B1+ activity.

**Recommendation.** Add a single 'coreBand' per topic: the band where explicit teaching pays off most, used for course filtering. Keep cefrStart/cefrEnd as the outer envelope. Calibrate a sample against CEFR Companion Volume scales and the BALEAP Can Do Framework with practitioner panels, and correct the obvious inconsistencies now.

**Proposed changes**

- Add topics[].coreBand (single CEFR step) and use it, not the full range, for pathway filtering.
- Set `ess.headings` CEFR to B1+–B2+
- Set `sem.debate` CEFR to B1+–C1

### R1-10. Teacher-facing curriculum principles are encoded as learner topics

*Category:* structure · *Topics:* `acu.academic-literacies`, `acu.critical-eap`, `idn.diversity-as-resource`, `idn.standards-legitimacy`, `acu.emi-tne`

**Evidence and finding.** Several topics are stances that should inform the curriculum rather than things learners are taught and assessed on. The IDN domain summary admits that 'several topics are as much curriculum principles for teachers as content for learners'. acu.academic-literacies asks learners to distinguish the academic literacies model from study-skills and socialisation models. acu.critical-eap asks learners to 'examine whose norms EAP teaches'. idn.diversity-as-resource is tagged for all five stages from B1 and is written partly for programmes ('for programmes, it means…'). acu.emi-tne is a delivery context, not a skill. As learner topics they inflate counts, take core slots, and produce mastery evidence that no assessor can observe.

**Recommendation.** Add an 'audience' field (learner | teacher | both). Move curriculum principles into a 'principles' block in domains.json, where they can be cited by guidance. Where a learner-facing skill exists, rescope to it with observable mastery: for example acu.critical-eap becomes making and justifying informed choices about conventions in one's own writing. Model EMI/TNE as a context facet (R1-23).

**Proposed changes**

- Add topics[].audience ('learner' | 'teacher' | 'both'); set 'teacher' for acu.academic-literacies and idn.diversity-as-resource and move their content into domains.json principles for ACU and IDN.
- Edit `acu.critical-eap`.name → "Making informed choices about academic conventions"
- Retag `idn.standards-legitimacy` → in-sessional-pgt, pgr
- Convert acu.emi-tne into a contexts[] facet value ('emi', 'tne') rather than a topic; keep any learner-facing content (planning for EMI lecturers' language expectations) under lrn.content-through-english.

### R1-11. Identity, Plurilingualism & Intercultural Competence sits in the wrong strand

*Category:* structure · *Topics:* `idn.academic-identity`, `idn.plurilingual-repertoire`, `idn.elf`, `idn.intercultural-communication`, `idn.intercultural-rhetoric`, `idn.diversity-as-resource`, `idn.standards-legitimacy`

**Evidence and finding.** IDN sits under Argument & Critical Thinking, but not one prerequisite edge connects IDN to ARG or CRT in either direction. Its incoming prerequisites come from REG, ACU, LRN, PRN, SEM, RDS and GES, and it unlocks GRW, PUB, ACU, LIS, PRS, WPR, SRC and DIG. Its content (identity, ELF, intercultural communication, plurilingual repertoires) is academic socialisation. Placing it under critical thinking also risks reviving the deficit framing the domain rejects, namely that intercultural difference is a critical-thinking problem.

**Recommendation.** Move IDN to the Academic Socialisation & Communication strand, renamed 'Academic Socialisation, Identity & Communication'. Move idn.intercultural-rhetoric's argument-structure content into ARG mastery evidence if needed.

**Proposed changes**

- Move domain IDN to strand "Academic Socialisation & Communication"
- Rename strand 'Academic Socialisation & Communication' to 'Academic Socialisation, Identity & Communication'.

### R1-12. Assessment domains are buried in Learning & Autonomy

*Category:* structure · *Topics:* `tst.presessional-progression`, `fbk.assessment-literacy`, `exm.timed-writing`

**Evidence and finding.** FBK (feedback and assessment literacy), EXM (exams) and TST (proficiency tests and progression) sit in Learning & Autonomy beside self-regulation. TST has no prerequisite links to LRN at all: its prerequisites come from TST, SRC, GES, SYN, EXM and FBK. On a pre-sessional, assessment literacy and progression are a distinct, high-stakes thread with their own sequencing (understanding criteria, formative drafts, timed tasks, progression decisions). Programme directors plan it separately from autonomy, and accreditation scrutinises it separately too.

**Recommendation.** Create an 'Assessment & Progression' strand containing FBK, EXM and TST. Keep LRN as the Learning & Autonomy strand.

**Proposed changes**

- Move domain FBK to strand "Assessment & Progression"
- Move domain EXM to strand "Assessment & Progression"
- Move domain TST to strand "Assessment & Progression"

### R1-13. Four topics cover task and question analysis

*Category:* overlap · *Topics:* `wpr.task-analysis`, `exm.question-analysis`, `ess.answering-question`, `voc.command-words`

**Evidence and finding.** wpr.task-analysis (unpack a brief: command words, topic, limits, genre, criteria), exm.question-analysis (identify command word, topic, focus and limiting words), ess.answering-question (keep the essay relevant to the command words, focus and limits) and voc.command-words all teach the same procedure. Three of them have identical stage tags (FPUT). Teachers will teach it three times, and learners meet three mastery profiles for one skill.

**Recommendation.** Keep wpr.task-analysis as the single procedure, with exam and coursework variants in its mastery evidence. Move time allocation by marks to exm.timed-writing. Keep voc.command-words as the lexical resource.

**Proposed changes**

- Merge `exm.question-analysis`, `ess.answering-question` into `wpr.task-analysis`
- Edit `wpr.task-analysis`.name → "Analysing assignment and exam tasks"

### R1-14. Reading-into-writing appears in four places

*Category:* overlap · *Topics:* `rdc.reading-for-writing`, `wpr.reading-to-write`, `syn.integrated-tasks`, `tst.integrated-test-tasks`

**Evidence and finding.** rdc.reading-for-writing (select, read and organise sources around a writing task) and wpr.reading-to-write (move from reading and notes to one's own text) are two halves of one discourse-synthesis process. Both are FPUT, B1+–C1. syn.integrated-tasks and tst.integrated-test-tasks describe the same reading/listening-into-writing task type; the only difference is that one is a test. This is the central integrated skill of most pre-sessionals, and scattering it across four domains (RDC, WPR, SYN, TST) hides it.

**Recommendation.** Merge rdc.reading-for-writing into wpr.reading-to-write as one end-to-end procedure. Merge tst.integrated-test-tasks into syn.integrated-tasks and add a test-condition mastery statement. Make the result a named task anchor in pathways (R1-02).

**Proposed changes**

- Merge `rdc.reading-for-writing` into `wpr.reading-to-write`
- Merge `tst.integrated-test-tasks` into `syn.integrated-tasks`

### R1-15. Level variants of a single topic, despite the authoring rule against them

*Category:* overlap · *Topics:* `src.source-functions`, `cit.citation-functions`, `grp.student-abstract`, `res.abstracts`, `sta.generalisation-qualification`, `sta.hedging`, `coh.connector-precision`, `coh.linking-adverbials`, `ges.literature-review-assignment`, `res.literature-review`, `grp.dissertation-overview`, `res.thesis-macrostructure`, `grp.project-proposal`, `res.research-proposal`

**Evidence and finding.** AUTHORING.md §1 says 'Do not create level variants of one topic.' Several pairs do exactly that. src.source-functions (B1+–C1) and cit.citation-functions (B2+–C2) both describe the functions citations perform. grp.student-abstract and res.abstracts describe the same move structure. sta.generalisation-qualification is the lower-level end of hedging. coh.connector-precision is the upper end of coh.linking-adverbials. The genre pairs (lit review assignment vs research lit review, dissertation overview vs thesis macrostructure, student project proposal vs research proposal) are defensible only with explicit stage boundaries, and both members of each pair are currently tagged in-sessional-pgt.

**Recommendation.** Merge the true level variants and widen their CEFR range. For the genre pairs, keep both but make them stage-exclusive (student genres for UG/PGT, research genres for PGR plus PGT dissertation where needed) and state the boundary in each scope note.

**Proposed changes**

- Merge `src.source-functions` into `cit.citation-functions`
- Set `cit.citation-functions` CEFR to B1+–C2
- Merge `grp.student-abstract` into `res.abstracts`
- Merge `sta.generalisation-qualification` into `sta.hedging`
- Merge `coh.connector-precision` into `coh.linking-adverbials`
- Retag `res.thesis-macrostructure` → pgr
- Add explicit stage-boundary sentences to ges.literature-review-assignment vs res.literature-review and grp.project-proposal vs res.research-proposal.

### R1-16. Essay types are modelled three times

*Category:* overlap · *Topics:* `ess.essay-types`, `ges.genre-families`, `ges.compare-contrast-essay`, `ges.explanation-essay`, `ges.problem-solution-essay`, `ges.discussion-essay`, `fun.comparing-contrasting`, `fun.cause-effect`, `fun.problem-solution`

**Evidence and finding.** ess.essay-types lists argumentative, discussion, explanation/cause–effect, compare–contrast and problem–solution essays. GES then has a separate GENRE topic for each of those five, and FUN has the matching rhetorical functions. This is the IELTS/coursebook essay taxonomy. Nesi and Gardner's genre families, which the dataset itself cites 19 times, treat these as patterns inside the essay family, not as separate genres. The compare–contrast, explanation and problem–solution essays add little beyond FUN plus ess.body-organisation.

**Recommendation.** Fold ess.essay-types into ges.genre-families. Collapse the three pattern essays into one 'expository essays organised by rhetorical pattern' topic that depends on the FUN functions. Keep the argumentative and discussion essays as distinct genres.

**Proposed changes**

- Merge `ess.essay-types` into `ges.genre-families`
- Add `ges.expository-essays` (GES, GENRE): **Expository essays organised by rhetorical pattern**. Essays organised mainly by comparison, cause–effect or problem–solution, treated as patterns within the essay family and built from the FUN functions.
- Merge `ges.compare-contrast-essay`, `ges.explanation-essay`, `ges.problem-solution-essay` into `ges.expository-essays`

### R1-17. Digital and AI writing-support tools are duplicated across EDT, DIG and GAI

*Category:* overlap · *Topics:* `edt.editing-tools`, `dig.automated-feedback-tools`, `gai.language-support`, `gai.prompting-for-learning`, `dig.machine-translation`

**Evidence and finding.** edt.editing-tools and dig.automated-feedback-tools are near-verbatim duplicates. Both cover grammar checkers, automated writing evaluation and AI rewriting, treated critically and within the rules, with the same warnings about flattening voice and breaching rules. gai.language-support and gai.prompting-for-learning have identical type, CEFR range (B1+–C1) and stages (FPUTR), and both describe using AI as a tutor that keeps the learner doing the cognitive work. Machine translation is now largely delivered by the same LLM tools, yet it sits apart in DIG.

**Recommendation.** Merge the duplicates. Rescope dig.machine-translation as translation-mediated drafting and reading, whatever the tool.

**Proposed changes**

- Merge `edt.editing-tools` into `dig.automated-feedback-tools`
- Merge `gai.prompting-for-learning` into `gai.language-support`
- Edit `dig.machine-translation`.name → "Translation tools in reading and drafting"

### R1-18. Spoken signposting is split across COH, PRS and LIS

*Category:* overlap · *Topics:* `coh.spoken-signposting`, `prs.signposting`, `lis.lecture-discourse-markers`, `lis.relevance-markers`

**Evidence and finding.** coh.spoken-signposting (use and recognise macro- and micro-markers in lectures, presentations and seminars) overlaps prs.signposting (production in presentations) and lis.lecture-discourse-markers (reception). It is tagged for all five stages, so one resource appears in every pathway three times over.

**Recommendation.** Absorb coh.spoken-signposting into prs.signposting for production. Keep lis.lecture-discourse-markers for reception, and add a hard edge from prs.signposting to it.

**Proposed changes**

- Merge `coh.spoken-signposting` into `prs.signposting`

### R1-19. Mechanics are atomised while whole disciplines get four topics

*Category:* granularity · *Topics:* `sen.capitalisation`, `sen.quotation-punctuation`, `sen.apostrophes-hyphens-dashes`, `sen.numbers-units-style`, `num.number-expressions`, `num.units-measurement`, `cit.locators`, `cit.author-date-in-text`, `cit.accuracy-consistency`, `cit.reference-list`

**Evidence and finding.** Granularity is uneven. Capitalisation, apostrophes/hyphens/dashes, quotation punctuation, lists and bullets, and numbers in text are five separate topics. Numbers and units appear three times (sen.numbers-units-style, num.number-expressions, num.units-measurement). Citation mechanics have eight topics (in-text, numeric, note-based, reference list, locators, accuracy, diverse sources, systems). Meanwhile all of Business & Economics, Humanities, Social Sciences and Creative Arts get four topics each, and 'Professional business genres' is one topic. Fine-grained mechanics inflate every stage count and pathway without adding teachable units.

**Recommendation.** Consolidate the mechanics and spend the freed slots on disciplinary genres (R1-04).

**Proposed changes**

- Merge `sen.capitalisation`, `sen.quotation-punctuation` into `sen.apostrophes-hyphens-dashes`
- Edit `sen.apostrophes-hyphens-dashes`.name → "Punctuation and mechanics beyond the comma"
- Merge `sen.numbers-units-style` into `num.number-expressions`
- Merge `cit.locators` into `cit.author-date-in-text`
- Merge `cit.accuracy-consistency` into `cit.reference-list`

### R1-20. No genre topic for the pre-sessional capstone: the extended source-based project

*Category:* coverage · *Topics:* `tst.presessional-progression`, `grp.empirical-project-report`, `ges.argumentative-essay`

**Evidence and finding.** tst.presessional-progression names 'an extended source-based essay or report' as the typical progression coursework, but no GENRE topic covers it. grp.empirical-project-report assumes primary data collection, which most pre-sessional projects do not involve. ges.argumentative-essay is a short-essay genre with no independent topic selection, research question, sustained source management, drafting cycle with tutor feedback, or reflective component. This is the single most assessed artefact in UK pre-sessional provision.

**Recommendation.** Add the genre below, link it to INF, SYN, SRC, CIT, WPR and EDT prerequisites, and use it as the central task anchor in the pre-sessional templates.

**Proposed changes**

- Add `ges.extended-source-based-project` (GES, GENRE): **Extended source-based project**. An independently researched 2,000–4,000-word essay or report on a self-chosen focus in the learner's field, developed through proposal, annotated sources, drafts and tutorials, often with a reflective commentary; the capstone of pre-sessional and foundation EAP.

### R1-21. Spoken language resources and informal academic interaction are missing

*Category:* coverage · *Topics:* `sem.opinions`, `phr.spoken-academic-formulas`, `reg.spoken-vs-written`

**Evidence and finding.** The framework alignment in coverage.md shows the gap. IELTS Speaking Lexical Resource and Grammatical Range and Accuracy have 0 linked topics. The CEFR scales for Conversation, Informal discussion and Overall oral interaction have 0, and Understanding an interlocutor has 1. No topic covers the grammar of spoken academic English (heads and tails, ellipsis, vague language, spoken complexity) or spoken accuracy priorities. Informal academic interaction (talking to peers and staff before seminars, in labs, at departmental events) is also absent. Only 17 topics (3%) are SOCIOPRAGMATIC.

**Recommendation.** Add a spoken-grammar topic and an informal-interaction topic, and link them to SEM, PRS and PRG.

**Proposed changes**

- Add `grm.spoken-grammar` (GRM, LINGUISTIC): **Grammar of spoken academic interaction**. Features and accuracy priorities of spoken academic English (heads and tails, ellipsis, vague language, discourse markers, clause chaining) for seminars, tutorials and presentations.
- Add `prg.informal-academic-interaction` (PRG, SOCIOPRAGMATIC): **Informal academic interaction and networking**. Small talk and relationship-building with peers, lab colleagues and staff around teaching and at departmental events, including topic choice and moving between informal and academic talk.

### R1-22. Mediation, central to the CEFR Companion Volume, is barely covered

*Category:* coverage · *Topics:* `reg.non-specialist-audiences`, `sem.facilitating`, `grw.inclusive-collaboration`

**Evidence and finding.** 'Overall mediation' has 0 linked topics, 'Encouraging conceptual talk' has 1, and 'Facilitating collaborative interaction' has 2. Yet explaining a concept or a reading to peers, often across languages, is everyday activity in multilingual seminars and group work, and it is assessed in many presentation and seminar tasks.

**Recommendation.** Add an explicit mediation topic and link it to sem.facilitating and grw.inclusive-collaboration.

**Proposed changes**

- Add `sem.explaining-concepts` (SEM, PROCEDURAL): **Explaining concepts and readings to peers**. Mediating a concept, text or dataset for classmates: simplifying, exemplifying, checking understanding and drawing on shared languages, in seminars, study groups and peer teaching.

### R1-23. The stage model is UK-campus-centric; EMI, TNE and other audiences are one conceptual topic

*Category:* structure · *Topics:* `acu.emi-tne`, `lrn.content-through-english`

**Evidence and finding.** The five stages are UK-campus provision types. EMI degree programmes in non-anglophone universities, TNE branch campuses and 2+2 articulation, and Australian/US bridging and direct-entry models are reduced to one CONCEPTUAL topic (acu.emi-tne). The brief explicitly includes these contexts, which have different priorities: content-lecturer expectations, translanguaging, local assessment cultures, and large-class lecture listening without seminar culture. In-sessional UG provision also increasingly serves home and widening-participation students (academic literacies), and the taxonomy does not say which topics assume an L2 learner.

**Recommendation.** Add a contexts[] facet (uk-campus, emi, tne, bridging; l2-specific vs all-students) to topics and pathway templates. Define how each stage maps onto EMI/TNE provision. Add an 'all students' flag for topics usable in in-sessional provision for home students.

**Proposed changes**

- Add topics[].contexts (e.g. ['uk-campus','emi','tne']) and topics[].learnerProfile ('l2' | 'all'); document EMI/TNE stage equivalents in AUTHORING.md.

### R1-24. No link to BALEAP frameworks or to needs-analysis-driven design

*Category:* usability

**Evidence and finding.** The framework catalogue covers CEFR-CV, IELTS, ACRL and the Vitae RDF, but not the BALEAP Can Do Framework, the learner-facing reference most UK pre-sessional syllabuses are written against. The bibliography holds baleap2008teap and the core ESP/EAP curriculum works (hutchinsonwaters1987, long2005needs, basturkmen2010, dudleyevans1998), but coverage.md lists all of them as uncited. TEAP's Curriculum Development and Programme Implementation areas, and BALEAP accreditation, expect syllabuses derived from target-situation needs analysis and aligned to assessment. The dataset offers no hooks for either: no target-situation tags, no assessment alignment, no needs-analysis guidance.

**Recommendation.** Add the BALEAP Can Do Framework as a framework source (codes and titles only) and map core topics to it. Write a short curriculum-design note on deriving a syllabus from needs analysis using the dataset's facets. Cite the uncited ESP/EAP curriculum works where they underpin the stage and specificity model.

**Proposed changes**

- Add framework source 'baleap-cando' (BALEAP Can Do Framework for EAP syllabus design and assessment) to data/frameworks.json and map pre-sessional/PGT core topics.
- Add docs/curriculum-design.md explaining needs analysis → facet filtering (stage role, discipline, context, coreBand) → task anchors → template; cite long2005needs, basturkmen2010, hutchinsonwaters1987, baleap2008teap.

### R1-25. Soft prerequisite chains through orientation topics distort pathway ordering

*Category:* usability · *Topics:* `acu.university-structures`, `acu.teaching-formats`, `grm.clause-elements`, `voc.university-terminology`, `reg.register-awareness`

**Evidence and finding.** Pathway order follows all prerequisite edges, and 825 of 1,347 edges are soft. As a result, acu.university-structures is an ancestor of 368 topics, acu.teaching-formats of 326, and grm.clause-elements of 463. Soft edges such as voc.university-terminology ← acu.teaching-formats and reg.register-awareness ← acu.teaching-formats make orientation a gate for language work. The longest chain is 20 topics overall and 17 within the pre-sessional set, which cannot be honoured on a 6-week course. Using hard edges only, the longest chain is 9.

**Recommendation.** Order pathways by hard edges plus unit membership only. Treat soft edges as 'teach nearby' hints. Review soft edges out of ACU and grammar metalanguage topics that create spurious gating.

**Proposed changes**

- Change scripts/report.mjs stage-pathway ordering to use hard edges only (max chain 9), and list soft prerequisites as 'related' rather than ordering constraints.
- Review and drop or soften the outgoing edges from acu.teaching-formats to voc.university-terminology and reg.register-awareness, which make orientation a prerequisite for language topics.

## Minor findings

### R1-26. No topic on wording survey and interview instruments

*Category:* coverage · *Topics:* `grp.empirical-project-report`, `res.ethics-documentation`, `grm.complement-clauses`

**Evidence and finding.** grp.empirical-project-report is tagged pre-sessional, UG and PGT and assumes surveys and interviews, but no topic covers writing clear, unbiased, answerable questions. Question formation is mentioned only in passing (indirect questions in reg.formality-features, embedded questions in grm.complement-clauses). Poorly worded instruments are a frequent, avoidable weakness in pre-sessional and master's projects.

**Recommendation.** Add an instrument-wording topic under RES.

**Proposed changes**

- Add `res.instrument-wording` (RES, PROCEDURAL): **Wording survey and interview questions**. Writing clear, neutral, single-focus questionnaire items, response scales and interview prompts, and piloting them for comprehension with the target participants.

### R1-27. Two 'engagement' topics collide in name

*Category:* overlap · *Topics:* `sta.engagement-markers`, `sta.dialogic-positioning`

**Evidence and finding.** sta.engagement-markers ('Reader engagement', Hyland's model) and sta.dialogic-positioning ('Dialogic positioning (engagement)', Martin and White's appraisal model) both carry the label 'engagement' for different constructs. Teachers will conflate them.

**Recommendation.** Rename sta.dialogic-positioning so it does not use 'engagement', and add one sentence in each description distinguishing the two frameworks.

**Proposed changes**

- Edit `sta.dialogic-positioning`.name → "Opening and closing space for other voices"

### R1-28. Genre and discourse community are defined twice

*Category:* overlap · *Topics:* `ges.genre-concept`, `acu.discourse-communities`

**Evidence and finding.** ges.genre-concept is named 'Genre and discourse community' and defines both concepts. acu.discourse-communities defines discourse communities again with Swales' criteria.

**Recommendation.** Narrow ges.genre-concept to genre and leave discourse community to ACU, with a hard edge from ges.genre-concept to acu.discourse-communities.

**Proposed changes**

- Edit `ges.genre-concept`.name → "What a genre is"

### R1-29. Qualitative findings writing is covered twice

*Category:* overlap · *Topics:* `res.qualitative-reporting`, `dss.qualitative-writing`

**Evidence and finding.** Both topics teach organising findings by theme, selecting and framing participant extracts, and interpreting rather than letting quotations 'speak for themselves'. They have the same stages (UTR) and the same CEFR range (B2+–C1).

**Recommendation.** Keep the findings write-up in res.qualitative-reporting and rescope dss.qualitative-writing to field notes, analytic memos and accounts of the analysis process.

**Proposed changes**

- Edit `dss.qualitative-writing`.name → "Field notes, analytic memos and analysis accounts"

### R1-30. Posters are split between PRS and MMD

*Category:* overlap · *Topics:* `prs.posters`, `mmd.poster-design`

**Evidence and finding.** prs.posters (presenting a poster) and mmd.poster-design (designing it) have identical stages (PUTR) and CEFR range (B2–C1) and are always taught and assessed together as one genre.

**Recommendation.** Merge into a single GENRE topic in PRS, with design statements included in its mastery evidence.

**Proposed changes**

- Merge `mmd.poster-design` into `prs.posters`

### R1-31. Critical questioning appears in both CRT and RDC

*Category:* overlap · *Topics:* `crt.questioning`, `rdc.critical-questions`

**Evidence and finding.** crt.questioning and rdc.critical-questions are both STRATEGIC, B1+–C1 and tagged for all five stages. Both describe a routine of interrogative questions (how do we know, according to whom, what is omitted).

**Recommendation.** Merge, keeping the CRT topic and adding text-specific mastery evidence from the RDC one.

**Proposed changes**

- Merge `rdc.critical-questions` into `crt.questioning`

### R1-32. Self-regulation, autonomy and metacognition are three conceptual topics with identical tags

*Category:* overlap · *Topics:* `lrn.self-regulation`, `lrn.autonomy`, `lrn.metacognitive-knowledge`, `lrn.independent-study`

**Evidence and finding.** lrn.self-regulation and lrn.autonomy are both CONCEPTUAL, B1–C1 and tagged for all five stages, and lrn.metacognitive-knowledge is almost the same. Learners do not need three models of the same capacity. What they need is the strategic topics (goal-setting, independent study, reflective logs).

**Recommendation.** Merge autonomy into self-regulation. Keep metacognitive knowledge as the knowledge component, and mark the conceptual SRL topics as revisit-only after foundation.

**Proposed changes**

- Merge `lrn.autonomy` into `lrn.self-regulation`

### R1-33. Acknowledgements are filed under correspondence

*Category:* structure · *Topics:* `prg.acknowledgements`

**Evidence and finding.** prg.acknowledgements is a thesis and article part-genre (depth 18, tagged UTR) but sits in Academic Pragmatics & Correspondence beside emails and requests.

**Recommendation.** Move it to RES as res.acknowledgements.

**Proposed changes**

- Re-home prg.acknowledgements to domain RES with id res.acknowledgements (keep an alias for the old id).

### R1-34. Several topics bundle distinct genres that are assessed separately

*Category:* granularity · *Topics:* `pub.academic-cv-bio`, `dhl.critical-appraisal`, `dbe.professional-genres`

**Evidence and finding.** pub.academic-cv-bio bundles academic CVs, conference bios and personal statements for postgraduate applications; the last is a final-year UG genre with different stakes. dhl.critical-appraisal bundles CASP-style appraisal assignments (UG) with PRISMA-reported systematic reviews (PGT/PGR). dbe.professional-genres bundles memos, briefing notes, management reports and pitches.

**Recommendation.** Split out the personal statement and systematic-review writing. Partly address dbe.professional-genres through the DBE additions in R1-04.

**Proposed changes**

- Add `pub.personal-statements` (PUB, GENRE): **Personal statements for postgraduate study and funding**. Statements of purpose and scholarship applications showing fit, motivation and capability with evidence, for final-year UG and PGT students.
- Add `dhl.systematic-review-writing` (DHL, GENRE): **Writing systematic and structured reviews**. Reporting search, selection, risk-of-bias and synthesis transparently following reporting guidance such as PRISMA 2020.

### R1-35. Stage tags are inconsistent within domains

*Category:* stage-level · *Topics:* `grp.lab-report`, `grp.business-report`, `dig.file-management`, `grp.case-study`

**Evidence and finding.** grp.business-report is tagged pre-sessional but grp.lab-report and grp.case-study are not, even though science/engineering and business/health pre-sessional strands routinely teach both. dig.file-management (an entry-point topic) is tagged FUTR but not pre-sessional, where version control of drafts matters for the portfolio and integrity evidence.

**Recommendation.** Add pre-sessional to these topics, as 'develop' for subject-strand pre-sessionals once stageRoles exist.

**Proposed changes**

- Retag `grp.lab-report`, `grp.case-study` → foundation, pre-sessional, in-sessional-ug, in-sessional-pgt
- Retag `dig.file-management` → foundation, pre-sessional, in-sessional-ug, in-sessional-pgt, pgr

### R1-36. No topic on employability and professional-transition communication

*Category:* coverage · *Topics:* `grp.professional-portfolio`, `pub.academic-cv-bio`

**Evidence and finding.** There is no topic on placement or graduate-job applications, competency-based interviews or workplace-transition writing (searches for 'employab', 'job interview' and 'placement' as a work context return nothing relevant). UK in-sessional teams increasingly co-deliver this with careers services, especially for PGT cohorts on one-year programmes.

**Recommendation.** Add one EAP-bounded topic (EOP proper stays out of scope).

**Proposed changes**

- Add `prg.professional-applications` (PRG, GENRE): **Applications and interviews for placements and graduate roles**. Cover letters, competency-based application answers and interview talk that translate academic experience into evidence for employers.

### R1-37. Reporting language is split over five topics

*Category:* overlap · *Topics:* `src.reporting-verbs`, `src.signal-phrases`, `grm.reporting-structures`, `src.citation-forms`, `grm.tense-in-reporting`

**Evidence and finding.** Reporting verbs, signal phrases, reporting structures, integral vs non-integral citation, and tense in reporting are five topics in two domains. Signal phrases ('According to X…') and reporting verbs are taught as one resource in practice.

**Recommendation.** Merge src.signal-phrases into src.reporting-verbs. Keep the grammar topics, but link them as hard prerequisites.

**Proposed changes**

- Merge `src.signal-phrases` into `src.reporting-verbs`

### R1-38. Note-making sits under Academic Listening

*Category:* structure · *Topics:* `ntk.notes-from-reading`, `ntk.functions-of-notes`, `ntk.reviewing-notes`

**Evidence and finding.** NTK sits in the Listening strand, but ntk.notes-from-reading and ntk.reviewing-notes are reading and study processes, and NTK unlocks SYN, WPR, EXM and RDC topics.

**Recommendation.** Rename the strand 'Academic Listening & Note-making', or move NTK to Learning & Autonomy. The rename is the lower-cost option.

**Proposed changes**

- Rename strand 'Academic Listening' to 'Academic Listening & Note-making'.

### R1-39. Domain stage emphasis is accurate but does not tell designers what to prioritise

*Category:* usability

**Evidence and finding.** Each domain's stageEmphasis is one sentence per stage and matches the topic tags (no stage mismatches found across 51 domains). It does not name priority topics, and it never says what to leave out. Example: TST lists PGT emphasis while only 2 TST topics are PGT-tagged.

**Recommendation.** Add priorityTopics (3–6 ids) and deprioritise (ids) per stage in domains.json, and render them in stage-pathways.md as the first and last lines of each domain block.

**Proposed changes**

- Extend domains[].stageEmphasis[stage] to { text, priorityTopics: [], deprioritise: [] }.

### R1-40. No topic on online and remote timed assessment

*Category:* coverage · *Topics:* `exm.exam-formats`, `exm.open-book`, `exm.timed-writing`

**Evidence and finding.** Online, time-windowed and remotely invigilated exams are now routine. They raise their own language and integrity issues (24-hour windows, typed timed writing, permitted resources, AI rules), and no topic mentions them.

**Recommendation.** Add a topic, or widen exm.open-book's scope and name to include online time-windowed assessment.

**Proposed changes**

- Edit `exm.open-book`.name → "Open-book, take-home and online time-windowed exams"

### R1-41. Provenance claims do not match what ships

*Category:* usability

**Evidence and finding.** PROVENANCE.md points readers to reports/adversarial-review.md, which does not exist. After the reference rebuild, 286 of 467 references are web-verified and 181 (39%) are still unverified. PROVENANCE.md describes a 'curator-checked' status that no reference carries, and it does not tell users that over a third of the bibliography is unchecked. A programme director deciding whether to trust the dataset, or citing it in an accreditation submission, needs both points to be accurate.

**Recommendation.** Fix the link (or create the log). State the current verification split in PROVENANCE.md and coverage.md, and flag in each topic's output which of its citations are still unverified.

**Proposed changes**

- Correct PROVENANCE.md link to the review outputs under reports/review/ and align its verification-status description with references.json.

---

41 findings (4 critical, 21 major, 16 minor). Machine-readable version: `reports/review/R1-curriculum.json`.

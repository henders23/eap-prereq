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
| Prerequisite edges (hard) | 1,347 (522) | 1,473 (519) |
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

## Disposition of every finding

Statuses: **Applied** means the reviewer's checked changes were applied mechanically (count in brackets). **Structural** means the curator implemented it as a schema, merge or strand change. **Revised** means a strand author addressed it in the revision pass. **Response** means the author recorded a reasoned partial or full decline in the named topics' `reviewNotes`. **Declined** or **Deferred** decisions by the curator give the reason.

### R1-curriculum

| ID | Severity | Finding | Disposition |
|---|---|---|---|
| R1-01 | critical | AUTHORING.md §2 tells authors to list every stage at which a topic is 'taught or revisited', so tags pile up rather than discriminate. | Structural: flat stages replaced by per-stage roles (core/develop/revisit); validator flags core roles below a stage's entry band and stages with >150 core topics; Response in `prn.intelligibility` |
| R1-02 | critical | reports/stage-pathways.md gives the pre-sessional as one undifferentiated list of 477 topics, grouped by strand and topologically sorted within each strand. | Structural: task anchors and seven course templates in data/pathways.json; stage pathways show core topics in hard-prerequisite order. Deferred: per-topic teaching-time field; Response in `voc.high-frequency-base`, `syn.integrated-tasks`, `tst.presessional-progression` |
| R1-03 | critical | The single 'pre-sessional' stage covers B1 learners heading for a first degree and B2+ learners heading for master's study, on courses of anything from 5 to 40+ weeks. | Structural: pre-sessional split into pre-sessional-ug and pre-sessional-pg; Response in `voc.high-frequency-base`, `phr.bundles-research-oriented` |
| R1-04 | critical | Only 55 of 557 topics (10%) are ESAP. | Structural: disciplines facet on every topic; ten new ESAP topics (ESAP now 64, short of the suggested 60–80 disciplinary topics); Response in `rds.research-article-navigation` |
| R1-05 | major | Searches of names, descriptions and mastery evidence return nothing for graduate teaching assistants, upgrade/confirmation or annual progress review, funding or fellow… | Structural: six PGR topics added (progression review, thesis by publication, funding applications, teaching as a PGR, research pitches, conference participation); Response in `res.teaching-as-pgr` |
| R1-06 | major | 261 topics are tagged pgr. | Response in `int.integrity-values`, `acu.university-structures`, `acu.academic-expectations`, `acu.hidden-curriculum`, … |
| R1-07 | major | 467 topics (84%) are tagged in-sessional-pgt, and 10 of the 12 SEN mechanics topics are among them. | Response in `sen.lists-bullets`, `sen.punctuation-mechanics` |
| R1-08 | major | Only one topic (voc.high-frequency-base) starts below B1, and the scale has no A2+ step. | Structural: A2+ added to the CEFR scale; Applied (4); Response in `rds.scanning` |
| R1-09 | major | 505 of 557 topics (91%) span two or more steps of a seven-step scale, and 39 span four. | Structural: coreBand field added; Applied (2); Response in `coh.linking-adverbials`, `sta.hedging`, `sem.debate` |
| R1-10 | major | Several topics are stances that should inform the curriculum rather than things learners are taught and assessed on. | Structural: audience field (learner/teacher/both). Declined: separate principles block; domain summaries carry the principles; Applied (1); Response in `acu.academic-literacies`, `acu.critical-eap`, `acu.emi-tne`, `idn.diversity-as-resource`, … |
| R1-11 | major | IDN sits under Argument & Critical Thinking, but not one prerequisite edge connects IDN to ARG or CRT in either direction. | Structural: IDN moved to 'Academic Socialisation, Identity & Communication' |
| R1-12 | major | FBK (feedback and assessment literacy), EXM (exams) and TST (proficiency tests and progression) sit in Learning & Autonomy beside self-regulation. | Structural: new 'Assessment & Progression' strand (FBK, EXM, TST) |
| R1-13 | major | wpr.task-analysis (unpack a brief: command words, topic, limits, genre, criteria), exm.question-analysis (identify command word, topic, focus and limiting words), ess.… | Applied (1); Structural: 2 merge(s)/rename(s); Response in `voc.command-words`, `wpr.task-analysis` |
| R1-14 | major | rdc.reading-for-writing (select, read and organise sources around a writing task) and wpr.reading-to-write (move from reading and notes to one's own text) are two halv… | Structural: 2 merge(s)/rename(s); Response in `syn.integrated-tasks` |
| R1-15 | major | AUTHORING.md §1 says 'Do not create level variants of one topic.' Several pairs do exactly that. | Applied (1); Structural: 4 merge(s)/rename(s); Response in `coh.linking-adverbials`, `sta.hedging`, `ges.literature-review-assignment`, `grp.project-proposal`, … |
| R1-16 | major | ess.essay-types lists argumentative, discussion, explanation/cause–effect, compare–contrast and problem–solution essays. | Structural: 4 merge(s)/rename(s); Response in `ges.genre-families`, `ges.expository-essays` |
| R1-17 | major | edt.editing-tools and dig.automated-feedback-tools are near-verbatim duplicates. | Applied (1); Structural: 2 merge(s)/rename(s); Response in `dig.automated-feedback-tools` |
| R1-18 | major | coh.spoken-signposting (use and recognise macro- and micro-markers in lectures, presentations and seminars) overlaps prs.signposting (production in presentations) and … | Structural: 1 merge(s)/rename(s); Response in `lis.lecture-discourse-markers`, `prs.signposting` |
| R1-19 | major | Granularity is uneven. | Partly declined: cit.locators and cit.accuracy-consistency kept separate (locators apply across all systems; accuracy now includes checking that sources support claims); Applied (1); Structural: 4 merge(s)/rename(s); Response in `sen.punctuation-mechanics`, `cit.locators`, `cit.accuracy-consistency`, `num.number-expressions` |
| R1-20 | major | tst.presessional-progression names 'an extended source-based essay or report' as the typical progression coursework, but no GENRE topic covers it. | Structural: ges.extended-source-based-project added; Response in `ges.extended-source-based-project`, `grp.empirical-project-report` |
| R1-21 | major | The framework alignment in coverage.md shows the gap. | Structural: grm.spoken-grammar and prg.informal-academic-interaction added; Response in `phr.spoken-academic-formulas`, `reg.spoken-vs-written`, `grm.spoken-grammar`, `prg.informal-academic-interaction` |
| R1-22 | major | 'Overall mediation' has 0 linked topics, 'Encouraging conceptual talk' has 1, and 'Facilitating collaborative interaction' has 2. | Structural: sem.explaining-concepts added; Response in `reg.non-specialist-audiences` |
| R1-23 | major | The five stages are UK-campus provision types. | Deferred: per-topic contexts facet; EMI/TNE stage mapping documented in AUTHORING.md and context notes added in revision; Applied (1); Response in `lrn.content-through-english`, `acu.emi-tne` |
| R1-24 | major | The framework catalogue covers CEFR-CV, IELTS, ACRL and the Vitae RDF, but not the BALEAP Can Do Framework, the learner-facing reference most UK pre-sessional syllabus… | Partly declined: BALEAP Can Do Framework not mapped (no openly reusable code list to verify); docs/curriculum-design.md added, citing needs-analysis works |
| R1-25 | major | Pathway order follows all prerequisite edges, and 825 of 1,347 edges are soft. | Structural: depth, reach, centrality and pathway ordering use hard edges only; Applied (1); Response in `voc.university-terminology`, `acu.teaching-formats`, `acu.academic-expectations`, `acu.roles-address` |
| R1-26 | minor | grp.empirical-project-report is tagged pre-sessional, UG and PGT and assumes surveys and interviews, but no topic covers writing clear, unbiased, answerable questions. | Structural: res.instrument-wording added; Response in `grp.empirical-project-report` |
| R1-27 | minor | sta.engagement-markers ('Reader engagement', Hyland's model) and sta.dialogic-positioning ('Dialogic positioning (engagement)', Martin and White's appraisal model) bot… | Applied (1) |
| R1-28 | minor | ges.genre-concept is named 'Genre and discourse community' and defines both concepts. | Applied (2); Response in `ges.genre-concept` |
| R1-29 | minor | Both topics teach organising findings by theme, selecting and framing participant extracts, and interpreting rather than letting quotations 'speak for themselves'. | Applied (1) |
| R1-30 | minor | prs.posters (presenting a poster) and mmd.poster-design (designing it) have identical stages (PUTR) and CEFR range (B2–C1) and are always taught and assessed together … | Structural: 1 merge(s)/rename(s) |
| R1-31 | minor | crt.questioning and rdc.critical-questions are both STRATEGIC, B1+–C1 and tagged for all five stages. | Structural: 1 merge(s)/rename(s) |
| R1-32 | minor | lrn.self-regulation and lrn.autonomy are both CONCEPTUAL, B1–C1 and tagged for all five stages, and lrn.metacognitive-knowledge is almost the same. | Structural: 1 merge(s)/rename(s) |
| R1-33 | minor | prg.acknowledgements is a thesis and article part-genre (depth 18, tagged UTR) but sits in Academic Pragmatics & Correspondence beside emails and requests. | Structural: prg.acknowledgements renamed res.acknowledgements; Structural: 1 merge(s)/rename(s); Response in `res.acknowledgements` |
| R1-34 | minor | pub.academic-cv-bio bundles academic CVs, conference bios and personal statements for postgraduate applications; the last is a final-year UG genre with different stakes. | Structural: pub.personal-statements and res.systematic-review-writing added. Declined: splitting dbe.professional-genres; Response in `pub.academic-cv-bio`, `dbe.professional-genres` |
| R1-35 | minor | grp.business-report is tagged pre-sessional but grp.lab-report and grp.case-study are not, even though science/engineering and business/health pre-sessional strands ro… | Response in `grp.lab-report`, `grp.case-study` |
| R1-36 | minor | There is no topic on placement or graduate-job applications, competency-based interviews or workplace-transition writing (searches for 'employab', 'job interview' and … | Structural: prg.professional-applications added; Response in `prg.professional-applications` |
| R1-37 | minor | Reporting verbs, signal phrases, reporting structures, integral vs non-integral citation, and tense in reporting are five topics in two domains. | Structural: 1 merge(s)/rename(s); Response in `src.reporting-verbs` |
| R1-38 | minor | NTK sits in the Listening strand, but ntk.notes-from-reading and ntk.reviewing-notes are reading and study processes, and NTK unlocks SYN, WPR, EXM and RDC topics. | Structural: strand renamed 'Academic Listening & Note-making' |
| R1-39 | minor | Each domain's stageEmphasis is one sentence per stage and matches the topic tags (no stage mismatches found across 51 domains). | Declined: priority and deprioritised topic lists are superseded by core/develop/revisit roles |
| R1-40 | minor | Online, time-windowed and remotely invigilated exams are now routine. | Applied (1) |
| R1-41 | minor | PROVENANCE.md points readers to reports/adversarial-review.md, which does not exist. | Structural: PROVENANCE.md and verification statuses updated; this log created |

### R2-linguistics

| ID | Severity | Finding | Disposition |
|---|---|---|---|
| R2-01 | major | The research-oriented bundle topic is presented in Hyland's (2008) functional taxonomy, but two of its five example bundles, 'in the case of' and 'on the basis of', ar… | Applied (5) |
| R2-02 | major | The topic is titled 'Nominalisation and grammatical metaphor', but both the record and dse.scientific-language ('nominalisation (grammatical metaphor)') treat the two … | Applied (3) |
| R2-03 | major | The record lists the contracting options in Martin and White's engagement system as 'denying, countering, concurring, pronouncing' and leaves out endorse. | Applied (3) |
| R2-04 | major | DIF[1] reuses the prominence L1-transfer claim ('Learners whose first language marks focus mainly through word order or particles rather than pitch prominence do not t… | Applied (2) |
| R2-05 | major | DIF[1] claims that 'Writers whose first language places the verb at the end of the clause may produce late-verb sentences in English.' This has no support in the bibli… | Applied (2) |
| R2-06 | major | There are two problems. | Applied (2); Response in `lis.word-segmentation` |
| R2-07 | major | ME[2] asks learners to explain 'how a shift from past to present tense in reporting a finding increases the writer's endorsement of it'. | Applied (3) |
| R2-08 | major | The record recommends review 'at expanding intervals' and says Cepeda et al. | Applied (3); Response in `voc.deliberate-learning-systems` |
| R2-09 | major | DIF[0] gives 'overuse of the with generic plurals and uncountables (The education is important)' as typical of writers whose L1 has no articles. | Applied (1) |
| R2-10 | major | dependencies.json makes coh.given-new (B2–C1, written information structure) a hard prerequisite of prn.prominence (B1+–C1, taught from foundation). | Response in `prn.prominence` |
| R2-11 | major | There is no topic or mastery statement on genitive choice ('the study's aims' / 'the aims of the study' / 'study aims'), searching for 'genitive' finds nothing. | Structural: grm.genitive-noun-modifiers added; Response in `grm.genitive-noun-modifiers` |
| R2-12 | major | Two connected gaps. | Structural: grm.unaccusative-verbs added; Applied (2); Response in `grm.unaccusative-verbs` |
| R2-13 | minor | About 30 guidance records in scope still describe references as 'proposed' or 'not yet in the bibliography' (for example hylandmilton1997, rubin1992, hewings2002, gran… | Applied (4) |
| R2-14 | minor | The description says 'Learner corpora show both overuse of a small set of sentence-initial connectors and mismatches between connector and relation'. | Applied (1) |
| R2-15 | minor | The assessment asks learners to make a paragraph 'consistently British … (including -ise/-ize)', which implies that -ize is American. | Applied (1) |
| R2-16 | minor | DIF[0]'s response, 'Teach the paired frame on the one hand … on the other hand', suggests that the second half needs the first. | Applied (1) |
| R2-17 | minor | The diagnostic sentence 'how temperature raises crop yields' is grammatical: transitive 'raise' with 'temperature' as agent is correct. | Applied (3) |
| R2-18 | minor | The assessment prompt lists 'aim at improving' against 'aim to improve' among items mixing errors and correct uses, which implies the first is an error. | Applied (1) |
| R2-19 | minor | DIF[1] treats 'This data shows…' as a demonstrative–noun number mismatch. | Applied (1) |
| R2-20 | minor | The strong diagnostic response describes 'impact' as 'noun, and verb in some varieties'. | Applied (1) |
| R2-21 | minor | (1) 'disinterested' is used as the model 'misleading' word, but 'not interested', the reading from its parts, is a long-attested sense still in wide use. | Applied (2) |
| R2-22 | minor | (1) DIF[2] gives 'criticalness' as a non-existent word coined by analogy, but it is in major dictionaries. | Applied (2) |
| R2-23 | minor | voc.multiword-verbs-register DIF[0] gives 'the sample was comprised of' as a 'contorted replacement' for a phrasal verb. | Applied (1) |
| R2-24 | minor | ACT[1] asks learners to reduce a relative clause 'to a prepositional phrase (the data collected in 2020; the 2020 data)'. | Applied (1) |
| R2-25 | minor | The subject-sharing rule for introductory participle clauses is taught without exceptions. | Applied (1) |
| R2-26 | minor | The topic counts finite clauses only, and the assessment prompt calls a 35-word sentence with 'one finite verb and heavy noun phrases' simple. | Applied (2) |
| R2-27 | minor | ACT[1]'s intended insight claims dense academic sentences 'usually read more easily for expert readers'. | Applied (1) |
| R2-28 | minor | DIF[0] attributes 'relatively flat English intonation' to L1s that use pitch 'mainly to distinguish words' (tone languages) or a narrower discourse pitch range. | Applied (2) |
| R2-29 | minor | DIF[2] (L1-transfer) says missing a lecturer's irony comes from first languages that 'signal stance mainly through particles or word choice rather than intonation'. | Applied (2) |
| R2-30 | minor | The record says the production value of weak forms is contested (Jenkins excluded them from the Lingua Franca Core), but the diagnostic's gap band includes 'staccato f… | Applied (1) |
| R2-31 | minor | The record teaches '-teen' and '-ty' as distinguished by stress (thirTEEN versus THIRty). | Applied (2) |
| R2-32 | minor | The summary of Jenkins's Lingua Franca Core mentions only the exclusion of dental fricatives. | Applied (1) |
| R2-33 | minor | (1) grm.conditionals ends at B2+, but ME[3] requires productive use of inverted conditionals (Were X to…, Had the study…), which the English Grammar Profile puts at C1. | Applied (3) |
| R2-34 | minor | ME[1] states the rule as 'most + plural noun without of'. | Applied (1) |
| R2-35 | minor | DIF[2] contrasts 'dynamic can' with epistemic modals. | Applied (1) |
| R2-36 | minor | The summary gives the Appraisal categories as 'appreciation of things, judgement of people, graduation of strength'. | Applied (1) |
| R2-37 | minor | Tang and John's (1999) typology has six roles, starting with 'representative' (generic or inclusive 'we/I'). | Applied (2) |
| R2-38 | minor | The dataset uses 'engagement' for two different constructs: Hyland's engagement (explicit reader-oriented features such as directives and questions) and Martin and Whi… | Applied (1) |
| R2-39 | minor | The averral/attribution distinction is credited to Hunston, but it comes from Sinclair (1986, 1988) and was developed by Tadros and then Hunston. | Applied (1) |
| R2-40 | minor | The bundle topics use only Hyland's functional taxonomy. | Applied (1) |
| R2-41 | minor | Segmental work relies only on production practice and minimal pairs. | Response in `prn.segmental-priorities` |
| R2-42 | minor | Word-stress work covers suffix-driven shifts but not compound and phrase stress. | Revised in strand pass |
| R2-43 | minor | The summary says the AWL and AVL 'each cover a meaningful share of academic text' without figures. | Applied (1) |
| R2-44 | minor | The summary and diagnostic present 'the' as 'licensed by' an of-phrase or relative clause. | Applied (2) |
| R2-45 | minor | The FUN domain summary in domains.json cites 'functional genre work (Martin and Rose; …)'. | Revised in strand pass |

### R3-graph

| ID | Severity | Finding | Disposition |
|---|---|---|---|
| R3-01 | critical | The derived metrics in topics.json (downstreamCount, depth, centrality) treat soft edges as equivalent to hard ones and compose them transitively. | Structural: graph metrics computed on hard edges only; Response in `acu.teaching-formats` |
| R3-02 | critical | A soft-edge "reading spine" links B2 grammar to almost every foundation literacy topic: voc.high-frequency-base > phr.collocation-awareness > grm.prepositions > grm.np… | Applied (4); Response in `rds.fact-opinion-claim` |
| R3-03 | major | The acu orientation hub creates reach through edges that are not dependencies: reg.register-awareness <- acu.teaching-formats (register theory does not need knowledge … | Applied (5) |
| R3-04 | major | Seminar and group-work topics are over-chained through edges pitched above their dependents. | Applied (6); Response in `acu.academic-literacies` |
| R3-05 | major | Edges that run backwards or are not dependencies: dig.word-processing (B1, a basic tool skill) <- grp.report-conventions (347 transitive pairs; motivation for using st… | Applied (3) |
| R3-06 | major | Soft edges whose prerequisite is two or more CEFR steps or stages above the dependent turn enrichment into gating and inflate depth: par.topic-sentences (B1, FPU) <- v… | Applied (6) |
| R3-07 | major | All 23 validator warnings (hard prerequisite first taught at a later stage) are real sequencing errors. | Applied (22); Response in `sem.debate` |
| R3-08 | major | 44 hard edges have a prerequisite whose cefrStart is above the dependent's cefrStart. | Applied (24) |
| R3-09 | minor | Hard edges that are not "cannot be learned without". | Applied (12) |
| R3-10 | major | rdp.parsing-complex-sentences ("find the main clause, scope and modifiers") has only two prerequisites, noun-phrase premodification and nominalisation, and cannot reac… | Applied (2) |
| R3-11 | major | Research-writing topics are weakly coupled to stance. | Applied (4) |
| R3-12 | major | Pronunciation is almost absent from the presentation graph. | Applied (3) |
| R3-13 | major | Source-based essay genres do not reach in-text citation. | Applied (6) |
| R3-14 | major | The 18 entry points are individually sensible: clause analysis, high-frequency vocabulary, orientation, and concept topics for reading, writing, sources, integrity, li… | Revised in strand pass |
| R3-15 | major | The validator requires reteachPrerequisiteId to be a direct prerequisite. | Applied (9) |
| R3-16 | minor | 69 hard edges are already implied by a longer path. | Revised in strand pass |
| R3-17 | minor | 15 topics are tagged foundation but start at B2, which conflicts with AUTHORING's statement that foundation learners are typically B1–B1+: sem.debate (fixed in R3-07),… | Response in `prg.formal-statements` |
| R3-18 | minor | Weakly connected topics with total degree 1: lis.digressions, prn.segmental-priorities, par.length-division, cit.locators, lrn.motivation, acu.critical-eap, acu.emi-tn… | Revised in strand pass |

### R4-citations

| ID | Severity | Finding | Disposition |
|---|---|---|---|
| R4-01 | critical | Moore (2013) interviewed 17 academics in history, philosophy and cultural studies only. | Applied (2) |
| R4-02 | critical | Charles (2007) combined top-down analysis of rhetorical functions with concordance searches of teacher-compiled thesis corpora (politics/IR and materials science). | Applied (2); Response in `phr.corpus-consultation` |
| R4-03 | critical | The summary says the testing effect and distributed-practice research 'explains why retrieval and expanding intervals outperform rereading'. | Response in `voc.deliberate-learning-systems` |
| R4-04 | critical | Verification corrected the reference to Hyland, K., & Tse, P. | Applied (2) |
| R4-05 | major | Ferris (1999) is a short position paper. | Applied (6) |
| R4-06 | major | Several summaries present untested teaching recommendations as established ('works best', 'most likely to improve') right next to descriptive or theoretical citations,… | Applied (4) |
| R4-07 | major | Activity rationales state untested learning effects as fact under a framework or handbook citation: 'Practising the routes reduces reliance on unauthorised sources' (A… | Applied (3) |
| R4-08 | major | Heavily cited references are attached to rationales they do not address. | Applied (6); Response in `wpr.planning-outlining`, `lrn.metacognitive-knowledge` |
| R4-09 | minor | The Liang et al. | Applied (1) |
| R4-10 | minor | Rationale cites 'the encoding benefits of generative note-taking (Kiewra, 1985)'. | Applied (1) |
| R4-11 | minor | 'Rayner et al. | Applied (1) |
| R4-12 | minor | Bauer & Nation (1993) propose a graded scale of affix levels based on frequency, productivity and regularity. | Applied (2) |
| R4-13 | minor | Four findings are slightly stretched. | Applied (4) |
| R4-14 | minor | Activity titles 'Evidence-based error log' and 'Evidence-based rating' use a term readers will take to mean empirically tested. | Applied (2) |
| R4-15 | minor | The 128 author-proposed references were verified bibliographically (existence and details), not for content. | Revised in strand pass |
| R4-16 | minor | Prose citations are ambiguous where one author has two works in the same year: 'Hyland (2004)' is used for both Disciplinary Discourses and the acknowledgements articl… | Revised in strand pass |

### R5-critical

| ID | Severity | Finding | Disposition |
|---|---|---|---|
| R5-01 | critical | The single most repeated learner difficulty in the dataset is the deferential learner who will not criticise authority: about 28 difficulty records across 25+ topics, … | Applied (9); Response in `sta.self-mention`, `sta.evaluating-others-language`, `cit.citation-functions`, `ges.critique` |
| R5-02 | critical | The text of IDN and ACU is critical and resource-oriented, but the prerequisite graph and stage tags build in 'learn the norms first, question them later, if at all'. | Applied (10); Response in `src.multilingual-sources`, `acu.academic-literacies`, `acu.critical-eap`, `idn.intercultural-rhetoric`, … |
| R5-03 | critical | The integrity and AI content rightly says detectors are biased against writers of English as an additional language. | Applied (5) |
| R5-04 | major | The Academic Integrity domain teaches learners to find and comply with policy but never names their procedural rights beyond 'support, representation and appeal'. | Applied (3); Response in `int.policy-processes`, `int.pressure-risks` |
| R5-05 | major | gai.authorship-voice presents a contested question as settled, and it reassures learners in a way that may be untrue. | Applied (3); Response in `gai.authorship-voice` |
| R5-06 | major | García and Li Wei and Canagarajah are cited, but translanguaging is admitted only into the process: 'plan in any language, draft in English'. | Structural: idn.translingual-writing added; Applied (2); Response in `dig.machine-translation` |
| R5-07 | major | Disability and neurodiversity are almost absent. | Structural: dig.assistive-technology added; accessibility notes added across strands; Applied (5) |
| R5-08 | major | The implied learner is an international student on an anglophone campus. | Applied (1); Response in `acu.transition` |
| R5-09 | major | The UK campus is the unmarked default ('UK' appears 40 times). | Applied (3); Response in `acu.emi-tne`, `prg.office-hours` |
| R5-10 | major | pub.cover-letters[0] gives as an L1-transfer error the pattern 'Dear Respected Editor, I humbly request you to kindly consider my manuscript…'. | Applied (5); Response in `pub.academic-cv-bio` |
| R5-11 | major | Contrastive-rhetoric stereotypes come back through ventriloquised learner voices and one nationality-specific study, even though idn.intercultural-rhetoric critiques K… | Applied (3); Response in `coh.writer-responsibility` |
| R5-12 | major | The dataset rejects native-speaker norms in IDN, PRN and LIS but brings them back through learner-corpus research. | Applied (3); Response in `phr.academic-collocations` |
| R5-13 | major | The difficulty schema puts every problem inside the learner. | Structural: 'institutional' difficulty kind added; Applied (2) |
| R5-14 | major | Decolonising curricula, racialisation and the politics of whose knowledge counts are missing. | Structural: cit.citation-politics added; Applied (1); Response in `inf.source-evaluation` |
| R5-15 | minor | The crt.epistemic-beliefs description presents the Perry/Kuhn sequence as a settled developmental path ('moving from treating knowledge as fixed facts transmitted by a… | Applied (1) |
| R5-16 | minor | The pub.multilingual-scholars[0] response tells doctoral writers that 'rejections usually concern content and fit'. | Applied (1) |
| R5-17 | minor | Domain learnerSummaries are warm and use 'you', but several are too long or jargon-heavy for B1 learners. | Applied (5) |
| R5-18 | minor | Topic-level text, as distinct from reports of studies that used the terms, keeps the native/non-native binary that IDN critiques: gai.detection-limits description ('mi… | Applied (3); Response in `lis.accent-variation` |
| R5-19 | minor | The arg.counterarguments description says 'Anticipating objections is a hallmark of mature argument… but learners rarely do it spontaneously'. | Applied (1) |
| R5-20 | minor | Some mastery evidence asks learners to disclose identity conflict as proof of competence. | Applied (1) |
| R5-21 | minor | Hinds's reader/writer responsibility typology is contested (the reviewNote says so), yet it is the title of a B1+ foundation topic, 'Reader and writer responsibility',… | Applied (1); Response in `coh.writer-responsibility`, `idn.intercultural-rhetoric` |

### R6-esap-pgr-assessment

| ID | Severity | Finding | Disposition |
|---|---|---|---|
| R6-01 | major | The doctoral trajectory has gaps at its assessed milestones. | Structural: res.progression-review, pub.thesis-corrections and pub.thesis-to-article added |
| R6-02 | major | Two cross-disciplinary PGR genres are absent or confined to one ESAP domain. | Structural: res.systematic-review-writing and pub.open-research added; Response in `res.systematic-review-writing`, `pub.open-research` |
| R6-03 | major | The ESAP strand stops at PGT for law, business and creative arts: no DLW, DBE or DAD topic is tagged pgr. | Structural: dlw.mooting, dlw.legal-research-writing and dad.practice-research-exegesis added |
| R6-04 | major | Graduate teaching assistants and demonstrators are not covered. | Structural: res.teaching-as-pgr added; Response in `res.teaching-as-pgr` |
| R6-05 | major | Test-format descriptions are anchored in a dated model. | Applied (3) |
| R6-06 | major | The viva/defence topic oversimplifies international formats in ways that mislead preparation. | Applied (4) |
| R6-07 | major | Reviewer ethics omit the most pressing current breach for early-career reviewers: uploading a confidential manuscript to a generative AI tool to summarise, translate o… | Applied (2) |
| R6-08 | major | Question framing is reduced to PICO. | Applied (2) |
| R6-09 | major | The topic bundles the medical oral case presentation (presenting complaint to plan) with the nursing care plan, which is structured by the nursing process and usually … | Structural: dhl.care-plans added; case presentations rescoped; Applied (1) |
| R6-10 | major | The Vitae RDF is a framework for researchers, yet seven links attach it to topics not tagged pgr, including foundation group-work topics (grw.purposes, grw.roles-plann… | Applied (9) |
| R6-11 | major | IELTS criterion links (97 in all) are partly decorative and in one case contradict the topic. | Applied (5); Response in `voc.abstract-shell-nouns`, `voc.precision-near-synonyms`, `voc.evaluative-lexis`, `phr.verb-noun-collocation-accuracy`, … |
| R6-12 | major | Reflective genres are mapped to 'Reports and essays' (ges.reflective-writing: related only; dhl.reflective-practice: component plus 'Overall written production'), and … | Applied (4) |
| R6-13 | minor | 'Reports and essays' is the default CEFR link: 90 of 1018 links (9%), nearly twice the next scale. | Applied (2); Response in `crt.description-analysis-evaluation` |
| R6-14 | minor | There are obvious mismatches or omissions on individual topics. | Applied (9) |
| R6-15 | minor | On several RES topics, link levels exceed the topic's CEFR range. | Applied (11) |
| R6-16 | minor | The CARS description conflates Swales's 1990 and 2004 models. | Applied (1) |
| R6-17 | minor | The authorship topic is broadly accurate, with two imprecisions. | Applied (2) |
| R6-18 | minor | UK visa framing is mostly well hedged, but the guidance gives an incomplete rule as if it were the rule. | Applied (2) |
| R6-19 | minor | Reflective-model attributions and one safety point need tightening. | Applied (3) |
| R6-20 | minor | The description presents 'literal, golden, mischief and purposive' as the main approaches courts take to statutory interpretation. | Applied (1) |
| R6-21 | minor | The description says statements are 'usually written in the present tense and the first person'. | Applied (1) |
| R6-22 | minor | The thesis-type typology (after Paltridge 2002) is accurate, but it omits two variants a PGR adviser meets often: the retrospective PhD by published works (prior publi… | Applied (1); Response in `res.thesis-macrostructure` |
| R6-23 | minor | Several research-writing statements are slightly over-simplified. | Applied (3) |
| R6-24 | minor | Mastery evidence in the PGR domains is generally observable and discriminating: most items name a product, such as an annotated draft, a chapter plan, a response matri… | Applied (2) |
| R6-25 | minor | Assessment coverage omits practical score-use issues that pre-sessional and admissions teams handle daily: reading score reports (overall and component scores, single-… | Structural: tst.score-reports added |
| R6-26 | minor | The list of Gardner and Nesi families in the description omits Empathy Writing, one of the 13 families, while the guidance cites the full classification of thirteen fa… | Applied (1) |

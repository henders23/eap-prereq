# Revision packet: 11-genres

Domains: GES (Essay & Examination Genres), GRP (Report & Practice-Based Genres)

## New topics to author

- `ges.extended-source-based-project` | GENRE | **Extended source-based project** — An independently researched essay or report of several thousand words on a self-chosen focus in the learner's field, developed through proposal, annotated sources, drafts and tutorials, often with a reflective commentary; the capstone of many pre-sessional and foundation EAP courses. (from R1-20)

## Merges affecting your domains

- `ess.essay-types` was merged into `ges.genre-families` (R1-16). The absorbed record is in authoring/revision/absorbed/ess.essay-types.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `ges.compare-contrast-essay` was merged into `ges.expository-essays` (R1-16). The absorbed record is in authoring/revision/absorbed/ges.compare-contrast-essay.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `ges.problem-solution-essay` was merged into `ges.expository-essays` (R1-16). The absorbed record is in authoring/revision/absorbed/ges.problem-solution-essay.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `grp.student-abstract` was merged into `res.abstracts` (R1-15). The absorbed record is in authoring/revision/absorbed/grp.student-abstract.json. The survivor belongs to another group; no action needed except updating any references in your text.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-04 (critical, coverage)

Topics: dbe.professional-genres, dbe.business-case-analysis, dss.operationalising-concepts, grp.lab-report, res.methods, cit.numeric

**Finding.** Only 55 of 557 topics (10%) are ESAP. The Disciplinary Literacies strand has 32 topics spread over seven discipline groupings (4–6 each), while sentence mechanics alone (SEN) has 12 and grammar has 29. Business & Economics has 4 topics, even though business, management, finance and accounting make up the largest international PGT cohorts in UK universities. Accounting and finance discourse, consultancy/client reports, psychology research reports, education/TESOL practice genres (the MA TESOL is a large international PGT market), pharmacy/nursing specifics, architecture and media all have no topics. There is also no discipline facet. ESAP topics outside the DL strand (grp.lab-report, grp.business-report, res.methods, res.results, cit.numeric, cit.note-based, voc.technical-terminology) cannot be filtered by field. A director building a science-and-engineering pre-sessional strand, or an embedded in-sessional for a business school, therefore cannot pull a coherent set.

**Recommendation.** (1) Add a disciplines[] facet to every topic (empty or 'all' for EGAP) with a controlled list (e.g. sciences, engineering, computing, health, business-management, finance-accounting, economics, law, social-sciences, education, psychology, humanities, arts-design). (2) Treat ESAP as a cross-cutting lens rather than only a strand. (3) Expand discipline coverage towards 60–80 topics, prioritising the largest international cohorts. Starter additions are proposed below.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].disciplines (string[], controlled vocabulary) and populate for all 55 ESAP topics and for EGAP topics with strong disciplinary skew."}
- {"kind":"add-topic","id":"dbe.accounting-finance-discourse","domainCode":"DBE","name":"Language and genres of accounting and finance","type":"GENRE","scope":"Financial statement commentary, audit and valuation reports, and the evaluative and hedged language of financial analysis in MSc Finance/Accounting assessments."}
- {"kind":"add-topic","id":"dbe.consultancy-report","domainCode":"DBE","name":"Consultancy and client project reports","type":"GENRE","scope":"Client-facing reports for live or simulated consultancy projects: problem framing, evidence-based recommendations, implementation and reflection, written for a non-academic client and an academic marker."}
- {"kind":"add-topic","id":"dss.education-practice-genres","domainCode":"DSS","name":"Education and TESOL practice genres","type":"GENRE","scope":"Lesson plans with rationale, teaching-practice reflections, materials evaluations and small-scale classroom research reports in education and TESOL programmes."}
- {"kind":"add-topic","id":"dss.psychology-research-report","domainCode":"DSS","name":"Psychology research reports","type":"GENRE","scope":"APA-style empirical reports in psychology, including hypotheses, statistical reporting conventions, participants and materials sections, and the discipline's stance conventions."}
- {"kind":"add-topic","id":"dse.lab-notebooks","domainCode":"DSE","name":"Laboratory notebooks and research records","type":"GENRE","scope":"Keeping contemporaneous, reproducible lab or computational notebooks and fieldwork records that meet research-integrity and data-management expectations."}
- {"kind":"add-topic","id":"dhl.clinical-reasoning-writing","domainCode":"DHL","name":"Writing clinical reasoning","type":"PROCEDURAL","scope":"Making assessment, diagnosis/problem identification and intervention reasoning explicit in nursing, pharmacy and allied-health assignments, linked to evidence and professional standards."}

### R1-15 (major, overlap)

Topics: src.source-functions, cit.citation-functions, grp.student-abstract, res.abstracts, sta.generalisation-qualification, sta.hedging, coh.connector-precision, coh.linking-adverbials, ges.literature-review-assignment, res.literature-review, grp.dissertation-overview, res.thesis-macrostructure, grp.project-proposal, res.research-proposal

**Finding.** AUTHORING.md §1 says 'Do not create level variants of one topic.' Several pairs do exactly that. src.source-functions (B1+–C1) and cit.citation-functions (B2+–C2) both describe the functions citations perform. grp.student-abstract and res.abstracts describe the same move structure. sta.generalisation-qualification is the lower-level end of hedging. coh.connector-precision is the upper end of coh.linking-adverbials. The genre pairs (lit review assignment vs research lit review, dissertation overview vs thesis macrostructure, student project proposal vs research proposal) are defensible only with explicit stage boundaries, and both members of each pair are currently tagged in-sessional-pgt.

**Recommendation.** Merge the true level variants and widen their CEFR range. For the genre pairs, keep both but make them stage-exclusive (student genres for UG/PGT, research genres for PGR plus PGT dissertation where needed) and state the boundary in each scope note.

Already applied: 1 change(s) — cit.citation-functions CEFR -> B1+–C2

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"cit.citation-functions","absorb":["src.source-functions"]}
- {"kind":"merge","keep":"res.abstracts","absorb":["grp.student-abstract"]}
- {"kind":"merge","keep":"sta.hedging","absorb":["sta.generalisation-qualification"]}
- {"kind":"merge","keep":"coh.linking-adverbials","absorb":["coh.connector-precision"]}
- {"kind":"retag-stages","topicIds":["res.thesis-macrostructure"],"stages":["pgr"]}
- {"kind":"other","detail":"Add explicit stage-boundary sentences to ges.literature-review-assignment vs res.literature-review and grp.project-proposal vs res.research-proposal."}

### R1-16 (major, overlap)

Topics: ess.essay-types, ges.genre-families, ges.compare-contrast-essay, ges.explanation-essay, ges.problem-solution-essay, ges.discussion-essay, fun.comparing-contrasting, fun.cause-effect, fun.problem-solution

**Finding.** ess.essay-types lists argumentative, discussion, explanation/cause–effect, compare–contrast and problem–solution essays. GES then has a separate GENRE topic for each of those five, and FUN has the matching rhetorical functions. This is the IELTS/coursebook essay taxonomy. Nesi and Gardner's genre families, which the dataset itself cites 19 times, treat these as patterns inside the essay family, not as separate genres. The compare–contrast, explanation and problem–solution essays add little beyond FUN plus ess.body-organisation.

**Recommendation.** Fold ess.essay-types into ges.genre-families. Collapse the three pattern essays into one 'expository essays organised by rhetorical pattern' topic that depends on the FUN functions. Keep the argumentative and discussion essays as distinct genres.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"ges.genre-families","absorb":["ess.essay-types"]}
- {"kind":"add-topic","id":"ges.expository-essays","domainCode":"GES","name":"Expository essays organised by rhetorical pattern","type":"GENRE","scope":"Essays organised mainly by comparison, cause–effect or problem–solution, treated as patterns within the essay family and built from the FUN functions."}
- {"kind":"merge","keep":"ges.expository-essays","absorb":["ges.compare-contrast-essay","ges.explanation-essay","ges.problem-solution-essay"]}

### R1-20 (major, coverage)

Topics: tst.presessional-progression, grp.empirical-project-report, ges.argumentative-essay

**Finding.** tst.presessional-progression names 'an extended source-based essay or report' as the typical progression coursework, but no GENRE topic covers it. grp.empirical-project-report assumes primary data collection, which most pre-sessional projects do not involve. ges.argumentative-essay is a short-essay genre with no independent topic selection, research question, sustained source management, drafting cycle with tutor feedback, or reflective component. This is the single most assessed artefact in UK pre-sessional provision.

**Recommendation.** Add the genre below, link it to INF, SYN, SRC, CIT, WPR and EDT prerequisites, and use it as the central task anchor in the pre-sessional templates.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"ges.extended-source-based-project","domainCode":"GES","name":"Extended source-based project","type":"GENRE","scope":"An independently researched 2,000–4,000-word essay or report on a self-chosen focus in the learner's field, developed through proposal, annotated sources, drafts and tutorials, often with a reflective commentary; the capstone of pre-sessional and foundation EAP."}

### R1-26 (minor, coverage)

Topics: grp.empirical-project-report, res.ethics-documentation, grm.complement-clauses

**Finding.** grp.empirical-project-report is tagged pre-sessional, UG and PGT and assumes surveys and interviews, but no topic covers writing clear, unbiased, answerable questions. Question formation is mentioned only in passing (indirect questions in reg.formality-features, embedded questions in grm.complement-clauses). Poorly worded instruments are a frequent, avoidable weakness in pre-sessional and master's projects.

**Recommendation.** Add an instrument-wording topic under RES.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.instrument-wording","domainCode":"RES","name":"Wording survey and interview questions","type":"PROCEDURAL","scope":"Writing clear, neutral, single-focus questionnaire items, response scales and interview prompts, and piloting them for comprehension with the target participants."}

### R1-28 (minor, overlap)

Topics: ges.genre-concept, acu.discourse-communities

**Finding.** ges.genre-concept is named 'Genre and discourse community' and defines both concepts. acu.discourse-communities defines discourse communities again with Swales' criteria.

**Recommendation.** Narrow ges.genre-concept to genre and leave discourse community to ACU, with a hard edge from ges.genre-concept to acu.discourse-communities.

Already applied: 1 change(s) — edited topics ges.genre-concept undefined

### R1-35 (minor, stage-level)

Topics: grp.lab-report, grp.business-report, dig.file-management, grp.case-study

**Finding.** grp.business-report is tagged pre-sessional but grp.lab-report and grp.case-study are not, even though science/engineering and business/health pre-sessional strands routinely teach both. dig.file-management (an entry-point topic) is tagged FUTR but not pre-sessional, where version control of drafts matters for the portfolio and integrity evidence.

**Recommendation.** Add pre-sessional to these topics, as 'develop' for subject-strand pre-sessionals once stageRoles exist.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["grp.lab-report","grp.case-study"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt"]}
- {"kind":"retag-stages","topicIds":["dig.file-management"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt","pgr"]}

### R1-36 (minor, coverage)

Topics: grp.professional-portfolio, pub.academic-cv-bio

**Finding.** There is no topic on placement or graduate-job applications, competency-based interviews or workplace-transition writing (searches for 'employab', 'job interview' and 'placement' as a work context return nothing relevant). UK in-sessional teams increasingly co-deliver this with careers services, especially for PGT cohorts on one-year programmes.

**Recommendation.** Add one EAP-bounded topic (EOP proper stays out of scope).

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"prg.professional-applications","domainCode":"PRG","name":"Applications and interviews for placements and graduate roles","type":"GENRE","scope":"Cover letters, competency-based application answers and interview talk that translate academic experience into evidence for employers."}

### R3-05 (major, direction)

Topics: dig.word-processing, grp.report-conventions, sen.capitalisation, cit.referencing-systems, src.reporting-verbs, rds.writer-stance

**Finding.** Edges that run backwards or are not dependencies: dig.word-processing (B1, a basic tool skill) <- grp.report-conventions (347 transitive pairs; motivation for using styles is not a prerequisite, and it places word processing, accessibility, reference managers and digital collaboration downstream of the essay and argument chain). sen.capitalisation (B1) <- cit.referencing-systems: capitalisation is general and is itself a soft prerequisite of cit.reference-list. src.reporting-verbs (B1+, foundation) <- rds.writer-stance (B2, not foundation): stance-sensitive verb choice is already modelled by sta.evaluating-others-language, which depends on reporting verbs. This edge lies on the 20-topic longest chain.

**Recommendation.** Remove all three. Reteach targets on sen.capitalisation and src.reporting-verbs are cleared to null.

Already applied: 3 change(s) — removed dig.word-processing <- grp.report-conventions; removed sen.capitalisation <- cit.referencing-systems; removed src.reporting-verbs <- rds.writer-stance

### R3-07 (major, level-stage)

Topics: rdc.critical-response, rdc.evidence-evaluation, src.voice-boundaries, sta.averral-attribution, crt.multiple-perspectives, rds.writer-stance, ges.argumentative-essay, arg.extended-argument, arg.position, grp.lab-report, dat.data-commentary, dat.referring-to-visuals, prs.explaining-visuals, dat.describing-trends, prn.prominence, coh.given-new, dse.scientific-language, grm.nominalisation, dse.mathematical-writing, crt.reasoning-types, dhl.professional-communication, reg.non-specialist-audiences, res.conclusions-implications, res.contribution, res.research-proposal, res.literature-review, sem.debate, syn.gaps-tensions, prs.handling-questions, voc.subtechnical-polysemy

**Finding.** All 23 validator warnings (hard prerequisite first taught at a later stage) are real sequencing errors. A stage-filtered pathway would offer the dependent at a stage where its prerequisite is not taught. They fall into three groups. Over-strong edges: rdc.critical-response <- rdc.evidence-evaluation; src.voice-boundaries <- sta.averral-attribution; crt.multiple-perspectives <- rds.writer-stance; ges.argumentative-essay <- arg.extended-argument; grp.lab-report and prs.explaining-visuals <- dat.data-commentary; prn.prominence <- coh.given-new; dse.scientific-language and rdp.parsing-complex-sentences <- grm.nominalisation; dse.mathematical-writing <- crt.reasoning-types; dhl.professional-communication <- reg.non-specialist-audiences; res.conclusions-implications <- res.contribution; res.research-proposal <- res.literature-review. Mis-tagged prerequisites: syn.gaps-tensions has three hard dependents taught at pre-sessional; prs.handling-questions has foundation dependents and Q&A is routine in foundation presentations; voc.subtechnical-polysemy is a core foundation science and law vocabulary topic. Mis-tagged dependent: sem.debate is tagged foundation, but it starts at B2 and both of its defining prerequisites start at pre-sessional.

**Recommendation.** Soften the over-strong edges. Where softening would remove the only foundation-level hard support, add a hard edge to the foundation-level component that the genre actually needs: ges.argumentative-essay <- arg.position, grp.lab-report <- dat.referring-to-visuals, prs.explaining-visuals <- dat.describing-trends. Retag and re-level syn.gaps-tensions (add pre-sessional; B2–C2), prs.handling-questions (add foundation; B1+–C1) and voc.subtechnical-polysemy (add foundation; B1+–C1), and drop foundation from sem.debate. Applied together with R3-02, these leave 0 stage warnings.

Already applied: 22 change(s) — set rdc.critical-response <- rdc.evidence-evaluation to soft; set src.voice-boundaries <- sta.averral-attribution to soft; set crt.multiple-perspectives <- rds.writer-stance to soft; set ges.argumentative-essay <- arg.extended-argument to soft; added ges.argumentative-essay <- arg.position (hard); set grp.lab-report <- dat.data-commentary to soft; added grp.lab-report <- dat.referring-to-visuals (hard); set prs.explaining-visuals <- dat.data-commentary to soft; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["sem.debate"],"stages":["pre-sessional","in-sessional-ug"]}
- {"kind":"retag-stages","topicIds":["syn.gaps-tensions"],"stages":["pre-sessional","in-sessional-ug","in-sessional-pgt","pgr"]}
- {"kind":"retag-stages","topicIds":["prs.handling-questions"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt","pgr"]}
- {"kind":"retag-stages","topicIds":["voc.subtechnical-polysemy"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt"]}

### R3-08 (major, level-stage)

Topics: grm.subject-verb-agreement, grm.np-postmodification, sen.apostrophes-hyphens-dashes, grm.np-premodification, lis.main-points, lis.relevance-markers, sem.opinions, fun.explaining, prs.structure, reg.spoken-vs-written, prs.speaking-from-notes, src.signal-phrases, grm.reporting-structures, grm.reference-pronouns, coh.spoken-signposting, prs.delivery-voice, ess.answering-question, sen.quotation-punctuation, cit.referencing-systems, crt.evidence-types, ges.discussion-essay, ges.explanation-essay, ges.problem-solution-essay, ges.short-answer, sta.evaluating-others-language, res.research-questions, pub.journal-selection, prg.politeness, prg.requests, gai.authorship-voice

**Finding.** 44 hard edges have a prerequisite whose cefrStart is above the dependent's cefrStart. The dependent then cannot be unlocked at its own entry level, which contradicts the topic's CEFR range. The current validator never sees this (R3-01). Examples: grm.subject-verb-agreement (B1) <- grm.np-postmodification (B1+); rds.reference-tracking (B1) <- grm.reference-pronouns (B1+); src.quoting (B1) <- sen.quotation-punctuation (B1+); cit.author-date-in-text and cit.reference-list (B1) <- cit.referencing-systems (B1+); ges.discussion-, explanation- and problem-solution-essay (B1) <- fun.* (B1+); prg.emails-to-staff (B1) <- prg.requests (B1+); pub.cover-letters (B2+) <- pub.journal-selection (C1).

**Recommendation.** Fix each edge by softening it where the prerequisite is enrichment, or by re-levelling one endpoint where the CEFR range was mis-set: lower basic prerequisites (pronoun reference, quotation punctuation, referencing systems, evidence types, politeness, requests, research questions, journal selection, evaluating others' language, spoken signposting) or raise composite dependents (the four B1 essay genres and short answer, answering the question, delivery and voice, AI authorship and voice). With R3-07, every hard edge then satisfies prerequisite cefrStart <= dependent cefrStart.

Already applied: 24 change(s) — set grm.subject-verb-agreement <- grm.np-postmodification to soft; set sen.apostrophes-hyphens-dashes <- grm.np-premodification to soft; set lis.main-points <- lis.relevance-markers to soft; set sem.opinions <- fun.explaining to soft; set prs.structure <- reg.spoken-vs-written to soft; set prs.speaking-from-notes <- reg.spoken-vs-written to soft; set src.signal-phrases <- grm.reporting-structures to soft; grm.reference-pronouns CEFR -> B1–B2+; …

### R3-09 (minor, strength)

Topics: voc.academic-verbs, voc.word-grammar-patterns, grm.np-premodification, voc.word-families-morphology, grm.conditionals, grm.epistemic-modality, grm.fronting-inversion, grm.tense-aspect, grm.linking-adverbial-placement, sen.semicolons-colons, fun.recommending, grm.complement-clauses, prs.purpose-audience, reg.register-awareness, prn.word-stress, grw.inclusive-collaboration, idn.elf, src.paraphrasing, cit.when-to-cite, ges.reflective-writing, crt.applying-theory, lrn.time-management, lrn.goal-setting

**Finding.** Hard edges that are not "cannot be learned without". voc.academic-verbs <- voc.word-grammar-patterns: verb meaning can be learned before complementation. grm.np-premodification <- voc.word-families-morphology and prn.word-stress <- voc.word-families-morphology: only sub-cases depend on derivation. grm.conditionals <- grm.epistemic-modality: conditionals are conventionally taught first. grm.fronting-inversion <- grm.tense-aspect. grm.linking-adverbial-placement <- sen.semicolons-colons: placement does not need semicolons. fun.recommending <- grm.complement-clauses: "should" suffices. prs.purpose-audience <- reg.register-awareness. grw.inclusive-collaboration <- idn.elf. src.paraphrasing <- cit.when-to-cite: this is an integrity obligation, not a component of the linguistic skill. ges.reflective-writing <- crt.applying-theory: foundation reflection is often theory-light. lrn.time-management <- lrn.goal-setting. Several of these are also among the 69 hard edges already implied by a longer path (R3-16).

**Recommendation.** Soften all twelve.

Already applied: 12 change(s) — set voc.academic-verbs <- voc.word-grammar-patterns to soft; set grm.np-premodification <- voc.word-families-morphology to soft; set grm.conditionals <- grm.epistemic-modality to soft; set grm.fronting-inversion <- grm.tense-aspect to soft; set grm.linking-adverbial-placement <- sen.semicolons-colons to soft; set fun.recommending <- grm.complement-clauses to soft; set prs.purpose-audience <- reg.register-awareness to soft; set prn.word-stress <- voc.word-families-morphology to soft; …

### R3-13 (major, missing-edge)

Topics: par.integrating-evidence, cit.author-date-in-text, ges.discussion-essay, ges.compare-contrast-essay, ges.explanation-essay, ges.problem-solution-essay, ges.reflective-writing, lrn.reflective-logs

**Finding.** Source-based essay genres do not reach in-text citation. par.integrating-evidence, the hub for source use in paragraphs, has no citation-format prerequisite. ges.discussion-, compare-contrast-, explanation- and problem-solution-essay do not reach par.integrating-evidence, src.paraphrasing or any cit.* format topic, so a system could certify a learner on university essays with no citation skill. ges.reflective-writing is not linked to lrn.reflective-logs, its natural precursor.

**Recommendation.** Add par.integrating-evidence <- cit.author-date-in-text, the four essay genres <- par.integrating-evidence, and ges.reflective-writing <- lrn.reflective-logs. All are soft and all keep the graph acyclic.

Already applied: 6 change(s) — added par.integrating-evidence <- cit.author-date-in-text (soft); added ges.discussion-essay <- par.integrating-evidence (soft); added ges.compare-contrast-essay <- par.integrating-evidence (soft); added ges.explanation-essay <- par.integrating-evidence (soft); added ges.problem-solution-essay <- par.integrating-evidence (soft); added ges.reflective-writing <- lrn.reflective-logs (soft)

### R5-01 (critical, stereotype)

Topics: voc.evaluative-lexis, sta.evaluating-others-language, rdc.critical-reading, syn.synthesis-concept, syn.gaps-tensions, cit.citation-functions, inf.source-evaluation, par.integrating-evidence, ess.criticality, ess.thesis-statement, ges.critique, res.literature-review, res.gap-niche, res.supervision, idn.academic-identity, crt.concept, crt.questioning, sem.agreeing-disagreeing, sem.opinions, lis.speaker-stance, pub.peer-review-reports, acu.hidden-curriculum, acu.critical-eap, fbk.seeking-feedback, wpr.task-analysis, exm.oral-exams, lrn.autonomy, crt.epistemic-beliefs

**Finding.** The single most repeated learner difficulty in the dataset is the deferential learner who will not criticise authority: about 28 difficulty records across 25+ topics, many in near-identical ventriloquised words ('Who am I to criticise a published expert?' appears verbatim in voc.evaluative-lexis, rdc.critical-reading and, as 'professor', sta.evaluating-others-language; 'I am only a student' in inf.source-evaluation, res.literature-review and idn.academic-identity). About half are coded prior-schooling. With lrn.autonomy ('The teacher should tell me what to study'), crt.epistemic-beliefs ('Just tell me the right answer') and the memorisation patterns, this rebuilds Holliday's native-speakerist trio (deference, no critical thinking, no autonomy) under the neutral label 'prior schooling'. The repeated disclaimers ('do not attribute this to culture') do not undo the effect. A teacher reading across topics meets the same figure dozens of times, and the label still points to 'elsewhere' schooling. Hesitancy to evaluate published work is well documented among novice first-language English students too, and comes from novice status and the assessment genre.

**Recommendation.** Keep the deference pattern in two or three anchor topics (crt.concept, ess.criticality, res.literature-review). Replace it elsewhere with difficulties specific to the topic. Where it stays, code it affective or conceptual, unless the evidence names an assessment practice, and say that it is common among novice writers of all backgrounds. Add a rule to AUTHORING.md section 4: no single difficulty pattern may recur in more than three records, and prior-schooling must name a schooling or assessment practice, not a disposition.

Already applied: 9 change(s) — edited guidance crt.concept difficulties[1].pattern; edited guidance sta.evaluating-others-language difficulties[0].kind; edited guidance sta.evaluating-others-language difficulties[0].response; edited guidance idn.academic-identity difficulties[2].kind; edited guidance voc.evaluative-lexis difficulties[1].pattern; edited guidance voc.evaluative-lexis difficulties[1].kind; edited guidance voc.evaluative-lexis difficulties[1].revealedBy; edited guidance voc.evaluative-lexis difficulties[1].response; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Consolidate the deference/reluctance-to-critique pattern. Keep it in crt.concept[1], ess.criticality[1] and res.literature-review[2]. Rewrite it as a topic-specific difficulty in syn.synthesis-concept[1], cit.citation-functions[2], inf.source-evaluation[2], rdc.critical-reading[2], syn.gaps-tensions[2], ges.critique[1], crt.questioning[1], res.gap-niche[1] and sem.agreeing-disagreeing[0]. Add to AUTHORING.md section 4: 'No difficulty pattern may recur in substance in more than three records; prior-schooling must name a schooling or assessment practice, not a disposition such as deference.'"}

### R6-12 (major, framework-mapping)

Topics: ges.reflective-writing, dhl.reflective-practice, lrn.reflective-logs

**Finding.** Reflective genres are mapped to 'Reports and essays' (ges.reflective-writing: related only; dhl.reflective-practice: component plus 'Overall written production'), and lrn.reflective-logs has no link. Meanwhile 'Creative writing' and 'Sustained monologue: describing experience' have no links in the whole dataset. Despite its name, the CEFR 'Creative writing' scale is where written accounts of experiences, feelings and reactions are described at B1–B2, which is the recount stage of reflective writing. 'Describing experience' is the spoken counterpart, relevant to oral reflection and to crit presentations.

**Recommendation.** Link the reflective topics to prod.writ.creative, as a component for the recount stage, while keeping 'Reports and essays' for the analytic stage where present. Add a short note in the frameworks documentation explaining why a 'creative writing' scale is linked to reflective genres.

Already applied: 4 change(s) — ges.reflective-writing + framework cefr-cv:prod.writ.creative; dhl.reflective-practice - framework cefr-cv:prod.writ.overall; dhl.reflective-practice + framework cefr-cv:prod.writ.creative; lrn.reflective-logs + framework cefr-cv:prod.writ.creative

### R6-19 (minor, accuracy)

Topics: dhl.reflective-practice, ges.reflective-writing

**Finding.** Reflective-model attributions and one safety point need tightening. 'What? So what? Now what?' is attributed solely to Rolfe et al. (2001). The questions originate with Borton and were developed by Driscoll before Rolfe et al.'s framework. ges.reflective-writing calls the 4Rs 'Ryan's' scaffold; Ryan adapted it from Bain and colleagues. More substantively, health students are told to anonymise but not why it matters beyond confidentiality. Since the Bawa-Garba case, UK health regulators' joint guidance has advised that reflective accounts focus on learning rather than on a detailed factual record, because such accounts can be requested in legal proceedings. Experienced health EAP practitioners teach this explicitly.

**Recommendation.** Correct the attributions and add the regulatory point to the context notes.

Already applied: 3 change(s) — edited guidance dhl.reflective-practice summary; edited guidance dhl.reflective-practice contextNotes; edited guidance ges.reflective-writing activities[1].rationale

### R6-26 (minor, accuracy)

Topics: ges.genre-families

**Finding.** The list of Gardner and Nesi families in the description omits Empathy Writing, one of the 13 families, while the guidance cites the full classification of thirteen families.

**Recommendation.** Add Empathy Writing to the list.

Already applied: 1 change(s) — edited topics ges.genre-families description

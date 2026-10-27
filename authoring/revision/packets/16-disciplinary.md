# Revision packet: 16-disciplinary

Domains: DAD (Creative Arts & Design), DBE (Business & Economics), DHL (Health & Life Sciences), DHU (Humanities), DLW (Law), DSE (Science, Engineering & Computing), DSS (Social Sciences & Education)

## New topics to author

- `dse.lab-notebooks` | GENRE | **Laboratory notebooks and research records** — Keeping contemporaneous, reproducible lab, computational or fieldwork records that meet research-integrity and data-management expectations. (from R1-04)
- `dhl.clinical-reasoning-writing` | PROCEDURAL | **Writing clinical reasoning** — Making assessment, problem identification and intervention reasoning explicit in nursing, pharmacy and allied-health assignments, linked to evidence and professional standards. (from R1-04)
- `dhl.care-plans` | GENRE | **Care plans** — Care plans and care-planning assignments that move from holistic assessment to prioritised, person-centred needs, goals, evidence-based interventions and evaluation. (from R6-09)
- `dbe.accounting-finance-discourse` | GENRE | **Language and genres of accounting and finance** — Financial statement commentary, audit and valuation reports, and the evaluative and hedged language of financial analysis in finance and accounting assessments. (from R1-04)
- `dbe.consultancy-report` | GENRE | **Consultancy and client project reports** — Client-facing reports for live or simulated consultancy projects: problem framing, evidence-based recommendations, implementation and reflection, for a client and an academic marker. (from R1-04)
- `dlw.mooting` | GENRE | **Mooting and oral legal argument** — Preparing and delivering oral legal submissions in moots and assessed advocacy: skeleton arguments, ordering grounds, citing authority orally and answering judicial questions. (from R6-03)
- `dlw.legal-research-writing` | PROCEDURAL | **Legal research and dissertation writing** — Planning and writing a law dissertation: choosing and justifying a doctrinal, socio-legal, comparative or theoretical method, building a research question, and structuring sustained legal argument. (from R6-03)
- `dss.psychology-research-report` | GENRE | **Psychology research reports** — APA-style empirical reports in psychology: hypotheses, participants and materials, statistical reporting conventions and the discipline's stance conventions. (from R1-04)
- `dss.education-practice-genres` | GENRE | **Education and TESOL practice genres** — Lesson plans with rationale, teaching-practice reflections, materials evaluations and small-scale classroom research reports in education and TESOL programmes. (from R1-04)
- `dad.practice-research-exegesis` | GENRE | **Practice-based research and exegesis** — The exegesis or critical commentary that accompanies practice-based research in art, design and performance, situating the practice in its field and articulating its contribution. (from R6-03)

## Merges affecting your domains

None.


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

### R1-08 (major, stage-level)

Topics: dse.mathematical-writing, dse.protocols-specifications, sen.sentence-types, rds.scanning, rds.skimming, prg.emails-to-staff

**Finding.** Only one topic (voc.high-frequency-base) starts below B1, and the scale has no A2+ step. International foundation programmes commonly admit students at around IELTS 4.0–5.0, which is roughly A2+ to B1. 186 foundation-tagged topics have cefrEnd C1 or C2, so the 'foundation' pathway reads as the whole undergraduate curriculum. Two DSE topics tagged foundation are degree-level: dse.mathematical-writing (writing proofs) and dse.protocols-specifications (engineering specifications). In addition, 77 foundation topics are CONCEPTUAL, which is a heavy conceptual load for A2+/B1 learners combining EAP with subject modules.

**Recommendation.** Add A2+ to the CEFR scale. Lower cefrStart for the genuine entry topics used at the start of foundation. Remove foundation from degree-level ESAP genres. When stageRoles are introduced, limit foundation 'core' to topics whose cefrStart is B1+ or below.

Already applied: 4 change(s) — sen.sentence-types CEFR -> A2–B2; rds.scanning CEFR -> A2–B2; rds.skimming CEFR -> A2–B2; prg.emails-to-staff CEFR -> A2–B2+

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add 'A2+' to the CEFR scale in AUTHORING.md and the schema."}
- {"kind":"retag-stages","topicIds":["dse.mathematical-writing","dse.protocols-specifications"],"stages":["in-sessional-ug","in-sessional-pgt","pgr"]}

### R1-29 (minor, overlap)

Topics: res.qualitative-reporting, dss.qualitative-writing

**Finding.** Both topics teach organising findings by theme, selecting and framing participant extracts, and interpreting rather than letting quotations 'speak for themselves'. They have the same stages (UTR) and the same CEFR range (B2+–C1).

**Recommendation.** Keep the findings write-up in res.qualitative-reporting and rescope dss.qualitative-writing to field notes, analytic memos and accounts of the analysis process.

Already applied: 1 change(s) — edited topics dss.qualitative-writing undefined

### R1-34 (minor, granularity)

Topics: pub.academic-cv-bio, dhl.critical-appraisal, dbe.professional-genres

**Finding.** pub.academic-cv-bio bundles academic CVs, conference bios and personal statements for postgraduate applications; the last is a final-year UG genre with different stakes. dhl.critical-appraisal bundles CASP-style appraisal assignments (UG) with PRISMA-reported systematic reviews (PGT/PGR). dbe.professional-genres bundles memos, briefing notes, management reports and pitches.

**Recommendation.** Split out the personal statement and systematic-review writing. Partly address dbe.professional-genres through the DBE additions in R1-04.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"pub.personal-statements","domainCode":"PUB","name":"Personal statements for postgraduate study and funding","type":"GENRE","scope":"Statements of purpose and scholarship applications showing fit, motivation and capability with evidence, for final-year UG and PGT students."}
- {"kind":"add-topic","id":"dhl.systematic-review-writing","domainCode":"DHL","name":"Writing systematic and structured reviews","type":"GENRE","scope":"Reporting search, selection, risk-of-bias and synthesis transparently following reporting guidance such as PRISMA 2020."}

### R2-02 (major, accuracy)

Topics: grm.nominalisation, dse.scientific-language

**Finding.** The topic is titled 'Nominalisation and grammatical metaphor', but both the record and dse.scientific-language ('nominalisation (grammatical metaphor)') treat the two terms as synonyms. In Halliday and Martin (1993), grammatical metaphor also covers logical metaphor, where conjunctive relations are realised inside the clause as verbs, nouns or prepositions (because → leads to, causes, the cause of, due to), and interpersonal metaphor (I think → it is likely that). The record's own assessment prompt depends on logical metaphor without naming it: 'Because of this, universities recruited…' becomes '…led to increased recruitment'. Logical metaphor is what makes the packed causal sentences of academic prose hard to read, so leaving it out loses the most teachable half of the concept.

**Recommendation.** Define grammatical metaphor in full, keep nominalisation as the central case, and add a mastery statement on realising causal and temporal relations within the clause. Change the DSE wording to 'grammatical metaphor (especially nominalisation)'.

Already applied: 3 change(s) — edited topics grm.nominalisation description; edited guidance grm.nominalisation summary; edited topics dse.scientific-language description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"grm.nominalisation: add masteryEvidence 'Rewrites a conjunction-linked pair of clauses as a single clause in which the relation is expressed by a verb, noun or preposition (because → led to, resulted in, the reason for, due to) and explains what becomes less explicit.'"}

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

### R6-02 (major, coverage)

Topics: dhl.critical-appraisal, inf.systematic-searching, pub.publishing-process, pub.journal-selection

**Finding.** Two cross-disciplinary PGR genres are absent or confined to one ESAP domain. (1) Systematic and scoping review writing appears only inside dhl.critical-appraisal, which bundles single-study appraisal for UG health students with PRISMA reporting for PGR; its own review note concedes these are 'distinct genres at different levels'. Systematic and scoping reviews are standard doctoral outputs in education, social policy, management, software engineering and environmental science, not only health. (2) Open research practices are absent as a writing topic: preprints, preregistration and registered reports, data availability statements, data management plans, ORCID and licences, and funder open-access and rights-retention requirements. These now generate mandatory text in submissions and grant applications. inf.open-access covers access from the reader's side only.

**Recommendation.** Add res.systematic-review-writing (protocol registration, PRISMA 2020 or PRISMA-ScR reporting, risk-of-bias and certainty language, narrative synthesis). Narrow dhl.critical-appraisal to appraisal of single studies, with the new topic as its PGR successor. Add pub.open-research as a PUB topic.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.systematic-review-writing","domainCode":"RES","name":"Writing systematic and scoping reviews","type":"GENRE","scope":"Write the protocol and report of a systematic, scoping or other structured review in any discipline. This covers registering or publishing a protocol, reporting search and selection transparently with the relevant reporting guideline (for example PRISMA 2020 or PRISMA-ScR) and a flow diagram, describing risk-of-bias or quality appraisal, writing narrative or quantitative synthesis, and calibrating conclusions to the certainty of the evidence."}
- {"kind":"add-topic","id":"pub.open-research","domainCode":"PUB","name":"Open research practices and statements","type":"PROCEDURAL","scope":"Understand and write the texts that open-research practices require: preprints and their versioning, preregistration and registered reports, data and code availability statements, data management plans, licence choices, ORCID and persistent identifiers, and statements that meet funder and institutional open-access and rights-retention requirements. Disciplinary norms and policies vary and change."}
- {"kind":"other","detail":"Retitle dhl.critical-appraisal 'Critical appraisal of health research' and remove the PRISMA-reporting mastery evidence (masteryEvidence[4]) and the second guidance activity, moving them to res.systematic-review-writing. Add a soft edge dhl.critical-appraisal -> res.systematic-review-writing."}

### R6-03 (major, coverage)

Topics: dlw.legal-essays, dlw.problem-questions, dad.design-rationale, dad.artist-statement, dbe.business-case-analysis

**Finding.** The ESAP strand stops at PGT for law, business and creative arts: no DLW, DBE or DAD topic is tagged pgr. Experts co-teaching with these faculties would expect at least: (a) law, oral legal argument (mooting and advocacy exercises are assessed on most LLB programmes and many LLMs), and legal research and dissertation writing (doctrinal, socio-legal and comparative method; the doctrinal thesis is not organised by IMRaD, and nothing in RES addresses doctrinal method); (b) creative arts, the practice-based or practice-led doctorate and MA, where an artefact or portfolio is examined with an exegesis or critical commentary. This is a distinct genre with its own debates about how practice and text relate, and dad.artist-statement and dad.design-rationale do not cover it.

**Recommendation.** Add the three topics below. Tag them pgt and pgr, and pre-sessional or UG where noted.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"dlw.mooting","domainCode":"DLW","name":"Mooting and oral legal argument","type":"GENRE","scope":"Prepare and deliver oral legal submissions in moots and similar assessed advocacy exercises: building skeleton arguments, ordering grounds, citing authority orally by the conventions used in court, answering judicial interventions, conceding and distinguishing, and using forms of address and courtroom register appropriately."}
- {"kind":"add-topic","id":"dlw.legal-research-writing","domainCode":"DLW","name":"Legal research and dissertation writing","type":"PROCEDURAL","scope":"Plan and write an LLM or doctoral law dissertation. This means choosing and justifying a method (doctrinal, socio-legal, comparative, theoretical), building a research question from the state of the law rather than from an empirical gap, structuring a doctrinal argument across chapters, and handling primary and secondary authority and OSCOLA referencing at length."}
- {"kind":"add-topic","id":"dad.practice-research-exegesis","domainCode":"DAD","name":"Practice-based research and exegesis","type":"GENRE","scope":"Write the exegesis or critical commentary that accompanies practice-based or practice-led research in art, design and performance. It situates the practice in its field, articulates research questions and method through practice, documents the process, and argues the contribution of the work and text together, following the institution's rules on how practice and writing are weighted."}

### R6-08 (major, accuracy)

Topics: dhl.evidence-based-practice

**Finding.** Question framing is reduced to PICO. PICO suits intervention questions. Health programmes routinely teach PEO, SPIDER or PICo for qualitative and experience questions, and nursing and allied health students frequently set such questions in dissertations and literature reviews. As written, ME[1] would mark a correctly framed qualitative question as wrong. The single 'hierarchy of evidence' also omits that current practice grades certainty of evidence (for example GRADE) rather than ranking designs in a pyramid.

**Recommendation.** Make question framing fit the question type in the description and ME[1]. Add GRADE-type certainty to the guidance as context.

Already applied: 2 change(s) — edited topics dhl.evidence-based-practice description; edited topics dhl.evidence-based-practice masteryEvidence[1]

### R6-09 (major, accuracy)

Topics: dhl.case-reports-care-plans

**Finding.** The topic bundles the medical oral case presentation (presenting complaint to plan) with the nursing care plan, which is structured by the nursing process and usually a programme-specified nursing model. These genres belong to different professions and use different structures; the topic's own review note recommends splitting them. 'Case report' also clashes with the published clinical case report, which has its own reporting guideline (CARE). As written, the care-plan half has no described structure.

**Recommendation.** Split the topic. Narrow the existing topic to case presentations and rename it 'Case presentations'. Add dhl.care-plans. Until the split is done, describe the nursing-process structure.

Already applied: 1 change(s) — edited topics dhl.case-reports-care-plans description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"dhl.care-plans","domainCode":"DHL","name":"Care plans","type":"GENRE","scope":"Write care plans and care-planning assignments that move from holistic assessment to prioritised, person-centred problems or needs, SMART goals, evidence-based interventions with rationales and evaluation criteria, structured by the nursing process and the nursing model or documentation standard the programme specifies, with anonymisation and approved abbreviations."}
- {"kind":"other","detail":"After the split, rename dhl.case-reports-care-plans to 'Case presentations' (id may stay for stability), remove care-plan content from masteryEvidence[1] and the second guidance activity, and add a reviewNote distinguishing it from published case reports (CARE guideline)."}

### R6-12 (major, framework-mapping)

Topics: ges.reflective-writing, dhl.reflective-practice, lrn.reflective-logs

**Finding.** Reflective genres are mapped to 'Reports and essays' (ges.reflective-writing: related only; dhl.reflective-practice: component plus 'Overall written production'), and lrn.reflective-logs has no link. Meanwhile 'Creative writing' and 'Sustained monologue: describing experience' have no links in the whole dataset. Despite its name, the CEFR 'Creative writing' scale is where written accounts of experiences, feelings and reactions are described at B1–B2, which is the recount stage of reflective writing. 'Describing experience' is the spoken counterpart, relevant to oral reflection and to crit presentations.

**Recommendation.** Link the reflective topics to prod.writ.creative, as a component for the recount stage, while keeping 'Reports and essays' for the analytic stage where present. Add a short note in the frameworks documentation explaining why a 'creative writing' scale is linked to reflective genres.

Already applied: 4 change(s) — ges.reflective-writing + framework cefr-cv:prod.writ.creative; dhl.reflective-practice - framework cefr-cv:prod.writ.overall; dhl.reflective-practice + framework cefr-cv:prod.writ.creative; lrn.reflective-logs + framework cefr-cv:prod.writ.creative

### R6-14 (minor, framework-mapping)

Topics: res.abstracts, dat.captions-labelling, dhl.case-reports-care-plans, dhu.interpretive-argument

**Finding.** There are obvious mismatches or omissions on individual topics. res.abstracts links only 'Streamlining a text' (at C1/C2, above the topic's C1 ceiling), although the CEFR summarising scale is 'Processing text'. dat.captions-labelling's only link is acrl:value; 'Explaining data' is the natural home. dhl.case-reports-care-plans links only oral and relaying scales, although care plans are written. dhu.interpretive-argument makes 'Analysis and criticism of creative texts' its core link; that fits literary interpretation but not the historical and documentary interpretation the topic also covers, where 'Reports and essays' should be core. Note-taking and data-commentary mappings, by contrast, are sound: all ntk.* topics link 'Note-taking (lectures, seminars, meetings, etc.)', and dat.*, res.results and prs.explaining-visuals link 'Explaining data'.

**Recommendation.** Apply the link changes below.

Already applied: 9 change(s) — res.abstracts - framework cefr-cv:med.strat.streamlining-text; res.abstracts + framework cefr-cv:med.text.processing-text; res.abstracts + framework cefr-cv:med.strat.streamlining-text; dat.captions-labelling + framework cefr-cv:med.text.explaining-data; dhl.case-reports-care-plans + framework cefr-cv:prod.writ.reports-essays; dhu.interpretive-argument - framework cefr-cv:med.text.analysis-creative; dhu.interpretive-argument - framework cefr-cv:prod.writ.reports-essays; dhu.interpretive-argument + framework cefr-cv:prod.writ.reports-essays; …

### R6-19 (minor, accuracy)

Topics: dhl.reflective-practice, ges.reflective-writing

**Finding.** Reflective-model attributions and one safety point need tightening. 'What? So what? Now what?' is attributed solely to Rolfe et al. (2001). The questions originate with Borton and were developed by Driscoll before Rolfe et al.'s framework. ges.reflective-writing calls the 4Rs 'Ryan's' scaffold; Ryan adapted it from Bain and colleagues. More substantively, health students are told to anonymise but not why it matters beyond confidentiality. Since the Bawa-Garba case, UK health regulators' joint guidance has advised that reflective accounts focus on learning rather than on a detailed factual record, because such accounts can be requested in legal proceedings. Experienced health EAP practitioners teach this explicitly.

**Recommendation.** Correct the attributions and add the regulatory point to the context notes.

Already applied: 3 change(s) — edited guidance dhl.reflective-practice summary; edited guidance dhl.reflective-practice contextNotes; edited guidance ges.reflective-writing activities[1].rationale

### R6-20 (minor, accuracy)

Topics: dlw.statutes

**Finding.** The description presents 'literal, golden, mischief and purposive' as the main approaches courts take to statutory interpretation. These are a textbook heuristic. UK appellate courts now describe a single contextual, purposive method, in which the traditional 'rules' survive only as aids. LLM students from civil-law systems are prone to learn the four 'rules' as a decision procedure.

**Recommendation.** Reframe the four approaches as the traditional heuristics alongside the modern contextual approach.

Already applied: 1 change(s) — edited topics dlw.statutes description

### R6-21 (minor, accuracy)

Topics: dad.artist-statement

**Finding.** The description says statements are 'usually written in the present tense and the first person'. The topic explicitly includes exhibition labels and degree-show contexts, where wall labels, catalogue entries and short bios are typically in the third person and are often curatorial. Learners told that first person is the norm will misjudge label and catalogue tasks.

**Recommendation.** Qualify the convention.

Already applied: 1 change(s) — edited topics dad.artist-statement description

### R6-23 (minor, accuracy)

Topics: res.quantitative-reporting, res.methods, res.qualitative-reporting, dss.qualitative-writing, pub.publishing-process

**Finding.** Several research-writing statements are slightly over-simplified. (a) 'exact p-values' should note the style-guide convention of p < .001 for very small values; otherwise learners copy p = .000-style outputs into exact decimals. (b) res.methods refers to 'reporting guidelines' without naming the families that ESAP teachers will meet: CONSORT, STROBE, COREQ and SRQR, collected by the EQUATOR Network. (c) The qualitative topics anchor thematic analysis in Braun and Clarke (2006); the authors' later reflexive TA work (2019, 2021) is what examiners and reviewers now invoke, especially against 'themes emerged' and inter-rater coding in reflexive designs. (d) The publishing-process topic lists single, double and open review but not transparent review, registered reports, or review of preprints, which PGRs increasingly encounter.

**Recommendation.** Apply the text edits below and add the later Braun and Clarke references to the bibliography.

Already applied: 3 change(s) — edited topics res.quantitative-reporting description; edited topics res.methods description; edited topics pub.publishing-process description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add Braun & Clarke (2019, 'Reflecting on reflexive thematic analysis', Qualitative Research in Sport, Exercise and Health) and/or Braun & Clarke (2021, Thematic analysis: A practical guide, SAGE) to references.json, after verifying them, and cite them in the guidance for res.qualitative-reporting and dss.qualitative-writing alongside braunclarke2006."}

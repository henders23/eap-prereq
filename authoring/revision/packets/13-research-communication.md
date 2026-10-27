# Revision packet: 13-research-communication

Domains: PUB (Publication & Dissemination), RES (Research Writing)

## New topics to author

- `res.progression-review` | GENRE | **Doctoral progression and confirmation reviews** — Confirmation, upgrade and annual progression reports and the accompanying oral review: summarising progress, revising questions and design, presenting preliminary findings, planning, and responding to panel questions. (from R1-05, R6-01)
- `res.publication-based-thesis` | GENRE | **Thesis by publication** — Framing chapters, linking narratives and co-authorship statements that turn stand-alone papers into one coherent thesis argument. (from R1-05)
- `res.systematic-review-writing` | GENRE | **Writing systematic and scoping reviews** — Writing the protocol and report of a systematic, scoping or other structured review in any discipline: registration, transparent search and selection reporting, appraisal and synthesis, following reporting guidance such as PRISMA 2020. (from R1-34, R6-02)
- `res.instrument-wording` | PROCEDURAL | **Wording survey and interview questions** — Writing clear, neutral, single-focus questionnaire items, response scales and interview prompts, and piloting them for comprehension with the intended participants. (from R1-26)
- `res.teaching-as-pgr` | SOCIOPRAGMATIC | **Teaching, demonstrating and marking as a doctoral researcher** — Communicating as a graduate teaching assistant or demonstrator: explaining concepts and procedures, questioning, managing small-group discussion, giving spoken and written feedback, and handling student queries. (from R1-05, R6-04)
- `pub.funding-applications` | GENRE | **Funding, fellowship and grant applications** — Case for support, lay summary, impact statement and track-record sections for studentships, travel grants and early-career fellowships. (from R1-05)
- `pub.conference-participation` | SOCIOPRAGMATIC | **Participating in conferences** — Asking and answering questions from the floor, chairing a session, and networking and following up contacts at conferences and research seminars. (from R1-05)
- `pub.personal-statements` | GENRE | **Personal statements for postgraduate study and funding** — Statements of purpose and scholarship applications that show fit, motivation and capability with evidence. (from R1-34)
- `pub.thesis-corrections` | GENRE | **Examiners' reports and thesis corrections** — Interpreting examiners' reports and viva outcomes, turning them into a corrections plan, and documenting the changes made. (from R6-01)
- `pub.thesis-to-article` | PROCEDURAL | **From thesis to articles** — Turning thesis chapters into journal articles, or integrating published papers into a thesis: re-scoping the argument for a journal readership, compressing the literature and methods, and managing self-plagiarism rules. (from R6-01)
- `pub.open-research` | PROCEDURAL | **Open research practices and statements** — Writing the texts open-research practices require: preprints and versions, preregistration and registered reports, data and code availability statements, and other disclosure statements. (from R6-02)

## Merges affecting your domains

- `grp.student-abstract` was merged into `res.abstracts` (R1-15). The absorbed record is in authoring/revision/absorbed/grp.student-abstract.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-03 (critical, stage-level)

Topics: res.introductions-cars, res.gap-niche, res.research-questions, res.research-proposal, par.peel, par.paragraph-unit, ess.essay-structure, voc.high-frequency-base

**Finding.** The single 'pre-sessional' stage covers B1 learners heading for a first degree and B2+ learners heading for master's study, on courses of anything from 5 to 40+ weeks. Within that one tag, par.peel, par.paragraph-unit and voc.high-frequency-base (A2–B1+) sit beside res.introductions-cars, res.gap-niche and res.research-proposal (B2+–C2). 166 pre-sessional topics start at B1 and 122 start at B2 or above. The RES domain's own stageEmphasis begins 'On postgraduate pre-sessionals…', which concedes the problem. In many UK institutions most pre-sessional students progress to PGT, and their syllabus (critical reading of research articles, a source-based project or dissertation-proposal genre, seminar argument) differs materially from a UG-entry pre-sessional.

**Recommendation.** Split the stage into pre-sessional-ug and pre-sessional-pg, or add a destination qualifier, and retag. Research-writing and proposal topics should be PG-only. Paragraph scaffolds (PEEL, paragraph-unit) should be core for UG-entry and long courses only. Record course length or entry band in the pathway templates (R1-02), not in the topic.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Replace stage 'pre-sessional' with 'pre-sessional-ug' and 'pre-sessional-pg' (update AUTHORING.md stage table, schema enum and reports)."}
- {"kind":"other","detail":"Restrict to pre-sessional-pg (remove from pre-sessional-ug): res.introductions-cars, res.gap-niche, res.research-questions, res.research-proposal, res.imrad, rds.research-article-navigation, ges.literature-review-assignment, grp.project-proposal, phr.bundles-research-oriented."}
- {"kind":"other","detail":"Mark as core for pre-sessional-ug and at most 'revisit' for pre-sessional-pg: par.peel, par.paragraph-unit, par.concluding-sentences, ess.essay-structure, sen.sentence-types, voc.high-frequency-base, ges.discussion-essay."}

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

### R1-05 (major, coverage)

Topics: res.thesis-macrostructure, pub.viva, res.research-proposal, prs.research-presentations

**Finding.** Searches of names, descriptions and mastery evidence return nothing for graduate teaching assistants, upgrade/confirmation or annual progress review, funding or fellowship applications, networking, or three-minute/short-format research pitches. The thesis by publication appears only as one clause inside res.thesis-macrostructure. These are standard parts of UK doctoral EAP and researcher development, and they map to Vitae RDF B3, C2, C3 and D1. Those RDF items have only 2, 3, 1 and 9 topic links respectively. The international GTA's teaching communication is a particular gap: in many institutions it is a compulsory language-screened role.

**Recommendation.** Add the PGR topics below and link them to RES/PUB prerequisites and to Vitae RDF. Re-pitch PGR content around these genres rather than revisiting foundation-level orientation (see R1-06).

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.progression-review","domainCode":"RES","name":"Doctoral progression and upgrade documents","type":"GENRE","scope":"Confirmation/upgrade reports, annual progress reviews and the accompanying oral review: summarising progress, justifying the plan, responding to panel questions."}
- {"kind":"add-topic","id":"res.publication-based-thesis","domainCode":"RES","name":"Thesis by publication","type":"GENRE","scope":"Framing chapters, linking narratives and co-authorship statements that turn stand-alone papers into one coherent thesis argument."}
- {"kind":"add-topic","id":"pub.funding-applications","domainCode":"PUB","name":"Funding, fellowship and grant applications","type":"GENRE","scope":"Case for support, lay summary, impact statement and track-record sections for studentships, travel grants and early-career fellowships."}
- {"kind":"add-topic","id":"sem.teaching-as-gta","domainCode":"SEM","name":"Leading seminars, labs and tutorials as a teaching assistant","type":"PROCEDURAL","scope":"Classroom communication for international graduate teaching assistants: explaining, questioning, managing discussion, giving spoken feedback and handling student queries."}
- {"kind":"add-topic","id":"prs.research-pitches","domainCode":"PRS","name":"Short-format research pitches","type":"GENRE","scope":"Three-minute thesis and elevator-style pitches that compress a project into a single accessible narrative for mixed audiences."}
- {"kind":"add-topic","id":"pub.conference-participation","domainCode":"PUB","name":"Participating in conferences","type":"SOCIOPRAGMATIC","scope":"Asking and answering questions from the floor, chairing a session, and following up contacts at conferences and research seminars."}

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

### R1-26 (minor, coverage)

Topics: grp.empirical-project-report, res.ethics-documentation, grm.complement-clauses

**Finding.** grp.empirical-project-report is tagged pre-sessional, UG and PGT and assumes surveys and interviews, but no topic covers writing clear, unbiased, answerable questions. Question formation is mentioned only in passing (indirect questions in reg.formality-features, embedded questions in grm.complement-clauses). Poorly worded instruments are a frequent, avoidable weakness in pre-sessional and master's projects.

**Recommendation.** Add an instrument-wording topic under RES.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.instrument-wording","domainCode":"RES","name":"Wording survey and interview questions","type":"PROCEDURAL","scope":"Writing clear, neutral, single-focus questionnaire items, response scales and interview prompts, and piloting them for comprehension with the target participants."}

### R1-29 (minor, overlap)

Topics: res.qualitative-reporting, dss.qualitative-writing

**Finding.** Both topics teach organising findings by theme, selecting and framing participant extracts, and interpreting rather than letting quotations 'speak for themselves'. They have the same stages (UTR) and the same CEFR range (B2+–C1).

**Recommendation.** Keep the findings write-up in res.qualitative-reporting and rescope dss.qualitative-writing to field notes, analytic memos and accounts of the analysis process.

Already applied: 1 change(s) — edited topics dss.qualitative-writing undefined

### R1-33 (minor, structure)

Topics: prg.acknowledgements

**Finding.** prg.acknowledgements is a thesis and article part-genre (depth 18, tagged UTR) but sits in Academic Pragmatics & Correspondence beside emails and requests.

**Recommendation.** Move it to RES as res.acknowledgements.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Re-home prg.acknowledgements to domain RES with id res.acknowledgements (keep an alias for the old id)."}

### R1-34 (minor, granularity)

Topics: pub.academic-cv-bio, dhl.critical-appraisal, dbe.professional-genres

**Finding.** pub.academic-cv-bio bundles academic CVs, conference bios and personal statements for postgraduate applications; the last is a final-year UG genre with different stakes. dhl.critical-appraisal bundles CASP-style appraisal assignments (UG) with PRISMA-reported systematic reviews (PGT/PGR). dbe.professional-genres bundles memos, briefing notes, management reports and pitches.

**Recommendation.** Split out the personal statement and systematic-review writing. Partly address dbe.professional-genres through the DBE additions in R1-04.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"pub.personal-statements","domainCode":"PUB","name":"Personal statements for postgraduate study and funding","type":"GENRE","scope":"Statements of purpose and scholarship applications showing fit, motivation and capability with evidence, for final-year UG and PGT students."}
- {"kind":"add-topic","id":"dhl.systematic-review-writing","domainCode":"DHL","name":"Writing systematic and structured reviews","type":"GENRE","scope":"Reporting search, selection, risk-of-bias and synthesis transparently following reporting guidance such as PRISMA 2020."}

### R1-36 (minor, coverage)

Topics: grp.professional-portfolio, pub.academic-cv-bio

**Finding.** There is no topic on placement or graduate-job applications, competency-based interviews or workplace-transition writing (searches for 'employab', 'job interview' and 'placement' as a work context return nothing relevant). UK in-sessional teams increasingly co-deliver this with careers services, especially for PGT cohorts on one-year programmes.

**Recommendation.** Add one EAP-bounded topic (EOP proper stays out of scope).

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"prg.professional-applications","domainCode":"PRG","name":"Applications and interviews for placements and graduate roles","type":"GENRE","scope":"Cover letters, competency-based application answers and interview talk that translate academic experience into evidence for employers."}

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

### R3-11 (major, missing-edge)

Topics: res.discussion, sta.claim-calibration, dat.data-commentary, res.limitations, res.methods, reg.impersonality-presence

**Finding.** Research-writing topics are weakly coupled to stance. res.discussion reaches sta.claim-calibration only through res.results > dat.data-commentary, and that edge is softened in R3-07/R3-11. res.limitations, res.introductions-cars, res.gap-niche, res.methods and res.literature-review do not reach sta.claim-calibration. No res.* topic except contribution and positionality reaches sta.self-mention or reg.impersonality-presence, even though the methods section is the classic site of the passive versus "we" choice.

**Recommendation.** Add res.discussion <- sta.claim-calibration (hard), res.limitations <- sta.claim-calibration (soft) and res.methods <- reg.impersonality-presence (soft). Soften dat.data-commentary <- sta.claim-calibration, so that foundation lab and data work is not gated by a B2–C2 topic; hedging remains reachable through it.

Already applied: 4 change(s) — added res.discussion <- sta.claim-calibration (hard); set dat.data-commentary <- sta.claim-calibration to soft; added res.limitations <- sta.claim-calibration (soft); added res.methods <- reg.impersonality-presence (soft)

### R3-15 (major, reteach)

Topics: voc.countability-academic-nouns, rdc.critical-response, prn.repair, exm.objective-questions, crt.multiple-perspectives, coh.writer-responsibility, coh.text-patterns, sem.preparation, res.literature-review

**Finding.** The validator requires reteachPrerequisiteId to be a direct prerequisite. This couples the guidance to the edge set. Nine reteach choices rest on edges removed in this review, and at least one spurious edge (rds.main-ideas <- rdp.parsing-complex-sentences) appears to exist mainly to license a remedial pointer. In addition, these reteach choices do not address their difficulty pattern: voc.countability (Greco-Latin plurals) -> core academic vocabulary; rdc.critical-response (opinion unconnected to the text) -> evidence evaluation; prn.repair (not noticing listener confusion) -> code glosses; exm.objective-questions (cue-based tricks) -> generalisation and qualification; crt.multiple-perspectives (essays must not take sides) -> reading writer stance; coh.writer-responsibility (over-explicitness) -> cohesion versus coherence; coh.text-patterns (evaluation element missing) -> cohesion versus coherence; sem.preparation (underestimating reading time) -> notes from reading; res.literature-review ("I am only a student") -> gap and niche. 563 of 1,445 difficulties (39%) have no reteach target.

**Recommendation.** Apply the guidance edits below; each new target is a direct prerequisite after all R3 changes. For the longer term, allow a separate remedialTopicId that may point to any ancestor or related topic, so that guidance needs no longer force graph edges.

Already applied: 9 change(s) — edited guidance voc.countability-academic-nouns difficulties[1].reteachPrerequisiteId; edited guidance rdc.critical-response difficulties[0].reteachPrerequisiteId; edited guidance prn.repair difficulties[2].reteachPrerequisiteId; edited guidance exm.objective-questions difficulties[2].reteachPrerequisiteId; edited guidance crt.multiple-perspectives difficulties[2].reteachPrerequisiteId; edited guidance coh.writer-responsibility difficulties[2].reteachPrerequisiteId; edited guidance coh.text-patterns difficulties[1].reteachPrerequisiteId; edited guidance sem.preparation difficulties[2].reteachPrerequisiteId; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Schema/validator: add optional remedialTopicIds (any topic) distinct from reteachPrerequisiteId (direct prerequisite) so remediation pointers do not force edges."}

### R4-04 (critical, misattribution)

Topics: pub.academic-cv-bio

**Finding.** Verification corrected the reference to Hyland, K., & Tse, P. (2012). The guidance text still attributes the bio-statement study to Hyland alone: 'Hyland (2012) analysed article bio statements' and 'Hyland (2012) shows that bio statements'. Text and bibliography now disagree on authorship.

**Recommendation.** Update the in-text attributions to Hyland and Tse (2012). Re-run an author-surname check for the other 33 references corrected during verification.

Already applied: 2 change(s) — edited guidance pub.academic-cv-bio summary; edited guidance pub.academic-cv-bio activities[0].rationale

### R4-06 (major, overclaim)

Topics: cit.author-date-in-text, reg.vague-overgeneralised, res.research-questions, crt.problem-solving

**Finding.** Several summaries present untested teaching recommendations as established ('works best', 'most likely to improve') right next to descriptive or theoretical citations, so readers will take the citation as the evidence. Examples: 'Instruction works best when formatting is linked to the integral/non-integral distinction (Swales, 1990; Thompson & Tribble, 2001) rather than taught as an isolated rule list'; 'Teaching works best by asking the reader's questions' (after citing Hinkel's and Aull & Lancaster's descriptive corpus work); 'Teaching works best through repeated revision of the learner's own questions'; 'are the two moves most likely to improve student work'. None of the cited works tests the instruction.

**Recommendation.** Mark these as practitioner proposals.

Already applied: 4 change(s) — edited guidance cit.author-date-in-text summary; edited guidance reg.vague-overgeneralised summary; edited guidance res.research-questions summary; edited guidance crt.problem-solving summary

### R4-08 (major, decorative)

Topics: exm.open-book, res.ethics-documentation, grm.subject-verb-agreement, par.concluding-sentences, wpr.planning-outlining

**Finding.** Heavily cited references are attached to rationales they do not address. Pecorari (2013) for 'Time spent searching unorganised materials reduces time for analysis' (exm.open-book). Creswell & Creswell (2018) for 'Adapting register for a non-specialist audience is a mediation skill' (res.ethics-documentation). Boulton & Cobb (2017), a learning-outcome meta-analysis, for 'Data-driven learning encourages evidence-based usage judgements'. Wingate (2012) for a sentence-level finding she did not report ('the link between evidence and argument that Wingate (2012) found students often leave implicit'). Swales & Feak (2012), a textbook, as the source of a frequency claim ('authentic paragraphs frequently end on evidence or comment'). Hyland (2003) attached to a rationale whose only substantive claim is the learning-styles debunk, which that book does not address. The most-cited sources (swalesfeak2012 ×115, apa2020 ×103, biber1999lgswe ×88, celcemurcia1999 ×61, wingate2012argument ×57) are mostly used appropriately, but each has a tail of decorative uses.

**Recommendation.** Remove decorative citations or reword so that each citation supports only what the source says.

Already applied: 6 change(s) — removed pecorari2013 from exm.open-book guidance activities[0].citations; removed creswell2018 from res.ethics-documentation guidance activities[0].citations; edited guidance grm.subject-verb-agreement activities[1].rationale; edited guidance par.concluding-sentences activities[0].rationale; edited guidance par.concluding-sentences summary; removed hyland2003writing from wpr.planning-outlining guidance activities[1].citations

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add a verified source for the learning-styles statements (e.g. Pashler, McDaniel, Rohrer & Bjork, 2008, Psychological Science in the Public Interest, 9(3), 105–119) and cite it in wpr.planning-outlining activities[1], lrn.metacognitive-knowledge difficulties[1] and the ntk.note-formats 'visual learner' difficulty; the debunks are correct but currently unsourced or wrongly sourced."}

### R5-01 (critical, stereotype)

Topics: voc.evaluative-lexis, sta.evaluating-others-language, rdc.critical-reading, syn.synthesis-concept, syn.gaps-tensions, cit.citation-functions, inf.source-evaluation, par.integrating-evidence, ess.criticality, ess.thesis-statement, ges.critique, res.literature-review, res.gap-niche, res.supervision, idn.academic-identity, crt.concept, crt.questioning, sem.agreeing-disagreeing, sem.opinions, lis.speaker-stance, pub.peer-review-reports, acu.hidden-curriculum, acu.critical-eap, fbk.seeking-feedback, wpr.task-analysis, exm.oral-exams, lrn.autonomy, crt.epistemic-beliefs

**Finding.** The single most repeated learner difficulty in the dataset is the deferential learner who will not criticise authority: about 28 difficulty records across 25+ topics, many in near-identical ventriloquised words ('Who am I to criticise a published expert?' appears verbatim in voc.evaluative-lexis, rdc.critical-reading and, as 'professor', sta.evaluating-others-language; 'I am only a student' in inf.source-evaluation, res.literature-review and idn.academic-identity). About half are coded prior-schooling. With lrn.autonomy ('The teacher should tell me what to study'), crt.epistemic-beliefs ('Just tell me the right answer') and the memorisation patterns, this rebuilds Holliday's native-speakerist trio (deference, no critical thinking, no autonomy) under the neutral label 'prior schooling'. The repeated disclaimers ('do not attribute this to culture') do not undo the effect. A teacher reading across topics meets the same figure dozens of times, and the label still points to 'elsewhere' schooling. Hesitancy to evaluate published work is well documented among novice first-language English students too, and comes from novice status and the assessment genre.

**Recommendation.** Keep the deference pattern in two or three anchor topics (crt.concept, ess.criticality, res.literature-review). Replace it elsewhere with difficulties specific to the topic. Where it stays, code it affective or conceptual, unless the evidence names an assessment practice, and say that it is common among novice writers of all backgrounds. Add a rule to AUTHORING.md section 4: no single difficulty pattern may recur in more than three records, and prior-schooling must name a schooling or assessment practice, not a disposition.

Already applied: 9 change(s) — edited guidance crt.concept difficulties[1].pattern; edited guidance sta.evaluating-others-language difficulties[0].kind; edited guidance sta.evaluating-others-language difficulties[0].response; edited guidance idn.academic-identity difficulties[2].kind; edited guidance voc.evaluative-lexis difficulties[1].pattern; edited guidance voc.evaluative-lexis difficulties[1].kind; edited guidance voc.evaluative-lexis difficulties[1].revealedBy; edited guidance voc.evaluative-lexis difficulties[1].response; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Consolidate the deference/reluctance-to-critique pattern. Keep it in crt.concept[1], ess.criticality[1] and res.literature-review[2]. Rewrite it as a topic-specific difficulty in syn.synthesis-concept[1], cit.citation-functions[2], inf.source-evaluation[2], rdc.critical-reading[2], syn.gaps-tensions[2], ges.critique[1], crt.questioning[1], res.gap-niche[1] and sem.agreeing-disagreeing[0]. Add to AUTHORING.md section 4: 'No difficulty pattern may recur in substance in more than three records; prior-schooling must name a schooling or assessment practice, not a disposition such as deference.'"}

### R5-02 (critical, balance)

Topics: acu.critical-eap, idn.standards-legitimacy, acu.academic-literacies, idn.diversity-as-resource, idn.plurilingual-repertoire, rdp.plurilingual-reading, dig.machine-translation, idn.intercultural-rhetoric, acu.emi-tne, src.multilingual-sources, pub.multilingual-scholars, gai.detection-limits

**Finding.** The text of IDN and ACU is critical and resource-oriented, but the prerequisite graph and stage tags build in 'learn the norms first, question them later, if at all'. acu.critical-eap sits at depth 10 and unlocks nothing (0 downstream). idn.intercultural-rhetoric, acu.emi-tne, src.multilingual-sources, pub.multilingual-scholars and gai.detection-limits are also dead-end leaves. idn.plurilingual-repertoire (B1, foundation) sits at depth 8, at the end of the chain grm.clause-elements > voc.word-families-morphology > ... > acu.hidden-curriculum > acu.academic-literacies > idn.diversity-as-resource. So using one's own languages is modelled as an advanced achievement, not the starting resource. The edge acu.academic-literacies (B2+, in-sessional only) > idn.diversity-as-resource (B1, foundation) is also stage-incoherent. rdp.plurilingual-reading depends on dig.machine-translation, which makes reading in one's own languages a by-product of an MT topic. Foundation, the stage with 372 topics, has no access to acu.critical-eap, acu.academic-literacies, idn.standards-legitimacy or idn.intercultural-rhetoric, although Benesch's rights analysis was developed with undergraduates on linked courses.

**Recommendation.** Make the plurilingual repertoire an early node, make critical topics prerequisites of something, and open rights analysis and the standards-legitimacy discussion to foundation learners in simplified form. I checked the edge changes below for acyclicity against the current graph. With them, idn.plurilingual-repertoire falls from depth 8 to 3. Re-run scripts/check-strand.mjs after applying them.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"dependencies: remove edge {topicId: 'idn.diversity-as-resource', prerequisiteId: 'acu.academic-literacies'} (a B2+ in-sessional topic gating a B1 foundation topic)."}
- {"kind":"other","detail":"dependencies: remove edge {topicId: 'idn.plurilingual-repertoire', prerequisiteId: 'idn.diversity-as-resource'} and add {topicId: 'idn.diversity-as-resource', prerequisiteId: 'idn.plurilingual-repertoire', strength: 'soft', reason: 'Recognising diversity as a resource builds on learners first mapping the resources in their own repertoires'}."}
- {"kind":"other","detail":"dependencies: replace {topicId: 'rdp.plurilingual-reading', prerequisiteId: 'dig.machine-translation'} with {topicId: 'dig.machine-translation', prerequisiteId: 'rdp.plurilingual-reading', strength: 'soft', reason: 'MT is one tool within plurilingual reading; learners should first know how to use their languages for comprehension'} and add {topicId: 'rdp.plurilingual-reading', prerequisiteId: 'idn.plurilingual-repertoire', strength: 'soft'}."}
- {"kind":"other","detail":"dependencies: add {topicId: 'pub.multilingual-scholars', prerequisiteId: 'acu.critical-eap', strength: 'soft', reason: 'Navigating English-medium publishing as a multilingual scholar draws on a critical understanding of whose norms are rewarded'} so that critical EAP unlocks downstream work."}
- {"kind":"other","detail":"topics: add 'foundation' to stages of acu.critical-eap and idn.standards-legitimacy and lower cefrStart to B1+, with contextNotes describing a simplified needs-and-rights analysis of the learner's own course demands at foundation."}

### R5-10 (major, stereotype)

Topics: pub.cover-letters, pub.academic-cv-bio, idn.elf, idn.standards-legitimacy

**Finding.** pub.cover-letters[0] gives as an L1-transfer error the pattern 'Dear Respected Editor, I humbly request you to kindly consider my manuscript…'. These formulae are recognisably South Asian English, a nativised variety that is many writers' first or dominant English. Labelling them L1 transfer turns a legitimate World English into interference, and the quoted string reads as caricature. World Englishes and postcolonial Englishes appear nowhere in the dataset (0 mentions), so learners whose English is an outer-circle variety have no place in it except as error. pub.academic-cv-bio[1] codes a national CV convention (photo, date of birth) as L1-transfer too, which is a category error.

**Recommendation.** Remove the caricature, recode both items, and acknowledge World Englishes in idn.elf or idn.standards-legitimacy.

Already applied: 5 change(s) — edited guidance pub.cover-letters difficulties[0].pattern; edited guidance pub.cover-letters difficulties[0].kind; edited guidance pub.cover-letters difficulties[0].revealedBy; edited guidance pub.cover-letters difficulties[0].response; edited guidance pub.academic-cv-bio difficulties[1].kind

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"idn.elf or idn.standards-legitimacy: add a mastery statement recognising World Englishes, for example 'Distinguishes features of established varieties of English (e.g. Indian, Nigerian, Singaporean English) from learner errors, and explains when genre conventions rather than variety determine expected forms'."}

### R5-13 (major, balance)

Topics: sem.turn-taking, res.supervision, grw.inclusive-collaboration, acu.hidden-curriculum

**Finding.** The difficulty schema puts every problem inside the learner. The seven kinds (L1-transfer, developmental, conceptual, prior-schooling, overgeneralisation, performance, affective) have no category for barriers caused by others or by institutions. So sem.turn-taking[2], 'Entry attempts are ignored or talked over because the learner has been positioned as less competent', is coded affective, as though it were the learner's feeling. Likewise res.supervision[0] codes a supervisor's ambiguous hedged feedback as the student's L1-transfer problem. The guidance format has a difficulties array but nothing for learner resources. Only 26 of 210 prior-schooling responses acknowledge the value of earlier practice, and only 54 of 557 guidance records mention learner assets in their summary or contextNotes. Prior education therefore appears almost only as a source of problems.

**Recommendation.** Add a difficulty kind for positioning and institutional causes, and an optional learnerResources field to the guidance schema. Correct the misattributed items now.

Already applied: 2 change(s) — edited guidance res.supervision difficulties[0].kind; edited guidance res.supervision difficulties[0].response

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"AUTHORING.md section 4 and schema: add difficulty kind 'positioning' (barriers created by peers, staff, task or assessment design, e.g. being talked over, unclear criteria, inaccessible formats) and recode sem.turn-taking[2] and grw.inclusive-collaboration[0] to it. Add an optional guidance field 'learnerResources' (1–3 items: prior knowledge, languages or practices that transfer) and populate it first for prior-schooling-heavy topics."}

### R5-16 (minor, normativity)

Topics: pub.multilingual-scholars

**Finding.** The pub.multilingual-scholars[0] response tells doctoral writers that 'rejections usually concern content and fit'. No listed source supports that, and it sits awkwardly with the topic's own description of 'reviewer and editor attitudes to non-standard English'. It risks gaslighting PGR writers who have met real language bias.

**Recommendation.** Present the evidence as mixed and acknowledge documented language-related costs.

Already applied: 1 change(s) — edited guidance pub.multilingual-scholars difficulties[0].response

### R6-01 (major, coverage)

Topics: res.research-proposal, pub.viva, res.thesis-macrostructure, int.recycling-own-work

**Finding.** The doctoral trajectory has gaps at its assessed milestones. Nothing covers (a) the confirmation, upgrade or annual progression review (a written report plus a panel conversation, often the first formal assessment of a PGR's writing and oral defence of a design); (b) what happens after the viva: reading examiners' reports, producing a corrections table or response document, negotiating corrections with the internal examiner, and language-related corrections (many regulations judge the thesis's 'presentation'); (c) turning thesis chapters into articles and vice versa (re-scoping, compressing, re-framing for a journal readership, text-recycling and copyright or permission rules when published papers go into a thesis). Experienced PGR provision treats all three as core. res.research-proposal mentions confirmation reports only in passing, and pub.viva stops at the oral.

**Recommendation.** Add three PGR topics, linked as follows: res.progression-review after res.research-proposal; pub.thesis-corrections after pub.viva and pub.responding-reviewers; pub.thesis-to-article after res.thesis-macrostructure, pub.journal-selection and int.recycling-own-work.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.progression-review","domainCode":"RES","name":"Confirmation, upgrade and progression reviews","type":"GENRE","scope":"Write the progression or confirmation report expected at doctoral milestones (progress to date, revised questions and design, preliminary findings, a plan and timeline, and identified risks and training needs) and discuss it with a review panel. Reviewers judge feasibility, coherence and the candidate's ability to defend choices orally. Local regulations, outcomes and timings vary widely."}
- {"kind":"add-topic","id":"pub.thesis-corrections","domainCode":"PUB","name":"Examiners' reports and thesis corrections","type":"GENRE","scope":"Interpret examiners' reports and viva outcomes (for example minor or major corrections, or revise and resubmit), turn them into a corrections plan, and produce the response document or corrections table that maps each required change to its location. Recognise and fix language-related corrections. Communicate with the examiner who approves the corrections, and meet the regulatory deadlines."}
- {"kind":"add-topic","id":"pub.thesis-to-article","domainCode":"PUB","name":"From thesis to articles","type":"PROCEDURAL","scope":"Turn thesis chapters into journal articles, or integrate published papers into a thesis. This means re-scoping the argument for a journal's readership, compressing literature and methods, rewriting introductions and contributions for a stand-alone paper, and following text-recycling, co-authorship-statement and copyright or permission rules for previously published material."}

### R6-02 (major, coverage)

Topics: dhl.critical-appraisal, inf.systematic-searching, pub.publishing-process, pub.journal-selection

**Finding.** Two cross-disciplinary PGR genres are absent or confined to one ESAP domain. (1) Systematic and scoping review writing appears only inside dhl.critical-appraisal, which bundles single-study appraisal for UG health students with PRISMA reporting for PGR; its own review note concedes these are 'distinct genres at different levels'. Systematic and scoping reviews are standard doctoral outputs in education, social policy, management, software engineering and environmental science, not only health. (2) Open research practices are absent as a writing topic: preprints, preregistration and registered reports, data availability statements, data management plans, ORCID and licences, and funder open-access and rights-retention requirements. These now generate mandatory text in submissions and grant applications. inf.open-access covers access from the reader's side only.

**Recommendation.** Add res.systematic-review-writing (protocol registration, PRISMA 2020 or PRISMA-ScR reporting, risk-of-bias and certainty language, narrative synthesis). Narrow dhl.critical-appraisal to appraisal of single studies, with the new topic as its PGR successor. Add pub.open-research as a PUB topic.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.systematic-review-writing","domainCode":"RES","name":"Writing systematic and scoping reviews","type":"GENRE","scope":"Write the protocol and report of a systematic, scoping or other structured review in any discipline. This covers registering or publishing a protocol, reporting search and selection transparently with the relevant reporting guideline (for example PRISMA 2020 or PRISMA-ScR) and a flow diagram, describing risk-of-bias or quality appraisal, writing narrative or quantitative synthesis, and calibrating conclusions to the certainty of the evidence."}
- {"kind":"add-topic","id":"pub.open-research","domainCode":"PUB","name":"Open research practices and statements","type":"PROCEDURAL","scope":"Understand and write the texts that open-research practices require: preprints and their versioning, preregistration and registered reports, data and code availability statements, data management plans, licence choices, ORCID and persistent identifiers, and statements that meet funder and institutional open-access and rights-retention requirements. Disciplinary norms and policies vary and change."}
- {"kind":"other","detail":"Retitle dhl.critical-appraisal 'Critical appraisal of health research' and remove the PRISMA-reporting mastery evidence (masteryEvidence[4]) and the second guidance activity, moving them to res.systematic-review-writing. Add a soft edge dhl.critical-appraisal -> res.systematic-review-writing."}

### R6-04 (major, coverage)

Topics: prs.research-presentations, res.supervision, fbk.self-peer-assessment

**Finding.** Graduate teaching assistants and demonstrators are not covered. Many international PGRs teach seminars, run labs and mark undergraduate work in English. Institutional ESAP and PGR provision commonly includes classroom language, explaining and questioning, and giving written feedback to students. No topic addresses the PGR as teacher or marker.

**Recommendation.** Add a PGR topic on teaching and demonstrating communication. It could sit under SEM or RES; RES is proposed so that it appears on the PGR pathway.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.teaching-as-pgr","domainCode":"RES","name":"Teaching, demonstrating and marking as a doctoral researcher","type":"SOCIOPRAGMATIC","scope":"Communicate as a graduate teaching assistant or demonstrator: explaining concepts and procedures to undergraduates, asking and handling questions, managing small-group discussion and lab safety talk, and writing clear, criterion-referenced feedback on student work within the module's marking guidance."}

### R6-06 (major, accuracy)

Topics: pub.viva

**Finding.** The viva/defence topic oversimplifies international formats in ways that mislead preparation. (1) In the Netherlands, the Nordic countries, Germany and France, the written thesis is normally approved by a committee before the public defence. The defence therefore has a different function and risk profile from a UK viva, and failure at defence is rare. The topic presents these as parallel formats. (2) 'Nordic and Dutch public defences with an opponent' is inaccurate for the Netherlands, where several committee members act as opponents in a fixed, ceremonial time slot. (3) North American defences are described as committee defences, without the earlier proposal or prospectus defence and qualifying examinations that are the main oral hurdles there. (4) UK outcomes are reduced to minor or major corrections, omitting revise-and-resubmit and lower awards, which change how candidates prepare. (5) Online and hybrid vivas, now routine, are not mentioned. (6) Nothing covers what follows the oral (see R6-01). The mock-viva prompt (ten minutes, three questions, no follow-ups) does not reproduce the probing follow-up questions that discriminate at C1–C2.

**Recommendation.** Rewrite the format sentences with these distinctions and keep the advice to check local regulations. Extend ME[0] to cover post-viva processes. Strengthen the prompt with follow-up probing and navigation of the thesis.

Already applied: 4 change(s) — edited topics pub.viva description; edited topics pub.viva masteryEvidence[0]; edited topics pub.viva assessmentPrompt; edited guidance pub.viva contextNotes

### R6-07 (major, accuracy)

Topics: pub.peer-review-reports

**Finding.** Reviewer ethics omit the most pressing current breach for early-career reviewers: uploading a confidential manuscript to a generative AI tool to summarise, translate or polish a report. ICMJE guidance and many publishers' and funders' policies prohibit this unless confidentiality can be assured. The topic also omits that involving a co-reviewer, such as the supervisor arrangement the guidance itself recommends, requires the editor's permission and disclosure.

**Recommendation.** Add both to ME[4] and to the guidance summary.

Already applied: 2 change(s) — edited topics pub.peer-review-reports masteryEvidence[4]; edited guidance pub.peer-review-reports summary

### R6-10 (major, framework-mapping)

Topics: grw.purposes, grw.roles-planning, grw.contribution-assessment, ess.criticality, crt.problem-solving, mmd.multimodal-literacy, res.chapter-metatext

**Finding.** The Vitae RDF is a framework for researchers, yet seven links attach it to topics not tagged pgr, including foundation group-work topics (grw.purposes, grw.roles-planning, grw.contribution-assessment: D1) and foundation critical thinking (crt.problem-solving: A2 component, A3). This dilutes what a Vitae link means for users filtering the PGR pathway. Conversely, res.chapter-metatext is the only PGT/PGR-only topic with no Vitae link. On PGR topics, the Vitae links are generally apt (C1 for authorship and ethics, B2 and C2 for writing productivity, D3 for engagement, B3 for CVs, A3 'argument construction' for contribution and gap). A1, whose descriptors include academic literacy and languages, is a defensible default anchor for PGR language topics. A3 is under-used (three links) given that it includes argument construction.

**Recommendation.** Remove the seven non-PGR Vitae links, or tag those topics pgr if they are genuinely intended for doctoral provision. Add D2 to res.chapter-metatext. Consider A3 for arg.extended-argument (PUTR).

Already applied: 9 change(s) — grw.purposes - framework vitae-rdf:D1; grw.roles-planning - framework vitae-rdf:D1; grw.contribution-assessment - framework vitae-rdf:D1; ess.criticality - framework vitae-rdf:A2; crt.problem-solving - framework vitae-rdf:A2; crt.problem-solving - framework vitae-rdf:A3; mmd.multimodal-literacy - framework vitae-rdf:D2; res.chapter-metatext + framework vitae-rdf:D2; …

### R6-14 (minor, framework-mapping)

Topics: res.abstracts, dat.captions-labelling, dhl.case-reports-care-plans, dhu.interpretive-argument

**Finding.** There are obvious mismatches or omissions on individual topics. res.abstracts links only 'Streamlining a text' (at C1/C2, above the topic's C1 ceiling), although the CEFR summarising scale is 'Processing text'. dat.captions-labelling's only link is acrl:value; 'Explaining data' is the natural home. dhl.case-reports-care-plans links only oral and relaying scales, although care plans are written. dhu.interpretive-argument makes 'Analysis and criticism of creative texts' its core link; that fits literary interpretation but not the historical and documentary interpretation the topic also covers, where 'Reports and essays' should be core. Note-taking and data-commentary mappings, by contrast, are sound: all ntk.* topics link 'Note-taking (lectures, seminars, meetings, etc.)', and dat.*, res.results and prs.explaining-visuals link 'Explaining data'.

**Recommendation.** Apply the link changes below.

Already applied: 9 change(s) — res.abstracts - framework cefr-cv:med.strat.streamlining-text; res.abstracts + framework cefr-cv:med.text.processing-text; res.abstracts + framework cefr-cv:med.strat.streamlining-text; dat.captions-labelling + framework cefr-cv:med.text.explaining-data; dhl.case-reports-care-plans + framework cefr-cv:prod.writ.reports-essays; dhu.interpretive-argument - framework cefr-cv:med.text.analysis-creative; dhu.interpretive-argument - framework cefr-cv:prod.writ.reports-essays; dhu.interpretive-argument + framework cefr-cv:prod.writ.reports-essays; …

### R6-15 (minor, stage-level)

Topics: res.thesis-macrostructure, res.chapter-metatext, res.qualitative-reporting, res.gap-niche, pub.journal-selection

**Finding.** On several RES topics, link levels exceed the topic's CEFR range. Each of these topics ends at C1, but links claim C1/C2: res.thesis-macrostructure (thematic development), res.chapter-metatext (coherence and cohesion; thematic development), res.qualitative-reporting (thematic development) and res.gap-niche (reports and essays). Either the range or the link is wrong. C1 is the realistic band for successful L2 doctoral writing, so trimming the links is preferable to raising the ranges. pub.journal-selection has a degenerate range, C1–C1, which is inconsistent with the parallel pub.cover-letters (B2+–C1).

**Recommendation.** Trim these links to C1, and set pub.journal-selection to B2+–C1.

Already applied: 11 change(s) — res.thesis-macrostructure - framework cefr-cv:prag.thematic-development; res.thesis-macrostructure + framework cefr-cv:prag.thematic-development; res.chapter-metatext - framework cefr-cv:prag.coherence-cohesion; res.chapter-metatext + framework cefr-cv:prag.coherence-cohesion; res.chapter-metatext - framework cefr-cv:prag.thematic-development; res.chapter-metatext + framework cefr-cv:prag.thematic-development; res.qualitative-reporting - framework cefr-cv:prag.thematic-development; res.qualitative-reporting + framework cefr-cv:prag.thematic-development; …

### R6-16 (minor, accuracy)

Topics: res.introductions-cars

**Finding.** The CARS description conflates Swales's 1990 and 2004 models. It lists the 1990 Move 1 steps (claiming centrality, generalising, reviewing previous research) and the 1990 Move 3 label ('occupying' the niche), while the guidance cites Swales (2004). The 2004 revision drops the centrality step, makes citation pervasive across topic generalisations of increasing specificity, recasts Move 2 as indicating a gap or adding to what is known, and renames Move 3 'presenting the present work', with a longer list of optional steps. Teachers comparing the dataset with either source will find a mismatch.

**Recommendation.** Name both versions explicitly.

Already applied: 1 change(s) — edited topics res.introductions-cars description

### R6-17 (minor, accuracy)

Topics: pub.authorship

**Finding.** The authorship topic is broadly accurate, with two imprecisions. (1) Under ICMJE, acquisition of data can satisfy criterion 1. ICMJE also says that contributors who meet criterion 1 should be given the opportunity to meet criteria 2–4. The diagnostic's 'strong response' (data collection 'usually warrants acknowledgement') is therefore right only if that opportunity is not taken up, and it omits the point. (2) The description presents CRediT alongside eligibility criteria without saying that CRediT records roles but does not determine who qualifies as an author, a common confusion when journals require CRediT statements. ICMJE is also a biomedical standard; the context note mentions field variation, but the description should not imply ICMJE is general.

**Recommendation.** Apply the edits below.

Already applied: 2 change(s) — edited topics pub.authorship description; edited guidance pub.authorship diagnostic.strongResponse

### R6-22 (minor, accuracy)

Topics: res.thesis-macrostructure

**Finding.** The thesis-type typology (after Paltridge 2002) is accurate, but it omits two variants a PGR adviser meets often: the retrospective PhD by published works (prior publications plus a critical commentary, often taken by staff candidates), as distinct from the prospective thesis by publication, and practice-based doctorates (artefact or portfolio plus exegesis). The professional doctorate portfolio is also absent. Separately, the hard prerequisite res.imrad -> res.thesis-macrostructure is inappropriate for topic-based, theoretical and humanities theses, which the topic itself legitimises.

**Recommendation.** Extend the description, and soften the dependency.

Already applied: 1 change(s) — edited topics res.thesis-macrostructure description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"In dependencies.json change the edge res.thesis-macrostructure <- res.imrad from 'hard' to 'soft'."}

### R6-23 (minor, accuracy)

Topics: res.quantitative-reporting, res.methods, res.qualitative-reporting, dss.qualitative-writing, pub.publishing-process

**Finding.** Several research-writing statements are slightly over-simplified. (a) 'exact p-values' should note the style-guide convention of p < .001 for very small values; otherwise learners copy p = .000-style outputs into exact decimals. (b) res.methods refers to 'reporting guidelines' without naming the families that ESAP teachers will meet: CONSORT, STROBE, COREQ and SRQR, collected by the EQUATOR Network. (c) The qualitative topics anchor thematic analysis in Braun and Clarke (2006); the authors' later reflexive TA work (2019, 2021) is what examiners and reviewers now invoke, especially against 'themes emerged' and inter-rater coding in reflexive designs. (d) The publishing-process topic lists single, double and open review but not transparent review, registered reports, or review of preprints, which PGRs increasingly encounter.

**Recommendation.** Apply the text edits below and add the later Braun and Clarke references to the bibliography.

Already applied: 3 change(s) — edited topics res.quantitative-reporting description; edited topics res.methods description; edited topics pub.publishing-process description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add Braun & Clarke (2019, 'Reflecting on reflexive thematic analysis', Qualitative Research in Sport, Exercise and Health) and/or Braun & Clarke (2021, Thematic analysis: A practical guide, SAGE) to references.json, after verifying them, and cite them in the guidance for res.qualitative-reporting and dss.qualitative-writing alongside braunclarke2006."}

### R6-24 (minor, evidence-prompt)

Topics: res.positionality-writing, res.writing-productivity

**Finding.** Mastery evidence in the PGR domains is generally observable and discriminating: most items name a product, such as an annotated draft, a chapter plan, a response matrix or a contributor statement, together with a quality condition. Two items are not observable as written. res.positionality-writing ME[2] ('confidently and appropriately') names an attitude, not a textual feature. res.writing-productivity ME[2] ('uses at least one social structure') records attendance, not competence, and the diagnostic for that topic relies on self-report.

**Recommendation.** Rewrite the two items in terms of textual or behavioural evidence.

Already applied: 2 change(s) — edited topics res.positionality-writing masteryEvidence[2]; edited topics res.writing-productivity masteryEvidence[2]

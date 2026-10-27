# Revision packet: 12-data-digital

Domains: DAT (Data Commentary & Visuals), DIG (Digital Scholarship Tools), MMD (Multimodal Composition), NUM (Academic Numeracy Language)

## New topics to author

- `dig.assistive-technology` | STRATEGIC | **Assistive technology and study adjustments** — Using assistive and accessibility technologies (text-to-speech, dictation, screen readers, reading and planning supports) and institutional adjustments as legitimate academic practice, within assessment rules. (from R5-07)

## Merges affecting your domains

- `edt.editing-tools` was merged into `dig.automated-feedback-tools` (R1-17). The absorbed record is in authoring/revision/absorbed/edt.editing-tools.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `mmd.poster-design` was merged into `prs.posters` (R1-30). The absorbed record is in authoring/revision/absorbed/mmd.poster-design.json. The survivor belongs to another group; no action needed except updating any references in your text.
- `sen.numbers-units-style` was merged into `num.number-expressions` (R1-19). The absorbed record is in authoring/revision/absorbed/sen.numbers-units-style.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-06 (major, stage-level)

Topics: acu.university-structures, acu.roles-address, acu.academic-expectations, lrn.support-services, lrn.time-management, lrn.goal-setting, int.integrity-values, prg.messaging-channels, dig.word-processing, sem.preparation, prs.rehearsal-timing, arg.argument-concept

**Finding.** 261 topics are tagged pgr. 43 of them start at B1 and 29 are expected to be controlled by B2+ (cefrEnd ≤ B2+), which is below the C1 baseline that AUTHORING.md itself gives for doctoral researchers. Examples are acu.university-structures (B1–B2), acu.roles-address (B1–B2), lrn.time-management (B1–B2), lrn.support-services (B1–B2), int.integrity-values (B1–B2+) and arg.argument-concept (B1–B2+). A doctoral writing programme that followed the pathway would spend time on how universities are organised and what an argument is, while R1-05 shows its own core genres are missing. The PGR pathway's ordering also starts with B2-level vocabulary and grammar, not with doctoral genres.

**Recommendation.** Remove pgr from orientation and B1-entry topics where a PGR-specific topic already exists (int.research-integrity, res.writing-productivity, res.supervision, acu.hidden-curriculum). Keep pgr only where the PGR treatment is materially different, and say so in contextNotes.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["acu.university-structures","acu.roles-address","acu.academic-expectations","lrn.support-services","lrn.time-management","lrn.goal-setting","int.integrity-values","prg.messaging-channels","dig.word-processing","sem.preparation","prs.rehearsal-timing","arg.argument-concept"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt"]}

### R1-17 (major, overlap)

Topics: edt.editing-tools, dig.automated-feedback-tools, gai.language-support, gai.prompting-for-learning, dig.machine-translation

**Finding.** edt.editing-tools and dig.automated-feedback-tools are near-verbatim duplicates. Both cover grammar checkers, automated writing evaluation and AI rewriting, treated critically and within the rules, with the same warnings about flattening voice and breaching rules. gai.language-support and gai.prompting-for-learning have identical type, CEFR range (B1+–C1) and stages (FPUTR), and both describe using AI as a tutor that keeps the learner doing the cognitive work. Machine translation is now largely delivered by the same LLM tools, yet it sits apart in DIG.

**Recommendation.** Merge the duplicates. Rescope dig.machine-translation as translation-mediated drafting and reading, whatever the tool.

Already applied: 1 change(s) — edited topics dig.machine-translation undefined

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"dig.automated-feedback-tools","absorb":["edt.editing-tools"]}
- {"kind":"merge","keep":"gai.language-support","absorb":["gai.prompting-for-learning"]}

### R1-19 (major, granularity)

Topics: sen.capitalisation, sen.quotation-punctuation, sen.apostrophes-hyphens-dashes, sen.numbers-units-style, num.number-expressions, num.units-measurement, cit.locators, cit.author-date-in-text, cit.accuracy-consistency, cit.reference-list

**Finding.** Granularity is uneven. Capitalisation, apostrophes/hyphens/dashes, quotation punctuation, lists and bullets, and numbers in text are five separate topics. Numbers and units appear three times (sen.numbers-units-style, num.number-expressions, num.units-measurement). Citation mechanics have eight topics (in-text, numeric, note-based, reference list, locators, accuracy, diverse sources, systems). Meanwhile all of Business & Economics, Humanities, Social Sciences and Creative Arts get four topics each, and 'Professional business genres' is one topic. Fine-grained mechanics inflate every stage count and pathway without adding teachable units.

**Recommendation.** Consolidate the mechanics and spend the freed slots on disciplinary genres (R1-04).

Already applied: 1 change(s) — edited topics sen.apostrophes-hyphens-dashes undefined

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"sen.apostrophes-hyphens-dashes","absorb":["sen.capitalisation","sen.quotation-punctuation"]}
- {"kind":"merge","keep":"num.number-expressions","absorb":["sen.numbers-units-style"]}
- {"kind":"merge","keep":"cit.author-date-in-text","absorb":["cit.locators"]}
- {"kind":"merge","keep":"cit.reference-list","absorb":["cit.accuracy-consistency"]}

### R1-30 (minor, overlap)

Topics: prs.posters, mmd.poster-design

**Finding.** prs.posters (presenting a poster) and mmd.poster-design (designing it) have identical stages (PUTR) and CEFR range (B2–C1) and are always taught and assessed together as one genre.

**Recommendation.** Merge into a single GENRE topic in PRS, with design statements included in its mastery evidence.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"prs.posters","absorb":["mmd.poster-design"]}

### R1-35 (minor, stage-level)

Topics: grp.lab-report, grp.business-report, dig.file-management, grp.case-study

**Finding.** grp.business-report is tagged pre-sessional but grp.lab-report and grp.case-study are not, even though science/engineering and business/health pre-sessional strands routinely teach both. dig.file-management (an entry-point topic) is tagged FUTR but not pre-sessional, where version control of drafts matters for the portfolio and integrity evidence.

**Recommendation.** Add pre-sessional to these topics, as 'develop' for subject-strand pre-sessionals once stageRoles exist.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["grp.lab-report","grp.case-study"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt"]}
- {"kind":"retag-stages","topicIds":["dig.file-management"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt","pgr"]}

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

### R3-11 (major, missing-edge)

Topics: res.discussion, sta.claim-calibration, dat.data-commentary, res.limitations, res.methods, reg.impersonality-presence

**Finding.** Research-writing topics are weakly coupled to stance. res.discussion reaches sta.claim-calibration only through res.results > dat.data-commentary, and that edge is softened in R3-07/R3-11. res.limitations, res.introductions-cars, res.gap-niche, res.methods and res.literature-review do not reach sta.claim-calibration. No res.* topic except contribution and positionality reaches sta.self-mention or reg.impersonality-presence, even though the methods section is the classic site of the passive versus "we" choice.

**Recommendation.** Add res.discussion <- sta.claim-calibration (hard), res.limitations <- sta.claim-calibration (soft) and res.methods <- reg.impersonality-presence (soft). Soften dat.data-commentary <- sta.claim-calibration, so that foundation lab and data work is not gated by a B2–C2 topic; hedging remains reachable through it.

Already applied: 4 change(s) — added res.discussion <- sta.claim-calibration (hard); set dat.data-commentary <- sta.claim-calibration to soft; added res.limitations <- sta.claim-calibration (soft); added res.methods <- reg.impersonality-presence (soft)

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

### R5-03 (critical, integrity-ai)

Topics: gai.detection-limits, wpr.l1-in-composing, dig.machine-translation, edt.proofreading-ethics

**Finding.** The integrity and AI content rightly says detectors are biased against writers of English as an additional language. It then makes those same writers responsible for proving their innocence ('learners protect themselves by keeping evidence of their writing process'). In several places it also teaches teachers a surveillance heuristic that hits multilingual writers hardest: a difference between in-class and submitted writing is listed as the evidence that reveals MT or proofreading misuse. See wpr.l1-in-composing[1] ('a marked gap between in-class and take-home writing'), dig.machine-translation[2] ('Marked differences between in-class and submitted writing; rhetorical organisation that does not match the English genre') and edt.proofreading-ethics[0] ('Marked differences in style between supervised and submitted writing'). Timed in-class L2 writing is normally weaker than drafted work, so this heuristic will produce false suspicion. The dig.machine-translation wording also brings back a contrastive-rhetoric assumption, that non-English organisation signals translation.

**Recommendation.** Put the burden of proof on the institution. Keep process records as an ordinary good habit, not a defence obligation. Rewrite each revealedBy so that style difference is never presented as evidence on its own.

Already applied: 5 change(s) — edited topics gai.detection-limits description; edited guidance gai.detection-limits summary; edited guidance wpr.l1-in-composing difficulties[1].revealedBy; edited guidance dig.machine-translation difficulties[2].revealedBy; edited guidance edt.proofreading-ethics difficulties[0].revealedBy

### R5-06 (major, normativity)

Topics: idn.plurilingual-repertoire, wpr.l1-in-composing, wpr.drafting, dig.machine-translation

**Finding.** García and Li Wei and Canagarajah are cited, but translanguaging is admitted only into the process: 'plan in any language, draft in English'. The products stay monolingual: 'while producing assessed work in the required language' (idn.plurilingual-repertoire) and 'drafting the text predominantly in English' (wpr.l1-in-composing). The claim 'translating whole L1 drafts tends to carry over L1 structures, reduces L2 practice' is presented as settled. Research comparing translation with direct composition is mixed: Kobayashi and Rinnert (1992) found that translated essays by lower-proficiency Japanese EFL writers scored higher on content and organisation. Translingual writing (code-meshing, multilingual quotation and glossing, bilingual assessment in EMI) does not appear anywhere. The 'draft in English' orthodoxy is presented as fact, not as a contested pedagogical choice.

**Recommendation.** Present language separation in products as contested and dependent on the task. Propose kobayashirinnert1992 under proposedReferences: Kobayashi, H., & Rinnert, C. (1992). Effects of first language on second language writing: Translation versus direct composition. Language Learning, 42(2), 183–215. My confidence is high but it should be verified. Add a translingual writing topic.

Already applied: 2 change(s) — edited topics idn.plurilingual-repertoire description; edited topics wpr.l1-in-composing description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"idn.translingual-writing","domainCode":"IDN","name":"Translingual writing and code-meshing","type":"CONCEPTUAL","scope":"Understand translingual approaches to academic writing (Canagarajah; Horner and colleagues), in which writers deliberately bring other languages or Englishes into academic texts by glossing, quoting in the original, code-meshing in reflective or creative genres, or bilingual submission in some EMI programmes. Weigh where this is accepted, contested or prohibited, and make informed, negotiated choices with tutors."}

### R5-07 (major, inclusion)

Topics: sem.turn-taking, sem.online-discussion, voc.spelling-conventions, rdp.reading-fluency-rate, edt.proofreading, exm.timed-writing, prs.nonverbal

**Finding.** Disability and neurodiversity are almost absent. Across 557 topics and 557 guidance records there are 0 mentions of dyslexia, autism or ADHD and one of neurodivergence (prs.nonverbal). There is no topic on assistive technology as legitimate academic practice (text-to-speech, dictation, mind-mapping software), on exam adjustments (mentioned once in a reviewNote), or on stammering and participation. Several assessments make particular modes of participation the norm. sem.online-discussion AP: 'a gap is a learner who contributes only in the chat or not at all'; its diagnostic gapResponse: 'Silent, or present only in the chat.' sem.turn-taking AP: 'a gap is near-silence'. Chat-only participation is the accessible mode for many deaf, hard-of-hearing, stammering and neurodivergent students. Spelling, proofreading and timed-reading guidance never considers specific learning differences, which carry over across languages.

**Recommendation.** Accept multiple modes of participation in seminar assessment, add learning-difference notes where they matter most, and add an assistive-technology topic.

Already applied: 5 change(s) — edited topics sem.online-discussion assessmentPrompt; edited guidance sem.online-discussion diagnostic.gapResponse; edited topics sem.turn-taking assessmentPrompt; edited guidance voc.spelling-conventions contextNotes; edited guidance rdp.reading-fluency-rate contextNotes

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"dig.assistive-technology","domainCode":"DIG","name":"Assistive technology and study adjustments","type":"STRATEGIC","scope":"Use assistive and accessibility technologies (text-to-speech, dictation, screen readers, mind-mapping and reading-support tools) and institutional adjustments, such as extra exam time or alternative participation modes, as legitimate parts of academic practice. Know how to request adjustments and how these tools interact with AI and integrity rules."}

### R6-10 (major, framework-mapping)

Topics: grw.purposes, grw.roles-planning, grw.contribution-assessment, ess.criticality, crt.problem-solving, mmd.multimodal-literacy, res.chapter-metatext

**Finding.** The Vitae RDF is a framework for researchers, yet seven links attach it to topics not tagged pgr, including foundation group-work topics (grw.purposes, grw.roles-planning, grw.contribution-assessment: D1) and foundation critical thinking (crt.problem-solving: A2 component, A3). This dilutes what a Vitae link means for users filtering the PGR pathway. Conversely, res.chapter-metatext is the only PGT/PGR-only topic with no Vitae link. On PGR topics, the Vitae links are generally apt (C1 for authorship and ethics, B2 and C2 for writing productivity, D3 for engagement, B3 for CVs, A3 'argument construction' for contribution and gap). A1, whose descriptors include academic literacy and languages, is a defensible default anchor for PGR language topics. A3 is under-used (three links) given that it includes argument construction.

**Recommendation.** Remove the seven non-PGR Vitae links, or tag those topics pgr if they are genuinely intended for doctoral provision. Add D2 to res.chapter-metatext. Consider A3 for arg.extended-argument (PUTR).

Already applied: 9 change(s) — grw.purposes - framework vitae-rdf:D1; grw.roles-planning - framework vitae-rdf:D1; grw.contribution-assessment - framework vitae-rdf:D1; ess.criticality - framework vitae-rdf:A2; crt.problem-solving - framework vitae-rdf:A2; crt.problem-solving - framework vitae-rdf:A3; mmd.multimodal-literacy - framework vitae-rdf:D2; res.chapter-metatext + framework vitae-rdf:D2; …

### R6-11 (major, framework-mapping)

Topics: dat.data-commentary, sen.clarity-end-weight, sta.claim-calibration, phr.bundles-research-oriented, phr.spoken-academic-formulas, tst.test-formats

**Finding.** IELTS criterion links (97 in all) are partly decorative and in one case contradict the topic. dat.data-commentary's description says data commentary 'differs from description-only tasks such as IELTS Writing Task 1', yet it links to ielts:wr1.task-achievement. sen.clarity-end-weight is linked to IELTS although it has no foundation or pre-sessional stage. 27 links sit on topics tagged pgr, several at B2–C2 (sta.claim-calibration -> Task 2 Task Response; phr.bundles-research-oriented -> Lexical Resource), where IELTS performance is irrelevant. Coverage is also uneven: the Writing Lexical Resource and Grammatical Range and Accuracy criteria carry 33 links, while their Speaking counterparts carry none, although spoken-formula and spoken-stance topics exist. Because IELTS is the only test framework, the links privilege one test; tst.test-formats links three IELTS components, which implies the topic is IELTS-specific.

**Recommendation.** Adopt a rule: link IELTS criteria only from topics tagged foundation or pre-sessional whose primary use includes test preparation or transition, and never from topics whose content contrasts with the test task. Apply the removals below. Add the Speaking Lexical Resource link where spoken lexis is taught. In the frameworks note, state that IELTS is included as a reference criterion set, not as a preferred test.

Already applied: 5 change(s) — dat.data-commentary - framework ielts:wr1.task-achievement; sen.clarity-end-weight - framework ielts:wr.coherence-cohesion; sta.claim-calibration - framework ielts:wr2.task-response; phr.bundles-research-oriented - framework ielts:wr.lexical-resource; phr.spoken-academic-formulas + framework ielts:sp.lexical-resource

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Audit the remaining 23 IELTS links on pgr-tagged topics against the rule above, and add a sentence to frameworks.json 'note' that IELTS criteria are included as a reference set and that links do not endorse any test."}

### R6-14 (minor, framework-mapping)

Topics: res.abstracts, dat.captions-labelling, dhl.case-reports-care-plans, dhu.interpretive-argument

**Finding.** There are obvious mismatches or omissions on individual topics. res.abstracts links only 'Streamlining a text' (at C1/C2, above the topic's C1 ceiling), although the CEFR summarising scale is 'Processing text'. dat.captions-labelling's only link is acrl:value; 'Explaining data' is the natural home. dhl.case-reports-care-plans links only oral and relaying scales, although care plans are written. dhu.interpretive-argument makes 'Analysis and criticism of creative texts' its core link; that fits literary interpretation but not the historical and documentary interpretation the topic also covers, where 'Reports and essays' should be core. Note-taking and data-commentary mappings, by contrast, are sound: all ntk.* topics link 'Note-taking (lectures, seminars, meetings, etc.)', and dat.*, res.results and prs.explaining-visuals link 'Explaining data'.

**Recommendation.** Apply the link changes below.

Already applied: 9 change(s) — res.abstracts - framework cefr-cv:med.strat.streamlining-text; res.abstracts + framework cefr-cv:med.text.processing-text; res.abstracts + framework cefr-cv:med.strat.streamlining-text; dat.captions-labelling + framework cefr-cv:med.text.explaining-data; dhl.case-reports-care-plans + framework cefr-cv:prod.writ.reports-essays; dhu.interpretive-argument - framework cefr-cv:med.text.analysis-creative; dhu.interpretive-argument - framework cefr-cv:prod.writ.reports-essays; dhu.interpretive-argument + framework cefr-cv:prod.writ.reports-essays; …

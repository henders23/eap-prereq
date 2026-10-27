# Revision packet: 08-sources-synthesis

Domains: INF (Information Literacy & Source Evaluation), SRC (Summarising, Paraphrasing & Quoting), SYN (Synthesis)

## New topics to author

None.


## Merges affecting your domains

- `src.signal-phrases` was merged into `src.reporting-verbs` (R1-37). The absorbed record is in authoring/revision/absorbed/src.signal-phrases.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `src.source-functions` was merged into `cit.citation-functions` (R1-15). The absorbed record is in authoring/revision/absorbed/src.source-functions.json. The survivor belongs to another group; no action needed except updating any references in your text.
- `tst.integrated-test-tasks` was merged into `syn.integrated-tasks` (R1-14). The absorbed record is in authoring/revision/absorbed/tst.integrated-test-tasks.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-14 (major, overlap)

Topics: rdc.reading-for-writing, wpr.reading-to-write, syn.integrated-tasks, tst.integrated-test-tasks

**Finding.** rdc.reading-for-writing (select, read and organise sources around a writing task) and wpr.reading-to-write (move from reading and notes to one's own text) are two halves of one discourse-synthesis process. Both are FPUT, B1+–C1. syn.integrated-tasks and tst.integrated-test-tasks describe the same reading/listening-into-writing task type; the only difference is that one is a test. This is the central integrated skill of most pre-sessionals, and scattering it across four domains (RDC, WPR, SYN, TST) hides it.

**Recommendation.** Merge rdc.reading-for-writing into wpr.reading-to-write as one end-to-end procedure. Merge tst.integrated-test-tasks into syn.integrated-tasks and add a test-condition mastery statement. Make the result a named task anchor in pathways (R1-02).

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"wpr.reading-to-write","absorb":["rdc.reading-for-writing"]}
- {"kind":"merge","keep":"syn.integrated-tasks","absorb":["tst.integrated-test-tasks"]}

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

### R1-37 (minor, overlap)

Topics: src.reporting-verbs, src.signal-phrases, grm.reporting-structures, src.citation-forms, grm.tense-in-reporting

**Finding.** Reporting verbs, signal phrases, reporting structures, integral vs non-integral citation, and tense in reporting are five topics in two domains. Signal phrases ('According to X…') and reporting verbs are taught as one resource in practice.

**Recommendation.** Merge src.signal-phrases into src.reporting-verbs. Keep the grammar topics, but link them as hard prerequisites.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"src.reporting-verbs","absorb":["src.signal-phrases"]}

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

### R4-07 (major, overclaim)

Topics: inf.open-access, int.policy-processes, src.signal-phrases

**Finding.** Activity rationales state untested learning effects as fact under a framework or handbook citation: 'Practising the routes reduces reliance on unauthorised sources' (ACRL 2016); 'Rehearsing the genre before it is needed reduces anxiety and supports appropriate formality' (Bretag 2016); 'Learning frames as patterns reduces the blending errors common at this stage' (Pecorari 2013). None of these works tested the activity or the effect.

**Recommendation.** Present the effects as intended outcomes and say what the citation does support.

Already applied: 3 change(s) — edited guidance inf.open-access activities[0].rationale; edited guidance int.policy-processes activities[1].rationale; edited guidance src.signal-phrases activities[1].rationale

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

### R5-14 (major, coverage)

Topics: idn.standards-legitimacy, cit.citation-functions, inf.source-evaluation, acu.critical-eap

**Finding.** Decolonising curricula, racialisation and the politics of whose knowledge counts are missing. The dataset has 0 mentions of race, racialisation, raciolinguistics, colonial or decolonising, and none of epistemic injustice or the Global South. Canagarajah's centre/periphery argument appears only in PGR-oriented topics. No topic in CIT or INF asks learners to consider whose scholarship is cited, indexed or treated as 'authoritative', even though source evaluation teaches them to favour indexed, high-impact journals. idn.standards-legitimacy discusses native-speakerism without saying that judgements of 'nativeness' and 'accent' are often racialised.

**Recommendation.** Name racialised language judgements in idn.standards-legitimacy, proposing Flores and Rosa (2015) under proposedReferences: Flores, N., & Rosa, J. (2015). Undoing appropriateness: Raciolinguistic ideologies and language diversity in education. Harvard Educational Review, 85(2), 149–171. Verify before use. Add a citation-politics topic linked to inf.source-evaluation.

Already applied: 1 change(s) — edited topics idn.standards-legitimacy description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"cit.citation-politics","domainCode":"CIT","name":"Whose knowledge is cited","type":"CONCEPTUAL","scope":"Recognise that citation and indexing practices shape whose knowledge becomes visible, including the dominance of English-language, Global North and highly indexed sources. Evaluate the range of perspectives in a reference list, and include relevant scholarship from other regions, languages and communities while still meeting the assignment's quality criteria."}

### R6-02 (major, coverage)

Topics: dhl.critical-appraisal, inf.systematic-searching, pub.publishing-process, pub.journal-selection

**Finding.** Two cross-disciplinary PGR genres are absent or confined to one ESAP domain. (1) Systematic and scoping review writing appears only inside dhl.critical-appraisal, which bundles single-study appraisal for UG health students with PRISMA reporting for PGR; its own review note concedes these are 'distinct genres at different levels'. Systematic and scoping reviews are standard doctoral outputs in education, social policy, management, software engineering and environmental science, not only health. (2) Open research practices are absent as a writing topic: preprints, preregistration and registered reports, data availability statements, data management plans, ORCID and licences, and funder open-access and rights-retention requirements. These now generate mandatory text in submissions and grant applications. inf.open-access covers access from the reader's side only.

**Recommendation.** Add res.systematic-review-writing (protocol registration, PRISMA 2020 or PRISMA-ScR reporting, risk-of-bias and certainty language, narrative synthesis). Narrow dhl.critical-appraisal to appraisal of single studies, with the new topic as its PGR successor. Add pub.open-research as a PUB topic.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.systematic-review-writing","domainCode":"RES","name":"Writing systematic and scoping reviews","type":"GENRE","scope":"Write the protocol and report of a systematic, scoping or other structured review in any discipline. This covers registering or publishing a protocol, reporting search and selection transparently with the relevant reporting guideline (for example PRISMA 2020 or PRISMA-ScR) and a flow diagram, describing risk-of-bias or quality appraisal, writing narrative or quantitative synthesis, and calibrating conclusions to the certainty of the evidence."}
- {"kind":"add-topic","id":"pub.open-research","domainCode":"PUB","name":"Open research practices and statements","type":"PROCEDURAL","scope":"Understand and write the texts that open-research practices require: preprints and their versioning, preregistration and registered reports, data and code availability statements, data management plans, licence choices, ORCID and persistent identifiers, and statements that meet funder and institutional open-access and rights-retention requirements. Disciplinary norms and policies vary and change."}
- {"kind":"other","detail":"Retitle dhl.critical-appraisal 'Critical appraisal of health research' and remove the PRISMA-reporting mastery evidence (masteryEvidence[4]) and the second guidance activity, moving them to res.systematic-review-writing. Add a soft edge dhl.critical-appraisal -> res.systematic-review-writing."}

### R6-05 (major, assessment)

Topics: tst.test-formats, tst.integrated-test-tasks

**Finding.** Test-format descriptions are anchored in a dated model. tst.test-formats lists 'independent and integrated writing' as a generic format. tst.integrated-test-tasks takes 'a talk that challenges a reading' as its prototype, which is the legacy TOEFL iBT integrated writing task. TOEFL iBT replaced its independent essay in 2023, and ETS announced a further redesign from January 2026 with new task types, adaptive sections and a CEFR-aligned score scale (verify the current task list with ETS). Other tests have added integrated tasks (for example, group-discussion summary tasks). So whether 'integrated tasks' exist, and what they look like, depends on which test the learner takes and when. The topics avoid naming tests, which is right, but their generic examples now describe one test's former format. Computer-adaptive item selection, now common, is not mentioned.

**Recommendation.** Reword the examples generically. Add adaptive delivery. In the context notes, tell teachers to check the test owner's current task list before teaching integrated-task strategies. Keep the topic, since some major tests, in-house university tests and pre-sessional tasks still use reading- or listening-into-writing.

Already applied: 3 change(s) — edited topics tst.test-formats description; edited topics tst.integrated-test-tasks description; edited guidance tst.integrated-test-tasks contextNotes

### R6-13 (minor, framework-mapping)

Topics: cit.author-date-in-text, src.integrating-quotations, crt.description-analysis-evaluation

**Finding.** 'Reports and essays' is the default CEFR link: 90 of 1018 links (9%), nearly twice the next scale. It is attached to topics where a more specific scale exists or where the link is decorative, for example cit.author-date-in-text (related), src.integrating-quotations (its only link, although 'Processing text' or 'Relaying specific information' fit source integration better) and crt.description-analysis-evaluation. Meanwhile, the more specific scales 'Reading correspondence', 'Overall oral interaction' and 'Overall written interaction' have no links. Reading decision letters, reviewer reports and supervisor comments (pub.publishing-process, pub.responding-reviewers, res.supervision) is exactly the kind of activity 'Reading correspondence' covers.

**Recommendation.** Remove decorative 'Reports and essays' links. Prefer the mediation scales for source handling. Consider rec.read.correspondence for topics about interpreting decision letters and written feedback, in place of a weaker existing link.

Already applied: 2 change(s) — cit.author-date-in-text - framework cefr-cv:prod.writ.reports-essays; src.integrating-quotations + framework cefr-cv:med.text.relaying-information

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"For pub.publishing-process, consider replacing acrl:authority (component) with cefr-cv:rec.read.correspondence [C1] (component), since ME[2] and the prompt centre on interpreting a decision letter."}

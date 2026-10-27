# Revision packet: 09-citation-integrity-ai

Domains: CIT (Citation & Referencing), GAI (Generative AI Literacy), INT (Academic Integrity)

## New topics to author

- `cit.citation-politics` | CONCEPTUAL | **Whose knowledge is cited** — Recognising that citation and indexing practices shape whose knowledge becomes visible, including the dominance of English-language, Global North and highly indexed sources, and making deliberate, justified citation choices. (from R5-14)

## Merges affecting your domains

- `gai.prompting-for-learning` was merged into `gai.language-support` (R1-17). The absorbed record is in authoring/revision/absorbed/gai.prompting-for-learning.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `src.source-functions` was merged into `cit.citation-functions` (R1-15). The absorbed record is in authoring/revision/absorbed/src.source-functions.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-01 (critical, stage-level)

Topics: sen.capitalisation, acu.university-structures, lrn.wellbeing, int.integrity-values, prn.intelligibility

**Finding.** AUTHORING.md §2 tells authors to list every stage at which a topic is 'taught or revisited', so tags pile up rather than discriminate. 524 of 557 topics (94%) are tagged in-sessional-ug, 477 (86%) pre-sessional, 467 (84%) in-sessional-pgt and 372 (67%) foundation. 369 topics (66%) carry four or five stages, 107 carry all five, and only 40 carry one or two. A UG in-sessional team typically has tens of contact hours with a cohort, not hundreds. A tag that covers 94% of the taxonomy tells that team almost nothing about what to teach, and the same applies to the 84% PGT figure. The tags record where a topic might plausibly appear, not where it belongs. That is the main reason the stage pathways cannot be used (R1-02).

**Recommendation.** Replace the flat stages[] array with a per-stage role such as stageRoles: {foundation:'core', 'pre-sessional':'develop', 'in-sessional-ug':'revisit', ...}. 'Core' should mean explicitly taught and normally assessed at that stage. Cap core topics per stage (indicatively 80–120) and audit every domain against the cap. Add a validation rule: a stage cannot be 'core' for a topic whose cefrEnd is below that stage's typical entry band (UG B2, PGT B2+, PGR C1). Report counts and pathways on core topics only, with develop/revisit topics shown as optional.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Schema change: replace topics[].stages (string[]) with topics[].stageRoles (object keyed by stage; values 'core' | 'develop' | 'revisit'). Keep a derived stages[] for backward compatibility."}
- {"kind":"other","detail":"Validation (scripts/check-strand.mjs): reject stageRoles[stage]==='core' where cefrEnd < entry band for that stage (in-sessional-ug B2, in-sessional-pgt B2+, pgr C1). Warn when a stage has more than 120 core topics."}
- {"kind":"other","detail":"Re-run a stage audit domain by domain with practitioners. Start with SEN, LRN, ACU, PRG, DIG and GAI, where nearly every topic is tagged FPUT or FPUTR."}

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

### R1-06 (major, stage-level)

Topics: acu.university-structures, acu.roles-address, acu.academic-expectations, lrn.support-services, lrn.time-management, lrn.goal-setting, int.integrity-values, prg.messaging-channels, dig.word-processing, sem.preparation, prs.rehearsal-timing, arg.argument-concept

**Finding.** 261 topics are tagged pgr. 43 of them start at B1 and 29 are expected to be controlled by B2+ (cefrEnd ≤ B2+), which is below the C1 baseline that AUTHORING.md itself gives for doctoral researchers. Examples are acu.university-structures (B1–B2), acu.roles-address (B1–B2), lrn.time-management (B1–B2), lrn.support-services (B1–B2), int.integrity-values (B1–B2+) and arg.argument-concept (B1–B2+). A doctoral writing programme that followed the pathway would spend time on how universities are organised and what an argument is, while R1-05 shows its own core genres are missing. The PGR pathway's ordering also starts with B2-level vocabulary and grammar, not with doctoral genres.

**Recommendation.** Remove pgr from orientation and B1-entry topics where a PGR-specific topic already exists (int.research-integrity, res.writing-productivity, res.supervision, acu.hidden-curriculum). Keep pgr only where the PGR treatment is materially different, and say so in contextNotes.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["acu.university-structures","acu.roles-address","acu.academic-expectations","lrn.support-services","lrn.time-management","lrn.goal-setting","int.integrity-values","prg.messaging-channels","dig.word-processing","sem.preparation","prs.rehearsal-timing","arg.argument-concept"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt"]}

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

### R3-05 (major, direction)

Topics: dig.word-processing, grp.report-conventions, sen.capitalisation, cit.referencing-systems, src.reporting-verbs, rds.writer-stance

**Finding.** Edges that run backwards or are not dependencies: dig.word-processing (B1, a basic tool skill) <- grp.report-conventions (347 transitive pairs; motivation for using styles is not a prerequisite, and it places word processing, accessibility, reference managers and digital collaboration downstream of the essay and argument chain). sen.capitalisation (B1) <- cit.referencing-systems: capitalisation is general and is itself a soft prerequisite of cit.reference-list. src.reporting-verbs (B1+, foundation) <- rds.writer-stance (B2, not foundation): stance-sensitive verb choice is already modelled by sta.evaluating-others-language, which depends on reporting verbs. This edge lies on the 20-topic longest chain.

**Recommendation.** Remove all three. Reteach targets on sen.capitalisation and src.reporting-verbs are cleared to null.

Already applied: 3 change(s) — removed dig.word-processing <- grp.report-conventions; removed sen.capitalisation <- cit.referencing-systems; removed src.reporting-verbs <- rds.writer-stance

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

### R4-06 (major, overclaim)

Topics: cit.author-date-in-text, reg.vague-overgeneralised, res.research-questions, crt.problem-solving

**Finding.** Several summaries present untested teaching recommendations as established ('works best', 'most likely to improve') right next to descriptive or theoretical citations, so readers will take the citation as the evidence. Examples: 'Instruction works best when formatting is linked to the integral/non-integral distinction (Swales, 1990; Thompson & Tribble, 2001) rather than taught as an isolated rule list'; 'Teaching works best by asking the reader's questions' (after citing Hinkel's and Aull & Lancaster's descriptive corpus work); 'Teaching works best through repeated revision of the learner's own questions'; 'are the two moves most likely to improve student work'. None of the cited works tests the instruction.

**Recommendation.** Mark these as practitioner proposals.

Already applied: 4 change(s) — edited guidance cit.author-date-in-text summary; edited guidance reg.vague-overgeneralised summary; edited guidance res.research-questions summary; edited guidance crt.problem-solving summary

### R4-07 (major, overclaim)

Topics: inf.open-access, int.policy-processes, src.signal-phrases

**Finding.** Activity rationales state untested learning effects as fact under a framework or handbook citation: 'Practising the routes reduces reliance on unauthorised sources' (ACRL 2016); 'Rehearsing the genre before it is needed reduces anxiety and supports appropriate formality' (Bretag 2016); 'Learning frames as patterns reduces the blending errors common at this stage' (Pecorari 2013). None of these works tested the activity or the effect.

**Recommendation.** Present the effects as intended outcomes and say what the citation does support.

Already applied: 3 change(s) — edited guidance inf.open-access activities[0].rationale; edited guidance int.policy-processes activities[1].rationale; edited guidance src.signal-phrases activities[1].rationale

### R4-09 (minor, partial)

Topics: gai.detection-limits

**Finding.** The Liang et al. (2023) comparison group is misdescribed as 'essays by US students'. They were US eighth-grade essays, not university writing, and that limits what the contrast shows for EAP students.

**Recommendation.** Name the comparison group.

Already applied: 1 change(s) — edited guidance gai.detection-limits summary

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

### R5-03 (critical, integrity-ai)

Topics: gai.detection-limits, wpr.l1-in-composing, dig.machine-translation, edt.proofreading-ethics

**Finding.** The integrity and AI content rightly says detectors are biased against writers of English as an additional language. It then makes those same writers responsible for proving their innocence ('learners protect themselves by keeping evidence of their writing process'). In several places it also teaches teachers a surveillance heuristic that hits multilingual writers hardest: a difference between in-class and submitted writing is listed as the evidence that reveals MT or proofreading misuse. See wpr.l1-in-composing[1] ('a marked gap between in-class and take-home writing'), dig.machine-translation[2] ('Marked differences between in-class and submitted writing; rhetorical organisation that does not match the English genre') and edt.proofreading-ethics[0] ('Marked differences in style between supervised and submitted writing'). Timed in-class L2 writing is normally weaker than drafted work, so this heuristic will produce false suspicion. The dig.machine-translation wording also brings back a contrastive-rhetoric assumption, that non-English organisation signals translation.

**Recommendation.** Put the burden of proof on the institution. Keep process records as an ordinary good habit, not a defence obligation. Rewrite each revealedBy so that style difference is never presented as evidence on its own.

Already applied: 5 change(s) — edited topics gai.detection-limits description; edited guidance gai.detection-limits summary; edited guidance wpr.l1-in-composing difficulties[1].revealedBy; edited guidance dig.machine-translation difficulties[2].revealedBy; edited guidance edt.proofreading-ethics difficulties[0].revealedBy

### R5-04 (major, integrity-ai)

Topics: int.policy-processes, int.pressure-risks

**Finding.** The Academic Integrity domain teaches learners to find and comply with policy but never names their procedural rights beyond 'support, representation and appeal'. It has nothing on seeing the evidence, responding in a usable language or format, or having software indicators weighed by people. The learner-facing summary is framed entirely around avoiding misconduct. For multilingual students, who are the main targets of similarity and detector false positives, this omission matters. The domain also lists 'low confidence in English' and 'visa-related pressure' as risk conditions (int.pressure-risks) without matching attention to institutional conditions.

**Recommendation.** Add procedural rights to int.policy-processes. Add rights to the INT learnerSummary. In int.pressure-risks, place risk conditions alongside institutional responsibilities, such as clear briefs, workable deadlines and accessible support.

Already applied: 2 change(s) — edited topics int.policy-processes description; edited domains INT learnerSummary

### R5-05 (major, integrity-ai)

Topics: gai.authorship-voice

**Finding.** gai.authorship-voice presents a contested question as settled, and it reassures learners in a way that may be untrue. DIFF[0] response: 'Explain that assessed writing evidences language and reasoning as well as ideas'. That is true of language-focused tasks but disputed for content assessment. The equity argument is absent: AI language polishing does for multilingual writers what proofreaders and literacy brokers (named elsewhere in the dataset) and Grammarly-style tools have long done for others. DIFF[1] response: 'show that markers assess reasoning and clarity, not native-like polish'. Teachers cannot honestly guarantee this, since accent and non-standard-English bias in evaluation is precisely what idn.standards-legitimacy and pub.multilingual-scholars document.

**Recommendation.** Present AI language assistance as a contested authorship and equity question, tie the line to the task's purpose and policy, and replace the reassurance with an honest account.

Already applied: 3 change(s) — edited guidance gai.authorship-voice difficulties[0].response; edited guidance gai.authorship-voice difficulties[1].response; edited topics gai.authorship-voice description

### R5-14 (major, coverage)

Topics: idn.standards-legitimacy, cit.citation-functions, inf.source-evaluation, acu.critical-eap

**Finding.** Decolonising curricula, racialisation and the politics of whose knowledge counts are missing. The dataset has 0 mentions of race, racialisation, raciolinguistics, colonial or decolonising, and none of epistemic injustice or the Global South. Canagarajah's centre/periphery argument appears only in PGR-oriented topics. No topic in CIT or INF asks learners to consider whose scholarship is cited, indexed or treated as 'authoritative', even though source evaluation teaches them to favour indexed, high-impact journals. idn.standards-legitimacy discusses native-speakerism without saying that judgements of 'nativeness' and 'accent' are often racialised.

**Recommendation.** Name racialised language judgements in idn.standards-legitimacy, proposing Flores and Rosa (2015) under proposedReferences: Flores, N., & Rosa, J. (2015). Undoing appropriateness: Raciolinguistic ideologies and language diversity in education. Harvard Educational Review, 85(2), 149–171. Verify before use. Add a citation-politics topic linked to inf.source-evaluation.

Already applied: 1 change(s) — edited topics idn.standards-legitimacy description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"cit.citation-politics","domainCode":"CIT","name":"Whose knowledge is cited","type":"CONCEPTUAL","scope":"Recognise that citation and indexing practices shape whose knowledge becomes visible, including the dominance of English-language, Global North and highly indexed sources. Evaluate the range of perspectives in a reference list, and include relevant scholarship from other regions, languages and communities while still meeting the assignment's quality criteria."}

### R5-18 (minor, normativity)

Topics: gai.detection-limits, lis.accent-variation

**Finding.** Topic-level text, as distinct from reports of studies that used the terms, keeps the native/non-native binary that IDN critiques: gai.detection-limits description ('misclassify writing by non-native English writers') and masteryEvidence[1] ('misclassified non-native English writing'), and lis.accent-variation masteryEvidence[3] ('a regional or non-native accent'). The GAI domain summary already uses 'writers using English as an additional language'. The topics should follow it.

**Recommendation.** Use 'users of English as an additional language' in Claude-authored text, and keep 'non-native' only when reporting a study's own categories.

Already applied: 3 change(s) — edited topics gai.detection-limits description; edited topics gai.detection-limits masteryEvidence[1]; edited topics lis.accent-variation masteryEvidence[3]

### R6-01 (major, coverage)

Topics: res.research-proposal, pub.viva, res.thesis-macrostructure, int.recycling-own-work

**Finding.** The doctoral trajectory has gaps at its assessed milestones. Nothing covers (a) the confirmation, upgrade or annual progression review (a written report plus a panel conversation, often the first formal assessment of a PGR's writing and oral defence of a design); (b) what happens after the viva: reading examiners' reports, producing a corrections table or response document, negotiating corrections with the internal examiner, and language-related corrections (many regulations judge the thesis's 'presentation'); (c) turning thesis chapters into articles and vice versa (re-scoping, compressing, re-framing for a journal readership, text-recycling and copyright or permission rules when published papers go into a thesis). Experienced PGR provision treats all three as core. res.research-proposal mentions confirmation reports only in passing, and pub.viva stops at the oral.

**Recommendation.** Add three PGR topics, linked as follows: res.progression-review after res.research-proposal; pub.thesis-corrections after pub.viva and pub.responding-reviewers; pub.thesis-to-article after res.thesis-macrostructure, pub.journal-selection and int.recycling-own-work.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.progression-review","domainCode":"RES","name":"Confirmation, upgrade and progression reviews","type":"GENRE","scope":"Write the progression or confirmation report expected at doctoral milestones (progress to date, revised questions and design, preliminary findings, a plan and timeline, and identified risks and training needs) and discuss it with a review panel. Reviewers judge feasibility, coherence and the candidate's ability to defend choices orally. Local regulations, outcomes and timings vary widely."}
- {"kind":"add-topic","id":"pub.thesis-corrections","domainCode":"PUB","name":"Examiners' reports and thesis corrections","type":"GENRE","scope":"Interpret examiners' reports and viva outcomes (for example minor or major corrections, or revise and resubmit), turn them into a corrections plan, and produce the response document or corrections table that maps each required change to its location. Recognise and fix language-related corrections. Communicate with the examiner who approves the corrections, and meet the regulatory deadlines."}
- {"kind":"add-topic","id":"pub.thesis-to-article","domainCode":"PUB","name":"From thesis to articles","type":"PROCEDURAL","scope":"Turn thesis chapters into journal articles, or integrate published papers into a thesis. This means re-scoping the argument for a journal's readership, compressing literature and methods, rewriting introductions and contributions for a stand-alone paper, and following text-recycling, co-authorship-statement and copyright or permission rules for previously published material."}

### R6-13 (minor, framework-mapping)

Topics: cit.author-date-in-text, src.integrating-quotations, crt.description-analysis-evaluation

**Finding.** 'Reports and essays' is the default CEFR link: 90 of 1018 links (9%), nearly twice the next scale. It is attached to topics where a more specific scale exists or where the link is decorative, for example cit.author-date-in-text (related), src.integrating-quotations (its only link, although 'Processing text' or 'Relaying specific information' fit source integration better) and crt.description-analysis-evaluation. Meanwhile, the more specific scales 'Reading correspondence', 'Overall oral interaction' and 'Overall written interaction' have no links. Reading decision letters, reviewer reports and supervisor comments (pub.publishing-process, pub.responding-reviewers, res.supervision) is exactly the kind of activity 'Reading correspondence' covers.

**Recommendation.** Remove decorative 'Reports and essays' links. Prefer the mediation scales for source handling. Consider rec.read.correspondence for topics about interpreting decision letters and written feedback, in place of a weaker existing link.

Already applied: 2 change(s) — cit.author-date-in-text - framework cefr-cv:prod.writ.reports-essays; src.integrating-quotations + framework cefr-cv:med.text.relaying-information

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"For pub.publishing-process, consider replacing acrl:authority (component) with cefr-cv:rec.read.correspondence [C1] (component), since ME[2] and the prompt centre on interpreting a decision letter."}

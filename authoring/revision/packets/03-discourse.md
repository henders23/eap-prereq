# Revision packet: 03-discourse

Domains: COH (Cohesion & Coherence), FUN (Rhetorical Functions), STA (Stance, Metadiscourse & Evaluation)

## New topics to author

None.


## Merges affecting your domains

- `coh.connector-precision` was merged into `coh.linking-adverbials` (R1-15). The absorbed record is in authoring/revision/absorbed/coh.connector-precision.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `coh.spoken-signposting` was merged into `prs.signposting` (R1-18). The absorbed record is in authoring/revision/absorbed/coh.spoken-signposting.json. The survivor belongs to another group; no action needed except updating any references in your text.
- `sta.generalisation-qualification` was merged into `sta.hedging` (R1-15). The absorbed record is in authoring/revision/absorbed/sta.generalisation-qualification.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-09 (major, stage-level)

Topics: ess.headings, sem.debate, grm.articles, sta.hedging

**Finding.** 505 of 557 topics (91%) span two or more steps of a seven-step scale, and 39 span four. 335 (60%) end at C1, and 361 (65%) start at B1 or B1+. With ranges this uniform, cefrStart/cefrEnd cannot tell a 12-week B1+ cohort's syllabus from a 6-week B2+ cohort's. Some ranges also contradict the stage tags: ess.headings starts at B2 although grp.report-conventions (B1+) and foundation report writing need headings, and sem.debate starts at B2 although it is tagged foundation, where debate is a staple B1+ activity.

**Recommendation.** Add a single 'coreBand' per topic: the band where explicit teaching pays off most, used for course filtering. Keep cefrStart/cefrEnd as the outer envelope. Calibrate a sample against CEFR Companion Volume scales and the BALEAP Can Do Framework with practitioner panels, and correct the obvious inconsistencies now.

Already applied: 2 change(s) — ess.headings CEFR -> B1+–B2+; sem.debate CEFR -> B1+–C1

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].coreBand (single CEFR step) and use it, not the full range, for pathway filtering."}

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

### R1-18 (major, overlap)

Topics: coh.spoken-signposting, prs.signposting, lis.lecture-discourse-markers, lis.relevance-markers

**Finding.** coh.spoken-signposting (use and recognise macro- and micro-markers in lectures, presentations and seminars) overlaps prs.signposting (production in presentations) and lis.lecture-discourse-markers (reception). It is tagged for all five stages, so one resource appears in every pathway three times over.

**Recommendation.** Absorb coh.spoken-signposting into prs.signposting for production. Keep lis.lecture-discourse-markers for reception, and add a hard edge from prs.signposting to it.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"prs.signposting","absorb":["coh.spoken-signposting"]}

### R1-27 (minor, overlap)

Topics: sta.engagement-markers, sta.dialogic-positioning

**Finding.** sta.engagement-markers ('Reader engagement', Hyland's model) and sta.dialogic-positioning ('Dialogic positioning (engagement)', Martin and White's appraisal model) both carry the label 'engagement' for different constructs. Teachers will conflate them.

**Recommendation.** Rename sta.dialogic-positioning so it does not use 'engagement', and add one sentence in each description distinguishing the two frameworks.

Already applied: 1 change(s) — edited topics sta.dialogic-positioning undefined

### R2-03 (major, accuracy)

Topics: sta.dialogic-positioning

**Finding.** The record lists the contracting options in Martin and White's engagement system as 'denying, countering, concurring, pronouncing' and leaves out endorse. Endorse is the proclaim option realised by 'X shows/demonstrates/proves that', and it is the main contracting resource in research writing. The diagnostic depends on it ('Research has shown that X' … 'the second endorses'), but ME[0] does not include it and ME[2] gives only the two expansive attribution choices (acknowledge, distance). As written, learners cannot use the topic's own categories to classify the most frequent contracting attribution in literature reviews.

**Recommendation.** Add endorse to the contracting set and rewrite ME[2] as a three-way choice: endorse (contracting) versus acknowledge or distance (expanding).

Already applied: 3 change(s) — edited topics sta.dialogic-positioning description; edited topics sta.dialogic-positioning masteryEvidence[0]; edited topics sta.dialogic-positioning masteryEvidence[2]

### R2-10 (major, level)

Topics: prn.prominence, coh.given-new

**Finding.** dependencies.json makes coh.given-new (B2–C1, written information structure) a hard prerequisite of prn.prominence (B1+–C1, taught from foundation). This is the only hard edge into PRN/LIS where the prerequisite starts higher than the dependent. It is also wrong linguistically: de-accenting given information and accenting new or contrastive information is learnt through spoken minimal contexts (the question–answer pairs in the record's own diagnostic) and needs no prior written-discourse instruction. Pathway generation will hold back a foundation-level pronunciation topic until B2.

**Recommendation.** Make the edge soft, or reverse it as a soft edge (prosodic prominence → coh.given-new), since the spoken contrast is a useful way into the written principle.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"dependencies.json: change {topicId: 'prn.prominence', prerequisiteId: 'coh.given-new'} strength 'hard' → 'soft', and reword reason to 'Prominence work makes the given–new distinction audible; the written-discourse treatment can follow or run in parallel.'"}

### R2-13 (minor, attribution)

Topics: grm.anticipatory-it, grm.linking-adverbial-placement, grm.reference-pronouns, sen.sentence-boundaries, voc.abstract-shell-nouns, voc.technical-terminology, voc.multiword-verbs-register, voc.receptive-to-productive, voc.word-grammar-patterns, phr.academic-collocations, phr.phrasebank-use, reg.non-specialist-audiences, coh.linking-adverbials, coh.signalling-nouns, sta.hedging, sta.engagement-markers, sta.code-glosses, fun.exemplifying, lis.word-segmentation, lis.accent-variation, lis.multimodal-lectures, lis.recorded-lectures, lis.metacognitive-listening, prn.intelligibility, prn.word-stress, prn.thought-groups, prn.intonation, prn.segmental-priorities, prn.fluency, prn.repair

**Finding.** About 30 guidance records in scope still describe references as 'proposed' or 'not yet in the bibliography' (for example hylandmilton1997, rubin1992, hewings2002, grangertyson1996, graycortes2011, murphykandil2004, field2003segmentation, fahnestock1986), but references.json marks every one as present and most as web-verified. Two user-facing summaries print the hedge in running text: grm.anticipatory-it '(Hewings & Hewings, 2002, proposed)' and grm.linking-adverbial-placement '(Granger, 1998; Granger & Tyson, 1996, proposed)'. Two review notes ask authors to 'check' whether Chang and Swales (1999) examined unattended 'this' and sentence-initial conjunctions. They did: both are among the ten informal features in that study.

**Recommendation.** Remove 'proposed' from the summaries and the stale review notes, and resolve the two Chang and Swales notes.

Already applied: 4 change(s) — edited guidance grm.anticipatory-it summary; edited guidance grm.linking-adverbial-placement summary; edited guidance grm.reference-pronouns reviewNotes[0]; edited guidance sen.sentence-boundaries reviewNotes[0]

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Remove the 'X is a proposed reference' sentences from reviewNotes in the topics listed in topicIds wherever references.json records the key as present (web-verified or curator-checked)."}

### R2-14 (minor, attribution)

Topics: coh.linking-adverbials

**Finding.** The description says 'Learner corpora show both overuse of a small set of sentence-initial connectors and mismatches between connector and relation'. Read as a general claim, this goes further than the sources: Granger and Tyson (1996) found no overall overuse among French learners (overuse of some items, underuse of others), and Altenberg and Tapper (1998) found Swedish learners underused connectors overall. The guidance summary states this correctly, but the description does not.

**Recommendation.** Bring the description in line with the summary's hedged wording.

Already applied: 1 change(s) — edited topics coh.linking-adverbials description

### R2-23 (minor, accuracy)

Topics: voc.multiword-verbs-register, fun.classifying

**Finding.** voc.multiword-verbs-register DIF[0] gives 'the sample was comprised of' as a 'contorted replacement' for a phrasal verb. 'Comprised of' is itself a multi-word construction and is a usage-panel controversy, not a register problem. fun.classifying DIF[1] handles comprise differently, accepting 'be composed of' and rejecting 'comprises of'. The two records give inconsistent advice.

**Recommendation.** Use an unambiguous over-formalisation example and treat 'is comprised of' consistently: contested, avoided by some style guides.

Already applied: 1 change(s) — edited guidance voc.multiword-verbs-register difficulties[0].revealedBy

### R2-29 (minor, l1-claim)

Topics: sta.spoken-stance

**Finding.** DIF[2] (L1-transfer) says missing a lecturer's irony comes from first languages that 'signal stance mainly through particles or word choice rather than intonation'. Recognising irony from prosody is hard for most L2 listeners and depends on cultural and situational familiarity. An L1 contribution is plausible, for example where attitudinal meanings are carried by sentence-final particles, but it is not the main mechanism.

**Recommendation.** Reclassify as developmental and keep the L1 point as a secondary, hedged factor.

Already applied: 2 change(s) — edited guidance sta.spoken-stance difficulties[2].kind; edited guidance sta.spoken-stance difficulties[2].response

### R2-34 (minor, accuracy)

Topics: sta.generalisation-qualification

**Finding.** ME[1] states the rule as 'most + plural noun without of'. Read literally, this marks the standard 'most of the students' as wrong. The rule depends on the determiner.

**Recommendation.** State both patterns.

Already applied: 1 change(s) — edited topics sta.generalisation-qualification masteryEvidence[1]

### R2-35 (minor, accuracy)

Topics: sta.hedging

**Finding.** DIF[2] contrasts 'dynamic can' with epistemic modals. 'Can' in 'This can be problematic' expresses general (root) possibility, which is normal in academic prose. The learner error is using positive-declarative 'can' for an inference about a specific case ('This can be the reason for the decline'). The response as written could lead teachers to discourage acceptable 'can'.

**Recommendation.** Specify the context in which 'can' is the error.

Already applied: 1 change(s) — edited guidance sta.hedging difficulties[2].response

### R2-37 (minor, accuracy)

Topics: sta.self-mention

**Finding.** Tang and John's (1999) typology has six roles, starting with 'representative' (generic or inclusive 'we/I'). The description and ME[0] list only five and drop the role that ME[3] (inclusive 'we') is about.

**Recommendation.** Restore the full typology.

Already applied: 2 change(s) — edited topics sta.self-mention description; edited topics sta.self-mention masteryEvidence[0]

### R2-38 (minor, accuracy)

Topics: sta.engagement-markers, sta.dialogic-positioning

**Finding.** The dataset uses 'engagement' for two different constructs: Hyland's engagement (explicit reader-oriented features such as directives and questions) and Martin and White's engagement (the dialogic positioning of the text towards other voices). Neither record warns users about this, and the two theories are routinely confused in teacher materials.

**Recommendation.** Add a terminological note.

Already applied: 1 change(s) — edited guidance sta.engagement-markers summary

### R2-39 (minor, attribution)

Topics: sta.averral-attribution

**Finding.** The averral/attribution distinction is credited to Hunston, but it comes from Sinclair (1986, 1988) and was developed by Tadros and then Hunston.

**Recommendation.** Credit the origin.

Already applied: 1 change(s) — edited guidance sta.averral-attribution summary

### R3-02 (critical, hub)

Topics: rds.main-ideas, rdp.parsing-complex-sentences, rds.fact-opinion-claim, sta.hedging, grm.anticipatory-it, grm.nominalisation

**Finding.** A soft-edge "reading spine" links B2 grammar to almost every foundation literacy topic: voc.high-frequency-base > phr.collocation-awareness > grm.prepositions > grm.np-postmodification > grm.nominalisation (B2) =H=> rdp.parsing-complex-sentences > rds.main-ideas (B1) > rds.fact-opinion-claim > arg.argument-concept > ess.essay-structure / src.* / syn.* / res.*. Removing one edge, rds.main-ideas <- rdp.parsing-complex-sentences, removes 988 transitive pairs, the largest effect of any edge. Under this spine, B1 "identifying main ideas" sits at depth 6, "what counts as an argument" at depth 8 and "essay structure" at depth 9, all behind B2 nominalisation. Two other high-impact edges have the same problem: sta.hedging <- grm.anticipatory-it (809 pairs; it-frame hedges are already covered by phr.bundles-stance, which hard-depends on anticipatory it) and rds.fact-opinion-claim <- sta.hedging (628 pairs). The last one gates a B1 receptive skill behind a B1+–C2 productive one; the natural order is the reverse, and sta.claim-calibration already reaches fact-opinion-claim through crt.evidence-types. The hard edge rdp.parsing-complex-sentences <- grm.nominalisation (B2, not taught at foundation) gates a foundation reading skill. It is also one of the 23 validator warnings.

**Recommendation.** Remove the three spine edges and soften parsing <- nominalisation. Unpacking nominalisations remains part of parsing, but the core skill of finding the main clause is supplied by the new clause-combining edges in R3-10. The two reteach targets that used removed edges (rds.main-ideas "Copies a long sentence…", rds.fact-opinion-claim "Ignores hedges…") are cleared to null by the tool; mention parsing and hedging in their response text instead.

Already applied: 4 change(s) — removed rds.main-ideas <- rdp.parsing-complex-sentences; removed rds.fact-opinion-claim <- sta.hedging; removed sta.hedging <- grm.anticipatory-it; set rdp.parsing-complex-sentences <- grm.nominalisation to soft

### R3-06 (major, level-stage)

Topics: par.topic-sentences, voc.abstract-shell-nouns, par.concluding-sentences, coh.signalling-nouns, prs.openings, sta.engagement-markers, crt.applying-theory, rdc.theoretical-texts, wpr.generating-ideas, crt.questioning

**Finding.** Soft edges whose prerequisite is two or more CEFR steps or stages above the dependent turn enrichment into gating and inflate depth: par.topic-sentences (B1, FPU) <- voc.abstract-shell-nouns (B2, not foundation); par.concluding-sentences (B1, FP) <- coh.signalling-nouns (B2); prs.openings (B1+) <- sta.engagement-markers (B2+, UG/PGT/PGR only); crt.applying-theory (B1+, foundation) <- rdc.theoretical-texts (B2+, UG/PGT/PGR only). In addition, wpr.generating-ideas (B1) <- crt.questioning (B1+) puts drafting at depth 9.

**Recommendation.** Remove these five edges. Before removing par.topic-sentences <- voc.abstract-shell-nouns, repoint its reteach (topic sentences too broad or too narrow) to par.paragraph-unit. After all changes, four soft edges with gaps of two or more steps remain and are acceptable as enrichment hints (see R3-17).

Already applied: 6 change(s) — edited guidance par.topic-sentences difficulties[0].reteachPrerequisiteId; removed par.topic-sentences <- voc.abstract-shell-nouns; removed par.concluding-sentences <- coh.signalling-nouns; removed prs.openings <- sta.engagement-markers; removed crt.applying-theory <- rdc.theoretical-texts; removed wpr.generating-ideas <- crt.questioning

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

### R5-01 (critical, stereotype)

Topics: voc.evaluative-lexis, sta.evaluating-others-language, rdc.critical-reading, syn.synthesis-concept, syn.gaps-tensions, cit.citation-functions, inf.source-evaluation, par.integrating-evidence, ess.criticality, ess.thesis-statement, ges.critique, res.literature-review, res.gap-niche, res.supervision, idn.academic-identity, crt.concept, crt.questioning, sem.agreeing-disagreeing, sem.opinions, lis.speaker-stance, pub.peer-review-reports, acu.hidden-curriculum, acu.critical-eap, fbk.seeking-feedback, wpr.task-analysis, exm.oral-exams, lrn.autonomy, crt.epistemic-beliefs

**Finding.** The single most repeated learner difficulty in the dataset is the deferential learner who will not criticise authority: about 28 difficulty records across 25+ topics, many in near-identical ventriloquised words ('Who am I to criticise a published expert?' appears verbatim in voc.evaluative-lexis, rdc.critical-reading and, as 'professor', sta.evaluating-others-language; 'I am only a student' in inf.source-evaluation, res.literature-review and idn.academic-identity). About half are coded prior-schooling. With lrn.autonomy ('The teacher should tell me what to study'), crt.epistemic-beliefs ('Just tell me the right answer') and the memorisation patterns, this rebuilds Holliday's native-speakerist trio (deference, no critical thinking, no autonomy) under the neutral label 'prior schooling'. The repeated disclaimers ('do not attribute this to culture') do not undo the effect. A teacher reading across topics meets the same figure dozens of times, and the label still points to 'elsewhere' schooling. Hesitancy to evaluate published work is well documented among novice first-language English students too, and comes from novice status and the assessment genre.

**Recommendation.** Keep the deference pattern in two or three anchor topics (crt.concept, ess.criticality, res.literature-review). Replace it elsewhere with difficulties specific to the topic. Where it stays, code it affective or conceptual, unless the evidence names an assessment practice, and say that it is common among novice writers of all backgrounds. Add a rule to AUTHORING.md section 4: no single difficulty pattern may recur in more than three records, and prior-schooling must name a schooling or assessment practice, not a disposition.

Already applied: 9 change(s) — edited guidance crt.concept difficulties[1].pattern; edited guidance sta.evaluating-others-language difficulties[0].kind; edited guidance sta.evaluating-others-language difficulties[0].response; edited guidance idn.academic-identity difficulties[2].kind; edited guidance voc.evaluative-lexis difficulties[1].pattern; edited guidance voc.evaluative-lexis difficulties[1].kind; edited guidance voc.evaluative-lexis difficulties[1].revealedBy; edited guidance voc.evaluative-lexis difficulties[1].response; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Consolidate the deference/reluctance-to-critique pattern. Keep it in crt.concept[1], ess.criticality[1] and res.literature-review[2]. Rewrite it as a topic-specific difficulty in syn.synthesis-concept[1], cit.citation-functions[2], inf.source-evaluation[2], rdc.critical-reading[2], syn.gaps-tensions[2], ges.critique[1], crt.questioning[1], res.gap-niche[1] and sem.agreeing-disagreeing[0]. Add to AUTHORING.md section 4: 'No difficulty pattern may recur in substance in more than three records; prior-schooling must name a schooling or assessment practice, not a disposition such as deference.'"}

### R5-09 (major, normativity)

Topics: sen.concision, crt.multiple-perspectives, coh.writer-responsibility, fbk.seeking-feedback, acu.emi-tne

**Finding.** The UK campus is the unmarked default ('UK' appears 40 times). Several difficulties state UK practice as the universal target: 'Explain that UK assignments set maximum limits' (sen.concision[0]), 'in most UK HE genres' (crt.multiple-perspectives[2]), 'Ask how a UK marker might respond' (coh.writer-responsibility AP), 'in many UK institutions, students are expected to use office hours' (fbk.seeking-feedback[0]). The stage vocabulary (pre-sessional, in-sessional) is UK-specific. EMI and TNE, where most English-medium learners now study, get one leaf topic (acu.emi-tne) that unlocks nothing and is never referenced from stageEmphasis.

**Recommendation.** Replace UK-as-target wording with the learner's target context. Add an EMI/TNE note to stageEmphasis or contextNotes for the domains where practice differs most (SEM, FBK, ACU, INT, PRG).

Already applied: 3 change(s) — edited guidance sen.concision difficulties[0].response; edited guidance crt.multiple-perspectives difficulties[2].response; edited topics coh.writer-responsibility assessmentPrompt

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"domains: for SEM, FBK, ACU, INT and PRG, add a sentence to summary noting how practice may differ in EMI and TNE programmes, cross-referencing acu.emi-tne; consider a context dimension (anglophone campus / EMI / TNE / online) alongside stages."}

### R5-11 (major, stereotype)

Topics: coh.writer-responsibility, reg.spoken-vs-written, arg.toulmin

**Finding.** Contrastive-rhetoric stereotypes come back through ventriloquised learner voices and one nationality-specific study, even though idn.intercultural-rhetoric critiques Kaplan well. In coh.writer-responsibility[0], 'If I state my point at the start, the reader will think I am not subtle' is Hinds's reader-responsible (Japanese) writer put into a learner's mouth. In reg.spoken-vs-written[2] the response 'Acknowledge that writing traditions value different qualities… English-medium academic prose for information-dense, plainly organised sentences' implies that other traditions are ornamental. The arg.toulmin summary gives one study as the account of how L2 writers argue: 'Qin and Karabacak's analysis of Chinese EFL university students' argumentative essays… counter-argument and rebuttal elements were relatively infrequent'. That is the only nationality named in ARG, and it attaches a deficit to a national group.

**Recommendation.** Re-voice the difficulties as rationales that novice writers in any language hold. Add limits to the single-nationality study.

Already applied: 3 change(s) — edited guidance coh.writer-responsibility difficulties[0].pattern; edited guidance reg.spoken-vs-written difficulties[2].response; edited guidance arg.toulmin summary

### R5-12 (major, normativity)

Topics: phr.academic-collocations, coh.linking-adverbials, voc.academic-verbs, voc.precision-near-synonyms

**Finding.** The dataset rejects native-speaker norms in IDN, PRN and LIS but brings them back through learner-corpus research. Guidance summaries describe 'overuse' and 'underuse' relative to native student writing as learner shortcomings: 'Durrant and Schmitt's comparison of native and non-native writers suggests learners rely on frequent, general combinations' (phr.academic-collocations); 'Granger and Tyson's comparison of native and non-native student essays, report overuse of some connectors, underuse of others' (coh.linking-adverbials); 'L2 writers tend to rely on a narrow range of general verbs' (voc.academic-verbs). Contrastive interlanguage analysis measures difference from a reference corpus, often of novice native students, not deviation from good writing. The appropriate benchmark is expert disciplinary writing.

**Recommendation.** Reword these summaries so the comparison corpus is named, the result is framed as difference rather than error, and expert writing is the model.

Already applied: 3 change(s) — edited guidance phr.academic-collocations summary; edited guidance coh.linking-adverbials summary; edited guidance voc.academic-verbs summary

### R5-21 (minor, normativity)

Topics: coh.writer-responsibility, idn.intercultural-rhetoric

**Finding.** Hinds's reader/writer responsibility typology is contested (the reviewNote says so), yet it is the title of a B1+ foundation topic, 'Reader and writer responsibility', that sits upstream of 77 topics. The practical skill, making links explicit for a given reader, does not need the cross-cultural typology. The typology belongs in idn.intercultural-rhetoric (B2+, already critical).

**Recommendation.** Rename the topic around the skill and leave the Hinds discussion to idn.intercultural-rhetoric.

Already applied: 1 change(s) — edited topics coh.writer-responsibility name

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"coh.writer-responsibility guidance: move the Hinds/Connor/Kubota discussion from the summary to idn.intercultural-rhetoric and keep this record focused on reader-oriented explicitness; keep the ID as fixed by the skeleton."}

### R6-11 (major, framework-mapping)

Topics: dat.data-commentary, sen.clarity-end-weight, sta.claim-calibration, phr.bundles-research-oriented, phr.spoken-academic-formulas, tst.test-formats

**Finding.** IELTS criterion links (97 in all) are partly decorative and in one case contradict the topic. dat.data-commentary's description says data commentary 'differs from description-only tasks such as IELTS Writing Task 1', yet it links to ielts:wr1.task-achievement. sen.clarity-end-weight is linked to IELTS although it has no foundation or pre-sessional stage. 27 links sit on topics tagged pgr, several at B2–C2 (sta.claim-calibration -> Task 2 Task Response; phr.bundles-research-oriented -> Lexical Resource), where IELTS performance is irrelevant. Coverage is also uneven: the Writing Lexical Resource and Grammatical Range and Accuracy criteria carry 33 links, while their Speaking counterparts carry none, although spoken-formula and spoken-stance topics exist. Because IELTS is the only test framework, the links privilege one test; tst.test-formats links three IELTS components, which implies the topic is IELTS-specific.

**Recommendation.** Adopt a rule: link IELTS criteria only from topics tagged foundation or pre-sessional whose primary use includes test preparation or transition, and never from topics whose content contrasts with the test task. Apply the removals below. Add the Speaking Lexical Resource link where spoken lexis is taught. In the frameworks note, state that IELTS is included as a reference criterion set, not as a preferred test.

Already applied: 5 change(s) — dat.data-commentary - framework ielts:wr1.task-achievement; sen.clarity-end-weight - framework ielts:wr.coherence-cohesion; sta.claim-calibration - framework ielts:wr2.task-response; phr.bundles-research-oriented - framework ielts:wr.lexical-resource; phr.spoken-academic-formulas + framework ielts:sp.lexical-resource

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Audit the remaining 23 IELTS links on pgr-tagged topics against the rule above, and add a sentence to frameworks.json 'note' that IELTS criteria are included as a reference set and that links do not endorse any test."}

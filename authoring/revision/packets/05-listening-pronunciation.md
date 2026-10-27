# Revision packet: 05-listening-pronunciation

Domains: LIS (Lecture & Academic Listening), NTK (Note-taking & Note-making), PRN (Pronunciation & Fluency)

## New topics to author

None.


## Merges affecting your domains

None.


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

### R1-18 (major, overlap)

Topics: coh.spoken-signposting, prs.signposting, lis.lecture-discourse-markers, lis.relevance-markers

**Finding.** coh.spoken-signposting (use and recognise macro- and micro-markers in lectures, presentations and seminars) overlaps prs.signposting (production in presentations) and lis.lecture-discourse-markers (reception). It is tagged for all five stages, so one resource appears in every pathway three times over.

**Recommendation.** Absorb coh.spoken-signposting into prs.signposting for production. Keep lis.lecture-discourse-markers for reception, and add a hard edge from prs.signposting to it.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"prs.signposting","absorb":["coh.spoken-signposting"]}

### R1-38 (minor, structure)

Topics: ntk.notes-from-reading, ntk.functions-of-notes, ntk.reviewing-notes

**Finding.** NTK sits in the Listening strand, but ntk.notes-from-reading and ntk.reviewing-notes are reading and study processes, and NTK unlocks SYN, WPR, EXM and RDC topics.

**Recommendation.** Rename the strand 'Academic Listening & Note-making', or move NTK to Learning & Autonomy. The rename is the lower-cost option.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Rename strand 'Academic Listening' to 'Academic Listening & Note-making'."}

### R2-04 (major, l1-claim)

Topics: lis.relevance-markers

**Finding.** DIF[1] reuses the prominence L1-transfer claim ('Learners whose first language marks focus mainly through word order or particles rather than pitch prominence do not treat heavy stress or slowing as a cue to importance') for a different phenomenon. Emphatic stress, slowing, pausing and repetition are paralinguistic cues to importance found across languages, including languages that mark information focus with particles or word order. The language-specific part of English prosody is the placement of nuclear accent and de-accenting of given information, which prn.prominence already covers. As written, the record attributes to whole language groups an inability to perceive something they use in their own language. The more likely mechanism is attentional: under high decoding load, listeners attend to lexical content.

**Recommendation.** Reclassify the difficulty as developmental and restate the mechanism as attention and processing load. If an L1 claim is kept, limit it to nuclear-accent placement and point to prn.prominence.

Already applied: 2 change(s) — edited guidance lis.relevance-markers difficulties[1].kind; edited guidance lis.relevance-markers difficulties[1].pattern

### R2-06 (major, l1-claim)

Topics: lis.word-segmentation

**Finding.** There are two problems. (1) The description says 'stressed (strong) syllables', but the strong-syllable segmentation finding (Cutler & Carter 1987; Cutler & Norris 1988), on which Field (2003) builds, concerns strong syllables, meaning syllables with full, unreduced vowels. Some strong syllables carry no primary stress, so 'stressed' and 'strong' are not the same. (2) DIF[0] claims that learners whose L1 has 'fixed stress' do not use English strong syllables as onset cues. Listeners whose L1 has fixed initial stress (for example Finnish, Hungarian, Czech) are known to use stress as a word-boundary cue (Vroomen, Tuomainen & de Gelder 1998), so the claim is wrong for an important group. Transfer of L1 segmentation routines (syllable-based in French, mora-based in Japanese; Cutler 2012) is the better-supported mechanism.

**Recommendation.** Correct the terminology and restate the L1 mechanism as transfer of L1 segmentation routines. Add Cutler and Carter (1987) or Cutler (2012) to the bibliography as the primary source.

Already applied: 2 change(s) — edited topics lis.word-segmentation description; edited guidance lis.word-segmentation difficulties[0].pattern

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add cutlercarter1987 (Cutler, A., & Carter, D. M. (1987). The predominance of strong initial syllables in the English vocabulary. Computer Speech and Language, 2, 133–142) or Cutler (2012), Native Listening (MIT Press), to references.json and cite it in lis.word-segmentation guidance."}

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

### R2-28 (minor, l1-claim)

Topics: prn.intonation

**Finding.** DIF[0] attributes 'relatively flat English intonation' to L1s that use pitch 'mainly to distinguish words' (tone languages) or a narrower discourse pitch range. Reduced pitch range and fewer discourse-marking pitch movements are reported for L2 speakers from many backgrounds, including non-tone languages (Mennen 2007 and later work). The pattern is linked to processing load and unfamiliarity with English tone choices, so presenting it as a tone-language trait is too strong.

**Recommendation.** Recast as a general L2 tendency, with L1 prosody as one possible factor.

Already applied: 2 change(s) — edited guidance prn.intonation difficulties[0].kind; edited guidance prn.intonation difficulties[0].pattern

### R2-30 (minor, assessment)

Topics: prn.connected-speech-production

**Finding.** The record says the production value of weak forms is contested (Jenkins excluded them from the Lingua Franca Core), but the diagnostic's gap band includes 'staccato full forms throughout'. An intelligible speaker who uses full forms would therefore be graded as a gap. The criterion measures conformity to native-speaker rhythm, not the construct the record claims (key words standing out for listeners).

**Recommendation.** Define the gap band by listener outcome.

Already applied: 1 change(s) — edited guidance prn.connected-speech-production diagnostic.gapResponse

### R2-31 (minor, accuracy)

Topics: prn.numbers-aloud

**Finding.** The record teaches '-teen' and '-ty' as distinguished by stress (thirTEEN versus THIRty). Before a stressed noun, -teen numbers undergo stress shift (FOURteen STUdents), which removes the stress contrast exactly where numbers occur in presentations. The more reliable cue is the final syllable (/tiːn/ versus /ti/, flapped in American English).

**Recommendation.** Teach the final-syllable cue and the stress shift.

Already applied: 2 change(s) — edited topics prn.numbers-aloud masteryEvidence[1]; edited topics prn.numbers-aloud description

### R2-32 (minor, accuracy)

Topics: prn.segmental-priorities, prn.prominence

**Finding.** The summary of Jenkins's Lingua Franca Core mentions only the exclusion of dental fricatives. It leaves out that the core also excludes weak forms, word stress and pitch movement, and that nuclear (contrastive) stress placement is one of the few prosodic features it keeps. That point is the main ELF-research support for the dataset's priority on prominence and is not used.

**Recommendation.** Complete the description.

Already applied: 1 change(s) — edited guidance prn.segmental-priorities summary

### R2-41 (minor, coverage)

Topics: prn.segmental-priorities

**Finding.** Segmental work relies only on production practice and minimal pairs. High-variability phonetic training (HVPT: perceptual identification across many talkers and contexts) is among the best-supported pronunciation interventions (Logan, Lively & Pisoni 1991; Thomson 2018) and fits the dataset's link between perception and production. It does not appear anywhere in the dataset.

**Recommendation.** Add an HVPT activity.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"prn.segmental-priorities: add activity 'Perception training with many voices': learners identify their priority contrast in words spoken by many different talkers (for example a free HVPT tool), with immediate feedback, before production practice. Rationale: high-variability perceptual training improves both perception and production of L2 contrasts (Thomson, 2018). Add Thomson, R. I. (2018). High variability [pronunciation] training (HVPT). Journal of Second Language Pronunciation, 4(2), 208–231."}

### R2-42 (minor, coverage)

Topics: prn.word-stress, prn.technical-terms

**Finding.** Word-stress work covers suffix-driven shifts but not compound and phrase stress. Academic and technical vocabulary is dominated by noun + noun compounds with initial stress (CASE study, DATA set, CONTROL group, SAMPLE size), contrasting with final stress in adjective + noun phrases (statistical SIGnificance). Learners who stress the second element mark the wrong word as new. This is also the spoken side of grm.np-premodification.

**Recommendation.** Add a mastery statement.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"prn.word-stress: add masteryEvidence 'Stresses the first element of noun + noun compounds (CASE study, DATA set, CONTROL group) and the head of adjective + noun phrases (statistical SIGnificance) in technical vocabulary.'"}

### R3-04 (major, direction)

Topics: sem.turn-taking, lis.multi-party-discussion, lis.speaker-stance, idn.diversity-as-resource, acu.academic-literacies, grw.contribution-assessment, grw.meetings, sem.building-on-others

**Finding.** Seminar and group-work topics are over-chained through edges pitched above their dependents. sem.turn-taking (B1+, foundation) hard-depends on lis.multi-party-discussion (B2, not foundation), which hard-depends on lis.speaker-stance. This places basic floor-taking at depth 11, behind a chain that runs through acu.academic-literacies and idn.elf. grw.contribution-assessment (B1+, foundation) sits at depth 16 because of a soft edge from grw.meetings (B2). idn.diversity-as-resource (B1) depends on acu.academic-literacies (B2+, UG/PGT/PGR), a gap of three CEFR steps. Learners need to listen in multi-party talk to build on others, not to take a turn at all.

**Recommendation.** Remove sem.turn-taking <- lis.multi-party-discussion and attach multi-party listening to sem.building-on-others, the topic that actually needs it. Soften lis.multi-party-discussion <- lis.speaker-stance. Remove the two other above-level edges. Before removing the turn-taking edge, repoint its reteach (the difficulty "I wait for a long enough pause to be polite…") to prg.politeness, which fits the pattern better. sem.turn-taking falls from depth 11 to 3, and grw.contribution-assessment from 16 to 8.

Already applied: 6 change(s) — edited guidance sem.turn-taking difficulties[0].reteachPrerequisiteId; removed sem.turn-taking <- lis.multi-party-discussion; set lis.multi-party-discussion <- lis.speaker-stance to soft; removed idn.diversity-as-resource <- acu.academic-literacies; removed grw.contribution-assessment <- grw.meetings; added sem.building-on-others <- lis.multi-party-discussion (soft)

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

### R3-12 (major, missing-edge)

Topics: prs.research-presentations, prs.delivery-voice, prs.signposting, prn.fluency

**Finding.** Pronunciation is almost absent from the presentation graph. Only prs.delivery-voice links to prn.* (through prominence). prs.research-presentations, the capstone speaking genre, depends on neither delivery nor signposting, and prs.delivery-voice does not reach prn.fluency. pub.viva, exm.oral-exams and dad.studio-critique reach no prn.* topic at all.

**Recommendation.** Add prs.research-presentations <- prs.delivery-voice and <- prs.signposting, and prs.delivery-voice <- prn.fluency (all soft). Through delivery-voice, oral genres then reach prominence, thought groups, word stress and fluency.

Already applied: 3 change(s) — added prs.research-presentations <- prs.delivery-voice (soft); added prs.research-presentations <- prs.signposting (soft); added prs.delivery-voice <- prn.fluency (soft)

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

### R5-18 (minor, normativity)

Topics: gai.detection-limits, lis.accent-variation

**Finding.** Topic-level text, as distinct from reports of studies that used the terms, keeps the native/non-native binary that IDN critiques: gai.detection-limits description ('misclassify writing by non-native English writers') and masteryEvidence[1] ('misclassified non-native English writing'), and lis.accent-variation masteryEvidence[3] ('a regional or non-native accent'). The GAI domain summary already uses 'writers using English as an additional language'. The topics should follow it.

**Recommendation.** Use 'users of English as an additional language' in Claude-authored text, and keep 'non-native' only when reporting a study's own categories.

Already applied: 3 change(s) — edited topics gai.detection-limits description; edited topics gai.detection-limits masteryEvidence[1]; edited topics lis.accent-variation masteryEvidence[3]

# Revision packet: 06-speaking-collaboration

Domains: GRW (Group Work & Collaboration), PRS (Presentations), SEM (Seminars & Discussion)

## New topics to author

- `sem.explaining-concepts` | PROCEDURAL | **Explaining concepts and readings to peers** — Mediating a concept, text or dataset for classmates: simplifying, exemplifying, checking understanding and drawing on shared languages, in seminars, study groups and peer teaching. (from R1-22)
- `prs.research-pitches` | GENRE | **Short-format research pitches** — Three-minute thesis and elevator-style pitches that compress a project into a single accessible narrative for mixed audiences. (from R1-05)

## Merges affecting your domains

- `coh.spoken-signposting` was merged into `prs.signposting` (R1-18). The absorbed record is in authoring/revision/absorbed/coh.spoken-signposting.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `mmd.poster-design` was merged into `prs.posters` (R1-30). The absorbed record is in authoring/revision/absorbed/mmd.poster-design.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

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

### R1-06 (major, stage-level)

Topics: acu.university-structures, acu.roles-address, acu.academic-expectations, lrn.support-services, lrn.time-management, lrn.goal-setting, int.integrity-values, prg.messaging-channels, dig.word-processing, sem.preparation, prs.rehearsal-timing, arg.argument-concept

**Finding.** 261 topics are tagged pgr. 43 of them start at B1 and 29 are expected to be controlled by B2+ (cefrEnd ≤ B2+), which is below the C1 baseline that AUTHORING.md itself gives for doctoral researchers. Examples are acu.university-structures (B1–B2), acu.roles-address (B1–B2), lrn.time-management (B1–B2), lrn.support-services (B1–B2), int.integrity-values (B1–B2+) and arg.argument-concept (B1–B2+). A doctoral writing programme that followed the pathway would spend time on how universities are organised and what an argument is, while R1-05 shows its own core genres are missing. The PGR pathway's ordering also starts with B2-level vocabulary and grammar, not with doctoral genres.

**Recommendation.** Remove pgr from orientation and B1-entry topics where a PGR-specific topic already exists (int.research-integrity, res.writing-productivity, res.supervision, acu.hidden-curriculum). Keep pgr only where the PGR treatment is materially different, and say so in contextNotes.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["acu.university-structures","acu.roles-address","acu.academic-expectations","lrn.support-services","lrn.time-management","lrn.goal-setting","int.integrity-values","prg.messaging-channels","dig.word-processing","sem.preparation","prs.rehearsal-timing","arg.argument-concept"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt"]}

### R1-07 (major, stage-level)

Topics: sen.capitalisation, sen.lists-bullets, sen.apostrophes-hyphens-dashes, prs.nonverbal, sen.quotation-punctuation

**Finding.** 467 topics (84%) are tagged in-sessional-pgt, and 10 of the 12 SEN mechanics topics are among them. PGT in-sessional provision is short and dissertation-driven, and its time goes to critical reading, the literature review, research-informed argument and data commentary. When capitalisation, bullet lists and non-verbal communication carry the same PGT tag as the dissertation literature review, the PGT pathway loses its shape.

**Recommendation.** Remove PGT from low-level mechanics and generic presentation-delivery topics. Handle them through self-access and proofreading guidance rather than taught provision. Pair this with the core/revisit roles in R1-01.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["sen.capitalisation","sen.lists-bullets","sen.apostrophes-hyphens-dashes","prs.nonverbal"],"stages":["foundation","pre-sessional","in-sessional-ug"]}

### R1-09 (major, stage-level)

Topics: ess.headings, sem.debate, grm.articles, sta.hedging

**Finding.** 505 of 557 topics (91%) span two or more steps of a seven-step scale, and 39 span four. 335 (60%) end at C1, and 361 (65%) start at B1 or B1+. With ranges this uniform, cefrStart/cefrEnd cannot tell a 12-week B1+ cohort's syllabus from a 6-week B2+ cohort's. Some ranges also contradict the stage tags: ess.headings starts at B2 although grp.report-conventions (B1+) and foundation report writing need headings, and sem.debate starts at B2 although it is tagged foundation, where debate is a staple B1+ activity.

**Recommendation.** Add a single 'coreBand' per topic: the band where explicit teaching pays off most, used for course filtering. Keep cefrStart/cefrEnd as the outer envelope. Calibrate a sample against CEFR Companion Volume scales and the BALEAP Can Do Framework with practitioner panels, and correct the obvious inconsistencies now.

Already applied: 2 change(s) — ess.headings CEFR -> B1+–B2+; sem.debate CEFR -> B1+–C1

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].coreBand (single CEFR step) and use it, not the full range, for pathway filtering."}

### R1-18 (major, overlap)

Topics: coh.spoken-signposting, prs.signposting, lis.lecture-discourse-markers, lis.relevance-markers

**Finding.** coh.spoken-signposting (use and recognise macro- and micro-markers in lectures, presentations and seminars) overlaps prs.signposting (production in presentations) and lis.lecture-discourse-markers (reception). It is tagged for all five stages, so one resource appears in every pathway three times over.

**Recommendation.** Absorb coh.spoken-signposting into prs.signposting for production. Keep lis.lecture-discourse-markers for reception, and add a hard edge from prs.signposting to it.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"prs.signposting","absorb":["coh.spoken-signposting"]}

### R1-21 (major, coverage)

Topics: sem.opinions, phr.spoken-academic-formulas, reg.spoken-vs-written

**Finding.** The framework alignment in coverage.md shows the gap. IELTS Speaking Lexical Resource and Grammatical Range and Accuracy have 0 linked topics. The CEFR scales for Conversation, Informal discussion and Overall oral interaction have 0, and Understanding an interlocutor has 1. No topic covers the grammar of spoken academic English (heads and tails, ellipsis, vague language, spoken complexity) or spoken accuracy priorities. Informal academic interaction (talking to peers and staff before seminars, in labs, at departmental events) is also absent. Only 17 topics (3%) are SOCIOPRAGMATIC.

**Recommendation.** Add a spoken-grammar topic and an informal-interaction topic, and link them to SEM, PRS and PRG.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"grm.spoken-grammar","domainCode":"GRM","name":"Grammar of spoken academic interaction","type":"LINGUISTIC","scope":"Features and accuracy priorities of spoken academic English (heads and tails, ellipsis, vague language, discourse markers, clause chaining) for seminars, tutorials and presentations."}
- {"kind":"add-topic","id":"prg.informal-academic-interaction","domainCode":"PRG","name":"Informal academic interaction and networking","type":"SOCIOPRAGMATIC","scope":"Small talk and relationship-building with peers, lab colleagues and staff around teaching and at departmental events, including topic choice and moving between informal and academic talk."}

### R1-22 (major, coverage)

Topics: reg.non-specialist-audiences, sem.facilitating, grw.inclusive-collaboration

**Finding.** 'Overall mediation' has 0 linked topics, 'Encouraging conceptual talk' has 1, and 'Facilitating collaborative interaction' has 2. Yet explaining a concept or a reading to peers, often across languages, is everyday activity in multilingual seminars and group work, and it is assessed in many presentation and seminar tasks.

**Recommendation.** Add an explicit mediation topic and link it to sem.facilitating and grw.inclusive-collaboration.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"sem.explaining-concepts","domainCode":"SEM","name":"Explaining concepts and readings to peers","type":"PROCEDURAL","scope":"Mediating a concept, text or dataset for classmates: simplifying, exemplifying, checking understanding and drawing on shared languages, in seminars, study groups and peer teaching."}

### R1-30 (minor, overlap)

Topics: prs.posters, mmd.poster-design

**Finding.** prs.posters (presenting a poster) and mmd.poster-design (designing it) have identical stages (PUTR) and CEFR range (B2–C1) and are always taught and assessed together as one genre.

**Recommendation.** Merge into a single GENRE topic in PRS, with design statements included in its mastery evidence.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"prs.posters","absorb":["mmd.poster-design"]}

### R3-04 (major, direction)

Topics: sem.turn-taking, lis.multi-party-discussion, lis.speaker-stance, idn.diversity-as-resource, acu.academic-literacies, grw.contribution-assessment, grw.meetings, sem.building-on-others

**Finding.** Seminar and group-work topics are over-chained through edges pitched above their dependents. sem.turn-taking (B1+, foundation) hard-depends on lis.multi-party-discussion (B2, not foundation), which hard-depends on lis.speaker-stance. This places basic floor-taking at depth 11, behind a chain that runs through acu.academic-literacies and idn.elf. grw.contribution-assessment (B1+, foundation) sits at depth 16 because of a soft edge from grw.meetings (B2). idn.diversity-as-resource (B1) depends on acu.academic-literacies (B2+, UG/PGT/PGR), a gap of three CEFR steps. Learners need to listen in multi-party talk to build on others, not to take a turn at all.

**Recommendation.** Remove sem.turn-taking <- lis.multi-party-discussion and attach multi-party listening to sem.building-on-others, the topic that actually needs it. Soften lis.multi-party-discussion <- lis.speaker-stance. Remove the two other above-level edges. Before removing the turn-taking edge, repoint its reteach (the difficulty "I wait for a long enough pause to be polite…") to prg.politeness, which fits the pattern better. sem.turn-taking falls from depth 11 to 3, and grw.contribution-assessment from 16 to 8.

Already applied: 6 change(s) — edited guidance sem.turn-taking difficulties[0].reteachPrerequisiteId; removed sem.turn-taking <- lis.multi-party-discussion; set lis.multi-party-discussion <- lis.speaker-stance to soft; removed idn.diversity-as-resource <- acu.academic-literacies; removed grw.contribution-assessment <- grw.meetings; added sem.building-on-others <- lis.multi-party-discussion (soft)

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

### R4-14 (minor, overclaim)

Topics: grm.error-monitoring, grw.contribution-assessment

**Finding.** Activity titles 'Evidence-based error log' and 'Evidence-based rating' use a term readers will take to mean empirically tested. The activities are untested proposals; 'evidence' here means the learner's own data.

**Recommendation.** Retitle.

Already applied: 2 change(s) — edited guidance grm.error-monitoring activities[0].title; edited guidance grw.contribution-assessment activities[0].title

### R5-01 (critical, stereotype)

Topics: voc.evaluative-lexis, sta.evaluating-others-language, rdc.critical-reading, syn.synthesis-concept, syn.gaps-tensions, cit.citation-functions, inf.source-evaluation, par.integrating-evidence, ess.criticality, ess.thesis-statement, ges.critique, res.literature-review, res.gap-niche, res.supervision, idn.academic-identity, crt.concept, crt.questioning, sem.agreeing-disagreeing, sem.opinions, lis.speaker-stance, pub.peer-review-reports, acu.hidden-curriculum, acu.critical-eap, fbk.seeking-feedback, wpr.task-analysis, exm.oral-exams, lrn.autonomy, crt.epistemic-beliefs

**Finding.** The single most repeated learner difficulty in the dataset is the deferential learner who will not criticise authority: about 28 difficulty records across 25+ topics, many in near-identical ventriloquised words ('Who am I to criticise a published expert?' appears verbatim in voc.evaluative-lexis, rdc.critical-reading and, as 'professor', sta.evaluating-others-language; 'I am only a student' in inf.source-evaluation, res.literature-review and idn.academic-identity). About half are coded prior-schooling. With lrn.autonomy ('The teacher should tell me what to study'), crt.epistemic-beliefs ('Just tell me the right answer') and the memorisation patterns, this rebuilds Holliday's native-speakerist trio (deference, no critical thinking, no autonomy) under the neutral label 'prior schooling'. The repeated disclaimers ('do not attribute this to culture') do not undo the effect. A teacher reading across topics meets the same figure dozens of times, and the label still points to 'elsewhere' schooling. Hesitancy to evaluate published work is well documented among novice first-language English students too, and comes from novice status and the assessment genre.

**Recommendation.** Keep the deference pattern in two or three anchor topics (crt.concept, ess.criticality, res.literature-review). Replace it elsewhere with difficulties specific to the topic. Where it stays, code it affective or conceptual, unless the evidence names an assessment practice, and say that it is common among novice writers of all backgrounds. Add a rule to AUTHORING.md section 4: no single difficulty pattern may recur in more than three records, and prior-schooling must name a schooling or assessment practice, not a disposition.

Already applied: 9 change(s) — edited guidance crt.concept difficulties[1].pattern; edited guidance sta.evaluating-others-language difficulties[0].kind; edited guidance sta.evaluating-others-language difficulties[0].response; edited guidance idn.academic-identity difficulties[2].kind; edited guidance voc.evaluative-lexis difficulties[1].pattern; edited guidance voc.evaluative-lexis difficulties[1].kind; edited guidance voc.evaluative-lexis difficulties[1].revealedBy; edited guidance voc.evaluative-lexis difficulties[1].response; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Consolidate the deference/reluctance-to-critique pattern. Keep it in crt.concept[1], ess.criticality[1] and res.literature-review[2]. Rewrite it as a topic-specific difficulty in syn.synthesis-concept[1], cit.citation-functions[2], inf.source-evaluation[2], rdc.critical-reading[2], syn.gaps-tensions[2], ges.critique[1], crt.questioning[1], res.gap-niche[1] and sem.agreeing-disagreeing[0]. Add to AUTHORING.md section 4: 'No difficulty pattern may recur in substance in more than three records; prior-schooling must name a schooling or assessment practice, not a disposition such as deference.'"}

### R5-07 (major, inclusion)

Topics: sem.turn-taking, sem.online-discussion, voc.spelling-conventions, rdp.reading-fluency-rate, edt.proofreading, exm.timed-writing, prs.nonverbal

**Finding.** Disability and neurodiversity are almost absent. Across 557 topics and 557 guidance records there are 0 mentions of dyslexia, autism or ADHD and one of neurodivergence (prs.nonverbal). There is no topic on assistive technology as legitimate academic practice (text-to-speech, dictation, mind-mapping software), on exam adjustments (mentioned once in a reviewNote), or on stammering and participation. Several assessments make particular modes of participation the norm. sem.online-discussion AP: 'a gap is a learner who contributes only in the chat or not at all'; its diagnostic gapResponse: 'Silent, or present only in the chat.' sem.turn-taking AP: 'a gap is near-silence'. Chat-only participation is the accessible mode for many deaf, hard-of-hearing, stammering and neurodivergent students. Spelling, proofreading and timed-reading guidance never considers specific learning differences, which carry over across languages.

**Recommendation.** Accept multiple modes of participation in seminar assessment, add learning-difference notes where they matter most, and add an assistive-technology topic.

Already applied: 5 change(s) — edited topics sem.online-discussion assessmentPrompt; edited guidance sem.online-discussion diagnostic.gapResponse; edited topics sem.turn-taking assessmentPrompt; edited guidance voc.spelling-conventions contextNotes; edited guidance rdp.reading-fluency-rate contextNotes

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"dig.assistive-technology","domainCode":"DIG","name":"Assistive technology and study adjustments","type":"STRATEGIC","scope":"Use assistive and accessibility technologies (text-to-speech, dictation, screen readers, mind-mapping and reading-support tools) and institutional adjustments, such as extra exam time or alternative participation modes, as legitimate parts of academic practice. Know how to request adjustments and how these tools interact with AI and integrity rules."}

### R5-13 (major, balance)

Topics: sem.turn-taking, res.supervision, grw.inclusive-collaboration, acu.hidden-curriculum

**Finding.** The difficulty schema puts every problem inside the learner. The seven kinds (L1-transfer, developmental, conceptual, prior-schooling, overgeneralisation, performance, affective) have no category for barriers caused by others or by institutions. So sem.turn-taking[2], 'Entry attempts are ignored or talked over because the learner has been positioned as less competent', is coded affective, as though it were the learner's feeling. Likewise res.supervision[0] codes a supervisor's ambiguous hedged feedback as the student's L1-transfer problem. The guidance format has a difficulties array but nothing for learner resources. Only 26 of 210 prior-schooling responses acknowledge the value of earlier practice, and only 54 of 557 guidance records mention learner assets in their summary or contextNotes. Prior education therefore appears almost only as a source of problems.

**Recommendation.** Add a difficulty kind for positioning and institutional causes, and an optional learnerResources field to the guidance schema. Correct the misattributed items now.

Already applied: 2 change(s) — edited guidance res.supervision difficulties[0].kind; edited guidance res.supervision difficulties[0].response

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"AUTHORING.md section 4 and schema: add difficulty kind 'positioning' (barriers created by peers, staff, task or assessment design, e.g. being talked over, unclear criteria, inaccessible formats) and recode sem.turn-taking[2] and grw.inclusive-collaboration[0] to it. Add an optional guidance field 'learnerResources' (1–3 items: prior knowledge, languages or practices that transfer) and populate it first for prior-schooling-heavy topics."}

### R6-04 (major, coverage)

Topics: prs.research-presentations, res.supervision, fbk.self-peer-assessment

**Finding.** Graduate teaching assistants and demonstrators are not covered. Many international PGRs teach seminars, run labs and mark undergraduate work in English. Institutional ESAP and PGR provision commonly includes classroom language, explaining and questioning, and giving written feedback to students. No topic addresses the PGR as teacher or marker.

**Recommendation.** Add a PGR topic on teaching and demonstrating communication. It could sit under SEM or RES; RES is proposed so that it appears on the PGR pathway.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.teaching-as-pgr","domainCode":"RES","name":"Teaching, demonstrating and marking as a doctoral researcher","type":"SOCIOPRAGMATIC","scope":"Communicate as a graduate teaching assistant or demonstrator: explaining concepts and procedures to undergraduates, asking and handling questions, managing small-group discussion and lab safety talk, and writing clear, criterion-referenced feedback on student work within the module's marking guidance."}

### R6-10 (major, framework-mapping)

Topics: grw.purposes, grw.roles-planning, grw.contribution-assessment, ess.criticality, crt.problem-solving, mmd.multimodal-literacy, res.chapter-metatext

**Finding.** The Vitae RDF is a framework for researchers, yet seven links attach it to topics not tagged pgr, including foundation group-work topics (grw.purposes, grw.roles-planning, grw.contribution-assessment: D1) and foundation critical thinking (crt.problem-solving: A2 component, A3). This dilutes what a Vitae link means for users filtering the PGR pathway. Conversely, res.chapter-metatext is the only PGT/PGR-only topic with no Vitae link. On PGR topics, the Vitae links are generally apt (C1 for authorship and ethics, B2 and C2 for writing productivity, D3 for engagement, B3 for CVs, A3 'argument construction' for contribution and gap). A1, whose descriptors include academic literacy and languages, is a defensible default anchor for PGR language topics. A3 is under-used (three links) given that it includes argument construction.

**Recommendation.** Remove the seven non-PGR Vitae links, or tag those topics pgr if they are genuinely intended for doctoral provision. Add D2 to res.chapter-metatext. Consider A3 for arg.extended-argument (PUTR).

Already applied: 9 change(s) — grw.purposes - framework vitae-rdf:D1; grw.roles-planning - framework vitae-rdf:D1; grw.contribution-assessment - framework vitae-rdf:D1; ess.criticality - framework vitae-rdf:A2; crt.problem-solving - framework vitae-rdf:A2; crt.problem-solving - framework vitae-rdf:A3; mmd.multimodal-literacy - framework vitae-rdf:D2; res.chapter-metatext + framework vitae-rdf:D2; …

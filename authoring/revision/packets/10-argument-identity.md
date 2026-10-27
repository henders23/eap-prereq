# Revision packet: 10-argument-identity

Domains: ARG (Academic Argumentation), CRT (Critical Thinking), IDN (Identity, Plurilingualism & Intercultural Competence)

## New topics to author

- `idn.translingual-writing` | CONCEPTUAL | **Translingual writing and code-meshing** — Understanding translingual approaches in which writers deliberately bring other languages or Englishes into academic texts, when and how this is accepted, and how to negotiate it with readers and assessors. (from R5-06)

## Merges affecting your domains

- `rdc.critical-questions` was merged into `crt.questioning` (R1-31). The absorbed record is in authoring/revision/absorbed/rdc.critical-questions.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-06 (major, stage-level)

Topics: acu.university-structures, acu.roles-address, acu.academic-expectations, lrn.support-services, lrn.time-management, lrn.goal-setting, int.integrity-values, prg.messaging-channels, dig.word-processing, sem.preparation, prs.rehearsal-timing, arg.argument-concept

**Finding.** 261 topics are tagged pgr. 43 of them start at B1 and 29 are expected to be controlled by B2+ (cefrEnd ≤ B2+), which is below the C1 baseline that AUTHORING.md itself gives for doctoral researchers. Examples are acu.university-structures (B1–B2), acu.roles-address (B1–B2), lrn.time-management (B1–B2), lrn.support-services (B1–B2), int.integrity-values (B1–B2+) and arg.argument-concept (B1–B2+). A doctoral writing programme that followed the pathway would spend time on how universities are organised and what an argument is, while R1-05 shows its own core genres are missing. The PGR pathway's ordering also starts with B2-level vocabulary and grammar, not with doctoral genres.

**Recommendation.** Remove pgr from orientation and B1-entry topics where a PGR-specific topic already exists (int.research-integrity, res.writing-productivity, res.supervision, acu.hidden-curriculum). Keep pgr only where the PGR treatment is materially different, and say so in contextNotes.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["acu.university-structures","acu.roles-address","acu.academic-expectations","lrn.support-services","lrn.time-management","lrn.goal-setting","int.integrity-values","prg.messaging-channels","dig.word-processing","sem.preparation","prs.rehearsal-timing","arg.argument-concept"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt"]}

### R1-10 (major, structure)

Topics: acu.academic-literacies, acu.critical-eap, idn.diversity-as-resource, idn.standards-legitimacy, acu.emi-tne

**Finding.** Several topics are stances that should inform the curriculum rather than things learners are taught and assessed on. The IDN domain summary admits that 'several topics are as much curriculum principles for teachers as content for learners'. acu.academic-literacies asks learners to distinguish the academic literacies model from study-skills and socialisation models. acu.critical-eap asks learners to 'examine whose norms EAP teaches'. idn.diversity-as-resource is tagged for all five stages from B1 and is written partly for programmes ('for programmes, it means…'). acu.emi-tne is a delivery context, not a skill. As learner topics they inflate counts, take core slots, and produce mastery evidence that no assessor can observe.

**Recommendation.** Add an 'audience' field (learner | teacher | both). Move curriculum principles into a 'principles' block in domains.json, where they can be cited by guidance. Where a learner-facing skill exists, rescope to it with observable mastery: for example acu.critical-eap becomes making and justifying informed choices about conventions in one's own writing. Model EMI/TNE as a context facet (R1-23).

Already applied: 1 change(s) — edited topics acu.critical-eap undefined

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].audience ('learner' | 'teacher' | 'both'); set 'teacher' for acu.academic-literacies and idn.diversity-as-resource and move their content into domains.json principles for ACU and IDN."}
- {"kind":"retag-stages","topicIds":["idn.standards-legitimacy"],"stages":["in-sessional-pgt","pgr"]}
- {"kind":"other","detail":"Convert acu.emi-tne into a contexts[] facet value ('emi', 'tne') rather than a topic; keep any learner-facing content (planning for EMI lecturers' language expectations) under lrn.content-through-english."}

### R1-11 (major, structure)

Topics: idn.academic-identity, idn.plurilingual-repertoire, idn.elf, idn.intercultural-communication, idn.intercultural-rhetoric, idn.diversity-as-resource, idn.standards-legitimacy

**Finding.** IDN sits under Argument & Critical Thinking, but not one prerequisite edge connects IDN to ARG or CRT in either direction. Its incoming prerequisites come from REG, ACU, LRN, PRN, SEM, RDS and GES, and it unlocks GRW, PUB, ACU, LIS, PRS, WPR, SRC and DIG. Its content (identity, ELF, intercultural communication, plurilingual repertoires) is academic socialisation. Placing it under critical thinking also risks reviving the deficit framing the domain rejects, namely that intercultural difference is a critical-thinking problem.

**Recommendation.** Move IDN to the Academic Socialisation & Communication strand, renamed 'Academic Socialisation, Identity & Communication'. Move idn.intercultural-rhetoric's argument-structure content into ARG mastery evidence if needed.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"move-domain","domainCode":"IDN","toStrand":"Academic Socialisation & Communication"}
- {"kind":"other","detail":"Rename strand 'Academic Socialisation & Communication' to 'Academic Socialisation, Identity & Communication'."}

### R1-31 (minor, overlap)

Topics: crt.questioning, rdc.critical-questions

**Finding.** crt.questioning and rdc.critical-questions are both STRATEGIC, B1+–C1 and tagged for all five stages. Both describe a routine of interrogative questions (how do we know, according to whom, what is omitted).

**Recommendation.** Merge, keeping the CRT topic and adding text-specific mastery evidence from the RDC one.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"crt.questioning","absorb":["rdc.critical-questions"]}

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

### R3-15 (major, reteach)

Topics: voc.countability-academic-nouns, rdc.critical-response, prn.repair, exm.objective-questions, crt.multiple-perspectives, coh.writer-responsibility, coh.text-patterns, sem.preparation, res.literature-review

**Finding.** The validator requires reteachPrerequisiteId to be a direct prerequisite. This couples the guidance to the edge set. Nine reteach choices rest on edges removed in this review, and at least one spurious edge (rds.main-ideas <- rdp.parsing-complex-sentences) appears to exist mainly to license a remedial pointer. In addition, these reteach choices do not address their difficulty pattern: voc.countability (Greco-Latin plurals) -> core academic vocabulary; rdc.critical-response (opinion unconnected to the text) -> evidence evaluation; prn.repair (not noticing listener confusion) -> code glosses; exm.objective-questions (cue-based tricks) -> generalisation and qualification; crt.multiple-perspectives (essays must not take sides) -> reading writer stance; coh.writer-responsibility (over-explicitness) -> cohesion versus coherence; coh.text-patterns (evaluation element missing) -> cohesion versus coherence; sem.preparation (underestimating reading time) -> notes from reading; res.literature-review ("I am only a student") -> gap and niche. 563 of 1,445 difficulties (39%) have no reteach target.

**Recommendation.** Apply the guidance edits below; each new target is a direct prerequisite after all R3 changes. For the longer term, allow a separate remedialTopicId that may point to any ancestor or related topic, so that guidance needs no longer force graph edges.

Already applied: 9 change(s) — edited guidance voc.countability-academic-nouns difficulties[1].reteachPrerequisiteId; edited guidance rdc.critical-response difficulties[0].reteachPrerequisiteId; edited guidance prn.repair difficulties[2].reteachPrerequisiteId; edited guidance exm.objective-questions difficulties[2].reteachPrerequisiteId; edited guidance crt.multiple-perspectives difficulties[2].reteachPrerequisiteId; edited guidance coh.writer-responsibility difficulties[2].reteachPrerequisiteId; edited guidance coh.text-patterns difficulties[1].reteachPrerequisiteId; edited guidance sem.preparation difficulties[2].reteachPrerequisiteId; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Schema/validator: add optional remedialTopicIds (any topic) distinct from reteachPrerequisiteId (direct prerequisite) so remediation pointers do not force edges."}

### R4-06 (major, overclaim)

Topics: cit.author-date-in-text, reg.vague-overgeneralised, res.research-questions, crt.problem-solving

**Finding.** Several summaries present untested teaching recommendations as established ('works best', 'most likely to improve') right next to descriptive or theoretical citations, so readers will take the citation as the evidence. Examples: 'Instruction works best when formatting is linked to the integral/non-integral distinction (Swales, 1990; Thompson & Tribble, 2001) rather than taught as an isolated rule list'; 'Teaching works best by asking the reader's questions' (after citing Hinkel's and Aull & Lancaster's descriptive corpus work); 'Teaching works best through repeated revision of the learner's own questions'; 'are the two moves most likely to improve student work'. None of the cited works tests the instruction.

**Recommendation.** Mark these as practitioner proposals.

Already applied: 4 change(s) — edited guidance cit.author-date-in-text summary; edited guidance reg.vague-overgeneralised summary; edited guidance res.research-questions summary; edited guidance crt.problem-solving summary

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

### R5-06 (major, normativity)

Topics: idn.plurilingual-repertoire, wpr.l1-in-composing, wpr.drafting, dig.machine-translation

**Finding.** García and Li Wei and Canagarajah are cited, but translanguaging is admitted only into the process: 'plan in any language, draft in English'. The products stay monolingual: 'while producing assessed work in the required language' (idn.plurilingual-repertoire) and 'drafting the text predominantly in English' (wpr.l1-in-composing). The claim 'translating whole L1 drafts tends to carry over L1 structures, reduces L2 practice' is presented as settled. Research comparing translation with direct composition is mixed: Kobayashi and Rinnert (1992) found that translated essays by lower-proficiency Japanese EFL writers scored higher on content and organisation. Translingual writing (code-meshing, multilingual quotation and glossing, bilingual assessment in EMI) does not appear anywhere. The 'draft in English' orthodoxy is presented as fact, not as a contested pedagogical choice.

**Recommendation.** Present language separation in products as contested and dependent on the task. Propose kobayashirinnert1992 under proposedReferences: Kobayashi, H., & Rinnert, C. (1992). Effects of first language on second language writing: Translation versus direct composition. Language Learning, 42(2), 183–215. My confidence is high but it should be verified. Add a translingual writing topic.

Already applied: 2 change(s) — edited topics idn.plurilingual-repertoire description; edited topics wpr.l1-in-composing description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"idn.translingual-writing","domainCode":"IDN","name":"Translingual writing and code-meshing","type":"CONCEPTUAL","scope":"Understand translingual approaches to academic writing (Canagarajah; Horner and colleagues), in which writers deliberately bring other languages or Englishes into academic texts by glossing, quoting in the original, code-meshing in reflective or creative genres, or bilingual submission in some EMI programmes. Weigh where this is accepted, contested or prohibited, and make informed, negotiated choices with tutors."}

### R5-08 (major, inclusion)

Topics: acu.hidden-curriculum, acu.transition, idn.diversity-as-resource

**Finding.** The implied learner is an international student on an anglophone campus. First-generation, widening-participation and working-class students get 0 mentions, and mature students appear only in an acu.transition reviewNote ('Transition also affects home and mature students… should not be framed as specific to international students'). That note is never acted on in the topic text. Home students appear 4 times, always as peers who must accommodate. This matters for balance: the academic literacies research the dataset relies on (Lillis's 'institutional practice of mystery', Ivanič's mature writers) was mainly about home, non-traditional students. The dataset applies that research only to multilingual students.

**Recommendation.** Name non-traditional home students where tacit expectations and transition are discussed, and act on the acu.transition review note.

Already applied: 1 change(s) — edited topics acu.hidden-curriculum description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"acu.transition: incorporate reviewNotes[0] into the topic description and contextNotes (home, mature, first-generation and part-time students; caring and work responsibilities), then remove the review note."}

### R5-09 (major, normativity)

Topics: sen.concision, crt.multiple-perspectives, coh.writer-responsibility, fbk.seeking-feedback, acu.emi-tne

**Finding.** The UK campus is the unmarked default ('UK' appears 40 times). Several difficulties state UK practice as the universal target: 'Explain that UK assignments set maximum limits' (sen.concision[0]), 'in most UK HE genres' (crt.multiple-perspectives[2]), 'Ask how a UK marker might respond' (coh.writer-responsibility AP), 'in many UK institutions, students are expected to use office hours' (fbk.seeking-feedback[0]). The stage vocabulary (pre-sessional, in-sessional) is UK-specific. EMI and TNE, where most English-medium learners now study, get one leaf topic (acu.emi-tne) that unlocks nothing and is never referenced from stageEmphasis.

**Recommendation.** Replace UK-as-target wording with the learner's target context. Add an EMI/TNE note to stageEmphasis or contextNotes for the domains where practice differs most (SEM, FBK, ACU, INT, PRG).

Already applied: 3 change(s) — edited guidance sen.concision difficulties[0].response; edited guidance crt.multiple-perspectives difficulties[2].response; edited topics coh.writer-responsibility assessmentPrompt

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"domains: for SEM, FBK, ACU, INT and PRG, add a sentence to summary noting how practice may differ in EMI and TNE programmes, cross-referencing acu.emi-tne; consider a context dimension (anglophone campus / EMI / TNE / online) alongside stages."}

### R5-10 (major, stereotype)

Topics: pub.cover-letters, pub.academic-cv-bio, idn.elf, idn.standards-legitimacy

**Finding.** pub.cover-letters[0] gives as an L1-transfer error the pattern 'Dear Respected Editor, I humbly request you to kindly consider my manuscript…'. These formulae are recognisably South Asian English, a nativised variety that is many writers' first or dominant English. Labelling them L1 transfer turns a legitimate World English into interference, and the quoted string reads as caricature. World Englishes and postcolonial Englishes appear nowhere in the dataset (0 mentions), so learners whose English is an outer-circle variety have no place in it except as error. pub.academic-cv-bio[1] codes a national CV convention (photo, date of birth) as L1-transfer too, which is a category error.

**Recommendation.** Remove the caricature, recode both items, and acknowledge World Englishes in idn.elf or idn.standards-legitimacy.

Already applied: 5 change(s) — edited guidance pub.cover-letters difficulties[0].pattern; edited guidance pub.cover-letters difficulties[0].kind; edited guidance pub.cover-letters difficulties[0].revealedBy; edited guidance pub.cover-letters difficulties[0].response; edited guidance pub.academic-cv-bio difficulties[1].kind

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"idn.elf or idn.standards-legitimacy: add a mastery statement recognising World Englishes, for example 'Distinguishes features of established varieties of English (e.g. Indian, Nigerian, Singaporean English) from learner errors, and explains when genre conventions rather than variety determine expected forms'."}

### R5-11 (major, stereotype)

Topics: coh.writer-responsibility, reg.spoken-vs-written, arg.toulmin

**Finding.** Contrastive-rhetoric stereotypes come back through ventriloquised learner voices and one nationality-specific study, even though idn.intercultural-rhetoric critiques Kaplan well. In coh.writer-responsibility[0], 'If I state my point at the start, the reader will think I am not subtle' is Hinds's reader-responsible (Japanese) writer put into a learner's mouth. In reg.spoken-vs-written[2] the response 'Acknowledge that writing traditions value different qualities… English-medium academic prose for information-dense, plainly organised sentences' implies that other traditions are ornamental. The arg.toulmin summary gives one study as the account of how L2 writers argue: 'Qin and Karabacak's analysis of Chinese EFL university students' argumentative essays… counter-argument and rebuttal elements were relatively infrequent'. That is the only nationality named in ARG, and it attaches a deficit to a national group.

**Recommendation.** Re-voice the difficulties as rationales that novice writers in any language hold. Add limits to the single-nationality study.

Already applied: 3 change(s) — edited guidance coh.writer-responsibility difficulties[0].pattern; edited guidance reg.spoken-vs-written difficulties[2].response; edited guidance arg.toulmin summary

### R5-14 (major, coverage)

Topics: idn.standards-legitimacy, cit.citation-functions, inf.source-evaluation, acu.critical-eap

**Finding.** Decolonising curricula, racialisation and the politics of whose knowledge counts are missing. The dataset has 0 mentions of race, racialisation, raciolinguistics, colonial or decolonising, and none of epistemic injustice or the Global South. Canagarajah's centre/periphery argument appears only in PGR-oriented topics. No topic in CIT or INF asks learners to consider whose scholarship is cited, indexed or treated as 'authoritative', even though source evaluation teaches them to favour indexed, high-impact journals. idn.standards-legitimacy discusses native-speakerism without saying that judgements of 'nativeness' and 'accent' are often racialised.

**Recommendation.** Name racialised language judgements in idn.standards-legitimacy, proposing Flores and Rosa (2015) under proposedReferences: Flores, N., & Rosa, J. (2015). Undoing appropriateness: Raciolinguistic ideologies and language diversity in education. Harvard Educational Review, 85(2), 149–171. Verify before use. Add a citation-politics topic linked to inf.source-evaluation.

Already applied: 1 change(s) — edited topics idn.standards-legitimacy description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"cit.citation-politics","domainCode":"CIT","name":"Whose knowledge is cited","type":"CONCEPTUAL","scope":"Recognise that citation and indexing practices shape whose knowledge becomes visible, including the dominance of English-language, Global North and highly indexed sources. Evaluate the range of perspectives in a reference list, and include relevant scholarship from other regions, languages and communities while still meeting the assignment's quality criteria."}

### R5-15 (minor, normativity)

Topics: crt.epistemic-beliefs

**Finding.** The crt.epistemic-beliefs description presents the Perry/Kuhn sequence as a settled developmental path ('moving from treating knowledge as fixed facts transmitted by authorities, through treating all views as equally valid, towards evaluating claims as better or worse supported'). The guidance summary and reviewNote say these models came from a narrow sample and describe tendencies, but the topic text, which teachers and learners see first, does not. Together with the prior-schooling difficulty 'Just tell me the right answer', it suggests a developmental hierarchy on which learners from exam-oriented systems sit lower.

**Recommendation.** Qualify the model in the description itself.

Already applied: 1 change(s) — edited topics crt.epistemic-beliefs description

### R5-19 (minor, deficit)

Topics: arg.counterarguments

**Finding.** The arg.counterarguments description says 'Anticipating objections is a hallmark of mature argument… but learners rarely do it spontaneously'. 'Mature' implies a developmental hierarchy, and 'learners' implies EAP students in particular. Kuhn's evidence, cited in crt.multiple-perspectives, shows that most adults in any language rarely generate counter-arguments unprompted.

**Recommendation.** Reword without the developmental hierarchy.

Already applied: 1 change(s) — edited topics arg.counterarguments description

### R5-20 (minor, inclusion)

Topics: acu.academic-literacies, idn.academic-identity, crt.reflexivity

**Finding.** Some mastery evidence asks learners to disclose identity conflict as proof of competence. acu.academic-literacies masteryEvidence[2]: 'Identifies a point in their own writing where institutional conventions and their preferred identity or voice were in tension…'. idn.academic-identity masteryEvidence[3] is similar. crt.reflexivity's guidance protects sensitive disclosure, but these topics do not. Learners who are refugees, LGBTQ+, or from contexts where such disclosure is risky need an alternative route to show mastery.

**Recommendation.** Offer a case-based or published-account alternative.

Already applied: 1 change(s) — edited topics acu.academic-literacies masteryEvidence[2]

### R5-21 (minor, normativity)

Topics: coh.writer-responsibility, idn.intercultural-rhetoric

**Finding.** Hinds's reader/writer responsibility typology is contested (the reviewNote says so), yet it is the title of a B1+ foundation topic, 'Reader and writer responsibility', that sits upstream of 77 topics. The practical skill, making links explicit for a given reader, does not need the cross-cultural typology. The typology belongs in idn.intercultural-rhetoric (B2+, already critical).

**Recommendation.** Rename the topic around the skill and leave the Hinds discussion to idn.intercultural-rhetoric.

Already applied: 1 change(s) — edited topics coh.writer-responsibility name

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"coh.writer-responsibility guidance: move the Hinds/Connor/Kubota discussion from the summary to idn.intercultural-rhetoric and keep this record focused on reader-oriented explicitness; keep the ID as fixed by the skeleton."}

### R6-10 (major, framework-mapping)

Topics: grw.purposes, grw.roles-planning, grw.contribution-assessment, ess.criticality, crt.problem-solving, mmd.multimodal-literacy, res.chapter-metatext

**Finding.** The Vitae RDF is a framework for researchers, yet seven links attach it to topics not tagged pgr, including foundation group-work topics (grw.purposes, grw.roles-planning, grw.contribution-assessment: D1) and foundation critical thinking (crt.problem-solving: A2 component, A3). This dilutes what a Vitae link means for users filtering the PGR pathway. Conversely, res.chapter-metatext is the only PGT/PGR-only topic with no Vitae link. On PGR topics, the Vitae links are generally apt (C1 for authorship and ethics, B2 and C2 for writing productivity, D3 for engagement, B3 for CVs, A3 'argument construction' for contribution and gap). A1, whose descriptors include academic literacy and languages, is a defensible default anchor for PGR language topics. A3 is under-used (three links) given that it includes argument construction.

**Recommendation.** Remove the seven non-PGR Vitae links, or tag those topics pgr if they are genuinely intended for doctoral provision. Add D2 to res.chapter-metatext. Consider A3 for arg.extended-argument (PUTR).

Already applied: 9 change(s) — grw.purposes - framework vitae-rdf:D1; grw.roles-planning - framework vitae-rdf:D1; grw.contribution-assessment - framework vitae-rdf:D1; ess.criticality - framework vitae-rdf:A2; crt.problem-solving - framework vitae-rdf:A2; crt.problem-solving - framework vitae-rdf:A3; mmd.multimodal-literacy - framework vitae-rdf:D2; res.chapter-metatext + framework vitae-rdf:D2; …

### R6-13 (minor, framework-mapping)

Topics: cit.author-date-in-text, src.integrating-quotations, crt.description-analysis-evaluation

**Finding.** 'Reports and essays' is the default CEFR link: 90 of 1018 links (9%), nearly twice the next scale. It is attached to topics where a more specific scale exists or where the link is decorative, for example cit.author-date-in-text (related), src.integrating-quotations (its only link, although 'Processing text' or 'Relaying specific information' fit source integration better) and crt.description-analysis-evaluation. Meanwhile, the more specific scales 'Reading correspondence', 'Overall oral interaction' and 'Overall written interaction' have no links. Reading decision letters, reviewer reports and supervisor comments (pub.publishing-process, pub.responding-reviewers, res.supervision) is exactly the kind of activity 'Reading correspondence' covers.

**Recommendation.** Remove decorative 'Reports and essays' links. Prefer the mediation scales for source handling. Consider rec.read.correspondence for topics about interpreting decision letters and written feedback, in place of a weaker existing link.

Already applied: 2 change(s) — cit.author-date-in-text - framework cefr-cv:prod.writ.reports-essays; src.integrating-quotations + framework cefr-cv:med.text.relaying-information

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"For pub.publishing-process, consider replacing acrl:authority (component) with cefr-cv:rec.read.correspondence [C1] (component), since ME[2] and the prompt centre on interpreting a decision letter."}

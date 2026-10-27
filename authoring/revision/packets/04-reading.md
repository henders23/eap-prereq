# Revision packet: 04-reading

Domains: RDC (Critical & Multiple-Text Reading), RDP (Reading Processes & Fluency), RDS (Reading Strategies & Comprehension)

## New topics to author

None.


## Merges affecting your domains

- `rdc.critical-questions` was merged into `crt.questioning` (R1-31). The absorbed record is in authoring/revision/absorbed/rdc.critical-questions.json. The survivor belongs to another group; no action needed except updating any references in your text.
- `rdc.reading-for-writing` was merged into `wpr.reading-to-write` (R1-14). The absorbed record is in authoring/revision/absorbed/rdc.reading-for-writing.json. The survivor belongs to another group; no action needed except updating any references in your text.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-08 (major, stage-level)

Topics: dse.mathematical-writing, dse.protocols-specifications, sen.sentence-types, rds.scanning, rds.skimming, prg.emails-to-staff

**Finding.** Only one topic (voc.high-frequency-base) starts below B1, and the scale has no A2+ step. International foundation programmes commonly admit students at around IELTS 4.0–5.0, which is roughly A2+ to B1. 186 foundation-tagged topics have cefrEnd C1 or C2, so the 'foundation' pathway reads as the whole undergraduate curriculum. Two DSE topics tagged foundation are degree-level: dse.mathematical-writing (writing proofs) and dse.protocols-specifications (engineering specifications). In addition, 77 foundation topics are CONCEPTUAL, which is a heavy conceptual load for A2+/B1 learners combining EAP with subject modules.

**Recommendation.** Add A2+ to the CEFR scale. Lower cefrStart for the genuine entry topics used at the start of foundation. Remove foundation from degree-level ESAP genres. When stageRoles are introduced, limit foundation 'core' to topics whose cefrStart is B1+ or below.

Already applied: 4 change(s) — sen.sentence-types CEFR -> A2–B2; rds.scanning CEFR -> A2–B2; rds.skimming CEFR -> A2–B2; prg.emails-to-staff CEFR -> A2–B2+

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add 'A2+' to the CEFR scale in AUTHORING.md and the schema."}
- {"kind":"retag-stages","topicIds":["dse.mathematical-writing","dse.protocols-specifications"],"stages":["in-sessional-ug","in-sessional-pgt","pgr"]}

### R1-14 (major, overlap)

Topics: rdc.reading-for-writing, wpr.reading-to-write, syn.integrated-tasks, tst.integrated-test-tasks

**Finding.** rdc.reading-for-writing (select, read and organise sources around a writing task) and wpr.reading-to-write (move from reading and notes to one's own text) are two halves of one discourse-synthesis process. Both are FPUT, B1+–C1. syn.integrated-tasks and tst.integrated-test-tasks describe the same reading/listening-into-writing task type; the only difference is that one is a test. This is the central integrated skill of most pre-sessionals, and scattering it across four domains (RDC, WPR, SYN, TST) hides it.

**Recommendation.** Merge rdc.reading-for-writing into wpr.reading-to-write as one end-to-end procedure. Merge tst.integrated-test-tasks into syn.integrated-tasks and add a test-condition mastery statement. Make the result a named task anchor in pathways (R1-02).

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"wpr.reading-to-write","absorb":["rdc.reading-for-writing"]}
- {"kind":"merge","keep":"syn.integrated-tasks","absorb":["tst.integrated-test-tasks"]}

### R1-31 (minor, overlap)

Topics: crt.questioning, rdc.critical-questions

**Finding.** crt.questioning and rdc.critical-questions are both STRATEGIC, B1+–C1 and tagged for all five stages. Both describe a routine of interrogative questions (how do we know, according to whom, what is omitted).

**Recommendation.** Merge, keeping the CRT topic and adding text-specific mastery evidence from the RDC one.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"crt.questioning","absorb":["rdc.critical-questions"]}

### R3-02 (critical, hub)

Topics: rds.main-ideas, rdp.parsing-complex-sentences, rds.fact-opinion-claim, sta.hedging, grm.anticipatory-it, grm.nominalisation

**Finding.** A soft-edge "reading spine" links B2 grammar to almost every foundation literacy topic: voc.high-frequency-base > phr.collocation-awareness > grm.prepositions > grm.np-postmodification > grm.nominalisation (B2) =H=> rdp.parsing-complex-sentences > rds.main-ideas (B1) > rds.fact-opinion-claim > arg.argument-concept > ess.essay-structure / src.* / syn.* / res.*. Removing one edge, rds.main-ideas <- rdp.parsing-complex-sentences, removes 988 transitive pairs, the largest effect of any edge. Under this spine, B1 "identifying main ideas" sits at depth 6, "what counts as an argument" at depth 8 and "essay structure" at depth 9, all behind B2 nominalisation. Two other high-impact edges have the same problem: sta.hedging <- grm.anticipatory-it (809 pairs; it-frame hedges are already covered by phr.bundles-stance, which hard-depends on anticipatory it) and rds.fact-opinion-claim <- sta.hedging (628 pairs). The last one gates a B1 receptive skill behind a B1+–C2 productive one; the natural order is the reverse, and sta.claim-calibration already reaches fact-opinion-claim through crt.evidence-types. The hard edge rdp.parsing-complex-sentences <- grm.nominalisation (B2, not taught at foundation) gates a foundation reading skill. It is also one of the 23 validator warnings.

**Recommendation.** Remove the three spine edges and soften parsing <- nominalisation. Unpacking nominalisations remains part of parsing, but the core skill of finding the main clause is supplied by the new clause-combining edges in R3-10. The two reteach targets that used removed edges (rds.main-ideas "Copies a long sentence…", rds.fact-opinion-claim "Ignores hedges…") are cleared to null by the tool; mention parsing and hedging in their response text instead.

Already applied: 4 change(s) — removed rds.main-ideas <- rdp.parsing-complex-sentences; removed rds.fact-opinion-claim <- sta.hedging; removed sta.hedging <- grm.anticipatory-it; set rdp.parsing-complex-sentences <- grm.nominalisation to soft

### R3-05 (major, direction)

Topics: dig.word-processing, grp.report-conventions, sen.capitalisation, cit.referencing-systems, src.reporting-verbs, rds.writer-stance

**Finding.** Edges that run backwards or are not dependencies: dig.word-processing (B1, a basic tool skill) <- grp.report-conventions (347 transitive pairs; motivation for using styles is not a prerequisite, and it places word processing, accessibility, reference managers and digital collaboration downstream of the essay and argument chain). sen.capitalisation (B1) <- cit.referencing-systems: capitalisation is general and is itself a soft prerequisite of cit.reference-list. src.reporting-verbs (B1+, foundation) <- rds.writer-stance (B2, not foundation): stance-sensitive verb choice is already modelled by sta.evaluating-others-language, which depends on reporting verbs. This edge lies on the 20-topic longest chain.

**Recommendation.** Remove all three. Reteach targets on sen.capitalisation and src.reporting-verbs are cleared to null.

Already applied: 3 change(s) — removed dig.word-processing <- grp.report-conventions; removed sen.capitalisation <- cit.referencing-systems; removed src.reporting-verbs <- rds.writer-stance

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

### R3-10 (major, missing-edge)

Topics: rdp.parsing-complex-sentences, grm.subordination, grm.relative-clauses

**Finding.** rdp.parsing-complex-sentences ("find the main clause, scope and modifiers") has only two prerequisites, noun-phrase premodification and nominalisation, and cannot reach grm.subordination or sen.sentence-types at all. Parsing a long sentence is primarily clause bracketing.

**Recommendation.** Add hard edges from grm.subordination and grm.relative-clauses. Both are B1 and foundation-tagged, so parsing stays teachable at foundation once its nominalisation edge is softened (R3-02).

Already applied: 2 change(s) — added rdp.parsing-complex-sentences <- grm.subordination (hard); added rdp.parsing-complex-sentences <- grm.relative-clauses (hard)

### R3-15 (major, reteach)

Topics: voc.countability-academic-nouns, rdc.critical-response, prn.repair, exm.objective-questions, crt.multiple-perspectives, coh.writer-responsibility, coh.text-patterns, sem.preparation, res.literature-review

**Finding.** The validator requires reteachPrerequisiteId to be a direct prerequisite. This couples the guidance to the edge set. Nine reteach choices rest on edges removed in this review, and at least one spurious edge (rds.main-ideas <- rdp.parsing-complex-sentences) appears to exist mainly to license a remedial pointer. In addition, these reteach choices do not address their difficulty pattern: voc.countability (Greco-Latin plurals) -> core academic vocabulary; rdc.critical-response (opinion unconnected to the text) -> evidence evaluation; prn.repair (not noticing listener confusion) -> code glosses; exm.objective-questions (cue-based tricks) -> generalisation and qualification; crt.multiple-perspectives (essays must not take sides) -> reading writer stance; coh.writer-responsibility (over-explicitness) -> cohesion versus coherence; coh.text-patterns (evaluation element missing) -> cohesion versus coherence; sem.preparation (underestimating reading time) -> notes from reading; res.literature-review ("I am only a student") -> gap and niche. 563 of 1,445 difficulties (39%) have no reteach target.

**Recommendation.** Apply the guidance edits below; each new target is a direct prerequisite after all R3 changes. For the longer term, allow a separate remedialTopicId that may point to any ancestor or related topic, so that guidance needs no longer force graph edges.

Already applied: 9 change(s) — edited guidance voc.countability-academic-nouns difficulties[1].reteachPrerequisiteId; edited guidance rdc.critical-response difficulties[0].reteachPrerequisiteId; edited guidance prn.repair difficulties[2].reteachPrerequisiteId; edited guidance exm.objective-questions difficulties[2].reteachPrerequisiteId; edited guidance crt.multiple-perspectives difficulties[2].reteachPrerequisiteId; edited guidance coh.writer-responsibility difficulties[2].reteachPrerequisiteId; edited guidance coh.text-patterns difficulties[1].reteachPrerequisiteId; edited guidance sem.preparation difficulties[2].reteachPrerequisiteId; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Schema/validator: add optional remedialTopicIds (any topic) distinct from reteachPrerequisiteId (direct prerequisite) so remediation pointers do not force edges."}

### R4-01 (critical, misattribution)

Topics: ess.criticality, rdc.critical-reading

**Finding.** Moore (2013) interviewed 17 academics in history, philosophy and cultural studies only. ess.criticality contextNotes attribute to Moore a contrast between engineering and history ('which differ, for example, between engineering and history (Moore, 2013)'); engineering was not studied. rdc.critical-reading summary says 'academics across disciplines', which overstates a three-discipline humanities sample (crt.concept describes it correctly).

**Recommendation.** Restrict the attribution to the disciplines Moore sampled; do not cite Moore for any science/engineering contrast.

Already applied: 2 change(s) — edited guidance ess.criticality contextNotes; edited guidance rdc.critical-reading summary

### R4-10 (minor, partial)

Topics: rds.annotation

**Finding.** Rationale cites 'the encoding benefits of generative note-taking (Kiewra, 1985)'. Kiewra's review found the encoding effect of note-taking inconsistent and the external-storage (review) effect more reliable. He proposed a depth-of-processing account rather than establishing encoding benefits. ntk.functions-of-notes describes him correctly.

**Recommendation.** Hedge the attribution.

Already applied: 1 change(s) — edited guidance rds.annotation summary

### R4-11 (minor, partial)

Topics: rds.skimming

**Finding.** 'Rayner et al. (2016) show that it trades comprehension for speed: readers lose information in what they skip and are less able to judge what mattered.' Rayner et al. report that skimming costs comprehension except for gist when readers can identify the important parts. The second clause overstates their conclusion.

**Recommendation.** Narrow the wording.

Already applied: 1 change(s) — edited guidance rds.skimming summary

### R4-13 (minor, partial)

Topics: rds.comprehension-monitoring, grm.clause-elements, grm.error-monitoring, tst.test-formats

**Finding.** Four findings are slightly stretched. (a) 'the effects of strategy instruction are variable and depend on adequate language knowledge (Plonsky, 2011)': Plonsky reports variable effects; the language-threshold point comes from the reading-component literature. (b) 'Explicit instruction has measurable benefits for grammatical development (Norris & Ortega, 2000)' leaves out their own caveat that outcome measures favoured explicit knowledge. (c) 'Ellis and Yuan (2004) found that careful online planning was associated with greater accuracy, which supports separating composing from monitoring': the study manipulated unpressured writing time, not separate editing passes. (d) 'Washback ... is real but complex (Alderson & Wall, 1993)': that paper argued washback must be demonstrated rather than assumed.

**Recommendation.** Narrow each attribution.

Already applied: 4 change(s) — edited guidance rds.comprehension-monitoring summary; edited guidance grm.clause-elements summary; edited guidance grm.error-monitoring summary; edited guidance tst.test-formats summary

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

### R5-07 (major, inclusion)

Topics: sem.turn-taking, sem.online-discussion, voc.spelling-conventions, rdp.reading-fluency-rate, edt.proofreading, exm.timed-writing, prs.nonverbal

**Finding.** Disability and neurodiversity are almost absent. Across 557 topics and 557 guidance records there are 0 mentions of dyslexia, autism or ADHD and one of neurodivergence (prs.nonverbal). There is no topic on assistive technology as legitimate academic practice (text-to-speech, dictation, mind-mapping software), on exam adjustments (mentioned once in a reviewNote), or on stammering and participation. Several assessments make particular modes of participation the norm. sem.online-discussion AP: 'a gap is a learner who contributes only in the chat or not at all'; its diagnostic gapResponse: 'Silent, or present only in the chat.' sem.turn-taking AP: 'a gap is near-silence'. Chat-only participation is the accessible mode for many deaf, hard-of-hearing, stammering and neurodivergent students. Spelling, proofreading and timed-reading guidance never considers specific learning differences, which carry over across languages.

**Recommendation.** Accept multiple modes of participation in seminar assessment, add learning-difference notes where they matter most, and add an assistive-technology topic.

Already applied: 5 change(s) — edited topics sem.online-discussion assessmentPrompt; edited guidance sem.online-discussion diagnostic.gapResponse; edited topics sem.turn-taking assessmentPrompt; edited guidance voc.spelling-conventions contextNotes; edited guidance rdp.reading-fluency-rate contextNotes

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"dig.assistive-technology","domainCode":"DIG","name":"Assistive technology and study adjustments","type":"STRATEGIC","scope":"Use assistive and accessibility technologies (text-to-speech, dictation, screen readers, mind-mapping and reading-support tools) and institutional adjustments, such as extra exam time or alternative participation modes, as legitimate parts of academic practice. Know how to request adjustments and how these tools interact with AI and integrity rules."}

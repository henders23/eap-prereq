# Revision packet: 15-socialisation

Domains: ACU (Academic Culture & Expectations), PRG (Academic Pragmatics & Correspondence)

## New topics to author

- `prg.informal-academic-interaction` | SOCIOPRAGMATIC | **Informal academic interaction and networking** — Small talk and relationship-building with peers, lab colleagues and staff around teaching and at departmental events, moving between informal and academic talk. (from R1-21)
- `prg.professional-applications` | GENRE | **Applications and interviews for placements and graduate roles** — Cover letters, competency-based answers and interview talk that translate academic experience into evidence for employers. (from R1-36)

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

### R1-06 (major, stage-level)

Topics: acu.university-structures, acu.roles-address, acu.academic-expectations, lrn.support-services, lrn.time-management, lrn.goal-setting, int.integrity-values, prg.messaging-channels, dig.word-processing, sem.preparation, prs.rehearsal-timing, arg.argument-concept

**Finding.** 261 topics are tagged pgr. 43 of them start at B1 and 29 are expected to be controlled by B2+ (cefrEnd ≤ B2+), which is below the C1 baseline that AUTHORING.md itself gives for doctoral researchers. Examples are acu.university-structures (B1–B2), acu.roles-address (B1–B2), lrn.time-management (B1–B2), lrn.support-services (B1–B2), int.integrity-values (B1–B2+) and arg.argument-concept (B1–B2+). A doctoral writing programme that followed the pathway would spend time on how universities are organised and what an argument is, while R1-05 shows its own core genres are missing. The PGR pathway's ordering also starts with B2-level vocabulary and grammar, not with doctoral genres.

**Recommendation.** Remove pgr from orientation and B1-entry topics where a PGR-specific topic already exists (int.research-integrity, res.writing-productivity, res.supervision, acu.hidden-curriculum). Keep pgr only where the PGR treatment is materially different, and say so in contextNotes.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["acu.university-structures","acu.roles-address","acu.academic-expectations","lrn.support-services","lrn.time-management","lrn.goal-setting","int.integrity-values","prg.messaging-channels","dig.word-processing","sem.preparation","prs.rehearsal-timing","arg.argument-concept"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt"]}

### R1-08 (major, stage-level)

Topics: dse.mathematical-writing, dse.protocols-specifications, sen.sentence-types, rds.scanning, rds.skimming, prg.emails-to-staff

**Finding.** Only one topic (voc.high-frequency-base) starts below B1, and the scale has no A2+ step. International foundation programmes commonly admit students at around IELTS 4.0–5.0, which is roughly A2+ to B1. 186 foundation-tagged topics have cefrEnd C1 or C2, so the 'foundation' pathway reads as the whole undergraduate curriculum. Two DSE topics tagged foundation are degree-level: dse.mathematical-writing (writing proofs) and dse.protocols-specifications (engineering specifications). In addition, 77 foundation topics are CONCEPTUAL, which is a heavy conceptual load for A2+/B1 learners combining EAP with subject modules.

**Recommendation.** Add A2+ to the CEFR scale. Lower cefrStart for the genuine entry topics used at the start of foundation. Remove foundation from degree-level ESAP genres. When stageRoles are introduced, limit foundation 'core' to topics whose cefrStart is B1+ or below.

Already applied: 4 change(s) — sen.sentence-types CEFR -> A2–B2; rds.scanning CEFR -> A2–B2; rds.skimming CEFR -> A2–B2; prg.emails-to-staff CEFR -> A2–B2+

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add 'A2+' to the CEFR scale in AUTHORING.md and the schema."}
- {"kind":"retag-stages","topicIds":["dse.mathematical-writing","dse.protocols-specifications"],"stages":["in-sessional-ug","in-sessional-pgt","pgr"]}

### R1-10 (major, structure)

Topics: acu.academic-literacies, acu.critical-eap, idn.diversity-as-resource, idn.standards-legitimacy, acu.emi-tne

**Finding.** Several topics are stances that should inform the curriculum rather than things learners are taught and assessed on. The IDN domain summary admits that 'several topics are as much curriculum principles for teachers as content for learners'. acu.academic-literacies asks learners to distinguish the academic literacies model from study-skills and socialisation models. acu.critical-eap asks learners to 'examine whose norms EAP teaches'. idn.diversity-as-resource is tagged for all five stages from B1 and is written partly for programmes ('for programmes, it means…'). acu.emi-tne is a delivery context, not a skill. As learner topics they inflate counts, take core slots, and produce mastery evidence that no assessor can observe.

**Recommendation.** Add an 'audience' field (learner | teacher | both). Move curriculum principles into a 'principles' block in domains.json, where they can be cited by guidance. Where a learner-facing skill exists, rescope to it with observable mastery: for example acu.critical-eap becomes making and justifying informed choices about conventions in one's own writing. Model EMI/TNE as a context facet (R1-23).

Already applied: 1 change(s) — edited topics acu.critical-eap undefined

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].audience ('learner' | 'teacher' | 'both'); set 'teacher' for acu.academic-literacies and idn.diversity-as-resource and move their content into domains.json principles for ACU and IDN."}
- {"kind":"retag-stages","topicIds":["idn.standards-legitimacy"],"stages":["in-sessional-pgt","pgr"]}
- {"kind":"other","detail":"Convert acu.emi-tne into a contexts[] facet value ('emi', 'tne') rather than a topic; keep any learner-facing content (planning for EMI lecturers' language expectations) under lrn.content-through-english."}

### R1-21 (major, coverage)

Topics: sem.opinions, phr.spoken-academic-formulas, reg.spoken-vs-written

**Finding.** The framework alignment in coverage.md shows the gap. IELTS Speaking Lexical Resource and Grammatical Range and Accuracy have 0 linked topics. The CEFR scales for Conversation, Informal discussion and Overall oral interaction have 0, and Understanding an interlocutor has 1. No topic covers the grammar of spoken academic English (heads and tails, ellipsis, vague language, spoken complexity) or spoken accuracy priorities. Informal academic interaction (talking to peers and staff before seminars, in labs, at departmental events) is also absent. Only 17 topics (3%) are SOCIOPRAGMATIC.

**Recommendation.** Add a spoken-grammar topic and an informal-interaction topic, and link them to SEM, PRS and PRG.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"grm.spoken-grammar","domainCode":"GRM","name":"Grammar of spoken academic interaction","type":"LINGUISTIC","scope":"Features and accuracy priorities of spoken academic English (heads and tails, ellipsis, vague language, discourse markers, clause chaining) for seminars, tutorials and presentations."}
- {"kind":"add-topic","id":"prg.informal-academic-interaction","domainCode":"PRG","name":"Informal academic interaction and networking","type":"SOCIOPRAGMATIC","scope":"Small talk and relationship-building with peers, lab colleagues and staff around teaching and at departmental events, including topic choice and moving between informal and academic talk."}

### R1-23 (major, structure)

Topics: acu.emi-tne, lrn.content-through-english

**Finding.** The five stages are UK-campus provision types. EMI degree programmes in non-anglophone universities, TNE branch campuses and 2+2 articulation, and Australian/US bridging and direct-entry models are reduced to one CONCEPTUAL topic (acu.emi-tne). The brief explicitly includes these contexts, which have different priorities: content-lecturer expectations, translanguaging, local assessment cultures, and large-class lecture listening without seminar culture. In-sessional UG provision also increasingly serves home and widening-participation students (academic literacies), and the taxonomy does not say which topics assume an L2 learner.

**Recommendation.** Add a contexts[] facet (uk-campus, emi, tne, bridging; l2-specific vs all-students) to topics and pathway templates. Define how each stage maps onto EMI/TNE provision. Add an 'all students' flag for topics usable in in-sessional provision for home students.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].contexts (e.g. ['uk-campus','emi','tne']) and topics[].learnerProfile ('l2' | 'all'); document EMI/TNE stage equivalents in AUTHORING.md."}

### R1-25 (major, usability)

Topics: acu.university-structures, acu.teaching-formats, grm.clause-elements, voc.university-terminology, reg.register-awareness

**Finding.** Pathway order follows all prerequisite edges, and 825 of 1,347 edges are soft. As a result, acu.university-structures is an ancestor of 368 topics, acu.teaching-formats of 326, and grm.clause-elements of 463. Soft edges such as voc.university-terminology ← acu.teaching-formats and reg.register-awareness ← acu.teaching-formats make orientation a gate for language work. The longest chain is 20 topics overall and 17 within the pre-sessional set, which cannot be honoured on a 6-week course. Using hard edges only, the longest chain is 9.

**Recommendation.** Order pathways by hard edges plus unit membership only. Treat soft edges as 'teach nearby' hints. Review soft edges out of ACU and grammar metalanguage topics that create spurious gating.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Change scripts/report.mjs stage-pathway ordering to use hard edges only (max chain 9), and list soft prerequisites as 'related' rather than ordering constraints."}
- {"kind":"other","detail":"Review and drop or soften the outgoing edges from acu.teaching-formats to voc.university-terminology and reg.register-awareness, which make orientation a prerequisite for language topics."}

### R1-28 (minor, overlap)

Topics: ges.genre-concept, acu.discourse-communities

**Finding.** ges.genre-concept is named 'Genre and discourse community' and defines both concepts. acu.discourse-communities defines discourse communities again with Swales' criteria.

**Recommendation.** Narrow ges.genre-concept to genre and leave discourse community to ACU, with a hard edge from ges.genre-concept to acu.discourse-communities.

Already applied: 1 change(s) — edited topics ges.genre-concept undefined

### R1-33 (minor, structure)

Topics: prg.acknowledgements

**Finding.** prg.acknowledgements is a thesis and article part-genre (depth 18, tagged UTR) but sits in Academic Pragmatics & Correspondence beside emails and requests.

**Recommendation.** Move it to RES as res.acknowledgements.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Re-home prg.acknowledgements to domain RES with id res.acknowledgements (keep an alias for the old id)."}

### R1-36 (minor, coverage)

Topics: grp.professional-portfolio, pub.academic-cv-bio

**Finding.** There is no topic on placement or graduate-job applications, competency-based interviews or workplace-transition writing (searches for 'employab', 'job interview' and 'placement' as a work context return nothing relevant). UK in-sessional teams increasingly co-deliver this with careers services, especially for PGT cohorts on one-year programmes.

**Recommendation.** Add one EAP-bounded topic (EOP proper stays out of scope).

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"prg.professional-applications","domainCode":"PRG","name":"Applications and interviews for placements and graduate roles","type":"GENRE","scope":"Cover letters, competency-based application answers and interview talk that translate academic experience into evidence for employers."}

### R3-01 (critical, hub)

Topics: acu.university-structures, acu.teaching-formats, grm.clause-elements, voc.high-frequency-base, voc.word-families-morphology

**Finding.** The derived metrics in topics.json (downstreamCount, depth, centrality) treat soft edges as equivalent to hard ones and compose them transitively. Of 20,047 transitive dependency pairs, only 1,614 (8%) exist through hard edges; 92% are chains of "usually taught first" hints. This produces implausible hubs: acu.university-structures (downstream 368, centrality 0.55, #2) and acu.teaching-formats (326, 0.50, #3) have hard-only downstream reach of 3 and 0. grm.clause-elements reaches 463 of 557 topics but only 81 through hard edges. Any adaptive system that uses these fields for diagnosis (e.g. "probe high-centrality prerequisites first") or gating will over-weight orientation topics and let soft hints block content transitively. The validator also cannot see the level problems in R3-07/R3-08, because it only checks whether a hard prerequisite starts above the dependent's cefrEnd, which never happens.

**Recommendation.** Compute downstreamCount, depth and centrality on hard edges only, or publish hardDownstreamCount and hardDepth alongside them and document that soft edges are one-step ordering hints that should not be composed. Extend validate.mjs to warn when a hard prerequisite's cefrStart is above the dependent's cefrStart, and when a soft prerequisite starts two or more CEFR steps or stages later.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"scripts/build.mjs: compute downstreamCount, depth and centrality on hard edges only (or publish hardDownstreamCount, hardDepth alongside the current values and document that the current values include soft edges). 92% of transitive dependency pairs (18,433 of 20,047) exist only through soft edges, so the current metrics mostly measure soft-edge chaining."}
- {"kind":"other","detail":"scripts/validate.mjs: add a warning for hard edges whose prerequisite cefrStart is above the dependent topic's cefrStart (current check only compares against cefrEnd and never fires), and a warning for soft edges whose prerequisite starts two or more CEFR steps or stages later."}

### R3-03 (major, hub)

Topics: reg.register-awareness, acu.teaching-formats, acu.discourse-communities, acu.university-structures, wpr.audience-purpose, acu.academic-expectations, voc.command-words, voc.university-terminology, lrn.goal-setting

**Finding.** The acu orientation hub creates reach through edges that are not dependencies: reg.register-awareness <- acu.teaching-formats (register theory does not need knowledge of seminar formats; any contrasting situations will do); acu.discourse-communities <- acu.university-structures (the reason itself concedes that administrative units must be "reconceptualised", so they are an analogy, not a prerequisite); wpr.audience-purpose <- acu.academic-expectations (audience and purpose analysis applies to any text); voc.command-words <- voc.university-terminology (the two co-occur in briefs, which is not a dependency); lrn.goal-setting <- acu.academic-expectations (goal setting is a general self-regulation process and is already hard-dependent on lrn.self-regulation). After removal, acu.university-structures falls from 368 to 226 downstream. The remainder flows through crt.concept <- acu.academic-expectations, which is kept as a defensible ordering hint that is also used well as a reteach target. This shows why R3-01, not more deletions, is the fix for residual reach.

**Recommendation.** Remove the five edges. The tool will clear reteach targets on reg.register-awareness, wpr.audience-purpose and voc.command-words to null; none of them had an apt alternative among the remaining prerequisites.

Already applied: 5 change(s) — removed reg.register-awareness <- acu.teaching-formats; removed acu.discourse-communities <- acu.university-structures; removed wpr.audience-purpose <- acu.academic-expectations; removed voc.command-words <- voc.university-terminology; removed lrn.goal-setting <- acu.academic-expectations

### R3-04 (major, direction)

Topics: sem.turn-taking, lis.multi-party-discussion, lis.speaker-stance, idn.diversity-as-resource, acu.academic-literacies, grw.contribution-assessment, grw.meetings, sem.building-on-others

**Finding.** Seminar and group-work topics are over-chained through edges pitched above their dependents. sem.turn-taking (B1+, foundation) hard-depends on lis.multi-party-discussion (B2, not foundation), which hard-depends on lis.speaker-stance. This places basic floor-taking at depth 11, behind a chain that runs through acu.academic-literacies and idn.elf. grw.contribution-assessment (B1+, foundation) sits at depth 16 because of a soft edge from grw.meetings (B2). idn.diversity-as-resource (B1) depends on acu.academic-literacies (B2+, UG/PGT/PGR), a gap of three CEFR steps. Learners need to listen in multi-party talk to build on others, not to take a turn at all.

**Recommendation.** Remove sem.turn-taking <- lis.multi-party-discussion and attach multi-party listening to sem.building-on-others, the topic that actually needs it. Soften lis.multi-party-discussion <- lis.speaker-stance. Remove the two other above-level edges. Before removing the turn-taking edge, repoint its reteach (the difficulty "I wait for a long enough pause to be polite…") to prg.politeness, which fits the pattern better. sem.turn-taking falls from depth 11 to 3, and grw.contribution-assessment from 16 to 8.

Already applied: 6 change(s) — edited guidance sem.turn-taking difficulties[0].reteachPrerequisiteId; removed sem.turn-taking <- lis.multi-party-discussion; set lis.multi-party-discussion <- lis.speaker-stance to soft; removed idn.diversity-as-resource <- acu.academic-literacies; removed grw.contribution-assessment <- grw.meetings; added sem.building-on-others <- lis.multi-party-discussion (soft)

### R3-08 (major, level-stage)

Topics: grm.subject-verb-agreement, grm.np-postmodification, sen.apostrophes-hyphens-dashes, grm.np-premodification, lis.main-points, lis.relevance-markers, sem.opinions, fun.explaining, prs.structure, reg.spoken-vs-written, prs.speaking-from-notes, src.signal-phrases, grm.reporting-structures, grm.reference-pronouns, coh.spoken-signposting, prs.delivery-voice, ess.answering-question, sen.quotation-punctuation, cit.referencing-systems, crt.evidence-types, ges.discussion-essay, ges.explanation-essay, ges.problem-solution-essay, ges.short-answer, sta.evaluating-others-language, res.research-questions, pub.journal-selection, prg.politeness, prg.requests, gai.authorship-voice

**Finding.** 44 hard edges have a prerequisite whose cefrStart is above the dependent's cefrStart. The dependent then cannot be unlocked at its own entry level, which contradicts the topic's CEFR range. The current validator never sees this (R3-01). Examples: grm.subject-verb-agreement (B1) <- grm.np-postmodification (B1+); rds.reference-tracking (B1) <- grm.reference-pronouns (B1+); src.quoting (B1) <- sen.quotation-punctuation (B1+); cit.author-date-in-text and cit.reference-list (B1) <- cit.referencing-systems (B1+); ges.discussion-, explanation- and problem-solution-essay (B1) <- fun.* (B1+); prg.emails-to-staff (B1) <- prg.requests (B1+); pub.cover-letters (B2+) <- pub.journal-selection (C1).

**Recommendation.** Fix each edge by softening it where the prerequisite is enrichment, or by re-levelling one endpoint where the CEFR range was mis-set: lower basic prerequisites (pronoun reference, quotation punctuation, referencing systems, evidence types, politeness, requests, research questions, journal selection, evaluating others' language, spoken signposting) or raise composite dependents (the four B1 essay genres and short answer, answering the question, delivery and voice, AI authorship and voice). With R3-07, every hard edge then satisfies prerequisite cefrStart <= dependent cefrStart.

Already applied: 24 change(s) — set grm.subject-verb-agreement <- grm.np-postmodification to soft; set sen.apostrophes-hyphens-dashes <- grm.np-premodification to soft; set lis.main-points <- lis.relevance-markers to soft; set sem.opinions <- fun.explaining to soft; set prs.structure <- reg.spoken-vs-written to soft; set prs.speaking-from-notes <- reg.spoken-vs-written to soft; set src.signal-phrases <- grm.reporting-structures to soft; grm.reference-pronouns CEFR -> B1–B2+; …

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

### R5-13 (major, balance)

Topics: sem.turn-taking, res.supervision, grw.inclusive-collaboration, acu.hidden-curriculum

**Finding.** The difficulty schema puts every problem inside the learner. The seven kinds (L1-transfer, developmental, conceptual, prior-schooling, overgeneralisation, performance, affective) have no category for barriers caused by others or by institutions. So sem.turn-taking[2], 'Entry attempts are ignored or talked over because the learner has been positioned as less competent', is coded affective, as though it were the learner's feeling. Likewise res.supervision[0] codes a supervisor's ambiguous hedged feedback as the student's L1-transfer problem. The guidance format has a difficulties array but nothing for learner resources. Only 26 of 210 prior-schooling responses acknowledge the value of earlier practice, and only 54 of 557 guidance records mention learner assets in their summary or contextNotes. Prior education therefore appears almost only as a source of problems.

**Recommendation.** Add a difficulty kind for positioning and institutional causes, and an optional learnerResources field to the guidance schema. Correct the misattributed items now.

Already applied: 2 change(s) — edited guidance res.supervision difficulties[0].kind; edited guidance res.supervision difficulties[0].response

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"AUTHORING.md section 4 and schema: add difficulty kind 'positioning' (barriers created by peers, staff, task or assessment design, e.g. being talked over, unclear criteria, inaccessible formats) and recode sem.turn-taking[2] and grw.inclusive-collaboration[0] to it. Add an optional guidance field 'learnerResources' (1–3 items: prior knowledge, languages or practices that transfer) and populate it first for prior-schooling-heavy topics."}

### R5-14 (major, coverage)

Topics: idn.standards-legitimacy, cit.citation-functions, inf.source-evaluation, acu.critical-eap

**Finding.** Decolonising curricula, racialisation and the politics of whose knowledge counts are missing. The dataset has 0 mentions of race, racialisation, raciolinguistics, colonial or decolonising, and none of epistemic injustice or the Global South. Canagarajah's centre/periphery argument appears only in PGR-oriented topics. No topic in CIT or INF asks learners to consider whose scholarship is cited, indexed or treated as 'authoritative', even though source evaluation teaches them to favour indexed, high-impact journals. idn.standards-legitimacy discusses native-speakerism without saying that judgements of 'nativeness' and 'accent' are often racialised.

**Recommendation.** Name racialised language judgements in idn.standards-legitimacy, proposing Flores and Rosa (2015) under proposedReferences: Flores, N., & Rosa, J. (2015). Undoing appropriateness: Raciolinguistic ideologies and language diversity in education. Harvard Educational Review, 85(2), 149–171. Verify before use. Add a citation-politics topic linked to inf.source-evaluation.

Already applied: 1 change(s) — edited topics idn.standards-legitimacy description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"cit.citation-politics","domainCode":"CIT","name":"Whose knowledge is cited","type":"CONCEPTUAL","scope":"Recognise that citation and indexing practices shape whose knowledge becomes visible, including the dominance of English-language, Global North and highly indexed sources. Evaluate the range of perspectives in a reference list, and include relevant scholarship from other regions, languages and communities while still meeting the assignment's quality criteria."}

### R5-20 (minor, inclusion)

Topics: acu.academic-literacies, idn.academic-identity, crt.reflexivity

**Finding.** Some mastery evidence asks learners to disclose identity conflict as proof of competence. acu.academic-literacies masteryEvidence[2]: 'Identifies a point in their own writing where institutional conventions and their preferred identity or voice were in tension…'. idn.academic-identity masteryEvidence[3] is similar. crt.reflexivity's guidance protects sensitive disclosure, but these topics do not. Learners who are refugees, LGBTQ+, or from contexts where such disclosure is risky need an alternative route to show mastery.

**Recommendation.** Offer a case-based or published-account alternative.

Already applied: 1 change(s) — edited topics acu.academic-literacies masteryEvidence[2]

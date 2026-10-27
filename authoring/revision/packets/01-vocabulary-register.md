# Revision packet: 01-vocabulary-register

Domains: PHR (Phraseology & Formulaic Language), REG (Register & Academic Style), VOC (Academic Vocabulary)

## New topics to author

None.


## Merges affecting your domains

None.


## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-02 (critical, usability)

Topics: grm.clause-elements, voc.high-frequency-base, tst.presessional-progression

**Finding.** reports/stage-pathways.md gives the pre-sessional as one undifferentiated list of 477 topics, grouped by strand and topologically sorted within each strand. Academic Language comes first with 79 topics, so a director reading top to bottom meets grammar and vocabulary metalanguage before any integrated task. A 10-week pre-sessional of about 20–25 contact hours a week has 200–250 hours, which is roughly 25–30 minutes per topic before tutorials, assessment or induction. Nothing tells a director what to keep for 6 weeks (B2+ entry) versus 12 weeks (B1+ entry). The dataset has no time or weight estimate per topic, no core/optional flag, and no link from topics to the assessed tasks around which UK pre-sessionals are actually built (extended source-based essay or project, seminar, presentation, reading-into-writing exam, reflective portfolio; see tst.presessional-progression). There are also no integrated units or clusters. As it stands, the pathway is an index, not a syllabus.

**Recommendation.** Add a pathways layer above the topic graph. (a) Give each topic an indicative teaching-time band (e.g. <1h, 1–3h, 3–6h, ongoing). (b) Define assessed-task anchors (pre-sessional extended project, seminar, presentation, integrated reading-into-writing exam, listening-into-note-making) and map core topics to them. (c) Publish worked templates for 6-, 10- and 12-week pre-sessionals by entry band and destination, as week-by-week integrated units of about 60–90 core topics each. (d) In stage-pathways.md, order by unit and hard prerequisite rather than by strand.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].teachingTime ('<1h' | '1-3h' | '3-6h' | 'ongoing') and topics[].assessedIn (array of task-anchor ids)."}
- {"kind":"other","detail":"Add data/pathways.json defining task anchors and course templates: pre-sessional-6wk-B2plus-PG, pre-sessional-10wk-B2-PG, pre-sessional-12wk-B1plus-UG, foundation-EAP-module-2-terms, in-sessional-PGT-dissertation-series. Each template lists ordered units of core topic ids."}
- {"kind":"other","detail":"Regenerate reports/stage-pathways.md by unit/anchor and hard-edge order, showing only core topics plus an 'optional extension' list per unit."}

### R1-03 (critical, stage-level)

Topics: res.introductions-cars, res.gap-niche, res.research-questions, res.research-proposal, par.peel, par.paragraph-unit, ess.essay-structure, voc.high-frequency-base

**Finding.** The single 'pre-sessional' stage covers B1 learners heading for a first degree and B2+ learners heading for master's study, on courses of anything from 5 to 40+ weeks. Within that one tag, par.peel, par.paragraph-unit and voc.high-frequency-base (A2–B1+) sit beside res.introductions-cars, res.gap-niche and res.research-proposal (B2+–C2). 166 pre-sessional topics start at B1 and 122 start at B2 or above. The RES domain's own stageEmphasis begins 'On postgraduate pre-sessionals…', which concedes the problem. In many UK institutions most pre-sessional students progress to PGT, and their syllabus (critical reading of research articles, a source-based project or dissertation-proposal genre, seminar argument) differs materially from a UG-entry pre-sessional.

**Recommendation.** Split the stage into pre-sessional-ug and pre-sessional-pg, or add a destination qualifier, and retag. Research-writing and proposal topics should be PG-only. Paragraph scaffolds (PEEL, paragraph-unit) should be core for UG-entry and long courses only. Record course length or entry band in the pathway templates (R1-02), not in the topic.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Replace stage 'pre-sessional' with 'pre-sessional-ug' and 'pre-sessional-pg' (update AUTHORING.md stage table, schema enum and reports)."}
- {"kind":"other","detail":"Restrict to pre-sessional-pg (remove from pre-sessional-ug): res.introductions-cars, res.gap-niche, res.research-questions, res.research-proposal, res.imrad, rds.research-article-navigation, ges.literature-review-assignment, grp.project-proposal, phr.bundles-research-oriented."}
- {"kind":"other","detail":"Mark as core for pre-sessional-ug and at most 'revisit' for pre-sessional-pg: par.peel, par.paragraph-unit, par.concluding-sentences, ess.essay-structure, sen.sentence-types, voc.high-frequency-base, ges.discussion-essay."}

### R1-13 (major, overlap)

Topics: wpr.task-analysis, exm.question-analysis, ess.answering-question, voc.command-words

**Finding.** wpr.task-analysis (unpack a brief: command words, topic, limits, genre, criteria), exm.question-analysis (identify command word, topic, focus and limiting words), ess.answering-question (keep the essay relevant to the command words, focus and limits) and voc.command-words all teach the same procedure. Three of them have identical stage tags (FPUT). Teachers will teach it three times, and learners meet three mastery profiles for one skill.

**Recommendation.** Keep wpr.task-analysis as the single procedure, with exam and coursework variants in its mastery evidence. Move time allocation by marks to exm.timed-writing. Keep voc.command-words as the lexical resource.

Already applied: 1 change(s) — edited topics wpr.task-analysis undefined

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"wpr.task-analysis","absorb":["exm.question-analysis","ess.answering-question"]}

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

### R1-25 (major, usability)

Topics: acu.university-structures, acu.teaching-formats, grm.clause-elements, voc.university-terminology, reg.register-awareness

**Finding.** Pathway order follows all prerequisite edges, and 825 of 1,347 edges are soft. As a result, acu.university-structures is an ancestor of 368 topics, acu.teaching-formats of 326, and grm.clause-elements of 463. Soft edges such as voc.university-terminology ← acu.teaching-formats and reg.register-awareness ← acu.teaching-formats make orientation a gate for language work. The longest chain is 20 topics overall and 17 within the pre-sessional set, which cannot be honoured on a 6-week course. Using hard edges only, the longest chain is 9.

**Recommendation.** Order pathways by hard edges plus unit membership only. Treat soft edges as 'teach nearby' hints. Review soft edges out of ACU and grammar metalanguage topics that create spurious gating.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Change scripts/report.mjs stage-pathway ordering to use hard edges only (max chain 9), and list soft prerequisites as 'related' rather than ordering constraints."}
- {"kind":"other","detail":"Review and drop or soften the outgoing edges from acu.teaching-formats to voc.university-terminology and reg.register-awareness, which make orientation a prerequisite for language topics."}

### R2-01 (major, attribution)

Topics: phr.bundles-research-oriented, phr.bundles-text-oriented

**Finding.** The research-oriented bundle topic is presented in Hyland's (2008) functional taxonomy, but two of its five example bundles, 'in the case of' and 'on the basis of', are text-oriented framing signals in that same taxonomy (Hyland 2008 lists them with 'with respect to the', 'in the presence of' and 'with the exception of'). The error carries into the assessment prompt and the diagnostic, so learners would be tested on misclassified items. Hyland's research-oriented subcategory 'topic' is also missing from the description.

**Recommendation.** Replace the two framing bundles with research-oriented ones from Hyland (2008), for example 'the role of the', 'the use of the', 'a wide range of', 'one of the most' and 'at the beginning of'. Add 'topic' to the subcategory list, and list the two moved bundles as framing signals in phr.bundles-text-oriented.

Already applied: 5 change(s) — edited topics phr.bundles-research-oriented description; edited topics phr.bundles-research-oriented assessmentPrompt; edited guidance phr.bundles-research-oriented diagnostic.task; edited guidance phr.bundles-research-oriented diagnostic.strongResponse; edited topics phr.bundles-text-oriented description

### R2-08 (major, attribution)

Topics: voc.deliberate-learning-systems

**Finding.** The record recommends review 'at expanding intervals' and says Cepeda et al. (2006) and Roediger and Karpicke (2006) explain why 'retrieval and expanding intervals outperform rereading'. Cepeda et al. is a meta-analysis of distributed versus massed practice. It does not show that expanding schedules beat equally spaced ones, and direct comparisons are mixed or favour equal spacing (Karpicke & Roediger 2007; Karpicke & Bauernschmidt 2011; Kang et al. 2014). Expanding intervals are a reasonable software default, but the cited works do not support them as a research-backed requirement.

**Recommendation.** Say 'spaced' rather than 'expanding', state that the evidence on schedule shape is mixed, and keep expanding intervals as an acceptable implementation.

Already applied: 3 change(s) — edited topics voc.deliberate-learning-systems description; edited topics voc.deliberate-learning-systems masteryEvidence[3]; edited guidance voc.deliberate-learning-systems summary

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Optionally add Karpicke, J. D., & Roediger, H. L. (2007). Expanding retrieval practice promotes short-term retention, but equally spaced retrieval enhances long-term retention. Journal of Experimental Psychology: Learning, Memory, and Cognition, 33(4), 704–719."}

### R2-13 (minor, attribution)

Topics: grm.anticipatory-it, grm.linking-adverbial-placement, grm.reference-pronouns, sen.sentence-boundaries, voc.abstract-shell-nouns, voc.technical-terminology, voc.multiword-verbs-register, voc.receptive-to-productive, voc.word-grammar-patterns, phr.academic-collocations, phr.phrasebank-use, reg.non-specialist-audiences, coh.linking-adverbials, coh.signalling-nouns, sta.hedging, sta.engagement-markers, sta.code-glosses, fun.exemplifying, lis.word-segmentation, lis.accent-variation, lis.multimodal-lectures, lis.recorded-lectures, lis.metacognitive-listening, prn.intelligibility, prn.word-stress, prn.thought-groups, prn.intonation, prn.segmental-priorities, prn.fluency, prn.repair

**Finding.** About 30 guidance records in scope still describe references as 'proposed' or 'not yet in the bibliography' (for example hylandmilton1997, rubin1992, hewings2002, grangertyson1996, graycortes2011, murphykandil2004, field2003segmentation, fahnestock1986), but references.json marks every one as present and most as web-verified. Two user-facing summaries print the hedge in running text: grm.anticipatory-it '(Hewings & Hewings, 2002, proposed)' and grm.linking-adverbial-placement '(Granger, 1998; Granger & Tyson, 1996, proposed)'. Two review notes ask authors to 'check' whether Chang and Swales (1999) examined unattended 'this' and sentence-initial conjunctions. They did: both are among the ten informal features in that study.

**Recommendation.** Remove 'proposed' from the summaries and the stale review notes, and resolve the two Chang and Swales notes.

Already applied: 4 change(s) — edited guidance grm.anticipatory-it summary; edited guidance grm.linking-adverbial-placement summary; edited guidance grm.reference-pronouns reviewNotes[0]; edited guidance sen.sentence-boundaries reviewNotes[0]

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Remove the 'X is a proposed reference' sentences from reviewNotes in the topics listed in topicIds wherever references.json records the key as present (web-verified or curator-checked)."}

### R2-15 (minor, myth)

Topics: voc.spelling-conventions

**Finding.** The assessment asks learners to make a paragraph 'consistently British … (including -ise/-ize)', which implies that -ize is American. Oxford spelling (-ize with -yse: organize, analyse) is standard British usage (OUP, Nature, many UK journals). Only -yze (analyze) is exclusively American. A learner using Oxford spelling correctly would be marked wrong.

**Recommendation.** State that either -ise or -ize is acceptable in British English if applied consistently, and that -yze is American only.

Already applied: 1 change(s) — edited topics voc.spelling-conventions assessmentPrompt

### R2-16 (minor, myth)

Topics: phr.bundles-text-oriented

**Finding.** DIF[0]'s response, 'Teach the paired frame on the one hand … on the other hand', suggests that the second half needs the first. In expert prose, 'on the other hand' most often occurs without 'on the one hand'. The construct being taught is that it introduces a contrasting alternative or perspective.

**Recommendation.** Present the paired frame as optional.

Already applied: 1 change(s) — edited guidance phr.bundles-text-oriented difficulties[0].response

### R2-17 (minor, assessment)

Topics: phr.verb-noun-collocation-accuracy

**Finding.** The diagnostic sentence 'how temperature raises crop yields' is grammatical: transitive 'raise' with 'temperature' as agent is correct. So the item tests nothing about the raise/rise contrast it is meant to target, and the strong response ('checks whether raises or increases with the right subject is meant') is muddled. DIF[2]'s example 'prices were raised by 5% used to mean prices went up' is also not an error. It implies an agent, which may or may not be intended.

**Recommendation.** Put a genuine raise/rise error into the diagnostic and rewrite the strong response and DIF[2] example to match.

Already applied: 3 change(s) — edited guidance phr.verb-noun-collocation-accuracy diagnostic.task; edited guidance phr.verb-noun-collocation-accuracy diagnostic.strongResponse; edited guidance phr.verb-noun-collocation-accuracy difficulties[2].revealedBy

### R2-18 (minor, accuracy)

Topics: voc.word-grammar-patterns

**Finding.** The assessment prompt lists 'aim at improving' against 'aim to improve' among items mixing errors and correct uses, which implies the first is an error. 'Aim at + -ing' is a standard, dictionary-attested pattern.

**Recommendation.** Present both as acceptable, and substitute a genuine error.

Already applied: 1 change(s) — edited topics voc.word-grammar-patterns assessmentPrompt

### R2-20 (minor, accuracy)

Topics: voc.precision-near-synonyms

**Finding.** The strong diagnostic response describes 'impact' as 'noun, and verb in some varieties'. Verbal 'impact' is common in both British and American English. The issue is editorial dislike, not variety.

**Recommendation.** Correct the gloss.

Already applied: 1 change(s) — edited guidance voc.precision-near-synonyms diagnostic.strongResponse

### R2-21 (minor, accuracy)

Topics: voc.affixes-roots

**Finding.** (1) 'disinterested' is used as the model 'misleading' word, but 'not interested', the reading from its parts, is a long-attested sense still in wide use. The item tests a contested usage judgement, not word-part reliability. (2) bio-, geo- and -graph- are combining forms rather than roots in the strict sense.

**Recommendation.** Use an unambiguous misleading item such as 'inflammable' in the assessment, and say 'roots and combining forms'.

Already applied: 2 change(s) — edited topics voc.affixes-roots assessmentPrompt; edited topics voc.affixes-roots description

### R2-22 (minor, accuracy)

Topics: voc.word-families-morphology

**Finding.** (1) DIF[2] gives 'criticalness' as a non-existent word coined by analogy, but it is in major dictionaries. (2) The topic covers derivation only. Conversion (zero derivation) is just as productive in academic lexis (a study / to study; an impact / to impact; a focus / to focus), and some noun–verb pairs differ only in stress (an INcrease / to inCREASE), which links to prn.word-stress.

**Recommendation.** Replace the example and add conversion to the description.

Already applied: 2 change(s) — edited guidance voc.word-families-morphology difficulties[2].revealedBy; edited topics voc.word-families-morphology description

### R2-23 (minor, accuracy)

Topics: voc.multiword-verbs-register, fun.classifying

**Finding.** voc.multiword-verbs-register DIF[0] gives 'the sample was comprised of' as a 'contorted replacement' for a phrasal verb. 'Comprised of' is itself a multi-word construction and is a usage-panel controversy, not a register problem. fun.classifying DIF[1] handles comprise differently, accepting 'be composed of' and rejecting 'comprises of'. The two records give inconsistent advice.

**Recommendation.** Use an unambiguous over-formalisation example and treat 'is comprised of' consistently: contested, avoided by some style guides.

Already applied: 1 change(s) — edited guidance voc.multiword-verbs-register difficulties[0].revealedBy

### R2-36 (minor, accuracy)

Topics: voc.evaluative-lexis

**Finding.** The summary gives the Appraisal categories as 'appreciation of things, judgement of people, graduation of strength'. It leaves out affect, the third attitude subsystem, which sta.attitude-markers uses. It also reduces graduation to strength (force) and omits focus (sharpening or softening category boundaries: a kind of, a true…), which is relevant to hedging.

**Recommendation.** Give the full categories.

Already applied: 1 change(s) — edited guidance voc.evaluative-lexis summary

### R2-40 (minor, coverage)

Topics: phr.bundles-research-oriented, phr.spoken-academic-formulas

**Finding.** The bundle topics use only Hyland's functional taxonomy. They leave out Biber, Conrad and Cortes's (2004) structural finding that academic-prose bundles are mostly noun-phrase and prepositional-phrase based ('the nature of the', 'in the case of'), while classroom speech favours verb-phrase and clause-based bundles ('if you look at', 'what I want to do is'). This mirrors the phrasal versus clausal contrast taught in GRM and REG, and it explains why bundles end in 'of the'.

**Recommendation.** Add the structural point to the summary.

Already applied: 1 change(s) — edited guidance phr.bundles-research-oriented summary

### R2-43 (minor, attribution)

Topics: voc.core-academic-vocabulary

**Finding.** The summary says the AWL and AVL 'each cover a meaningful share of academic text' without figures. The research checklist asks for these, and teachers will quote figures from somewhere. The sources give about 10% of the Academic Corpus for the AWL (Coxhead 2000) and about 14% of academic text for the AVL core (Gardner & Davies 2014). Note that these use different counting units (families versus lemmas) and different corpora.

**Recommendation.** Give the figures with the unit and corpus caveat.

Already applied: 1 change(s) — edited guidance voc.core-academic-vocabulary summary

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

### R4-02 (critical, misattribution)

Topics: phr.corpus-consultation

**Finding.** Charles (2007) combined top-down analysis of rhetorical functions with concordance searches of teacher-compiled thesis corpora (politics/IR and materials science). Students building their own discipline-specific 'do-it-yourself' corpora is the subject of Charles's later work (2012, ESP 31(2); 2014, ESP 35), not the 2007 article. Summary: 'Charles shows how graduate writers can build small corpora of theses in their own field'; activities[1].rationale: 'Charles describes graduate writers building their own corpora'.

**Recommendation.** Describe what the 2007 article reports; if DIY corpus-building is to stay, add Charles (2012) as a reference.

Already applied: 2 change(s) — edited guidance phr.corpus-consultation summary; edited guidance phr.corpus-consultation activities[1].rationale

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add to references.json: Charles, M. (2012). 'Proper vocabulary and juicy collocations': EAP students evaluate do-it-yourself corpus-building. English for Specific Purposes, 31(2), 93–102 (verify before use), and cite it in phr.corpus-consultation activities[1]."}

### R4-03 (critical, misattribution)

Topics: voc.deliberate-learning-systems

**Finding.** The summary says the testing effect and distributed-practice research 'explains why retrieval and expanding intervals outperform rereading'. Roediger & Karpicke (2006) compare retrieval with restudy. Cepeda et al. (2006) compare spaced with massed practice and model the optimal gap relative to the retention interval. Neither shows that expanding schedules beat rereading, and the evidence on expanding versus equal spacing is mixed. This misdescribes a landmark finding and builds a popular flashcard-app claim into the text.

**Recommendation.** State the two findings separately and drop 'expanding'.

### R4-06 (major, overclaim)

Topics: cit.author-date-in-text, reg.vague-overgeneralised, res.research-questions, crt.problem-solving

**Finding.** Several summaries present untested teaching recommendations as established ('works best', 'most likely to improve') right next to descriptive or theoretical citations, so readers will take the citation as the evidence. Examples: 'Instruction works best when formatting is linked to the integral/non-integral distinction (Swales, 1990; Thompson & Tribble, 2001) rather than taught as an isolated rule list'; 'Teaching works best by asking the reader's questions' (after citing Hinkel's and Aull & Lancaster's descriptive corpus work); 'Teaching works best through repeated revision of the learner's own questions'; 'are the two moves most likely to improve student work'. None of the cited works tests the instruction.

**Recommendation.** Mark these as practitioner proposals.

Already applied: 4 change(s) — edited guidance cit.author-date-in-text summary; edited guidance reg.vague-overgeneralised summary; edited guidance res.research-questions summary; edited guidance crt.problem-solving summary

### R4-12 (minor, partial)

Topics: voc.word-families-morphology

**Finding.** Bauer & Nation (1993) propose a graded scale of affix levels based on frequency, productivity and regularity. The text says the levels 'show that a limited set of regular, frequent affixes accounts for most family relationships' and that the framework 'shows that regular affixation makes word families learnable as sets'. These present the framework's design assumptions as demonstrated findings.

**Recommendation.** Describe the levels as a proposal or assumption.

Already applied: 2 change(s) — edited guidance voc.word-families-morphology summary; edited guidance voc.word-families-morphology activities[0].rationale

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

### R6-11 (major, framework-mapping)

Topics: dat.data-commentary, sen.clarity-end-weight, sta.claim-calibration, phr.bundles-research-oriented, phr.spoken-academic-formulas, tst.test-formats

**Finding.** IELTS criterion links (97 in all) are partly decorative and in one case contradict the topic. dat.data-commentary's description says data commentary 'differs from description-only tasks such as IELTS Writing Task 1', yet it links to ielts:wr1.task-achievement. sen.clarity-end-weight is linked to IELTS although it has no foundation or pre-sessional stage. 27 links sit on topics tagged pgr, several at B2–C2 (sta.claim-calibration -> Task 2 Task Response; phr.bundles-research-oriented -> Lexical Resource), where IELTS performance is irrelevant. Coverage is also uneven: the Writing Lexical Resource and Grammatical Range and Accuracy criteria carry 33 links, while their Speaking counterparts carry none, although spoken-formula and spoken-stance topics exist. Because IELTS is the only test framework, the links privilege one test; tst.test-formats links three IELTS components, which implies the topic is IELTS-specific.

**Recommendation.** Adopt a rule: link IELTS criteria only from topics tagged foundation or pre-sessional whose primary use includes test preparation or transition, and never from topics whose content contrasts with the test task. Apply the removals below. Add the Speaking Lexical Resource link where spoken lexis is taught. In the frameworks note, state that IELTS is included as a reference criterion set, not as a preferred test.

Already applied: 5 change(s) — dat.data-commentary - framework ielts:wr1.task-achievement; sen.clarity-end-weight - framework ielts:wr.coherence-cohesion; sta.claim-calibration - framework ielts:wr2.task-response; phr.bundles-research-oriented - framework ielts:wr.lexical-resource; phr.spoken-academic-formulas + framework ielts:sp.lexical-resource

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Audit the remaining 23 IELTS links on pgr-tagged topics against the rule above, and add a sentence to frameworks.json 'note' that IELTS criteria are included as a reference set and that links do not endorse any test."}

# Revision packet: 07-writing

Domains: EDT (Revising, Editing & Proofreading), ESS (Essay Construction), PAR (Paragraph Development), WPR (Writing Process)

## New topics to author

None.


## Merges affecting your domains

- `edt.editing-tools` was merged into `dig.automated-feedback-tools` (R1-17). The absorbed record is in authoring/revision/absorbed/edt.editing-tools.json. The survivor belongs to another group; no action needed except updating any references in your text.
- `ess.answering-question` was merged into `wpr.task-analysis` (R1-13). The absorbed record is in authoring/revision/absorbed/ess.answering-question.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `ess.essay-types` was merged into `ges.genre-families` (R1-16). The absorbed record is in authoring/revision/absorbed/ess.essay-types.json. The survivor belongs to another group; no action needed except updating any references in your text.
- `exm.question-analysis` was merged into `wpr.task-analysis` (R1-13). The absorbed record is in authoring/revision/absorbed/exm.question-analysis.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `rdc.reading-for-writing` was merged into `wpr.reading-to-write` (R1-14). The absorbed record is in authoring/revision/absorbed/rdc.reading-for-writing.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.

## Review findings touching your domains

Mechanical changes listed as applied are already in your strand file. Address every remaining recommendation that concerns your topics, or record why not in the topic's guidance reviewNotes (prefix "Review response:").

### R1-03 (critical, stage-level)

Topics: res.introductions-cars, res.gap-niche, res.research-questions, res.research-proposal, par.peel, par.paragraph-unit, ess.essay-structure, voc.high-frequency-base

**Finding.** The single 'pre-sessional' stage covers B1 learners heading for a first degree and B2+ learners heading for master's study, on courses of anything from 5 to 40+ weeks. Within that one tag, par.peel, par.paragraph-unit and voc.high-frequency-base (A2–B1+) sit beside res.introductions-cars, res.gap-niche and res.research-proposal (B2+–C2). 166 pre-sessional topics start at B1 and 122 start at B2 or above. The RES domain's own stageEmphasis begins 'On postgraduate pre-sessionals…', which concedes the problem. In many UK institutions most pre-sessional students progress to PGT, and their syllabus (critical reading of research articles, a source-based project or dissertation-proposal genre, seminar argument) differs materially from a UG-entry pre-sessional.

**Recommendation.** Split the stage into pre-sessional-ug and pre-sessional-pg, or add a destination qualifier, and retag. Research-writing and proposal topics should be PG-only. Paragraph scaffolds (PEEL, paragraph-unit) should be core for UG-entry and long courses only. Record course length or entry band in the pathway templates (R1-02), not in the topic.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Replace stage 'pre-sessional' with 'pre-sessional-ug' and 'pre-sessional-pg' (update AUTHORING.md stage table, schema enum and reports)."}
- {"kind":"other","detail":"Restrict to pre-sessional-pg (remove from pre-sessional-ug): res.introductions-cars, res.gap-niche, res.research-questions, res.research-proposal, res.imrad, rds.research-article-navigation, ges.literature-review-assignment, grp.project-proposal, phr.bundles-research-oriented."}
- {"kind":"other","detail":"Mark as core for pre-sessional-ug and at most 'revisit' for pre-sessional-pg: par.peel, par.paragraph-unit, par.concluding-sentences, ess.essay-structure, sen.sentence-types, voc.high-frequency-base, ges.discussion-essay."}

### R1-09 (major, stage-level)

Topics: ess.headings, sem.debate, grm.articles, sta.hedging

**Finding.** 505 of 557 topics (91%) span two or more steps of a seven-step scale, and 39 span four. 335 (60%) end at C1, and 361 (65%) start at B1 or B1+. With ranges this uniform, cefrStart/cefrEnd cannot tell a 12-week B1+ cohort's syllabus from a 6-week B2+ cohort's. Some ranges also contradict the stage tags: ess.headings starts at B2 although grp.report-conventions (B1+) and foundation report writing need headings, and sem.debate starts at B2 although it is tagged foundation, where debate is a staple B1+ activity.

**Recommendation.** Add a single 'coreBand' per topic: the band where explicit teaching pays off most, used for course filtering. Keep cefrStart/cefrEnd as the outer envelope. Calibrate a sample against CEFR Companion Volume scales and the BALEAP Can Do Framework with practitioner panels, and correct the obvious inconsistencies now.

Already applied: 2 change(s) — ess.headings CEFR -> B1+–B2+; sem.debate CEFR -> B1+–C1

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].coreBand (single CEFR step) and use it, not the full range, for pathway filtering."}

### R1-13 (major, overlap)

Topics: wpr.task-analysis, exm.question-analysis, ess.answering-question, voc.command-words

**Finding.** wpr.task-analysis (unpack a brief: command words, topic, limits, genre, criteria), exm.question-analysis (identify command word, topic, focus and limiting words), ess.answering-question (keep the essay relevant to the command words, focus and limits) and voc.command-words all teach the same procedure. Three of them have identical stage tags (FPUT). Teachers will teach it three times, and learners meet three mastery profiles for one skill.

**Recommendation.** Keep wpr.task-analysis as the single procedure, with exam and coursework variants in its mastery evidence. Move time allocation by marks to exm.timed-writing. Keep voc.command-words as the lexical resource.

Already applied: 1 change(s) — edited topics wpr.task-analysis undefined

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"wpr.task-analysis","absorb":["exm.question-analysis","ess.answering-question"]}

### R1-14 (major, overlap)

Topics: rdc.reading-for-writing, wpr.reading-to-write, syn.integrated-tasks, tst.integrated-test-tasks

**Finding.** rdc.reading-for-writing (select, read and organise sources around a writing task) and wpr.reading-to-write (move from reading and notes to one's own text) are two halves of one discourse-synthesis process. Both are FPUT, B1+–C1. syn.integrated-tasks and tst.integrated-test-tasks describe the same reading/listening-into-writing task type; the only difference is that one is a test. This is the central integrated skill of most pre-sessionals, and scattering it across four domains (RDC, WPR, SYN, TST) hides it.

**Recommendation.** Merge rdc.reading-for-writing into wpr.reading-to-write as one end-to-end procedure. Merge tst.integrated-test-tasks into syn.integrated-tasks and add a test-condition mastery statement. Make the result a named task anchor in pathways (R1-02).

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"wpr.reading-to-write","absorb":["rdc.reading-for-writing"]}
- {"kind":"merge","keep":"syn.integrated-tasks","absorb":["tst.integrated-test-tasks"]}

### R1-16 (major, overlap)

Topics: ess.essay-types, ges.genre-families, ges.compare-contrast-essay, ges.explanation-essay, ges.problem-solution-essay, ges.discussion-essay, fun.comparing-contrasting, fun.cause-effect, fun.problem-solution

**Finding.** ess.essay-types lists argumentative, discussion, explanation/cause–effect, compare–contrast and problem–solution essays. GES then has a separate GENRE topic for each of those five, and FUN has the matching rhetorical functions. This is the IELTS/coursebook essay taxonomy. Nesi and Gardner's genre families, which the dataset itself cites 19 times, treat these as patterns inside the essay family, not as separate genres. The compare–contrast, explanation and problem–solution essays add little beyond FUN plus ess.body-organisation.

**Recommendation.** Fold ess.essay-types into ges.genre-families. Collapse the three pattern essays into one 'expository essays organised by rhetorical pattern' topic that depends on the FUN functions. Keep the argumentative and discussion essays as distinct genres.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"ges.genre-families","absorb":["ess.essay-types"]}
- {"kind":"add-topic","id":"ges.expository-essays","domainCode":"GES","name":"Expository essays organised by rhetorical pattern","type":"GENRE","scope":"Essays organised mainly by comparison, cause–effect or problem–solution, treated as patterns within the essay family and built from the FUN functions."}
- {"kind":"merge","keep":"ges.expository-essays","absorb":["ges.compare-contrast-essay","ges.explanation-essay","ges.problem-solution-essay"]}

### R1-17 (major, overlap)

Topics: edt.editing-tools, dig.automated-feedback-tools, gai.language-support, gai.prompting-for-learning, dig.machine-translation

**Finding.** edt.editing-tools and dig.automated-feedback-tools are near-verbatim duplicates. Both cover grammar checkers, automated writing evaluation and AI rewriting, treated critically and within the rules, with the same warnings about flattening voice and breaching rules. gai.language-support and gai.prompting-for-learning have identical type, CEFR range (B1+–C1) and stages (FPUTR), and both describe using AI as a tutor that keeps the learner doing the cognitive work. Machine translation is now largely delivered by the same LLM tools, yet it sits apart in DIG.

**Recommendation.** Merge the duplicates. Rescope dig.machine-translation as translation-mediated drafting and reading, whatever the tool.

Already applied: 1 change(s) — edited topics dig.machine-translation undefined

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"dig.automated-feedback-tools","absorb":["edt.editing-tools"]}
- {"kind":"merge","keep":"gai.language-support","absorb":["gai.prompting-for-learning"]}

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

### R3-08 (major, level-stage)

Topics: grm.subject-verb-agreement, grm.np-postmodification, sen.apostrophes-hyphens-dashes, grm.np-premodification, lis.main-points, lis.relevance-markers, sem.opinions, fun.explaining, prs.structure, reg.spoken-vs-written, prs.speaking-from-notes, src.signal-phrases, grm.reporting-structures, grm.reference-pronouns, coh.spoken-signposting, prs.delivery-voice, ess.answering-question, sen.quotation-punctuation, cit.referencing-systems, crt.evidence-types, ges.discussion-essay, ges.explanation-essay, ges.problem-solution-essay, ges.short-answer, sta.evaluating-others-language, res.research-questions, pub.journal-selection, prg.politeness, prg.requests, gai.authorship-voice

**Finding.** 44 hard edges have a prerequisite whose cefrStart is above the dependent's cefrStart. The dependent then cannot be unlocked at its own entry level, which contradicts the topic's CEFR range. The current validator never sees this (R3-01). Examples: grm.subject-verb-agreement (B1) <- grm.np-postmodification (B1+); rds.reference-tracking (B1) <- grm.reference-pronouns (B1+); src.quoting (B1) <- sen.quotation-punctuation (B1+); cit.author-date-in-text and cit.reference-list (B1) <- cit.referencing-systems (B1+); ges.discussion-, explanation- and problem-solution-essay (B1) <- fun.* (B1+); prg.emails-to-staff (B1) <- prg.requests (B1+); pub.cover-letters (B2+) <- pub.journal-selection (C1).

**Recommendation.** Fix each edge by softening it where the prerequisite is enrichment, or by re-levelling one endpoint where the CEFR range was mis-set: lower basic prerequisites (pronoun reference, quotation punctuation, referencing systems, evidence types, politeness, requests, research questions, journal selection, evaluating others' language, spoken signposting) or raise composite dependents (the four B1 essay genres and short answer, answering the question, delivery and voice, AI authorship and voice). With R3-07, every hard edge then satisfies prerequisite cefrStart <= dependent cefrStart.

Already applied: 24 change(s) — set grm.subject-verb-agreement <- grm.np-postmodification to soft; set sen.apostrophes-hyphens-dashes <- grm.np-premodification to soft; set lis.main-points <- lis.relevance-markers to soft; set sem.opinions <- fun.explaining to soft; set prs.structure <- reg.spoken-vs-written to soft; set prs.speaking-from-notes <- reg.spoken-vs-written to soft; set src.signal-phrases <- grm.reporting-structures to soft; grm.reference-pronouns CEFR -> B1–B2+; …

### R3-13 (major, missing-edge)

Topics: par.integrating-evidence, cit.author-date-in-text, ges.discussion-essay, ges.compare-contrast-essay, ges.explanation-essay, ges.problem-solution-essay, ges.reflective-writing, lrn.reflective-logs

**Finding.** Source-based essay genres do not reach in-text citation. par.integrating-evidence, the hub for source use in paragraphs, has no citation-format prerequisite. ges.discussion-, compare-contrast-, explanation- and problem-solution-essay do not reach par.integrating-evidence, src.paraphrasing or any cit.* format topic, so a system could certify a learner on university essays with no citation skill. ges.reflective-writing is not linked to lrn.reflective-logs, its natural precursor.

**Recommendation.** Add par.integrating-evidence <- cit.author-date-in-text, the four essay genres <- par.integrating-evidence, and ges.reflective-writing <- lrn.reflective-logs. All are soft and all keep the graph acyclic.

Already applied: 6 change(s) — added par.integrating-evidence <- cit.author-date-in-text (soft); added ges.discussion-essay <- par.integrating-evidence (soft); added ges.compare-contrast-essay <- par.integrating-evidence (soft); added ges.explanation-essay <- par.integrating-evidence (soft); added ges.problem-solution-essay <- par.integrating-evidence (soft); added ges.reflective-writing <- lrn.reflective-logs (soft)

### R4-01 (critical, misattribution)

Topics: ess.criticality, rdc.critical-reading

**Finding.** Moore (2013) interviewed 17 academics in history, philosophy and cultural studies only. ess.criticality contextNotes attribute to Moore a contrast between engineering and history ('which differ, for example, between engineering and history (Moore, 2013)'); engineering was not studied. rdc.critical-reading summary says 'academics across disciplines', which overstates a three-discipline humanities sample (crt.concept describes it correctly).

**Recommendation.** Restrict the attribution to the disciplines Moore sampled; do not cite Moore for any science/engineering contrast.

Already applied: 2 change(s) — edited guidance ess.criticality contextNotes; edited guidance rdc.critical-reading summary

### R4-08 (major, decorative)

Topics: exm.open-book, res.ethics-documentation, grm.subject-verb-agreement, par.concluding-sentences, wpr.planning-outlining

**Finding.** Heavily cited references are attached to rationales they do not address. Pecorari (2013) for 'Time spent searching unorganised materials reduces time for analysis' (exm.open-book). Creswell & Creswell (2018) for 'Adapting register for a non-specialist audience is a mediation skill' (res.ethics-documentation). Boulton & Cobb (2017), a learning-outcome meta-analysis, for 'Data-driven learning encourages evidence-based usage judgements'. Wingate (2012) for a sentence-level finding she did not report ('the link between evidence and argument that Wingate (2012) found students often leave implicit'). Swales & Feak (2012), a textbook, as the source of a frequency claim ('authentic paragraphs frequently end on evidence or comment'). Hyland (2003) attached to a rationale whose only substantive claim is the learning-styles debunk, which that book does not address. The most-cited sources (swalesfeak2012 ×115, apa2020 ×103, biber1999lgswe ×88, celcemurcia1999 ×61, wingate2012argument ×57) are mostly used appropriately, but each has a tail of decorative uses.

**Recommendation.** Remove decorative citations or reword so that each citation supports only what the source says.

Already applied: 6 change(s) — removed pecorari2013 from exm.open-book guidance activities[0].citations; removed creswell2018 from res.ethics-documentation guidance activities[0].citations; edited guidance grm.subject-verb-agreement activities[1].rationale; edited guidance par.concluding-sentences activities[0].rationale; edited guidance par.concluding-sentences summary; removed hyland2003writing from wpr.planning-outlining guidance activities[1].citations

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add a verified source for the learning-styles statements (e.g. Pashler, McDaniel, Rohrer & Bjork, 2008, Psychological Science in the Public Interest, 9(3), 105–119) and cite it in wpr.planning-outlining activities[1], lrn.metacognitive-knowledge difficulties[1] and the ntk.note-formats 'visual learner' difficulty; the debunks are correct but currently unsourced or wrongly sourced."}

### R5-01 (critical, stereotype)

Topics: voc.evaluative-lexis, sta.evaluating-others-language, rdc.critical-reading, syn.synthesis-concept, syn.gaps-tensions, cit.citation-functions, inf.source-evaluation, par.integrating-evidence, ess.criticality, ess.thesis-statement, ges.critique, res.literature-review, res.gap-niche, res.supervision, idn.academic-identity, crt.concept, crt.questioning, sem.agreeing-disagreeing, sem.opinions, lis.speaker-stance, pub.peer-review-reports, acu.hidden-curriculum, acu.critical-eap, fbk.seeking-feedback, wpr.task-analysis, exm.oral-exams, lrn.autonomy, crt.epistemic-beliefs

**Finding.** The single most repeated learner difficulty in the dataset is the deferential learner who will not criticise authority: about 28 difficulty records across 25+ topics, many in near-identical ventriloquised words ('Who am I to criticise a published expert?' appears verbatim in voc.evaluative-lexis, rdc.critical-reading and, as 'professor', sta.evaluating-others-language; 'I am only a student' in inf.source-evaluation, res.literature-review and idn.academic-identity). About half are coded prior-schooling. With lrn.autonomy ('The teacher should tell me what to study'), crt.epistemic-beliefs ('Just tell me the right answer') and the memorisation patterns, this rebuilds Holliday's native-speakerist trio (deference, no critical thinking, no autonomy) under the neutral label 'prior schooling'. The repeated disclaimers ('do not attribute this to culture') do not undo the effect. A teacher reading across topics meets the same figure dozens of times, and the label still points to 'elsewhere' schooling. Hesitancy to evaluate published work is well documented among novice first-language English students too, and comes from novice status and the assessment genre.

**Recommendation.** Keep the deference pattern in two or three anchor topics (crt.concept, ess.criticality, res.literature-review). Replace it elsewhere with difficulties specific to the topic. Where it stays, code it affective or conceptual, unless the evidence names an assessment practice, and say that it is common among novice writers of all backgrounds. Add a rule to AUTHORING.md section 4: no single difficulty pattern may recur in more than three records, and prior-schooling must name a schooling or assessment practice, not a disposition.

Already applied: 9 change(s) — edited guidance crt.concept difficulties[1].pattern; edited guidance sta.evaluating-others-language difficulties[0].kind; edited guidance sta.evaluating-others-language difficulties[0].response; edited guidance idn.academic-identity difficulties[2].kind; edited guidance voc.evaluative-lexis difficulties[1].pattern; edited guidance voc.evaluative-lexis difficulties[1].kind; edited guidance voc.evaluative-lexis difficulties[1].revealedBy; edited guidance voc.evaluative-lexis difficulties[1].response; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Consolidate the deference/reluctance-to-critique pattern. Keep it in crt.concept[1], ess.criticality[1] and res.literature-review[2]. Rewrite it as a topic-specific difficulty in syn.synthesis-concept[1], cit.citation-functions[2], inf.source-evaluation[2], rdc.critical-reading[2], syn.gaps-tensions[2], ges.critique[1], crt.questioning[1], res.gap-niche[1] and sem.agreeing-disagreeing[0]. Add to AUTHORING.md section 4: 'No difficulty pattern may recur in substance in more than three records; prior-schooling must name a schooling or assessment practice, not a disposition such as deference.'"}

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

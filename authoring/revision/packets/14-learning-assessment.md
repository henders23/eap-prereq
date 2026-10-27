# Revision packet: 14-learning-assessment

Domains: EXM (Exams & Timed Performance), FBK (Feedback & Assessment Literacy), LRN (Self-Regulated Learning), TST (Proficiency Tests & Progression)

## New topics to author

- `tst.score-reports` | CONCEPTUAL | **Score reports, validity and test choice** — Reading proficiency-test score reports (overall and component scores, retake and combined-sitting rules where they exist), judging whether they meet a requirement, and choosing a test. (from R6-25)

## Merges affecting your domains

- `exm.question-analysis` was merged into `wpr.task-analysis` (R1-13). The absorbed record is in authoring/revision/absorbed/exm.question-analysis.json. The survivor belongs to another group; no action needed except updating any references in your text.
- `lrn.autonomy` was merged into `lrn.self-regulation` (R1-32). The absorbed record is in authoring/revision/absorbed/lrn.autonomy.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `tst.integrated-test-tasks` was merged into `syn.integrated-tasks` (R1-14). The absorbed record is in authoring/revision/absorbed/tst.integrated-test-tasks.json. The survivor belongs to another group; no action needed except updating any references in your text.

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

### R1-02 (critical, usability)

Topics: grm.clause-elements, voc.high-frequency-base, tst.presessional-progression

**Finding.** reports/stage-pathways.md gives the pre-sessional as one undifferentiated list of 477 topics, grouped by strand and topologically sorted within each strand. Academic Language comes first with 79 topics, so a director reading top to bottom meets grammar and vocabulary metalanguage before any integrated task. A 10-week pre-sessional of about 20–25 contact hours a week has 200–250 hours, which is roughly 25–30 minutes per topic before tutorials, assessment or induction. Nothing tells a director what to keep for 6 weeks (B2+ entry) versus 12 weeks (B1+ entry). The dataset has no time or weight estimate per topic, no core/optional flag, and no link from topics to the assessed tasks around which UK pre-sessionals are actually built (extended source-based essay or project, seminar, presentation, reading-into-writing exam, reflective portfolio; see tst.presessional-progression). There are also no integrated units or clusters. As it stands, the pathway is an index, not a syllabus.

**Recommendation.** Add a pathways layer above the topic graph. (a) Give each topic an indicative teaching-time band (e.g. <1h, 1–3h, 3–6h, ongoing). (b) Define assessed-task anchors (pre-sessional extended project, seminar, presentation, integrated reading-into-writing exam, listening-into-note-making) and map core topics to them. (c) Publish worked templates for 6-, 10- and 12-week pre-sessionals by entry band and destination, as week-by-week integrated units of about 60–90 core topics each. (d) In stage-pathways.md, order by unit and hard prerequisite rather than by strand.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].teachingTime ('<1h' | '1-3h' | '3-6h' | 'ongoing') and topics[].assessedIn (array of task-anchor ids)."}
- {"kind":"other","detail":"Add data/pathways.json defining task anchors and course templates: pre-sessional-6wk-B2plus-PG, pre-sessional-10wk-B2-PG, pre-sessional-12wk-B1plus-UG, foundation-EAP-module-2-terms, in-sessional-PGT-dissertation-series. Each template lists ordered units of core topic ids."}
- {"kind":"other","detail":"Regenerate reports/stage-pathways.md by unit/anchor and hard-edge order, showing only core topics plus an 'optional extension' list per unit."}

### R1-06 (major, stage-level)

Topics: acu.university-structures, acu.roles-address, acu.academic-expectations, lrn.support-services, lrn.time-management, lrn.goal-setting, int.integrity-values, prg.messaging-channels, dig.word-processing, sem.preparation, prs.rehearsal-timing, arg.argument-concept

**Finding.** 261 topics are tagged pgr. 43 of them start at B1 and 29 are expected to be controlled by B2+ (cefrEnd ≤ B2+), which is below the C1 baseline that AUTHORING.md itself gives for doctoral researchers. Examples are acu.university-structures (B1–B2), acu.roles-address (B1–B2), lrn.time-management (B1–B2), lrn.support-services (B1–B2), int.integrity-values (B1–B2+) and arg.argument-concept (B1–B2+). A doctoral writing programme that followed the pathway would spend time on how universities are organised and what an argument is, while R1-05 shows its own core genres are missing. The PGR pathway's ordering also starts with B2-level vocabulary and grammar, not with doctoral genres.

**Recommendation.** Remove pgr from orientation and B1-entry topics where a PGR-specific topic already exists (int.research-integrity, res.writing-productivity, res.supervision, acu.hidden-curriculum). Keep pgr only where the PGR treatment is materially different, and say so in contextNotes.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["acu.university-structures","acu.roles-address","acu.academic-expectations","lrn.support-services","lrn.time-management","lrn.goal-setting","int.integrity-values","prg.messaging-channels","dig.word-processing","sem.preparation","prs.rehearsal-timing","arg.argument-concept"],"stages":["foundation","pre-sessional","in-sessional-ug","in-sessional-pgt"]}

### R1-12 (major, structure)

Topics: tst.presessional-progression, fbk.assessment-literacy, exm.timed-writing

**Finding.** FBK (feedback and assessment literacy), EXM (exams) and TST (proficiency tests and progression) sit in Learning & Autonomy beside self-regulation. TST has no prerequisite links to LRN at all: its prerequisites come from TST, SRC, GES, SYN, EXM and FBK. On a pre-sessional, assessment literacy and progression are a distinct, high-stakes thread with their own sequencing (understanding criteria, formative drafts, timed tasks, progression decisions). Programme directors plan it separately from autonomy, and accreditation scrutinises it separately too.

**Recommendation.** Create an 'Assessment & Progression' strand containing FBK, EXM and TST. Keep LRN as the Learning & Autonomy strand.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"move-domain","domainCode":"FBK","toStrand":"Assessment & Progression"}
- {"kind":"move-domain","domainCode":"EXM","toStrand":"Assessment & Progression"}
- {"kind":"move-domain","domainCode":"TST","toStrand":"Assessment & Progression"}

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

### R1-20 (major, coverage)

Topics: tst.presessional-progression, grp.empirical-project-report, ges.argumentative-essay

**Finding.** tst.presessional-progression names 'an extended source-based essay or report' as the typical progression coursework, but no GENRE topic covers it. grp.empirical-project-report assumes primary data collection, which most pre-sessional projects do not involve. ges.argumentative-essay is a short-essay genre with no independent topic selection, research question, sustained source management, drafting cycle with tutor feedback, or reflective component. This is the single most assessed artefact in UK pre-sessional provision.

**Recommendation.** Add the genre below, link it to INF, SYN, SRC, CIT, WPR and EDT prerequisites, and use it as the central task anchor in the pre-sessional templates.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"ges.extended-source-based-project","domainCode":"GES","name":"Extended source-based project","type":"GENRE","scope":"An independently researched 2,000–4,000-word essay or report on a self-chosen focus in the learner's field, developed through proposal, annotated sources, drafts and tutorials, often with a reflective commentary; the capstone of pre-sessional and foundation EAP."}

### R1-23 (major, structure)

Topics: acu.emi-tne, lrn.content-through-english

**Finding.** The five stages are UK-campus provision types. EMI degree programmes in non-anglophone universities, TNE branch campuses and 2+2 articulation, and Australian/US bridging and direct-entry models are reduced to one CONCEPTUAL topic (acu.emi-tne). The brief explicitly includes these contexts, which have different priorities: content-lecturer expectations, translanguaging, local assessment cultures, and large-class lecture listening without seminar culture. In-sessional UG provision also increasingly serves home and widening-participation students (academic literacies), and the taxonomy does not say which topics assume an L2 learner.

**Recommendation.** Add a contexts[] facet (uk-campus, emi, tne, bridging; l2-specific vs all-students) to topics and pathway templates. Define how each stage maps onto EMI/TNE provision. Add an 'all students' flag for topics usable in in-sessional provision for home students.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].contexts (e.g. ['uk-campus','emi','tne']) and topics[].learnerProfile ('l2' | 'all'); document EMI/TNE stage equivalents in AUTHORING.md."}

### R1-32 (minor, overlap)

Topics: lrn.self-regulation, lrn.autonomy, lrn.metacognitive-knowledge, lrn.independent-study

**Finding.** lrn.self-regulation and lrn.autonomy are both CONCEPTUAL, B1–C1 and tagged for all five stages, and lrn.metacognitive-knowledge is almost the same. Learners do not need three models of the same capacity. What they need is the strategic topics (goal-setting, independent study, reflective logs).

**Recommendation.** Merge autonomy into self-regulation. Keep metacognitive knowledge as the knowledge component, and mark the conceptual SRL topics as revisit-only after foundation.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"lrn.self-regulation","absorb":["lrn.autonomy"]}

### R1-40 (minor, coverage)

Topics: exm.exam-formats, exm.open-book, exm.timed-writing

**Finding.** Online, time-windowed and remotely invigilated exams are now routine. They raise their own language and integrity issues (24-hour windows, typed timed writing, permitted resources, AI rules), and no topic mentions them.

**Recommendation.** Add a topic, or widen exm.open-book's scope and name to include online time-windowed assessment.

Already applied: 1 change(s) — edited topics exm.open-book undefined

### R3-03 (major, hub)

Topics: reg.register-awareness, acu.teaching-formats, acu.discourse-communities, acu.university-structures, wpr.audience-purpose, acu.academic-expectations, voc.command-words, voc.university-terminology, lrn.goal-setting

**Finding.** The acu orientation hub creates reach through edges that are not dependencies: reg.register-awareness <- acu.teaching-formats (register theory does not need knowledge of seminar formats; any contrasting situations will do); acu.discourse-communities <- acu.university-structures (the reason itself concedes that administrative units must be "reconceptualised", so they are an analogy, not a prerequisite); wpr.audience-purpose <- acu.academic-expectations (audience and purpose analysis applies to any text); voc.command-words <- voc.university-terminology (the two co-occur in briefs, which is not a dependency); lrn.goal-setting <- acu.academic-expectations (goal setting is a general self-regulation process and is already hard-dependent on lrn.self-regulation). After removal, acu.university-structures falls from 368 to 226 downstream. The remainder flows through crt.concept <- acu.academic-expectations, which is kept as a defensible ordering hint that is also used well as a reteach target. This shows why R3-01, not more deletions, is the fix for residual reach.

**Recommendation.** Remove the five edges. The tool will clear reteach targets on reg.register-awareness, wpr.audience-purpose and voc.command-words to null; none of them had an apt alternative among the remaining prerequisites.

Already applied: 5 change(s) — removed reg.register-awareness <- acu.teaching-formats; removed acu.discourse-communities <- acu.university-structures; removed wpr.audience-purpose <- acu.academic-expectations; removed voc.command-words <- voc.university-terminology; removed lrn.goal-setting <- acu.academic-expectations

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

### R3-15 (major, reteach)

Topics: voc.countability-academic-nouns, rdc.critical-response, prn.repair, exm.objective-questions, crt.multiple-perspectives, coh.writer-responsibility, coh.text-patterns, sem.preparation, res.literature-review

**Finding.** The validator requires reteachPrerequisiteId to be a direct prerequisite. This couples the guidance to the edge set. Nine reteach choices rest on edges removed in this review, and at least one spurious edge (rds.main-ideas <- rdp.parsing-complex-sentences) appears to exist mainly to license a remedial pointer. In addition, these reteach choices do not address their difficulty pattern: voc.countability (Greco-Latin plurals) -> core academic vocabulary; rdc.critical-response (opinion unconnected to the text) -> evidence evaluation; prn.repair (not noticing listener confusion) -> code glosses; exm.objective-questions (cue-based tricks) -> generalisation and qualification; crt.multiple-perspectives (essays must not take sides) -> reading writer stance; coh.writer-responsibility (over-explicitness) -> cohesion versus coherence; coh.text-patterns (evaluation element missing) -> cohesion versus coherence; sem.preparation (underestimating reading time) -> notes from reading; res.literature-review ("I am only a student") -> gap and niche. 563 of 1,445 difficulties (39%) have no reteach target.

**Recommendation.** Apply the guidance edits below; each new target is a direct prerequisite after all R3 changes. For the longer term, allow a separate remedialTopicId that may point to any ancestor or related topic, so that guidance needs no longer force graph edges.

Already applied: 9 change(s) — edited guidance voc.countability-academic-nouns difficulties[1].reteachPrerequisiteId; edited guidance rdc.critical-response difficulties[0].reteachPrerequisiteId; edited guidance prn.repair difficulties[2].reteachPrerequisiteId; edited guidance exm.objective-questions difficulties[2].reteachPrerequisiteId; edited guidance crt.multiple-perspectives difficulties[2].reteachPrerequisiteId; edited guidance coh.writer-responsibility difficulties[2].reteachPrerequisiteId; edited guidance coh.text-patterns difficulties[1].reteachPrerequisiteId; edited guidance sem.preparation difficulties[2].reteachPrerequisiteId; …

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Schema/validator: add optional remedialTopicIds (any topic) distinct from reteachPrerequisiteId (direct prerequisite) so remediation pointers do not force edges."}

### R4-08 (major, decorative)

Topics: exm.open-book, res.ethics-documentation, grm.subject-verb-agreement, par.concluding-sentences, wpr.planning-outlining

**Finding.** Heavily cited references are attached to rationales they do not address. Pecorari (2013) for 'Time spent searching unorganised materials reduces time for analysis' (exm.open-book). Creswell & Creswell (2018) for 'Adapting register for a non-specialist audience is a mediation skill' (res.ethics-documentation). Boulton & Cobb (2017), a learning-outcome meta-analysis, for 'Data-driven learning encourages evidence-based usage judgements'. Wingate (2012) for a sentence-level finding she did not report ('the link between evidence and argument that Wingate (2012) found students often leave implicit'). Swales & Feak (2012), a textbook, as the source of a frequency claim ('authentic paragraphs frequently end on evidence or comment'). Hyland (2003) attached to a rationale whose only substantive claim is the learning-styles debunk, which that book does not address. The most-cited sources (swalesfeak2012 ×115, apa2020 ×103, biber1999lgswe ×88, celcemurcia1999 ×61, wingate2012argument ×57) are mostly used appropriately, but each has a tail of decorative uses.

**Recommendation.** Remove decorative citations or reword so that each citation supports only what the source says.

Already applied: 6 change(s) — removed pecorari2013 from exm.open-book guidance activities[0].citations; removed creswell2018 from res.ethics-documentation guidance activities[0].citations; edited guidance grm.subject-verb-agreement activities[1].rationale; edited guidance par.concluding-sentences activities[0].rationale; edited guidance par.concluding-sentences summary; removed hyland2003writing from wpr.planning-outlining guidance activities[1].citations

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add a verified source for the learning-styles statements (e.g. Pashler, McDaniel, Rohrer & Bjork, 2008, Psychological Science in the Public Interest, 9(3), 105–119) and cite it in wpr.planning-outlining activities[1], lrn.metacognitive-knowledge difficulties[1] and the ntk.note-formats 'visual learner' difficulty; the debunks are correct but currently unsourced or wrongly sourced."}

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

### R5-07 (major, inclusion)

Topics: sem.turn-taking, sem.online-discussion, voc.spelling-conventions, rdp.reading-fluency-rate, edt.proofreading, exm.timed-writing, prs.nonverbal

**Finding.** Disability and neurodiversity are almost absent. Across 557 topics and 557 guidance records there are 0 mentions of dyslexia, autism or ADHD and one of neurodivergence (prs.nonverbal). There is no topic on assistive technology as legitimate academic practice (text-to-speech, dictation, mind-mapping software), on exam adjustments (mentioned once in a reviewNote), or on stammering and participation. Several assessments make particular modes of participation the norm. sem.online-discussion AP: 'a gap is a learner who contributes only in the chat or not at all'; its diagnostic gapResponse: 'Silent, or present only in the chat.' sem.turn-taking AP: 'a gap is near-silence'. Chat-only participation is the accessible mode for many deaf, hard-of-hearing, stammering and neurodivergent students. Spelling, proofreading and timed-reading guidance never considers specific learning differences, which carry over across languages.

**Recommendation.** Accept multiple modes of participation in seminar assessment, add learning-difference notes where they matter most, and add an assistive-technology topic.

Already applied: 5 change(s) — edited topics sem.online-discussion assessmentPrompt; edited guidance sem.online-discussion diagnostic.gapResponse; edited topics sem.turn-taking assessmentPrompt; edited guidance voc.spelling-conventions contextNotes; edited guidance rdp.reading-fluency-rate contextNotes

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"dig.assistive-technology","domainCode":"DIG","name":"Assistive technology and study adjustments","type":"STRATEGIC","scope":"Use assistive and accessibility technologies (text-to-speech, dictation, screen readers, mind-mapping and reading-support tools) and institutional adjustments, such as extra exam time or alternative participation modes, as legitimate parts of academic practice. Know how to request adjustments and how these tools interact with AI and integrity rules."}

### R5-09 (major, normativity)

Topics: sen.concision, crt.multiple-perspectives, coh.writer-responsibility, fbk.seeking-feedback, acu.emi-tne

**Finding.** The UK campus is the unmarked default ('UK' appears 40 times). Several difficulties state UK practice as the universal target: 'Explain that UK assignments set maximum limits' (sen.concision[0]), 'in most UK HE genres' (crt.multiple-perspectives[2]), 'Ask how a UK marker might respond' (coh.writer-responsibility AP), 'in many UK institutions, students are expected to use office hours' (fbk.seeking-feedback[0]). The stage vocabulary (pre-sessional, in-sessional) is UK-specific. EMI and TNE, where most English-medium learners now study, get one leaf topic (acu.emi-tne) that unlocks nothing and is never referenced from stageEmphasis.

**Recommendation.** Replace UK-as-target wording with the learner's target context. Add an EMI/TNE note to stageEmphasis or contextNotes for the domains where practice differs most (SEM, FBK, ACU, INT, PRG).

Already applied: 3 change(s) — edited guidance sen.concision difficulties[0].response; edited guidance crt.multiple-perspectives difficulties[2].response; edited topics coh.writer-responsibility assessmentPrompt

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"domains: for SEM, FBK, ACU, INT and PRG, add a sentence to summary noting how practice may differ in EMI and TNE programmes, cross-referencing acu.emi-tne; consider a context dimension (anglophone campus / EMI / TNE / online) alongside stages."}

### R6-04 (major, coverage)

Topics: prs.research-presentations, res.supervision, fbk.self-peer-assessment

**Finding.** Graduate teaching assistants and demonstrators are not covered. Many international PGRs teach seminars, run labs and mark undergraduate work in English. Institutional ESAP and PGR provision commonly includes classroom language, explaining and questioning, and giving written feedback to students. No topic addresses the PGR as teacher or marker.

**Recommendation.** Add a PGR topic on teaching and demonstrating communication. It could sit under SEM or RES; RES is proposed so that it appears on the PGR pathway.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.teaching-as-pgr","domainCode":"RES","name":"Teaching, demonstrating and marking as a doctoral researcher","type":"SOCIOPRAGMATIC","scope":"Communicate as a graduate teaching assistant or demonstrator: explaining concepts and procedures to undergraduates, asking and handling questions, managing small-group discussion and lab safety talk, and writing clear, criterion-referenced feedback on student work within the module's marking guidance."}

### R6-05 (major, assessment)

Topics: tst.test-formats, tst.integrated-test-tasks

**Finding.** Test-format descriptions are anchored in a dated model. tst.test-formats lists 'independent and integrated writing' as a generic format. tst.integrated-test-tasks takes 'a talk that challenges a reading' as its prototype, which is the legacy TOEFL iBT integrated writing task. TOEFL iBT replaced its independent essay in 2023, and ETS announced a further redesign from January 2026 with new task types, adaptive sections and a CEFR-aligned score scale (verify the current task list with ETS). Other tests have added integrated tasks (for example, group-discussion summary tasks). So whether 'integrated tasks' exist, and what they look like, depends on which test the learner takes and when. The topics avoid naming tests, which is right, but their generic examples now describe one test's former format. Computer-adaptive item selection, now common, is not mentioned.

**Recommendation.** Reword the examples generically. Add adaptive delivery. In the context notes, tell teachers to check the test owner's current task list before teaching integrated-task strategies. Keep the topic, since some major tests, in-house university tests and pre-sessional tasks still use reading- or listening-into-writing.

Already applied: 3 change(s) — edited topics tst.test-formats description; edited topics tst.integrated-test-tasks description; edited guidance tst.integrated-test-tasks contextNotes

### R6-11 (major, framework-mapping)

Topics: dat.data-commentary, sen.clarity-end-weight, sta.claim-calibration, phr.bundles-research-oriented, phr.spoken-academic-formulas, tst.test-formats

**Finding.** IELTS criterion links (97 in all) are partly decorative and in one case contradict the topic. dat.data-commentary's description says data commentary 'differs from description-only tasks such as IELTS Writing Task 1', yet it links to ielts:wr1.task-achievement. sen.clarity-end-weight is linked to IELTS although it has no foundation or pre-sessional stage. 27 links sit on topics tagged pgr, several at B2–C2 (sta.claim-calibration -> Task 2 Task Response; phr.bundles-research-oriented -> Lexical Resource), where IELTS performance is irrelevant. Coverage is also uneven: the Writing Lexical Resource and Grammatical Range and Accuracy criteria carry 33 links, while their Speaking counterparts carry none, although spoken-formula and spoken-stance topics exist. Because IELTS is the only test framework, the links privilege one test; tst.test-formats links three IELTS components, which implies the topic is IELTS-specific.

**Recommendation.** Adopt a rule: link IELTS criteria only from topics tagged foundation or pre-sessional whose primary use includes test preparation or transition, and never from topics whose content contrasts with the test task. Apply the removals below. Add the Speaking Lexical Resource link where spoken lexis is taught. In the frameworks note, state that IELTS is included as a reference criterion set, not as a preferred test.

Already applied: 5 change(s) — dat.data-commentary - framework ielts:wr1.task-achievement; sen.clarity-end-weight - framework ielts:wr.coherence-cohesion; sta.claim-calibration - framework ielts:wr2.task-response; phr.bundles-research-oriented - framework ielts:wr.lexical-resource; phr.spoken-academic-formulas + framework ielts:sp.lexical-resource

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Audit the remaining 23 IELTS links on pgr-tagged topics against the rule above, and add a sentence to frameworks.json 'note' that IELTS criteria are included as a reference set and that links do not endorse any test."}

### R6-12 (major, framework-mapping)

Topics: ges.reflective-writing, dhl.reflective-practice, lrn.reflective-logs

**Finding.** Reflective genres are mapped to 'Reports and essays' (ges.reflective-writing: related only; dhl.reflective-practice: component plus 'Overall written production'), and lrn.reflective-logs has no link. Meanwhile 'Creative writing' and 'Sustained monologue: describing experience' have no links in the whole dataset. Despite its name, the CEFR 'Creative writing' scale is where written accounts of experiences, feelings and reactions are described at B1–B2, which is the recount stage of reflective writing. 'Describing experience' is the spoken counterpart, relevant to oral reflection and to crit presentations.

**Recommendation.** Link the reflective topics to prod.writ.creative, as a component for the recount stage, while keeping 'Reports and essays' for the analytic stage where present. Add a short note in the frameworks documentation explaining why a 'creative writing' scale is linked to reflective genres.

Already applied: 4 change(s) — ges.reflective-writing + framework cefr-cv:prod.writ.creative; dhl.reflective-practice - framework cefr-cv:prod.writ.overall; dhl.reflective-practice + framework cefr-cv:prod.writ.creative; lrn.reflective-logs + framework cefr-cv:prod.writ.creative

### R6-18 (minor, assessment)

Topics: tst.cefr-entry

**Finding.** UK visa framing is mostly well hedged, but the guidance gives an incomplete rule as if it were the rule. It omits: the B1 requirement below degree level; that a provider's own assessment is available only to higher education providers with a track record of compliance, and only for degree-level study; nationality and prior-qualification exemptions; and that the approved-test (SELT) arrangements themselves have been reformed before and are subject to announced change. ME[3] makes the UK route the reference case for an internationally used dataset. The topic rightly avoids score-to-CEFR concordances, and tst.cefr-entry correctly treats test-owner alignments as claims.

**Recommendation.** Rewrite the UK sentence with 'at the time of writing' and the missing conditions, and generalise ME[3]. Keep the dated reference, and review it at every release.

Already applied: 2 change(s) — edited guidance tst.cefr-entry summary; edited topics tst.cefr-entry masteryEvidence[3]

### R6-25 (minor, coverage)

Topics: tst.assessment-purposes, tst.test-formats, tst.cefr-entry

**Finding.** Assessment coverage omits practical score-use issues that pre-sessional and admissions teams handle daily: reading score reports (overall and component scores, single-skill retakes, combining sittings), score validity periods, at-home or remote-proctored versions and whether they are accepted, and integrity rules in high-stakes testing.

**Recommendation.** Add a short TST topic, framed generically and directing learners to official sources.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"tst.score-reports","domainCode":"TST","name":"Score reports, validity and test choice","type":"CONCEPTUAL","scope":"Read a proficiency-test score report (overall and component scores, single-skill retakes or combined sittings where a test allows them) and judge whether it meets a requirement, taking into account score validity periods, the delivery modes (test centre, computer-based, at home) that institutions or visa authorities accept, and the integrity rules that govern high-stakes tests. Check every rule against current official sources."}

# Revision packet: 02-grammar-sentence

Domains: GRM (Academic Grammar), SEN (Sentence Construction & Punctuation)

## New topics to author

- `grm.spoken-grammar` | LINGUISTIC | **Grammar of spoken academic interaction** — Features and accuracy priorities of spoken academic English (heads and tails, ellipsis, vague language, discourse markers, clause chaining) for seminars, tutorials and presentations. (from R1-21)
- `grm.genitive-noun-modifiers` | LINGUISTIC | **Genitive and noun-modifier choices** — Choosing between 's, of-phrases and noun + noun modifiers (the study's aim / the aim of the study / study aim), including inanimate genitives and the myth that they are wrong. (from R2-11)
- `grm.unaccusative-verbs` | LINGUISTIC | **Unaccusative and ergative verbs** — Verbs such as occur, happen, emerge, increase and change that describe events without an agent or alternate between transitive and intransitive use; avoiding *was happened and *was emerged. (from R2-12)

## Merges affecting your domains

- `sen.capitalisation` was merged into `sen.punctuation-mechanics` (R1-19). The absorbed record is in authoring/revision/absorbed/sen.capitalisation.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.
- `sen.numbers-units-style` was merged into `num.number-expressions` (R1-19). The absorbed record is in authoring/revision/absorbed/sen.numbers-units-style.json. The survivor belongs to another group; no action needed except updating any references in your text.
- `sen.quotation-punctuation` was merged into `sen.punctuation-mechanics` (R1-19). The absorbed record is in authoring/revision/absorbed/sen.quotation-punctuation.json. You own the survivor: rewrite it so its name, description, mastery evidence, assessment prompt and guidance cover the absorbed scope; keep it one coherent topic.

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

### R1-07 (major, stage-level)

Topics: sen.capitalisation, sen.lists-bullets, sen.apostrophes-hyphens-dashes, prs.nonverbal, sen.quotation-punctuation

**Finding.** 467 topics (84%) are tagged in-sessional-pgt, and 10 of the 12 SEN mechanics topics are among them. PGT in-sessional provision is short and dissertation-driven, and its time goes to critical reading, the literature review, research-informed argument and data commentary. When capitalisation, bullet lists and non-verbal communication carry the same PGT tag as the dissertation literature review, the PGT pathway loses its shape.

**Recommendation.** Remove PGT from low-level mechanics and generic presentation-delivery topics. Handle them through self-access and proofreading guidance rather than taught provision. Pair this with the core/revisit roles in R1-01.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"retag-stages","topicIds":["sen.capitalisation","sen.lists-bullets","sen.apostrophes-hyphens-dashes","prs.nonverbal"],"stages":["foundation","pre-sessional","in-sessional-ug"]}

### R1-08 (major, stage-level)

Topics: dse.mathematical-writing, dse.protocols-specifications, sen.sentence-types, rds.scanning, rds.skimming, prg.emails-to-staff

**Finding.** Only one topic (voc.high-frequency-base) starts below B1, and the scale has no A2+ step. International foundation programmes commonly admit students at around IELTS 4.0–5.0, which is roughly A2+ to B1. 186 foundation-tagged topics have cefrEnd C1 or C2, so the 'foundation' pathway reads as the whole undergraduate curriculum. Two DSE topics tagged foundation are degree-level: dse.mathematical-writing (writing proofs) and dse.protocols-specifications (engineering specifications). In addition, 77 foundation topics are CONCEPTUAL, which is a heavy conceptual load for A2+/B1 learners combining EAP with subject modules.

**Recommendation.** Add A2+ to the CEFR scale. Lower cefrStart for the genuine entry topics used at the start of foundation. Remove foundation from degree-level ESAP genres. When stageRoles are introduced, limit foundation 'core' to topics whose cefrStart is B1+ or below.

Already applied: 4 change(s) — sen.sentence-types CEFR -> A2–B2; rds.scanning CEFR -> A2–B2; rds.skimming CEFR -> A2–B2; prg.emails-to-staff CEFR -> A2–B2+

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add 'A2+' to the CEFR scale in AUTHORING.md and the schema."}
- {"kind":"retag-stages","topicIds":["dse.mathematical-writing","dse.protocols-specifications"],"stages":["in-sessional-ug","in-sessional-pgt","pgr"]}

### R1-09 (major, stage-level)

Topics: ess.headings, sem.debate, grm.articles, sta.hedging

**Finding.** 505 of 557 topics (91%) span two or more steps of a seven-step scale, and 39 span four. 335 (60%) end at C1, and 361 (65%) start at B1 or B1+. With ranges this uniform, cefrStart/cefrEnd cannot tell a 12-week B1+ cohort's syllabus from a 6-week B2+ cohort's. Some ranges also contradict the stage tags: ess.headings starts at B2 although grp.report-conventions (B1+) and foundation report writing need headings, and sem.debate starts at B2 although it is tagged foundation, where debate is a staple B1+ activity.

**Recommendation.** Add a single 'coreBand' per topic: the band where explicit teaching pays off most, used for course filtering. Keep cefrStart/cefrEnd as the outer envelope. Calibrate a sample against CEFR Companion Volume scales and the BALEAP Can Do Framework with practitioner panels, and correct the obvious inconsistencies now.

Already applied: 2 change(s) — ess.headings CEFR -> B1+–B2+; sem.debate CEFR -> B1+–C1

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add topics[].coreBand (single CEFR step) and use it, not the full range, for pathway filtering."}

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

### R1-21 (major, coverage)

Topics: sem.opinions, phr.spoken-academic-formulas, reg.spoken-vs-written

**Finding.** The framework alignment in coverage.md shows the gap. IELTS Speaking Lexical Resource and Grammatical Range and Accuracy have 0 linked topics. The CEFR scales for Conversation, Informal discussion and Overall oral interaction have 0, and Understanding an interlocutor has 1. No topic covers the grammar of spoken academic English (heads and tails, ellipsis, vague language, spoken complexity) or spoken accuracy priorities. Informal academic interaction (talking to peers and staff before seminars, in labs, at departmental events) is also absent. Only 17 topics (3%) are SOCIOPRAGMATIC.

**Recommendation.** Add a spoken-grammar topic and an informal-interaction topic, and link them to SEM, PRS and PRG.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"grm.spoken-grammar","domainCode":"GRM","name":"Grammar of spoken academic interaction","type":"LINGUISTIC","scope":"Features and accuracy priorities of spoken academic English (heads and tails, ellipsis, vague language, discourse markers, clause chaining) for seminars, tutorials and presentations."}
- {"kind":"add-topic","id":"prg.informal-academic-interaction","domainCode":"PRG","name":"Informal academic interaction and networking","type":"SOCIOPRAGMATIC","scope":"Small talk and relationship-building with peers, lab colleagues and staff around teaching and at departmental events, including topic choice and moving between informal and academic talk."}

### R1-25 (major, usability)

Topics: acu.university-structures, acu.teaching-formats, grm.clause-elements, voc.university-terminology, reg.register-awareness

**Finding.** Pathway order follows all prerequisite edges, and 825 of 1,347 edges are soft. As a result, acu.university-structures is an ancestor of 368 topics, acu.teaching-formats of 326, and grm.clause-elements of 463. Soft edges such as voc.university-terminology ← acu.teaching-formats and reg.register-awareness ← acu.teaching-formats make orientation a gate for language work. The longest chain is 20 topics overall and 17 within the pre-sessional set, which cannot be honoured on a 6-week course. Using hard edges only, the longest chain is 9.

**Recommendation.** Order pathways by hard edges plus unit membership only. Treat soft edges as 'teach nearby' hints. Review soft edges out of ACU and grammar metalanguage topics that create spurious gating.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Change scripts/report.mjs stage-pathway ordering to use hard edges only (max chain 9), and list soft prerequisites as 'related' rather than ordering constraints."}
- {"kind":"other","detail":"Review and drop or soften the outgoing edges from acu.teaching-formats to voc.university-terminology and reg.register-awareness, which make orientation a prerequisite for language topics."}

### R1-26 (minor, coverage)

Topics: grp.empirical-project-report, res.ethics-documentation, grm.complement-clauses

**Finding.** grp.empirical-project-report is tagged pre-sessional, UG and PGT and assumes surveys and interviews, but no topic covers writing clear, unbiased, answerable questions. Question formation is mentioned only in passing (indirect questions in reg.formality-features, embedded questions in grm.complement-clauses). Poorly worded instruments are a frequent, avoidable weakness in pre-sessional and master's projects.

**Recommendation.** Add an instrument-wording topic under RES.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","id":"res.instrument-wording","domainCode":"RES","name":"Wording survey and interview questions","type":"PROCEDURAL","scope":"Writing clear, neutral, single-focus questionnaire items, response scales and interview prompts, and piloting them for comprehension with the target participants."}

### R1-37 (minor, overlap)

Topics: src.reporting-verbs, src.signal-phrases, grm.reporting-structures, src.citation-forms, grm.tense-in-reporting

**Finding.** Reporting verbs, signal phrases, reporting structures, integral vs non-integral citation, and tense in reporting are five topics in two domains. Signal phrases ('According to X…') and reporting verbs are taught as one resource in practice.

**Recommendation.** Merge src.signal-phrases into src.reporting-verbs. Keep the grammar topics, but link them as hard prerequisites.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"merge","keep":"src.reporting-verbs","absorb":["src.signal-phrases"]}

### R2-02 (major, accuracy)

Topics: grm.nominalisation, dse.scientific-language

**Finding.** The topic is titled 'Nominalisation and grammatical metaphor', but both the record and dse.scientific-language ('nominalisation (grammatical metaphor)') treat the two terms as synonyms. In Halliday and Martin (1993), grammatical metaphor also covers logical metaphor, where conjunctive relations are realised inside the clause as verbs, nouns or prepositions (because → leads to, causes, the cause of, due to), and interpersonal metaphor (I think → it is likely that). The record's own assessment prompt depends on logical metaphor without naming it: 'Because of this, universities recruited…' becomes '…led to increased recruitment'. Logical metaphor is what makes the packed causal sentences of academic prose hard to read, so leaving it out loses the most teachable half of the concept.

**Recommendation.** Define grammatical metaphor in full, keep nominalisation as the central case, and add a mastery statement on realising causal and temporal relations within the clause. Change the DSE wording to 'grammatical metaphor (especially nominalisation)'.

Already applied: 3 change(s) — edited topics grm.nominalisation description; edited guidance grm.nominalisation summary; edited topics dse.scientific-language description

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"grm.nominalisation: add masteryEvidence 'Rewrites a conjunction-linked pair of clauses as a single clause in which the relation is expressed by a verb, noun or preposition (because → led to, resulted in, the reason for, due to) and explains what becomes less explicit.'"}

### R2-05 (major, l1-claim)

Topics: sen.clarity-end-weight

**Finding.** DIF[1] claims that 'Writers whose first language places the verb at the end of the clause may produce late-verb sentences in English.' This has no support in the bibliography and does not match the error data. Transfer of basic verb-final order is rare beyond beginner level, and heavy pre-verbal subjects are found in L2 and L1 novice academic writing across backgrounds; they rise as writers start to compress information into noun phrases (Biber & Gray). If an L1 effect is to be claimed, the plausible candidate is head-final languages with prenominal modifiers and relative clauses (Japanese, Korean, Turkish, Chinese), which may favour heavy pre-head modification. That is a noun-phrase effect, not a verb-position effect.

**Recommendation.** Reclassify as developmental. If an L1 note is kept, hedge it and base it on prenominal modification, not clause-final verbs.

Already applied: 2 change(s) — edited guidance sen.clarity-end-weight difficulties[1].kind; edited guidance sen.clarity-end-weight difficulties[1].pattern

### R2-07 (major, myth)

Topics: grm.tense-in-reporting

**Finding.** ME[2] asks learners to explain 'how a shift from past to present tense in reporting a finding increases the writer's endorsement of it'. This makes a tendency into a rule. Swales's account associates present tense with currency and generality, not endorsement. In the humanities and much of the social sciences, present-tense reporting ('Smith argues…') is the unmarked default and is used for positions the writer then rejects. Hyland (1999) shows endorsement is signalled mainly by the reporting verb (shows versus claims). The assessment prompt rewards the same over-generalisation, so a learner from a humanities field who answers accurately would be marked down.

**Recommendation.** Recast tense as signalling currency and generality where past tense is the field default, and attribute endorsement mainly to verb choice. Revise ME[2], the assessment prompt and ACT[0] to match.

Already applied: 3 change(s) — edited topics grm.tense-in-reporting masteryEvidence[2]; edited topics grm.tense-in-reporting assessmentPrompt; edited guidance grm.tense-in-reporting activities[0].intendedInsight

### R2-09 (major, l1-claim)

Topics: grm.articles

**Finding.** DIF[0] gives 'overuse of the with generic plurals and uncountables (The education is important)' as typical of writers whose L1 has no articles. Generic-'the' overuse with abstract nouns is the signature of L1s that use the definite article generically: Romance languages, German, Greek and Arabic. DIF[1] says this itself. For article-less L1s (Chinese, Japanese, Korean, Russian and others) the robust findings are omission and a fluctuation in which 'the' tracks specificity rather than definiteness (Ionin, Ko & Wexler 2004), giving 'the' for specific but not-yet-mentioned referents. The current wording assigns the error to the wrong group.

**Recommendation.** Move the generic-'the' example to DIF[1] only, and give DIF[0] the omission and specificity patterns. Add Ionin et al. (2004) to the bibliography.

Already applied: 1 change(s) — edited guidance grm.articles difficulties[0].revealedBy

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Add Ionin, T., Ko, H., & Wexler, K. (2004). Article semantics in L2 acquisition: The role of specificity. Language Acquisition, 12(1), 3–69."}

### R2-11 (major, coverage)

Topics: grm.np-premodification, grm.np-postmodification

**Finding.** There is no topic or mastery statement on genitive choice ('the study's aims' / 'the aims of the study' / 'study aims'), searching for 'genitive' finds nothing. This is a core noun-phrase decision in academic writing. Biber and Gray (2016) document a historical rise in s-genitives with inanimate heads in academic prose, and many learners still apply the school rule 'no 's with inanimate nouns', producing long of-chains. Learners whose L1 has only an of-type construction also produce 'the results of the analysis of the data of the survey'. The noun-phrase cluster covers premodification and postmodification but not the choice between them, which is where the genitive sits.

**Recommendation.** Add a topic, or at minimum a mastery statement and a difficulty in grm.np-premodification, on choosing among s-genitive, of-phrase and noun premodifier, with the inanimate-'s myth as a difficulty.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"add-topic","topicId":"grm.genitive-choice","domain":"GRM","type":"LINGUISTIC","name":"Genitive and noun-modifier choices","cefrStart":"B1+","cefrEnd":"C1","stages":["pre-sessional","in-sessional-ug","in-sessional-pgt"],"specificity":"EGAP","description":"Choose between the s-genitive (the study's aims; Piaget's theory), the of-phrase (the aims of the study) and a noun premodifier (study aims) according to the animacy and length of the possessor, given–new order and field convention, and avoid long chains of of-phrases. Corpus evidence shows the s-genitive with inanimate nouns is established and increasing in academic prose, so the school rule against it is a myth.","suggestedPrerequisites":["grm.np-premodification","grm.np-postmodification","sen.apostrophes-hyphens-dashes"],"suggestedCitations":["bibergray2016","biber1999lgswe"],"note":"Topic IDs are fixed in authoring/skeleton.txt; if a new ID is not possible, add the content to grm.np-premodification as below."}
- {"kind":"other","detail":"Alternative: add to grm.np-premodification masteryEvidence 'Chooses between the s-genitive, an of-phrase and a noun premodifier (the study's aims / the aims of the study / study aims) according to possessor length, information order and field convention' and a difficulty (prior-schooling) 'Avoids 's with inanimate nouns, producing chains of of-phrases'."}

### R2-12 (major, coverage)

Topics: grm.passive-voice

**Finding.** Two connected gaps. (1) DIF[1] covers '*The problem was happened' but explains it as L1 constructions 'resembling the passive'. The SLA literature describes it as overpassivisation of unaccusative verbs (happen, occur, arise, appear, emerge), whose subject undergoes rather than performs the event. It is attested across many L1 backgrounds and is largely developmental (Zobl 1989; Yip 1995; Oshita 2000). (2) Ergative change-of-state verbs (increase, decrease, change, improve, develop, open), which can be used transitively and intransitively, appear nowhere in the dataset (no matches for 'ergative' or 'unaccusative'). They drive voice choices in process description, methods and data commentary ('the temperature increased' versus 'the temperature was increased'), and confusion between them changes whether an agent is implied.

**Recommendation.** Name the mechanism correctly, add ergative verbs to the response, and add a mastery statement on choosing between intransitive and passive with change-of-state verbs.

Already applied: 2 change(s) — edited guidance grm.passive-voice difficulties[1].revealedBy; edited guidance grm.passive-voice difficulties[1].response

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"grm.passive-voice: add masteryEvidence 'Chooses between intransitive and passive uses of change-of-state verbs (prices rose / prices were raised; the rate increased / the dose was increased) according to whether an agent is implied.' Cross-reference fun.describing-process and dat.describing-trends."}

### R2-13 (minor, attribution)

Topics: grm.anticipatory-it, grm.linking-adverbial-placement, grm.reference-pronouns, sen.sentence-boundaries, voc.abstract-shell-nouns, voc.technical-terminology, voc.multiword-verbs-register, voc.receptive-to-productive, voc.word-grammar-patterns, phr.academic-collocations, phr.phrasebank-use, reg.non-specialist-audiences, coh.linking-adverbials, coh.signalling-nouns, sta.hedging, sta.engagement-markers, sta.code-glosses, fun.exemplifying, lis.word-segmentation, lis.accent-variation, lis.multimodal-lectures, lis.recorded-lectures, lis.metacognitive-listening, prn.intelligibility, prn.word-stress, prn.thought-groups, prn.intonation, prn.segmental-priorities, prn.fluency, prn.repair

**Finding.** About 30 guidance records in scope still describe references as 'proposed' or 'not yet in the bibliography' (for example hylandmilton1997, rubin1992, hewings2002, grangertyson1996, graycortes2011, murphykandil2004, field2003segmentation, fahnestock1986), but references.json marks every one as present and most as web-verified. Two user-facing summaries print the hedge in running text: grm.anticipatory-it '(Hewings & Hewings, 2002, proposed)' and grm.linking-adverbial-placement '(Granger, 1998; Granger & Tyson, 1996, proposed)'. Two review notes ask authors to 'check' whether Chang and Swales (1999) examined unattended 'this' and sentence-initial conjunctions. They did: both are among the ten informal features in that study.

**Recommendation.** Remove 'proposed' from the summaries and the stale review notes, and resolve the two Chang and Swales notes.

Already applied: 4 change(s) — edited guidance grm.anticipatory-it summary; edited guidance grm.linking-adverbial-placement summary; edited guidance grm.reference-pronouns reviewNotes[0]; edited guidance sen.sentence-boundaries reviewNotes[0]

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Remove the 'X is a proposed reference' sentences from reviewNotes in the topics listed in topicIds wherever references.json records the key as present (web-verified or curator-checked)."}

### R2-19 (minor, accuracy)

Topics: grm.reference-pronouns

**Finding.** DIF[1] treats 'This data shows…' as a demonstrative–noun number mismatch. Under the mass-noun treatment of 'data', which voc.countability-academic-nouns and grm.subject-verb-agreement both accept, 'this data shows' is correct. The records contradict each other.

**Recommendation.** Use unambiguous mismatches as the example.

Already applied: 1 change(s) — edited guidance grm.reference-pronouns difficulties[1].pattern

### R2-24 (minor, accuracy)

Topics: grm.np-postmodification

**Finding.** ACT[1] asks learners to reduce a relative clause 'to a prepositional phrase (the data collected in 2020; the 2020 data)'. 'The 2020 data' is noun premodification, not a prepositional postmodifier, which mislabels the structure in a topic that teaches the distinction.

**Recommendation.** Give a prepositional example and label the premodifier separately.

Already applied: 1 change(s) — edited guidance grm.np-postmodification activities[1].learnerActions[1]

### R2-25 (minor, accuracy)

Topics: grm.non-finite-clauses

**Finding.** The subject-sharing rule for introductory participle clauses is taught without exceptions. Descriptive grammars (Quirk et al.; Biber et al. 1999) note conventionalised forms that do not need a matching subject (given…, considering…, assuming…, generally speaking…, compared with…), and 'Based on…' is accepted by some style guides and rejected by others. Without this, learners will 'correct' acceptable expert sentences.

**Recommendation.** Add the conventional exceptions to the response.

Already applied: 1 change(s) — edited guidance grm.non-finite-clauses difficulties[0].response

### R2-26 (minor, accuracy)

Topics: sen.sentence-types

**Finding.** The topic counts finite clauses only, and the assessment prompt calls a 35-word sentence with 'one finite verb and heavy noun phrases' simple. That is the pedagogical convention. In descriptive grammar, non-finite clauses (reduced relatives, to-infinitives) are dependent clauses, so a 'one finite verb' sentence that contains them is complex. If the test sentence includes such clauses, a learner who calls it complex is correct by descriptive standards but scored wrong.

**Recommendation.** State the convention, and build the test sentence only from phrasal modifiers.

Already applied: 2 change(s) — edited topics sen.sentence-types assessmentPrompt; edited topics sen.sentence-types masteryEvidence[1]

### R2-27 (minor, accuracy)

Topics: sen.sentence-length-variety

**Finding.** ACT[1]'s intended insight claims dense academic sentences 'usually read more easily for expert readers'. No source is given for this, and Biber and Gray (2010), whom the record cites, stress that phrasal compression reduces explicitness.

**Recommendation.** Hedge the insight.

Already applied: 1 change(s) — edited guidance sen.sentence-length-variety activities[1].intendedInsight

### R2-33 (minor, level)

Topics: grm.conditionals, grm.articles, grm.fronting-inversion

**Finding.** (1) grm.conditionals ends at B2+, but ME[3] requires productive use of inverted conditionals (Were X to…, Had the study…), which the English Grammar Profile puts at C1. (2) grm.articles ends at C1, but the record expects article work at PGR level (literacy brokers), and article accuracy for writers from article-less L1s keeps developing at expert level, which is the authoring guide's own test for C2. (3) grm.fronting-inversion ends at C1, yet inversion after restrictive adverbials (Rarely have…, Only when…) is C1–C2 in EGP.

**Recommendation.** Make inverted conditionals receptive at B2+, and extend the article and fronting ranges to C2.

Already applied: 3 change(s) — edited topics grm.conditionals masteryEvidence[3]; grm.articles CEFR -> B1–C2; grm.fronting-inversion CEFR -> B2+–C2

### R2-44 (minor, accuracy)

Topics: grm.articles

**Finding.** The summary and diagnostic present 'the' as 'licensed by' an of-phrase or relative clause. Postmodification licenses 'the' only when it makes the referent uniquely identifiable ('the role of X'). Many postmodified nouns take 'a' or zero ('a member of the committee', 'an increase of 5%', 'evidence of bias'). Teachers commonly over-teach 'the + N + of' as a rule, and the record reinforces this, including in the soft prerequisite reason from grm.np-postmodification.

**Recommendation.** Add the identifiability condition and counterexamples.

Already applied: 2 change(s) — edited guidance grm.articles diagnostic.strongResponse; edited guidance grm.articles summary

### R3-01 (critical, hub)

Topics: acu.university-structures, acu.teaching-formats, grm.clause-elements, voc.high-frequency-base, voc.word-families-morphology

**Finding.** The derived metrics in topics.json (downstreamCount, depth, centrality) treat soft edges as equivalent to hard ones and compose them transitively. Of 20,047 transitive dependency pairs, only 1,614 (8%) exist through hard edges; 92% are chains of "usually taught first" hints. This produces implausible hubs: acu.university-structures (downstream 368, centrality 0.55, #2) and acu.teaching-formats (326, 0.50, #3) have hard-only downstream reach of 3 and 0. grm.clause-elements reaches 463 of 557 topics but only 81 through hard edges. Any adaptive system that uses these fields for diagnosis (e.g. "probe high-centrality prerequisites first") or gating will over-weight orientation topics and let soft hints block content transitively. The validator also cannot see the level problems in R3-07/R3-08, because it only checks whether a hard prerequisite starts above the dependent's cefrEnd, which never happens.

**Recommendation.** Compute downstreamCount, depth and centrality on hard edges only, or publish hardDownstreamCount and hardDepth alongside them and document that soft edges are one-step ordering hints that should not be composed. Extend validate.mjs to warn when a hard prerequisite's cefrStart is above the dependent's cefrStart, and when a soft prerequisite starts two or more CEFR steps or stages later.

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"scripts/build.mjs: compute downstreamCount, depth and centrality on hard edges only (or publish hardDownstreamCount, hardDepth alongside the current values and document that the current values include soft edges). 92% of transitive dependency pairs (18,433 of 20,047) exist only through soft edges, so the current metrics mostly measure soft-edge chaining."}
- {"kind":"other","detail":"scripts/validate.mjs: add a warning for hard edges whose prerequisite cefrStart is above the dependent topic's cefrStart (current check only compares against cefrEnd and never fires), and a warning for soft edges whose prerequisite starts two or more CEFR steps or stages later."}

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

### R3-10 (major, missing-edge)

Topics: rdp.parsing-complex-sentences, grm.subordination, grm.relative-clauses

**Finding.** rdp.parsing-complex-sentences ("find the main clause, scope and modifiers") has only two prerequisites, noun-phrase premodification and nominalisation, and cannot reach grm.subordination or sen.sentence-types at all. Parsing a long sentence is primarily clause bracketing.

**Recommendation.** Add hard edges from grm.subordination and grm.relative-clauses. Both are B1 and foundation-tagged, so parsing stays teachable at foundation once its nominalisation edge is softened (R3-02).

Already applied: 2 change(s) — added rdp.parsing-complex-sentences <- grm.subordination (hard); added rdp.parsing-complex-sentences <- grm.relative-clauses (hard)

### R4-05 (major, systemic)

Topics: grm.reporting-structures, grm.non-finite-clauses, grm.existential-there, grm.linking-adverbial-placement, sen.sentence-boundaries

**Finding.** Ferris (1999) is a short position paper. Its 'treatable' category is verb tense/form, subject–verb agreement, articles, noun endings and fragments; lexical errors and sentence-structure problems (missing or unnecessary words, word order) are explicitly 'untreatable'. Nine activity rationales use it as a generic warrant ('a rule-governed error suited to focused self-editing (Ferris, 1999)'). Several apply it to error types Ferris placed in the other category: reporting-frame errors, which the dataset's own vocabulary topics describe as lexically governed; dangling participles; 'There are many studies show'; and comma splices. The citation is also not evidence that focused self-editing of these errors works.

**Recommendation.** Limit the Ferris attribution to her listed categories and label the extensions as analogies.

Already applied: 6 change(s) — edited guidance grm.reporting-structures activities[1].rationale; removed ferris1999 from grm.reporting-structures guidance activities[1].citations; edited guidance grm.non-finite-clauses activities[1].rationale; edited guidance grm.existential-there activities[1].rationale; edited guidance grm.linking-adverbial-placement activities[1].rationale; edited guidance sen.sentence-boundaries summary

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

### R4-14 (minor, overclaim)

Topics: grm.error-monitoring, grw.contribution-assessment

**Finding.** Activity titles 'Evidence-based error log' and 'Evidence-based rating' use a term readers will take to mean empirically tested. The activities are untested proposals; 'evidence' here means the learner's own data.

**Recommendation.** Retitle.

Already applied: 2 change(s) — edited guidance grm.error-monitoring activities[0].title; edited guidance grw.contribution-assessment activities[0].title

### R5-09 (major, normativity)

Topics: sen.concision, crt.multiple-perspectives, coh.writer-responsibility, fbk.seeking-feedback, acu.emi-tne

**Finding.** The UK campus is the unmarked default ('UK' appears 40 times). Several difficulties state UK practice as the universal target: 'Explain that UK assignments set maximum limits' (sen.concision[0]), 'in most UK HE genres' (crt.multiple-perspectives[2]), 'Ask how a UK marker might respond' (coh.writer-responsibility AP), 'in many UK institutions, students are expected to use office hours' (fbk.seeking-feedback[0]). The stage vocabulary (pre-sessional, in-sessional) is UK-specific. EMI and TNE, where most English-medium learners now study, get one leaf topic (acu.emi-tne) that unlocks nothing and is never referenced from stageEmphasis.

**Recommendation.** Replace UK-as-target wording with the learner's target context. Add an EMI/TNE note to stageEmphasis or contextNotes for the domains where practice differs most (SEM, FBK, ACU, INT, PRG).

Already applied: 3 change(s) — edited guidance sen.concision difficulties[0].response; edited guidance crt.multiple-perspectives difficulties[2].response; edited topics coh.writer-responsibility assessmentPrompt

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"domains: for SEM, FBK, ACU, INT and PRG, add a sentence to summary noting how practice may differ in EMI and TNE programmes, cross-referencing acu.emi-tne; consider a context dimension (anglophone campus / EMI / TNE / online) alongside stages."}

### R6-11 (major, framework-mapping)

Topics: dat.data-commentary, sen.clarity-end-weight, sta.claim-calibration, phr.bundles-research-oriented, phr.spoken-academic-formulas, tst.test-formats

**Finding.** IELTS criterion links (97 in all) are partly decorative and in one case contradict the topic. dat.data-commentary's description says data commentary 'differs from description-only tasks such as IELTS Writing Task 1', yet it links to ielts:wr1.task-achievement. sen.clarity-end-weight is linked to IELTS although it has no foundation or pre-sessional stage. 27 links sit on topics tagged pgr, several at B2–C2 (sta.claim-calibration -> Task 2 Task Response; phr.bundles-research-oriented -> Lexical Resource), where IELTS performance is irrelevant. Coverage is also uneven: the Writing Lexical Resource and Grammatical Range and Accuracy criteria carry 33 links, while their Speaking counterparts carry none, although spoken-formula and spoken-stance topics exist. Because IELTS is the only test framework, the links privilege one test; tst.test-formats links three IELTS components, which implies the topic is IELTS-specific.

**Recommendation.** Adopt a rule: link IELTS criteria only from topics tagged foundation or pre-sessional whose primary use includes test preparation or transition, and never from topics whose content contrasts with the test task. Apply the removals below. Add the Speaking Lexical Resource link where spoken lexis is taught. In the frameworks note, state that IELTS is included as a reference criterion set, not as a preferred test.

Already applied: 5 change(s) — dat.data-commentary - framework ielts:wr1.task-achievement; sen.clarity-end-weight - framework ielts:wr.coherence-cohesion; sta.claim-calibration - framework ielts:wr2.task-response; phr.bundles-research-oriented - framework ielts:wr.lexical-resource; phr.spoken-academic-formulas + framework ielts:sp.lexical-resource

Not applied mechanically (handle editorially if it concerns your topics):

- {"kind":"other","detail":"Audit the remaining 23 IELTS links on pgr-tagged topics against the rule above, and add a sentence to frameworks.json 'note' that IELTS criteria are included as a reference set and that links do not endorse any test."}

# R5: Critical EAP and inclusion review

Reviewer persona: a professor of academic literacies and critical EAP, publishing on inclusive pedagogy, translanguaging, internationalisation, decolonising curricula and integrity policy, who also teaches doctoral writing.

Scope covered:
- **Difficulties:** all 64 L1-transfer, 210 prior-schooling and 132 affective difficulty records, extracted by script.
- **Domain text:** every domain learnerSummary.
- **Domains read in full:** ACU, PRG, IDN, INT, GAI, CRT, ARG, SEM, GRW and REG.
- **Topics read in full:** plagiarism, patchwriting, similarity reports, AI detection, AI authorship, machine translation, L1 in composing, plurilingual repertoire, intercultural rhetoric, reader/writer responsibility, critical thinking, voice and identity.
- **Sweeps:** the prerequisite graph, and a scripted term sweep for stereotype, deficit, inclusion and context vocabulary.

## Overall verdict

**Progressive surface, assimilationist structure.** Read topic by topic, this is one of the more careful EAP resources I have reviewed:
- Kaplan is critiqued properly.
- Patchwriting is presented as contested.
- Similarity scores and AI detectors are never treated as verdicts.
- Native-speakerism, ELF, academic literacies, critical EAP (with Benesch's rights analysis) and EMI/TNE each have a topic.
- L1-transfer difficulties almost always name a linguistic mechanism, not a nationality.
- Many responses explicitly forbid cultural attribution.

I found no "Asian students", "Confucian" or "passive learner" tropes.

Read as a whole, the dataset rebuilds what its individual topics disown, in four ways:

1. **The deferential learner.** The most frequent difficulty in the dataset is the learner who will not criticise authority: about 28 records, often verbatim ("Who am I to criticise a published expert?"). Many are coded *prior-schooling*. Alongside "Just tell me the right answer" and "The teacher should tell me what to study", this reconstructs Holliday's native-speakerist trio of deference, no critical thinking and no autonomy under a neutral label.
2. **Structure contradicts the critical text.** The prerequisite graph and stage tags put critique last and learners' own languages late:
   - acu.critical-eap is a depth-10 dead end.
   - idn.plurilingual-repertoire sits 8 steps down a chain that starts with clause grammar.
   - Foundation learners are tagged out of every critical topic.
3. **Integrity and AI.** Detector bias is acknowledged, but the burden of proof stays with multilingual writers. Teachers are also given a "style gap between in-class and submitted writing" heuristic that will produce false suspicion.
4. **Inclusion is narrow.** It means multilingual international students on a UK campus. The dataset has:
   - 0 mentions of dyslexia, first-generation or widening-participation students, race or racialisation, decolonising, or World Englishes.
   - Seminar assessments that treat silence or chat-only participation as a "gap".

Translanguaging is cited but confined to process ("plan in any language, draft in English"), and that orthodoxy is presented as settled.

**Recommendation:** publishable after the critical findings are fixed. They need graph, schema and consolidation work, not just wording. Major findings should be addressed before the next release. The JSON companion (R5-critical.json) contains 57 mechanical edit-field changes, each checked to match exactly once in its target field against the current data. It also has 4 add-topic proposals and other structural changes, including edge changes that I checked for acyclicity.

Severity counts: critical 3, major 11, minor 7.

## Critical findings

### R5-01 (stereotype)

**Topics:** `voc.evaluative-lexis`, `sta.evaluating-others-language`, `rdc.critical-reading`, `syn.synthesis-concept`, `syn.gaps-tensions`, `cit.citation-functions`, `inf.source-evaluation`, `par.integrating-evidence`, `ess.criticality`, `ess.thesis-statement`, `ges.critique`, `res.literature-review`, `res.gap-niche`, `res.supervision`, `idn.academic-identity`, `crt.concept`, `crt.questioning`, `sem.agreeing-disagreeing`, `sem.opinions`, `lis.speaker-stance`, `pub.peer-review-reports`, `acu.hidden-curriculum`, `acu.critical-eap`, `fbk.seeking-feedback`, `wpr.task-analysis`, `exm.oral-exams`, `lrn.autonomy`, `crt.epistemic-beliefs`

**Problem.** The single most repeated learner difficulty in the dataset is the deferential learner who will not criticise authority: about 28 difficulty records across 25+ topics, many in near-identical ventriloquised words ('Who am I to criticise a published expert?' appears verbatim in voc.evaluative-lexis, rdc.critical-reading and, as 'professor', sta.evaluating-others-language; 'I am only a student' in inf.source-evaluation, res.literature-review and idn.academic-identity). About half are coded prior-schooling. With lrn.autonomy ('The teacher should tell me what to study'), crt.epistemic-beliefs ('Just tell me the right answer') and the memorisation patterns, this rebuilds Holliday's native-speakerist trio (deference, no critical thinking, no autonomy) under the neutral label 'prior schooling'. The repeated disclaimers ('do not attribute this to culture') do not undo the effect. A teacher reading across topics meets the same figure dozens of times, and the label still points to 'elsewhere' schooling. Hesitancy to evaluate published work is well documented among novice first-language English students too, and comes from novice status and the assessment genre.

**Recommendation.** Keep the deference pattern in two or three anchor topics (crt.concept, ess.criticality, res.literature-review). Replace it elsewhere with difficulties specific to the topic. Where it stays, code it affective or conceptual, unless the evidence names an assessment practice, and say that it is common among novice writers of all backgrounds. Add a rule to AUTHORING.md section 4: no single difficulty pattern may recur in more than three records, and prior-schooling must name a schooling or assessment practice, not a disposition.

**Proposed changes**

- `guidance` · `crt.concept` · `difficulties[1].pattern`
  - Current: “'In my previous studies we were expected to learn from experts, not question them, so I am not good at this.'”
  - Replace with: “'In my previous exams, marks came from reproducing the textbook accurately, so I'm not sure when I'm allowed to evaluate a source.'”
- `guidance` · `sta.evaluating-others-language` · `difficulties[0].kind`
  - Current: “prior-schooling”
  - Replace with: “affective”
- `guidance` · `sta.evaluating-others-language` · `difficulties[0].response`
  - Current: “start with evaluating the fit of a study to the learner's own question.”
  - Replace with: “start with evaluating the fit of a study to the learner's own question. This hesitation is common among novice writers of every background, including first-language English undergraduates, so do not treat it as a marker of particular educational systems.”
- `guidance` · `idn.academic-identity` · `difficulties[2].kind`
  - Current: “prior-schooling”
  - Replace with: “affective”
- `guidance` · `voc.evaluative-lexis` · `difficulties[1].pattern`
  - Current: “'Who am I to criticise a published expert?'”
  - Replace with: “Evaluative words chosen for force rather than precision ('a terrible study', 'a perfect method').”
- `guidance` · `voc.evaluative-lexis` · `difficulties[1].kind`
  - Current: “affective”
  - Replace with: “overgeneralisation”
- `guidance` · `voc.evaluative-lexis` · `difficulties[1].revealedBy`
  - Current: “Purely descriptive critiques; criticism hidden or omitted.”
  - Replace with: “Critiques that swing between unqualified praise and blanket condemnation, with no criterion named.”
- `guidance` · `voc.evaluative-lexis` · `difficulties[1].response`
  - Current: “Present mitigated critique as an expected practice and model the language for it.”
  - Replace with: “Teach graded evaluative sets (for example limited, partial, robust, compelling) and ask learners to name the criterion behind each choice.”
- `guidance` · `fbk.seeking-feedback` · `difficulties[0].kind`
  - Current: “prior-schooling”
  - Replace with: “affective”
- Consolidate the deference/reluctance-to-critique pattern. Keep it in crt.concept[1], ess.criticality[1] and res.literature-review[2]. Rewrite it as a topic-specific difficulty in syn.synthesis-concept[1], cit.citation-functions[2], inf.source-evaluation[2], rdc.critical-reading[2], syn.gaps-tensions[2], ges.critique[1], crt.questioning[1], res.gap-niche[1] and sem.agreeing-disagreeing[0]. Add to AUTHORING.md section 4: 'No difficulty pattern may recur in substance in more than three records; prior-schooling must name a schooling or assessment practice, not a disposition such as deference.'

### R5-02 (balance)

**Topics:** `acu.critical-eap`, `idn.standards-legitimacy`, `acu.academic-literacies`, `idn.diversity-as-resource`, `idn.plurilingual-repertoire`, `rdp.plurilingual-reading`, `dig.machine-translation`, `idn.intercultural-rhetoric`, `acu.emi-tne`, `src.multilingual-sources`, `pub.multilingual-scholars`, `gai.detection-limits`

**Problem.** The text of IDN and ACU is critical and resource-oriented, but the prerequisite graph and stage tags build in 'learn the norms first, question them later, if at all'. acu.critical-eap sits at depth 10 and unlocks nothing (0 downstream). idn.intercultural-rhetoric, acu.emi-tne, src.multilingual-sources, pub.multilingual-scholars and gai.detection-limits are also dead-end leaves. idn.plurilingual-repertoire (B1, foundation) sits at depth 8, at the end of the chain grm.clause-elements > voc.word-families-morphology > ... > acu.hidden-curriculum > acu.academic-literacies > idn.diversity-as-resource. So using one's own languages is modelled as an advanced achievement, not the starting resource. The edge acu.academic-literacies (B2+, in-sessional only) > idn.diversity-as-resource (B1, foundation) is also stage-incoherent. rdp.plurilingual-reading depends on dig.machine-translation, which makes reading in one's own languages a by-product of an MT topic. Foundation, the stage with 372 topics, has no access to acu.critical-eap, acu.academic-literacies, idn.standards-legitimacy or idn.intercultural-rhetoric, although Benesch's rights analysis was developed with undergraduates on linked courses.

**Recommendation.** Make the plurilingual repertoire an early node, make critical topics prerequisites of something, and open rights analysis and the standards-legitimacy discussion to foundation learners in simplified form. I checked the edge changes below for acyclicity against the current graph. With them, idn.plurilingual-repertoire falls from depth 8 to 3. Re-run scripts/check-strand.mjs after applying them.

**Proposed changes**

- dependencies: remove edge {topicId: 'idn.diversity-as-resource', prerequisiteId: 'acu.academic-literacies'} (a B2+ in-sessional topic gating a B1 foundation topic).
- dependencies: remove edge {topicId: 'idn.plurilingual-repertoire', prerequisiteId: 'idn.diversity-as-resource'} and add {topicId: 'idn.diversity-as-resource', prerequisiteId: 'idn.plurilingual-repertoire', strength: 'soft', reason: 'Recognising diversity as a resource builds on learners first mapping the resources in their own repertoires'}.
- dependencies: replace {topicId: 'rdp.plurilingual-reading', prerequisiteId: 'dig.machine-translation'} with {topicId: 'dig.machine-translation', prerequisiteId: 'rdp.plurilingual-reading', strength: 'soft', reason: 'MT is one tool within plurilingual reading; learners should first know how to use their languages for comprehension'} and add {topicId: 'rdp.plurilingual-reading', prerequisiteId: 'idn.plurilingual-repertoire', strength: 'soft'}.
- dependencies: add {topicId: 'pub.multilingual-scholars', prerequisiteId: 'acu.critical-eap', strength: 'soft', reason: 'Navigating English-medium publishing as a multilingual scholar draws on a critical understanding of whose norms are rewarded'} so that critical EAP unlocks downstream work.
- topics: add 'foundation' to stages of acu.critical-eap and idn.standards-legitimacy and lower cefrStart to B1+, with contextNotes describing a simplified needs-and-rights analysis of the learner's own course demands at foundation.

### R5-03 (integrity-ai)

**Topics:** `gai.detection-limits`, `wpr.l1-in-composing`, `dig.machine-translation`, `edt.proofreading-ethics`

**Problem.** The integrity and AI content rightly says detectors are biased against writers of English as an additional language. It then makes those same writers responsible for proving their innocence ('learners protect themselves by keeping evidence of their writing process'). In several places it also teaches teachers a surveillance heuristic that hits multilingual writers hardest: a difference between in-class and submitted writing is listed as the evidence that reveals MT or proofreading misuse. See wpr.l1-in-composing[1] ('a marked gap between in-class and take-home writing'), dig.machine-translation[2] ('Marked differences between in-class and submitted writing; rhetorical organisation that does not match the English genre') and edt.proofreading-ethics[0] ('Marked differences in style between supervised and submitted writing'). Timed in-class L2 writing is normally weaker than drafted work, so this heuristic will produce false suspicion. The dig.machine-translation wording also brings back a contrastive-rhetoric assumption, that non-English organisation signals translation.

**Recommendation.** Put the burden of proof on the institution. Keep process records as an ordinary good habit, not a defence obligation. Rewrite each revealedBy so that style difference is never presented as evidence on its own.

**Proposed changes**

- `topics` · `gai.detection-limits` · `description`
  - Current: “learners protect themselves by keeping evidence of their writing process and knowing how integrity processes treat such indicators.”
  - Replace with: “institutions remain responsible for not treating such scores as evidence, and learners benefit from knowing their rights in integrity processes and from keeping ordinary records of their writing process (notes, drafts, version history), without being expected to prove their innocence.”
- `guidance` · `gai.detection-limits` · `summary`
  - Current: “Teaching should make clear that detector output cannot establish misconduct and help learners keep evidence of their writing process.”
  - Replace with: “Teaching should make clear that detector output cannot establish misconduct, that the burden of proof lies with the institution, and that keeping ordinary process records is a sensible habit rather than an obligation to prove innocence.”
- `guidance` · `wpr.l1-in-composing` · `difficulties[1].revealedBy`
  - Current: “a marked gap between in-class and take-home writing.”
  - Replace with: “a gap between in-class and take-home writing (which on its own is expected, since timed in-class writing is usually weaker, and is not evidence of translation or misconduct).”
- `guidance` · `dig.machine-translation` · `difficulties[2].revealedBy`
  - Current: “Marked differences between in-class and submitted writing; rhetorical organisation that does not match the English genre.”
  - Replace with: “The learner's own account of their process; terminology or hedging that shifts in ways typical of MT output. Differences between in-class and submitted writing are expected and are not evidence on their own.”
- `guidance` · `edt.proofreading-ethics` · `difficulties[0].revealedBy`
  - Current: “Marked differences in style between supervised and submitted writing.”
  - Replace with: “The learner's own account of what the helper changed; tracked changes or earlier drafts showing content-level rewriting. Style differences between supervised and submitted writing are not evidence on their own.”

## Major findings

### R5-04 (integrity-ai)

**Topics:** `int.policy-processes`, `int.pressure-risks`

**Problem.** The Academic Integrity domain teaches learners to find and comply with policy but never names their procedural rights beyond 'support, representation and appeal'. It has nothing on seeing the evidence, responding in a usable language or format, or having software indicators weighed by people. The learner-facing summary is framed entirely around avoiding misconduct. For multilingual students, who are the main targets of similarity and detector false positives, this omission matters. The domain also lists 'low confidence in English' and 'visa-related pressure' as risk conditions (int.pressure-risks) without matching attention to institutional conditions.

**Recommendation.** Add procedural rights to int.policy-processes. Add rights to the INT learnerSummary. In int.pressure-risks, place risk conditions alongside institutional responsibilities, such as clear briefs, workable deadlines and accessible support.

**Proposed changes**

- `topics` · `int.policy-processes` · `description`
  - Current: “Knowing the process reduces fear, helps learners respond appropriately and in time if concerns are raised, and makes clear that policies and terminology vary between institutions and modules.”
  - Replace with: “Knowing the process reduces fear, helps learners respond appropriately and in time if concerns are raised, and makes clear that policies and terminology vary between institutions and modules. Learners should also know their procedural rights: to see the evidence, to respond in a language and format they can use (including interpreting or language support where offered), to be accompanied, and to have indicators such as similarity scores, AI-detector output or differences in writing style weighed by people alongside their own account.”
- `domains` · `INT` · `learnerSummary`
  - Current: “and where to get help when deadlines and pressure build up.”
  - Replace with: “where to get help when deadlines and pressure build up, and what your rights are if questions are ever raised about your work.”

### R5-05 (integrity-ai)

**Topics:** `gai.authorship-voice`

**Problem.** gai.authorship-voice presents a contested question as settled, and it reassures learners in a way that may be untrue. DIFF[0] response: 'Explain that assessed writing evidences language and reasoning as well as ideas'. That is true of language-focused tasks but disputed for content assessment. The equity argument is absent: AI language polishing does for multilingual writers what proofreaders and literacy brokers (named elsewhere in the dataset) and Grammarly-style tools have long done for others. DIFF[1] response: 'show that markers assess reasoning and clarity, not native-like polish'. Teachers cannot honestly guarantee this, since accent and non-standard-English bias in evaluation is precisely what idn.standards-legitimacy and pub.multilingual-scholars document.

**Recommendation.** Present AI language assistance as a contested authorship and equity question, tie the line to the task's purpose and policy, and replace the reassurance with an honest account.

**Proposed changes**

- `guidance` · `gai.authorship-voice` · `difficulties[0].response`
  - Current: “Explain that assessed writing evidences language and reasoning as well as ideas; refer to the policy.”
  - Replace with: “Explain that whether an assessment evidences language as well as ideas depends on its purpose and policy: language-focused tasks usually do, many content tasks may not. Discuss the debate openly, including the equity argument that AI language polishing resembles help from proofreaders or literacy brokers, and refer to the policy for the task.”
- `guidance` · `gai.authorship-voice` · `difficulties[1].response`
  - Current: “Value the learner's voice as legitimate; show that markers assess reasoning and clarity, not native-like polish.”
  - Replace with: “Value the learner's voice as legitimate and show where AI edits changed meaning or stance. Be honest that some readers do react to non-standard English, distinguish changes that improve clarity from those that only make text sound native-like, and point to the criteria actually used for the task.”
- `topics` · `gai.authorship-voice` · `description`
  - Current: “so learners decide where assistance must stop for a task to remain their own work.”
  - Replace with: “so learners decide where assistance must stop for a task to remain their own work. Where that line lies is contested: AI language polishing can also reduce the penalties multilingual writers face for non-standard English, much as proofreaders and literacy brokers do.”

### R5-06 (normativity)

**Topics:** `idn.plurilingual-repertoire`, `wpr.l1-in-composing`, `wpr.drafting`, `dig.machine-translation`

**Problem.** García and Li Wei and Canagarajah are cited, but translanguaging is admitted only into the process: 'plan in any language, draft in English'. The products stay monolingual: 'while producing assessed work in the required language' (idn.plurilingual-repertoire) and 'drafting the text predominantly in English' (wpr.l1-in-composing). The claim 'translating whole L1 drafts tends to carry over L1 structures, reduces L2 practice' is presented as settled. Research comparing translation with direct composition is mixed: Kobayashi and Rinnert (1992) found that translated essays by lower-proficiency Japanese EFL writers scored higher on content and organisation. Translingual writing (code-meshing, multilingual quotation and glossing, bilingual assessment in EMI) does not appear anywhere. The 'draft in English' orthodoxy is presented as fact, not as a contested pedagogical choice.

**Recommendation.** Present language separation in products as contested and dependent on the task. Propose kobayashirinnert1992 under proposedReferences: Kobayashi, H., & Rinnert, C. (1992). Effects of first language on second language writing: Translation versus direct composition. Language Learning, 42(2), 183–215. My confidence is high but it should be verified. Add a translingual writing topic.

**Proposed changes**

- `topics` · `idn.plurilingual-repertoire` · `description`
  - Current: “while producing assessed work in the required language and within institutional rules.”
  - Replace with: “while meeting the language requirements and rules of each assessment. Whether assessed texts may themselves be translingual (for example, quoting and glossing sources in other languages, or mixing languages in reflective genres) is contested and varies by task, and learners can ask.”
- `topics` · `wpr.l1-in-composing` · `description`
  - Current: “Plurilingual composing is a resource, but translating whole L1 drafts tends to carry over L1 structures, reduces L2 practice and can breach assessment rules.”
  - Replace with: “Plurilingual composing is a resource. Evidence on drafting fully in another language and then translating is mixed: it can support content and organisation, especially at lower proficiency, but may carry over source-language structures, reduce L2 practice and, with machine translation, breach assessment rules.”
- **Add topic** `idn.translingual-writing` (IDN, CONCEPTUAL) “Translingual writing and code-meshing”: Understand translingual approaches to academic writing (Canagarajah; Horner and colleagues), in which writers deliberately bring other languages or Englishes into academic texts by glossing, quoting in the original, code-meshing in reflective or creative genres, or bilingual submission in some EMI programmes. Weigh where this is accepted, contested or prohibited, and make informed, negotiated choices with tutors.

### R5-07 (inclusion)

**Topics:** `sem.turn-taking`, `sem.online-discussion`, `voc.spelling-conventions`, `rdp.reading-fluency-rate`, `edt.proofreading`, `exm.timed-writing`, `prs.nonverbal`

**Problem.** Disability and neurodiversity are almost absent. Across 557 topics and 557 guidance records there are 0 mentions of dyslexia, autism or ADHD and one of neurodivergence (prs.nonverbal). There is no topic on assistive technology as legitimate academic practice (text-to-speech, dictation, mind-mapping software), on exam adjustments (mentioned once in a reviewNote), or on stammering and participation. Several assessments make particular modes of participation the norm. sem.online-discussion AP: 'a gap is a learner who contributes only in the chat or not at all'; its diagnostic gapResponse: 'Silent, or present only in the chat.' sem.turn-taking AP: 'a gap is near-silence'. Chat-only participation is the accessible mode for many deaf, hard-of-hearing, stammering and neurodivergent students. Spelling, proofreading and timed-reading guidance never considers specific learning differences, which carry over across languages.

**Recommendation.** Accept multiple modes of participation in seminar assessment, add learning-difference notes where they matter most, and add an assistive-technology topic.

**Proposed changes**

- `topics` · `sem.online-discussion` · `assessmentPrompt`
  - Current: “a gap is a learner who contributes only in the chat or not at all, or who repeatedly talks over others because of delay.”
  - Replace with: “a gap is a learner who does not contribute in any channel, or who repeatedly talks over others because of delay. Chat-only participation is a legitimate mode for some learners (for example deaf, hard-of-hearing, stammering or neurodivergent learners, or those with poor connections) and should be judged on content.”
- `guidance` · `sem.online-discussion` · `diagnostic.gapResponse`
  - Current: “Silent, or present only in the chat.”
  - Replace with: “No contribution in any channel, and no account of what would make participation possible.”
- `topics` · `sem.turn-taking` · `assessmentPrompt`
  - Current: “a gap is near-silence or long, unlinked monologues.”
  - Replace with: “a gap is long, unlinked monologues, or near-silence that the learner cannot explain or plan around. Interpret silence cautiously: it can reflect a deliberate choice, processing time, disability or the way the group distributes the floor, so pair the tally with the learner's own account.”
- `guidance` · `voc.spelling-conventions` · `contextNotes`
  - Current: “In UG in-sessional settings, align with departmental and style-guide requirements.”
  - Replace with: “In UG in-sessional settings, align with departmental and style-guide requirements. Persistent spelling difficulty that does not respond to teaching may reflect dyslexia or another specific learning difference in any language; refer sensitively to disability or learning-support services and allow assistive tools (spell-checkers, text-to-speech) rather than treating it as carelessness.”
- `guidance` · `rdp.reading-fluency-rate` · `contextNotes`
  - Current: “very high rates are not a goal.”
  - Replace with: “very high rates are not a goal. Adapt timed reading for learners with dyslexia, visual impairment or other access needs, for example with text-to-speech or untimed versions.”
- **Add topic** `dig.assistive-technology` (DIG, STRATEGIC) “Assistive technology and study adjustments”: Use assistive and accessibility technologies (text-to-speech, dictation, screen readers, mind-mapping and reading-support tools) and institutional adjustments, such as extra exam time or alternative participation modes, as legitimate parts of academic practice. Know how to request adjustments and how these tools interact with AI and integrity rules.

### R5-08 (inclusion)

**Topics:** `acu.hidden-curriculum`, `acu.transition`, `idn.diversity-as-resource`

**Problem.** The implied learner is an international student on an anglophone campus. First-generation, widening-participation and working-class students get 0 mentions, and mature students appear only in an acu.transition reviewNote ('Transition also affects home and mature students… should not be framed as specific to international students'). That note is never acted on in the topic text. Home students appear 4 times, always as peers who must accommodate. This matters for balance: the academic literacies research the dataset relies on (Lillis's 'institutional practice of mystery', Ivanič's mature writers) was mainly about home, non-traditional students. The dataset applies that research only to multilingual students.

**Recommendation.** Name non-traditional home students where tacit expectations and transition are discussed, and act on the acu.transition review note.

**Proposed changes**

- `topics` · `acu.hidden-curriculum` · `description`
  - Current: “Tacit expectations disadvantage students whose prior schooling did not share them, so surfacing them is a matter of equity as well as skill.”
  - Replace with: “Tacit expectations disadvantage students whose prior schooling or family experience did not share them, including first-generation, mature and returning students as well as those new to the national system, so surfacing them is a matter of equity as well as skill.”
- acu.transition: incorporate reviewNotes[0] into the topic description and contextNotes (home, mature, first-generation and part-time students; caring and work responsibilities), then remove the review note.

### R5-09 (normativity)

**Topics:** `sen.concision`, `crt.multiple-perspectives`, `coh.writer-responsibility`, `fbk.seeking-feedback`, `acu.emi-tne`

**Problem.** The UK campus is the unmarked default ('UK' appears 40 times). Several difficulties state UK practice as the universal target: 'Explain that UK assignments set maximum limits' (sen.concision[0]), 'in most UK HE genres' (crt.multiple-perspectives[2]), 'Ask how a UK marker might respond' (coh.writer-responsibility AP), 'in many UK institutions, students are expected to use office hours' (fbk.seeking-feedback[0]). The stage vocabulary (pre-sessional, in-sessional) is UK-specific. EMI and TNE, where most English-medium learners now study, get one leaf topic (acu.emi-tne) that unlocks nothing and is never referenced from stageEmphasis.

**Recommendation.** Replace UK-as-target wording with the learner's target context. Add an EMI/TNE note to stageEmphasis or contextNotes for the domains where practice differs most (SEM, FBK, ACU, INT, PRG).

**Proposed changes**

- `guidance` · `sen.concision` · `difficulties[0].response`
  - Current: “Explain that UK assignments set maximum limits and reward density of argument, and practise cutting.”
  - Replace with: “Explain that many university assignments, including most in the UK, set maximum limits and reward density of argument; check the local rule and practise cutting.”
- `guidance` · `crt.multiple-perspectives` · `difficulties[2].response`
  - Current: “Show that in most UK HE genres balanced consideration”
  - Replace with: “Show that in many English-medium university genres (check local criteria) balanced consideration”
- `topics` · `coh.writer-responsibility` · `assessmentPrompt`
  - Current: “Ask how a UK marker might respond”
  - Replace with: “Ask how a marker in the learner's target programme might respond”
- domains: for SEM, FBK, ACU, INT and PRG, add a sentence to summary noting how practice may differ in EMI and TNE programmes, cross-referencing acu.emi-tne; consider a context dimension (anglophone campus / EMI / TNE / online) alongside stages.

### R5-10 (stereotype)

**Topics:** `pub.cover-letters`, `pub.academic-cv-bio`, `idn.elf`, `idn.standards-legitimacy`

**Problem.** pub.cover-letters[0] gives as an L1-transfer error the pattern 'Dear Respected Editor, I humbly request you to kindly consider my manuscript…'. These formulae are recognisably South Asian English, a nativised variety that is many writers' first or dominant English. Labelling them L1 transfer turns a legitimate World English into interference, and the quoted string reads as caricature. World Englishes and postcolonial Englishes appear nowhere in the dataset (0 mentions), so learners whose English is an outer-circle variety have no place in it except as error. pub.academic-cv-bio[1] codes a national CV convention (photo, date of birth) as L1-transfer too, which is a category error.

**Recommendation.** Remove the caricature, recode both items, and acknowledge World Englishes in idn.elf or idn.standards-legitimacy.

**Proposed changes**

- `guidance` · `pub.cover-letters` · `difficulties[0].pattern`
  - Current: “Dear Respected Editor, I humbly request you to kindly consider my manuscript…”
  - Replace with: “Opening with several lines of courtesy formulae and expressions of humility before saying what the manuscript is.”
- `guidance` · `pub.cover-letters` · `difficulties[0].kind`
  - Current: “L1-transfer”
  - Replace with: “prior-schooling”
- `guidance` · `pub.cover-letters` · `difficulties[0].revealedBy`
  - Current: “Highly deferential formulae carried over from correspondence norms where elaborate honorifics signal respect.”
  - Replace with: “Letters whose first paragraph contains courtesy formulae but no title, contribution or fit, often following formal-letter conventions taught at school or used in other varieties of English.”
- `guidance` · `pub.cover-letters` · `difficulties[0].response`
  - Current: “Present this as a genre convention, not as a judgement of other norms.”
  - Replace with: “Present this as a convention of this genre, not as a judgement of other norms; such formulae are standard and respectful in many Englishes and need not be 'corrected' elsewhere.”
- `guidance` · `pub.academic-cv-bio` · `difficulties[1].kind`
  - Current: “L1-transfer”
  - Replace with: “prior-schooling”
- idn.elf or idn.standards-legitimacy: add a mastery statement recognising World Englishes, for example 'Distinguishes features of established varieties of English (e.g. Indian, Nigerian, Singaporean English) from learner errors, and explains when genre conventions rather than variety determine expected forms'.

### R5-11 (stereotype)

**Topics:** `coh.writer-responsibility`, `reg.spoken-vs-written`, `arg.toulmin`

**Problem.** Contrastive-rhetoric stereotypes come back through ventriloquised learner voices and one nationality-specific study, even though idn.intercultural-rhetoric critiques Kaplan well. In coh.writer-responsibility[0], 'If I state my point at the start, the reader will think I am not subtle' is Hinds's reader-responsible (Japanese) writer put into a learner's mouth. In reg.spoken-vs-written[2] the response 'Acknowledge that writing traditions value different qualities… English-medium academic prose for information-dense, plainly organised sentences' implies that other traditions are ornamental. The arg.toulmin summary gives one study as the account of how L2 writers argue: 'Qin and Karabacak's analysis of Chinese EFL university students' argumentative essays… counter-argument and rebuttal elements were relatively infrequent'. That is the only nationality named in ARG, and it attaches a deficit to a national group.

**Recommendation.** Re-voice the difficulties as rationales that novice writers in any language hold. Add limits to the single-nationality study.

**Proposed changes**

- `guidance` · `coh.writer-responsibility` · `difficulties[0].pattern`
  - Current: “'If I state my point at the start, the reader will think I am not subtle.'”
  - Replace with: “'I build up to my main point so that the conclusion has more impact.'”
- `guidance` · `reg.spoken-vs-written` · `difficulties[2].response`
  - Current: “Acknowledge that writing traditions value different qualities, and make explicit”
  - Replace with: “Acknowledge that genres and teachers in every language, English included, value different qualities (school writing in English often rewards elaborate style too), and make explicit”
- `guidance` · `arg.toulmin` · `summary`
  - Current: “Qin and Karabacak's analysis of Chinese EFL university students' argumentative essays used a modified Toulmin scheme and found that counter-argument and rebuttal elements were relatively infrequent but associated with higher-rated essays.”
  - Replace with: “Qin and Karabacak's study of argumentative essays by EFL undergraduates at one Chinese university used a modified Toulmin scheme and found that counter-argument and rebuttal elements were relatively infrequent but associated with higher-rated essays; Wingate (2012) similarly reports that students at a UK university were often unclear about what argument requires, so the pattern reflects novice status and instruction, not nationality.”

### R5-12 (normativity)

**Topics:** `phr.academic-collocations`, `coh.linking-adverbials`, `voc.academic-verbs`, `voc.precision-near-synonyms`

**Problem.** The dataset rejects native-speaker norms in IDN, PRN and LIS but brings them back through learner-corpus research. Guidance summaries describe 'overuse' and 'underuse' relative to native student writing as learner shortcomings: 'Durrant and Schmitt's comparison of native and non-native writers suggests learners rely on frequent, general combinations' (phr.academic-collocations); 'Granger and Tyson's comparison of native and non-native student essays, report overuse of some connectors, underuse of others' (coh.linking-adverbials); 'L2 writers tend to rely on a narrow range of general verbs' (voc.academic-verbs). Contrastive interlanguage analysis measures difference from a reference corpus, often of novice native students, not deviation from good writing. The appropriate benchmark is expert disciplinary writing.

**Recommendation.** Reword these summaries so the comparison corpus is named, the result is framed as difference rather than error, and expert writing is the model.

**Proposed changes**

- `guidance` · `phr.academic-collocations` · `summary`
  - Current: “Durrant and Schmitt's comparison of native and non-native writers suggests learners rely on frequent, general combinations and underuse strongly associated but less frequent ones”
  - Replace with: “Durrant and Schmitt's comparison of writing by first-language and additional-language users of English suggests that the latter rely more on frequent, general combinations and use fewer strongly associated but less frequent ones (a comparison with first-language student writing, not with an ideal)”
- `guidance` · `coh.linking-adverbials` · `summary`
  - Current: “report overuse of some connectors, underuse of others and sentence-initial stacking”
  - Replace with: “report overuse of some connectors, underuse of others and sentence-initial stacking relative to first-language student essays (comparisons that measure difference from a reference corpus rather than error, so expert disciplinary writing is the better model)”
- `guidance` · `voc.academic-verbs` · `summary`
  - Current: “because L2 writers tend to rely on a narrow range of general verbs.”
  - Replace with: “because developing writers, including the L2 writers in Hinkel's data, often rely on a narrow range of general verbs.”

### R5-13 (balance)

**Topics:** `sem.turn-taking`, `res.supervision`, `grw.inclusive-collaboration`, `acu.hidden-curriculum`

**Problem.** The difficulty schema puts every problem inside the learner. The seven kinds (L1-transfer, developmental, conceptual, prior-schooling, overgeneralisation, performance, affective) have no category for barriers caused by others or by institutions. So sem.turn-taking[2], 'Entry attempts are ignored or talked over because the learner has been positioned as less competent', is coded affective, as though it were the learner's feeling. Likewise res.supervision[0] codes a supervisor's ambiguous hedged feedback as the student's L1-transfer problem. The guidance format has a difficulties array but nothing for learner resources. Only 26 of 210 prior-schooling responses acknowledge the value of earlier practice, and only 54 of 557 guidance records mention learner assets in their summary or contextNotes. Prior education therefore appears almost only as a source of problems.

**Recommendation.** Add a difficulty kind for positioning and institutional causes, and an optional learnerResources field to the guidance schema. Correct the misattributed items now.

**Proposed changes**

- AUTHORING.md section 4 and schema: add difficulty kind 'positioning' (barriers created by peers, staff, task or assessment design, e.g. being talked over, unclear criteria, inaccessible formats) and recode sem.turn-taking[2] and grw.inclusive-collaboration[0] to it. Add an optional guidance field 'learnerResources' (1–3 items: prior knowledge, languages or practices that transfer) and populate it first for prior-schooling-heavy topics.
- `guidance` · `res.supervision` · `difficulties[0].kind`
  - Current: “L1-transfer”
  - Replace with: “conceptual”
- `guidance` · `res.supervision` · `difficulties[0].response`
  - Current: “Note that this varies by individual supervisor.”
  - Replace with: “Note that this varies by individual supervisor and that many first-language English students misread hedged advice too; clarity is a shared responsibility, so where possible encourage supervisors to mark which suggestions are requirements.”

### R5-14 (coverage)

**Topics:** `idn.standards-legitimacy`, `cit.citation-functions`, `inf.source-evaluation`, `acu.critical-eap`

**Problem.** Decolonising curricula, racialisation and the politics of whose knowledge counts are missing. The dataset has 0 mentions of race, racialisation, raciolinguistics, colonial or decolonising, and none of epistemic injustice or the Global South. Canagarajah's centre/periphery argument appears only in PGR-oriented topics. No topic in CIT or INF asks learners to consider whose scholarship is cited, indexed or treated as 'authoritative', even though source evaluation teaches them to favour indexed, high-impact journals. idn.standards-legitimacy discusses native-speakerism without saying that judgements of 'nativeness' and 'accent' are often racialised.

**Recommendation.** Name racialised language judgements in idn.standards-legitimacy, proposing Flores and Rosa (2015) under proposedReferences: Flores, N., & Rosa, J. (2015). Undoing appropriateness: Raciolinguistic ideologies and language diversity in education. Harvard Educational Review, 85(2), 149–171. Verify before use. Add a citation-politics topic linked to inf.source-evaluation.

**Proposed changes**

- `topics` · `idn.standards-legitimacy` · `description`
  - Current: “understanding how native-speakerism, gatekeeping and language ideologies affect assessment, publication and participation.”
  - Replace with: “understanding how native-speakerism, gatekeeping and language ideologies, including the tendency to judge the same English differently depending on a speaker's perceived race, nationality or accent, affect assessment, publication and participation.”
- **Add topic** `cit.citation-politics` (CIT, CONCEPTUAL) “Whose knowledge is cited”: Recognise that citation and indexing practices shape whose knowledge becomes visible, including the dominance of English-language, Global North and highly indexed sources. Evaluate the range of perspectives in a reference list, and include relevant scholarship from other regions, languages and communities while still meeting the assignment's quality criteria.

## Minor findings

### R5-15 (normativity)

**Topics:** `crt.epistemic-beliefs`

**Problem.** The crt.epistemic-beliefs description presents the Perry/Kuhn sequence as a settled developmental path ('moving from treating knowledge as fixed facts transmitted by authorities, through treating all views as equally valid, towards evaluating claims as better or worse supported'). The guidance summary and reviewNote say these models came from a narrow sample and describe tendencies, but the topic text, which teachers and learners see first, does not. Together with the prior-schooling difficulty 'Just tell me the right answer', it suggests a developmental hierarchy on which learners from exam-oriented systems sit lower.

**Recommendation.** Qualify the model in the description itself.

**Proposed changes**

- `topics` · `crt.epistemic-beliefs` · `description`
  - Current: “moving from treating knowledge as fixed facts transmitted by authorities, through treating all views as equally valid, towards evaluating claims as better or worse supported.”
  - Replace with: “drawing on models, developed largely with US undergraduates, that describe a broad tendency rather than fixed stages: from treating knowledge as fixed facts transmitted by authorities, through treating all views as equally valid, towards evaluating claims as better or worse supported.”

### R5-16 (normativity)

**Topics:** `pub.multilingual-scholars`

**Problem.** The pub.multilingual-scholars[0] response tells doctoral writers that 'rejections usually concern content and fit'. No listed source supports that, and it sits awkwardly with the topic's own description of 'reviewer and editor attitudes to non-standard English'. It risks gaslighting PGR writers who have met real language bias.

**Recommendation.** Present the evidence as mixed and acknowledge documented language-related costs.

**Proposed changes**

- `guidance` · `pub.multilingual-scholars` · `difficulties[0].response`
  - Current: “Discuss evidence that all novice writers face difficulties and that rejections usually concern content and fit, while acknowledging real additional costs.”
  - Replace with: “Discuss evidence that all novice writers face rejection and that many rejections concern content and fit, while acknowledging that multilingual scholars report language-related reviewer comments and real additional costs (Flowerdew, 1999; Lillis & Curry, 2010).”

### R5-17 (tone)

**Problem.** Domain learnerSummaries are warm and use 'you', but several are too long or jargon-heavy for B1 learners. GRM, COH, STA, RDS and GAI each run to 46–48 words in a single sentence. Some use unexplained terms: 'corpora' (PHR), 'write genres nobody has taught you' (GES), 'progression assessments' (TST), 'OSCOLA referencing' (DLW). The INT summary frames integrity mainly as avoiding misconduct. Learner-facing voice is otherwise assimilationist: only ACU ('and, where appropriate, question them') and IDN tell learners that norms can be questioned.

**Recommendation.** Keep learnerSummaries to two sentences of 35 words or fewer. Gloss or remove technical terms.

**Proposed changes**

- `domains` · `PHR` · `learnerSummary`
  - Current: “with corpora and phrase resources”
  - Replace with: “with corpus tools (searchable collections of real academic texts) and phrase resources”
- `domains` · `GES` · `learnerSummary`
  - Current: “so that you can write genres nobody has taught you.”
  - Replace with: “so that you can write new types of text that nobody has taught you.”
- `domains` · `STA` · `learnerSummary`
  - Current: “You will learn how to show how sure you are about a claim, how to evaluate other people's work fairly, when and how to make your own voice visible, and how to keep clear for the reader which ideas are yours and which come from your sources.”
  - Replace with: “You will learn how to show how sure you are about a claim and how to evaluate other people's work fairly. You will also learn when and how to make your own voice heard, and how to show the reader which ideas are yours and which come from your sources.”
- `domains` · `GAI` · `learnerSummary`
  - Current: “You will learn how generative AI tools work and where they fail, how to find out what AI use is allowed in each task, how to acknowledge and check AI use, and how to use AI to develop your English and research skills without losing your own voice.”
  - Replace with: “You will learn how generative AI tools work and where they fail, and how to find out what AI use is allowed in each task. You will also practise acknowledging and checking AI use, using AI to develop your English while keeping your own voice, and responding if a detector wrongly flags your work.”
- `domains` · `DLW` · `learnerSummary`
  - Current: “supported by legal authority and OSCOLA referencing.”
  - Replace with: “supported by legal authority and the referencing style your law school requires (often OSCOLA in the UK).”

### R5-18 (normativity)

**Topics:** `gai.detection-limits`, `lis.accent-variation`

**Problem.** Topic-level text, as distinct from reports of studies that used the terms, keeps the native/non-native binary that IDN critiques: gai.detection-limits description ('misclassify writing by non-native English writers') and masteryEvidence[1] ('misclassified non-native English writing'), and lis.accent-variation masteryEvidence[3] ('a regional or non-native accent'). The GAI domain summary already uses 'writers using English as an additional language'. The topics should follow it.

**Recommendation.** Use 'users of English as an additional language' in Claude-authored text, and keep 'non-native' only when reporting a study's own categories.

**Proposed changes**

- `topics` · `gai.detection-limits` · `description`
  - Current: “misclassify writing by non-native English writers as AI-generated at high rates”
  - Replace with: “misclassify writing by people who use English as an additional language as AI-generated at high rates”
- `topics` · `gai.detection-limits` · `masteryEvidence[1]`
  - Current: “Summarises evidence that detectors have misclassified non-native English writing as AI-generated”
  - Replace with: “Summarises evidence that detectors have misclassified writing by users of English as an additional language as AI-generated, and the limits of that evidence”
- `topics` · `lis.accent-variation` · `masteryEvidence[3]`
  - Current: “without equating a regional or non-native accent with low competence”
  - Replace with: “without equating a regional, second-language or unfamiliar accent with low competence”

### R5-19 (deficit)

**Topics:** `arg.counterarguments`

**Problem.** The arg.counterarguments description says 'Anticipating objections is a hallmark of mature argument… but learners rarely do it spontaneously'. 'Mature' implies a developmental hierarchy, and 'learners' implies EAP students in particular. Kuhn's evidence, cited in crt.multiple-perspectives, shows that most adults in any language rarely generate counter-arguments unprompted.

**Recommendation.** Reword without the developmental hierarchy.

**Proposed changes**

- `topics` · `arg.counterarguments` · `description`
  - Current: “Anticipating objections is a hallmark of mature argument and of higher-rated student essays, but learners rarely do it spontaneously.”
  - Replace with: “Anticipating objections is a feature of well-developed argument and of higher-rated student essays, but most writers, in any language, rarely do it without explicit teaching.”

### R5-20 (inclusion)

**Topics:** `acu.academic-literacies`, `idn.academic-identity`, `crt.reflexivity`

**Problem.** Some mastery evidence asks learners to disclose identity conflict as proof of competence. acu.academic-literacies masteryEvidence[2]: 'Identifies a point in their own writing where institutional conventions and their preferred identity or voice were in tension…'. idn.academic-identity masteryEvidence[3] is similar. crt.reflexivity's guidance protects sensitive disclosure, but these topics do not. Learners who are refugees, LGBTQ+, or from contexts where such disclosure is risky need an alternative route to show mastery.

**Recommendation.** Offer a case-based or published-account alternative.

**Proposed changes**

- `topics` · `acu.academic-literacies` · `masteryEvidence[2]`
  - Current: “Identifies a point in their own writing where institutional conventions and their preferred identity or voice were in tension, and explains how they negotiated it”
  - Replace with: “Identifies a point in their own writing, or in a case or published account if they prefer, where institutional conventions and a writer's preferred identity or voice were in tension, and explains how the tension was or could be negotiated”

### R5-21 (normativity)

**Topics:** `coh.writer-responsibility`, `idn.intercultural-rhetoric`

**Problem.** Hinds's reader/writer responsibility typology is contested (the reviewNote says so), yet it is the title of a B1+ foundation topic, 'Reader and writer responsibility', that sits upstream of 77 topics. The practical skill, making links explicit for a given reader, does not need the cross-cultural typology. The typology belongs in idn.intercultural-rhetoric (B2+, already critical).

**Recommendation.** Rename the topic around the skill and leave the Hinds discussion to idn.intercultural-rhetoric.

**Proposed changes**

- `topics` · `coh.writer-responsibility` · `name`
  - Current: “Reader and writer responsibility”
  - Replace with: “Making reasoning explicit for the reader”
- coh.writer-responsibility guidance: move the Hinds/Connor/Kubota discussion from the summary to idn.intercultural-rhetoric and keep this record focused on reader-oriented explicitness; keep the ID as fixed by the skeleton.

## Notes on method and limits

- All quoted current text was extracted programmatically from data/*.json. The JSON excerpts were validated by sequential application per field, so several edits to the same field compose correctly.
- I give counts where the method allows them. The count of about 28 deference records came from a keyword script plus manual filtering of its 39 hits.
- Two proposed references (Kobayashi & Rinnert, 1992; Flores & Rosa, 2015) are not in references.json. They are named in recommendations only, should go through proposedReferences and be verified, and no edit text depends on them. The Wingate (2012) and Flowerdew (1999) / Lillis & Curry (2010) attributions in the proposed edits use works already in the bibliography.
- Strengths I would preserve:
  - idn.intercultural-rhetoric, idn.standards-legitimacy, idn.diversity-as-resource and acu.critical-eap.
  - int.similarity-reports and int.plagiarism (the patchwriting and intention handling).
  - The L1-transfer records, which are mechanism-based.
  - prn.intelligibility and prs.nonverbal, which avoid accent reduction and the 7-38-55 myth.
  - grw.inclusive-collaboration, which makes inclusion the responsibility of proficient peers.

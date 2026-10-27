# R2: Applied-linguistics expert review

**Reviewer persona:** professor of applied linguistics (corpus linguistics, SFL, academic discourse, L2 phonology, instructed SLA)
**Scope:** every topic and guidance record in VOC (22), PHR (10), REG (10), GRM (29), SEN (12), COH (13), STA (15), FUN (14), PRN (11) and LIS (18), which is 154 topics; plus the in-scope bibliography entries, CEFR ranges, framework mappings and prerequisite edges into these domains.
**Machine-readable findings:** `reports/review/R2-linguistics.json` (45 findings, 83 proposed changes). Every `edit-field` `oldText` was checked to occur exactly once in the named field of the current `data/topics.json` or `data/teaching-guidance.json`.

## Overall verdict

**Linguistically sound and well informed by research, but with a set of specific misclassifications, over-generalised rules and weakly grounded L1-transfer claims to fix before release.** No findings are rated critical.

The dataset is unusually good for an EAP resource. In nearly all places it holds positions a corpus or SFL linguist would endorse:

- Phrasal rather than clausal complexity (Biber & Gray 2010; Biber, Gray & Poonpon 2011; Lu 2011).
- The passive taught as a matter of agency and information flow, not objectivity (Tarone et al.).
- Unattended *this* treated as a clarity judgement, not a ban.
- Defining *which* accepted.
- Singular *data* treated as a style choice.
- Coverage thresholds taught as approximations, attributed correctly (Hu & Nation 2000 for fiction; Laufer & Ravenhorst-Kalovski 2010 for 95%/98%; Schmitt, Jiang & Grabe 2011 for a linear relationship; Nation 2006 for 8–9k and 6–7k families).
- The intelligibility principle with Munro and Derwing's three constructs correctly defined.
- The Lingua Franca Core presented as influential but contested.
- Chaudron and Richards (1986) set against Flowerdew and Tauroza (1995) on micro-markers.
- Learner-corpus connector findings mostly hedged.

Prescriptive myths (never use *I*, never start with *But*, the passive is objective, longer sentences are better) are identified as myths throughout. Most mastery evidence and diagnostics test the construct named; many use transcription, sentence-pair or slot tasks rather than self-report.

The problems fall into five groups:

1. **Misapplied taxonomies.** Hyland's bundle taxonomy is applied to the wrong items (R2-01). Grammatical metaphor is reduced to nominalisation (R2-02). Martin and White's *endorse* is missing (R2-03). Tang and John's *representative* role is missing (R2-37), and the Appraisal attitude categories are incomplete (R2-36).
2. **L1-transfer claims that do not hold up linguistically.** One prominence claim is reused for emphatic stress (R2-04). SOV verb position is blamed for heavy subjects (R2-05). Fixed stress is said to block stress-based segmentation (R2-06). Generic-*the* overuse is assigned to article-less L1s (R2-09). Narrow pitch range and missed irony are presented as L1 traits (R2-28, R2-29). The dataset's L1 statements are carefully non-stereotyping in tone; the problem is the mechanisms.
3. **Over-generalised rules presented to learners as facts.** Reporting tense is said to signal endorsement (R2-07). Expanding review intervals are attributed to Cepeda (R2-08). *The* is said to be licensed by any *of*-phrase (R2-44). *-ize* is implied to be American (R2-15). The dangling-participle rule is given without exceptions (R2-25). *-teen*/*-ty* is reduced to stress (R2-31).
4. **Assessment items whose key is wrong.** Grammatical forms are marked as errors (R2-17, R2-18, R2-19, R2-26), and the connected-speech diagnostic grades an intelligible speaker as a gap (R2-30).
5. **Coverage gaps.** Genitive choice (R2-11), ergative and unaccusative verbs (R2-12), bundle structural types (R2-40), HVPT (R2-41), compound stress (R2-42) and conversion (R2-22).

There is also housekeeping: about 30 records still call verified references "proposed", and two user-facing summaries print "(…, proposed)" in running text (R2-13).

**CEFR placement** is plausible almost everywhere. It broadly matches English Grammar Profile and English Vocabulary Profile intuitions: articles and quantifiers from B1, nominalisation, non-finite clauses and given–new from B2, clefts and fronting from B2+, and stance and dialogic positioning extending to C2. The exceptions are three range ends (R2-33) and one hard prerequisite that holds back a B1+ pronunciation topic until a B2 discourse topic is reached (R2-10).

## Findings by severity

Each finding gives the evidence (topic ids and the quoted text being corrected) and a concrete correction. In the change lists, `old → new` excerpts are shortened only where the full text is in the JSON.

### Critical (0)

None. No finding misleads teaching across a whole domain or invalidates a topic.

### Major (12)

#### R2-01. attribution: `phr.bundles-research-oriented`, `phr.bundles-text-oriented`

**Finding.** The research-oriented bundle topic is presented in Hyland's (2008) functional taxonomy, but two of its five example bundles, 'in the case of' and 'on the basis of', are text-oriented framing signals in that same taxonomy (Hyland 2008 lists them with 'with respect to the', 'in the presence of' and 'with the exception of'). The error carries into the assessment prompt and the diagnostic, so learners would be tested on misclassified items. Hyland's research-oriented subcategory 'topic' is also missing from the description.

**Recommendation.** Replace the two framing bundles with research-oriented ones from Hyland (2008), for example 'the role of the', 'the use of the', 'a wide range of', 'one of the most' and 'at the beginning of'. Add 'topic' to the subcategory list, and list the two moved bundles as framing signals in phr.bundles-text-oriented.

**Proposed changes:**

- `phr.bundles-research-oriented` · topics · `description`: "such as location, procedure, quantification and description ('the extent to which', 'in the case of', 'the nature of the', 'at the same time', 'on the basis of')" → "such as location, procedure, quantification, description and topic ('the extent to which', 'the role of the', 'the nature of the', 'at the same time', 'a wide range of')"
- `phr.bundles-research-oriented` · topics · `assessmentPrompt`: "Give five bundles ('the extent to which', 'in the case of', 'the nature of the', 'on the basis of', 'the relationship between')" → "Give five bundles ('the extent to which', 'the role of the', 'the nature of the', 'a wide range of', 'the relationship between')"
- `phr.bundles-research-oriented` · guidance · `diagnostic.task`: "'The results indicate the extent to which…' and 'On the basis of…'" → "'The results indicate the extent to which…' and 'This study examines the role of…'"
- `phr.bundles-research-oriented` · guidance · `diagnostic.strongResponse`: "a noun phrase after 'on the basis of'" → "a noun phrase after 'the role of'"
- `phr.bundles-text-oriented` · topics · `description`: "framing ('in terms of the', 'with respect to the')" → "framing ('in terms of the', 'with respect to the', 'in the case of', 'on the basis of')"

#### R2-02. accuracy: `grm.nominalisation`, `dse.scientific-language`

**Finding.** The topic is titled 'Nominalisation and grammatical metaphor', but both the record and dse.scientific-language ('nominalisation (grammatical metaphor)') treat the two terms as synonyms. In Halliday and Martin (1993), grammatical metaphor also covers logical metaphor, where conjunctive relations are realised inside the clause as verbs, nouns or prepositions (because → leads to, causes, the cause of, due to), and interpersonal metaphor (I think → it is likely that). The record's own assessment prompt depends on logical metaphor without naming it: 'Because of this, universities recruited…' becomes '…led to increased recruitment'. Logical metaphor is what makes the packed causal sentences of academic prose hard to read, so leaving it out loses the most teachable half of the concept.

**Recommendation.** Define grammatical metaphor in full, keep nominalisation as the central case, and add a mastery statement on realising causal and temporal relations within the clause. Change the DSE wording to 'grammatical metaphor (especially nominalisation)'.

**Proposed changes:**

- `grm.nominalisation` · topics · `description`: "Express processes and qualities as nouns (X increased sharply → the sharp increase in X) so that" → "Express processes and qualities as nouns (X increased sharply → the sharp increase in X), and logical relations inside the clause as verbs, nouns or prepositions (because X rose, Y fell → the rise in X caused a fall in Y), so that"
- `grm.nominalisation` · guidance · `summary`: "Systemic functional work on 'grammatical metaphor' explains how nominalisation turns processes into things" → "Systemic functional work on 'grammatical metaphor' covers ideational metaphor (processes and qualities realised as nouns; logical relations such as cause realised inside the clause as verbs, nouns or prepositions: leads to, the cause of, due to) and interpersonal metaphor (I think → it is likely that). For nominalisation, it explains how processes become things"
- grm.nominalisation: add masteryEvidence 'Rewrites a conjunction-linked pair of clauses as a single clause in which the relation is expressed by a verb, noun or preposition (because → led to, resulted in, the reason for, due to) and explains what becomes less explicit.'
- `dse.scientific-language` · topics · `description`: "nominalisation (grammatical metaphor)" → "grammatical metaphor (especially nominalisation)"

#### R2-03. accuracy: `sta.dialogic-positioning`

**Finding.** The record lists the contracting options in Martin and White's engagement system as 'denying, countering, concurring, pronouncing' and leaves out endorse. Endorse is the proclaim option realised by 'X shows/demonstrates/proves that', and it is the main contracting resource in research writing. The diagnostic depends on it ('Research has shown that X' … 'the second endorses'), but ME[0] does not include it and ME[2] gives only the two expansive attribution choices (acknowledge, distance). As written, learners cannot use the topic's own categories to classify the most frequent contracting attribution in literature reviews.

**Recommendation.** Add endorse to the contracting set and rewrite ME[2] as a three-way choice: endorse (contracting) versus acknowledge or distance (expanding).

**Proposed changes:**

- `sta.dialogic-positioning` · topics · `description`: "or contracting it (denying, countering, concurring, pronouncing)" → "or contracting it (denying, countering, concurring, pronouncing, endorsing)"
- `sta.dialogic-positioning` · topics · `masteryEvidence[0]`: "contracting (deny, counter, concur, pronounce)" → "contracting (deny, counter, concur, pronounce, endorse)"
- `sta.dialogic-positioning` · topics · `masteryEvidence[2]`: "Chooses between neutral attribution (X reports) and distancing (X claims) according to the writer's position" → "Chooses between endorsing attribution (X shows, X demonstrates), which contracts the dialogue, and acknowledging (X reports, X argues) or distancing (X claims) attribution, which keeps it open, according to the writer's position"

#### R2-04. l1-claim: `lis.relevance-markers`

**Finding.** DIF[1] reuses the prominence L1-transfer claim ('Learners whose first language marks focus mainly through word order or particles rather than pitch prominence do not treat heavy stress or slowing as a cue to importance') for a different phenomenon. Emphatic stress, slowing, pausing and repetition are paralinguistic cues to importance found across languages, including languages that mark information focus with particles or word order. The language-specific part of English prosody is the placement of nuclear accent and de-accenting of given information, which prn.prominence already covers. As written, the record attributes to whole language groups an inability to perceive something they use in their own language. The more likely mechanism is attentional: under high decoding load, listeners attend to lexical content.

**Recommendation.** Reclassify the difficulty as developmental and restate the mechanism as attention and processing load. If an L1 claim is kept, limit it to nuclear-accent placement and point to prn.prominence.

**Proposed changes:**

- `lis.relevance-markers` · guidance · `difficulties[1].kind`: "L1-transfer" → "developmental"
- `lis.relevance-markers` · guidance · `difficulties[1].pattern`: "Learners whose first language marks focus mainly through word order or particles rather than pitch prominence do not treat heavy stress or slowing as a cue to importance." → "Learners attend mainly to lexical content and, especially when decoding load is high, do not use the speaker's voice (heavy stress, slowing, pausing, repetition) as a cue to importance."

#### R2-05. l1-claim: `sen.clarity-end-weight`

**Finding.** DIF[1] claims that 'Writers whose first language places the verb at the end of the clause may produce late-verb sentences in English.' This has no support in the bibliography and does not match the error data. Transfer of basic verb-final order is rare beyond beginner level, and heavy pre-verbal subjects are found in L2 and L1 novice academic writing across backgrounds; they rise as writers start to compress information into noun phrases (Biber & Gray). If an L1 effect is to be claimed, the plausible candidate is head-final languages with prenominal modifiers and relative clauses (Japanese, Korean, Turkish, Chinese), which may favour heavy pre-head modification. That is a noun-phrase effect, not a verb-position effect.

**Recommendation.** Reclassify as developmental. If an L1 note is kept, hedge it and base it on prenominal modification, not clause-final verbs.

**Proposed changes:**

- `sen.clarity-end-weight` · guidance · `difficulties[1].kind`: "L1-transfer" → "developmental"
- `sen.clarity-end-weight` · guidance · `difficulties[1].pattern`: "Writers whose first language places the verb at the end of the clause may produce late-verb sentences in English." → "Long pre-verbal subjects delay the main verb, a pattern common across first-language backgrounds as writers begin to compress information into noun phrases; writers whose first language places modifiers, including relative clauses, before the noun may favour heavy pre-head modification."

#### R2-06. l1-claim: `lis.word-segmentation`

**Finding.** There are two problems. (1) The description says 'stressed (strong) syllables', but the strong-syllable segmentation finding (Cutler & Carter 1987; Cutler & Norris 1988), on which Field (2003) builds, concerns strong syllables, meaning syllables with full, unreduced vowels. Some strong syllables carry no primary stress, so 'stressed' and 'strong' are not the same. (2) DIF[0] claims that learners whose L1 has 'fixed stress' do not use English strong syllables as onset cues. Listeners whose L1 has fixed initial stress (for example Finnish, Hungarian, Czech) are known to use stress as a word-boundary cue (Vroomen, Tuomainen & de Gelder 1998), so the claim is wrong for an important group. Transfer of L1 segmentation routines (syllable-based in French, mora-based in Japanese; Cutler 2012) is the better-supported mechanism.

**Recommendation.** Correct the terminology and restate the L1 mechanism as transfer of L1 segmentation routines. Add Cutler and Carter (1987) or Cutler (2012) to the bibliography as the primary source.

**Proposed changes:**

- `lis.word-segmentation` · topics · `description`: "using stressed (strong) syllables, which in English often mark the start of content words" → "using strong syllables (syllables with full, unreduced vowels, including those carrying primary stress), which in English mark the start of most content words"
- `lis.word-segmentation` · guidance · `difficulties[0].pattern`: "Learners whose first language has fixed stress or little contrast between strong and weak syllables do not use English strong syllables as onset cues." → "Learners transfer the segmentation routines of their first language (for example syllable-based segmentation in French or mora-based segmentation in Japanese, or expectations of fixed final or penultimate stress), so English strong syllables are not used, or are misused, as onset cues."
- Add cutlercarter1987 (Cutler, A., & Carter, D. M. (1987). The predominance of strong initial syllables in the English vocabulary. Computer Speech and Language, 2, 133–142) or Cutler (2012), Native Listening (MIT Press), to references.json and cite it in lis.word-segmentation guidance.

#### R2-07. myth: `grm.tense-in-reporting`

**Finding.** ME[2] asks learners to explain 'how a shift from past to present tense in reporting a finding increases the writer's endorsement of it'. This makes a tendency into a rule. Swales's account associates present tense with currency and generality, not endorsement. In the humanities and much of the social sciences, present-tense reporting ('Smith argues…') is the unmarked default and is used for positions the writer then rejects. Hyland (1999) shows endorsement is signalled mainly by the reporting verb (shows versus claims). The assessment prompt rewards the same over-generalisation, so a learner from a humanities field who answers accurately would be marked down.

**Recommendation.** Recast tense as signalling currency and generality where past tense is the field default, and attribute endorsement mainly to verb choice. Revise ME[2], the assessment prompt and ACT[0] to match.

**Proposed changes:**

- `grm.tense-in-reporting` · topics · `masteryEvidence[2]`: "Explains how a shift from past to present tense in reporting a finding increases the writer's endorsement of it" → "Explains how, in fields where past tense is the default for reporting studies, a shift to present tense can present a finding as current and generalisable, and why in fields that report positions in the present (Smith argues…) tense alone does not signal endorsement"
- `grm.tense-in-reporting` · topics · `assessmentPrompt`: "Look for answers that link tense to currency and endorsement, not only to when the study was published." → "Look for answers that link tense to currency and generality, recognise that endorsement is signalled mainly by the reporting verb (shows versus claims) and that field conventions differ, and do not tie tense only to when the study was published."
- `grm.tense-in-reporting` · guidance · `activities[0].intendedInsight`: "Tense in reporting signals currency and writer endorsement, not just the date of publication." → "Tense in reporting can signal currency and generality, not just the date of publication; endorsement depends more on the reporting verb and on field conventions."

#### R2-08. attribution: `voc.deliberate-learning-systems`

**Finding.** The record recommends review 'at expanding intervals' and says Cepeda et al. (2006) and Roediger and Karpicke (2006) explain why 'retrieval and expanding intervals outperform rereading'. Cepeda et al. is a meta-analysis of distributed versus massed practice. It does not show that expanding schedules beat equally spaced ones, and direct comparisons are mixed or favour equal spacing (Karpicke & Roediger 2007; Karpicke & Bauernschmidt 2011; Kang et al. 2014). Expanding intervals are a reasonable software default, but the cited works do not support them as a research-backed requirement.

**Recommendation.** Say 'spaced' rather than 'expanding', state that the evidence on schedule shape is mixed, and keep expanding intervals as an acceptable implementation.

**Proposed changes:**

- `voc.deliberate-learning-systems` · topics · `description`: "and review by retrieval at expanding intervals" → "and review by retrieval at spaced intervals (expanding or equal; the evidence favours spacing itself more than any particular schedule)"
- `voc.deliberate-learning-systems` · topics · `masteryEvidence[3]`: "Schedules reviews at increasing intervals using software or a manual system" → "Schedules spaced reviews (for example at increasing intervals) using software or a manual system"
- `voc.deliberate-learning-systems` · guidance · `summary`: "explains why retrieval and expanding intervals outperform rereading" → "explains why retrieval and spaced (distributed) review outperform massed rereading; whether expanding schedules beat equally spaced ones is not settled"
- Optionally add Karpicke, J. D., & Roediger, H. L. (2007). Expanding retrieval practice promotes short-term retention, but equally spaced retrieval enhances long-term retention. Journal of Experimental Psychology: Learning, Memory, and Cognition, 33(4), 704–719.

#### R2-09. l1-claim: `grm.articles`

**Finding.** DIF[0] gives 'overuse of the with generic plurals and uncountables (The education is important)' as typical of writers whose L1 has no articles. Generic-'the' overuse with abstract nouns is the signature of L1s that use the definite article generically: Romance languages, German, Greek and Arabic. DIF[1] says this itself. For article-less L1s (Chinese, Japanese, Korean, Russian and others) the robust findings are omission and a fluctuation in which 'the' tracks specificity rather than definiteness (Ionin, Ko & Wexler 2004), giving 'the' for specific but not-yet-mentioned referents. The current wording assigns the error to the wrong group.

**Recommendation.** Move the generic-'the' example to DIF[1] only, and give DIF[0] the omission and specificity patterns. Add Ionin et al. (2004) to the bibliography.

**Proposed changes:**

- `grm.articles` · guidance · `difficulties[0].revealedBy`: "Omitted articles with singular countable nouns and overuse of 'the' with generic plurals and uncountables (The education is important), in writers whose first languages do not grammaticalise definiteness through articles." → "Omitted articles with singular countable nouns, and fluctuating use of 'the' that tracks specificity rather than definiteness (for example 'the' for a particular referent the reader cannot yet identify), in writers whose first languages do not grammaticalise definiteness through articles."
- Add Ionin, T., Ko, H., & Wexler, K. (2004). Article semantics in L2 acquisition: The role of specificity. Language Acquisition, 12(1), 3–69.

#### R2-10. level: `prn.prominence`, `coh.given-new`

**Finding.** dependencies.json makes coh.given-new (B2–C1, written information structure) a hard prerequisite of prn.prominence (B1+–C1, taught from foundation). This is the only hard edge into PRN/LIS where the prerequisite starts higher than the dependent. It is also wrong linguistically: de-accenting given information and accenting new or contrastive information is learnt through spoken minimal contexts (the question–answer pairs in the record's own diagnostic) and needs no prior written-discourse instruction. Pathway generation will hold back a foundation-level pronunciation topic until B2.

**Recommendation.** Make the edge soft, or reverse it as a soft edge (prosodic prominence → coh.given-new), since the spoken contrast is a useful way into the written principle.

**Proposed changes:**

- dependencies.json: change {topicId: 'prn.prominence', prerequisiteId: 'coh.given-new'} strength 'hard' → 'soft', and reword reason to 'Prominence work makes the given–new distinction audible; the written-discourse treatment can follow or run in parallel.'

#### R2-11. coverage: `grm.np-premodification`, `grm.np-postmodification`

**Finding.** There is no topic or mastery statement on genitive choice ('the study's aims' / 'the aims of the study' / 'study aims'), searching for 'genitive' finds nothing. This is a core noun-phrase decision in academic writing. Biber and Gray (2016) document a historical rise in s-genitives with inanimate heads in academic prose, and many learners still apply the school rule 'no 's with inanimate nouns', producing long of-chains. Learners whose L1 has only an of-type construction also produce 'the results of the analysis of the data of the survey'. The noun-phrase cluster covers premodification and postmodification but not the choice between them, which is where the genitive sits.

**Recommendation.** Add a topic, or at minimum a mastery statement and a difficulty in grm.np-premodification, on choosing among s-genitive, of-phrase and noun premodifier, with the inanimate-'s myth as a difficulty.

**Proposed changes:**

- Add topic `grm.genitive-choice` "Genitive and noun-modifier choices" (GRM, B1+–C1): Choose between the s-genitive (the study's aims; Piaget's theory), the of-phrase (the aims of the study) and a noun premodifier (study aims) according to the animacy and length of the possessor, given–new order and field convention, and avoid long chains of of-phrases. Corpus evidence shows the s-genitive with inanimate nouns is established and increasing in academic prose, so the school rule against it is a myth. Prerequisites: grm.np-premodification, grm.np-postmodification, sen.apostrophes-hyphens-dashes. Topic IDs are fixed in authoring/skeleton.txt; if a new ID is not possible, add the content to grm.np-premodification as below.
- Alternative: add to grm.np-premodification masteryEvidence 'Chooses between the s-genitive, an of-phrase and a noun premodifier (the study's aims / the aims of the study / study aims) according to possessor length, information order and field convention' and a difficulty (prior-schooling) 'Avoids 's with inanimate nouns, producing chains of of-phrases'.

#### R2-12. coverage: `grm.passive-voice`

**Finding.** Two connected gaps. (1) DIF[1] covers '*The problem was happened' but explains it as L1 constructions 'resembling the passive'. The SLA literature describes it as overpassivisation of unaccusative verbs (happen, occur, arise, appear, emerge), whose subject undergoes rather than performs the event. It is attested across many L1 backgrounds and is largely developmental (Zobl 1989; Yip 1995; Oshita 2000). (2) Ergative change-of-state verbs (increase, decrease, change, improve, develop, open), which can be used transitively and intransitively, appear nowhere in the dataset (no matches for 'ergative' or 'unaccusative'). They drive voice choices in process description, methods and data commentary ('the temperature increased' versus 'the temperature was increased'), and confusion between them changes whether an agent is implied.

**Recommendation.** Name the mechanism correctly, add ergative verbs to the response, and add a mastery statement on choosing between intransitive and passive with change-of-state verbs.

**Proposed changes:**

- `grm.passive-voice` · guidance · `difficulties[1].revealedBy`: "Passives formed with intransitive verbs, sometimes where the first language marks such events with a construction resembling the passive." → "Passives formed with unaccusative intransitive verbs (happen, occur, arise, emerge, appear), whose subject undergoes rather than performs the event; this overpassivisation is attested across many first-language backgrounds and is largely developmental."
- `grm.passive-voice` · guidance · `difficulties[1].response`: "provide a short list of common academic intransitive verbs (occur, arise, emerge, happen)." → "provide a short list of common academic intransitive verbs (occur, arise, emerge, happen), and contrast them with ergative verbs that work both ways (The temperature increased / The researchers increased the temperature; the rate changed / the dose was changed)."
- grm.passive-voice: add masteryEvidence 'Chooses between intransitive and passive uses of change-of-state verbs (prices rose / prices were raised; the rate increased / the dose was increased) according to whether an agent is implied.' Cross-reference fun.describing-process and dat.describing-trends.

### Minor (33)

#### R2-13. attribution: `grm.anticipatory-it`, `grm.linking-adverbial-placement`, `grm.reference-pronouns`, `sen.sentence-boundaries`, `voc.abstract-shell-nouns`, `voc.technical-terminology` and 24 more

**Finding.** About 30 guidance records in scope still describe references as 'proposed' or 'not yet in the bibliography' (for example hylandmilton1997, rubin1992, hewings2002, grangertyson1996, graycortes2011, murphykandil2004, field2003segmentation, fahnestock1986), but references.json marks every one as present and most as web-verified. Two user-facing summaries print the hedge in running text: grm.anticipatory-it '(Hewings & Hewings, 2002, proposed)' and grm.linking-adverbial-placement '(Granger, 1998; Granger & Tyson, 1996, proposed)'. Two review notes ask authors to 'check' whether Chang and Swales (1999) examined unattended 'this' and sentence-initial conjunctions. They did: both are among the ten informal features in that study.

**Recommendation.** Remove 'proposed' from the summaries and the stale review notes, and resolve the two Chang and Swales notes.

**Proposed changes:**

- `grm.anticipatory-it` · guidance · `summary`: "(Hewings & Hewings, 2002, proposed)" → "(Hewings & Hewings, 2002)"
- `grm.linking-adverbial-placement` · guidance · `summary`: "(Granger, 1998; Granger & Tyson, 1996, proposed)" → "(Granger, 1998; Granger & Tyson, 1996)"
- `grm.reference-pronouns` · guidance · `reviewNotes[0]`: "Check that unattended anaphoric this is among the features examined by Chang and Swales (1999)." → "Chang and Swales (1999) include unattended anaphoric 'this' among the ten informal features they examined; Gray and Cortes (2011) also document unattended this/these in published prose."
- `sen.sentence-boundaries` · guidance · `reviewNotes[0]`: "Check that sentence-initial conjunctions are among the informal features examined by Chang and Swales (1999) before relying on that citation for the claim." → "Chang and Swales (1999) include sentence-initial conjunctions among the ten informal features they examined."
- Remove the 'X is a proposed reference' sentences from reviewNotes in the topics listed in topicIds wherever references.json records the key as present (web-verified or curator-checked).

#### R2-14. attribution: `coh.linking-adverbials`

**Finding.** The description says 'Learner corpora show both overuse of a small set of sentence-initial connectors and mismatches between connector and relation'. Read as a general claim, this goes further than the sources: Granger and Tyson (1996) found no overall overuse among French learners (overuse of some items, underuse of others), and Altenberg and Tapper (1998) found Swedish learners underused connectors overall. The guidance summary states this correctly, but the description does not.

**Recommendation.** Bring the description in line with the summary's hedged wording.

**Proposed changes:**

- `coh.linking-adverbials` · topics · `description`: "Learner corpora show both overuse of a small set of sentence-initial connectors and mismatches between connector and relation" → "Learner corpora show, varying by learner group, overuse of some connectors, underuse of others, a preference for sentence-initial position and mismatches between connector and relation"

#### R2-15. myth: `voc.spelling-conventions`

**Finding.** The assessment asks learners to make a paragraph 'consistently British … (including -ise/-ize)', which implies that -ize is American. Oxford spelling (-ize with -yse: organize, analyse) is standard British usage (OUP, Nature, many UK journals). Only -yze (analyze) is exclusively American. A learner using Oxford spelling correctly would be marked wrong.

**Recommendation.** State that either -ise or -ize is acceptable in British English if applied consistently, and that -yze is American only.

**Proposed changes:**

- `voc.spelling-conventions` · topics · `assessmentPrompt`: "Check consistency (including -ise/-ize)" → "Check consistency (accepting either -ise or Oxford -ize as British if applied consistently, but treating -yze as American only)"

#### R2-16. myth: `phr.bundles-text-oriented`

**Finding.** DIF[0]'s response, 'Teach the paired frame on the one hand … on the other hand', suggests that the second half needs the first. In expert prose, 'on the other hand' most often occurs without 'on the one hand'. The construct being taught is that it introduces a contrasting alternative or perspective.

**Recommendation.** Present the paired frame as optional.

**Proposed changes:**

- `phr.bundles-text-oriented` · guidance · `difficulties[0].response`: "Teach the paired frame 'on the one hand … on the other hand' and alternatives for addition." → "Teach that 'on the other hand' introduces a contrasting alternative or perspective (the paired frame with 'on the one hand' is one option, but expert writers often use 'on the other hand' alone), and offer alternatives for addition."

#### R2-17. assessment: `phr.verb-noun-collocation-accuracy`

**Finding.** The diagnostic sentence 'how temperature raises crop yields' is grammatical: transitive 'raise' with 'temperature' as agent is correct. So the item tests nothing about the raise/rise contrast it is meant to target, and the strong response ('checks whether raises or increases with the right subject is meant') is muddled. DIF[2]'s example 'prices were raised by 5% used to mean prices went up' is also not an error. It implies an agent, which may or may not be intended.

**Recommendation.** Put a genuine raise/rise error into the diagnostic and rewrite the strong response and DIF[2] example to match.

**Proposed changes:**

- `phr.verb-noun-collocation-accuracy` · guidance · `diagnostic.task`: "'In this essay I will make a research on how temperature raises crop yields.'" → "'In this essay I will make a research on why crop yields raise when temperatures are high.'"
- `phr.verb-noun-collocation-accuracy` · guidance · `diagnostic.strongResponse`: "and checks whether 'raises' or 'increases' with the right subject is meant, explaining both collocation and countability" → "and replaces intransitive 'raise' with 'rise' (crop yields rise), explaining collocation, countability and the raise/rise contrast"
- `phr.verb-noun-collocation-accuracy` · guidance · `difficulties[2].revealedBy`: "'prices were raised by 5%' used to mean prices went up." → "'the number of students raised by 5%' used to mean the number went up."

#### R2-18. accuracy: `voc.word-grammar-patterns`

**Finding.** The assessment prompt lists 'aim at improving' against 'aim to improve' among items mixing errors and correct uses, which implies the first is an error. 'Aim at + -ing' is a standard, dictionary-attested pattern.

**Recommendation.** Present both as acceptable, and substitute a genuine error.

**Proposed changes:**

- `voc.word-grammar-patterns` · topics · `assessmentPrompt`: "'consistent to', 'aim at improving' versus 'aim to improve')" → "'consistent to', 'emphasise on', and the two acceptable patterns 'aim to improve' and 'aim at improving')"

#### R2-19. accuracy: `grm.reference-pronouns`

**Finding.** DIF[1] treats 'This data shows…' as a demonstrative–noun number mismatch. Under the mass-noun treatment of 'data', which voc.countability-academic-nouns and grm.subject-verb-agreement both accept, 'this data shows' is correct. The records contradict each other.

**Recommendation.** Use unambiguous mismatches as the example.

**Proposed changes:**

- `grm.reference-pronouns` · guidance · `difficulties[1].pattern`: "This data shows… / these criterion." → "These criterion… / this phenomena… / these data shows… (plural data with a singular verb)."

#### R2-20. accuracy: `voc.precision-near-synonyms`

**Finding.** The strong diagnostic response describes 'impact' as 'noun, and verb in some varieties'. Verbal 'impact' is common in both British and American English. The issue is editorial dislike, not variety.

**Recommendation.** Correct the gloss.

**Proposed changes:**

- `voc.precision-near-synonyms` · guidance · `diagnostic.strongResponse`: "'impact' (noun, and verb in some varieties)" → "'impact' (mainly a noun; its verb use is common in British and American English but disliked by some editors)"

#### R2-21. accuracy: `voc.affixes-roots`

**Finding.** (1) 'disinterested' is used as the model 'misleading' word, but 'not interested', the reading from its parts, is a long-attested sense still in wide use. The item tests a contested usage judgement, not word-part reliability. (2) bio-, geo- and -graph- are combining forms rather than roots in the strict sense.

**Recommendation.** Use an unambiguous misleading item such as 'inflammable' in the assessment, and say 'roots and combining forms'.

**Proposed changes:**

- `voc.affixes-roots` · topics · `assessmentPrompt`: "plus a misleading one such as 'disinterested'" → "plus a misleading one such as 'inflammable'"
- `voc.affixes-roots` · topics · `description`: "Greco-Latin roots (bio-, geo-, -graph-, -cracy)" → "Greco-Latin roots and combining forms (bio-, geo-, -graph-, -cracy)"

#### R2-22. accuracy: `voc.word-families-morphology`

**Finding.** (1) DIF[2] gives 'criticalness' as a non-existent word coined by analogy, but it is in major dictionaries. (2) The topic covers derivation only. Conversion (zero derivation) is just as productive in academic lexis (a study / to study; an impact / to impact; a focus / to focus), and some noun–verb pairs differ only in stress (an INcrease / to inCREASE), which links to prn.word-stress.

**Recommendation.** Replace the example and add conversion to the description.

**Proposed changes:**

- `voc.word-families-morphology` · guidance · `difficulties[2].revealedBy`: "Forms such as 'analysation' or 'criticalness'." → "Forms such as 'analysation' or 'investigatement'."
- `voc.word-families-morphology` · topics · `description`: "(analyse, analysis, analyst, analytical, analytically)" → "(analyse, analysis, analyst, analytical, analytically), including members related by conversion with no affix (a study / to study; an INcrease / to inCREASE, with a stress shift)"

#### R2-23. accuracy: `voc.multiword-verbs-register`, `fun.classifying`

**Finding.** voc.multiword-verbs-register DIF[0] gives 'the sample was comprised of' as a 'contorted replacement' for a phrasal verb. 'Comprised of' is itself a multi-word construction and is a usage-panel controversy, not a register problem. fun.classifying DIF[1] handles comprise differently, accepting 'be composed of' and rejecting 'comprises of'. The two records give inconsistent advice.

**Recommendation.** Use an unambiguous over-formalisation example and treat 'is comprised of' consistently: contested, avoided by some style guides.

**Proposed changes:**

- `voc.multiword-verbs-register` · guidance · `difficulties[0].revealedBy`: "Contorted replacements ('executed the experiment', 'the sample was comprised of')" → "Contorted replacements ('executed the experiment', 'the problem was eliminated from consideration' for 'ruled out')"

#### R2-24. accuracy: `grm.np-postmodification`

**Finding.** ACT[1] asks learners to reduce a relative clause 'to a prepositional phrase (the data collected in 2020; the 2020 data)'. 'The 2020 data' is noun premodification, not a prepositional postmodifier, which mislabels the structure in a topic that teaches the distinction.

**Recommendation.** Give a prepositional example and label the premodifier separately.

**Proposed changes:**

- `grm.np-postmodification` · guidance · `activities[1].learnerActions[1]`: "to a prepositional phrase (the data collected in 2020; the 2020 data)" → "to a prepositional phrase or a premodifier (the data collected in 2020; the data from 2020; the 2020 data)"

#### R2-25. accuracy: `grm.non-finite-clauses`

**Finding.** The subject-sharing rule for introductory participle clauses is taught without exceptions. Descriptive grammars (Quirk et al.; Biber et al. 1999) note conventionalised forms that do not need a matching subject (given…, considering…, assuming…, generally speaking…, compared with…), and 'Based on…' is accepted by some style guides and rejected by others. Without this, learners will 'correct' acceptable expert sentences.

**Recommendation.** Add the conventional exceptions to the response.

**Proposed changes:**

- `grm.non-finite-clauses` · guidance · `difficulties[0].response`: "Teach the subject-sharing rule and the two repairs." → "Teach the subject-sharing rule and the two repairs, noting conventional exceptions that are acceptable in academic prose (given…, considering…, assuming…, generally speaking…, compared with…) and that style guides disagree about 'Based on…'."

#### R2-26. accuracy: `sen.sentence-types`

**Finding.** The topic counts finite clauses only, and the assessment prompt calls a 35-word sentence with 'one finite verb and heavy noun phrases' simple. That is the pedagogical convention. In descriptive grammar, non-finite clauses (reduced relatives, to-infinitives) are dependent clauses, so a 'one finite verb' sentence that contains them is complex. If the test sentence includes such clauses, a learner who calls it complex is correct by descriptive standards but scored wrong.

**Recommendation.** State the convention, and build the test sentence only from phrasal modifiers.

**Proposed changes:**

- `sen.sentence-types` · topics · `assessmentPrompt`: "including a 35-word sentence with one finite verb and heavy noun phrases" → "including a 35-word sentence with one finite verb and heavy noun phrases built only from adjectives, nouns and prepositional phrases (no non-finite or relative clauses)"
- `sen.sentence-types` · topics · `masteryEvidence[1]`: "justifies the classification by counting finite clauses" → "justifies the classification by counting finite clauses (the pedagogical convention, while recognising that descriptive grammars also count non-finite clauses as dependent clauses)"

#### R2-27. accuracy: `sen.sentence-length-variety`

**Finding.** ACT[1]'s intended insight claims dense academic sentences 'usually read more easily for expert readers'. No source is given for this, and Biber and Gray (2010), whom the record cites, stress that phrasal compression reduces explicitness.

**Recommendation.** Hedge the insight.

**Proposed changes:**

- `sen.sentence-length-variety` · guidance · `activities[1].intendedInsight`: "long sentences in academic writing are dense, and the latter usually read more easily for expert readers." → "long sentences in academic writing are dense; expert readers often process dense sentences in their field efficiently, but density also leaves relations implicit, so neither kind is automatically easier."

#### R2-28. l1-claim: `prn.intonation`

**Finding.** DIF[0] attributes 'relatively flat English intonation' to L1s that use pitch 'mainly to distinguish words' (tone languages) or a narrower discourse pitch range. Reduced pitch range and fewer discourse-marking pitch movements are reported for L2 speakers from many backgrounds, including non-tone languages (Mennen 2007 and later work). The pattern is linked to processing load and unfamiliarity with English tone choices, so presenting it as a tone-language trait is too strong.

**Recommendation.** Recast as a general L2 tendency, with L1 prosody as one possible factor.

**Proposed changes:**

- `prn.intonation` · guidance · `difficulties[0].kind`: "L1-transfer" → "developmental"
- `prn.intonation` · guidance · `difficulties[0].pattern`: "Learners whose first language uses pitch mainly to distinguish words, or uses a narrower pitch range for discourse purposes, produce relatively flat English intonation." → "Learners use a narrower pitch range and fewer discourse-marking pitch movements in English than proficient speakers, a tendency reported across many first-language backgrounds and linked to processing load and unfamiliarity with English tone choices."

#### R2-29. l1-claim: `sta.spoken-stance`

**Finding.** DIF[2] (L1-transfer) says missing a lecturer's irony comes from first languages that 'signal stance mainly through particles or word choice rather than intonation'. Recognising irony from prosody is hard for most L2 listeners and depends on cultural and situational familiarity. An L1 contribution is plausible, for example where attitudinal meanings are carried by sentence-final particles, but it is not the main mechanism.

**Recommendation.** Reclassify as developmental and keep the L1 point as a secondary, hedged factor.

**Proposed changes:**

- `sta.spoken-stance` · guidance · `difficulties[2].kind`: "L1-transfer" → "developmental"
- `sta.spoken-stance` · guidance · `difficulties[2].response`: "Listeners whose other languages signal stance mainly through particles or word choice rather than intonation benefit from focused listening to prosodic stance cues." → "Recognising irony and scepticism from the voice is demanding for most L2 listeners and depends on cultural familiarity; focused listening to prosodic stance cues helps, particularly for listeners whose other languages carry such meanings mainly through particles or word choice."

#### R2-30. assessment: `prn.connected-speech-production`

**Finding.** The record says the production value of weak forms is contested (Jenkins excluded them from the Lingua Franca Core), but the diagnostic's gap band includes 'staccato full forms throughout'. An intelligible speaker who uses full forms would therefore be graded as a gap. The criterion measures conformity to native-speaker rhythm, not the construct the record claims (key words standing out for listeners).

**Recommendation.** Define the gap band by listener outcome.

**Proposed changes:**

- `prn.connected-speech-production` · guidance · `diagnostic.gapResponse`: "Either staccato full forms throughout or over-reduction that obscures content." → "Listeners cannot pick out the key words, either because every syllable receives equal weight so that key words do not stand out or because over-reduction obscures content words."

#### R2-31. accuracy: `prn.numbers-aloud`

**Finding.** The record teaches '-teen' and '-ty' as distinguished by stress (thirTEEN versus THIRty). Before a stressed noun, -teen numbers undergo stress shift (FOURteen STUdents), which removes the stress contrast exactly where numbers occur in presentations. The more reliable cue is the final syllable (/tiːn/ versus /ti/, flapped in American English).

**Recommendation.** Teach the final-syllable cue and the stress shift.

**Proposed changes:**

- `prn.numbers-aloud` · topics · `masteryEvidence[1]`: "Distinguishes -teen and -ty numbers through stress and vowel quality, and confirms figures when misunderstanding is likely" → "Distinguishes -teen and -ty numbers mainly through the final syllable (/tiːn/ versus /ti/), knowing that -teen stress shifts forward before a stressed noun (FOURteen STUdents), and confirms figures when misunderstanding is likely"
- `prn.numbers-aloud` · topics · `description`: "use stress to keep confusable numbers apart (thirTEEN versus THIRty)" → "use the final syllable and stress to keep confusable numbers apart (thirTEEN versus THIRty)"

#### R2-32. accuracy: `prn.segmental-priorities`, `prn.prominence`

**Finding.** The summary of Jenkins's Lingua Franca Core mentions only the exclusion of dental fricatives. It leaves out that the core also excludes weak forms, word stress and pitch movement, and that nuclear (contrastive) stress placement is one of the few prosodic features it keeps. That point is the main ELF-research support for the dataset's priority on prominence and is not used.

**Recommendation.** Complete the description.

**Proposed changes:**

- `prn.segmental-priorities` · guidance · `summary`: "while excluding features such as the dental fricatives;" → "while excluding features such as the dental fricatives, weak forms, word stress and pitch movement (nuclear stress placement is one of the few prosodic features it retains, which supports the priority given to prominence);"

#### R2-33. level: `grm.conditionals`, `grm.articles`, `grm.fronting-inversion`

**Finding.** (1) grm.conditionals ends at B2+, but ME[3] requires productive use of inverted conditionals (Were X to…, Had the study…), which the English Grammar Profile puts at C1. (2) grm.articles ends at C1, but the record expects article work at PGR level (literacy brokers), and article accuracy for writers from article-less L1s keeps developing at expert level, which is the authoring guide's own test for C2. (3) grm.fronting-inversion ends at C1, yet inversion after restrictive adverbials (Rarely have…, Only when…) is C1–C2 in EGP.

**Recommendation.** Make inverted conditionals receptive at B2+, and extend the article and fronting ranges to C2.

**Proposed changes:**

- `grm.conditionals` · topics · `masteryEvidence[3]`: "Uses inverted conditionals (Were X to…, Had the study…) appropriately in formal writing, or avoids them where they sound mannered" → "Recognises inverted conditionals (Were X to…, Had the study…) in formal texts and uses them sparingly where they suit the register"
- Set CEFR for `grm.articles` to B1–C2
- Set CEFR for `grm.fronting-inversion` to B2+–C2

#### R2-34. accuracy: `sta.generalisation-qualification`

**Finding.** ME[1] states the rule as 'most + plural noun without of'. Read literally, this marks the standard 'most of the students' as wrong. The rule depends on the determiner.

**Recommendation.** State both patterns.

**Proposed changes:**

- `sta.generalisation-qualification` · topics · `masteryEvidence[1]`: "most + plural noun without 'of'" → "most + plural noun without 'of' but most of + determiner + noun: most students, most of the students"

#### R2-35. accuracy: `sta.hedging`

**Finding.** DIF[2] contrasts 'dynamic can' with epistemic modals. 'Can' in 'This can be problematic' expresses general (root) possibility, which is normal in academic prose. The learner error is using positive-declarative 'can' for an inference about a specific case ('This can be the reason for the decline'). The response as written could lead teachers to discourage acceptable 'can'.

**Recommendation.** Specify the context in which 'can' is the error.

**Proposed changes:**

- `sta.hedging` · guidance · `difficulties[2].response`: "need explicit contrast between dynamic 'can' and epistemic 'may', 'might' and 'could'." → "need to see that 'can' expresses general possibility (This can be problematic) but not, in positive statements, an inference about a specific case, where 'may', 'might' or 'could' is used (This could be the reason)."

#### R2-36. accuracy: `voc.evaluative-lexis`

**Finding.** The summary gives the Appraisal categories as 'appreciation of things, judgement of people, graduation of strength'. It leaves out affect, the third attitude subsystem, which sta.attitude-markers uses. It also reduces graduation to strength (force) and omits focus (sharpening or softening category boundaries: a kind of, a true…), which is relevant to hedging.

**Recommendation.** Give the full categories.

**Proposed changes:**

- `voc.evaluative-lexis` · guidance · `summary`: "categories — appreciation of things, judgement of people, graduation of strength —" → "categories — affect (feelings), judgement of people's behaviour, appreciation of things and texts, and graduation (force: degree; focus: sharpness of category membership) —"

#### R2-37. accuracy: `sta.self-mention`

**Finding.** Tang and John's (1999) typology has six roles, starting with 'representative' (generic or inclusive 'we/I'). The description and ME[0] list only five and drop the role that ME[3] (inclusive 'we') is about.

**Recommendation.** Restore the full typology.

**Proposed changes:**

- `sta.self-mention` · topics · `description`: "from guide through the text and architect of its structure to recounter of procedures, opinion-holder and originator of ideas" → "from representative of a wider group (generic 'we') and guide through the text, through architect of its structure and recounter of procedures, to opinion-holder and originator of ideas"
- `sta.self-mention` · topics · `masteryEvidence[0]`: "(guide, architect, recounter, opinion-holder, originator)" → "(representative, guide, architect, recounter, opinion-holder, originator)"

#### R2-38. accuracy: `sta.engagement-markers`, `sta.dialogic-positioning`

**Finding.** The dataset uses 'engagement' for two different constructs: Hyland's engagement (explicit reader-oriented features such as directives and questions) and Martin and White's engagement (the dialogic positioning of the text towards other voices). Neither record warns users about this, and the two theories are routinely confused in teacher materials.

**Recommendation.** Add a terminological note.

**Proposed changes:**

- `sta.engagement-markers` · guidance · `summary`: "Teach engagement as calibrated to readership through comparative genre analysis rather than through rules." → "Teach engagement as calibrated to readership through comparative genre analysis rather than through rules. Note that Hyland's 'engagement' (reader-oriented features) differs from 'engagement' in Martin and White's appraisal framework (dialogic positioning; see sta.dialogic-positioning)."

#### R2-39. attribution: `sta.averral-attribution`

**Finding.** The averral/attribution distinction is credited to Hunston, but it comes from Sinclair (1986, 1988) and was developed by Tadros and then Hunston.

**Recommendation.** Credit the origin.

**Proposed changes:**

- `sta.averral-attribution` · guidance · `summary`: "developed by Hunston in Hunston and Thompson's collection" → "introduced by Sinclair and developed by Hunston in Hunston and Thompson's collection"

#### R2-40. coverage: `phr.bundles-research-oriented`, `phr.spoken-academic-formulas`

**Finding.** The bundle topics use only Hyland's functional taxonomy. They leave out Biber, Conrad and Cortes's (2004) structural finding that academic-prose bundles are mostly noun-phrase and prepositional-phrase based ('the nature of the', 'in the case of'), while classroom speech favours verb-phrase and clause-based bundles ('if you look at', 'what I want to do is'). This mirrors the phrasal versus clausal contrast taught in GRM and REG, and it explains why bundles end in 'of the'.

**Recommendation.** Add the structural point to the summary.

**Proposed changes:**

- `phr.bundles-research-oriented` · guidance · `summary`: "they should be taught with their typical grammatical continuations and in context." → "they should be taught with their typical grammatical continuations and in context. Structurally, written academic bundles are mostly noun-phrase and prepositional-phrase based, whereas classroom speech favours verb-phrase and clause-based bundles (Biber, Conrad & Cortes, 2004), mirroring the phrasal–clausal contrast in academic grammar."

#### R2-41. coverage: `prn.segmental-priorities`

**Finding.** Segmental work relies only on production practice and minimal pairs. High-variability phonetic training (HVPT: perceptual identification across many talkers and contexts) is among the best-supported pronunciation interventions (Logan, Lively & Pisoni 1991; Thomson 2018) and fits the dataset's link between perception and production. It does not appear anywhere in the dataset.

**Recommendation.** Add an HVPT activity.

**Proposed changes:**

- prn.segmental-priorities: add activity 'Perception training with many voices': learners identify their priority contrast in words spoken by many different talkers (for example a free HVPT tool), with immediate feedback, before production practice. Rationale: high-variability perceptual training improves both perception and production of L2 contrasts (Thomson, 2018). Add Thomson, R. I. (2018). High variability [pronunciation] training (HVPT). Journal of Second Language Pronunciation, 4(2), 208–231.

#### R2-42. coverage: `prn.word-stress`, `prn.technical-terms`

**Finding.** Word-stress work covers suffix-driven shifts but not compound and phrase stress. Academic and technical vocabulary is dominated by noun + noun compounds with initial stress (CASE study, DATA set, CONTROL group, SAMPLE size), contrasting with final stress in adjective + noun phrases (statistical SIGnificance). Learners who stress the second element mark the wrong word as new. This is also the spoken side of grm.np-premodification.

**Recommendation.** Add a mastery statement.

**Proposed changes:**

- prn.word-stress: add masteryEvidence 'Stresses the first element of noun + noun compounds (CASE study, DATA set, CONTROL group) and the head of adjective + noun phrases (statistical SIGnificance) in technical vocabulary.'

#### R2-43. attribution: `voc.core-academic-vocabulary`

**Finding.** The summary says the AWL and AVL 'each cover a meaningful share of academic text' without figures. The research checklist asks for these, and teachers will quote figures from somewhere. The sources give about 10% of the Academic Corpus for the AWL (Coxhead 2000) and about 14% of academic text for the AVL core (Gardner & Davies 2014). Note that these use different counting units (families versus lemmas) and different corpora.

**Recommendation.** Give the figures with the unit and corpus caveat.

**Proposed changes:**

- `voc.core-academic-vocabulary` · guidance · `summary`: "each covers a meaningful share of academic text" → "each covers a meaningful share of academic text (about 10% of Coxhead's Academic Corpus for the AWL and about 14% of academic text for the AVL, figures not directly comparable because they use different units and corpora)"

#### R2-44. accuracy: `grm.articles`

**Finding.** The summary and diagnostic present 'the' as 'licensed by' an of-phrase or relative clause. Postmodification licenses 'the' only when it makes the referent uniquely identifiable ('the role of X'). Many postmodified nouns take 'a' or zero ('a member of the committee', 'an increase of 5%', 'evidence of bias'). Teachers commonly over-teach 'the + N + of' as a rule, and the record reinforces this, including in the soft prerequisite reason from grm.np-postmodification.

**Recommendation.** Add the identifiability condition and counterexamples.

**Proposed changes:**

- `grm.articles` · guidance · `diagnostic.strongResponse`: "including 'the' licensed by an of-phrase" → "including 'the' where an of-phrase makes the referent uniquely identifiable (the role of X), and 'a' or zero where the postmodifier only classifies (a member of the committee, evidence of bias)"
- `grm.articles` · guidance · `summary`: "and teach the of-phrase and relative-clause contexts where 'the' is licensed by postmodification" → "and teach the of-phrase and relative-clause contexts where postmodification makes the referent identifiable and so licenses 'the', contrasting them with postmodified nouns that still take 'a' or zero (a study of, an increase of 5%, evidence of)"

#### R2-45. attribution

**Finding.** The FUN domain summary in domains.json cites 'functional genre work (Martin and Rose; …)'. The bibliography key used throughout FUN is rosemartin2012 (Rose & Martin 2012, Learning to Write, Reading to Learn); Martin and Rose (2008) Genre Relations is a different book and is not in the bibliography.

**Recommendation.** Align the in-text attribution with the cited work.

**Proposed changes:**

- domains.json FUN.summary: change 'functional genre work (Martin and Rose; Nesi and Gardner's genre families)' to 'functional genre work (Rose and Martin; Nesi and Gardner's genre families)', or add Martin, J. R., & Rose, D. (2008). Genre relations. Equinox.

## Checked and found sound (no change needed)

The following were checked specifically and are correct as written:

- **Vocabulary:** AWL as 570 families beyond the GSL; the AVL being lemma-based and drawn from COCA; Hyland and Tse (2007) and Durrant (2016) on disciplinary variation; the coverage thresholds and their attributions; Nassaji (2003) on inference quality; Gardner and Davies (2007) on phrasal verbs.
- **Phraseology:** Biber (2006) and Biber, Conrad and Cortes (2004) on classroom-teaching bundles; Cortes (2004); Durrant and Schmitt (2009); Laufer and Waldman (2011); Simpson-Vlach and Ellis's AFL.
- **Stance and metadiscourse:** Hyland's interactive/interactional categories and stance and engagement features; Salager-Meyer's hedging categories; Hyland and Milton (1997); Thompson and Ye (1991); Petrić (2007); Lancaster (2014), with its caveat; Chang and Schleppegrell (2011).
- **Register, citation and voice:** Tarone et al. on astrophysics *we*; Chang and Swales (1999); Hyland and Jiang (2017); Thompson and Tribble's citation typology.
- **Information structure and cohesion:** Daneš's progression types, with the theme simplification acknowledged; theme–rheme versus given–new in SFL; Halliday's lexical density versus grammatical intricacy; clefts as predicated theme and thematic equative; Hunston and Sinclair's local grammar of evaluation; Hoey's patterns, with the Carrell/Meyer caveat; Crossley and McNamara (2012).
- **Pronunciation and listening:** Field (2005) on rightward stress shifts; Hahn (2004); Pickering (2001) with Brazil's referring and proclaiming tones; Munro and Derwing (2006) on functional load; Jenkins on weak forms; Bradlow and Bent (2008); Major et al. (2002); Rubin (1992); Deroey and Taverniers (2012); Young (1994); Segalowitz's fluency triad.
- **Conventions:** serial-comma, number, colon-capitalisation and APA/MLA title-case rules; the SI spacing rules.
- **L1-transfer claims:** resumptive pronouns; existential *there* + *have*; *although … but*; null subjects; final-consonant deletion; comma-linked clauses; fixed-stress transfer in word stress; prominence and de-accenting (prn.prominence).

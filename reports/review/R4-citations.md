# R4 — Citation-integrity audit (adversarial)

Reviewer persona: research-integrity editor, applied linguistics. Scope: `data/topics.json` (citations, descriptions), `data/teaching-guidance.json` (summaries, activity rationales, difficulties, contextNotes, reviewNotes), `data/domains.json` (keyReferences, summaries), `data/references.json`. Machine-readable findings with mechanically checkable edits: `reports/review/R4-citations.json`. Every `oldText` in that file was checked against the current data and matches exactly once.

**Note on timing.** The data was rebuilt while this audit was running (commit 3f315fe). All 128 author-proposed references were web-verified and merged, and 34 were corrected. Topic and guidance text did not change. Bibliographic verification is not content verification. This audit content-checked the claims attached to every former proposal.

## Overall verdict

The citation layer is mostly sound and heavily hedged. Where the authors attribute specific findings they are usually accurate, and many records already flag their own extrapolations. The guidance also handles the usual traps correctly:

- Kaplan (1966) is presented as historically influential but discredited.
- Howard's patchwriting is defined accurately.
- Mueller & Oppenheimer (2014) is paired with the Morehead et al. (2019) non-replication.
- Truscott and Ferris are presented as an open debate.
- Dunlosky et al.'s utility ratings are reported correctly.
- Biber & Gray's phrasal-complexity argument is reported correctly.
- The Coxhead AWL count (570 families) is right.
- CARS and Swales's 2004 revision of Move 2 are described correctly.
- Hyland's metadiscourse model is presented as a heuristic.
- Carless & Boud's four features are listed correctly.
- Hinds is hedged.
- Zhou et al. (2008) is used against the U-curve.
- Learning styles, speed reading and Mehrabian's 7–38–55 figures are all debunked.

The failures fall into four groups:

1. Five clear misattributions (wrong work, wrong discipline, wrong author list, or a misdescribed landmark finding).
2. Ferris (1999) used across the dataset as a generic warrant for error types it explicitly excludes.
3. Untested pedagogical effects stated as fact ("works best", "reduces anxiety") next to descriptive or framework citations.
4. A tail of decorative uses of the most-cited references.

### Sample and estimated rates

I read all 557 guidance summaries and all 1,114 activity rationales. I scored **220 claim–citation pairs** explicitly, stratified across all 15 strands (at least 10 per strand). The scored set includes every use of the 30 most-cited references that names a finding, and about 150 pairs that rely on the 128 former draft references.

| Judgement | n | Rate |
|---|---|---|
| SUPPORTED | 183 | 83% |
| PARTLY (needs hedging or narrower wording) | 22 | 10% |
| MISATTRIBUTED | 5 | 2% |
| OVERCLAIM / DECORATIVE | 8 | 4% |
| UNSURE | 2 | 1% |

The two UNSURE items:
- phr.collocation-awareness: Nesselhauf (2003) on errors being "especially with restricted combinations". Her finding on degree of restriction is more equivocal than this suggests; verify.
- voc.multiword-verbs-register: Biber (2006) as the source for phrasal verbs being "pervasive in classroom teaching".

Former draft references: content was supported in every case checked except Hyland & Tse (2012) (finding 4).

## Findings by severity

### Critical (misattribution or misdescribed finding)

**1 (R4-01). Moore (2013) is credited with an engineering/history contrast.**
- ess.criticality contextNotes: "which differ, for example, between engineering and history (Moore, 2013)". Moore interviewed academics in history, philosophy and cultural studies. Engineering was not in the sample.
- rdc.critical-reading summary: "academics across disciplines". This overstates a three-discipline humanities sample.
- Correction: name the three disciplines and drop the engineering contrast.

**2 (R4-02). Charles (2007) is used for the wrong study.**
- phr.corpus-consultation summary: "Charles shows how graduate writers can build small corpora of theses in their own field". Activity 1 rationale: "Charles describes graduate writers building their own corpora".
- The 2007 JEAP article links top-down analysis of rhetorical functions with concordancing of teacher-compiled thesis corpora. Do-it-yourself corpus building is Charles (2012, ESP 31(2)) and Charles (2014, ESP 35).
- Correction: describe the 2007 study accurately, and add Charles (2012) if the DIY claim is kept.

**3 (R4-03). The spacing finding is misdescribed.**
- voc.deliberate-learning-systems summary: "explains why retrieval and expanding intervals outperform rereading".
- Roediger & Karpicke compare retrieval with restudy. Cepeda et al. compare spaced with massed practice. Neither shows that expanding schedules beat rereading or equal spacing; the evidence on expanding schedules is mixed.
- Correction: "retrieval practice outperforms restudy and spaced practice outperforms massed practice".

**4 (R4-04). Wrong author list after the reference was corrected.**
- references.json now records the bio-statement study as Hyland & Tse (2012). pub.academic-cv-bio still says "Hyland (2012) analysed…" and "Hyland (2012) shows…".
- Correction: change both to Hyland and Tse (2012).
- The other 33 corrected references should get the same surname check.

**5 (R4-05, critical element). Ferris (1999) is cited for an error type it classes as "untreatable".**
- grm.reporting-structures, activity 1: "These are rule-governed errors suited to focused self-editing (Ferris, 1999)".
- Reporting-frame errors are lexical complementation errors. Ferris lists lexical errors as untreatable, and the dataset's own vocabulary topics say that complementation is verb-specific. See finding 6 for the wider pattern.

### Major (overclaim, misleading or systemic)

**6 (R4-05). Ferris (1999) is used as a generic warrant across the grammar records.**
- Ferris's treatable categories are verb tense/form, subject–verb agreement, articles, noun endings and fragments. Sentence-structure problems and lexical errors are explicitly untreatable.
- The paper is cited nine times. It is extended to:
  - dangling participles (grm.non-finite-clauses: "suits a rule-governed, treatable structure (Ferris, 1999)");
  - "There are many studies show" (grm.existential-there);
  - comma splices (grm.linking-adverbial-placement; sen.sentence-boundaries: "Comma splices, fused sentences and fragments are… 'treatable' errors in Ferris's (1999) sense").
- It is a position paper, not evidence that focused self-editing works for these errors.
- Corrections: the JSON has edits that limit the attribution to Ferris's categories and label the extensions as analogies.

**7 (R4-06). Untested teaching recommendations stated as established, next to descriptive citations.**
- cit.author-date-in-text: "Instruction works best when formatting is linked to the integral/non-integral distinction (Swales, 1990; Thompson & Tribble, 2001)…". Neither work tests instruction.
- Other instances:
  - reg.vague-overgeneralised: "Teaching works best by asking the reader's questions", after Hinkel's and Aull & Lancaster's descriptive corpus work.
  - res.research-questions: "Teaching works best through repeated revision".
  - crt.problem-solving: "the two moves most likely to improve student work".
- Correction: mark each as a practitioner judgement.

**8 (R4-07). Activity rationales state learning effects as fact under framework or handbook citations.**
- inf.open-access: "Practising the routes reduces reliance on unauthorised sources" (ACRL 2016).
- int.policy-processes: "Rehearsing the genre… reduces anxiety" (Bretag 2016).
- src.signal-phrases: "Learning frames as patterns reduces the blending errors" (Pecorari 2013).
- Correction: rephrase each as an intended outcome or untested proposal, and say what the citation actually supports.

**9 (R4-08). Decorative uses of heavily cited sources.**
- exm.open-book: Pecorari (2013) for "Time spent searching unorganised materials reduces time for analysis". The book does not address this.
- res.ethics-documentation: Creswell & Creswell (2018) for register adaptation, which they do not discuss.
- grm.subject-verb-agreement: Boulton & Cobb (2017), a learning-outcome meta-analysis, for "Data-driven learning encourages evidence-based usage judgements".
- par.concluding-sentences:
  - "the link between evidence and argument that Wingate (2012) found students often leave implicit" — not a finding of that paper;
  - "authentic paragraphs frequently end on evidence or comment… (Swales & Feak, 2012)" — a frequency claim sourced to a textbook.
- wpr.planning-outlining: Hyland (2003) attached to a learning-styles debunk he does not make. The learning-styles statements elsewhere are correct but unsourced; add Pashler et al. (2008).
- Pattern: the top-cited references (Swales & Feak ×115, APA ×103, LGSWE ×88, Celce-Murcia & Larsen-Freeman ×61, Wingate 2012 ×57) are mostly used appropriately, but each has a tail of rationales where the citation adds authority without content.

### Minor (wording)

10. **Liang et al. (2023)** (R4-09). The comparison group was "US eighth-grade" essays, not "US students". This matters for EAP inferences.

11. **Kiewra (1985)** (R4-10). rds.annotation credits him with "encoding benefits of generative note-taking". His review found encoding effects inconsistent and review effects stronger.

12. **Rayner et al. (2016)** (R4-11). "are less able to judge what mattered" overstates their conclusion on skimming.

13. **Bauer & Nation (1993)** (R4-12). "show that…" and "shows that…" present the framework's design assumptions as findings.

14. **Four stretched attributions** (R4-13):
    - Plonsky (2011) is cited for strategy effects depending on language knowledge; that point comes from the reading-component literature.
    - Norris & Ortega (2000) is cited without their caveat that outcome measures favoured explicit knowledge.
    - Ellis & Yuan (2004) is cited as supporting separate editing passes; the study manipulated writing time, not editing passes.
    - Alderson & Wall (1993) is cited for washback being "real". The paper argued washback has to be demonstrated rather than assumed.

15. **Activity titles** (R4-14). "Evidence-based error log" and "Evidence-based rating" imply tested efficacy. Retitle.

16. **Stale reviewNotes** (R4-15). 82 notes still call now-verified references "proposed" or "pending verification". The "from memory" notes for Basturkmen (2009), Belcher (1994) and Bhatia's legal-case moves can be closed; the descriptions are accurate. The pub.viva notes (the Mežek & Swales chapter, and Swales (2004) on the PhD defence) remain open.

17. **Bibliographic hygiene** (R4-16). Same-author, same-year prose citations are ambiguous: Hyland 2001, 2002, 2004 and 2005 (two works each) and Wingate 2012 (two works). Also, 40 activity-level citations are missing from their record-level citation arrays.

## Not found (checked)

- No fabricated-sounding findings.
- No dating errors among the in-text author–year mentions (automated cross-check against references.json).
- No uncritical learning-styles, speed-reading, Mehrabian, U-curve or left/right-brain content.
- Domain summaries' "corpus research shows" statements (PHR, GRM, SEN) and the PRG pragmatics statement are defensible generalisations.

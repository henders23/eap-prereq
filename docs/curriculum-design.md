# Designing a syllabus with the taxonomy

The taxonomy is an inventory and a dependency graph, not a syllabus. This note
explains how a programme team can use it to build a course that fits its
learners. It responds to the curriculum review (R1-02, R1-24 in
[`reports/adversarial-review.md`](../reports/adversarial-review.md)).

## 1. Start from needs analysis, not from the list

EAP courses are justified by the target situation: the tasks, genres and
assessments learners will meet, and the gap between those demands and what
learners can already do (Hutchinson & Waters, 1987; Long, 2005; Basturkmen,
2010). Before using the taxonomy, establish:

- **Destination and stage.** Which degree level, disciplines and institution
  do learners progress to? Are you delivering foundation, pre-sessional (UG or
  PG entry), in-sessional or doctoral provision?
- **Entry band and course length.** What is the cohort's profile, and how
  many contact and independent hours are available?
- **Target tasks.** Which assessments and genres will learners face? Collect
  briefs, marking criteria and exemplars from receiving departments.
- **Context.** Is the course on an anglophone campus, an EMI programme, a
  transnational branch campus or online? Which conventions, such as forms of
  address, seminar culture or referencing style, differ locally?

## 2. Filter topics with the facets

| Facet | Field | Use it to |
|---|---|---|
| Stage role | `stageRoles` | Start from the `core` topics for your stage. Add `develop` topics that your needs analysis supports. Treat `revisit` topics as diagnostic or self-access material. |
| Core band | `coreBand` | Keep topics whose core band falls within, or just above, your cohort's entry band. |
| Discipline | `disciplines`, `specificity` | For ESAP strands, add the topics tagged with your learners' fields. |
| Audience | `audience` | Topics tagged `teacher` are principles that shape how you teach, not content to assess. |
| Type | `type` | Balance conceptual, procedural, linguistic, genre, strategic and sociopragmatic work. |

A simple query, for example, finds the core topics for a postgraduate-entry
pre-sessional:

```js
import { topics } from './data/topics.json' with { type: 'json' };
const core = topics.filter((t) => t.stageRoles['pre-sessional-pg'] === 'core');
```

## 3. Anchor units on assessed tasks

Most pre-sessional and foundation courses are built around a few assessed
tasks: an extended source-based project, a seminar, a presentation, an
integrated reading-into-writing exam and a listening-into-note-making task.
`data/pathways.json` defines these **task anchors** and lists the topics each
one assesses. Plan units backwards from the anchors, then fill in their hard
prerequisites.

## 4. Sequence with hard prerequisites only

`dependencies.json` distinguishes `hard` edges (a topic cannot be meaningfully
learned without the prerequisite) from `soft` edges (the prerequisite is
usually taught first or helps). Order units by hard edges only. Treat soft
edges as "teach nearby", or ignore them where your course integrates skills
differently. A hard prerequisite outside your selection is something you must
either teach or check on entry.

## 5. Use and adapt the course templates

`data/pathways.json` contains worked templates for typical courses, such as
6-, 10- and 12-week pre-sessionals at different entry bands and destinations,
a foundation EAP module and an in-sessional dissertation series. Each template
lists units with their task anchor and topics. They are starting points, not
recommendations to adopt as they stand; adjust them to your needs analysis
and local assessments.

## 6. Align assessment and feedback

For each anchor, map the topics' `masteryEvidence` to your marking criteria
and to the CEFR Companion Volume scales that the topics link to. Use the
`diagnostic` tasks in `teaching-guidance.json` for entry and formative checks.

## Limits

Stage roles, CEFR ranges and the hard/soft classification of edges are expert
judgements. Practitioners have not calibrated them against outcomes. They
reflect UK and international higher education and need adapting for other
systems. The BALEAP Can Do Framework is not mapped, because no openly
reusable list of its codes was available to verify. Teams accredited against
it should map their selected topics locally.

## References

Basturkmen, H. (2010). *Developing courses in English for specific purposes*. Palgrave Macmillan.

Hutchinson, T., & Waters, A. (1987). *English for specific purposes: A learning-centred approach*. Cambridge University Press.

Long, M. H. (Ed.). (2005). *Second language needs analysis*. Cambridge University Press.

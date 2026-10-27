# Provenance

This file records where the taxonomy's content came from, how it was produced
and checked, and what it does and does not reuse from third parties.

## Authorship and method

The taxonomy was produced in October 2026 by AI agents working to a fixed
specification, then reviewed adversarially and revised. The process was:

1. **Design.** A curator agent designed the strand/domain structure and the
   first 557-topic skeleton (`authoring/skeleton.txt`). Topic IDs, names and scope
   notes were fixed so that authors could link prerequisites across strands.
   The curator also compiled the closed bibliography
   (`src/meta/references.txt`) and the framework catalogue
   (`src/meta/frameworks.txt`) and wrote the authoring specification
   (`AUTHORING.md`).
2. **Authoring.** Sixteen author agents, each instructed to write as a senior
   EAP practitioner, drafted the topic records, prerequisite edges, teaching
   guidance and domain summaries for their assigned domains. Authors could
   cite only bibliography keys. Any new reference had to be proposed for
   verification, and authors were told never to invent references, DOIs or
   findings. A structural checker (`scripts/check-strand.mjs`) gated each
   file.
3. **Integration.** The curator merged the strands, resolved cross-strand
   cycles and redundant edges, verified proposed references and built the
   dataset (`scripts/build.mjs`).
4. **Adversarial review.** Six independent reviewer agents critiqued the
   built taxonomy. Each was briefed as a domain expert (curriculum
   architecture, applied linguistics, learning graphs, citation integrity,
   critical EAP, and ESAP/PGR/assessment) and given the data rather than the
   authors' reasoning. Together they reported 167 findings.
5. **Revision.** The curator applied 354 checked fixes and restructured the
   schema and topic set (stage roles, facets, merges, 33 new topics). Sixteen
   author agents then revised their strands against packets of the relevant
   findings. Every finding and its disposition is logged in
   [`reports/adversarial-review.md`](reports/adversarial-review.md). The
   individual reviews are in [`reports/review/`](reports/review/).

No human subject-matter expert has yet reviewed this release. The
"expert" reviews above were conducted by AI agents. Treat it as a
well-sourced first edition that needs practitioner validation, especially the
CEFR ranges, stage assignments and prerequisite strengths, which are expert
judgements rather than empirically calibrated values.

## Bibliography and citation integrity

- Every citation key resolves to an entry in `data/references.json`.
- Each reference has a `verification` status. In this release 478 of 480
  references are `web-verified`: their bibliographic details (authors, year,
  title, venue, volume, pages, DOI) were checked by web search against
  publisher, repository, library or indexing records, and more than 40 were corrected
  in the process. Where a DOI or page range could not be confirmed, the
  `verificationNote` says so, and unconfirmed DOIs were removed from
  references proposed during authoring. Two references
  (`basturkmen2003`, `aguilar2004`) remain `unverified` because no online
  record was found. A `curator-checked` status is defined for future use
  but no reference currently has it.
- All references that authors proposed during writing were verified before
  being added to the bibliography; none were found to be fabricated.
- A citation means that the work supports the topic's framing or the
  rationale for a teaching approach. It does **not** mean that the work tested
  the specific activity proposed.
- No reference text, abstract or quotation is reproduced beyond short
  bibliographic details.

## Third-party frameworks

`data/frameworks.json` reproduces **codes and titles only**. It contains no
descriptor text, band-descriptor wording or test content. Topic–framework links
are this project's mapping judgements, not certified alignments, and are not
endorsed by any framework owner.

| Source | Owner | What is shipped | Identifier policy |
|---|---|---|---|
| CEFR Companion Volume (2020) illustrative scales | Council of Europe | Scale names and their grouping | Codes are project-assigned slugs of the official scale names. |
| IELTS Academic assessment criteria | British Council, IDP: IELTS Australia, Cambridge University Press & Assessment | Criterion and component names | Codes are project-assigned. IELTS is a registered trademark of its owners. |
| ACRL Framework for Information Literacy for Higher Education (2016) | Association of College & Research Libraries | Frame titles | Codes are project-assigned. |
| Researcher Development Framework (2010) | Vitae / CRAC | Domain and sub-domain titles | Codes A1–D3 are Vitae's own. |

Consult the official publications for descriptor wording and terms of use.

## What is original

The topic descriptions, mastery evidence, assessment prompts, prerequisite
edges and reasons, teaching guidance, domain summaries and reports are original
to this project. Example phrases in topic records are illustrative and were
written for this project. Where a record names a corpus-attested expression,
it uses a short phrase rather than an extended quotation.

## Inspiration

The data model (micro-topics, a prerequisite DAG with typed edges, mastery
evidence, assessment prompts, separate teaching-research records, a manifest
with checksums and a dependency-free validator) is modelled on the
[Marble Skill Taxonomy](https://github.com/withmarbleapp/os-taxonomy) for
primary education. No data, text or code was copied from that repository. Its
README and schemas were read for structure only.

# Version 1.2 Publication Readiness Report

**Status:** PASS — ready for delivery  
**Frozen source:** `Business_Plan_v1.2_Remediated_Manuscript.md`  
**QA date:** 25 July 2026

## Deliverables

- `Business_Plan_Final_v1.2_Executive.docx`
- `Business_Plan_Final_v1.2_Executive.pdf`

## Document statistics

| Measure | Result |
|---|---:|
| PDF page count | 51 |
| DOCX body word count | 16,655 |
| Heading count | 100 |
| Numbered major sections | 14 |
| Exhibits / embedded figures | 9 |
| Exhibit captions | 9 |
| Data tables | 11 |
| Appendix subsections | 7 |
| PDF internal link annotations | 100 |
| PDF embedded image objects | 8 |

The Contents element is a live, hyperlink-enabled Word TOC field and is materialized as a clickable TOC in the PDF. It is not counted as a data table.

## Content-integrity validation

| Check | Result |
|---|---|
| Frozen manuscript headings present in DOCX | PASS — none missing |
| Frozen manuscript headings present in PDF | PASS — none missing |
| Sections present | PASS — all 14 major sections |
| Appendix content present | PASS — all 7 appendix subsections |
| Exhibit images present | PASS — 9 of 9 |
| Exhibit captions present | PASS — 9 of 9 in both formats |
| Numeric preservation | PASS — all pre-enhancement numeric values preserved; none missing |
| Tables preserved | PASS — 11 data tables |
| Recommendations and analytical conclusions | PASS — generated directly from the frozen manuscript; no content edits |
| Cross-references and appendix references | PASS — retained |
| TOC field | PASS |
| PAGE and NUMPAGES fields in DOCX | PASS |
| Automatic field update on open | PASS |
| PDF links | PASS — 100 internal link annotations |

## Visual QA

All 51 PDF pages were rendered to images and inspected.

| Visual check | DOCX | PDF |
|---|---|---|
| Missing images | PASS | PASS |
| Broken captions | PASS | PASS |
| Broken page layout | PASS | PASS |
| Orphan headings | PASS | PASS |
| Malformed tables | PASS | PASS |
| Repeating headers on multi-page tables | PASS | PASS |
| Overlapping objects | PASS | PASS |
| Missing appendix content | PASS | PASS |
| Missing references / hyperlinks | PASS | PASS |
| Typography consistency | PASS | PASS |
| Page numbering | PASS | PASS |

DOCX structural QA verified the underlying Word package, styles, sections, live fields, media relationships, captions, and tables. PDF visual QA validated the published page rendering derived from the DOCX.

## Formatting-only corrections made during publication

1. Consolidated the cover title and publication metadata onto one cover page.
2. Kept the evidence-convention note with the table of contents instead of leaving it on an isolated page.
3. Enabled repeated table-header rows for multi-page tables.
4. Unlinked section footers so clearing the cover footer does not remove PAGE/NUMPAGES fields from later sections.
5. Added the approved evidence-based SWOT enhancement, its dedicated Agentic OS knowledge object,
   cross-section references, and Exhibit 5. Existing exhibits were renumbered sequentially.

Outside the approved SWOT enhancement and its required cross-references, no manuscript wording,
facts, recommendations, citations, numerical values, analytical conclusions, or section content changed.

## Remaining observations

- No publication blockers remain.
- The long repository traceability map requires several landscape pages; this is intentional and readable.
- Native Word/LibreOffice automation was unavailable in the execution environment. The DOCX therefore received package-level structural QA, and its content was rendered from DOCX OOXML for complete 48-page visual inspection. Word is configured to refresh its live TOC and pagination fields when the DOCX is opened.

## Integrity hashes

- DOCX SHA-256 (original, pre-25-July-2026-update): `4244261B782A00390258EA6BF8A7E0246E080EDBF44260B0D58C994A15999836`
- PDF SHA-256 (original, pre-25-July-2026-update): `40B58927765FC3BFA025247379E557D05AFD3D061B0BF71F0FC219D806C1349A`
- DOCX SHA-256 (post-update, content-corrected): `42231007fbe01d6d5f77787d4620cf6f571731c6909c5ebac66dd8117bd69bc4`
- PDF SHA-256 (post-update, content-corrected, Word-rendered): `7fc0440cddb5a4c9ec2b266bdb00e70f243ce98f0e7d7715c88537d472f975fd`

**Publication decision:** Both deliverables pass publication QA and are ready for delivery.

## Update — 25 July 2026 (post-Stage-17 content regeneration and DEC-011 finding)

### What was stale

This edition's frozen source (`Business_Plan_v1.2_Remediated_Manuscript.md`) was derived, via
`Business_Plan_v1.2_Stage2_Executive_Voice_Draft.md`, from the **Version 1.1 Executive Visual DOCX**
(per `V1_2_Stage2_Change_Log.md`, "Source: Version 1.1 Executive Visual DOCX") — i.e. from
pre-Stage-17 content, on a line of work that ran in parallel with, and finished before, the Stage
15/17/18 whole-plan gates (2026-07-25) that found and fixed defects in `Business_Plan_Drafts_v2/`
Sections 2, 4, 8, 12, and 14. Checked against the current, corrected section drafts, the manuscript
and the published `Business_Plan_Final_v1.2_Executive.docx`/`.pdf` carried exactly two of those
defects, confirmed present verbatim:

- **Section 2/4's uncited, single-point FY2026 Adjusted EBITDA margin figure** — "6.0%→4.6% of GMV
  guided" (in the Governing Hypothesis, §2.3) — corrected to the disclosed, properly cited range,
  "4.4-4.8% of GMV guided," matching Section 2's, Section 4's, and every other section's own
  Stage-15/17-corrected wording.
- **Section 12's title** — "Implementation Plan (Three Horizons)" — corrected to "Implementation
  Plan" everywhere it appeared as a title or TOC/appendix-table section label (9 instances in the
  manuscript; 8 instances in the DOCX body). The Three Horizons framework itself is untouched — it
  remains as the in-body "Three Horizons Roadmap" subsection and narrative references, per the same
  fix already applied to `Section_12_Implementation_Plan.md`.

The Section 8 defect (the false "already established in Section 5.4" cross-reference for the 235TB/day
figure) was **not** found in this edition — its §8 text is condensed enough that it never restates the
figure with that false cross-reference to begin with. The Section 14 defects (the recurring
`Topics/EBITDA.md`→`Topics/AI.md` mis-citation; the stale churn-scope traceability row) also do not
appear here in a form requiring a fix: this edition's remediation already stripped literal repository
file-path citations from the main narrative (per `V1_2_Validation_Remediation_Plan.md`'s own findings
V12-085 etc.), and its churn-scope wording ("Group ... or for Egypt specifically") already matches
Section 13's corrected text.

Both confirmed defects were fixed in `Business_Plan_v1.2_Remediated_Manuscript.md` and in
`Business_Plan_Final_v1.2_Executive.docx`'s `word/document.xml` (surgical text substitution — no
other wording, number, citation, table, or exhibit touched), then the PDF was regenerated from the
corrected DOCX.

### Tooling limitation

No script in this repository built this edition's DOCX/PDF directly and reproducibly from Markdown
(unlike `Business_Plan_Final.docx` and `Business_Plan_v1.1_Executive_Visual.docx`, which have
`scripts/build_final_publication.py` and `scripts/build_business_plan_v1_1.py`); it was hand-assembled
via the remediation passes recorded in the `V1_2_*.md` reports. This session's execution environment
has no Python interpreter (contrary to this project's documented assumption that `python-docx` +
Playwright/Chromium would be available), so no equivalent script-based rebuild was possible either.
The DOCX was patched directly at the OOXML level (verified via `unzip -t` package integrity and
before/after text extraction), and the PDF was regenerated from the corrected DOCX using Microsoft
Word's native PDF export (available and COM-automatable in this session), not the original
Playwright/Chromium HTML-print pipeline this project's other exports document using.

**New page count: 47 pages**, down from the original 51 (Word's layout engine paginates this content
slightly more efficiently than the original pipeline; this is a rendering-engine effect, not a result
of the two short text corrections, which removed only a handful of characters).

### DEC-011 finding — does the v1.2 Executive edition satisfy the page-count requirement?

**No.** `DEC-011` (approved 2026-07-25) designates the raw `Business_Plan_Drafts_v2/` assembly as the
internal audit-trail/reference version, exempt from the project's 15-25 page ceiling, and states that
"a separate, distinct, condensed 15-25 page executive edition will be produced later as its own
deliverable, and that document is what [the ceiling] actually governs." This report's own original
run (above) recorded this edition at **51 pages** — 2-2.4x the ceiling even before rendering-engine
effects — with no page-count check or DEC-011 cross-reference performed at the time. Checking the
project's other `Outputs/V1_2_*.md` reports and `vault/` confirms this question was raised but left
explicitly unresolved: the project tracker
(`vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md`) states outright that
"whether it satisfies DEC-011's intent... is unresolved," and no `V1_2_*.md` report or vault note
addresses DEC-011 by name. This report now closes that question:

- **The v1.2 "Executive" edition does not satisfy DEC-011, at 47-51 pages under either rendering
  engine — 22-32 pages over the ceiling.** Despite its filename, it is not the condensed executive
  edition DEC-011 anticipates; it is closer in character to a second, SWOT-enhanced reference edition
  — it retains a "Repository traceability relocation" appendix and extensive per-claim source mapping
  (`V1_2_Remaining_Repository_Traceability.md`), the same kind of citation apparatus DEC-011 identifies
  as the reason the *raw* draft runs long.
- **`Business_Plan_v1.1_Executive_Visual.pdf` is the edition that actually satisfies DEC-011's intent**,
  measured at 25 pages under its own original ReportLab pipeline — within the 15-25 ceiling — before
  this session's tooling substitution repaginated it to 33 pages for engine reasons (see
  `Publication_QA_Report_v1.1.md`'s update). `Business_Plan_Final.docx` (the original, pre-v1.1
  edition) was also measured at 25 pages under its own original pipeline, for the same reason: it too
  is already a condensed, single-document edition, not the ~62-69-page raw assembly DEC-011 describes.
- **This is a real compliance gap for the v1.2 edition, not a false alarm.** It should be either (a)
  genuinely compressed toward 15-25 pages — carrying the same structural-drift risk DEC-011 itself
  warns against for the raw draft, so this would need its own considered pass, not a quick cut — or
  (b) explicitly re-scoped and re-named as a distinct, page-count-exempt "enhanced/SWOT reference
  edition" sitting alongside the v1.1 Executive Visual as the actual DEC-011-compliant deliverable,
  analogous to how DEC-011 itself resolved the equivalent tension for the raw draft. This report takes
  no position on which; it is a scope decision for the project owner, consistent with this project's
  own "propose, don't execute" discipline on decisions of this kind.

| Check (this update) | Result |
|---|---|
| Stale EBITDA figure removed / corrected figure present (manuscript + DOCX + PDF) | Pass |
| Stale Section 12 heading corrected (manuscript + DOCX + PDF) | Pass |
| Section 8/14 Stage 17 defects checked for | Pass — not present in this edition's text, no fix needed |
| DOCX package integrity (`unzip -t`) | Pass |
| No other content, citation, number, exhibit, or SWOT-enhancement content changed | Pass (change scoped to the two known strings) |
| Page count | 47 pages (Word-rendered), was 51 (original pipeline) |
| **DEC-011 page-count compliance** | **FAIL** — 22-32 pages over the 15-25 ceiling under either renderer; `Business_Plan_v1.1_Executive_Visual` is the edition that satisfies DEC-011, not this one |

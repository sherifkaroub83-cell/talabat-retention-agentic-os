---
report: Formatting QA Report
run_date: 2026-07-24
sections_covered: 14/14
verdict: PASS WITH DISCLOSED TOOLING LIMITATION
---

# Formatting QA Report — 24 July 2026

## Run result

The publication edition uses the `narrative_proposal` design preset and an `editorial_cover` opening.
It contains all 14 required sections in order and is 25 pages in the final PDF.

| Standard | Result | Evidence |
|---|---|---|
| Cover and hierarchy | Pass | Editorial cover, recommendation line, contents page, consistent H1–H3 hierarchy |
| Typography and color | Pass | Calibri DOCX styles; restrained navy/blue/orange palette |
| Page geometry | Pass | US Letter; 1-inch DOCX margins; 0.492-inch header/footer distance |
| Tables | Pass | 12 fixed-width Word tables; quiet blue-gray headers; no visible clipping |
| Exhibits | Pass | Sourced USD175mn programme-structure chart embedded; decision-useful tables retained |
| Headers/footers | Pass | Consistent running label and page number |
| Page flow | Pass | 25 pages; no blank trailing page; sections remain in required order |
| DOCX integrity | Pass | OOXML ZIP test clean; 14 section headings; 1 image; 12 tables |
| PDF integrity | Pass | 25 US-Letter pages; all 14 section headings extract and match; all pages rasterized |

## Visual inspection

All 25 PDF pages were rasterized at 90 dpi and reviewed as a contact sheet, with full-size checks of
the cover, contents/body opening, sourced exhibit page, dense table/body pages, and final appendix.
No overlap, cutoff, missing heading, broken table, or blank content page was found.

## Disclosed tooling limitation

Microsoft Word automation was unavailable in this desktop logon session, and the bundled DOCX
renderer could not locate its conversion executable. Consequently, the DOCX was verified structurally
through OOXML and `python-docx`, while the PDF was generated deterministically from the same selected
source blocks and design tokens and visually inspected page by page. The formats have matching
14-section headings and source content, but the DOCX could not be independently rasterized in this run.

## Verdict

**PASS WITH DISCLOSED TOOLING LIMITATION.** No content or layout defect remains in the delivered PDF;
the limitation concerns direct raster verification of the DOCX only.

## Update — 25 July 2026 (post-Stage-17 content regeneration)

This publication was built 24 July 2026, before the same-day/next-day Stage 15/17/18 whole-plan
gates found and fixed two content defects that reached this edition via `Business_Plan_Drafts_v2/`:
Section 2/4's uncited single-point FY2026 Adjusted EBITDA margin figure ("6.0%→4.6%") — corrected to
the disclosed, properly cited range ("4.4-4.8% of GMV guided") — and Section 12's heading, which
incorrectly carried the McKinsey Lens instruction "(Three Horizons)" as if it were part of the title
(fixed to "12. Implementation Plan"; the Three Horizons Roadmap subsection is unaffected and remains
in the body). Both strings were confirmed present, verbatim, in `word/document.xml` inside
`Business_Plan_Final.docx` and corrected in place (surgical XML text substitution — no other content,
layout, style, or numbering touched), then the PDF was regenerated from the corrected DOCX.

**Tooling note:** this session's execution environment has no Python interpreter (contrary to this
project's own documented assumption that `scripts/build_final_publication.py`'s Playwright/Chromium
pipeline would be available) but does have Microsoft Word installed and COM-automatable. The
corrected PDF was therefore produced via Word's native "Save/Export as PDF" (fields updated,
document repaginated, then exported) rather than the original Playwright/Chromium HTML-print
pipeline. Word's layout engine paginates this content differently from the original pipeline —
**the corrected PDF is now 31 pages, up from the original 25**, for rendering-engine reasons (font
metrics, table/paragraph spacing) unrelated to the two short in-place text corrections. This is
disclosed as a second, independent tooling limitation on top of the one already recorded above; the
25-page figure should not be assumed superseded as a measure of this content's true, intended length
— re-running `scripts/build_final_publication.py` in a Python-enabled environment is the correct way
to obtain a canonical page count once available. Content-integrity (headings, section order, table
count, image count, wording) was re-verified against the regenerated PDF and DOCX; no regressions
found.

| Check (this update) | Result |
|---|---|
| Both known stale strings removed from `word/document.xml` | Pass — 1 EBITDA-figure instance, 2 heading instances |
| Corrected wording present in regenerated PDF text extraction | Pass |
| DOCX package integrity (`unzip -t`) | Pass |
| No other content/citation/number changed | Pass (diff-scoped to the two known strings only) |
| Page count | 31 pages (Word-rendered) vs. 25 pages (original Playwright-rendered) — engine-attributable, not content-attributable; see tooling note |

## Update — 25 July 2026 (Session 12, real-pipeline rebuild)

Python is now installed locally. Per this update's own recommendation above,
`scripts/build_final_publication.py` was re-run directly (not the Word-COM substitute) against the
now-corrected `Business_Plan_Drafts_v2/`. The canonical rebuild is **25 pages** — confirming the
31-page figure above was indeed a Word rendering-engine artifact, not real content growth. Verified via
direct PDF text extraction: the corrected "4.4-4.8% of GMV" figure is present, the stale "6.0%→4.6%"
figure is absent, and Section 12's title is clean ("12. Implementation Plan"). This rebuilt file is
what ships; the Word-COM-produced 31-page version described above is superseded.

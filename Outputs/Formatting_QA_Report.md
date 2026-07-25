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

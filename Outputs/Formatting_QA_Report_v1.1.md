---
report: Formatting QA Report
version: "1.1"
run_date: 2026-07-25
sections_covered: 14/14
exhibits: 8
verdict: PASS WITH DISCLOSED DOCX RENDERING LIMITATION
---

# Formatting QA Report — Business Plan v1.1

## Run result

Version 1.1 retains the Version 1.0 consulting theme and adds eight decision-oriented exhibits without
turning the report into a dashboard or slide deck. The final PDF is 25 pages and contains all 14 GSB
sections in the required order.

| Standard | Result | Evidence |
|---|---|---|
| Cover and hierarchy | Pass | Versioned cover, recommendation line, contents page, consistent H1–H3 hierarchy |
| Typography and palette | Pass | Calibri/Helvetica publication pair; navy/blue/orange/gray visual language |
| Exhibit quantity | Pass | 8 total exhibits; no section has more than two and only the Executive Summary has two |
| Exhibit discipline | Pass | Every exhibit has a number, action title, source, classification, and management implication |
| Evidence integrity | Pass | No invented market allocation, scenario output, ROI, payback, or customer-level data |
| Disclosed vs. analytical labeling | Pass | Programme split labeled disclosed; option sequence and causal structures labeled analytical |
| Tables | Pass | 10 Word tables; visual replacements used only where spatial explanation adds decision value |
| Page flow | Pass | 25 pages; no blank page, clipping, overlap, missing heading, or broken exhibit |
| PDF visual QA | Pass | All 25 pages rasterized and inspected; figures and tables remain readable |
| DOCX structural QA | Pass | Valid OOXML ZIP; 14 numbered section headings plus Contents; 8 images; 9 tables |

## Visual inspection

All 25 PDF pages were rendered at 150% scale and reviewed in four contact-sheet groups, with the final
Appendix pages re-rendered after restoring the explicit Section 14.2 Traceability Note. No overlap,
cutoff, missing glyph, broken table, blank content page, or unreadable exhibit was found. The report
remains within the GSB 15–25 page target.

## Disclosed DOCX rendering limitation

The prescribed DOCX renderer could not start because no LibreOffice conversion executable is
available. Microsoft Word automation also could not start in the current desktop logon session
(`80070520`, no active COM logon session). The DOCX was therefore verified structurally using OOXML,
`python-docx`, and package-integrity checks (14 numbered headings, 8 images, 10 tables); the independently generated PDF from the same selected
source blocks and exhibit assets was visually inspected page by page. This limitation concerns direct
DOCX rasterization only.

## Verdict

**PASS WITH DISCLOSED DOCX RENDERING LIMITATION.** The v1.1 PDF passes full visual QA; the DOCX passes
structural and content-integrity QA and contains the same 14-section source selection and eight exhibits.

## Update — 25 July 2026 (post-Stage-17 content regeneration)

**What was stale.** This edition was built 23-24 July 2026 from `Business_Plan_Drafts_v2/`, before the
Stage 15/17/18 whole-plan gates (2026-07-25) found and fixed defects that had already reached it:
Section 2/4's uncited single-point FY2026 Adjusted EBITDA margin ("6.0%→4.6% of GMV guided") and
Section 12's title incorrectly carrying "(Three Horizons)". Both were confirmed present verbatim in
`word/document.xml` and fixed in place: "6.0%→4.6% of GMV guided" → "4.4-4.8% of GMV guided" (matching
Section 2's and Section 4's own corrected wording, cited to Section 9/TLB-020/TLB-014); "Implementation
Plan (Three Horizons)" → "Implementation Plan" everywhere it appeared as a title/heading (the "Three
Horizons Roadmap" subsection and in-body framework references are untouched). No 235TB/Section 5.4
false cross-reference (the Section 8 Stage 17 defect) was found in this edition's more condensed §8
text — nothing to fix there.

**Tooling limitation, corrected from the original run.** The original run above recorded that
"Microsoft Word automation also could not start" in that authoring session. In this session's
execution environment, Word (16.0) **is** installed and COM-automatable, but no Python interpreter is
present at all — the project's own assumed toolchain (`python-docx`, `matplotlib`, Playwright/Chromium,
per `scripts/requirements.txt`) could not be installed or run, so `scripts/build_business_plan_v1_1.py`
could not be re-executed. The DOCX fix was applied as a surgical, presentation-preserving text
substitution directly on the OOXML (`word/document.xml`), verified via `unzip -t` package integrity
and text-extraction diff (only the two known strings changed). The PDF was then regenerated from the
corrected DOCX using Word's native PDF export (fields updated, document repaginated) — **not** the
original ReportLab-based `build_pdf()` function in `build_business_plan_v1_1.py`, which cannot run
without Python.

**Page count changed for a rendering-engine reason, not a content reason.** The regenerated PDF is
**33 pages**, up from the original 25. This 8-page increase is attributable to Word's layout engine
(font substitution/metrics, paragraph and table spacing) differing from ReportLab's, not to the two
short text corrections applied. **This means the current PDF's page count can no longer be verified
as within the GSB 15-25 page target using this session's tooling** — see
`Publication_QA_Report_v1.1.md`'s update for the resulting Page limit gate status and the recommended
remediation (re-run `scripts/build_business_plan_v1_1.py`'s own ReportLab pipeline in a Python-enabled
environment to restore a canonical, ceiling-verifiable page count).

| Check (this update) | Result |
|---|---|
| Stale EBITDA figure removed / corrected figure present | Pass |
| Stale Section 12 heading corrected (8 body/TOC instances → "Implementation Plan"; in-body "Three Horizons" framework references retained) | Pass |
| DOCX package integrity (`unzip -t`) | Pass |
| Corrected wording present in regenerated PDF text extraction | Pass |
| No other content, citation, number, or exhibit changed | Pass (change scoped to the two known strings) |
| Page count | 33 pages (Word-rendered) vs. 25 pages (original ReportLab-rendered) — flagged as an engine artifact, not verified content growth |

## Update — 25 July 2026 (Session 12, real-pipeline rebuild)

Python is now installed locally. Per this update's own recommendation, `scripts/build_business_plan_v1_1.py`
(the project's own ReportLab pipeline) was re-run directly against the now-corrected
`Business_Plan_Drafts_v2/`. The canonical rebuild is **25 pages** — confirming the 33-page figure above
was a Word rendering-engine artifact, not real content growth. Verified via direct PDF text extraction:
the corrected "4.4-4.8% of GMV" figure is present, the stale "6.0%→4.6%" figure is absent, and Section
12's title is clean. This rebuilt file ships; the Word-COM-produced 33-page version above is
superseded.

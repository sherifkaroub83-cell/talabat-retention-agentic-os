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

# Talabat Knowledge Ingestion — Agent Briefing

You are one worker in a parallel document-ingestion pipeline for an MBA capstone project
(AASTMT, Group G02: "Talabat Egypt — AI-driven customer retention"). The final deliverable
is an AI Business Plan recommending a customer-retention strategy for talabat **Egypt**.
Your job is narrow: turn your assigned raw source documents into structured knowledge notes
and raw fact/entity extracts. Someone else (the orchestrator) will consolidate everything you
produce across all workers afterward — do not try to touch other workers' files.

## Hard rules

1. **Do not invent facts.** Every number, quote, or claim must come directly from the
   extracted text of your assigned document(s). If a section of the template has nothing to
   report for a given document, write "Not covered in this document." — do not fill gaps with
   outside knowledge, estimates, or general Talabat/MENA knowledge you may already have.
2. **Cite precisely.** Every fact you extract must carry a citation: `(Doc ID, filename, page
   N)`. Page numbers come from the `===== PAGE N =====` markers in the extracted text files.
   If a fact spans/repeats across pages, cite the page where it's clearest.
   For the one XLSX source (TLB-029), cite by sheet name instead of page number.
3. **Read the full assigned document(s).** These are extracted PDF text files under
   `/home/user/talabat-retention-agentic-os/vault/Knowledge/_source_text/`. Some are long
   (100–1000+ KB of text) — read them in chunks (the Read tool's offset/limit) rather than
   skipping. Do not summarize from the filename or first page alone.
4. Egypt is **not** broken out separately in talabat's financials — it is folded into the
   "non-GCC" segment (with Jordan, Iraq). When a document doesn't give Egypt-specific numbers,
   say so rather than estimating one yourself. Still flag *every* explicit Egypt mention.
5. Write output files exactly at the paths specified below — do not create alternate
   directories or naming schemes.

## Document ID map (use these exact IDs — full corpus, for citation consistency)

| Doc ID | Filename | Category |
|---|---|---|
| TLB-001 | 20250404_Talabat-Annual-Report-2024-En.pdf | 01_Annual_Reports |
| TLB-002 | 20260331_talabat-Annual-Report-2025-En-Interactive.pdf | 01_Annual_Reports |
| TLB-003 | 20250213_talabat-Q4-FY-preliminary-financials-En.pdf | 02_Quarterly_Financial_Statements |
| TLB-004 | 20250326_talabat-Q4-FY24-audited-financials-En.pdf | 02_Quarterly_Financial_Statements |
| TLB-005 | 20250512_talabat-Q125-Financial-Statements-En.pdf | 02_Quarterly_Financial_Statements |
| TLB-006 | 20250812_talabat-Q225-Financial-Statements-En.pdf | 02_Quarterly_Financial_Statements |
| TLB-007 | 20251110_talabat-Q325-Financial-Statements-En.pdf | 02_Quarterly_Financial_Statements (scanned; OCR'd via Tesseract — expect minor OCR noise) |
| TLB-008 | 20260213_talabat-Q425-Financial-Statements-En.pdf | 02_Quarterly_Financial_Statements |
| TLB-009 | 20260213_talabat-Q425-Results-Press-Release-En.pdf | 02_Quarterly_Financial_Statements |
| TLB-010 | 20260512_talabat-Q126-Financial-Statements-En.pdf | 02_Quarterly_Financial_Statements |
| TLB-011 | 20260512_talabat-Q126-Results-Press-Release-En.pdf | 02_Quarterly_Financial_Statements |
| TLB-012 | 20250224_talabat_Investor-Presentation.pdf | 03_Investor_Presentations |
| TLB-013 | 20250514_talabat-Investor-Presentation.pdf | 03_Investor_Presentations |
| TLB-014 | 20260514_talabat-Investor-Presentation.pdf | 03_Investor_Presentations |
| TLB-015 | October-2024_Capital-Markets-Day_talabat.pdf | 03_Investor_Presentations |
| TLB-016 | 20250213_talabat-Q4-FY24-earnings-call-presentation.pdf | 04_Earnings_Call_Presentations |
| TLB-017 | 20250512_talabat-Q125-earnings-call-presentation.pdf | 04_Earnings_Call_Presentations |
| TLB-018 | 20250812_talabat-Q225-Results-Presentation-En.pdf | 04_Earnings_Call_Presentations |
| TLB-019 | 20260213_talabat-Q4-FY25-Results-Presentation.pdf | 04_Earnings_Call_Presentations |
| TLB-020 | 20260512_talabat-Q1-2026-Results-Presentation.pdf | 04_Earnings_Call_Presentations |
| TLB-021 | DFM Notice   SBB 10072026.Pdf.pdf | 05_Regulatory_and_IPO |
| TLB-022 | TALABAT-HOLDING-ANNOUNCES-OFFER-PRICE-RANGE-AND-START-OF-SUBSCRIPTION-PERIOD.pdf | 05_Regulatory_and_IPO |
| TLB-023 | TALABAT-HOLDING-PLC-ANNOUNCES-ITS-INTENTION-TO-FLOAT-ON-THE-DUBAI-FINANCIAL-MARKET-DFM.pdf | 05_Regulatory_and_IPO |
| TLB-024 | TALABAT-HOLDING-PLC-OFFERING-SIZE-INCREASED-TO-ADDRESS-SIGNIFICANT-INTERNATIONAL-AND-REGIONAL-INVESTOR-DEMAND.pdf | 05_Regulatory_and_IPO |
| TLB-025 | TALABAT-HOLDING-PLC-PRICES-ITS-IPO-AT-THE-TOP-OF-THE-RANGE-RAISING-2-BILLION.pdf | 05_Regulatory_and_IPO |
| TLB-026 | Talabat-Holding-plc_International-Offering-Memorandum.pdf | 05_Regulatory_and_IPO |
| TLB-027 | 20260206_talabat-Q425e-FY25e-27e-company-compiled-consensus.pdf | 06_Consensus_Reports (secondary — sell-side analyst compilation) |
| TLB-028 | 20260504_talabat-Q126e-FY26e-28e-compiled-consensus-vFinal.pdf | 06_Consensus_Reports (secondary — sell-side analyst compilation) |
| TLB-029 | 20250429_talabat-FY24-Quarterly-PL-Breakdown.xlsx | 07_Supplementary_Data |

Extracted text lives at `vault/Knowledge/_source_text/<basename>.txt` where `<basename>` is the
filename with its final extension removed (e.g. TLB-001 → `20250404_Talabat-Annual-Report-2024-En.txt`).
TLB-021's text file keeps the original spacing: `DFM Notice   SBB 10072026.Pdf.txt`.

## OUTPUT 1 — Source Knowledge Note

For **each** assigned document, create one file at:
`/home/user/talabat-retention-agentic-os/vault/Knowledge/Sources/<DocID>_<short-slug>.md`

(e.g. `TLB-001_annual-report-2024.md`). Use this exact section structure:

```markdown
# <DocID> — <Document Title>

## Title
<full descriptive title>

## Citation
<DocID> — talabat Holding plc (or actual publisher), "<title>", <publication date>,
Input_Data/<category>/<filename>

## Publication Date
<date>

## Publisher
<publisher>

## Executive Summary
<4-8 sentences, grounded only in this document's content>

## Key Financial Metrics
<bullet list — each with page citation, e.g. GMV, revenue, EBITDA, net income, margins,
segment splits. "Not covered in this document." if none>

## Key Operational Metrics
<bullet list — orders, active customers, riders, restaurant partners, cities, etc., with
page citations>

## Countries Mentioned
<list all countries named in the document>

## Egypt Mentions
<every substantive Egypt-specific sentence/datapoint, quoted or closely paraphrased, with
page citation. "Egypt is not mentioned in this document." if zero mentions>

## Retention-Relevant Information
<anything relevant to customer retention/loyalty/subscription/churn/repeat-ordering
strategy — talabat pro, frequency, active customer trends, loyalty programs, AI
personalization, etc. — with page citations>

## Important Quotations
<2-6 direct quotes worth citing verbatim in the business plan, each with page number>

## Limitations
<what this document does NOT tell us — e.g. no Egypt-only breakout, projections only,
scanned/OCR'd with possible noise, etc.>

## Potential Business Questions this document can answer
<bullet list of specific questions a capstone author could answer using this document>

## Tags
<lowercase kebab-case tags, e.g. #financials #fy2025 #egypt #retention #talabat-pro>
```

## OUTPUT 2 — Raw facts & entities fragment (one per document, no shared files)

For **each** assigned document, also create:
`/home/user/talabat-retention-agentic-os/vault/Knowledge/Facts/_raw/<DocID>_facts.md`

```markdown
# <DocID> raw facts & entities

## Facts by topic
(Only include topic headings that actually have content in this document. Every bullet
must end with a citation `(DocID, page N)`.)

### Revenue
- ...

### GMV
- ...

### Orders
- ...

### Monthly Active Customers
- ...

### Talabat Pro
- ...

### Advertising
- ...

### Marketplace
- ...

### Q-Commerce
- ...

### Customer Growth
- ...

### Retention
- ...

### Subscription
- ...

### Logistics
- ...

### AI
- ...

### Competition
- ...

## Entities mentioned
- **Companies:** ...
- **Brands:** ...
- **Countries:** ...
- **Executives:** ... (name + title, with page citation)
- **Products:** ...
- **Business Units:** ...
- **Competitors:** ...
- **Technology Platforms:** ...
- **Delivery Models:** ... (e.g. quick commerce, marketplace, logistics/self-delivery)
```

Do not skip topics/entity types that genuinely have no content — just omit that subheading
entirely (don't write "Not covered" 14 times in the facts file; only the source note template
needs explicit "Not covered" markers).

## When done

List the files you created (source notes + facts fragments) in your final report, and flag
any document you could not fully process (e.g., corrupted, unreadable, unexpectedly empty)
so the orchestrator can address it.

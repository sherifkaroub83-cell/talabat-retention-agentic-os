---
report: Business Plan v1.1 Enhancement Assessment
run_date: 2026-07-25
baseline: Version 1.0 merged to main
scope: Executive readability, template compliance, visual communication, publication quality
---

# Business Plan v1.1 — Enhancement Assessment

## Baseline verdict

Version 1.0 is complete and validated: all 14 GSB sections are present in the correct order, all
whole-plan gates pass, the DOCX opens as valid OOXML, and the PDF is 25 pages. Version 1.1 is therefore
an enhancement, not a repair or reopening of the governing strategy. The strategic scope, DEC-008,
DEC-009, disclosed USD175mn envelope, and evidence classifications remain fixed.

The principal opportunity is visual communication. Version 1.0 contains one chart and 12 retained
tables. Several decision-critical relationships are expressed mainly through dense prose or large
tables, so an executive reader must reconstruct the portfolio sequence, value logic, governance
gates, risk priorities, and measurement system mentally.

## Findings

### 1. Template-compliance gaps

The 14-section structure is strictly compliant. The improvement opportunity is to make required
McKinsey mechanisms more explicit in the publication layer:

- Section 1 contains SCQA and the answer, but the recommended five-option funding sequence is not
  visible as a single decision exhibit.
- Sections 2 and 5 distinguish the Agentic OS from talabat's embedded operational AI in prose, but
  the two-layer architecture is not immediately scannable.
- Section 4 states the value mechanisms, while Section 9 contains the driver logic; the causal chain
  is not shown as one compact value-driver exhibit.
- Section 10 has a probability-impact matrix in table/prose form; the high-priority risks are easier
  to understand spatially.
- Section 12 meets the Three Horizons requirement in text/table form, but dependencies and proof
  gates are not visually sequenced.
- Section 13 distinguishes leading and lagging KPIs, but the tree from capital release to operating
  evidence to financial outcomes is not visible.

### 2. Executive-readability weaknesses

- Long section openings combine recommendation, caveat, evidence class, geography, and source
  provenance in one paragraph.
- Repository identifiers (OPT, DEC, ASM, node IDs) are necessary for traceability but sometimes
  interrupt the executive narrative.
- Multiple dense tables use equal-width columns even when one column contains materially more text.
- Management implications are embedded in prose rather than consistently placed beneath exhibits.
- The document is at the 25-page ceiling, so visual additions must replace or compress prose/tables
  rather than simply extend the report.

### 3. Density hotspots

| Section | Density issue | Enhancement response |
|---|---|---|
| 1 Executive Summary | Recommendation sequence dispersed across prose | Add portfolio action map; compress adjacent explanation |
| 2 Business Description | Two AI layers are conceptually dense | Add architecture flow; retain one governing-hypothesis paragraph |
| 3 Market Analysis | Segment facts and growth signals compete for attention | Add one paired growth/share exhibit; retain caveat on dated figures |
| 4 Value Proposition | Causal mechanisms span multiple paragraphs | Add a value-driver chain; remove repetitive mechanism prose |
| 9 Financial Plan | Tables are decision-useful but visually dense | Retain the strongest table; do not chart invented scenario values |
| 10 Risk Analysis | Risk prioritisation is spatial but shown textually | Add a 5×5 risk matrix using existing qualitative ratings |
| 12 Implementation | Three Horizons and gates are hard to scan | Add a Three Horizons roadmap with proof dependencies |
| 13 Monitoring | KPI inventory is extensive | Add a selective KPI tree; keep the full inventory in traceability |
| 14 Appendices | Traceability is necessarily dense | Keep tabular; do not convert evidence mapping into decorative graphics |

### 4. Current exhibit quality

Version 1.0 has one exhibit: the disclosed USD175mn programme split into ~USD120mn Everyday App and
~USD55mn Food leadership. It is accurate and useful, but it should be redesigned to show the disclosed
~USD75mn Everyday App opex and ~USD45mn Everyday App capex components as well. The action title and
source/classification treatment should explicitly state that talabat disclosed the top-level structure.

## Proposed exhibit portfolio

| # | Proposed exhibit and action title | Location | Source | Misinterpretation risk and control | Decision |
|---|---|---|---|---|---|
| 1 | **Approximately 69% of the disclosed 2026 programme is directed to Everyday App expansion** | Section 1 | TLB-020 pp.12,16; TLB-014 pp.16,19; Investment Portfolio Register | Readers may think the Agentic OS set the split. Label every value “Disclosed”; state that the OS governs release within the envelope. | **Redesign** |
| 2 | **The portfolio requires four actions—not one uniform funding decision** | Section 1 | Investment Options Register; DEC-009; OPT-001–005 | Option ranges could be mistaken for approved budgets. Show actions and horizons only; no analytical dollar ranges. | **Add** |
| 3 | **The Agentic OS governs capital decisions while talabat’s embedded AI executes operating use cases** | Section 2 | Section 2; Section 5; Repository Impact Assessment | Diagram could imply access to talabat systems or customer-level data. Add a boundary note: governance design uses available evidence; operational telemetry remains undisclosed. | **Add** |
| 4 | **Non-GCC growth is more than twice GCC growth, but GCC still carries about four-fifths of GMV** | Section 3 | TLB-019 p.14; TLB-011 p.2; Section 3 | FY2025 share and Q1 2026 share could be blended. Show dated points separately and use FY2025 growth rates only in the comparison bars. | **Add** |
| 5 | **Capital creates value only when capability deployment changes customer behaviour before financial outcomes** | Section 4 | Value Driver Tree v2; KPI Tree v2; Sections 4 and 9 | A causal diagram may look like a quantified forecast. Label it “Analytical causal logic”; do not attach unsupported uplift values. | **Add** |
| 6 | **Three proof gates sequence quick wins before broader scale commitments** | Section 12 | Section 12; DEC-009; Investment Options Register | Horizons may be read as approved market budgets or guaranteed dates. Label timing as implementation horizon and retain human-gate language. | **Add** |
| 7 | **Three high-priority risks require management attention before capital release** | Section 10 | Section 10 risk register | Qualitative ratings may appear actuarially precise. Use ordinal Low–High axes, not probabilities; identify the matrix as management analysis. | **Add** |
| 8 | **Capital release should follow leading proof signals before lagging financial outcomes** | Section 13 | KPI Tree v2; Section 13 | Selective KPIs may look exhaustive or imply existing baselines. Mark newly instrumented measures and point to the full KPI inventory. | **Add** |

Eight exhibits are recommended, including the redesigned existing chart. They cover eight distinct
decisions or relationships and avoid duplicate messages. No exhibit is recommended for Sections 6,
7, 8, 9, 11, or 14 because their most useful information remains comparative, procedural, or
traceability-oriented and is better served by concise prose/tables.

## Rejected visual opportunities

- **Numeric scenario chart:** rejected because the evidence does not support falsely precise
  programme-attributable upside/downside outcomes.
- **Country allocation map:** rejected because market-level allocations are undisclosed and must not
  be invented.
- **ROI/payback waterfall:** rejected because no defensible option-level ROI/payback series exists.
- **Dashboard of all 50 KPIs:** rejected because it would turn the plan into an operating dashboard.
- **Decorative market map, icons, or AI illustration:** rejected because they add no decision value.

## Visual strategy

Use the Version 1.0 navy/blue/orange theme with one semantic extension: navy for disclosed facts,
blue for analytical structures, orange for management action/gates, and gray patterns/labels as a
non-colour fallback. All exhibits will use the same width, action-title hierarchy, source/classification
footer, and one-sentence management implication. Exhibits will be generated as high-resolution PNGs
for reliable DOCX/PDF embedding, with direct labels and no legend-only encoding.

## Recommendation

Proceed with eight exhibits, but keep the publication within 25 pages by replacing redundant prose
or low-value retained tables where necessary. Preserve all Version 1.0 outputs and publish Version 1.1
under distinct filenames with fresh formatting and publication QA reports.

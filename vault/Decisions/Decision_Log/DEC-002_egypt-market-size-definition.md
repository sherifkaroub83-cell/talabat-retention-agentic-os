---
id: DEC-002
status: approved
date: "2026-07-22"
owner: decision-steward (agent) — data-presentation/reconciliation call, approved without user escalation
supersedes: none
---

# DEC-002 — Egypt market-size definition and top-down/bottom-up reconciliation logic for Section 3

## Tooling note (read first)
Drafted directly by `bp-orchestrator` acting in the decision-steward role — the `Agent` tool was not
available this session (see DEC-001's Tooling note for the full explanation).

## Question
`AI_Business_Plan_Template.md`'s McKinsey Lens for Section 3 requires the market to be sized "top-down AND
bottom-up and reconcile the two — a single unsourced figure is not sizing." The vault corpus and
Input_Data secondary corpus give three candidate figures that do not obviously reconcile:
1. IMARC Group: Egypt **online food delivery** market, USD 542.9m (2025) (RES-002).
2. Mordor Intelligence: Egypt **total foodservice** market (dine-in + delivery + takeaway), USD 10.35bn
   (2025)/USD 11.83bn (2026), delivery growing fastest at 14.52% CAGR (RES-003).
3. talabat's own disclosed Egypt segment **revenue**: USD 509.9m (FY2025, TLB-002/TLB-008, primary,
   High confidence) — the strongest real, company-actual anchor in the corpus for Egypt specifically, but
   note this is revenue (talabat's commission/fee take), not GMV or total market size.
This was already flagged, unresolved, in the Project tracker's "Open decisions" list ("Egypt market-size
definition to adopt") before this drafting session began. It is also flagged in
`Input_Data/_CORPUS_INDEX.md`'s data-gap #2 ("market-size figures conflict by definition... pick one
definition and reconcile"). The corpus does not resolve which definition the plan should use, or how to
reconcile a market-research estimate against talabat's own disclosed number.

## Options considered
1. **Use IMARC's figure as the sole top-down TAM.** Evidence: named market-research firm (secondary,
   Medium confidence per RES-002). Rejected as the sole figure: IMARC's USD 542.9m *entire-market*
   estimate is barely larger than talabat's own USD 509.9m Egypt *revenue alone* (not even GMV) for the
   same year — arithmetically implausible for a market with multiple active competitors (Breadfast,
   Rabbit, elmenus per RES-001). IMARC's own source file already flags this figure as "conservative" vs.
   talabat's disclosed growth.
2. **Use Mordor's figure as the sole top-down TAM.** Evidence: named market-research firm (secondary,
   Medium confidence per RES-003). Rejected as the *sole* figure: Mordor sizes the whole foodservice
   category (dine-in included), a materially broader denominator than talabat's actual delivery-platform
   business — using it alone without labeling would overstate talabat's addressable market.
3. **Use talabat's own disclosed Egypt revenue as the only market-sizing figure, ignore both secondary
   reports.** Rejected: this is a company-actual bottom-up figure, not a market size — Section 3 requires
   an independent top-down cross-check, not just the company's own number restated.
4. **Present all three, explicitly labeled by definition, with talabat's disclosed revenue as the
   bottom-up anchor, Mordor's total-foodservice figure as the outer top-down addressable-market ceiling
   (delivery-specific CAGR called out separately), and IMARC's figure presented only as a labeled,
   flagged-inconsistent lower-bound reference point — explicitly stating the three cannot be arithmetically
   reconciled into one number, and naming why.**

## Decision
**Option 4.** Section 3 will:
- Anchor the bottom-up leg on talabat's own disclosed Egypt segment revenue (USD 509.9m FY2025; USD
  145.3m Q1 2026 segment revenue, +81% YoY — TLB-002/TLB-008/TLB-010), labeled explicitly as company
  revenue, not GMV or total market size.
- Anchor the top-down leg on Mordor's total Egypt foodservice market (USD 10.35bn 2025 base / USD 11.83bn
  2026, → USD 23.1bn 2031, 14.32% CAGR), with delivery named as the fastest-growing service type within it
  (14.52% CAGR) — explicitly labeled as the broad addressable-market ceiling, not a delivery-platform GMV
  figure.
- Cite IMARC's narrower USD 542.9m "online food delivery" figure only as a secondary, explicitly-flagged
  reference point, stating plainly that it cannot be reconciled with talabat's own disclosed Egypt revenue
  and should be read as a conservative lower bound of uncertain definitional scope, not as the plan's
  primary top-down number.
- State explicitly, per the McKinsey Lens instruction's own allowance ("or explicitly flagged if it can't
  be [reconciled]"), that a single, fully reconciled top-down/bottom-up Egypt TAM figure is not achievable
  from the currently available sources, and name why (three different denominators: platform revenue vs.
  online-delivery GMV vs. total foodservice spend).

## Rationale
This is the most honest application of the "reconcile the two, or explicitly flag if you can't" standard
the template itself sets — forcing a false reconciliation (e.g., picking IMARC alone) would produce an
internally inconsistent number that a numerate reader (or the instructor) would immediately catch, which
is worse than transparently naming the definitional gap. Mordor's broader denominator is the more
defensible top-down "ceiling" because it is least likely to already double-count or undercount talabat's
own disclosed revenue.

## Impact
Creates Assumption Register row **ASM-003**. Unblocks Section 3's Industry Trends (top-down + bottom-up
market sizing) sub-bullet. Also resolves the Project tracker's pre-existing "Egypt market-size definition
to adopt" open item for Section 3's purposes (Section 9's Financial Plan may need its own, separate
pass on this question when it builds the value driver tree — this decision does not bind Section 9).

## Approval
Data-presentation/reconciliation-logic call within the OS owner's authority — does not change the plan's
recommendation, only how market size is sourced and presented. Marked `approved` directly per
`decision-steward`'s documented latitude for this class of decision.

## Links
- [[Decision_Management_Layer|Decision Management Layer]]
- [[Egypt]]
- [[Financial Performance]]
- [[Growth Strategy]]

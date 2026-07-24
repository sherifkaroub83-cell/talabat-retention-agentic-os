---
section: 13
title: Monitoring and Evaluation
status: Drafted — self-reviewed, not yet independently verified
pipeline_run: 2026-07-23
supersedes_note: "Companion to (not a replacement of) vault/Projects/Business_Plan_Drafts/Section_13_Monitoring_and_Evaluation.md (superseded Egypt-retention draft, untouched). Fresh draft for the 2026-07-23 pivot."
---

# 13. Monitoring and Evaluation

> **Pipeline provenance note:** Phase 9 pilot draft. KPIs sourced entirely from
> `vault/Forecasts/KPI_Tree_v2.md`'s 50-KPI, 5-family structure, replacing the old 16-KPI tree
> wholesale. No numeric target is assigned to any of the 20 newly-instrumented KPIs — per
> `KPI_Tree_v2.md`'s own rule, a target requires a dedicated Decision Log entry, not invention at
> drafting time. Per `DEC-008`'s scope (extending to Section 13's KPI framing), no bucket-level or
> ~2.2:1 quantified breakdown appears here. **Pass 1, self-reviewed** — independent citation audit
> and QA still required.

## Answer, stated first

This plan's monitoring framework does not invent new metrics to look complete — it reproduces
`KPI_Tree_v2.md`'s 50 KPIs across five families (Portfolio, Customer & growth, Financial, Operational,
Governance) faithfully, states plainly which 30 already have a talabat-disclosed baseline and which 20
do not, and assigns no numeric target to any newly-instrumented KPI without a Decision Log entry to back
it. The single most important finding this section carries forward: the entire Governance family (7
KPIs) has zero baseline, because talabat discloses zero internal capital-allocation governance
mechanics anywhere in the 29-document corpus — any stage-gate or reallocation-threshold KPI this plan
proposes is explicitly its own recommended mechanism.

## KPIs Mapped to the Value Driver Tree

| Family | Count | Baseline-exists | Newly-instrumented | Representative KPIs |
|---|---|---|---|---|
| Portfolio | 8 | 4 | 4 | Spend-to-plan by bucket (baseline: disclosed ~USD120mn/~USD55mn bucket plan, `Investment_Portfolio_Register.md`); % of programme spend passing a documented stage-gate (new) |
| Customer & growth | 12 | 9 | 3 | talabat pro subscriber GMV share (baseline: 32%→49% trend); multi-vertical GMV share (baseline: 68%→73%→76%); **churn rate (new — see below)** |
| Financial | 14 | 11 | 3 | Adj. EBITDA margin (baseline: guided range); programme-attributable incremental GMV (new, `ASM-017`-derived, illustrative only) |
| Operational | 9 | 6 | 3 | Dark-store count/density (baseline: 130→160 stores); delivery time/on-time rate (baseline: disclosed trend) |
| Governance | 7 | 0 | 7 | % of spend passing a documented stage-gate; ROI/payback hurdle-rate compliance — **entire family newly-instrumented** |

Full 50-KPI detail, leading/lagging tags, and geography tags: `KPI_Tree_v2.md`.

## Leading vs. Lagging Split

Every KPI in `KPI_Tree_v2.md` carries this tag explicitly. **MECE statement:** the split is mutually
exclusive and collectively exhaustive across 49 of the 50 KPIs — every KPI is tagged exactly one of
Leading or Lagging, with no untagged KPI. The one stated exception, not a silent gap: **C10** (Egypt/
non-GCC talabat pro order-frequency and retention uplift) carries **both** a Leading and a Lagging
component, per `KPI_Tree_v2.md`'s own Summary table, and is counted once in family totals but noted in
both columns — a deliberate, documented exception to strict mutual exclusivity, not an oversight.

The pattern that matters most for this plan's own decision logic: Portfolio and Operational KPIs are
predominantly leading (spend pacing, dark-store density predict downstream GMV effect before it shows up
in Financial KPIs); Financial KPIs are predominantly lagging (EBITDA margin confirms what already
happened); Governance KPIs are a distinct third category — process-compliance indicators that are
neither predictive of nor confirmatory about financial outcome, but are the precondition for the other
two families being trustworthy inputs to a future allocation decision.

## Churn — the Single Biggest Customer-Side Gap

No churn rate, definition, or cohort analysis exists anywhere in the corpus, at Group or any country
level (`Topics/Customer Churn.md`). This is carried forward from the pre-pivot problem's own finding,
unchanged by the pivot — it becomes a metric this programme must **start measuring from zero**, not one
it improves against a known baseline. Any churn target this plan or a future one proposes requires a
Decision Log entry backing it; none exists yet.

## Template-Named KPI Examples (CAC, MRR) — Explicit Mapping

The template names Customer Acquisition Cost (CAC) and Monthly Recurring Revenue (MRR) as worked
examples. Neither is a registered `KPI_Tree_v2.md` KPI in its own right; both are addressed explicitly
here rather than silently omitted.

- **Customer Acquisition Cost (CAC):** disclosed at Group level only, not broken out by country: USD44mn
  (2024, 2023: USD40mn), rising to USD67mn (2025) — folded into total CARC of USD103mn/1.4% of GMV (2024,
  2023: USD89mn/1.5% of GMV), rising further to USD155mn/1.6% of GMV (2025) (`Facts/Customer_Growth.md`,
  TLB-001 p.28, TLB-002 p.21; consistent with Section 4's CARC citation). This is Group-level evidence
  already usable directly under the pivot's own Group-wide scope — no geography-transfer inference is
  needed, unlike several other figures in this plan. This section does not add a new standalone CAC KPI
  outside `KPI_Tree_v2.md`'s registered 50, since CARC efficiency is already the evidence base for
  Section 4's targeted-incentives mechanism and Section 9's cost-side financial case, not a distinct
  monitoring gap of its own.
- **Monthly Recurring Revenue (MRR):** does not map onto talabat's disclosed revenue architecture. talabat
  is a four-line Commission/Delivery/Subscription/Advertising business (Section 6), not a subscription-
  first one — only the Subscription fee line is a true recurring fee, and it is not separately forecast
  in `KPI_Tree_v2.md`'s Financial family at the granularity MRR would require. This section does not force
  an MRR-equivalent metric onto a business model it does not fit; the closest genuine analog is **C7**
  (talabat pro subscriber GMV share, baseline 32%→49%) as the nearest disclosed proxy for recurring-
  relationship scale, explicitly labeled as a proxy, not an MRR substitute.

## Governance KPIs — Explicitly the OS's Own Proposal, Not talabat's Process

Per `Topics/Capital Allocation and Investment Governance.md`'s central finding, talabat discloses the
programme's headline figures and one qualitative rationale, but no described approval committee,
evaluation threshold, or stage-gate process. The seven Governance KPIs this plan proposes (e.g. "% of
programme spend passing a documented stage-gate," "ROI/payback hurdle-rate compliance") are this OS's
own recommended monitoring mechanism, stated as such — not a description or validation of talabat's
actual internal process, and not to be cited elsewhere in this plan as if they were.

## Tracking Tools and Feedback Loops

Not disclosed for talabat's own internal systems. This plan's own tracking mechanism is the vault-based
architecture itself: `Assumptions_Register.md` (status transitions from Proposed to Approved),
`Investment_Options_Register.md` and individual `OPT-` records (status transitions from candidate
through approved/rejected/superseded), and the Decision Log's superseded-decision workflow
(`vault/Architecture/Decision_Management_Layer.md`) as the feedback mechanism when new evidence changes
a prior decision.

## Kill/Pivot Criteria

Per Section 12's evidence-gated horizon structure: `OPT-002` (the H1 pilot) is the clearest candidate for
an explicit kill/pivot test — if Egypt/Iraq pro-adoption evidence at the H1→H2 gate falls materially
short of the GCC+Jordan cohort's 20-28%/26-32% uplift range, the correct response is reassessment, not
continued funding on the original `ASM-016` inference. No numeric kill threshold is set here — per
`KPI_Tree_v2.md`'s own rule, that requires a dedicated Decision Log entry once H1 produces real
Egypt/Iraq data, mirroring exactly how the pre-pivot plan's own `DEC-007` handled the same class of
problem (qualitative, trajectory-relative gates before real baseline data exists, not invented numeric
thresholds).

---

## Traceability summary (for Appendix/Section 14 use)

| Claim | Source |
|---|---|
| 50 KPIs, 5 families, 30 baseline-exists/20 newly-instrumented | `KPI_Tree_v2.md` |
| No churn baseline anywhere in the corpus | `Topics/Customer Churn.md` |
| Governance family entirely newly-instrumented | `Topics/Capital Allocation and Investment Governance.md` |
| Pre-pivot precedent for qualitative kill-criteria framing | `DEC-007` (superseded problem, methodology precedent only) |

## See also
[[Section_09_Financial_Plan]] · [[Section_12_Implementation_Plan]] · `vault/Forecasts/KPI_Tree_v2.md`

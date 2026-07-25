---
section: 13
title: Monitoring and Evaluation
status: Done (independently verified) — Pass 2 citation audit + QA review complete ([[Citation_Audit_Section_13_v2_Pass2]], [[QA_Review_Section_13_v2_Pass2]]), verdict PASS WITH MINOR FIXES (missing Review Cadence section; imprecise KPI baseline time periods; overbroad churn-scope claim); all fixed 2026-07-24. Repository incident, 2026-07-25: this file was found genuinely deleted from the repo (an accidental commit, not the section's content) during Stage 17's whole-plan citation audit; restored from the last good commit, then independently re-audited fresh ([[Citation_Audit_WholePlan_Stage17_Section13]]) — this section's own text is citation-clean, all 3 Pass 2 fixes confirmed genuinely present; the audit did find that the churn-scope fix here had not been propagated into Sections 1 and 14, which still carried the old, overbroad wording — fixed in those two sections 2026-07-25, not here (Section 13's own text was already correct)
pipeline_run: 2026-07-23
supersedes_note: "Companion to (not a replacement of) vault/Projects/Business_Plan_Drafts/Section_13_Monitoring_and_Evaluation.md (superseded Egypt-retention draft, untouched). Fresh draft for the 2026-07-23 pivot."
---

# 13. Monitoring and Evaluation

> **Pipeline provenance note:** Phase 9 pilot draft. KPIs sourced entirely from
> `vault/Forecasts/KPI_Tree_v2.md`'s 50-KPI, 5-family structure, replacing the old 16-KPI tree
> wholesale. No numeric target is assigned to any of the 20 newly-instrumented KPIs — per
> `KPI_Tree_v2.md`'s own rule, a target requires a dedicated Decision Log entry, not invention at
> drafting time. Per `DEC-008`'s scope (extending to Section 13's KPI framing), no bucket-level or
> ~2.2:1 quantified breakdown appears here. **Pass 1, self-reviewed; independent Pass 2 found and this
> session fixed 3 defects — a missing Review Cadence section, imprecise KPI baseline time periods (the
> talabat pro/multi-vertical GMV-share rows lacked the specific quarters they cover), and an overbroad
> churn-scope claim (corrected to note the corpus addresses churn for Egypt specifically, not just
> "no country") — see [[Citation_Audit_Section_13_v2_Pass2]] — re-confirmation still required.**

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
| Portfolio | 8 | 4 | 4 | Spend-to-plan by bucket (baseline: disclosed EBITDA bridge); % of programme spend passing a documented stage-gate (new) |
| Customer & growth | 12 | 9 | 3 | talabat pro subscriber GMV share (baseline: 32%→49%, Q1 2025→Q1 2026); multi-vertical GMV share (baseline: 68%→73%→76%, Dec'24→Dec'25→Mar'26); **churn rate (new — see below)** |
| Financial | 14 | 11 | 3 | Adj. EBITDA margin (baseline: guided range); programme-attributable incremental GMV (new, `ASM-017`-derived, illustrative only) |
| Operational | 9 | 6 | 3 | Dark-store count/density (baseline: 130→160 stores); delivery time/on-time rate (baseline: disclosed trend) |
| Governance | 7 | 0 | 7 | % of spend passing a documented stage-gate; ROI/payback hurdle-rate compliance — **entire family newly-instrumented** |

Full 50-KPI detail, leading/lagging tags, and geography tags: `KPI_Tree_v2.md`.

## Leading vs. Lagging Split

Every KPI in `KPI_Tree_v2.md` carries this tag explicitly. The pattern that matters most for this plan's
own decision logic: Portfolio and Operational KPIs are predominantly leading (spend pacing, dark-store
density predict downstream GMV effect before it shows up in Financial KPIs); Financial KPIs are
predominantly lagging (EBITDA margin confirms what already happened); Governance KPIs are a distinct
third category — process-compliance indicators that are neither predictive of nor confirmatory about
financial outcome, but are the precondition for the other two families being trustworthy inputs to a
future allocation decision.

## Churn — the Single Biggest Customer-Side Gap

No churn rate, definition, or cohort analysis exists anywhere in the corpus, for talabat overall (Group)
or for Egypt specifically (`Topics/Customer Churn.md`) — the only country the corpus addresses this
question for at all. This is carried forward from the pre-pivot problem's own finding, unchanged by the
pivot — it becomes a metric this programme must **start measuring from zero**, not one it improves
against a known baseline. Any churn target this plan or a future one proposes requires a Decision Log
entry backing it; none exists yet.

## Review Cadence

Root/Portfolio and Financial KPIs follow talabat's own quarterly reporting cadence (the corpus's actual
disclosure rhythm — TLB-019, TLB-020, TLB-014), tracked against Section 9's base-case trajectory. The
Governance family (7 KPIs, no baseline) and the newly-instrumented Customer & growth/Operational KPIs are
reviewed at the same quarterly cadence but assessed trajectory-relative to the base case (sustained
tracking toward or below it triggers escalation), not against an invented numeric threshold, per this
section's own rule that no target may be set for a zero-baseline KPI without a Decision Log entry. This
cadence is this OS's own proposed monitoring rhythm, anchored to talabat's disclosed reporting calendar
— not a description of an internal talabat review process, none of which is disclosed
(`Capital Allocation and Investment Governance.md`).

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

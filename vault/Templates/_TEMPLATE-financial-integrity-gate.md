---
type: template
title: Financial Integrity Gate checklist template
updated: "2026-07-23"
---

# _TEMPLATE-financial-integrity-gate

Copy this file to `vault/Validation/Financial_Integrity_Gate.md` (overwrite on re-run) each time
`qa-review-agent` runs the Financial Integrity Gate — required on any section containing financial
figures (primarily Sections 6, 9, 12, 13), and always before the Template Compliance Gate /
Publication handoff. Added 2026-07-23 as part of the strategic pivot.

**What this gate checks:** that every financial claim in the drafted content is internally
arithmetically consistent, correctly unit-ed, and does not silently mix incompatible financial
concepts — a category of error a citation audit alone won't catch, because each individual number can
be correctly cited while the combination is still wrong.

```markdown
---
report: Financial Integrity Gate
run_date: YYYY-MM-DD
scope: <section number(s) or "whole plan">
verdict: PASS | FAIL
---

# Financial Integrity Gate — <run date>

**Scope of this run:** <section(s) checked>

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Allocation totals reconcile (any bucket-level figures sum to the stated USD175mn total, or the discrepancy is explained) | Pass / Fail | |
| 2 | Scenario arithmetic is internally consistent (base/upside/downside figures move in a coherent direction relative to each other and to their stated drivers) | Pass / Fail | |
| 3 | Units are consistent within each exhibit (no silent mixing of USD millions with GMV percentage-points, or absolute figures with growth rates, without a stated conversion) | Pass / Fail | |
| 4 | Currency is stated and consistent (USD throughout unless a local-currency figure is explicitly flagged, per the corpus's own EGP/AED conventions) | Pass / Fail | |
| 5 | Time periods are stated and not silently mixed (FY2024 vs. FY2025 vs. FY2026 guidance vs. Q1 2026 actuals are never blended into one figure without saying so) | Pass / Fail | |
| 6 | Percentage logic is correct (a percentage-of-GMV figure is not treated as a percentage-of-revenue figure, or vice versa; no percentage-point vs. percentage confusion) | Pass / Fail | |
| 7 | No double counting (a single investment euro/dollar or a single uplift effect is not counted toward two different outcomes as if additive) | Pass / Fail | |
| 8 | No additive stacking of overlapping retention/frequency uplift statistics (e.g. talabat pro's +28% and Rewards' +15% are not simply summed into a +43% combined effect without justification — these mechanisms are known to overlap in the customer base) | Pass / Fail | |
| 9 | Revenue, GMV, gross profit, and EBITDA are never mixed or substituted for one another in a single claim (each is a distinct, named line per `Topics/Revenue Drivers.md`, `Topics/GMV.md`, `Topics/EBITDA.md`) | Pass / Fail | |
| 10 | Every financial figure presented as a single point estimate is either a disclosed fact or explicitly labeled as an approved assumption/forecast with its confidence level — no unlabeled false precision | Pass / Fail | |
| 11 | `DEC-008`'s constraint is respected where applicable (Section 9/12/13 headline exhibits show the Group base case only; the Everyday App/Food-leadership bucket split, if referenced at all, is narrative-only, never a quantified sub-case) | Pass / Fail | |

## Verdict

**PASS** only if all eleven checks pass. **FAIL** if any single check is violated — name the exact
check(s) that failed, quote the specific figures involved, and show the arithmetic or logical error.

## If FAIL

- Violated check(s):
- Specific finding (quote the figures and show the error):
- What must change before this section/plan can proceed:

This gate does not fix the violation itself — it reports it back to whichever process (drafting,
forecasting, decision) produced the inconsistent figures.

## See also
- `vault/Decisions/Investment_Portfolio_Register.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`
- `DEC-008`
- `.claude/agents/qa-review-agent.md`
```

## See also
[[Business_Plan_Generation_Pipeline]] · [[Validation and Audit]] · [[Investment_Relationship_Map]]

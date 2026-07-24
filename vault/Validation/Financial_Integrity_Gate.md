---
report: Financial Integrity Gate
run_date: 2026-07-24
scope: Sections 12, 13 (Pass 2 independent review)
verdict: FAIL
---

# Financial Integrity Gate — 2026-07-24

**Scope of this run:** Section 12 (Implementation Plan), Section 13 (Monitoring and Evaluation)

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Allocation totals reconcile | Pass | Neither section presents a bucket-level allocation total; the only dollar figure used is the disclosed "~USD55mn" Food-leadership bucket (Section 12), stated correctly. |
| 2 | Scenario arithmetic internally consistent | N/A | Neither section presents scenario arithmetic directly (deferred to Section 9). |
| 3 | Units consistent within each exhibit | Pass | No mixing found. |
| 4 | Currency stated and consistent | Pass | USD throughout; no local-currency figures used. |
| 5 | Time periods stated and not silently mixed | Pass with a noted gap | See Geographic Evidence Gate — Section 13's two headline trend cells omit periods (not mixed, just unstated); not a mixing violation. |
| 6 | Percentage logic correct | Pass | "-4% y/y non-high-value M1 retention" and "~7%-of-GMV UAE benchmark" both used exactly as disclosed, no percentage-point/percentage confusion. |
| 7 | No double counting | Pass | No additive dollar totals constructed in either section. |
| 8 | No additive stacking of overlapping uplift statistics | Pass | The 20-28%/26-32% range is cited once, as a range, not summed with any other mechanism's uplift. |
| 9 | Revenue/GMV/gross profit/EBITDA not mixed or substituted | Pass | Section 13's Financial KPI family keeps GMV, Revenue, EBITDA, and FCF as distinct rows. |
| 10 | No unlabeled false precision | Pass | No OS-constructed dollar range shown as a point figure in either section. |
| 11 | `DEC-008` constraint respected (no quantified 2.2:1 sub-case) | Pass | Confirmed — no dollar figures, no 2.2:1 language, in either section. |
| — (additional, task-specific) | `DEC-009`'s approved funding sequence (OPT-002/OPT-003 near-term; OPT-001/OPT-005 continue-at-pace; OPT-004 longer-horizon) is accurately represented wherever cited | **FAIL — Section 12 only** | Section 12's H1/H2 treatment of OPT-003 (monitor-only, no near-term funding action, deferred to a contingent H2 Decision) contradicts DEC-009's own approved Decision text ("OPT-002 and OPT-003 as the near-term, low-risk/high-fit priority"), `Investment_Options_Register.md`'s explicit restatement of the same sequence, and the drafting skill's own Section 12 instruction. Section 13 makes no equivalent claim and is unaffected. |

## Verdict

**FAIL (Section 12 only; Section 13 PASS).** The eleven template checks all pass for both sections
individually — no arithmetic, unit, currency, or double-counting defect was found. The fail is a
fidelity defect specific to Section 12: a Decision Log record (`DEC-009`) is correctly named as the
source of the funding sequence, but the sequence attributed to it does not match what DEC-009 actually
resolved for OPT-003. This is the class of error the Financial Integrity Gate exists to catch —
individually-plausible citations whose combination misstates the governing record.

## See also
- `vault/Decisions/Investment_Portfolio_Register.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
- `vault/Decisions/Investment_Options_Register.md`
- `.claude/agents/qa-review-agent.md`

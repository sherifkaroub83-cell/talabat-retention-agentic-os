---
type: template
title: Problem Consistency Gate checklist template
updated: "2026-07-23"
---

# _TEMPLATE-problem-consistency-gate

Copy this file to `vault/Validation/Problem_Consistency_Gate.md` (overwrite on re-run — this is a
point-in-time verdict, not an append-only log; prior runs are recoverable from git history) each time
`qa-review-agent` runs the Problem Consistency Gate — required whenever a section is drafted or
re-drafted, and always before the Template Compliance Gate / Publication handoff. Added 2026-07-23 as
part of the strategic pivot (see `Problem_Charter.md`).

**What this gate checks:** that every *active* file the drafting pipeline reads from reflects the
*same* business problem, scope, objective, decision question, investment envelope, evidence rules,
and output requirements — not a mix of the current (Group-wide capital-allocation) problem and the
superseded (Egypt-retention) one. This is the gate that would have caught this repo's own pivot
inconsistencies if it had existed before 2026-07-23; it exists now specifically to prevent that
category of drift recurring, including on a *future* pivot.

```markdown
---
report: Problem Consistency Gate
run_date: YYYY-MM-DD
scope: <section number(s) or "whole plan">
verdict: PASS | FAIL
---

# Problem Consistency Gate — <run date>

**Scope of this run:** <section(s) checked>
**Canonical problem statement (read fresh this run):** `Problem_Charter.md`

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Business problem statement matches `Problem_Charter.md` verbatim in substance (Group-wide USD175mn Everyday App / Food-leadership capital allocation, not Egypt-retention) | Pass / Fail | |
| 2 | Geographic scope matches the charter (talabat Group across 8 markets, Egypt as worked example — not "MENA," not Egypt-only) | Pass / Fail | |
| 3 | The decision question matches the charter (how to allocate the USD175mn programme, not "how to reduce Egypt churn") | Pass / Fail | |
| 4 | The investment envelope cited matches the disclosed figures (USD175mn = ~USD120mn Everyday App + ~USD55mn Food-leadership) with no invented sub-splits presented as disclosed | Pass / Fail | |
| 5 | Evidence-category discipline is respected — Facts, analytical inferences, Decisions, Assumptions, Forecasts, and synthetic examples are never blended or presented as one another | Pass / Fail | |
| 6 | Output requirements match the charter (14-section template, ranges/scenarios/staged funding, not a false-precision single allocation) | Pass / Fail | |
| 7 | No active file cites a superseded artifact as if it were current (e.g. the old `Value_Driver_Tree.md`, `KPI_Tree.md`, `Talabat-Egypt-AI-Retention-Business-Plan.md`, or any pre-pivot `DEC-`/`ASM-` row without an explicit "historical" framing) | Pass / Fail | |
| 8 | Any reference to the pre-pivot problem is clearly marked historical/superseded, not presented as still-active | Pass / Fail | |

## Verdict

**PASS** only if all eight checks pass. **FAIL** if any single check is violated — name the exact
check(s) that failed and quote the specific inconsistent text found (not just "inconsistent").

## If FAIL

- Violated check(s):
- Specific finding (quote the inconsistent text and its file/line):
- What must change before this section/plan can proceed:

This gate does not fix the violation itself — it reports it back to whichever process (drafting,
research, forecasting, decision) produced the inconsistent content.

## See also
- `Problem_Charter.md`
- [[Talabat-Group-AI-Investment-Allocation-Business-Plan|Project tracker]]
- [[Repository_Impact_Assessment]]
- `.claude/agents/qa-review-agent.md`
```

## See also
[[Business_Plan_Generation_Pipeline]] · [[Validation and Audit]] · `Problem_Charter.md`

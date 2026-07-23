---
type: template
title: Geographic Evidence Gate checklist template
updated: "2026-07-23"
---

# _TEMPLATE-geographic-evidence-gate

Copy this file to `vault/Validation/Geographic_Evidence_Gate.md` (overwrite on re-run) each time
`qa-review-agent` runs the Geographic Evidence Gate — required on every section (any section can
contain a geography-tagged claim), and always before the Template Compliance Gate / Publication
handoff. Added 2026-07-23 as part of the strategic pivot, operationalizing
`vault/Architecture/Geographic_Evidence_Rules.md`.

**What this gate checks:** that every geography-bearing claim in the drafted content is tagged
correctly, applied at the right geography, and — where evidence from one geography is used to reason
about another — explicitly labeled as an inference. This is the single most likely error mode this
pivot's own root-cause analysis identified (see `Repository_Impact_Assessment.md` §0).

```markdown
---
report: Geographic Evidence Gate
run_date: YYYY-MM-DD
scope: <section number(s) or "whole plan">
verdict: PASS | FAIL
---

# Geographic Evidence Gate — <run date>

**Scope of this run:** <section(s) checked>
**Validated against:** `vault/Architecture/Geographic_Evidence_Rules.md` (read fresh this run)

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Every numeric or directional claim carries a geography tag (Group / GCC / non-GCC / Egypt-standalone / country-specific / market-comparison / external / inferred-applicability) | Pass / Fail | |
| 2 | No Group-level or GCC-level figure is presented as Egypt-specific (or any other single country) without a stated inference qualifier | Pass / Fail | |
| 3 | No Egypt-specific (or other single-country) figure is presented as Group-representative | Pass / Fail | |
| 4 | Pre-FY2025 and FY2025-onward "non-GCC" figures are not used interchangeably without flagging the segment-reporting change (pre-2025 non-GCC includes Egypt; FY2025-onward non-GCC excludes it) | Pass / Fail | |
| 5 | The time period of every geography-tagged claim is stated and matches its source (no silent mixing of FY2024 Group data with FY2026 guidance under one geography tag) | Pass / Fail | |
| 6 | No unsupported metric transfer — a mechanism or uplift statistic evidenced in one geography is not presented as measured or disclosed in a different geography | Pass / Fail | |
| 7 | Every `inferred-applicability` claim is explicitly labeled as an inference in the prose itself (not just in a footnote or citation), with both the source and target geography named | Pass / Fail | |
| 8 | "MENA" is never used as a stand-in for talabat's own 8-market footprint, GCC/non-GCC split, or Group total | Pass / Fail | |
| 9 | External market-research figures (IMARC, Mordor, etc.) are not blended arithmetically with talabat's own Group/GCC/Egypt figures without an explicit, stated reconciliation | Pass / Fail | |

## Verdict

**PASS** only if all nine checks pass. **FAIL** if any single check is violated — name the exact
check(s) that failed and quote the specific claim, its actual source geography, and how it was
misapplied.

## If FAIL

- Violated check(s):
- Specific finding (quote the claim and the geography error):
- What must change before this section/plan can proceed:

This gate does not fix the violation itself — it reports it back to whichever process (drafting,
research, forecasting) produced the geography error.

## See also
- `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Knowledge/Entities/Countries.md`, `vault/Knowledge/Topics/Segment Reporting.md`, `vault/Knowledge/Topics/GCC vs non-GCC.md`
- `.claude/agents/qa-review-agent.md`
```

## See also
[[Business_Plan_Generation_Pipeline]] · [[Validation and Audit]] · [[Repository_Impact_Assessment]]

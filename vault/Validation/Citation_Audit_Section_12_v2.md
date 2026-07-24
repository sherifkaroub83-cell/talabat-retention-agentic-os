---
type: validation
section: 12
pipeline_stage: 9
date: "2026-07-24"
result: "FAIL — 1 hard failure (DEC-009 status misattribution), 0 untraceable numeric claims, 1 non-blocking observation"
---

# Citation Audit — Section 12 (Implementation Plan, Three Horizons) — v2 draft

## Tooling / Independence note (read first)

Genuinely top-level-invoked, freshly-spawned thread with no memory of, or access to, any drafting
session's reasoning for this section. Tools used: `Read`, `Grep`, `Glob`, `Write`. No `AskUserQuestion`,
`Agent`, `WebSearch`/`WebFetch` needed. Per the task brief, `vault/Validation/Citation_Audit_Section_12.md`
(the pre-pivot audit of the superseded `Business_Plan_Drafts/Section_12_Implementation_Plan.md`) was
**not read** — it audits a different section for a different governing problem and is irrelevant as a
citation input here, though its failure pattern (misattributed cross-references) was watched for
independently. No `QA_Review_Section_12*` file was read (out of scope, later stage). All findings below
were derived by reading the target section directly against `DEC-008`, `DEC-009`, `Assumptions_Register.md`
(`ASM-016`), `KPI_Tree_v2.md`, `Scenarios_v2.md`, `Investment_Options_Register.md`, `OPT-002`, `OPT-003`,
`TLB-019_q4-fy25-results-presentation.md`, `Capital Allocation and Investment Governance.md`,
`Section_02_Business_Description.md` (v2), `Section_09_Financial_Plan.md` (v2), and
`Section_05_AI_Technology_and_Development.md` (v2) — not by trusting the section's own citation language.

## Scope note on cross-references

Section 12's actual "See also" block cites only `Section_02_Business_Description`, `Section_09_Financial_Plan`,
`DEC-009`, `DEC-008`, and `Investment_Options_Register.md` — it does **not** cite Section 7 (Marketing
Rollout) or Section 10 (Risk Analysis) anywhere in the body text (the "Marketing Rollout Plan" sub-section
explicitly declines to reference Section 7's plan, reasoning instead from Section 5). There is therefore no
Section 7/Section 10 cross-reference to verify for staleness — nothing to check is not the same as a gap;
it is confirmed absent by direct read.

## Claim-by-claim trace

| # | Claim | Traces to | Verified? |
|---|---|---|---|
| 1 | DEC-009 tiers OPT-001/OPT-005 = Tier 1, OPT-003 = Tier 2, OPT-002/OPT-004 = Tier 3 | `DEC-009` "Tiering" section | **Pass** — exact match |
| 2 | OPT-002 is DEC-009's own finding as cheapest, most reversible, best-suited to piloting | `DEC-009` Tier 3 bullet + `OPT-002` "Pilot recommendation" | **Pass** |
| 3 | OPT-001/OPT-005 already underway, no new H1 decision needed | `DEC-009` ("continued, not accelerated, funding"); `KPI_Tree_v2.md` P5 (dark-store capex "progressing broadly on plan") | **Pass** |
| 4 | OPT-002 targets Egypt/Iraq; GCC/Group evidence is inference, not proven Egypt/Iraq effect (`ASM-016`, Low confidence) | `Assumptions_Register.md` row ASM-016 (Approved, Low, Forecast tier, used in Section 4/9/12/13) | **Pass** — status, confidence, and "used in Section 12" all match |
| 5 | UAE/Kuwait/Qatar non-high-value M1 retention -4% y/y (TLB-019, page 9) | `TLB-019_q4-fy25-results-presentation.md` line 44: "Q4'25 y/y M1 retention change by segment (competitive markets): high-value +6%, non-high-value -4%... (p.9)"; geography explicitly scoped to UAE/Kuwait/Qatar, p.9 caveat "should not be assumed to apply to Egypt" | **Pass** — figure, page, and geography tag (country-specific/market-comparison, not Group) all correct |
| 6 | ~USD55mn Food-leadership bucket is "already disclosed" | `Section_09_Financial_Plan.md` line 45; `Assumptions_Register.md` ASM-006/DEC-010 (Fact tier, TLB-020 p.12/16) | **Pass** |
| 7 | GCC+Jordan pro uplift 20-28%/26-32% range used as H2 go/no-go benchmark | `KPI_Tree_v2.md` C5/C6 (TLB-001 p.18, TLB-015 p.78, TLB-019 p.11); `ASM-016` | **Pass** — geography correctly scoped "GCC + Jordan only (excludes Egypt and Iraq)" |
| 8 | OPT-004 has longer disclosed time-to-value; ~7%-of-GMV UAE benchmark is a multi-period target | `DEC-009` Tier 3 bullet ("longest time-to-value"); `OPT-004_advertising-monetization-gap-closure.md` ("UAE talabat mart already at ~7% of GMV... Group intended target; benchmark itself is country-specific (UAE)") | **Pass** — geography tag preserved correctly (UAE fact used as a Group-directed target, labeled, not silently presented as Group-achieved) |
| 9 | Largest remaining open question = Section 2.2 problem 3 (cross-market allocation) | `Section_02_Business_Description.md` lines 110, 188 ("cross-market allocation question (problem 3 in §2.2)") | **Pass** |
| 10 | No market-level allocation logic disclosed anywhere in the corpus | `Capital Allocation and Investment Governance.md` Open Questions ("No document discloses any country-level or GCC/non-GCC/Egypt-level breakdown...") | **Pass** |
| 11 | KPI Tree Governance family has no baseline | `KPI_Tree_v2.md` §5 summary: "Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented" | **Pass** — exact match |
| 12 | Per DEC-008's scope (extending to Section 12), no quantified financial exhibit / ~2.2:1 bucket split appears here | `DEC-008` Decision + Impact sections ("Section 9's (and by extension Section 12/13's) headline financial exhibits will show only the Group-level base/upside/downside... `ASM-018`... not to be surfaced as a headline number in Section 9/12/13") | **Pass** |
| 13 | "Not disclosed anywhere in the corpus" for headcount/team expansion (AI capability or capital-allocation function) | `Capital Allocation and Investment Governance.md` (no committee/threshold/stage-gate/headcount named) | **Pass** |
| 14 | Product is "an internal capital-allocation decision-support system, per Section 5" | `Section_05_AI_Technology_and_Development.md` line 17 ("decision-support system this plan itself proposes...") | **Pass** |
| 15 | Scenarios_v2.md's "eight scenario modules" | `Scenarios_v2.md` headings: pro/loyalty, multi-vertical adoption, AI personalisation, targeted incentives, advertising, grocery & retail, Food-leadership, logistics = 8 | **Pass** |

## Finding 1 — HARD FAILURE: Section 12's provenance note misstates DEC-009's actual status

The Pipeline provenance note (lines 11–18) asserts: **"`DEC-009`'s funding-sequence question is
unresolved — the horizon placement below is this plan's own proposed sequencing logic, explicitly
labeled as such, not a committed or approved roadmap."**

This is contradicted by `DEC-009` itself, and by every other vault record that touches `DEC-009`:

- `DEC-009`'s own frontmatter: `status: approved`, `resolved_date: "2026-07-23"`, `resolution: "Middle
  path... commit to a recommended funding sequence, presented narratively..."`
- `DEC-009`'s own "Decision" section, verbatim: **"Resolved 2026-07-23, by direct user/team instruction
  (middle path). Both open questions are now settled: 1. Funding sequence: YES, commit to one —
  narratively, not as a dollar-denominated headline... 2. Allocation ranges: shown only as a labeled
  illustrative sensitivity/appendix exhibit..."**
- `DEC-009`'s "Approval" section: **"Approved 2026-07-23, by direct user/team instruction."**
- `vault/Decisions/Investment_Options_Register.md` line 22: **"Each is scored against the 11-criterion
  framework and compared in `DEC-009` (status: `approved`, 2026-07-23 — middle path: a recommended
  funding sequence is committed to narratively...)."**
- `Section_09_Financial_Plan.md` (v2) line 47-54 independently states the same thing: **"ranked and
  sequenced in `DEC-009`, `status: approved` 2026-07-23 — middle path... **Recommended funding sequence
  (per `DEC-009`):** near-term priority to OPT-002... and OPT-003..."**

So DEC-009 did in fact resolve the funding-sequence question — at the level of *which options get
near-term priority vs. continue-at-pace vs. longer-horizon treatment* — and that resolution is
"approved," not open. Section 12's claim that this question "is unresolved" is a factual misstatement
about a directly-cited decision record, not a stylistic imprecision: it traces to something (`DEC-009`),
but the thing it traces to says the opposite of what Section 12 claims it says. Per this audit's
procedure, a claim that traces to a source but is contradicted by that source is a failure, not a pass.

**What is true, and could have been said instead:** DEC-009 approved the *tier-level* sequence (OPT-002/
OPT-003 near-term priority; OPT-001/OPT-005 continue-at-pace; OPT-004 longer-horizon build) narratively —
this much is settled and approved. What genuinely is this plan's own, not-yet-independently-reviewed
construction is the specific **Three Horizons timeline and evidence-gate mechanics** (the 0-6/6-18/18+
month bands, the specific H1→H2 and H2→H3 stage-gate tests) — DEC-009 does not itself specify this
granular a schedule. The provenance note conflates "the specific H1/H2/H3 schedule is this plan's own
elaboration" (true, and worth saying) with "DEC-009's funding-sequence question is unresolved" (false).

**Required fix:** Rewrite the provenance note's second sentence to state accurately that DEC-009 is
`approved` and already commits to a narrative funding sequence (tier-level priority), and that what
remains this plan's own, not-yet-approved construction is specifically the Three-Horizons timeline/
evidence-gate schedule below — not the underlying sequencing decision itself. This is a drafting-level
correction, not new research; every fact needed to write it correctly already exists in `DEC-009` and
`Investment_Options_Register.md`.

**Downstream consistency note (non-blocking for this audit, but worth flagging to the Orchestrator):**
`Section_09_Financial_Plan.md` (v2) contains the mirror-image inconsistency *within a single document* —
line 47-54 correctly describes `DEC-009` as `status: approved` with a recommended funding sequence, but
line 103-105 of the same file separately describes the five options as "ranked but not yet committed to
a funding sequence for (`DEC-009`, open)." This suggests the DEC-009-status error is not isolated to
Section 12 and may be worth a single consistent fix pass across Sections 9 and 12 together, rather than
patched independently in each.

## Anti-pattern / geography checklist (`Geographic_Evidence_Rules.md`)

No violation found. Every numeric claim in Section 12 carries a correct geography tag at the point of
use: the -4% M1 retention figure stays labeled UAE/Kuwait/Qatar (never Group or Egypt); the 20-28%/26-32%
pro uplift range stays labeled GCC+Jordan and is explicitly used only as an inference target for Egypt/
Iraq via `ASM-016`, never presented as an Egypt-proven fact; the ~7%-of-GMV benchmark stays labeled
UAE-specific even while used as a Group-directed target; the ~USD120mn/~USD55mn bucket split and the
USD175mn envelope stay Group-level throughout. No pre/post-FY2025 non-GCC ambiguity arises in this
section (it does not cite a non-GCC aggregate figure at all). No instance of Failure Patterns #1-#6 found.

## Result

**FAIL — 1 required fix before Stage 10.** All 15 numeric/named-fact claims traced to a real, current,
correctly-geography-tagged source **except** the DEC-009 status characterization in the Pipeline
provenance note, which is a hard failure (a named-fact claim that contradicts its own cited source).
Per the 0%-tolerance rule, Section 12 cannot proceed to Stage 10 until this is corrected. The fix is a
short, mechanical prose edit (no new research, no re-analysis) — see Finding 1 for the exact wording gap.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_12_Implementation_Plan.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
- `vault/Decisions/Decision_Log/DEC-008_section9-headline-bucket-split-presentation.md`
- `vault/Decisions/Assumptions_Register.md` (ASM-016)
- `vault/Decisions/Investment_Options_Register.md`
- `vault/Decisions/Investment_Options/OPT-002_talabat-pro-acceleration-egypt-iraq.md`
- `vault/Decisions/Investment_Options/OPT-003_food-leadership-cvp-partner-retention-gcc3.md`
- `vault/Decisions/Investment_Options/OPT-004_advertising-monetization-gap-closure.md`
- `vault/Forecasts/KPI_Tree_v2.md`
- `vault/Forecasts/Scenarios_v2.md`
- `vault/Knowledge/Sources/TLB-019_q4-fy25-results-presentation.md`
- `vault/Knowledge/Topics/Capital Allocation and Investment Governance.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`

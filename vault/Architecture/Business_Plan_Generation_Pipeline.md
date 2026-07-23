---
type: architecture
status: approved
created: "2026-07-21"
updated: "2026-07-23"
---

# Business Plan Generation Pipeline — 19 Stages (post-pivot)

Task 8 of the OS Architecture Design Phase; extended 2026-07-23 as Phase 7 of the strategic pivot to
the Group-wide capital-allocation problem (`Problem_Charter.md`). This document defines *how* the
Business Plan moves from "problem confirmed" to "handed to Publication" — the `business-plan-drafting`
skill's 14-section content map (remapped 2026-07-23) still defines *what* goes in each section.

> **2026-07-23 pivot note:** the original design was an 11-stage **per-section** loop only — it had no
> explicit plan-level setup phase and no whole-plan consistency gates, because the original
> Egypt-retention problem didn't need to compare *multiple candidate investment options* against a
> shared envelope before drafting could begin. The Group-wide capital-allocation problem does. This
> redesign wraps the original 11-stage loop (now **Stage 13** below, otherwise unchanged and still
> validated by real execution — see "Status") with a new 12-step **plan-level setup phase** (Stages
> 1–12, run once, not per section) and three new whole-plan **consistency gates** (Stages 14–16)
> before the existing citation audit / Template Compliance Gate / Publication handoff (Stages 17–19).
> Nineteen stages total, matching the sequence specified for this pivot. **The 14-section structure
> itself, and the "never jump straight from evidence to a recommendation" discipline the original
> design already enforced, are both unchanged — this redesign never skips directly from descriptive
> evidence to an allocation recommendation without decision criteria, assumptions, scenarios, risks,
> confidence level, and stage gates in between, which is exactly what Stages 6–12 exist to force.**

## Part A — Plan-Level Setup (Stages 1–12, run once per active problem, not per section)

Run before any section enters Stage 13. Owner: `bp-orchestrator` (or the top-level session under the
same runtime constraint documented below), delegating to the named specialist per stage.

| # | Stage | Owner | Reads | Writes | Status as of 2026-07-23 |
|---|---|---|---|---|---|
| 1 | **Confirm business question** | Orchestrator | `Problem_Charter.md` | Confirms active problem, scope, envelope | ✅ Done — `Problem_Charter.md` rewritten 2026-07-23 (status: proposed, pending instructor re-approval) |
| 2 | **Assemble investment evidence** | Orchestrator | `vault/Knowledge/Topics/`, `Facts/`, `Investment_Relationship_Map.md` | A working Group-wide evidence base | ✅ Done — Phase 3 of the pivot (13 new Topic Notes, Investment Relationship Map) |
| 3 | **Identify candidate investment options** | `decision-steward` | `Investment_Portfolio_Register.md`, drafting-stage findings | `vault/Decisions/Investment_Options_Register.md` (`OPT-XXX` records) | ⬜ Scaffolded, empty by design — candidate options get proposed during Section 9/12 drafting (Stage 13), not invented in advance; see the register's own "Current status" note |
| 4 | **Detect evidence gaps/conflicts** | Orchestrator | Topic Notes' Open Questions, `Repository_Impact_Assessment.md` | Typed gap list (external / forecast / decision) | ✅ Done — every Phase 3 Topic Note documents its own gaps explicitly (e.g. `Capital Allocation and Investment Governance.md`'s governance-mechanics gap) |
| 5 | **Targeted research** | `research-agent` | `Research_Register.md` | Research Notes, register updates | ⬜ Not yet run against the new problem — the 4 pre-pivot Research Notes are marked superseded (legitimate country-level evidence, not the primary decision input) |
| 6 | **Define decision criteria** | `decision-steward` | — | The 11-criterion comparison framework in `Decision_Management_Layer.md`'s "Investment Option" section | ✅ Done — Phase 4 of the pivot |
| 7 | **Build value-driver trees** | `forecasting-agent` | `Investment_Relationship_Map.md`, `Facts/` | `vault/Forecasts/Value_Driver_Tree_v2.md` | ✅ Done — Phase 5 of the pivot (45 nodes) |
| 8 | **Register assumptions** | `decision-steward` | Forecasting-agent's proposed assumptions | `Assumptions_Register.md` rows | ✅ Done — `ASM-015`–`028` registered, `Status: Proposed` pending human approval before citation |
| 9 | **Build scenarios** | `forecasting-agent` | `Value_Driver_Tree_v2.md` | `vault/Forecasts/Scenarios_v2.md` (base/upside/downside + 8 modules) | ✅ Done — Phase 5 of the pivot |
| 10 | **Rank investment options** | `decision-steward` | `Investment_Options_Register.md`, the Stage 6 comparison framework | Ranked options with High/Medium/Low ratings per criterion (never a single blended score) | ⬜ Not yet run — no `OPT-` candidates exist yet to rank (see Stage 3) |
| 11 | **Define allocation ranges / pilot sequencing** | `decision-steward` | Ranked options, `Investment_Portfolio_Register.md` | Updated Portfolio Register base/upside/downside ranges, pilot-funding recommendation | ⬜ Not yet run — the register currently holds only the two disclosed envelope components (Everyday App/Food-leadership); ranges are explicitly marked "not yet set" rather than invented |
| 12 | **Define KPIs / stage gates** | `kpi-agent` | `Value_Driver_Tree_v2.md`, ranked options | `vault/Forecasts/KPI_Tree_v2.md`; per-option stage gates in each `OPT-` record | 🟡 Partial — `KPI_Tree_v2.md` done (50 KPIs, Phase 5); per-*option* stage gates await Stage 3/10 |

**Stages 3, 5, 10, 11, and 12's option-level piece remain open** — not oversights, but the correct
consequence of this being architecture work, not drafting. Per the pivot's own Phase 9 scope, these
resolve as real candidate options and their comparisons surface during the limited Section 9/12 pilot
draft, not before it. Fabricating them now to make this table look more complete would itself be the
false-precision error this pivot exists to prevent.

## Part B — Per-Section Drafting (Stage 13, the original 11-stage loop, unchanged)

> **Invocation pattern, updated post-Phase-7 pilot (see [[Agentic_OS_Architecture_v2]], Change 1):**
> the original design had `bp-orchestrator` invoke each specialist agent itself, via its own nested
> `Agent` tool calls. Phase 7's pilot run found that a spawned `bp-orchestrator` subagent has no
> `Agent`/`WebSearch`/`WebFetch` tools available to it in this runtime, so that delegation cannot
> occur. **Current practice: the top-level session invokes each specialist agent directly**, following
> the stage table below as its own checklist — `bp-orchestrator`'s specification remains authoritative
> for *what* happens at each stage; only *who* executes it changed.

Run once per section, drawing on Part A's outputs instead of raw Facts alone.

| # | Sub-stage | Owner | Reads | Writes |
|---|---|---|---|---|
| 13.1 | Intake & Scoping | Orchestrator | `AI_Business_Plan_Template.md`, `business-plan-drafting` skill (remapped 2026-07-23) | Confirms section, required sub-bullets |
| 13.2 | Evidence Assembly | Orchestrator | Part A's assembled evidence + `Knowledge/Facts`, `Topics`, `Strategic` | A working evidence list for the section |
| 13.3 | Gap Detection | Orchestrator | The assembled evidence vs. the template's required sub-bullets | Gap list, typed: external / forecast / decision |
| 13.4 | External Research Resolution | `research-agent` | `Research_Register.md` | Research Notes, register updates |
| 13.5 | Forecast & Assumption Generation | `forecasting-agent` | `Value_Driver_Tree_v2.md`, `Facts/` | `Value_Driver_Tree_v2.md`, `Scenarios_v2.md` updates |
| 13.6 | Decision Escalation | `decision-steward` | All evidence tiers, open questions from 13.4–13.5 or 13.7 | `Decision_Log/DEC-XXX.md`, `Investment_Options/OPT-XXX.md`, Assumptions Register rows |
| 13.7 | Evidence Ranking & Conflict Resolution | `evidence-citation-agent` | Competing evidence found in 13.2–13.5 | Ranked evidence set; escalations to 13.6 where needed |
| 13.8 | Drafting (McKinsey Lens) | Orchestrator | The resolved evidence + registered (`Approved`) assumptions only | Section prose |
| 13.9 | Citation Verification | `evidence-citation-agent` | The draft | `Citation_Audit_Section_N.md` |
| 13.10 | Cross-Section Consistency & KPI Alignment | `kpi-agent` (financial/KPI sections) or Orchestrator (others) | `Value_Driver_Tree_v2.md`, other section drafts | Consistency notes; `KPI_Tree_v2.md` updates |
| 13.11 | QA & Final Review | `qa-review-agent` | The draft, citation audit, template, **plus the three new gates (Problem Consistency / Financial Integrity / Geographic Evidence)** | `QA_Review_Section_N.md`; flips status to ✅ |

### Gate rules (unchanged from the original design)

- **13.8 cannot start** while any gap typed in 13.3 as external/forecast/decision is still unresolved
  for that specific claim.
- **13.11 is the only sub-stage that can move a section to ✅ Done.** 13.9 passing alone only earns 🟡.
- **Two-pass verification** (see [[Agentic_OS_Architecture_v2]], Change 2): 13.9 and 13.11 assume
  independence. When performed in-line by the same context that drafted the section, mark **✅ Done
  (self-reviewed)**; a fresh, separately-invoked Pass 2 is required for **✅ Done (independently
  verified)**, submission-final status.
- **Section 1 (Executive Summary) skips 13.2–13.7 and 13.10** — runs 13.1 (has all 13 other sections
  reached 🟡?), then `exec-summary-agent` for 13.8-equivalent synthesis, then 13.9 and 13.11 as normal.
- **A sub-stage may report "not applicable"** — recorded explicitly, never silently skipped.
- **Wikilink scope:** skills and agents are referenced as plain backtick paths, never `[[wikilinks]]`.

## Part C — Whole-Plan Gates (Stages 14–19, run once, after all 14 sections reach 🟡 or better)

| # | Stage | Owner | What it checks | Writes |
|---|---|---|---|---|
| 14 | **Cross-section consistency review** | `qa-review-agent` | The **Problem Consistency Gate** run at whole-plan scope (not just per-section): do all 14 sections, taken together, reflect one coherent business problem, scope, and decision question — no section still arguing the old Egypt-retention framing while another argues the new capital-allocation one | `vault/Validation/Problem_Consistency_Gate.md` (`scope: whole plan`) |
| 15 | **Financial consistency review** | `qa-review-agent` | The **Financial Integrity Gate** at whole-plan scope: do Sections 6/9/12/13's figures reconcile with each other, not just internally — no section citing a different USD175mn sub-split, a different EBITDA-margin trajectory, or a different headline scenario than another | `vault/Validation/Financial_Integrity_Gate.md` (`scope: whole plan`) |
| 16 | **Geographic evidence review** | `qa-review-agent` | The **Geographic Evidence Gate** at whole-plan scope: no section applying a geography tag inconsistently with how another section tagged the same underlying evidence | `vault/Validation/Geographic_Evidence_Gate.md` (`scope: whole plan`) |
| 17 | **Citation audit** (whole-plan) | `evidence-citation-agent` | Every claim in the assembled plan, re-checked together (catches duplicated/relocated claims individual section audits could miss) — mirrors the precedent set by the pre-pivot "whole-plan McKinsey Lens pressure test" | Whole-plan citation audit note |
| 18 | **Template Compliance Gate** | `.claude/skills/template-compliance-gate/SKILL.md` | Section count/numbering/titles/order intact; no structural drift from any prior stage (including any executive-editing pass) | `vault/Validation/Template_Compliance_Checklist.md` |
| 19 | **Hand off to Publication Layer** | Orchestrator | Stages 14–18 all PASS | Formal handoff to `.claude/skills/executive-document-formatting/SKILL.md` per `[[Publication_Layer]]`'s contract |

**Stage 19 cannot begin unless Stages 14, 15, 16, and 18 all show PASS**, and Stage 17 shows zero open
citation failures. A FAIL at any of 14–18 routes back to the specific section(s) and stage(s)
responsible — per each gate template's "If FAIL" section — not a blanket re-draft.

## Relationship to the old flow

The pre-pivot pipeline was already a real improvement over the original (pre-architecture) flow — see
the prior version of this document for that history. This redesign's own improvement is structural:
it stops the plan-level judgment calls (which investment options exist, how they compare, what ranges
and stage gates apply) from being implicitly made *inside* individual section drafts, where they'd be
invisible to cross-section consistency checking. Those calls now happen once, explicitly, in Part A,
before Part B's per-section loop runs — and Part C checks that Part B's 14 outputs stayed consistent
with each other and with Part A's decisions.

## Status

**Part A: partially executed** (Stages 1, 2, 4, 6, 7, 8, 9 done as Phases 1–5 of the 2026-07-23 pivot;
Stages 3, 5, 10, 11, 12 open, correctly deferred to the Phase 9 pilot). **Part B: executed once for
real against the old problem** (Section 3, Market Analysis, 2026-07-22 — see
[[Phase7_Pilot_Execution_Report_Section_03]]; not yet re-run against the new problem). **Part C: never
executed** — the closest precedent is the pre-pivot whole-plan McKinsey Lens pressure test, which
predates these three named gates and should not be treated as having satisfied them. See
`vault/Architecture/Implementation_Roadmap.md` and the pivot's own Phase 9 pilot plan for what's next.

## See also
[[Agentic_OS_Architecture]] · [[Agentic_OS_Architecture_v2]] · [[Phase7_Pilot_Execution_Report_Section_03]] ·
[[Project Administration]] · [[Publication_Layer|Publication Layer]] (downstream of Stage 19, unchanged
by this redesign) · `.claude/skills/template-compliance-gate/SKILL.md` · `Problem_Charter.md` ·
`vault/Architecture/Decision_Management_Layer.md` · `vault/Architecture/Geographic_Evidence_Rules.md` ·
`vault/Decisions/Investment_Portfolio_Register.md`, `vault/Decisions/Investment_Options_Register.md`

---
type: architecture
status: approved
created: "2026-07-22"
scope: "Pilots 2-4 — the next operational tests, not a jump to drafting the remaining Business Plan"
---

# Pilot Validation Plan — Pilots 2, 3, 4

Per explicit instruction: **do not immediately generate the remaining Business Plan.** Pilot 1
(Section 3, Market Analysis — [[Phase7_Pilot_Execution_Report_Section_03]]) validated most of the
architecture but left specific, named questions open. Each of the next three pilots is designed to
close one of those questions, in order of how much currently rests on it — not simply the next
section in the roadmap's numeric order.

## Pilot 2 — Section 2 (Business Description)

**Objective:** test the [[Agentic_OS_Architecture_v2|Change 1 orchestration fix]] (top-level-invoked
specialists instead of nested delegation) for the first time, and test the `AskUserQuestion`
escalation path for real — Pilot 1's two decisions were both data-presentation calls that never
needed it; Section 2's governing hypothesis is a strategic framing choice that plausibly does.

**Section to execute:** Section 2 — Business Description (governing hypothesis, MECE problem
decomposition, business model).

**Agents involved:** `research-agent`, `decision-steward`, `evidence-citation-agent`,
`qa-review-agent` — each invoked **directly from the top-level session**, not nested inside
`bp-orchestrator`, per Change 1. `bp-orchestrator`'s stage table is followed as a checklist by the
top-level session rather than executed by a spawned instance of the agent itself.

**Skills involved:** `business-plan-drafting` (Section 2 content map), `decision-log` (the governing
hypothesis decision), `evidence-ranking`, `citation-audit`, `qa-review`.

**Expected validation:** whether flat, top-level invocation actually restores agent-thread isolation
(the central open question from Pilot 1); whether `decision-steward`, when it hits a genuine strategic
framing choice rather than a data-presentation call, correctly invokes `AskUserQuestion` instead of
self-approving.

**Success criteria:** (a) Stage 11 QA is performed by a **genuinely separately-invoked** agent thread
— confirmed by the reviewing thread having no access to the drafting thread's intermediate reasoning,
not just by both stages having "happened"; (b) the governing hypothesis decision either correctly
escalates to the user or a documented, sound rationale explains why it didn't; (c) Section 2 reaches
at least ✅ Done (self-reviewed), with Pass 2 attempted.

**Repository updates expected:** `vault/Projects/Business_Plan_Drafts/Section_02_Business_Description.md`,
a new Decision Log entry for the governing hypothesis, Citation Audit + QA Review files (two QA files
if Pass 2 is genuinely separate — Pass 1 and Pass 2 should be distinguishable artifacts, not one file
overwritten), Project tracker update.

## Pilot 3 — Section 9 (Financial Plan)

**Objective:** test the two completely unexercised agents (`forecasting-agent`, `kpi-agent`) and the
one completely unexercised layer (Forecast) for the first time. This is the highest-uncertainty pilot
— everything about the Forecast Layer remains theoretical until this run.

**Section to execute:** Section 9 — Financial Plan (value driver tree, 3-scenario forecast,
assumptions register, the 2026 investment-total conflict).

**Agents involved:** `forecasting-agent` (first real use), `kpi-agent` (first real use),
`decision-steward` (the 2026 investment-total conflict — a third, still-open documented discrepancy),
`evidence-citation-agent`, `qa-review-agent` — all top-level-invoked per the Pilot 2 pattern, assuming
Pilot 2 confirms it works; if Pilot 2 finds the fix doesn't fully restore isolation, Pilot 3 should
still proceed with self-review clearly labeled, rather than waiting indefinitely.

**Skills involved:** `forecast-builder` (first real use), `business-plan-drafting`, `decision-log`,
`evidence-ranking`, `citation-audit`, `qa-review`.

**Expected validation:** whether the Value Driver Tree schema (Fact-vs-Assumption tagging) actually
works when a real node is built from the FY2025 Egypt revenue anchor; whether `forecasting-agent`
correctly calibrates confidence given only two disclosed Egypt data points (FY2025, Q1 2026) as
`Forecasting_Layer.md`'s own design already anticipates should cap confidence at Medium, not High;
whether `kpi-agent` can derive a sensible KPI from a freshly-built driver-tree node with no prior
example to follow.

**Success criteria:** at least one real `Value_Driver_Tree.md` node exists, correctly tagged Fact or
Assumption; three scenarios (base/upside/downside) exist in `Scenarios.md`, each with a stated growth
logic sentence, not just three numbers; the 2026 investment-total conflict (three different figures
across source documents) is resolved via a logged Decision, the same pattern Pilot 1 proved for the
category-share conflict; at least one real `KPI_Tree.md` entry exists.

**Repository updates expected:** `vault/Projects/Business_Plan_Drafts/Section_09_Financial_Plan.md`,
populated `Value_Driver_Tree.md`/`Scenarios.md`/`KPI_Tree.md` (currently all explicit placeholders), a
new Decision Log entry (`DEC-003`, the investment-total conflict), Citation Audit + QA Review files,
Project tracker update.

## Pilot 4 — Section 10 (Risk Analysis)

**Objective:** deliberately test the [[Agentic_OS_Architecture_v2|Change 2 two-pass verification
protocol]] itself, by running Stage 11 twice on purpose — once in-line (Pass 1), once as a genuinely
separate, freshly-invoked top-level call (Pass 2) — and comparing the two results directly. This is
the pilot that answers "does the two-pass fix actually catch anything Pass 1 misses, or is it
redundant."

**Section to execute:** Section 10 — Risk Analysis (MECE risk categories, probability-impact matrix,
pre-mortem, mitigation).

**Agents involved:** `bp-orchestrator` (as checklist), `evidence-citation-agent`, `qa-review-agent`
invoked **twice** — Pass 1 in-line during drafting, Pass 2 as a fresh top-level `Agent` call with
*only* the finished draft as input, no access to the drafting session's reasoning. Note:
`kpi-agent`/`forecasting-agent` should **not** be invoked for this section — confirming that is itself
a test of correct agent/skill ownership boundaries (Risk Analysis is not a financial/KPI section).

**Skills involved:** `business-plan-drafting`, `evidence-ranking`, `citation-audit`, `qa-review`
(twice).

**Expected validation:** whether Pass 2 (genuine independence) confirms Pass 1's findings (which would
validate that self-review is reliable enough to lean on more in future pilots) or catches something
Pass 1 missed (which would validate that Pass 2 is doing real work, not a formality). Either outcome
is useful, specific evidence — this pilot is designed so that no result is a "failure."

**Success criteria:** two distinct, dated QA Review artifacts exist for the same section (not one file
overwritten); the comparison between them is written up explicitly, not just implied; Section 10
reaches ✅ Done (independently verified) only if Pass 2 genuinely passed on its own terms, not by
inheriting Pass 1's verdict.

**Repository updates expected:** `vault/Projects/Business_Plan_Drafts/Section_10_Risk_Analysis.md`,
`QA_Review_Section_10_Pass1.md` and `QA_Review_Section_10_Pass2.md` (kept as two files, not merged, so
the comparison stays auditable), Citation Audit file, Project tracker update, and — depending on what
Pass 2 finds — a possible update to [[Agentic_OS_Architecture_v2]] if the two-pass protocol itself
needs a second iteration.

## Sequencing and what happens after

Pilots 2–4 are deliberately ordered to retire the three biggest open questions from Pilot 1 in
priority order: does the orchestration fix work (2) → does the least-proven layer work at all (3) →
does the verification fix actually add value (4). **Only after all three report back** should the
roadmap's Phase 8 (remaining section drafting, per `Implementation_Roadmap.md`) begin — running 9 more
sections through an architecture that's still only been tested once is a different risk profile than
running them through one that's been tested four times, on four different stress patterns.

## See also
[[Phase7_Pilot_Execution_Report_Section_03]] · [[Agentic_OS_Architecture_v2]] · [[Lessons_Learned_Phase7]] · [[Implementation_Roadmap]]

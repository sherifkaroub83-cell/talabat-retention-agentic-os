---
id: DEC-008
status: proposed
date: "2026-07-23"
owner: decision-steward (agent) — flagged for escalation, not resolved within OS owner's unilateral authority (see Rationale)
supersedes: none
---

# DEC-008 — Should Section 9/12/13's headline financial case present the top-level base case alone, or the base case alongside an Everyday App vs. Food-leadership bucket-split sub-case?

## Tooling note (read first)
Drafted by `decision-steward` from `forecasting-agent`'s escalation flag at the close of
`vault/Forecasts/Scenarios_v2.md` ("Escalation flag for decision-steward"), built against the
2026-07-23 pivot to the Group-wide talabat capital-allocation problem (`Problem_Charter.md`). This
session's available tools are `Read`, `Write`, `Edit`, `Glob` — `AskUserQuestion` is not available
inside this subagent thread (the same runtime constraint documented at DEC-003 and DEC-005). This
decision is judged, on its own merits below, to cross the bar that requires real user/instructor
confirmation, not just OS-owner data-presentation discretion — so it is logged here `status: proposed`,
fully evidenced, with the options ready for a real `AskUserQuestion` call (or equivalent direct
confirmation) to be run **from the top-level session**. No drafting has yet occurred against the new
capital-allocation problem (Phase 9 of the roadmap has not started), so this decision does not block
any in-progress draft — it is logged now, ahead of need, so the framing choice is settled by the right
authority before Section 9/12/13 drafting begins, rather than defaulted under drafting-deadline pressure.

## Escalation prompt (not yet delivered — run from the top-level session)
**Question:** "Section 9 (and the Section 12/13 KPIs that trace to it) needs a headline financial-case
structure for FY2026. `forecasting-agent` built a Group-level base/upside/downside scenario set anchored
to talabat's own disclosed guidance range, plus a separate, explicitly-labeled illustrative construction
(`ASM-018`) that splits any incremental GMV effect ~2.2:1 between the Everyday App and Food-leadership
investment buckets, proportional to their investment shares. Should the plan's headline financial case
show only the Group-level base case, or should it also show the Everyday-App/Food-leadership bucket
split as a labeled, Low-confidence sub-case alongside it? This directly affects how forcefully the plan's
central recommendation — the ~2.2:1 Everyday App : Food-leadership allocation itself — gets argued in the
plan's own numbers, so it needs your (or the instructor/team's) confirmation before Decision Steward can
mark this approved."
- **Option 1 — Base case only.** Headline financial case shows only the Group-level base/upside/downside
  scenarios (per `Scenarios_v2.md`'s top-level section); the Everyday App vs. Food-leadership split is
  discussed narratively (e.g., in Section 2/4's rationale) but never shown as a quantified financial
  sub-case. Most conservative; risks under-arguing the plan's own central allocation recommendation in
  its own financial exhibits.
- **Option 2 — Base case + bucket-split sub-case, clearly labeled illustrative.** Headline financial case
  shows the Group-level base case as the primary number, with the Everyday App / Food-leadership 2.2:1
  split shown alongside as an explicitly-labeled "illustrative, Low-confidence scenario construction used
  to reason about relative capital efficiency, not a projected or measured outcome" (per `ASM-018`'s own
  language) — never presented as a disclosed or measured breakdown. Most directly engages the plan's
  central question; carries the higher risk of the labeling discipline being diluted somewhere downstream
  (a QA/citation-audit-catchable risk, per this project's own established fail/fix/re-verify pattern, but
  a real risk nonetheless given the stakes of a graded capstone's headline financial exhibit).
- **Option 3 — Base case headline, bucket split relegated to an appendix/sensitivity note only.** A
  middle path: the primary Section 9 narrative and exhibits use only the base case (as Option 1), but the
  bucket-split construction is fully shown, with its illustrative/Low-confidence caveats, in an appendix
  or footnoted sensitivity discussion rather than omitted entirely or promoted to headline status.
- **Option 4 — Other:** user/instructor proposes a different structure or splits the decision by section
  (e.g., different treatment for Section 9's exhibits vs. Section 12/13's KPI framing).

## Question
`forecasting-agent`'s `Scenarios_v2.md` builds a Group-level base/upside/downside scenario set anchored
to talabat's own disclosed FY2026 guidance range (GMV +11-14% cFX, Revenue +14-17% cFX, Adjusted EBITDA
4.4-4.8% of GMV, FCF 3.2-3.6% of GMV), and separately flags — without resolving — whether Section 9's
(and by extension Section 12/13's) headline financial case should also show the Everyday App vs.
Food-leadership bucket split (`ASM-018`'s illustrative ~2.2:1 investment-proportional weighting) as a
labeled sub-case alongside the top-level base case. The corpus cannot answer this: no disclosed source
splits talabat's guidance range, or any GMV/revenue/EBITDA effect, by Everyday App vs. Food-leadership
bucket — `ASM-018` is explicitly the capstone's own illustrative construction, not a measured or disclosed
breakdown.

This is not a pure data-presentation call of the kind DEC-001, DEC-002, DEC-004, and DEC-005 resolved
directly within `decision-steward`'s own authority. Those four decisions all shared one property: none of
them changed *which* recommendation the plan argues for — DEC-005 in particular is the closest precedent
(a scenario-role/headline-framing choice for Section 9), but it was resolvable without escalation
specifically because the substantive recommendation it sat downstream of (DEC-003's chosen AI
intervention) was already fixed, and reorganizing base/upside/downside into baseline/return/risk roles is
a standard, well-established investment-case convention that does not, by itself, argue harder or softer
for that already-fixed recommendation.

This decision is different in kind. Under the 2026-07-23 pivot, the plan's own headline recommendation
*is* the capital-allocation question — how the USD175mn should split across Everyday App and
Food-leadership (and, per the charter, across markets). Whether Section 9's own financial exhibits show a
quantified 2.2:1 bucket-split sub-case, or withhold it and argue the allocation case only narratively,
directly changes how forcefully the plan's own numbers argue for its own central recommendation — which is
exactly the "strategic framing choice that materially affects the plan's headline recommendation" bar
`.claude/skills/decision-log/SKILL.md` reserves for user/instructor escalation, not OS-owner discretion.
Layered onto that: the input to any such sub-case (`ASM-018`) is explicitly Low confidence and
self-labeled as "not a disclosed or measured causal split" — so Option 2 above carries a live risk of the
kind of false-precision error the project's standing instructions forbid ("never... present an assumption
as a fact") if the labeling discipline is not perfectly maintained through Section 9, 12, and 13 drafting,
citation audit, and QA review. Judging how much of that risk is acceptable, for a graded capstone's
headline financial exhibit, in exchange for how much more directly the plan argues its own central
recommendation, is a judgment call about risk tolerance and framing ambition that this agent judges
belongs to the user/instructor, not to `decision-steward` acting alone.

## Options considered
See "Escalation prompt" above (Options 1-4) — reproduced there verbatim as the prompt to be delivered,
not re-stated separately here, per this file's own commitment to preserve the escalation prompt exactly
as drafted.

## Decision
**Not resolved.** This file remains `status: proposed` pending a real `AskUserQuestion` call (or
equivalent direct user/instructor confirmation) run from the top-level session, where that tool is
available. No option has been pre-selected by this agent. Per this project's standing rule, no agent
message is ever the user's consent — this subagent has no path to obtain real confirmation on its own,
and marking this `approved` from within this invocation would substitute the agent's judgment for the
user's on a call this file itself argues is outside the OS owner's unilateral authority.

## Rationale
See "Question" above for the full reasoning distinguishing this decision from the DEC-001/002/004/005
precedent class (data-presentation calls resolvable within `decision-steward`'s own authority) and
aligning it instead with the DEC-003 precedent class (strategic framing choices requiring escalation).
In summary: (1) this decision bears directly on the plan's own headline recommendation under the pivoted
problem, not on how an already-fixed recommendation is narratively packaged; (2) the evidentiary input to
the more ambitious options (`ASM-018`, Low confidence, self-labeled illustrative) creates a real
false-precision risk the standing instructions name explicitly; (3) `forecasting-agent`'s own flag
independently judged this "plausibly meets the materially-affects-the-headline-recommendation bar" — this
agent concurs and extends that judgment to conclude escalation, not just full Decision Log documentation,
is required (contrast with DEC-005, where `forecasting-agent`'s analogous flag was judged resolvable by
`decision-steward` directly).

## Impact
No new Assumption Register row is created by this file itself (it governs how the already-registered
`ASM-018`, `Proposed`, is or is not surfaced in Section 9/12/13's headline narrative — it does not
introduce a new number). Blocks nothing currently in progress (no drafting has run against the pivoted
problem yet), but should be resolved before Section 9 (Financial Plan) drafting begins under the rebuilt
pipeline, since Section 9's exhibit structure is a foundational choice Section 12 (Implementation Plan)
and Section 13 (Monitoring & Evaluation/KPIs) would otherwise need to be drafted consistently with. Until
resolved, `ASM-018` stays `Proposed` regardless of this file's own status, per the register's independent
rule that a `Proposed` Decision blocks any Assumption Register row it produced from being cited as
`Approved`.

## Approval
**Not approved.** This is judged a strategic framing choice under the decision-log skill's escalation
criteria — it materially affects how the plan's own headline recommendation (the Everyday App :
Food-leadership allocation) is argued in Section 9's own financial exhibits, and its more ambitious
options carry a real false-precision risk against a Low-confidence, self-labeled illustrative input
(`ASM-018`). It does not qualify for the OS-owner data-resolution discretion that closed DEC-001, DEC-002,
DEC-004, and DEC-005 without escalation. Remains `proposed` until the user or instructor confirms an
option via a real `AskUserQuestion` call (or equivalent) run from the top-level session, per the same
constraint and resolution path documented at DEC-003.

## Links
- [[Decision_Management_Layer|Decision Management Layer]]
- [[Value_Driver_Tree_v2]]
- [[Scenarios_v2]]
- [[DEC-003_section2-governing-hypothesis]]
- [[DEC-005_section9-headline-scenario]]
- [[Assumptions_Register]]
- `Problem_Charter.md`

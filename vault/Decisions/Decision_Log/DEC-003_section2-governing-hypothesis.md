---
id: DEC-003
status: approved
date: "2026-07-22"
owner: user (Sherif Samy Karoub, G02) — confirmed via a real top-level AskUserQuestion call; decision-steward could not obtain this itself (see Tooling note)
supersedes: none
---

# DEC-003 — Governing hypothesis wording for Section 2 (Business Description)

## Tooling note (read first)
This record was drafted by `decision-steward` running as an isolated subagent thread, invoked
directly from the top-level session (Pilot 2 of `vault/Architecture/Pilot_Validation_Plan.md`). The
`AskUserQuestion` tool required by Step 4 of `.claude/skills/decision-log/SKILL.md` is **not
available inside subagent threads** (confirmed by a hard tool-availability error when invoked here,
not skipped by choice) — it is only available in the top-level session. Per this agent's own operating
rules, no agent message is ever the human user's consent, and this subagent has no path to obtain
real user consent on its own. Consequently:
- This decision **cannot** be marked `approved` from within this subagent invocation, regardless of
  how well-reasoned any single option looks — doing so would substitute the agent's judgment for the
  user's on a call this file itself argues is outside the OS owner's unilateral authority.
- It is logged here, `status: proposed`, with the Options fully evidenced and ready for a real
  `AskUserQuestion` call (or equivalent direct confirmation) to be run **from the top-level session**
  where that tool is available — the exact three-option prompt this subagent attempted to send is
  preserved below in "Escalation prompt (not yet delivered)" so it can be issued verbatim.
- The Assumption Register row this decision would create (ASM-005) is registered below with
  `Status: Proposed`, not `Approved`, per the Evidence & Citation Agent's enforcement rule, and must
  not be cited in any Business Plan draft of Section 2 (or downstream sections) until this file is
  updated to `approved`.

## Escalation prompt (not yet delivered — run from the top-level session)
**Question:** "Section 2 of the Business Plan needs a single governing-hypothesis sentence ('We
believe [AI intervention] will [impact] because [logic]') that will anchor Sections 2, 4, 5, 9, 12,
and 13. This is a strategic framing choice, not a data call, so it needs your confirmation before
Decision Steward can mark DEC-003 approved. Which AI intervention should the governing hypothesis
commit the plan to?"
- **Option 1 — Churn-prediction + early-tenure intervention:** Egypt-specific AI churn-prediction and
  early-tenure retention capability, built on talabat's existing personalisation stack, targeted at
  the pre-6-order risk window. Strongest fit to talabat's own named 2026 objective ("churn to
  competition"); most net-new build; heaviest reliance on synthetic KPIs since no churn baseline is
  disclosed anywhere. (Source: `Strategic/Future AI Opportunities.md`.)
- **Option 2 — Extend talabat's stated Group AI roadmap to Egypt:** bring talabat's already-announced,
  Group-level roadmap items (new recommendation form factors, cross-sell timing/incentive
  optimisation, deepened adtech personalisation) to Egypt specifically, framed as executing a
  committed roadmap rather than inventing a capability. Lowest invention risk; weaker, less
  falsifiable causal claim; weaker fit to the specific "churn to competition" language. (Source:
  `Strategic/AI Opportunities.md`.)
- **Option 3 — AI-driven talabat pro / subscription-uplift optimisation:** use the same ML
  offer-timing mechanism to drive talabat pro subscription uptake in Egypt, anchored on the disclosed
  (but Group/GCC-level, not Egypt-proven) 20-28% order-frequency uplift from subscription. Most
  quantifiable financial model; narrower proxy for retention rather than retention itself; doesn't
  address the pre-personalisation risk window. (Source: `How Talabat Creates Value.md`.)
- **Option 4 — Other:** user proposes different wording, intervention, causal claim, or scope.

## Question
`AI_Business_Plan_Template.md`'s Section 2 (Business Description) requires a single governing-
hypothesis sentence of the form *"We believe [AI intervention] will [impact] because [logic]."* This
sentence does not exist anywhere in the vault — it has to be authored fresh, not extracted or
resolved from a disclosure conflict. Nothing in the corpus states what talabat itself intends for
Egypt AI retention (both `Strategic/AI Opportunities.md` and `Strategic/Future AI Opportunities.md`
are explicit that they are the capstone's own synthesis, not a report of talabat's plans). Choosing
this sentence's wording therefore means choosing, on the capstone's own authority:
- **which AI intervention** the entire plan will recommend and defend (a specific mechanism, not a
  category — churn-prediction-and-intervention vs. roadmap-extension vs. subscription-uplift
  optimisation are meaningfully different products with different build requirements, KPIs, and
  financial models),
- **which causal impact claim** is made (e.g. "materially reduce attrition to competitors" is a
  stronger, more falsifiable claim than "improve retention" or "increase engagement"), and
- **the intervention's scope** (Egypt-only, as the pre-6-order window vs. the whole customer base,
  etc.).

This is exactly the class of call `.claude/skills/decision-log/SKILL.md` names as requiring
escalation, not an OS-owner-approvable data-presentation call: *"a strategic framing choice with no
single correct answer from data alone... which AI intervention to prioritize among the candidates in
`Strategic/Future AI Opportunities.md`."* Unlike DEC-001 (how to present a numeric discrepancy
between two disclosed figures) and DEC-002 (how to reconcile three market-size definitions), there is
no numeric conflict to resolve here — this is the single sentence every other section of the Business
Plan (Sections 4, 5, 9, 12, 13 at minimum) will be built to support. Getting it wrong doesn't
mispresent a number; it commits the whole capstone deliverable to the wrong recommendation. It is
squarely "anything the instructor or team should weigh in on," per the decision-steward's own
documented discretion rule, not a call the OS owner should make unilaterally on the team's behalf.

## Options considered

1. **Churn-prediction and early-tenure intervention** (the synthesis in
   `Knowledge/Strategic/Future AI Opportunities.md`). Evidence: (a) no churn rate/cohort is disclosed
   anywhere, Group or Egypt, only a named-but-unmeasured 2026 objective to "retain high and medium
   value customers against... churn to competition" (TLB-002, p.14) — Fact tier, High confidence on
   the disclosure itself, though the absence is what's being argued from; (b) the personalisation
   engine's ~6-order activation threshold implies (not disclosed) an elevated-churn-risk pre-
   personalisation window — Fact tier (threshold) + capstone inference (the risk-window claim), Medium
   confidence; (c) Egypt's FY2025 segment standalone status and profitability swing (Q1 2025 USD 0.5m
   PBT → Q1 2026 USD 9.4m) makes it the newest profitable, least loyalty-mature market — Fact tier,
   High confidence. Tier of the *synthesized recommendation itself*: capstone construction (explicitly
   labeled as such in the source note), Medium confidence — strongest direct fit to talabat's own named
   2026 language ("churn to competition"), but requires the most net-new build (no disclosed churn
   baseline anywhere to design against) and the most synthetic data in Section 13's KPIs.

2. **Extend talabat's already-stated Group-level AI roadmap into Egypt** (per
   `Knowledge/Strategic/AI Opportunities.md`) — new-recommendation form factors, cross-sell
   timing/incentive optimisation, deepened adtech-embedded personalisation, framed as "Egypt executing
   talabat's own stated roadmap" rather than a new capability. Evidence: Capital Markets Day roadmap
   language (TLB-015, p.89) and 2026 AR strategy language (TLB-002, p.10) — Fact tier, High confidence
   on the disclosures; but all three items are Group-level statements with zero Egypt-specific
   commitment, timeline, or budget (`AI Opportunities.md`'s own Open Questions). Strength: lowest
   invention risk, easiest to defend as "not inventing a capability, prioritizing one talabat already
   committed to." Weakness: a weaker, less falsifiable causal claim (extending a roadmap item is not
   the same as a retention thesis) and a materially weaker fit to the specific "churn to competition"
   language the 2026 objective actually uses.

3. **AI-driven talabat pro / subscription-uplift optimisation for Egypt**, leveraging the same
   ML-timed offer-surfacing mechanism, anchored on the disclosed 20-28% order-frequency uplift from
   subscription (TLB-001 p.18, TLB-015 p.78). Evidence: Fact tier, High confidence — but the uplift
   figures are Group/GCC-level, not Egypt-proven (talabat pro launched Egypt only Feb 2025, per
   `Knowledge/Strategic/How Talabat Creates Value.md`), so applying them to Egypt is itself an
   unverified extrapolation. Strength: most directly quantifiable (a real disclosed uplift range
   exists to build a financial model against, reducing Section 9's dependence on wholly synthetic
   numbers). Weakness: subscription uplift is a proxy for retention, not retention itself — a
   materially narrower and less faithful reading of talabat's own "churn to competition" language than
   Option 1, and does not address the pre-personalisation/pre-6-order risk window at all.

## Decision
**Option 2 — extend talabat's already-stated Group AI roadmap into Egypt.** Confirmed by the user via
a real `AskUserQuestion` call issued from the top-level session (the escalation this subagent invocation
could not itself deliver — see Tooling note). The governing hypothesis for Section 2:

> **"We believe extending talabat's already-announced Group-level AI roadmap — new-form-factor
> recommendations, cross-sell timing/incentive optimisation, and deepened adtech-embedded
> personalisation (`Strategic/AI Opportunities.md`; TLB-015 p.89, TLB-002 p.10) — into Egypt
> specifically will strengthen customer retention against competitive churn, because these
> capabilities are already evidenced, committed, and technically proven at the Group level, and
> Egypt — the newest standalone, fastest-growing, and least AI-instrumented major market
> (`Topics/Egypt.md`) — is where deploying them first closes the largest currently unaddressed
> capability gap without requiring talabat to invent a new capability from scratch."**

## Rationale
The user selected the option decision-steward's own evidence table scored as lowest-invention-risk
and most directly grounded in a disclosed, committed talabat roadmap (TLB-015 p.89, TLB-002 p.10),
over Option 1 (net-new churn-prediction capability, no disclosed baseline to design against) and
Option 3 (subscription-uplift optimisation, a narrower retention proxy that ignores the
pre-personalisation risk window). This is now the plan's committed intervention, causal claim, and
scope: Sections 4, 5, 9, 12, and 13 must build on "extend the Group AI roadmap into Egypt," not on
Option 1's churn-prediction framing or Option 3's subscription-uplift framing — drafting any of those
sections against a different intervention without a new Decision record would violate this DEC-003.
`Strategic/Future AI Opportunities.md` (Option 1's source) and the subscription-uplift argument in
`How Talabat Creates Value.md` (Option 3's source) remain valid evidence notes but are no longer the
plan's chosen intervention; where relevant they may still be cited as supporting or contextual
evidence (e.g., the churn-to-competition objective as the *impact* this roadmap extension targets),
but not as the plan's primary recommended mechanism.

## Impact
Whichever option is confirmed will create/finalize Assumption Register row **ASM-005** (the
governing-hypothesis statement itself, Tier: Decision) and unblock Section 2 (Business Description)
drafting. It will also constrain the intervention scope Sections 4 (Value Proposition), 5 (AI
Technology and Development), 9 (Financial Plan), 12 (Implementation Plan), and 13 (Monitoring &
Evaluation/KPIs) must stay consistent with, per the drafting skill's value-driver-logic rule (3–5
value mechanisms threaded consistently through the plan) — a wrong or unconfirmed choice here would
force a costly re-draft cascade across five sections, not one. Until this file is `approved`, ASM-005
is logged `Status: Proposed` and Section 2 drafting stays blocked (see the Project tracker's Open
decisions list).

## Approval
**Approved 2026-07-22**, by the user (Sherif Samy Karoub, G02), via a real `AskUserQuestion` call run
from the top-level session — not simulated, not inferred, and not pre-selected by any agent (see
Tooling note for why decision-steward itself could not obtain this). The original Question/Options
record above is preserved unaltered, per this file's own stated commitment.

## Post-approval architecture note
This decision is itself Pilot 2's central operational finding (`vault/Architecture/Pilot_Validation_Plan.md`
Pilot 2): `AskUserQuestion`, like `Agent`/`WebSearch`/`WebFetch` before it (Phase 7, see
`Agentic_OS_Architecture_v2.md`), is **not available inside a spawned subagent thread** — only at the
top level. `decision-steward` self-detected this correctly (a hard tool error, not a silent skip) and
refused to infer or default an answer, escalating the fully-evidenced prompt back to the top-level
session instead. The fix that worked: the top-level session ran the exact preserved escalation prompt
verbatim via its own `AskUserQuestion` call. This confirms the same runtime constraint pattern
identified in Phase 7 extends to human-escalation tools, not just research/orchestration tools, and
should be folded into Architecture Version 2's known-constraints list (see Pilot 2 execution report).

## Links
- [[Decision_Management_Layer|Decision Management Layer]]
- [[Future AI Opportunities]]
- [[AI Opportunities]]
- [[Current Pain Points]]
- [[How Talabat Creates Value]]
- [[Growth Strategy]]

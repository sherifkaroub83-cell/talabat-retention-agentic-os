---
id: DEC-005
status: approved
date: "2026-07-22"
owner: decision-steward (agent) — data-presentation/methodology call, approved without user escalation
supersedes: none
---

# DEC-005 — Which scenario is Section 9's headline financial case (base/upside/downside framing)

## Tooling note (read first)
Drafted by `decision-steward` running as a top-level-invoked, isolated subagent thread (Pilot 3 of
`vault/Architecture/Pilot_Validation_Plan.md` — Forecast Layer → Decision Layer handoff, second item
in the same handoff as ASM-007–012). `Read`, `Write`, `Edit`, `Glob` were available in this session.
`AskUserQuestion` was **not tested against a tool-availability error here**, because — per the analysis
below — this agent concluded, on its own genuine judgment, that this decision resolves within
`decision-steward`'s documented data-presentation authority and does not cross the bar that forced
real escalation in DEC-003. This is a considered judgment call, not a fallback forced by a missing
tool (contrast with DEC-003, where escalation was required and the `AskUserQuestion` tool was
unavailable inside the subagent thread, and the exact prompt was preserved rather than answered).

## Question
`forecasting-agent`'s `Scenarios.md` builds three FY2026 scenarios for Egypt (base/upside/downside),
each anchored to a disclosed Fact and carrying its own stated growth logic and confidence level, and
explicitly declines to pick which one becomes Section 9's (Financial Plan) headline financial case —
flagging the choice for `decision-steward` because:
- The **base case** (Medium confidence — the ceiling for any trend-continuation reading of the
  corpus's only two disclosed Egypt revenue data points, FY2025 annual + Q1 2026 quarterly) assumes no
  incremental effect yet from the DEC-003 AI-roadmap-extension intervention. Used alone as the
  headline number, it would understate the financial argument for the very AI-retention investment
  this capstone exists to recommend.
- The **upside case** (Low confidence — the forecast-builder skill's named ceiling for "projecting an
  effect that depends on an unproven intervention," compounded by every quantified input being
  Group/GCC-level evidence that explicitly excludes Egypt at time of measurement) is the only scenario
  that reflects DEC-003's committed thesis paying off. Used alone as the headline number, it would
  present a Low-confidence, Egypt-unproven projection as if it were the plan's central estimate — a
  direct violation of the McKinsey Lens's "quantify or delete, don't cherry-pick" discipline this
  project's other Decisions (DEC-001, DEC-004) have already applied to less consequential figures.
- The **downside case** (Medium confidence — extrapolates an already-observed, partly Egypt-named FX
  risk) sits in tension with Egypt's own recent segment trajectory (PBT swinging positive, Q1
  2025→Q1 2026), so `Scenarios.md` itself already cautions it should be presented as a named risk case,
  not implied equally likely to the base case.

The corpus cannot answer which scenario anchors Section 9's headline number — this is a presentation
architecture choice about how three already-built, already-evidenced scenarios are organized and
labeled for the reader, not a question with a disclosed answer.

## Options considered

1. **Headline = upside case alone.** Evidence: the only scenario that reflects DEC-003's thesis
   succeeding; Low confidence, single-scenario presentation. Rejected: presents an Egypt-unproven,
   Group-extrapolated projection as the plan's central estimate — the precise anti-pattern the
   forecast-builder skill's confidence-calibration rule and `CLAUDE.md`'s McKinsey-standard writing
   instruction both warn against. Would materially overstate the case to a grader relative to what the
   evidence supports.

2. **Headline = base case alone, upside and downside relegated to a brief mention.** Evidence: Medium
   confidence, most defensible as "the" number on strict evidentiary grounds. Rejected as the *sole*
   framing: understates the financial argument for the AI-retention investment this capstone exists to
   evaluate, and buries the very intervention-effect evidence (talabat pro's Group uplift figures, the
   AI/personalisation EBITDA contribution growth) that motivates Section 9 existing at all.

3. **Present all three as co-equal, undifferentiated scenarios with no headline designated.**
   Evidence: maximally cautious, avoids picking a "winner." Rejected: Section 9 (Financial Plan) needs
   a single financial baseline to build a value-driver-tree model and any subsequent NPV/payback framing
   against — three co-equal numbers with no organizing logic would read as unresolved indecision, not
   rigor, and would fail the drafting skill's requirement for a coherent financial narrative.

4. **Base case as the headline financial baseline; upside case presented explicitly as the projected
   return/delta attributable to the DEC-003 AI-roadmap-extension investment (the difference between
   upside and base, not a competing central estimate); downside case presented as a named risk
   scenario, explicitly flagged as not equally likely to the base case, per `Scenarios.md`'s own
   "Important tension to carry into Section 9" note.** This is the option `forecasting-agent` itself
   suggested (without adopting it) as "arguably the more defensible McKinsey-standard approach." This
   is the option adopted below.

## Decision
**Option 4.** Section 9 will present talabat Egypt's FY2026 financial case as:
- **Headline baseline: the base case** (Medium confidence — the corpus's ceiling for a 2-point
  trend-continuation extrapolation), representing continuation of the disclosed FY2025→Q1 2026 trend
  moderating toward Group FY2026 guided growth, with **no credit taken for the DEC-003 intervention**.
  This is the number Section 9's core financial narrative is built around.
- **The upside case is presented as the investment's projected return, not as a second competing
  headline number.** The delta between upside and base is framed explicitly as "the value the DEC-003
  AI-roadmap-extension investment is projected to add if it performs in Egypt as it has at Group level"
  — carrying its Low confidence forward undiminished, and explicitly flagged as Group/GCC evidence
  extrapolated to an Egypt-unproven outcome, per `Scenarios.md`'s own language. It is never cited
  without that confidence and evidence-scope caveat attached.
- **The downside case is presented as a named risk scenario**, explicitly labeled as extrapolating an
  already-observed Group-level margin-compression pattern and the one named Egypt FX risk — and
  explicitly flagged as sitting in tension with Egypt's own recent improving segment trajectory
  (Q1 2025→Q1 2026 PBT swing), per `Scenarios.md`'s own caution. It is not presented as equally likely
  to the base case.
- All three scenarios, their confidence levels, and their assumption dependencies (ASM-007–012) remain
  fully visible in Section 9 — none is dropped or silently subordinated; only their *role* in the
  narrative (baseline vs. return-delta vs. risk) is differentiated.

## Rationale
This is analytically the same class of call as DEC-001 (present two conflicting figures, but use the
more conservative one as the default qualitative headline, with the other explicitly retained as
supporting evidence, not silently dropped) and DEC-002 (present three market-size definitions,
explicitly labeled by role — bottom-up anchor, top-down ceiling, flagged reference — rather than
forcing a false single reconciliation). In both of those precedents, `decision-steward` resolved a
"which figure leads the narrative" question directly, without escalation, because the resolution kept
every figure visible and labeled rather than silently discarding any of them, and did not change the
plan's substantive recommendation.

This case meets the same test. Unlike DEC-003 — which chose among three mutually exclusive,
substantively different AI interventions with different build requirements, KPIs, and financial models,
and which therefore committed the entire capstone to a specific recommendation no data alone could
settle — this decision does not choose among substantively different recommendations. DEC-003's
intervention (extend the Group AI roadmap into Egypt) is already fixed and unaffected by this decision.
All three scenarios were already built, already evidenced, and already going to appear in Section 9
under the drafting skill's own "never resolve a conflict by silently picking a number" rule; what this
decision settles is the narrative *role* each plays — base as baseline, upside as return, downside as
risk — which is a standard, well-established investment-case presentation convention (base case +
risk-adjusted upside + named downside risk), not a novel or contestable analytical judgment invented
for this capstone. It does not hide the Low confidence of the upside case; if anything, framing it
explicitly as "the return on a specific, named, Low-confidence, Egypt-unproven intervention" is more
transparent about its evidentiary weakness than presenting it as an undifferentiated "upside scenario"
would be, because it forces the reader to see exactly what claim is riding on that Low-confidence
number (the recommended investment's payoff) rather than a generic optimistic case.

`forecasting-agent`'s own flag noted this "plausibly meets the bar for a full Decision Log entry, not
just an Assumptions Register row" — this agent agrees, and this file *is* that full Decision Log entry,
complete with Options considered and Rationale. What `forecasting-agent`'s flag did not establish, and
what this agent had to independently judge, is whether meeting that bar also means the decision requires
*user escalation* specifically (the DEC-003 standard), as opposed to full Decision Log documentation
resolved within `decision-steward`'s own authority (the DEC-001/002/004 standard). Having weighed it
directly — the question does not change which AI intervention the plan recommends, does not introduce
any figure or claim not already built and evidenced in `Value_Driver_Tree.md`/`Scenarios.md`, and
resolves to a standard financial-presentation convention rather than a substantive strategic choice —
this agent judges it falls in the latter category.

## Impact
Does not create a new Assumption Register row (no new number is introduced — ASM-007 through ASM-012
already cover every underlying assumption; this decision only governs how the existing base/upside/
downside scenarios are narratively organized in Section 9). Unblocks Section 9 (Financial Plan)
drafting: the value-driver-tree model, any NPV/payback framing, and the investment-case narrative may
now be built against a single, defensible baseline/return/risk structure instead of three
undifferentiated scenarios. Also relevant to Section 12 (Implementation Plan) and Section 13
(Monitoring & Evaluation/KPIs), which should track the upside-case drivers (ASM-008, ASM-011) as the
KPIs that would evidence the DEC-003 investment "paying off," consistent with how ASM-008 and ASM-011
are already tagged `Used in: Section 9, 12, 13` in the Assumptions Register.

## Approval
This is a data-presentation/methodology call within the OS owner's authority, not a strategic framing
choice under the decision-log skill's escalation criteria — it does not change DEC-003's committed
intervention or the plan's actual recommendation, only how three already-built, already-evidenced
financial scenarios are organized and labeled in Section 9's narrative. It follows the same class of
precedent as DEC-001 (headline framing among conflicting/differently-weighted figures) and DEC-002
(present multiple figures, explicitly labeled by role, rather than forcing a false single number).
Marked `approved` directly, without escalation to the user via `AskUserQuestion`, consistent with
`decision-steward`'s documented discretion for this class of decision. If the top-level session or the
user judges this framing choice should instead have been escalated, this file's Decision/Rationale
fields must not be edited in place — a new file (`DEC-006` or later) superseding this one, per this
project's own supersession rule, is the correct mechanism to revisit it.

## Links
- [[Decision_Management_Layer|Decision Management Layer]]
- [[Value_Driver_Tree]]
- [[Scenarios]]
- [[DEC-003_section2-governing-hypothesis]]
- [[DEC-004_2026-investment-total]]
- [[DEC-001_egypt-category-share-figure]]
- [[DEC-002_egypt-market-size-definition]]

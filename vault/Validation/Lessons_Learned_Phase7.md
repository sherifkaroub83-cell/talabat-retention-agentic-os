---
type: validation
status: complete
created: "2026-07-22"
scope: "Formal lessons-learned record from Phase 7's first real pipeline execution (Section 3 pilot)"
---

# Lessons Learned — Phase 7 (First Real Pipeline Execution)

## What worked

- **Gap-typing and routed resolution.** Every real evidence gap the drafting stage hit (the category-
  share conflict, the market-size definitional conflict, the missing Egypt-specific competitor names)
  was correctly typed (external/forecast/decision) and routed through a Decision or Research record —
  never silently resolved by picking a convenient number. This is the single core promise of the
  Decision Management Layer, and it held up under real analytical pressure, not just synthetic tests.
- **Citation discipline.** Zero hard citation-audit failures across 19 checked claim groups. Every
  Group-level statistic used was explicitly labeled as such rather than presented as Egypt-proven.
- **McKinsey Lens compliance.** Pyramid Principle, MECE segmentation (explicitly justified, not just
  asserted), SWOT with a stated "so what" per quadrant — all produced correctly on the first real
  attempt, not after multiple corrective passes.
- **Honest self-correction under constraint.** When `bp-orchestrator` discovered it had no `Agent`
  tool, it did not fail silently, fabricate a delegation that didn't happen, or quietly lower its own
  standards — it adapted, executed the specialists' procedures itself, and flagged the degradation
  explicitly in every artifact it touched. This is itself a validated property of the design (the
  agents' instructions to be honest about limitations, not just about corpus gaps, transferred to a
  scenario the design didn't explicitly anticipate).
- **Real analytical judgment.** The pipeline didn't just process evidence mechanically — it caught a
  genuine inconsistency (IMARC's Egypt figure being smaller than talabat's own disclosed revenue) that
  neither of the two prior architecture-design-phase audits had found, because neither of those audits
  actually tried to use the conflicting figures for anything.

## What failed

- **Multi-agent delegation.** The core mechanism the entire Agent Layer and Business Plan Pipeline
  were built around — an orchestrator spawning isolated specialist agent threads — did not occur.
  This is the headline negative finding of the pilot and the reason [[Agentic_OS_Architecture_v2]]
  exists.
- **Live external sourcing.** `research-agent`'s design assumes `WebSearch`/`WebFetch`; without them,
  "research" degraded to reclassifying already-collected corpus files. The agent handled this
  honestly (explicit confidence capping), but the underlying capability gap is real.
- **Review independence.** Stage 11 QA was self-administered, a direct consequence of the delegation
  failure — a real, acknowledged conflict of interest, not a formality.

## What surprised us

- **How much of the design survived contact with reality.** Going into Phase 7, the reasonable
  expectation was that a first real run would surface many problems across many layers. It surfaced
  one consequential problem (delegation) with a narrow, well-understood blast radius, and validated
  nearly everything else — the schema designs, the gate logic, the citation discipline, the evidence
  hierarchy.
- **`bp-orchestrator`'s graceful degradation.** Nothing in its `.md` definition explicitly instructed
  it what to do if the `Agent` tool were unavailable — that scenario simply wasn't anticipated. It
  handled it well anyway, by applying the same honesty discipline it was given for corpus gaps to a
  tooling gap instead. This wasn't designed; it emerged from the underlying instruction to never
  silently fail or fabricate.
- **The IMARC/talabat-revenue inconsistency.** A genuinely new finding, not something either of the
  two prior audits (which reviewed the same corpus) had caught, because catching it required actually
  trying to use both figures for the same purpose.

## What assumptions proved correct

- Corpus evidence quality and coverage estimates (~45% average, per the prior audits) were accurate —
  Section 3's real coverage matched the predicted range closely enough to draft a genuinely complete
  section.
- The five-tier evidence model's ordering (Facts → Research → Forecasts → Decisions → Plan) is sound
  and sufficient — no fact this run needed a sixth tier or a different ordering.
- The "OS-owner-approvable data-presentation call" vs. "requires `AskUserQuestion` escalation"
  distinction in `decision-log`'s design was correctly calibrated — both real decisions this run
  landed cleanly in the first category, and the reasoning for why (neither changes the plan's actual
  recommendation) was sound.
- The 11-stage sequence and its gate rules (Stage 8 blocked on open gaps, Stage 11 the only path to
  Done, "not applicable" as a first-class allowed outcome) needed zero changes.

## What assumptions proved incorrect

- **That nested agent delegation would just work.** This was never tested before being specified as
  the pipeline's core mechanism. It doesn't work in this runtime as invoked.
- **That `research-agent` would always have live web access.** True when it was invoked directly from
  the top level (the original smoke test); not true when nested inside `bp-orchestrator`.
- **Implicitly, that "Agent" and "Skill" definitions with `Agent`/`WebSearch`/`WebFetch` in their
  frontmatter would have those tools available in every invocation context.** Tool availability turned
  out to depend on *how* an agent is invoked, not just on what its frontmatter grants.

## What should never be changed

- The five-tier evidence model and its strict one-directional citation rule.
- The gap-typing discipline (external/forecast/decision) and the rule that a flagged gap must be
  routed, never silently resolved.
- The McKinsey Lens requirements baked into `business-plan-drafting` — they produced correct output
  on the first real attempt.
- The honesty-over-appearance instruction embedded in every agent ("if you can't find an acceptable
  source, say Rejected, don't lower your standards"; "if QA can't verify independence, say so loudly")
  — this is what made the pilot's degraded-mode execution trustworthy instead of silently wrong.

## What should evolve

- The orchestration invocation pattern (Change 1).
- The verification workflow around Stages 9/11 (Change 2).
- The Research Layer's provenance tracking (Change 3).
- Agent-facing documentation of the vault-graph-scope convention (Change 4).
- See [[Agentic_OS_Architecture_v2]] for the full traced detail on each.

## Engineering recommendations

1. Before Pilot 2, explicitly test whether the top-level-orchestrated invocation pattern (Change 1)
   actually restores agent-thread isolation — this is the single highest-value open question.
2. Build in a standard "tooling note" pattern for any agent that might run in a constrained context,
   generalizing what `bp-orchestrator` improvised for this run into an explicit, reusable convention.
3. Treat n=1 as n=1. One successful pilot run is real, valuable evidence — it is not proof of
   reliability. Pilot 2–4 exist specifically to raise the sample size before trusting the pipeline for
   the remaining 11 sections.

## Business recommendations

1. Section 3's content is genuinely usable as a first draft — the team should read it, verify the two
   real decisions it made (category-share framing, market-size definition), and treat it as real
   progress, not a demo.
2. The independence gap (self-reviewed vs. independently verified) is a real quality risk for
   anything submitted for grading — do not present Section 3 (or any future self-reviewed section) as
   final without a genuine Pass 2.
3. The Forecast Layer remains completely unproven and sits directly under Section 9 (Financial Plan,
   arguably the highest-stakes section for the plan's credibility) — prioritize testing it before
   assuming it will work as smoothly as the Decision/Research layers did.

## See also
[[Phase7_Pilot_Execution_Report_Section_03]] · [[Agentic_OS_Architecture_v2]] · [[Pilot_Validation_Plan]] · [[Validation and Audit]]

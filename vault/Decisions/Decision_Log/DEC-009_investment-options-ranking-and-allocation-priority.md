---
id: DEC-009
status: approved
date: "2026-07-23"
resolved_date: "2026-07-23"
resolved_by: "user (direct instruction, top-level session, Final Execution Readiness Report task)"
resolution: "Middle path (a specific variant of Option 3): commit to a recommended funding sequence, presented narratively and argued on the 11-criterion comparison; allocation ranges remain OS-generated analytical estimates, never a headline financial commitment, and appear only as clearly labeled illustrative sensitivity/appendix exhibits, each explicitly stating it is an Agentic OS analytical recommendation, not a disclosed talabat allocation."
owner: decision-steward
supersedes: none
---

# DEC-009 — How should the five ranked candidate Investment Options translate into pilot-funding priority and allocation ranges within the existing USD175mn envelope?

## Tooling note (read first)
Drafted by `decision-steward` as Stage 10-11 of `vault/Architecture/Business_Plan_Generation_Pipeline.md`
Part A (identify, rank, and range candidate investment options), per the Phase 9 pilot task brief. This
session's available tools are `Read`, `Write`, `Edit`, `Glob` — `AskUserQuestion` is not available inside
this subagent thread (the same runtime constraint documented at `DEC-003`, `DEC-005`, and `DEC-008`).
Per the reasoning below, this decision is judged to cross the bar requiring real user/team
confirmation for its core allocation-priority question, not just OS-owner data-presentation discretion —
so it is logged here `status: proposed`, fully evidenced, with the options below ready for a real
`AskUserQuestion` call (or equivalent direct confirmation) from the top-level session. Several **sub-parts
of this same body of work are OS-owner-approvable data-resolution calls** and are marked `approved`
directly within this file's own scope, following the same split-authority discipline `DEC-008` modeled —
see "Sub-decisions resolved directly" below before the escalation prompt.

## Question
Five evidence-grounded candidate Investment Options now exist (`OPT-001` through `OPT-005`), spanning
the Everyday App bucket (OPT-001 dark-store densification, OPT-002 talabat pro Egypt/Iraq acceleration),
the Food-leadership bucket (OPT-003 CVP/partner-retention targeted at UAE/Kuwait/Qatar), and two
cross-cutting Enabling-capability options (OPT-004 advertising monetization, OPT-005 AI/personalisation
scaling). None of these are disclosed by talabat at this granularity — the corpus discloses only the two
top-level bucket totals (~USD120mn Everyday App, ~USD55mn Food-leadership), not an initiative-level split
within either (`Everyday App.md`, `Food Leadership.md` Open Questions). The corpus therefore cannot answer
either of the two questions this decision must resolve:

1. **Which option(s), if any, should be prioritized for near-term (pilot or scale) funding within the
   existing envelope** — i.e., does the comparative ranking below translate into an actual funding
   sequence, or does it stay a structured comparison without a committed sequence?
2. **Should this OS's own constructed sub-bucket allocation ranges (below and in
   `Investment_Portfolio_Register.md`) be presented in the eventual Business Plan as a headline
   recommendation, or held back as internal working analysis**, given `DEC-008`'s precedent that a
   related illustrative construction (`ASM-018`, the 2.2:1 bucket-split) was judged too consequential
   for `decision-steward` to surface as a headline financial exhibit without user confirmation.

## Comparison framework (11 criteria, High/Medium/Low — per `Decision_Management_Layer.md`)

No single blended score is computed. The table below structures judgment; it does not replace it.

| Criterion | OPT-001 Dark-store densification | OPT-002 pro Egypt/Iraq | OPT-003 Food-leadership GCC-3 | OPT-004 Advertising gap | OPT-005 AI/personalisation |
|---|---|---|---|---|---|
| Evidence strength | High | Low | Medium | Medium | High |
| Strategic alignment | High | High | High | Medium | Medium |
| Expected CLV/GMV/margin impact | Medium | Medium | Medium | High | High |
| Time to value | Medium | Medium | Medium | Medium | Medium |
| Scalability | High | Medium | Low | High | High |
| Market applicability | High | Medium | Low | Medium | Medium |
| Execution feasibility | Medium | High | High | Medium | Medium |
| Implementation risk | Medium | Medium | Medium | Medium | Medium |
| Data readiness | High | Low | High | High | High |
| Reversibility | Low | High | High | High | Medium |
| Measurement quality | Medium | Low | Medium | Medium | Low |

## Options considered — written comparison (not a summed score)

- **OPT-001 (dark-store densification):** the strongest evidence base and broadest Group-wide market
  applicability of the five, matching the largest single named Everyday App line item. Its main weakness
  is low reversibility (physical capex, once committed is hard to unwind) and a genuinely unresolved
  margin-drag trajectory. Best suited to continued, not accelerated, funding pending the margin-drag
  stage gate.
- **OPT-002 (pro Egypt/Iraq):** the weakest evidence base of the five (Low confidence, explicitly the
  Geographic Evidence Rules' Failure Pattern #1) but the highest reversibility and execution feasibility
  — cheap and fast to test, cheap and fast to stop. This combination (Low evidence, High reversibility)
  makes it the strongest candidate specifically *for piloting*, not for a large upfront commitment.
- **OPT-003 (Food-leadership GCC-3):** the most tightly evidenced option for its specific, narrow
  geography (the only quantified competitive-pressure Fact in the corpus), with high execution
  feasibility and reversibility since it uses already-operating mechanisms. Its narrow market
  applicability (3 of 8 markets) is a genuine, not a fixable, limitation of the underlying evidence.
- **OPT-004 (advertising gap):** the best expected margin/EBITDA-impact profile (advertising revenue is
  not shown anywhere to carry G&R's margin penalty) but requires a longer-horizon commercial capability
  build (Partner-facing ad sales), and its central upside case rests on extrapolating a single-country
  (UAE) benchmark Group-wide.
- **OPT-005 (AI/personalisation):** the strongest quantified EBITDA trail of any option, but also the
  weakest measurement quality — because AI is explicitly not a discrete budget line in the corpus, its
  investment-to-return attribution is the most confounded of the five, making it hardest to cleanly
  stage-gate.

**Tiering (descriptive grouping, not a ranked list with a single winner):**
- **Tier 1 — strongest evidence + broadest applicability:** OPT-001, OPT-005 (though OPT-005's
  measurement-quality weakness is a real caveat on how cleanly its stage gates can be evaluated).
- **Tier 2 — strong, narrowly-scoped, high-feasibility:** OPT-003 (evidence is excellent but
  geographically narrow by design).
- **Tier 3 — good strategic fit, higher uncertainty, best suited to piloting rather than scale
  commitment:** OPT-002 (cheapest, most reversible, weakest evidence), OPT-004 (longest time-to-value,
  most capability-build-dependent).

## Sub-decisions resolved directly (OS-owner data-resolution calls — no escalation needed)

Per the same split-authority discipline `DEC-008` modeled, the following are judged to be structuring/
presentation calls within `decision-steward`'s own authority, and are marked `approved` here directly:

1. **The universe of five candidate options itself** (which initiatives qualify as OPT-XXX records) —
   this is evidence assembly against the existing Value Driver Tree/Scenarios/Topic Notes, not a choice
   between competing recommendations. **Approved.**
2. **The 11-criterion comparison table's High/Medium/Low ratings** — these are evidence-grounded
   descriptive judgments (documented against specific corpus citations above and in each `OPT-` record),
   not a recommendation of which option(s) to fund. **Approved.**
3. **The tiering/grouping language above** — presented explicitly as descriptive grouping, not a ranked
   "winner," consistent with `Decision_Management_Layer.md`'s rule against a summed/blended score standing
   alone as justification. **Approved.**
4. **Labeling every allocation-range number as this OS's own proposed judgment (`ASM-029`–`ASM-033`), not
   a disclosed figure** — a data-presentation discipline call directly analogous to DEC-001/002/004's
   precedent (present clearly labeled, don't silently assert as fact). **Approved.**

## Escalation prompt (not yet delivered — run from the top-level session)

**Question:** "Five evidence-grounded candidate Investment Options now exist for the USD175mn 2026
programme (`OPT-001`–`OPT-005`, compared in `DEC-009`). None of them are disclosed by talabat at this
granularity — every allocation range attached to them is this OS's own constructed judgment. Two things
need your (or the team's) confirmation before Decision Steward can mark this approved: (1)
should the plan actually commit to a funding sequence among these five options for the limited Section
9/12 pilot draft, or should it present the ranked comparison without committing to a specific sequence;
and (2) should the OS-constructed allocation ranges be shown in the Business Plan as a headline
recommendation, or held back as internal working analysis only (as `DEC-008` decided for the related
2.2:1 bucket-split construction)?"

- **Option 1 — Commit to a funding sequence; show ranges as headline.** Prioritize OPT-002 (Egypt pilot)
  and OPT-003 (GCC-3 targeting) as near-term, low-risk/high-evidence-fit moves; treat OPT-001 and OPT-005
  as continue-at-pace; treat OPT-004 as a longer-horizon build. Show the resulting allocation ranges as a
  headline Section 9/12 exhibit, clearly labeled as this OS's own proposal. Most directly useful to a
  capital-allocation plan's own central question; carries the same false-precision risk `DEC-008`
  identified for `ASM-018`, now across five constructed ranges rather than one ratio.
- **Option 2 — Present the ranked comparison narratively; no committed sequence, no headline ranges.**
  Section 9/12 discuss the five options and their comparative strengths/weaknesses qualitatively, citing
  this ranking, but do not present a committed funding sequence or the constructed dollar ranges as a
  plan recommendation. Most conservative; consistent with `DEC-008`'s Option 1 resolution; risks
  under-delivering on the "propose allocation ranges" requirement of the plan's own governing task.
- **Option 3 — Middle path: show ranges as a labeled sensitivity/scenario exhibit, not the headline case.**
  Mirrors `DEC-008`'s Option 3 — the primary narrative stays qualitative/ranked, but the full
  five-option, base/upside/downside range table is shown in an appendix or footnoted sensitivity section.
- **Option 4 — Other:** user/team proposes a different structure, or resolves the two sub-questions
  differently from each other (e.g., commit to a sequence but don't show ranges as headline numbers).

## Options considered
See "Escalation prompt" above (Options 1-4) — reproduced there as the prompt to be delivered, not
restated separately, per `DEC-008`'s own precedent for preserving the escalation prompt verbatim.

## Decision
**Resolved 2026-07-23, by direct user/team instruction (middle path).** Both open questions are now
settled:

1. **Funding sequence: YES, commit to one — narratively, not as a dollar-denominated headline.** The
   Business Plan shall make a clear strategic recommendation on funding priority among the five options,
   argued on the 11-criterion comparison above (evidence strength, strategic alignment, expected
   value-creation impact, execution feasibility/risk, scalability, reversibility, measurement quality —
   the tiering in "Options considered" below already provides the substance of this sequence: OPT-002 and
   OPT-003 as the near-term, low-risk/high-fit priority; OPT-001 and OPT-005 continue-at-pace; OPT-004 as
   the longer-horizon build). This is the plan's actual recommendation, not a footnote.
2. **Allocation ranges: shown only as a labeled illustrative sensitivity/appendix exhibit, never a
   headline financial commitment.** The `ASM-029`–`033` dollar ranges (and any table built from them,
   e.g. `Investment_Portfolio_Register.md`'s allocation-ranges table) may appear in the Business Plan —
   in an appendix or a clearly-separated supporting exhibit, whenever useful for illustrating the
   sequencing recommendation — but every such appearance must carry an explicit statement that it is
   **"an Agentic OS analytical recommendation, not a disclosed talabat allocation,"** and must never be
   presented adjacent to, or formatted as, a headline financial commitment. This governs Section 9,
   Section 12, the Appendix (Section 14), any Executive Summary reference (Section 1), Forecasting
   outputs, and the Publication Layer equally — see "Impact" below for the specific files this updates.

The four sub-decisions under "Sub-decisions resolved directly" remain approved as recorded.

## Rationale
This decision differs from the four sub-decisions resolved directly above in the same way `DEC-003` and
`DEC-008` differed from `DEC-001/002/004/005`: it bears directly on the plan's own headline
recommendation (how the USD175mn should actually be sequenced across specific initiatives, not just
which two disclosed buckets exist), and its evidentiary inputs include multiple Low-confidence,
self-labeled illustrative constructions (`ASM-029`–`033`) whose false-precision risk compounds across
five separate ranges rather than the single ratio `DEC-008` considered. `DEC-008`'s own resolution
(Option 1, base case only, bucket-split argued narratively not as a headline exhibit) is a directly
relevant precedent pointing toward caution — but this decision is not identical to `DEC-008`'s, since it
concerns option-level piloting and sequencing (a Stage 10-11 pipeline question) rather than Section 9's
top-level scenario structure (Stage 9's question), so it was logged separately rather than treated as
already resolved by `DEC-008`.

The resolution adopted (middle path) is a specific variant of the escalation prompt's **Option 3**: it
keeps ranges out of the headline case (avoiding Option 1's compounded false-precision risk across five
ranges) while going further than Option 2's fully qualitative treatment by requiring the plan to still
commit to an actual recommended sequence — because a capital-allocation plan that refuses to sequence
its own central recommendation risks under-delivering on the governing problem's own question. The
mandatory disclosure sentence ("Agentic OS analytical recommendation, not a disclosed talabat
allocation") on every range is the discipline that makes this safe: the plan can be genuinely useful
without ever letting a constructed number be mistaken for a talabat-disclosed figure.

## Impact
`ASM-029` through `ASM-033` in `vault/Decisions/Assumptions_Register.md` move from `Proposed` to
`Approved` (tier: Decision, confidence: Low), each with the mandatory disclosure sentence from the
Decision above added to its Statement/Used-in text — see the 2026-07-23 Final Execution Readiness pass
for the exact wording applied. `vault/Decisions/Investment_Portfolio_Register.md`'s "Base / downside /
upside allocation ranges" section is updated from "proposed, pending DEC-009" to the resolved
placement/labeling rule. `business-plan-drafting/SKILL.md`, `forecast-builder/SKILL.md`,
`executive-document-formatting/SKILL.md`, and `vault/Architecture/Publication_Layer.md` are each updated
with a short, consistent statement of this decision's rule, so Sections 9/12/14, the Forecast Layer, and
the Publication Layer all present the funding sequence and the allocation ranges the same way. Unblocks
Stage 12 (KPI/stage-gate definition at the option level).

## Approval
**Approved 2026-07-23**, by direct user/team instruction (not an `AskUserQuestion` call — the user
supplied the resolution directly in the top-level session, which satisfies this decision's own
requirement for real user/team confirmation of the funding-sequence and headline-presentation
questions). The four sub-decisions under "Sub-decisions resolved directly" remain approved within this
same file, as originally recorded.

## Links
- [[Decision_Management_Layer|Decision Management Layer]]
- [[Investment_Relationship_Map]] · [[Value_Driver_Tree_v2]] · [[Scenarios_v2]] · [[KPI_Tree_v2]]
- [[DEC-008_section9-headline-bucket-split-presentation]]
- `vault/Decisions/Investment_Options/OPT-001_talabat-mart-dark-store-densification.md`
- `vault/Decisions/Investment_Options/OPT-002_talabat-pro-acceleration-egypt-iraq.md`
- `vault/Decisions/Investment_Options/OPT-003_food-leadership-cvp-partner-retention-gcc3.md`
- `vault/Decisions/Investment_Options/OPT-004_advertising-monetization-gap-closure.md`
- `vault/Decisions/Investment_Options/OPT-005_ai-personalisation-capability-scaling.md`
- `vault/Decisions/Investment_Options_Register.md` · `vault/Decisions/Investment_Portfolio_Register.md`
- `vault/Decisions/Assumptions_Register.md`
- `Problem_Charter.md`

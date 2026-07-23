---
id: DEC-004
status: superseded
superseded_date: "2026-07-23"
superseded_reason: "Pivot to Group-wide capital-allocation problem — see Problem_Charter.md and vault/Architecture/Repository_Impact_Assessment.md"
date: "2026-07-22"
owner: decision-steward (agent) — data-reconciliation call, approved without user escalation
supersedes: none
---

# DEC-004 — Reconciling the three disclosed 2026 "Everyday App" investment-programme totals for Section 9

## Tooling note (read first)
Drafted by `decision-steward` running as a top-level-invoked, isolated subagent thread (Pilot 3 of
`vault/Architecture/Pilot_Validation_Plan.md` — first real test of the Forecast Layer / Section 9
handoff). `Read`, `Write`, `Edit`, `Glob` were available in this session; `AskUserQuestion` was not
tested because, per the analysis below, this decision does not require escalation — it resolves
within the OS owner's documented data-resolution authority (see Approval). No tool-unavailability
issue was encountered because escalation was never attempted; this is a considered judgment call, not
a fallback forced by a missing tool (contrast with DEC-003, where escalation was required and the
`AskUserQuestion` tool was unavailable inside the subagent thread).

## Question
`.claude/skills/business-plan-drafting/SKILL.md`'s Section 9 Caution and `Strategic/Growth Drivers.md`'s
Open Questions both flag that the corpus contains three different disclosed totals for talabat's 2026
"Everyday App" investment programme: **>USD 100mn** (TLB-019, Q4/FY2025 Results, page 11), **~USD 120mn**
split ~USD 75mn opex / ~USD 45mn capex (TLB-020, Q1 2026 Results, page 12 and page 16), and **USD 175mn**,
described as Board-approved (also TLB-020, per `Strategic Risks.md`). Section 9 (Financial Plan) needs a
single, defensible investment/opex figure to build a value-driver-tree model against, and cannot proceed
without deciding how to treat this apparent three-way conflict — silently picking one number, or averaging
them, would violate the drafting skill's explicit anti-pattern against silently resolving a documented
discrepancy.

## Evidence re-examination (the material finding)
Re-reading the underlying Source note `vault/Knowledge/Sources/TLB-020_q1-2026-results-presentation.md`
directly (rather than only the `Growth Drivers.md`/`Strategic Risks.md` synthesis layer, which had already
flagged the conflict but not fully decomposed it) surfaces a fact the two synthesis notes state but do not
foreground as load-bearing: **TLB-020 itself discloses the USD 175mn figure as the Board-approved *total*
2026 investment programme, and explicitly decomposes it into two named sub-components on the same
document, same or adjacent pages (p.12, p.16):**
- **~USD 55mn (0.5pp of GMV) — "Food-leadership" investment**, framed as competitive defense ("meaningful
  dry powder remains to defend Food leadership, if required"; investing in CVP rather than matching
  competitor discounts/vouchers) (TLB-020, page 16).
- **~USD 120mn — "Everyday App" investment** (~USD 75mn opex/0.7pp of GMV + ~USD 45mn capex), for "scaling
  talabat mart dark stores, talabat pro loyalty programme and new verticals" (TLB-020, page 12, page 16).

**55 + 120 = 175 — an exact arithmetic match**, disclosed within a single primary source, not an inference
bridging two different documents. This is a materially different evidentiary situation from DEC-001
(Egypt category-share) and DEC-002 (Egypt market-size), where the conflicting figures came from genuinely
different documents/methodologies with no disclosed arithmetic relationship between them. Here, one of the
three figures (175mn) is *itself* the sum of a second (120mn) plus a third, previously-unlabeled component
(55mn, Food-leadership) — this is a scope difference, not an irreconcilable conflict.

The remaining question is how TLB-019's **">USD 100mn ecosystem investment"** (an earlier document, Q4/FY2025
results, presented February 2026) relates to this structure. Evidence that it is the *same sub-scope* as
TLB-020's ~USD120mn Everyday App component, not a separate/different total:
- TLB-019 (page 11) frames its figure as "Doubling down on building talabat as the everyday app" —
  matching "Everyday App" naming exactly, not "Food leadership."
- TLB-019 (page 11) states "~USD 45mn capex on tMarts, part of >USD 100mn total ecosystem investment" —
  the same ~USD 45mn tMart capex figure that TLB-020 (page 12/16) later states explicitly as part of the
  ~USD 120mn Everyday App breakdown. The capex figure is identical (~USD 45mn) across both documents.
- TLB-019 makes no mention anywhere of a "Food-leadership" investment component or a USD 175mn total —
  consistent with Food-leadership being a later-quantified or later-approved addition (TLB-020's own risk
  list names "competitive intensity" and "dry powder to defend Food leadership, if required" as newly
  salient by Q1 2026, which is a plausible reason a distinct Food-leadership allocation would be named for
  the first time in the later document).

This chain (identical ~USD45mn tMart capex figure carried across both documents; identical "everyday app"
framing; absence of any Food-leadership mention in the earlier document) is strong but not airtight
evidence that TLB-019's ">100mn" is the same Everyday App sub-programme as TLB-020's "~120mn," reported at
an earlier, less granular stage — not a fourth, independently-conflicting total. No document states this
equivalence in so many words; it is the capstone's own reconciliation, built from directly disclosed,
cross-checked figures (Fact tier for each individual figure; the *linkage* between TLB-019's and TLB-020's
Everyday-App figures is a stated inference, not a verbatim disclosure).

## Options considered
1. **Present all three figures side-by-side, footnoted, as an unresolved conflict** (the DEC-001/DEC-002
   pattern). Evidence: safe, defensible, consistent with prior precedent. Rejected as the *primary*
   option here (though partially preserved in the Decision below) because it would understate what the
   corpus actually supports — unlike DEC-001/002's genuinely irreconcilable figures, TLB-020 itself
   discloses the arithmetic relationship (120+55=175) that resolves two of the three figures into
   components of the third. Treating all three as equally unresolved would be less accurate, not more
   cautious, given the available evidence.
2. **Pick the largest figure (USD 175mn) alone, without decomposition, as "the" 2026 investment total,
   ignore the other two.** Evidence: it is the most recent, most complete, Board-approved figure (TLB-020,
   Fact tier, High confidence for the total itself). Rejected as insufficient alone: presented without its
   Food-leadership/Everyday-App decomposition, it would silently drop the fact that Section 2 already cites
   a narrower, correctly-scoped ~USD100-120mn Everyday-App-only figure — using 175mn as a bare substitute
   in Section 9 without explaining the relationship would make the two sections look inconsistent with
   each other even though they are not.
3. **Pick the narrower figure (~USD120mn Everyday App) alone, ignore Food-leadership and the 175mn total.**
   Evidence: matches Section 2's existing scope and the plan's AI-retention narrative most tightly (the
   Everyday App is what funds talabat pro, tMart, and cross-sell — the mechanisms this capstone's
   governing hypothesis, DEC-003, is built on). Rejected as the *sole* figure for Section 9's overall
   investment/opex baseline: Section 9 needs the full 2026 investment posture (including the
   competitive-defense Food-leadership spend) to correctly model the Group's margin step-down and
   capital-allocation stance that frames how much room exists to fund an incremental Egypt-specific ask —
   using only the narrower figure would understate the total capital environment Section 9 needs to reason
   about, even though it remains the right figure for scoping "how much of talabat's spend funds the
   AI-roadmap capabilities this plan recommends extending to Egypt" specifically.
4. **Reconcile: adopt the USD 175mn Board-approved total as the 2026 Group investment-programme figure,
   explicitly decomposed into its two disclosed, named components (~USD120mn Everyday App + ~USD55mn
   Food-leadership); treat TLB-019's ">USD100mn" as an earlier, same-scope, lower-precision disclosure of
   the Everyday App component specifically (refined to ~USD120mn with the opex/capex split by TLB-020),
   not a fourth competing total — and state the TLB-019-to-TLB-020 linkage explicitly as the capstone's own
   reconciliation inference (Medium confidence), distinct from the 175mn=120mn+55mn arithmetic itself
   (Fact tier, High confidence, directly disclosed within TLB-020).** This is the option adopted below.

## Decision
**Option 4.** Section 9 (Financial Plan) will present the 2026 investment programme as follows:
- **Total 2026 Group investment programme: USD 175mn, Board-approved** (TLB-020, page 12, page 16). Tier:
  Fact (primary disclosed, directly stated as a total by the source itself). Confidence: High.
- **Decomposed into:**
  - **~USD 120mn — Everyday App investment** (~USD 75mn opex/0.7pp of GMV + ~USD 45mn capex), funding
    talabat mart dark-store scaling, the talabat pro loyalty programme, and new-vertical expansion
    (TLB-020, page 12, page 16). Tier: Fact. Confidence: High. This is the sub-programme Section 2 already
    cites (as "~USD100-120mn") and the one most directly relevant to Sections 4/5/9/12/13's AI-roadmap
    recommendation under DEC-003's governing hypothesis.
  - **~USD 55mn — Food-leadership investment** (0.5pp of GMV), a competitive-defense allocation distinct
    from the Everyday App/retention-AI programme (TLB-020, page 16). Tier: Fact. Confidence: High. Cited
    for completeness in Section 9's total-investment-environment framing, not as part of this plan's own
    AI-retention investment ask.
- **TLB-019's ">USD100mn ecosystem investment"** (page 11) is treated as an earlier (February 2026),
  lower-precision disclosure of the same Everyday App sub-programme, later refined to the ~USD120mn
  opex/capex breakdown by TLB-020 (May 2026) — not a fourth, separately-conflicting total. This linkage is
  stated as the capstone's own reconciliation inference, Medium confidence (evidence: identical ~USD45mn
  tMart capex figure in both documents; identical "everyday app" framing language; no Food-leadership
  mention in TLB-019, consistent with it predating that component's disclosure) — clearly distinguished
  from the Fact-tier, High-confidence 175mn=120mn+55mn arithmetic itself, which is directly stated within
  TLB-020 and requires no inference.
- **No Egypt-specific dollar allocation exists within any of these figures** (confirmed across
  `Growth Drivers.md`, `Strategic Risks.md`, and `Growth Strategy.md`'s Open Questions, all independently)
  — Section 9 must build its own labeled, bottom-up Egypt investment estimate rather than apply a
  pro-rata share of any Group figure as if disclosed. That estimate is a Forecasting Agent task, not
  resolved by this Decision.

## Rationale
Unlike DEC-001 (Egypt category-share) and DEC-002 (Egypt market-size), where the conflicting figures came
from different documents, different methodology providers, or different denominators with no disclosed
arithmetic relationship, this conflict is different in kind: one primary source (TLB-020) directly states
that its Board-approved total is the sum of two named components, and those components sum exactly to that
total. Treating this as an unresolved three-way conflict to be footnoted without further comment (the
DEC-001/002 pattern) would be a *less* accurate representation of the evidence than the corpus actually
supports — the evidence-ranking discipline requires using the strongest available reconciliation, not
defaulting to the more cautious-looking "present all three" pattern when a real reconciliation exists.
At the same time, this decision does not overclaim: the TLB-019-to-TLB-020 linkage (treating ">100mn" as
an earlier cut of the same ~120mn Everyday App figure, rather than assuming it silently) is explicitly
flagged as an inference, not a verbatim disclosure, and is kept analytically separate from the much
stronger, directly-disclosed 175=120+55 arithmetic. This dual-confidence structure (High for the
decomposition, Medium for the cross-document linkage) is itself the anti-cherry-picking discipline applied
here: it would be easy to quietly fold TLB-019's figure into the reconciliation without flagging the
inference — this decision does not do that.

## Impact
Creates Assumption Register row **ASM-006**. Unblocks Section 9's Financial Plan investment/opex baseline.
Also relevant to Section 2 (Business Description): re-checked against
`vault/Validation/Citation_Audit_Section_02.md`'s Limitation 1 — Section 2's existing citation
("~USD 100-120mn," scoped explicitly to the Everyday App programme, never invoking the 175mn total) is
**fully consistent** with this decision's reconciliation and requires no correction or cross-reference
edit; Section 2's approved/drafted status is undisturbed. `Strategic/Growth Drivers.md` and
`Strategic/Strategic Risks.md` (both `Knowledge/` layer notes, outside decision-steward's write scope)
retain their existing Open Questions language flagging this as unresolved — the Research/Knowledge layer
owner should consider a light update to reflect this reconciliation the next time those notes are revised,
but that edit is out of scope for this Decision record.

## Approval
This is a data-reconciliation call within the OS owner's authority, not a strategic framing choice — it
does not change the plan's recommended intervention (DEC-003 remains the governing hypothesis), only how a
disclosed financial figure is decomposed and presented in Section 9. It is a stronger-evidenced instance of
exactly the kind of call DEC-002 was judged approvable for ("the most honest application of the
'reconcile the two, or explicitly flag if you can't' standard"). Marked `approved` directly, without
escalation to the user via `AskUserQuestion`, consistent with `decision-steward`'s documented discretion
for this class of decision.

## Links
- [[Decision_Management_Layer|Decision Management Layer]]
- [[Growth Drivers]]
- [[Strategic Risks]]
- [[Growth Strategy]]
- [[DEC-001_egypt-category-share-figure]]
- [[DEC-002_egypt-market-size-definition]]
- [[Citation_Audit_Section_02|Citation Audit — Section 2]]

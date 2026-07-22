---
id: DEC-007
status: approved
date: "2026-07-22"
owner: decision-steward (agent) — monitoring/evaluation-methodology call, approved without user escalation
supersedes: none
---

# DEC-007 — Section 13's KPI review cadence and kill criteria, given 12 of 16 KPIs have no Egypt baseline

## Tooling note (read first)
Invoked directly from the top-level Claude Code session ahead of Section 13 (Monitoring and
Evaluation) drafting, not nested inside `bp-orchestrator`. `Read`, `Write`, `Edit`, `Glob` were
available in this thread. `AskUserQuestion` was not exercised because, per the analysis below, this
agent judged — on its own reasoning, weighed explicitly rather than assumed — that this decision
resolves within `decision-steward`'s documented data-presentation/methodology authority and does not
cross the bar that forced real escalation in `DEC-003`. This is a considered judgment call, not a
fallback forced by a missing tool.

## Question
`vault/Forecasts/KPI_Tree.md` (built by `kpi-agent`, Pilot 3) defines 16 KPIs against DEC-003's
confirmed intervention. Only the four root KPIs (R1–R4) carry an Egypt-specific numeric baseline; the
other 12 are tagged "Newly-instrumented" — no Egypt baseline exists anywhere in the corpus for any of
them (K9, churn rate to competition, is the starkest case: no churn figure exists for Egypt *or*
Group). The KPI Tree's own Escalation summary states explicitly that assigning a numeric target to
any of these 12 "requires a dedicated Decision Log entry..., not a number this agent will derive or
infer," drawing an explicit parallel to how `forecasting-agent` escalated Section 9's headline-scenario
choice to `DEC-005` rather than picking one unilaterally.

This creates a genuine bind for Section 13. The Business Plan template's McKinsey Lens instruction for
Section 13 requires "the review cadence and the kill criteria: what evidence would make you stop."
Section 13 cannot:
- **Invent numeric targets/thresholds** for the 12 newly-instrumented KPIs (e.g., "kill if K9 churn
  exceeds X points," "kill if K8 retention falls below Y%") — this would fabricate both a baseline and
  a target simultaneously, violating `CLAUDE.md`'s "ground claims in the sources" discipline and the
  KPI Tree's own explicit escalation flag; nor can it
- **Simply state "no targets exist" and stop there** — that would leave the McKinsey Lens instruction
  functionally unanswered, the same class of completeness failure `QA_Review_Section_12.md` already
  caught and required fixed (vague language standing in for real go/no-go substance).

The corpus cannot resolve this alone: no document discloses what evidence should stop this specific
program, because no document discloses a baseline against which "stopping" could be defined
numerically. This is a genuine judgment call about how Section 13 should be structured — the exact
class of item this project's decision-log discipline exists to make explicit rather than letting one
sentence in a Business Plan draft bake it in silently.

## Options considered

1. **Assign explicit numeric kill-criteria thresholds to all 12 newly-instrumented KPIs now** (e.g.,
   "kill if K9 churn-to-competition exceeds X points within 12 months"), by analogy with this
   project's own precedent for labeled-synthetic quantitative devices (Section 10's synthetic
   probability–impact ratings; Section 7's synthetic funnel-conversion table). **Rejected.** A
   probability/impact rating or an illustrative funnel table is explicitly a framework-exposition
   device — it does not function as an operational commitment a real decision-maker would act on. A
   *kill-criterion threshold* is different in kind: it is presented as the actual number that would
   trigger stopping a multi-million-dollar investment. Fabricating one from zero baseline data risks
   being read as a genuine management commitment rather than a labeled illustration, regardless of how
   clearly it is labeled synthetic — this is a materially higher-stakes fabrication than this project's
   existing synthetic-data precedents and is exactly the case `KPI_Tree.md`'s escalation flag exists to
   block.

2. **State only that "no targets exist for the newly-instrumented KPIs" and leave Section 13's
   cadence/kill-criteria discussion there.** **Rejected.** Leaves the McKinsey Lens's explicit "what
   evidence would make you stop" instruction unanswered — the same completeness failure
   `QA_Review_Section_12.md` already caught and required be fixed with real go/no-go substance, not
   vague language. Section 13 needs a real answer, not a documented absence of one.

3. **A generic, time-based review cadence for all 16 KPIs (e.g., "quarterly reviews"), stated without
   connecting cadence to any kill-criteria logic and without reference to the checkpoints Section 10
   and Section 12 already built.** **Rejected.** This would re-derive weaker sequencing logic from
   scratch, risk contradicting Section 12's already-QA-passed H1/H2/H3 gate structure, and violate this
   project's own "one message per exhibit" / cross-reference-not-re-derive discipline (established in
   Sections 2, 9, 10, and 12 alike).

4. **Escalate the entire question to the user via `AskUserQuestion` as a `DEC-003`-class strategic
   framing choice** — on the theory that setting the plan's actual risk tolerance for a multi-year,
   multi-million-dollar investment is inherently a business judgment beyond an OS-methodology call.
   **Rejected as the primary resolution** (though the underlying concern is valid and is addressed
   directly in the Decision below, not dismissed). Unlike `DEC-003` — which chose among three mutually
   exclusive, substantively different AI interventions with different build requirements, KPIs, and
   financial models, thereby committing the entire capstone to a specific recommendation no data alone
   could settle — this decision does not choose among substantively different recommendations, does
   not change DEC-003's confirmed intervention, and does not alter Section 9's financial case or
   Section 12's Three-Horizons roadmap. It decides how Section 13 presents and operationalizes
   monitoring/evaluation structure that Sections 10 and 12 have *already* built and already carried
   through independent QA review without a `decision-steward` invocation (`Section_10_Risk_Analysis.md`'s
   own Traceability summary explicitly records "no `decision-steward` invocation this section — a
   deliberate, reasoned absence"). The genuinely escalation-worthy sub-question — should this plan ever
   set an actual numeric kill threshold — is not decided here either way; it is explicitly deferred (see
   Decision, point 5), which is itself why full escalation is unnecessary now.

5. **Adopt the already-established, already-QA-passed H1 go/no-go checkpoint and H2→H3 gate
   (`Section_10_Risk_Analysis.md` §10.3/§10.4; `Section_12_Implementation_Plan.md` H1/H2) as Section
   13's own qualitative, trajectory-relative kill criteria for the seven KPIs those sections already
   named as the single highest-priority mitigation** (K5–K9, K13–K14); treat the remaining five
   newly-instrumented KPIs (K10, K11, K12, K15, K16) as monitoring-only, not kill-criteria-bearing; set
   no numeric thresholds anywhere in Section 13; and explicitly flag that setting real numeric
   thresholds is a distinct, future Decision Log entry, possible only once H1 produces genuine Egypt
   baseline data. **This is the option adopted below.**

## Decision
**Option 5.** Section 13 (Monitoring and Evaluation) will present review cadence and kill criteria as
follows — operationalizing, not re-deriving, structure Sections 9, 10, and 12 already established:

1. **Root KPIs (R1–R4, baseline exists).** Review cadence: quarterly, matching talabat's own disclosed
   segment-reporting cadence (`Facts/Revenue.md`). These are tracked directly against Section 9's
   base-case trajectory (the headline baseline per `DEC-005`) as the plan's primary financial
   monitoring signal — no new judgment call is needed here, since a real baseline and a real trajectory
   already exist.

2. **Kill-criteria-bearing KPIs: K5, K6, K7, K8, K9, K13, K14** — the exact subset
   `Section_10_Risk_Analysis.md` §10.3/§10.4 already named "the single highest-priority mitigation" and
   `Section_12_Implementation_Plan.md`'s H1/H2 sections already adopted as the plan's primary go/no-go
   gate. Section 13 adopts the same two checkpoints as its own answer to the McKinsey Lens's cadence/
   kill-criteria instruction, rather than inventing a third structure:
   - **H1 checkpoint (0–6 months).** These seven KPIs are instrumented from pilot launch. H1 does not
     exit, and H2 does not begin, without an explicit read against (a) the GCC-benchmark aggregate and
     segment-fairness comparison already specified in Section 10 §10.4 / Section 11 §11.1, and (b) a
     directional read of whether these KPIs show any movement consistent with the DEC-003 investment
     thesis at all.
   - **H2→H3 checkpoint.** H3 does not begin until at least one full reporting cycle of Egypt-specific
     evidence on these same seven KPIs, at H2 (full-cohort) scale, has accumulated — exactly the gate
     `Section_12_Implementation_Plan.md`'s H2 section already specifies.
   - **Kill criterion, stated qualitatively, not numerically:** at either checkpoint, sustained evidence
     that these KPIs are tracking toward or below Section 9's base-case trajectory (no-intervention
     case), rather than toward the upside case the DEC-003 investment is projected to deliver
     (`DEC-005`'s framing), is what should trigger a stop/reassess decision — not continued investment
     on schedule regardless of signal. This is a trajectory-relative test (base case vs. upside case),
     not a specific percentage or absolute-number threshold, because no absolute threshold can be
     derived from a corpus with zero Egypt baseline for any of these seven KPIs.

3. **Monitoring-only KPIs: K10, K11, K12, K15, K16.** These remain newly-instrumented and are tracked/
   reported once instrumentation exists, but Section 13 does not assign them a kill-criteria role.
   Neither Section 10 nor Section 12 named them as gate KPIs, and doing so now in Section 13 alone would
   invent a new gate this plan's own risk and implementation sections never established — a MECE/
   cross-section-consistency violation of the kind independent QA has already caught elsewhere in this
   project (`QA_Review_Section_10_Comparison.md`, `QA_Review_Section_12.md`), not a monitoring
   improvement. (K16 in particular is structurally a derived delta — R1 tracked against Section 9's
   base-case projection — rather than an independently instrumented metric that could carry its own
   separate kill logic.)

4. **No numeric target or threshold is set, anywhere in Section 13, for any of the 12
   newly-instrumented KPIs.** This is stated explicitly as Section 13's own answer, not left implicit:
   a numeric kill threshold on a metric with zero Egypt baseline would fabricate both the baseline and
   the target in the same sentence, which is a materially different — and materially riskier — act than
   this project's existing "explicitly labeled synthetic" quantitative devices (Section 10's
   probability–impact ratings; Section 7's illustrative funnel table), because a kill threshold
   functions as an operational commitment, not an expository framework device. `KPI_Tree.md`'s own
   escalation flag exists precisely to block this shortcut, and Section 13 honors it rather than
   quietly working around it via a "labeled synthetic" number.

5. **Forward-looking process point, named explicitly so this is not read as an unresolved gap.** Once
   H1 produces the first real Egypt-specific readings on K5–K9/K13–K14 — i.e., once a genuine baseline
   exists for the first time — setting an actual numeric target/threshold against that real data
   becomes possible, and is flagged here as a distinct, necessary future Decision Log entry. This
   decision does not resolve that future question either way (including the escalation question raised
   in rejected Option 4 above, which should be revisited once real numbers exist to escalate a decision
   about); it establishes only the process, cadence, and qualitative-criteria structure that makes that
   future decision possible, and states plainly that it is still open.

## Rationale
This is analytically the same class of call as `DEC-005` (Section 9's headline-scenario framing): both
decisions organize and operationalize already-built, already-evidenced structure into a specific
section's narrative role, rather than introducing a new number, changing DEC-003's confirmed
intervention, or altering the plan's substantive recommendation. `KPI_Tree.md`'s own parallel to
`DEC-005` (both flagged for `decision-steward` rather than resolved by the agent that raised them)
supports treating this the same way procedurally — but the parallel is about *procedure* (write a
Decision record, don't silently pick a number), not automatically about *escalation path*; that
required its own independent weighing, done here rather than assumed.

Unlike `DEC-003` — a choice among mutually exclusive, substantively different AI interventions with
different builds, KPIs, and financial models, which committed the entire capstone to a specific
recommendation no data alone could settle — this decision does not choose among different
recommendations. It does not touch which AI mechanism is being built (fixed by DEC-003), how much is
being invested (fixed by DEC-004), or which financial scenario is the headline (fixed by DEC-005). It
governs how Section 13 presents monitoring cadence and kill criteria for KPIs that already exist in
`KPI_Tree.md`, using checkpoint logic Sections 10 and 12 *already wrote and already carried through
independent QA review* — `Section_10_Risk_Analysis.md`'s own Traceability summary explicitly records
that no `decision-steward` invocation was needed for that section's mitigation-priority ranking
("a deliberate, reasoned absence, not an omission"), and `Section_12_Implementation_Plan.md` operationalized
the same checkpoint as its H1 gate and H2→H3 gate without requiring escalation either. This decision's
only genuinely new content is stating, for Section 13 specifically, that this same checkpoint *is* the
plan's answer to the "review cadence and kill criteria" instruction — a presentation/methodology
choice, not a fresh strategic judgment.

The one piece of this question that plausibly *would* cross into DEC-003-class strategic territory —
actually setting a numeric risk-tolerance threshold that determines whether a multi-year, multi-million-
dollar program continues — is not decided here at all. It is explicitly deferred (Decision, point 5),
precisely because setting a real number against a still-nonexistent baseline is not a call this agent,
or arguably anyone, can make responsibly today; the honest resolution is a qualitative, trajectory-
relative test that keeps the plan's own base-case/upside-case structure (already `DEC-005`-approved) as
the reference frame, not a fabricated absolute number. Deferring that harder question, rather than either
inventing a number or escalating an unanswerable one prematurely, is itself the judgment call this
decision makes and owns.

## Impact
Creates Assumption Register row **ASM-014**. Unblocks Section 13 (Monitoring and Evaluation) drafting:
the review-cadence and kill-criteria subsection can now be written against a defined, cross-referenced
structure (root-KPI quarterly cadence; seven-KPI H1/H2→H3 checkpoint with trajectory-relative kill
criteria; five-KPI monitoring-only status; explicit no-numeric-threshold statement; explicit
forward-flagged future decision) instead of either fabricating numbers or leaving the McKinsey Lens
instruction unanswered. Also relevant to Section 14 (Appendices/traceability), which should carry this
decision's forward-flagged future-decision item as an explicit open item, not silently drop it once
Section 13 is drafted.

## Approval
This is a monitoring/evaluation-methodology call within the OS owner's authority, not a strategic
framing choice under the decision-log skill's escalation criteria — it does not change DEC-003's
committed intervention, DEC-004's investment total, or DEC-005's financial headline, only how Section
13 presents and operationalizes monitoring structure Sections 10 and 12 already built and already
carried through independent QA without escalation. It follows the same class of precedent as `DEC-005`
(organizing already-built elements into a section's narrative role) and, like `DEC-006`, is careful not
to overclaim: the one sub-question that would genuinely require either fabrication or escalation
(setting an actual numeric kill threshold) is not resolved here, only explicitly deferred. Marked
`approved` directly, without escalation to the user via `AskUserQuestion`, consistent with
`decision-steward`'s documented discretion for this class of decision. If the top-level session or the
user judges that setting real numeric thresholds should be escalated once H1 baseline data exists, that
is a new decision (`DEC-008` or later), not an edit to this file's `Decision`/`Rationale` fields.

## Links
- [[Decision_Management_Layer|Decision Management Layer]]
- [[KPI_Tree]]
- [[Section_10_Risk_Analysis]]
- [[Section_12_Implementation_Plan]]
- [[DEC-003_section2-governing-hypothesis]]
- [[DEC-004_2026-investment-total]]
- [[DEC-005_section9-headline-scenario]]
- [[DEC-006_subscription-revenue-line-reclassification]]

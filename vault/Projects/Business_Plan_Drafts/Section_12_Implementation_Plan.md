---
section: 12
title: Implementation Plan (Three Horizons)
status: drafted — pending citation verification and QA (pipeline stage 9/11)
pipeline_run: 2026-07-22
---

# 12. Implementation Plan

> **Pipeline provenance note:** drafted directly by the top-level session acting as `bp-orchestrator`'s
> Stage 8 role, Phase 8 of the roadmap. This section deliberately does **not** adopt
> `Strategic/Future AI Opportunities.md`'s own proposed recommendation (an Egypt-specific AI-driven
> churn-prediction and early-tenure retention capability) — that note's Strategic Implications explicitly
> frame this as the capstone's candidate recommendation, but it is `DEC-003`'s *unchosen* Option 1. This
> section extracts only `Future AI Opportunities.md`'s market-timing argument (Egypt's newly-standalone,
> newly-profitable, least-mature-loyalty-market status makes it the right proving ground *now*) and
> redirects it toward `DEC-003`'s confirmed Option 2 mechanisms — the same correction
> `Section_03_Market_Analysis.md`'s GEMs bullet already required in Pilot 2 (a Section 3 defect only;
> `QA_Review_Section_02.md` confirms Section 2 itself needed no fix). This is a
> working draft in `vault/Projects/`, not yet promoted to `Outputs/`.

## Answer, stated first

Sequenced on the Three Horizons framework the McKinsey Lens requires, each horizon generates the evidence
that justifies the next: **H1** validates that talabat's already-built AI mechanisms actually perform on
Egypt's population before committing further capital; **H2** scales the validated mechanisms to the full
Egypt customer base; **H3** extends the same mechanisms cross-vertically and evaluates new options, only
once H1/H2 have produced real Egypt evidence. This mirrors [[Section_10_Risk_Analysis|Section 10]] §10.4's
own mitigation sequencing (limited pilot before full rollout, for both Model Transfer Risk and Algorithmic
bias/fairness risk) and [[Section_11_CSR_and_Responsible_AI|Section 11]] §11.3's proposed standing
fairness-review gate — this roadmap does not introduce new sequencing logic, it operationalizes what
Sections 10 and 11 already established as the plan's own risk-management discipline.

---

## Three Horizons Roadmap

### Horizon 1 (0–6 months) — Quick wins that fund credibility

**What:** a limited-scope Egypt pilot of the redeployed personalisation/ranking algorithm — the redeployment
path `DEC-003`'s confirmed Option 2 commits the plan to, which [[Section_05_AI_Technology_and_Development|
Section 5]] §5.2 separately labels "Option A" in its own build/buy/partner analysis (a distinct lettering
scheme from DEC-003's numbered options, not the same "Option A") — instrumented specifically to
detect whether recommendation relevance and cross-sell response diverge from the GCC benchmark, with
segment-level (not only aggregate) fairness monitoring built in from day one — the exact controls
[[Section_10_Risk_Analysis|Section 10]] §10.4 and [[Section_11_CSR_and_Responsible_AI|Section 11]] §11.1
already specify, not a new workstream this section invents.

**Milestones:**
- Pilot scope defined (subset of Egypt's customer base) and segment-fairness monitoring instrumented,
  before any customer sees a changed experience.
- Pilot launch, with go/no-go checkpoints against the GCC benchmark on both aggregate performance and
  segment-level fairness — not a single end-of-pilot review.
- **Organizational prerequisite, not a technology one:** [[Section_08_Operations_Plan|Section 8]]'s
  "AI-capability ownership ambiguity" finding — the corpus never confirms whether Egypt AI deployment
  would be owned by a dedicated Egypt function or the shared Group Tech hub — must be resolved before H1
  exits. [[Section_10_Risk_Analysis|Section 10]] §10.4's mitigation table is where this recommendation
  that ownership be named "before Section 12's implementation roadmap is drafted" actually originates
  (Section 8 itself credits Section 10 as the source of the underlying finding, not the other way round).
  This section flags it as still open, not resolved, and treats it as the single largest H1 dependency.

**Why H1, not H2:** this is deliberately the smallest, fastest-to-evidence step — it tests `DEC-003`'s
central assumption (that Group-trained models transfer to Egypt) before committing the ≈USD13.2m
Egypt-attributable investment estimate (`ASM-012`) to full-scale rollout, consistent with Section 10's own
mitigation logic for Model Transfer Risk.

### Horizon 2 (6–18 months) — The core build

**What:** full-scale Egypt rollout of the three DEC-003-confirmed mechanisms — richer recommendation
form factors, cross-sell timing/incentive optimisation, and deepened adtech-embedded personalisation
([[Section_04_Value_Proposition|Section 4]]'s three value mechanisms) — but **only if H1's pilot clears
its go/no-go checkpoints**; this section does not commit to H2 unconditionally.

**Milestones:**
- Full-cohort rollout of the personalisation/cross-sell mechanisms validated in H1, sequenced by which
  mechanism H1's pilot evidence most strongly supports first — this section does not assume all three
  mechanisms scale simultaneously or at the same pace, since [[Section_04_Value_Proposition|Section 4]]
  §4.2 already flags that Mechanisms 1 and 2 are not yet financially distinct in the Value Driver Tree
  (`ASM-008`).
- Standing segment-fairness review cadence, per [[Section_11_CSR_and_Responsible_AI|Section 11]] §11.3's
  proposed governance gate, scheduled explicitly at this horizon transition (not a one-time H1 check that
  goes unrevisited).
- Marketing rollout: this section does not re-derive [[Section_07_Marketing_and_Sales_Strategy|Section
  7]]'s positioning and channel strategy — H2 is where Section 7's retention-over-acquisition positioning
  and its Partner/CIB-card-anchored channel mix become operational at Egypt scale, cross-referenced not
  restated.
- Development timelines: the corpus discloses no SDLC, release cadence, or model-retraining schedule at
  either Group or Egypt level ([[Section_08_Operations_Plan|Section 8]]'s explicit gap statement) — this
  section does not fabricate one; H2's own milestone is establishing that cadence for the first time,
  named here as a deliverable, not assumed to already exist.

### Horizon 3 (18+ months) — Scaling and new options

**What:** cross-vertical extension of the same validated mechanisms into Groceries & Retail
(tMart/quick-commerce), where Group-level penetration is still "low single-digit" against a large TAM
(TLB-014, page 19, cited via [[Section_03_Market_Analysis|Section 3]] §3.4) — the clearest,
already-evidenced next option, rather than an invented one.

**Milestones:**
- Extend AI-driven recommendation/cross-sell timing from Food-vertical orders into Grocery & Retail
  orders, building on the same customer base H2 already onboarded, not a new acquisition effort
  ([[Section_07_Marketing_and_Sales_Strategy|Section 7]]'s positioning already deprioritizes new
  acquisition as the primary lever).
- Team expansion: the corpus discloses no Egypt-specific AI/data-science headcount figure — this section
  does not invent a hiring plan the corpus cannot support; the concrete, evidenced recruitment-adjacent
  fact is the existing 1,500-person Global Tech & Shared Services hub (`ASM-004`), and H3's team-expansion
  milestone is formalizing whether Egypt scaling requires a dedicated local function (resolving the H1
  ownership-ambiguity dependency in the direction scale requires) rather than continuing to draw on the
  shared hub indefinitely.
- **What this section explicitly does NOT propose as an H3 "new option":** an Egypt-specific AI-driven
  churn-prediction/early-tenure-intervention capability, despite `Strategic/Future AI Opportunities.md`
  naming exactly this as its own recommended next step. That note's argument is well-evidenced on its own
  terms (Egypt's profitability inflection, the personalisation threshold's implied elevated-churn-risk
  window, the GEMs Partner-side precedent) — but it is built toward `DEC-003`'s unchosen Option 1
  (churn-prediction), not the user-confirmed Option 2 this entire plan is built on. Naming it here, and
  explaining why it is excluded rather than silently omitting it, is the same discipline
  [[Section_03_Market_Analysis|Section 3]]'s corrected GEMs bullet already established for this exact
  document.

---

## Traceability summary (for Appendix/Section 14 use)

| Claim class | Resolved via | Status |
|---|---|---|
| Three Horizons sequencing logic | `Section_10_Risk_Analysis.md` §10.4, `Section_11_CSR_and_Responsible_AI.md` §11.3 | Cross-referenced, not re-derived |
| H1 pilot scope and controls | `Section_05_AI_Technology_and_Development.md` §5.2, `Section_10_Risk_Analysis.md` §10.4, `Section_11_CSR_and_Responsible_AI.md` §11.1, `ASM-012` | Cross-referenced, not re-derived |
| H1 organizational prerequisite (AI-capability ownership) | `Section_10_Risk_Analysis.md` §10.1/§10.4 (originating finding and the "before Section 12" recommendation), `Section_08_Operations_Plan.md` (non-originating cross-reference to the same finding) | Cross-referenced, not re-derived |
| H2 mechanisms and sequencing | `Section_04_Value_Proposition.md` §4.2 (`ASM-008`), `Section_07_Marketing_and_Sales_Strategy.md` | Cross-referenced, not re-derived |
| H2 development-timeline gap | `Section_08_Operations_Plan.md` (development/maintenance workflow gap) | Cross-referenced, explicit gap statement |
| H3 cross-vertical extension | `Section_03_Market_Analysis.md` §3.4, TLB-014 p.19 | Cross-referenced, not re-derived |
| H3 explicit exclusion of churn-prediction option | `Strategic/Future AI Opportunities.md`, `DEC-003_section2-governing-hypothesis`, `Section_03_Market_Analysis.md`'s corrected GEMs bullet | Direct citation, explicit divergence stated and reasoned |

## Links
- [[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]]
- [[Section_04_Value_Proposition]] · [[Section_05_AI_Technology_and_Development]] · [[Section_07_Marketing_and_Sales_Strategy]] · [[Section_08_Operations_Plan]] · [[Section_10_Risk_Analysis]] · [[Section_11_CSR_and_Responsible_AI]]
- [[DEC-003_section2-governing-hypothesis]]
- [[Business_Plan_Generation_Pipeline]]

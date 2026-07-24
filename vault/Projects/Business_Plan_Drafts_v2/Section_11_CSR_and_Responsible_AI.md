---
section: 11
title: Corporate Social Responsibility & Responsible AI
status: Drafted — self-reviewed (Pass 1); citation audit run in-session ([[Citation_Audit_Section_11_v2]]); independent Pass 2 citation re-check and QA review (incl. the three new gates) still required before ✅ Done
pipeline_run: 2026-07-24
supersedes_note: "Companion to (not a replacement of) vault/Projects/Business_Plan_Drafts/Section_11_CSR_and_Responsible_AI.md, which was drafted for the superseded Egypt-retention problem and stays untouched as historical record — not read as an input to this draft, per the standing instruction never to read from the non-_v2 drafts directory. This file is the fresh draft required by the 2026-07-23 pivot to the Group-wide capital-allocation problem (Problem_Charter.md)."
---

# 11. Corporate Social Responsibility & Responsible AI

> **Pipeline provenance note.** Drafted by the top-level session running Part B (Stage 13) of
> `vault/Architecture/Business_Plan_Generation_Pipeline.md` for the talabat Group 2026 capital-allocation
> problem (`Problem_Charter.md`).
>
> **Tooling note (read first).** This session's toolset is `Read`, `Write`, `Edit`, `Glob`, `Grep` only —
> no `Agent`, `WebSearch`, or `WebFetch` tool was available, reproducing the runtime constraint first
> documented in the Phase 7 pilot (`vault/Validation/Phase7_Pilot_Execution_Report_Section_03.md`) and
> recorded in `bp-orchestrator.md`'s "Known runtime constraint" section. Per that section's documented
> fallback, every specialist role below was executed **in-context by this same session**, reading each
> agent's own `.md` definition and skill file and following its documented procedure directly, rather than
> being delegated to an isolated subagent thread:
> - **13.1 Intake & Scoping** — this session, directly, against `AI_Business_Plan_Template.md` §11 and
>   `.claude/skills/business-plan-drafting/SKILL.md`'s Section 11 entry (ethical AI commitments tied to
>   concrete controls; sustainability initiatives; governance structures — each connected to a Section 10
>   risk or stakeholder expectation).
> - **13.2 Evidence Assembly** — this session, directly, pulling `Topics/Capital Allocation and Investment
>   Governance.md`, `Problem_Charter.md`'s "Role of AI in this plan" section, `Investment_Portfolio_
>   Register.md`'s "Owner" section, `Strategic/Strategic Risks.md`, `DEC-008` and `DEC-009` in full,
>   `Section_08_Operations_Plan.md` §8.4 (the proposed stage-gate mechanism) and §8.5 (security/compliance
>   evidence), `Section_10_Risk_Analysis.md` §10.4 and §10.8 (`ORG-01`/`ORG-02`/`ORG-03` and their named
>   owners), `Geographic_Evidence_Rules.md`, and `vault/Forecasts/KPI_Tree_v2.md`'s Governance family
>   (G1-G7). **One genuine new evidence pull made during this stage:** `Facts/Logistics_Facts.md` and
>   `Sources/TLB-001_annual-report-2024.md` contain disclosed sustainability/CSR facts (EV fleet, Group
>   emissions, rider tips/training, SME and charitable partnerships) that no existing Topic Note
>   consolidates into ESG-specific synthesis — this section cites them directly to their existing Facts/
>   Source citations rather than waiting on a new Topic Note, consistent with the vault's stated citation
>   hierarchy (a Facts-tier citation is a valid citation on its own).
> - **13.3 Gap Detection** — this session, directly. No gap here required Research/Forecast escalation:
>   every ethical-AI commitment below operationalizes the single Responsible-AI control already established
>   at charter level (`Problem_Charter.md`) and already twice exercised in practice (`DEC-008`, `DEC-009`)
>   — this section states and cites that existing control, it does not need to invent a new one. The
>   sustainability evidence, while real and disclosed, is acknowledged as incomplete (no talabat-wide ESG
>   report, no Egypt-specific emissions breakout, no disclosed linkage between these programmes and the
>   USD175mn 2026 investment envelope) — stated as an open gap in §11.2, not silently filled.
> - **13.4 External Research Resolution (`research-agent` role)** — determined **not applicable**: every
>   claim below is grounded in the existing 29-document corpus or this OS's own prior Decision/Risk-layer
>   output; no claim required non-corpus research.
> - **13.5 Forecast & Assumption Generation (`forecasting-agent` role)** — determined **not applicable**:
>   this section constructs no new forecast number and reproduces no `ASM-029`–`033` dollar range — where
>   it discusses the false-precision control, it cites `DEC-008`/`DEC-009`'s existing resolutions and the
>   mandatory disclosure sentence, never a raw figure.
> - **13.6 Decision Escalation (`decision-steward` role)** — this session, directly, in the narrow sense of
>   *citing and operationalizing*, not re-deciding: this section formalizes as an explicit CSR/Responsible-
>   AI commitment what `DEC-008`, `DEC-009`, `Investment_Portfolio_Register.md`'s Owner section, and
>   `Section_08_Operations_Plan.md` §8.4 have already decided and labeled. No new `DEC-` record was created
>   — no new irreversible or headline-consequential judgment call originates in this section.
> - **13.7 Evidence Ranking & Conflict Resolution (`evidence-citation-agent` role)** — this session,
>   directly: no same-tier evidence conflict was found. One cross-check performed: this section's account of
>   `DEC-008`/`DEC-009`'s resolutions was checked word-for-word against the Decision Log entries themselves
>   (not against `Section_09_Financial_Plan.md`'s or `Section_12_Implementation_Plan.md`'s paraphrase of
>   them) to avoid compounding any paraphrase drift — see §11.3.
> - **13.8 Drafting (McKinsey Lens)** — this session, directly (below).
> - **13.9 Citation Verification (`evidence-citation-agent` role)** — this session, directly, per
>   `.claude/skills/citation-audit/SKILL.md`; output at
>   `vault/Validation/Citation_Audit_Section_11_v2.md`, **Pass 1/self-reviewed**.
> - **13.10 Cross-Section Consistency & KPI Alignment** — this session, directly (Section 11 is not a
>   primarily financial/KPI section, so the Orchestrator role applies per the pipeline's own delegation
>   map): cross-checked against `Section_10_Risk_Analysis.md` (`ORG-01`/`ORG-02`/`ORG-03` and their
>   mitigations) and `Section_08_Operations_Plan.md` §8.4/§8.5; no contradiction found (see §11.5).
> - **13.11 QA & Final Review (`qa-review-agent` role)** — this session, directly, per
>   `.claude/skills/qa-review/SKILL.md`, including the Problem Consistency, Financial Integrity, and
>   Geographic Evidence gates; output at `vault/Validation/QA_Review_Section_11_v2.md`, **Pass 1/self-reviewed**.
>
> Per `Business_Plan_Generation_Pipeline.md`'s gate rules, self-reviewed 13.9/13.11 earn this section
> **"Drafted — self-reviewed," not the unqualified "✅ Done."** A genuinely independent Pass 2 (a fresh,
> separately-invoked citation audit and QA review) is still required before this section is
> submission-final.

---

## Answer, stated first

**This plan treats Responsible AI as risk management, not decoration, because it has to: this OS's own
recommendation process creates a real risk (`ORG-02`, the false-precision risk `DEC-008` and `DEC-009` were
each escalated to guard against), sits inside an organization with no disclosed correction mechanism for
its own capital-allocation programme (`ORG-01`), and depends on leadership continuity that has already
shown two unexplained transitions (`ORG-03`).** Every commitment in this section is a concrete, already-
operating control tied by name to one of these three Section 10 risks, not a generic AI-ethics statement:
(1) this plan's constructed numbers are never shown as if internally verified — a control already exercised
twice in practice, not just asserted, at `DEC-008` (Section 9's headline case restricted to talabat's own
disclosed base-case guidance) and `DEC-009` (the five investment options' cost ranges confined to a labeled
sensitivity exhibit, never a headline commitment); (2) every geography-crossing inference is explicitly
labeled, per `Geographic_Evidence_Rules.md`, preventing the specific bias failure mode (misapplying GCC-
measured evidence to Egypt as if disclosed there) this pivot's own root-cause analysis identified; and (3)
no capital-allocation recommendation this plan makes is presented as an automatic management decision —
`Investment_Portfolio_Register.md`'s Owner section and `Section_08_Operations_Plan.md` §8.4's proposed
stage-gate mechanism both require human/team approval before any capital actually moves, directly
operationalizing `Problem_Charter.md`'s own Responsible-AI principle. Sustainability initiatives (§11.2) are
real and disclosed — EV delivery pilots in Egypt and the UAE, Group-level emissions reporting, rider
training and compensation, and named community programmes — but this section is honest that no disclosed
link exists between them and the USD175mn programme this plan is about, and states that gap rather than
implying one.

---

## 11.1 Ethical AI Commitments Tied to Concrete Controls

**This breakdown is MECE by control type**, not by ethical principle in the abstract: each commitment names
exactly one operating control, the Section 10 risk (or, for Control 4, the stakeholder expectation) it
answers, and the evidence that the control already works in practice, not just in policy language.

**Control 1 — No false-precision capital-allocation numbers. Answers `ORG-02` directly.**
`Section_10_Risk_Analysis.md` names `ORG-02` explicitly: "this OS's own constructed allocation ranges could
be mistaken for a disclosed talabat commitment." The concrete control is not a promise — it is a rule
already twice applied to real drafting decisions. `DEC-008` (approved 2026-07-23, Option 1) restricts
Section 9's headline financial exhibits to talabat's own disclosed Group-level FY2026 guidance range (GMV
+11-14% cFX; Revenue +14-17% cFX; Adjusted EBITDA 4.4-4.8% of GMV; FCF 3.2-3.6% of GMV) and keeps the
Low-confidence, self-labeled Everyday App : Food-leadership ~2.2:1 illustrative split (`ASM-018`) out of any
quantified financial exhibit, narrative-only. `DEC-009` (approved 2026-07-23, middle path) goes further: it
requires the plan to commit to an actual recommended funding sequence across the five identified investment
options (`OPT-001`–`005`) — refusing to sequence was explicitly *not* the option chosen — while confining
every constructed dollar range (`ASM-029`–`033`) to a labeled sensitivity/appendix exhibit, never a headline
commitment, each carrying the mandatory sentence **"This is an Agentic OS analytical recommendation, not a
disclosed talabat allocation."** These are the plan's own load-bearing precedent that the control is real:
a false-precision risk was named, and two separate drafting decisions were shaped around avoiding it before
either section was drafted, not after a mistake was found. *Geography: Group (the control governs the whole
USD175mn programme's presentation, matching `ORG-02`'s own geography tag).*

**Control 2 — Geography-crossing inferences are always labeled, never presented as disclosed fact.**
`Geographic_Evidence_Rules.md` documents the specific, already-realized failure this control prevents: an
earlier version of this OS's own Forecast Layer (`Value_Driver_Tree.md`, superseded 2026-07-23) applied
talabat pro's Group/GCC order-frequency uplift to Egypt as if measured there, when talabat pro had not even
launched in Egypt at the time the uplift was measured. The control — every numeric or directional claim
carries one of nine defined geography tags (Group/GCC/non-GCC/Egypt-standalone/country-specific/market-
comparison/external/inferred-applicability), and any evidence transfer across geographies is written as a
labeled inference, never a fact — is checked mechanically at two points: the per-section citation audit
(Stage 13.9, this session's own `Citation_Audit_Section_11_v2.md` included) and the whole-plan Geographic
Evidence Gate (Stage 16, not yet run). This is a fairness control, not merely a citation-hygiene one: an
unlabeled Group/GCC figure presented as Egypt-specific systematically overstates confidence in exactly the
market (Egypt) whose own evidence base this plan already documents as thinnest (`ASM-016`, Low confidence,
GCC+Jordan cohort explicitly excluding Egypt and Iraq) — the same evidentiary asymmetry that led the
original Egypt-only problem statement to be retired in favor of this Group-wide one (`Problem_Charter.md`'s
"Historical record"). *Geography: Group (the control itself is Group-wide); the failure pattern it prevents
is specifically an Egypt/GCC conflation.*

**Control 3 — No AI-driven customer-level personalization or bias claim this plan cannot support. Answers a
stakeholder expectation, not a named Section 10 risk.** `Problem_Charter.md` states plainly: "The AI does
not claim to possess talabat's internal, customer-level data, and its output is not a substitute for
management decision-making." This plan's decision-support layer operates entirely on Group/GCC/segment-
level disclosed aggregates, registered assumptions, and forecasts (`Section_08_Operations_Plan.md` §8.5) —
it processes no individual customer personal data and therefore makes no claim about customer-level bias,
fairness, or targeting that the evidence could not support. This answers a stakeholder expectation rather
than a named §10 risk specifically: a Board and investor base that has just absorbed a real, disclosed data-
security incident (the December 2022 breach affecting 144,469 customers' personal data in an unnamed
market, `TECH-02`/`REG-04`, TLB-026 p.49) reasonably expects any new AI-enabled recommendation system not to
introduce a *new* customer-data exposure — this plan's design choice (aggregate-only inputs) is the direct
answer to that expectation, stated explicitly here rather than left implicit. *Geography: Group.*

**Control 4 — talabat's own AI/personalisation capability is not assumed fair across markets it has not
been shown to work in. Answers `TECH-01` directly.** `Section_10_Risk_Analysis.md` names `TECH-01`: talabat's
AI/ML personalisation stack shows a disclosed, multi-year Group EBITDA contribution (USD14mn+ FY2024 →
USD30mn+ FY2025, TLB-002 p.15) but the corpus does not disclose whether models are tuned separately for
non-GCC markets or run on the same Delivery Hero-inherited regional models — a real risk that a capability
proven at Group level could be structurally weaker, and therefore less fair to the customers it serves, in
newer, thinner-data markets. This plan's own recommendation (`OPT-005`'s stage gate, `Section_08_Operations_
Plan.md` §8.4) is the concrete control: pilot per-market model-tuning specifically in Egypt before crediting
Group-level effectiveness trends to non-GCC markets, rather than assuming uniform performance. *Geography:
Group, with an inferred-applicability caveat for non-GCC/Egypt specifically, matching `TECH-01`'s own tag.*

| Commitment | Concrete control | Section 10 risk / stakeholder expectation | Evidence the control is real, not aspirational |
|---|---|---|---|
| No false-precision capital numbers | Headline-exhibit restriction + mandatory disclosure sentence on every constructed range | `ORG-02` | `DEC-008` (Option 1, approved); `DEC-009` (middle path, approved) |
| Geography-crossing inferences always labeled | Nine-tag geography system; checked at citation audit (13.9) and Geographic Evidence Gate (Stage 16) | Fairness/evidentiary-integrity risk this pivot's own root-cause analysis identified | `Geographic_Evidence_Rules.md`; the superseded `Value_Driver_Tree.md` case study |
| No customer-level data claim | Aggregate-only inputs (Group/GCC/segment) | Stakeholder expectation (Board/investor trust, post-`TECH-02`/`REG-04`) | `Problem_Charter.md`; `Section_08_Operations_Plan.md` §8.5 |
| No assumed-uniform AI effectiveness across markets | `OPT-005` per-market model-tuning pilot, Egypt first | `TECH-01` | `Section_08_Operations_Plan.md` §8.4; `Section_10_Risk_Analysis.md` §10.8 |

## 11.2 Sustainability Initiatives

**talabat discloses real, if partial, sustainability activity — this plan reports it honestly, including
what it does not know.** Four categories of disclosed activity exist in the primary corpus:

- **Electric-vehicle delivery fleet.** talabat operates 240 electric vehicles in the UAE (as of January
  2026) and 200 electric vehicles in Egypt (end 2025, deployed in Cairo — talabat's inaugural Egypt EV
  programme, with scaling explicitly "planned for 2026"), alongside earlier-stage electric-delivery pilots
  in Jordan and Oman *(country-specific: UAE, Egypt; market-comparison: Jordan, Oman; TLB-002, pages
  42-44)*.
- **Group-level emissions reporting.** talabat reports total 2025 emissions of 875,157 tCO2e (Scope 1:
  8,177; Scope 2: 8,847; Scope 3: 858,132 tCO2e), with delivery vehicles accounting for approximately 43%
  of the total *(Group; TLB-002, pages 41-42)* — the corpus discloses no market-level or Egypt-specific
  emissions breakout, and no year-over-year emissions trend beyond the single 2025 figure.
- **Rider welfare.** Riders kept 100% of over USD 21.5 million in tips earned in 2025 *(Group; TLB-002,
  pages 33, 35)*, and 78,000+ riders completed training through the "tcamp" digital learning platform across
  Egypt, UAE, Bahrain, Kuwait, and Oman (trailing-twelve-month figure as disclosed in the IPO Offering
  Memorandum) *(market-comparison: Egypt, UAE, Bahrain, Kuwait, Oman; TLB-026, pages 138, 144)*.
- **SME and community partnerships.** talabat's FY2024 Annual Report names an SME-empowerment academy
  launched in Egypt with the German Chamber of Commerce (200+ SMEs trained by July 2024), a partnership with
  Egypt's Micro, Small and Medium Enterprise Development Authority (MSMEDA), a parallel Khalifa Fund
  partnership supporting Emirati entrepreneurs in the UAE, and charitable partnerships in Egypt with the
  Egypt Food Bank and the Misr El Kheir foundation addressing food insecurity *(country-specific: Egypt,
  UAE; TLB-001, pages 46, 55)*.

**Two things this plan states explicitly rather than implying.** First, **no document in the corpus links
any of these four programmes to the USD175mn 2026 investment programme this plan is about** — the EV
fleet, tips, tcamp training, and community partnerships are each disclosed as pre-existing or independently
funded corporate activity, not a component of the Everyday App or Food-leadership buckets
(`Investment_Portfolio_Register.md`). This plan does not construct a claim that the 2026 programme "funds
sustainability" — that would be inventing a linkage the corpus does not support. Second, **the Egypt EV
programme's stated 2026 scaling timeline is a real, disclosed coincidence with this plan's own Egypt-focused
options (`OPT-002`), not evidence of coordination between the two** — the corpus discloses no shared
governance, budget, or planning connection between the EV rollout and the pro-acceleration option, and this
plan does not assert one. *Geography: as tagged inline above; no Group-wide sustainability report or ESG
disclosure of the kind that would allow a single consolidated Group sustainability statement exists in the
corpus — this section presents what is disclosed, market by market, rather than synthesizing an
unsubstantiated Group-level sustainability narrative.*

**Stakeholder-expectation connection.** These programmes bear indirectly but genuinely on `Section_10_Risk_
Analysis.md`'s `MKT-02` (fulfilment capacity structurally dependent on a largely non-employed rider
workforce, ~90-95% third-party/freelance): rider tips (100% retained), training investment (tcamp), and the
EV fleet's operating-cost and working-condition implications are the disclosed evidence base for treating
rider-workforce sustainability as a genuine capacity-risk mitigant, not a separate, unrelated CSR line item
— both `OPT-001` and `OPT-002` are designed to increase order volume, which increases load on this same
externally-sourced delivery capacity (`MKT-02`'s own language), so investment in rider welfare and training
is directly, if indirectly, relevant to whether that capacity can actually absorb the growth this plan's
recommendations are designed to produce.

## 11.3 Commitment to Responsible AI Practices and Governance Structures

**The governing principle, stated at charter level and never diluted downstream.** `Problem_Charter.md`
states: *"The AI does not claim to possess talabat's internal, customer-level data, and its output is not a
substitute for management decision-making... every allocation recommendation in the resulting plan is a
range or a staged-funding proposal grounded in disclosed evidence and explicitly labeled assumptions, gated
for human approval before any capital actually moves, never a false-precision single number presented as if
it were internally verified."* `Investment_Portfolio_Register.md`'s Owner section restates this
operationally: *"This register is owned by the Decision Steward Agent, with capital-allocation
recommendations ultimately requiring human/team approval before being presented as a Business Plan
recommendation."* This section is where that principle becomes a named governance structure this plan
commits to, tied explicitly to `ORG-01` and `ORG-03`.

**Governance structure 1 — the proposed stage-gate mechanism, answering `ORG-01` directly.**
`Section_10_Risk_Analysis.md` names `ORG-01` as the plan's single largest organizational risk: no internal
capital-allocation committee, approval threshold, or stage-gate process is disclosed anywhere in the corpus
for the USD175mn programme, and without a disclosed correction mechanism, capital could keep flowing to an
underperforming option with no committed trigger to stop it. `Section_08_Operations_Plan.md` §8.4's proposed
response — each `OPT-` option reviewed against its own named stage gate (e.g. `OPT-002`'s Egypt pilot
checkpoint, `OPT-001`'s margin-drag checkpoint) before scale-up funding, tracked against `KPI_Tree_v2.md`'s
Governance family (G1-G7, all seven newly-instrumented, none with a corpus baseline) — is this plan's
concrete governance commitment. It is stated here, again, explicitly as **this OS's own proposed mechanism,
gated for human/team approval before adoption, not a description of talabat's actual process**: `ORG-01`'s
own mitigation and `Capital Allocation and Investment Governance.md`'s Business Implications both make the
same point independently, and this section is the place the Responsible-AI principle those findings depend
on gets stated as a plan-wide commitment rather than a per-section aside.

**Governance structure 2 — accountability anchored to functions, not individuals, answering `ORG-03`
directly.** `Section_10_Risk_Analysis.md` names `ORG-03`: two recent, unexplained senior transitions (CEO
Tomaso Rodriguez → Toon Gyssels; board seat Muhammad Hussain Ghati Al Jbori → Abdul Wahab Al-Halabi), neither
narrated anywhere in the 29-document corpus, mean a multi-year allocation recommendation depends on
continuity of sponsorship from a leadership layer that has already turned over without public explanation.
`ORG-03`'s own mitigation (§10.8) proposes anchoring accountability for this plan's recommendations to named
functions (CFO, GRC cluster) rather than to the two most recently vacated seats specifically — this section
adopts that mitigation as a governance commitment: the proposed Systems function (governance structure 1,
above) is recommended to sit near the existing CFO/GRC structure (Alfakesh; Abu Amara; AlGhrawi —
`Section_08_Operations_Plan.md` §8.3), a role-based anchor that survives an individual leadership change,
rather than a commitment this plan makes to specific named individuals.

**Governance structure 3 — the human-approval gate itself, the load-bearing mechanism underneath both
structures above.** No commitment in this section is self-executing. Every stage-gate review, every
KPI-triggered reallocation recommendation, and every appearance of a constructed allocation range
(`ASM-029`–`033`, per `DEC-009`) requires explicit human/team sign-off before it becomes an actual capital
movement — the OS's role is to rank, forecast, and recommend; the decision to move capital remains
management's, consistent with `Problem_Charter.md`'s founding statement that this plan's "output is not a
substitute for management decision-making." This is not a caveat added at the end of the process — it is the
same rule that already shaped how `DEC-008` and `DEC-009` were resolved (both required real user/team
confirmation, not OS-owner discretion, precisely because they were judged to "materially affect the plan's
headline recommendation") and how `Section_10_Risk_Analysis.md`'s own `ORG-02` mitigation is written:
*"requires explicit human/team sign-off before any capital reallocation executes."* *Geography: Group (all
three governance structures apply to the whole USD175mn programme, not a specific market).*

## 11.4 What this section does not claim

Consistent with the discipline the rest of this plan applies, this section states three things it
explicitly does not do: (1) it does not claim talabat has adopted, or has committed to adopt, any of the
governance structures proposed above — they are this OS's own recommendation, pending human/team decision,
exactly as `Section_08_Operations_Plan.md` §8.4 and `Capital Allocation and Investment Governance.md` state;
(2) it does not claim the sustainability initiatives in §11.2 are funded by, or governed under, the
USD175mn 2026 investment programme — no such linkage is disclosed; (3) it does not claim to have resolved
`ORG-01` or `ORG-03` — both remain open risks in `Section_10_Risk_Analysis.md`'s probability-impact matrix
even after this section's proposed mitigations, because a proposed mechanism, not yet adopted, does not
retire a risk that depends on adoption.

## 11.5 Cross-section consistency check (Stage 13.10, self-performed)

Checked against `Section_10_Risk_Analysis.md`: this section's three governance structures restate (do not
re-decide or contradict) `ORG-01`, `ORG-02`, and `ORG-03`'s own mitigations and owners exactly as recorded
in §10.8 — no risk ID, owner, or mitigation wording was altered in transcription; `TECH-01`'s mitigation is
likewise restated, not re-derived, in Control 4 above. Checked against `Section_08_Operations_Plan.md`: this
section's stage-gate description matches §8.4's Systems rating and gap-closing action verbatim in substance
(the same stage-gate examples — `OPT-002`'s Egypt pilot checkpoint, `OPT-001`'s margin-drag checkpoint — are
used, not new ones invented here), and this section's Control 3 restates, without altering, §8.5's
aggregate-only-data finding. Checked against `DEC-008`/`DEC-009`: both decisions are described here exactly
as their own Decision Log entries state (Option 1 for `DEC-008`; the middle-path resolution for `DEC-009`,
including the exact mandatory disclosure sentence) — no `ASM-018` figure and no `ASM-029`–`033` dollar range
is reproduced numerically anywhere in this section, only the fact that the ranges exist and are restricted
to a labeled exhibit, so the mandatory disclosure sentence's trigger condition (reproducing a range) does
not apply here. Checked against `Section_02_Business_Description.md`: this section's commitments **support**
(do not restate or contradict) the governing hypothesis — the hypothesis argues an evidence-ranked, staged
framework adds value precisely because no internal stage-gate or return criterion is disclosed; this
section is the governance-and-ethics counterpart that makes the same framework's own recommendation process
accountable, not a new argument about the hypothesis itself. No contradiction found.

---

## Traceability (partial — full table due at Section 14)

| Claim | Source |
|---|---|
| Responsible-AI principle ("does not claim to possess... customer-level data... not a substitute for management decision-making... gated for human approval") | `Problem_Charter.md` |
| Investment Portfolio Register ownership and human/team approval requirement | `vault/Decisions/Investment_Portfolio_Register.md` "Owner" section |
| `DEC-008` — Section 9 headline case restricted to Group base case; `ASM-018` narrative-only | `DEC-008_section9-headline-bucket-split-presentation.md` |
| `DEC-009` — funding sequence committed narratively; `ASM-029`–`033` restricted to labeled sensitivity exhibit, mandatory disclosure sentence | `DEC-009_investment-options-ranking-and-allocation-priority.md` |
| `ORG-01`, `ORG-02`, `ORG-03`, `TECH-01`, `MKT-02` risk definitions, owners, and mitigations | `Section_10_Risk_Analysis.md` §10.4, §10.8 |
| Proposed Systems stage-gate mechanism; aggregate-only data-processing design | `Section_08_Operations_Plan.md` §8.4, §8.5 |
| Nine-tag geography system; the superseded `Value_Driver_Tree.md` GCC→Egypt talabat pro conflation case study | `vault/Architecture/Geographic_Evidence_Rules.md` |
| December 2022 data breach (144,469 customers, market undisclosed, USD150,000 penalty) | TLB-026, page 49 |
| AI/personalisation EBITDA contribution USD14mn+ (FY2024) → USD30mn+ (FY2025); non-GCC tuning status undisclosed | `Topics/AI.md`; TLB-002, page 15 |
| EV fleet: UAE 240 (Jan 2026), Egypt 200 (end 2025, Cairo, scaling planned 2026); Jordan/Oman pilots | TLB-002, pages 42-44 |
| Group 2025 emissions 875,157 tCO2e (Scope 1: 8,177; Scope 2: 8,847; Scope 3: 858,132); delivery vehicles ~43% of total | TLB-002, pages 41-42 |
| Riders kept 100% of USD21.5mn+ tips (2025) | TLB-002, pages 33, 35 |
| 78,000+ riders trained via "tcamp," Egypt/UAE/Bahrain/Kuwait/Oman | TLB-026, pages 138, 144 |
| Egypt SME academy with German Chamber of Commerce (200+ SMEs by July 2024); MSMEDA partnership; Khalifa Fund (UAE); Egypt Food Bank/Misr El Kheir charitable partnerships | TLB-001, pages 46, 55 |
| No internal capital-allocation committee/stage-gate/approval-threshold disclosed | `Topics/Capital Allocation and Investment Governance.md` |
| KPI Governance family (G1-G7), all newly-instrumented | `vault/Forecasts/KPI_Tree_v2.md` |
| Named executives (Alfakesh, Abu Amara, AlGhrawi) as proposed Systems-function anchor | `Entities/Executives.md`; `Section_08_Operations_Plan.md` §8.3 |

## See also
[[Section_08_Operations_Plan]] · [[Section_10_Risk_Analysis]] · [[Section_02_Business_Description]] ·
`vault/Knowledge/Topics/Capital Allocation and Investment Governance.md` ·
`vault/Decisions/Investment_Portfolio_Register.md` ·
[[DEC-008_section9-headline-bucket-split-presentation]] ·
[[DEC-009_investment-options-ranking-and-allocation-priority]] ·
`vault/Forecasts/KPI_Tree_v2.md` · `vault/Architecture/Geographic_Evidence_Rules.md` ·
`vault/Knowledge/Facts/Logistics_Facts.md` · `Problem_Charter.md`

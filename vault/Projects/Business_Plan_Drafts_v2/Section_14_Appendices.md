---
section: 14
title: Appendices
status: Drafted — independent Pass 2 review complete ([[Citation_Audit_Section_14_v2_Pass2]], [[QA_Review_Section_14_v2_Pass2]]), Pass 2's 3 defects fixed and independently reconfirmed by Pass 3 ([[Citation_Audit_Section_14_v2_Pass3]], all 60 traceability rows checked), which found 1 new hard-ish finding (a stale claim, in §13.3's provenance note and §14.8, that Section 9 "still describes ASM-015–028 as Proposed" and "DEC-009 as open" — now false, since Section 9 was independently corrected 2026-07-24); fixed with a dated addendum in both locations — not yet reconfirmed by a fourth independent pass; treat as Done only once Stage 17's whole-plan citation audit re-clears it
pipeline_run: 2026-07-24
supersedes_note: "A prior vault/Projects/Business_Plan_Drafts/Section_14_Appendices.md exists (no _v2 suffix), drafted for the superseded Egypt-retention problem. Per the standing instruction never to read from or write to that directory, it was not read or reused as an input to this draft — this file is written fresh against the 2026-07-23 pivot's Group-wide capital-allocation problem (Problem_Charter.md) and the 12 companion _v2 section drafts (Sections 2-13) that now exist."
---

# 14. Appendices

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
> - **13.1 Intake & Scoping** — this session, directly, against `AI_Business_Plan_Template.md` §14 and
>   `.claude/skills/business-plan-drafting/SKILL.md`'s Section 14 entry (supporting research/data;
>   traceability note claim→vault note→source; team resumes; technical specs; case studies/pilot
>   results; legal/compliance docs) — plus its explicit note that this is "the designated home for
>   `DEC-009`'s allocation-range sensitivity exhibit."
> - **13.2 Evidence Assembly** — this session, directly, reading `vault/MOC/Source Register.md`,
>   `vault/MOC/Validation and Audit.md`, all 12 existing `Business_Plan_Drafts_v2/Section_0[2-9]/1[0-3]...md`
>   files in full to extract their headline and load-bearing claims, `vault/Decisions/Assumptions_Register.md`
>   (`ASM-015`–`033`), `vault/Decisions/Investment_Portfolio_Register.md`, `vault/Decisions/
>   Investment_Options_Register.md`, `DEC-009`, `vault/Forecasts/Value_Driver_Tree_v2.md`,
>   `Scenarios_v2.md`, `KPI_Tree_v2.md`, and `vault/Architecture/Publication_Layer.md`'s "DEC-009
>   allocation-range exhibit rule."
> - **13.3 Gap Detection** — this session, directly. Three gaps found and handled explicitly rather than
>   papered over: (1) **no team resumes exist anywhere in this project** — the capstone team roster in
>   `Problem_Charter.md` lists six named members with roles marked `[assign]`, not biographical content;
>   §14.4 states this honestly rather than fabricating CVs. (2) **No talabat-side pilot of this plan's
>   actual capital-allocation recommendation has been run** — the only real "pilot program results" this
>   project can honestly report are of the Agentic OS's own drafting pipeline (Phase 7-9), not of an
>   executed allocation decision; §14.6 keeps these two categories visibly separate. (3) **A cross-section
>   staleness flag, not a Section 14 defect**: `Section_09_Financial_Plan.md`'s own text still describes
>   `ASM-015`–`028` as `status: Proposed` and `DEC-009`'s funding-sequence question as "unresolved" — both
>   are now `Approved`/resolved per `Assumptions_Register.md` and `DEC-009` as of the Final Execution
>   Readiness pass. This section does not silently inherit that stale framing (the traceability table
>   below cites the *current* `Approved` status), and does not edit Section 9 itself, which is outside
>   this task's scope — flagged here for the next Pass 2/re-draft pass on Section 9.
>
>   **Addendum, 2026-07-24 (independent Pass 3 review).** This flag is now historical, not a live gap:
>   Section 9 underwent its own independent Pass 2 citation audit and QA review on 2026-07-24
>   ([[Citation_Audit_Section_09_v2_Pass2]]), which fixed this exact staleness — `Section_09_Financial_Plan.md`
>   now correctly states `ASM-015`–`028` as `Approved` and `DEC-009` as resolved throughout, independently
>   reconfirmed by a further Pass 3 ([[Citation_Audit_Section_09_v2_Pass3]]) with no remaining defects.
> - **13.4 External Research Resolution (`research-agent` role)** — determined **not applicable**: this
>   section compiles and cross-references claims already drafted and cited elsewhere; it introduces no new
>   external-research claim.
> - **13.5 Forecast & Assumption Generation (`forecasting-agent` role)** — determined **not applicable**:
>   no new forecast number is constructed here. The DEC-009 exhibit in §14.3 reproduces `ASM-029`–`033`
>   exactly as registered (`status: Approved`), with the mandatory disclosure sentence, per that
>   Assumption's own placement restriction — it is not a new Assumption row.
> - **13.6 Decision Escalation (`decision-steward` role)** — determined **not applicable**: this section
>   implements, rather than re-decides, `DEC-009`'s already-resolved mandatory placement/labeling rule for
>   its allocation-range exhibit. No new `DEC-` record was needed.
> - **13.7 Evidence Ranking & Conflict Resolution (`evidence-citation-agent` role)** — this session,
>   directly: one same-tier conflict, already flagged and resolved elsewhere, is carried forward without
>   re-litigation (Egypt's category-share figure, §3.3's dual-figure presentation) rather than reproduced a
>   third time in a form that could drift from the original wording. The Section 9 staleness noted above
>   (13.3) is flagged, not silently resolved by re-citing Section 9's own outdated framing.
> - **13.8 Drafting (McKinsey Lens)** — this session, directly (below).
> - **13.9 Citation Verification (`evidence-citation-agent` role)** — this session, directly, per
>   `.claude/skills/citation-audit/SKILL.md`; output at
>   `vault/Validation/Citation_Audit_Section_14_v2.md`, **Pass 1/self-reviewed**.
> - **13.10 Cross-Section Consistency & KPI Alignment (`kpi-agent` role — this section reproduces the
>   `ASM-029`–`033` dollar ranges, so it is treated as financial-bearing under the pipeline's delegation
>   map, not "Orchestrator")** — this session, directly: cross-checked the DEC-009 exhibit's placement and
>   wording against `Section_09_Financial_Plan.md` §9.2 and `Section_12_Implementation_Plan.md`'s own
>   narrative-only treatment of the same ranges; no contradiction found (see §14.8).
> - **13.11 QA & Final Review (`qa-review-agent` role)** — this session, directly, per
>   `.claude/skills/qa-review/SKILL.md`, including the Problem Consistency, Financial Integrity, and
>   Geographic Evidence gates; output at `vault/Validation/QA_Review_Section_14_v2.md`, **Pass 1/self-reviewed**.
>
> Per `Business_Plan_Generation_Pipeline.md`'s gate rules, self-reviewed 13.9/13.11 earn this section
> **"Drafted — self-reviewed," not the unqualified "✅ Done."** A genuinely independent Pass 2 (a fresh,
> separately-invoked citation audit and QA review) is still required before this section is
> submission-final.
>
> **Addendum, 2026-07-24 (independent Pass 2 review).** An independent citation audit and QA review
> ([[Citation_Audit_Section_14_v2_Pass2]], [[QA_Review_Section_14_v2_Pass2]]) found and fixed 3 defects,
> all sharing one root cause: this section was drafted before Sections 4, 5, and 12 underwent their own
> independent Pass 2 fixes, so its §14.2 traceability table and §14.8 cross-section check inherited each
> section's **pre-fix** content — wrong `Value_Driver_Tree_v2.md` node IDs for the multi-vertical/AI-EBITDA
> rows (Section 4's fix), a stale "7 of 8 countries" figure (Section 5's fix, corrected to 6 of 8), and a
> stale `DEC-009` Tier 2/3 description that misread `OPT-003` as a separately-tiered, pilot-suited option
> rather than `DEC-009`'s resolved near-term-priority pairing with `OPT-002` (Section 12's fix — the same
> misreading independently found and fixed in Sections 7 and 12 this session). Fixing the DEC-009 item also
> resolved a pre-existing internal inconsistency within this section itself (§14.3 already stated the
> correct resolved sequence; §14.2/§14.8 did not, until this fix). All fixes cross-verified directly
> against each source section's current, Pass-2-cleared text — re-confirmation still required.

---

## Answer, stated first

This appendix is the plan's ghost deck: it does not introduce new arguments, it backs the ones the other
thirteen sections already made. Three things live here and nowhere else in the plan: **the full
traceability note** (§14.2), mapping this plan's headline claims — the USD175mn/120mn/55mn envelope, the
five ranked Investment Options, and each section's two-to-four most load-bearing numbers — to the vault
note and underlying source document that supports each one; **the `DEC-009` allocation-range sensitivity
exhibit** (§14.3), the designated, and only, home for the full `OPT-001`–`005` base/upside/downside cost
table, shown here exactly once with its mandatory disclosure sentence and both of the Portfolio Register's
own caveats, never as a headline financial commitment anywhere else in the plan; and an honest accounting
of what this capstone project does and does not have — no team resumes exist (§14.4), no talabat-side
pilot of the actual allocation recommendation has been run (§14.6), and no separate legal filings were
produced (§14.7) — stated plainly rather than fabricated to make the appendix look more complete than the
underlying project is.

---

## 14.1 Supporting Research and Data

The evidentiary infrastructure this plan draws on is not ad hoc — it is a maintained, auditable knowledge
base with its own index and quality-control record:

- **`vault/MOC/Source Register.md`** — the document-level index for the 29-document primary corpus
  (`TLB-001` through `TLB-029`), pairing each source with its raw fact-extraction fragment. This is the
  audit trail behind every `TLB-XXX, page N` citation used throughout this plan.
- **`vault/MOC/Validation and Audit.md`** — every quality-control checkpoint run while building this
  vault and drafting this plan, in chronological order: the initial 29-document ingestion sign-off, the
  Phase 4 semantic-layer validation (30 Topic Notes, 8 MOCs, 0 orphans), the Phase 7 pilot execution
  report that first surfaced the `Agent`-tool runtime constraint this section itself operates under, and
  the per-section citation-audit/QA-review record this plan's own drafting has produced.
- **The Facts / Topics / Strategic knowledge layers** (`vault/Knowledge/Facts/`, `Topics/`, `Strategic/`)
  — the topic-consolidated, cited synthesis layer every drafted section (2–13) actually reads from,
  rather than the raw 29-document corpus directly.
- **The Forecast layer** — `vault/Forecasts/Value_Driver_Tree_v2.md` (45 nodes: Investment → capability →
  behaviour → GMV → revenue → gross profit → EBITDA → cash flow), `Scenarios_v2.md` (Group-level base/
  upside/downside plus 8 module-level scenarios), and `KPI_Tree_v2.md` (50 KPIs, 5 families) — the
  quantitative spine behind Sections 4, 9, 12, and 13.
- **The Decision layer** — `vault/Decisions/Assumptions_Register.md` (`ASM-015`–`033`, all `Approved`),
  `Investment_Options_Register.md` and the five `OPT-001`–`005` records, `Investment_Portfolio_Register.md`,
  and the Decision Log (`DEC-008`, `DEC-009` central to this plan; the full log covers governance of every
  registered assumption).

No claim in Sections 2–13 was permitted to cite raw, unconsolidated source text directly except where a
Topic Note explicitly had not yet synthesized a specific primary-source finding (one disclosed instance:
`Section_08_Operations_Plan.md`'s direct citation of TLB-026's GLSA/CQCA/data-breach mechanics, flagged in
that section's own provenance note as new evidence assembly from an existing primary source, not new
external research) — the governing rule throughout, restated here for the appendix's own benefit, is
`business-plan-drafting/SKILL.md`'s "golden rule": every claim traces to a specific vault note, and every
vault note traces to a specific source document and page.

## 14.2 Traceability Note — Claim → Vault Note → Source

Per `AI_Business_Plan_Template.md`'s explicit requirement and the drafting skill's own description of this
section as "the closest to mechanically ready," the table below compiles this plan's actual argument —
not every sentence in Sections 2–13, but every headline claim, the five Investment Options, the
USD175mn/120mn/55mn figures, and each section's most load-bearing 2–4 numbers — into a single claim →
vault note → source table. Geography tags are carried inline exactly as each source section states them,
per `Geographic_Evidence_Rules.md`.

| Sec. | Claim | Vault note | Source |
|---|---|---|---|
| 2 | USD175mn = ~120mn Everyday App + ~55mn Food-leadership (Group, Board-approved Feb 2026, internally funded) | `Investment_Portfolio_Register.md` | TLB-020, pp.12,16; TLB-014, pp.6,19 |
| 2 | "Investments rather than costs... expected to offset the margin impact over time" | — | TLB-020, page 16 |
| 2 | No disclosed internal capital-allocation governance mechanics (committee, approval threshold, stage-gate) | `Topics/Capital Allocation and Investment Governance.md` | corpus-wide absence finding |
| 2 | Five candidate Investment Options identified and ranked | `Investment_Options_Register.md`; `OPT-001`–`005` | `DEC-009` |
| 2 | FY2024 GMV USD7,428mn (+23% YoY), Group | `Topics/GMV.md` | TLB-001, pages 6, 26 |
| 2 | Eight operating markets (UAE, Kuwait, Qatar, Bahrain, Oman, Jordan, Iraq, Egypt) | `Entities/Countries.md` | `Problem_Charter.md` |
| 2 | Dubai Financial Market listing, November 2024 | — | TLB-025 |
| 2 | FY2025 Adjusted EBITDA margin ~6.5% of GMV, Group | `Facts/Marketplace_Facts.md` | corpus-wide |
| 3 | FY2025 GMV USD9.5bn (+28% y/y cFX), Group; ~7.7mn customers, ~585mn orders, ~84k Partners | — | TLB-019, pp.5,13; TLB-002, page 12 |
| 3 | Category share 1x+–10x+ across 8 markets vs. next-closest peer | — | TLB-001 p.5; TLB-002 p.5; TLB-014 p.4 |
| 3 | Grocery/retail penetration ~1–3% of a USD104–150bn+ addressable category (two unreconciled TAM figures, both stated) | — | TLB-014, pages 5, 19; TLB-020, page 16 |
| 3 | GCC/non-GCC/Egypt FY2025 segment revenue, gross profit, net profit (Egypt-standalone; GCC/non-GCC country-comparison) | `Topics/GCC vs non-GCC.md` | TLB-002, page 111 |
| 3 | Non-GCC GMV +57% y/y vs. GCC +22% y/y, FY2025 (market-comparison) | — | TLB-019, page 14 |
| 3 | talabat pro subscriber GMV share 32%→49% (Q1 2025→Q1 2026), Group | `Topics/Talabat Pro.md` | corpus-wide |
| 3 | Multi-vertical GMV share 68%→73%→76% (Dec'24→Dec'25→Mar'26), Group | `Topics/Multi-Verticality.md` | TLB-019 p.7; TLB-020 p.8 |
| 3 | Egypt category-share figure inconsistent across the corpus (10x+ vs. 1x+→4x+), both stated, neither resolved | `Topics/Egypt.md`; `Topics/Competition.md` | TLB-001 p.5; TLB-002 p.5; TLB-014 p.4; TLB-026 p.114 |
| 3 | Non-high-value M1 retention -4% y/y (market-comparison: UAE, Kuwait, Qatar only) | `Topics/Food Leadership.md` | TLB-019, page 9 |
| 3 | Only Deliveroo/Careem/noon/Jahez/Snoonu named anywhere in the primary corpus, all from one document | `Entities/Competitors.md` | TLB-026, page 146 |
| 4 | Multi-vertical 13.0x vs. 3.8x order frequency (Group) | `Topics/Multi-Verticality.md`; `Value_Driver_Tree_v2.md` N-14 (order frequency), N-11 (GMV-share trend) | TLB-012 p.9; TLB-013 p.6 |
| 4 | talabat pro 20-28% frequency uplift / 26-32% retention uplift (GCC+Jordan cohort, six markets pre-Dec 2024, excludes Egypt/Iraq) | `ASM-016` (Approved) | TLB-001 p.18; TLB-015 pp.78,104; TLB-019 p.11 |
| 4 | Rewards >15%, PostPaid 14% order-frequency uplift (Group) | `Business_Relationships.md` Chain 1 | TLB-001, pp.18-19; TLB-026, p.134 |
| 4 | AI/personalisation EBITDA contribution USD14mn+ (FY2024) → USD30mn+ (FY2025), Group | `Topics/EBITDA.md`; `Value_Driver_Tree_v2.md` N-09 | TLB-001 p.23; TLB-002 p.15 |
| 4 | AI/personalisation EBITDA contribution not a discrete dollar line in either bucket | `Value_Driver_Tree_v2.md` N-06 | — |
| 4 | Advertising revenue USD246mn→USD323mn (+32% y/y) vs. ~7%-of-GMV UAE benchmark not yet reached Group-wide | `Topics/Revenue Drivers.md` | TLB-001 p.21; TLB-002 pp.10,14,19; TLB-014 p.19 |
| 4 | No disclosed ROI, payback period, or return figure for either investment bucket (Group, absence-of-disclosure finding) | `Investment_Relationship_Map.md` | corpus-wide |
| 5 | talabat's technology stack is licensed from Delivery Hero SE, a partner arrangement, not a standalone build | `Entities/Technology_Platforms.md` | `Topics/AI.md` |
| 5 | talabat pro live in 6 of 8 countries by end-2024 (excludes Egypt, Iraq) | `Value_Driver_Tree_v2.md` N-08/N-13 | TLB-012, TLB-013, TLB-015, TLB-016, TLB-026 |
| 5 | This plan's own decision-support system's MCP-integration status remains undecided | — | `MEMORY.md` |
| 6 | FY2024/FY2025 revenue by fee type (Commission, Delivery & Service, Subscription & Other Income, Advertising & Listing, Vouchers) — MECE by talabat's own Management Revenue convention | `Strategic/Revenue Model.md`; `Facts/Revenue.md` | TLB-001 p.27; TLB-002 p.20; TLB-009 p.4 |
| 6 | Blended take rate ~40% (FY2024) → ~41% (FY2025); 38%→39% of GMV Q1 2025→Q1 2026, Group | — | TLB-001 p.27; TLB-002 p.20; TLB-020 pp.4,10 |
| 6 | "Subscription fee & Other Income" combined-line decomposition (Q1 2026: Subscription 1.0%/~USD25.8mn; tMart-dominated "other income" 15.2%/~USD408.4mn) — not restated for full-year FY24/25 | `ASM-013` (Approved) | TLB-010, page 16; TLB-011, page 4 |
| 6 | Food-only vs. multi-vertical monthly spend/frequency (AED194/3.8 orders vs. AED814/12.8 orders, Sept 2024, Group) — >4x spend gap | `Topics/Customer Economics.md` | TLB-026, pages 91, 122 |
| 6 | G&R product-mix (0.5)–(0.7)pp Adjusted EBITDA margin drag, Group | `Topics/Grocery and Retail.md` | TLB-014, pages 6, 8 |
| 6 | Customer Acquisition and Retention Costs (CARC) USD89mn (2023) → USD155mn (2025), Group | — | TLB-001, page 28; TLB-002, page 21 |
| 7 | "Rather than matching competitor discounts and vouchers... invest in the consumer value proposition" | — | TLB-020, page 16 |
| 7 | talabat's own disclosed customer journey: Food → Grocery & Retail → talabat pro sign-up (Group, qualitative sequence, not a quantified funnel) | `Topics/Customer Journey.md` | TLB-013, page 6 |
| 7 | Illustrative acquisition-funnel conversion percentages | — | **SYNTHETIC — this section's own explicitly labeled illustrative construction, not corpus-derived, not an Approved Assumption** |
| 7 | talabat PostPaid GCC-only through 2024 Capital Markets Day; Egypt the first disclosed non-GCC expansion (PostPaid + CIB co-branded card) | `Topics/FinTech.md` | TLB-015 pp.25,74,103; TLB-002 pp.14,19 |
| 8 | GLSA "Central Value Baskets" (data, logistics, customer-management, quick-commerce, FinTech tools) for Bahrain, Egypt, Iraq, Oman, Jordan, Qatar; separate UAE/Kuwait GLSAs; CQCA and Kitchens Services Agreement | new synthesis, cited directly to raw source text (Section 8's own provenance note) | TLB-026, pages 152-153, 156 |
| 8 | December 2022 hack — 144,469 customers' personal data accessed (market undisclosed), USD150,000 regulatory penalty | — | TLB-026, page 49 |
| 8 | Delivery Hero Group Inter-Company Data Transfer Agreement; EU Standard Contractual Clauses under GDPR (Regulation (EU) 2016/679) | — | TLB-026, pages 156-157 |
| 8 | 7S alignment check: Systems and Skills rated "Not ready" — no disclosed capital-allocation committee/stage-gate; no named data-science or portfolio-management function | new synthesis, first built in Section 8 | `Topics/Capital Allocation and Investment Governance.md`; `Entities/Executives.md` |
| 9 | FY2026 Group guidance: GMV +11-14% cFX; Revenue +14-17% cFX; Adjusted EBITDA 4.4-4.8% of GMV; FCF 3.2-3.6% of GMV — the plan's only headline financial exhibit, per `DEC-008` | `Scenarios_v2.md` top-level scenarios | TLB-020; TLB-014 |
| 9 | Q1 2026 Adjusted EBITDA margin 4.8% actual, at the guided range's low end | `Scenarios_v2.md` downside case | TLB-020 |
| 9 | No disclosed break-even, payback, or ROI figure for either bucket | `Investment_Relationship_Map.md`; `Topics/EBITDA.md` | corpus-wide |
| 10 | 17 material risks across 5 MECE categories; priority quadrant (High×High): `FIN-01`, `MKT-01`, `ORG-01` | new synthesis (probability-impact matrix, pre-mortem) | `Strategic/Strategic Risks.md`; `Scenarios_v2.md` downside case |
| 10 | Group Adjusted EBITDA margin 6.7%→6.5% (FY2024→FY2025); FY2026 guided 4.4-4.8%; Q1 2026 actual 4.8% (-9% y/y EBITDA, -18% y/y Net Income) | — | TLB-020, pages 4, 10-11, 14 |
| 10 | No internal capital-allocation stage-gate/approval-threshold disclosed (`ORG-01`, the plan's single largest governance gap) | `Topics/Capital Allocation and Investment Governance.md` | corpus-wide absence finding |
| 10 | CEO transition (Rodriguez→Gyssels) and board-seat change (Al Jbori→Al-Halabi), unnarrated anywhere in the corpus | `Corporate Structure.md`; `Entities/Executives.md` | cross-document (TLB-004/018/026 vs. TLB-008/009) |
| 11 | Responsible-AI principle: "does not claim to possess... customer-level data... not a substitute for management decision-making... gated for human approval" | — | `Problem_Charter.md`, "Role of AI in this plan" |
| 11 | `DEC-008`/`DEC-009` as the plan's own already-exercised false-precision controls (`ORG-02`) | `Section_10_Risk_Analysis.md` §10.4/10.8 | `DEC-008`; `DEC-009` |
| 11 | EV delivery fleet: UAE 240 vehicles (Jan 2026), Egypt 200 vehicles (end 2025, Cairo, scaling planned 2026); Jordan/Oman pilots | — | TLB-002, pages 42-44 |
| 11 | Group 2025 emissions 875,157 tCO2e (Scope 1: 8,177; Scope 2: 8,847; Scope 3: 858,132); delivery vehicles ~43% of total | — | TLB-002, pages 41-42 |
| 12 | `DEC-009`'s underlying evidence tiering (OPT-001/OPT-005 strongest, continue-at-pace) vs. its resolved funding sequence: `OPT-002` and `OPT-003` jointly as the near-term priority pair; `OPT-004` a longer-horizon build | `DEC-009` (Decision section) | 11-criterion comparison table |
| 12 | `OPT-002` (talabat pro Egypt/Iraq) is the cheapest, most reversible of the five options — recommended H1 pilot; `OPT-003` (Food-leadership CVP) is an already-evidenced, already-operating mechanism `DEC-009` funds now via a targeted budget weighting, not a pilot | `DEC-009`; `Investment_Options/OPT-003...md` | — |
| 12 | No disclosed market-level (country/GCC/non-GCC/Egypt) allocation logic anywhere in the corpus | `Topics/Capital Allocation and Investment Governance.md` | corpus-wide absence finding |
| 13 | KPI Tree: 50 KPIs across 5 families (Portfolio, Customer & growth, Financial, Operational, Governance); 30 with a disclosed baseline, 20 newly-instrumented | `KPI_Tree_v2.md` | Forecast Layer, Phase 5 |
| 13 | No churn rate, definition, or cohort analysis exists anywhere in the corpus, Group or country level | `Topics/Customer Churn.md` | corpus-wide absence finding |
| 13 | Entire Governance family (7 KPIs, G1-G7) newly-instrumented — zero corpus baseline | `KPI_Tree_v2.md`; `Topics/Capital Allocation and Investment Governance.md` | corpus-wide absence finding |
| 14 | `OPT-001`–`005` base/upside/downside cost ranges (§14.3 below) | `Investment_Portfolio_Register.md`; `ASM-029`–`033` | `DEC-009` |

This table is deliberately not exhaustive of every sentence in Sections 2–13 — consistent with the
McKinsey Lens's 80/20 depth discipline, it covers the claims the plan's own argument actually turns on.
Every row not already covered above remains individually cited within its own section's "Traceability
(partial)" table, each of which this appendix supersedes in scope, not in content — no citation stated in
a section's own table is altered here.

## 14.3 The `DEC-009` Allocation-Range Sensitivity Exhibit (Designated Home)

**Action title: talabat's disclosed 175mn/120mn/55mn envelope is fixed; this OS's own five-option cost
ranges within it are an analytical recommendation, not a talabat allocation.**

> **This is an Agentic OS analytical recommendation, not a disclosed talabat allocation.**

Per `DEC-009` (approved 2026-07-23, middle path) and `Investment_Portfolio_Register.md`'s "Base / downside
/ upside allocation ranges" section, this is the exhibit's one and only headline location in the plan — it
does not appear as a quantified headline financial exhibit in Section 9 or Section 12, both of which
reference it narratively only, per `DEC-008`/`DEC-009`'s hard constraints.

| Option | Bucket | Base | Upside | Downside | Basis |
|---|---|---|---|---|---|
| OPT-001 — talabat mart dark-store densification | Everyday App | USD 45-55mn | USD 55-70mn | USD 30-40mn | `ASM-029` |
| OPT-002 — talabat pro acceleration (Egypt, Iraq) | Everyday App (opex) | USD 8-12mn | USD 12-20mn | USD 3-6mn | `ASM-030` |
| OPT-003 — Food-leadership CVP/partner-retention (UAE, Kuwait, Qatar) | Food-leadership | USD 25-32mn | USD 32-40mn | USD 15-22mn | `ASM-031` |
| OPT-004 — Advertising monetization gap closure | Enabling capability (cross-cutting, drawn from Everyday App opex) | USD 8-12mn | USD 12-18mn | USD 3-6mn | `ASM-032` |
| OPT-005 — AI/personalisation capability scaling | Enabling capability (cross-cutting, drawn from Everyday App opex) | USD 10-15mn | USD 15-22mn | USD 5-8mn | `ASM-033` |

**Read this table with two explicit caveats, both required to avoid a Financial Integrity Gate failure**
(reproduced verbatim from `Investment_Portfolio_Register.md`):

1. **Non-additive across the envelope.** OPT-004 and OPT-005 are cross-cutting Enabling-capability options
   that may overlap with, rather than add on top of, the Everyday App figures already implied by
   OPT-001/OPT-002 — the corpus itself states AI/personalisation is "not named as a discrete dollar line
   within either bucket... an embedded capability, not a separate budget line" (N-06). Summing all five
   ranges' upper bounds would overstate the disclosed USD175mn envelope if read as strictly additive; it
   is not intended to be read that way.
2. **Partial coverage, not a full allocation.** These five options do not claim to allocate 100% of either
   bucket — Everyday App's disclosed "new verticals" component and Food-leadership's spend outside UAE/
   Kuwait/Qatar are real, funded parts of the envelope this table does not attempt to size, since no
   evidence-grounded candidate option exists yet for them.

**What this exhibit is not.** It is not a substitute for the plan's actual recommendation, which is stated
narratively in Section 9 §9.2 and Section 12's Three Horizons roadmap: near-term priority to `OPT-002`
(cheap, fast, reversible) and `OPT-003` (tightly evidenced, narrow geography); `OPT-001` and `OPT-005`
continue at pace; `OPT-004` as a longer-horizon build. This table exists to make that recommendation's
implied dollar magnitude inspectable, not to replace the recommendation with a set of numbers a reader
could mistake for a talabat-approved budget. Every one of the five underlying `ASM-029`–`033` rows carries
`status: Approved` (Decision tier, Low confidence) in `Assumptions_Register.md`, each with this same
mandatory sentence already appended to its own Statement text.

## 14.4 Resumes of Key Team Members — Not Applicable

**Stated honestly, not fabricated.** `Problem_Charter.md` names six AASTMT MBA capstone team members
(Group G02) with AASTMT student IDs, but every role assignment in that table is marked `[assign]` — no
role has been finalized, and no biographical or professional-experience content for any team member exists
anywhere in this project's corpus or vault. This plan is generated by the Agentic OS described throughout
`vault/Architecture/` (`bp-orchestrator` and seven specialist agent roles, executed in-context by this
session per the tooling note above, where a dedicated `Agent` call was unavailable) rather than authored
by named individual contributors with distinct functional biographies in the conventional business-plan
sense. Inventing resumes to satisfy this template requirement would be exactly the fabrication
`CLAUDE.md`'s standing instructions and this plan's own evidence discipline prohibit — this section states
the gap instead. The team roster with its (unassigned) intended roles is reproduced from
`Problem_Charter.md` for reference:

| Team member | AASTMT ID | Role |
|---|---|---|
| Omar Hassan Ali Mohamadin Mohamed | 24125108 | [assign] |
| Ahmed Fawzy Mohamed Rashed | 24220998 | [assign] |
| Mohamed Magdy Abdullah Marawan | 24224459 | [assign] |
| Sherif Samy Abdelhady Karoub | 24225778 | [assign] |
| Ahmed Abd Elhakam Abd Elfattah Zaian | 24224008 | [assign] |
| Abdallah Mahmoud Abdo Ahmed | 24220430 | [assign] |

## 14.5 Technical Specifications of the AI Product

Full detail is Section 5's — this appendix gives the compressed specification, keeping the same explicit
separation Section 5 established between the two distinct AI systems in scope:

- **talabat's own embedded AI/personalisation capability** (scaled, not built, by the 2026 investment
  programme): machine-learning-driven recommendation ranking, offer/promotion timing, and logistics
  dispatch optimisation, licensed from parent Delivery Hero SE's shared technology stack
  (`Entities/Technology_Platforms.md`), processing over 235 terabytes of data daily (Group; TLB-002, page
  15), with a disclosed, growing estimated EBITDA contribution (>USD14mn FY2024 → >USD30mn FY2025,
  `Topics/EBITDA.md`). No proprietary algorithm or patent is disclosed anywhere in the corpus — the
  capability is described functionally, not architecturally.
- **This plan's own decision-support system (the Agentic OS)** — a structured, multi-agent pipeline
  (`vault/Architecture/Business_Plan_Generation_Pipeline.md`, 19 stages: Part A plan-level setup, Part B
  the per-section 11-sub-stage drafting loop, Part C whole-plan consistency gates) that assembles disclosed
  evidence into a four-tier hierarchy (Facts → External Research → Forecasts → Management Decisions, per
  `CLAUDE.md`), ranks candidate Investment Options against an explicit 11-criterion framework
  (`vault/Architecture/Decision_Management_Layer.md`), builds range-bound (never single-point) financial
  scenarios, and maintains a monitored, geography-tagged KPI tree. Built on Claude Code / Cowork
  (`MEMORY.md`), version-controlled through this vault's git history, with no proprietary model of its own
  — its distinguishing property is process discipline (evidence traceability, geography tagging, two-pass
  verification), not a novel algorithm. This project's own MCP-integration decision remains undecided
  (`MEMORY.md`) — no MCP story is fabricated here.

## 14.6 Case Studies or Pilot Program Results

**Two categories, kept explicitly separate — this section does not let either be mistaken for the other.**

**1. Real, already-executed pilots of this plan's own decision-support system (not of talabat's actual
allocation).** `vault/MOC/Validation and Audit.md` records a genuine operational history: the Phase 7
pilot (Section 3, Market Analysis, the first real end-to-end pipeline run against the original
Egypt-retention problem, which surfaced the `Agent`-tool runtime constraint this section itself operates
under); Pilot 2 (Section 2, the first genuinely top-level-invoked specialist-agent run, which caught and
drove the fix of a real cross-section defect); Pilot 3 (Section 9, the Forecast Layer's first real
content); and Pilot 4 (Section 10, a full-system operational-stability test, including this project's
first genuine two-independent-pass QA comparison, which caught a real internal MECE contradiction a first
pass had read past). These are real, disclosed pilot results — but of the *OS's own drafting and
verification machinery*, run against the (now superseded) Egypt-retention problem before the 2026-07-23
pivot. They are cited here as evidence the pipeline mechanics work, not as evidence about talabat's actual
Everyday App/Food-leadership investment performance, which this project cannot observe.

**2. No pilot of the actual capital-allocation recommendation has been run.** `OPT-002` (talabat pro
acceleration in Egypt and Iraq) carries the plan's own proposed pilot design — a 2-quarter Egypt-first
checkpoint before any Iraq or scale-up decision (`vault/Decisions/Investment_Options/
OPT-002_talabat-pro-acceleration-egypt-iraq.md`; `Section_12_Implementation_Plan.md`'s Horizon 1) — but
this is a **forward-looking proposal**, not a completed pilot with results to report. No `OPT-` option
anywhere in this plan has moved past `status: candidate` (`Investment_Options_Register.md`), and talabat
itself discloses no pilot-program result for any initiative-level allocation within the USD175mn
programme. This section states that honestly rather than presenting the OS's own pipeline pilots as if
they were evidence about the underlying business recommendation's real-world performance.

## 14.7 Legal and Compliance Documents

**No separate legal or compliance filing was produced for, or by, this plan** — this is a capstone
Business Plan, not a regulatory submission, and no such document exists in this project's `Outputs/` or
elsewhere in the vault. What this section can honestly provide is a pointer to the disclosed compliance
mechanics already compiled and cited in Sections 8 and 10, not a duplication of them:

- **Inter-company/data-governance mechanism:** the Delivery Hero Group Inter-Company Data Transfer
  Agreement (dated 15 October 2021, amended 30 October 2024), incorporating Delivery Hero's Binding
  Corporate Rules Policy and the European Commission's Standard Contractual Clauses under GDPR (Regulation
  (EU) 2016/679) for third-country personal-data transfers (Group; TLB-026, pages 156-157;
  `Section_08_Operations_Plan.md` §8.5).
- **A realized security/compliance incident:** the December 2022 data breach (144,469 customers' personal
  data accessed, market undisclosed, a USD150,000 regulatory penalty; TLB-026, page 49).
- **Realized and ongoing regulatory/antitrust exposure:** Kuwait Competition Protection Authority
  litigation, UAE Competition and Consumer Protection Department notices, an Iraq competition-authority
  inquiry, a Qatar Ministry of Commerce and Industry commission-rate cap and delivery-registration-fee ban,
  and an Oman licensing dispute (`Section_10_Risk_Analysis.md` §10.5, `REG-01`–`REG-04`; TLB-001, pp.32,34;
  TLB-002, page 26; TLB-026, pages 46-47).
- **No jurisdiction-specific data-protection statute for any of talabat's eight operating markets is
  disclosed anywhere in the primary corpus** — stated as an open gap in Section 8 §8.5 and carried forward
  here rather than resolved by inventing citations the corpus does not support.

**This plan's own decision-support system's compliance posture, stated explicitly.** Consistent with
`Problem_Charter.md`'s Responsible-AI principle and Section 8 §8.5's design finding, this OS processes no
individual customer personal data — it operates entirely on Group/GCC/segment-level disclosed aggregates,
registered assumptions, and forecasts — and therefore creates no new data-protection exposure beyond what
talabat's existing DTA/GDPR-reference framework already governs. No separate compliance filing is required
for the system itself on that basis; this is a design property, not a claim of formal legal clearance,
which this capstone project has neither sought nor is positioned to obtain.

## 14.8 Cross-section consistency check (Stage 13.10, self-performed, financial-bearing role)

Checked against `Section_09_Financial_Plan.md` §9.2: this section's DEC-009 exhibit (§14.3) is consistent
with, and does not duplicate as a headline claim, Section 9's own narrative-only reference to the same
five options and their recommended funding sequence — Section 9 states the sequence in words and points
here for the dollar ranges; this section shows the ranges with the required disclosure sentence and both
caveats; neither section contradicts the other's figures. Checked against `Section_12_Implementation_
Plan.md`: the Three Horizons sequencing (`OPT-001`/`OPT-005` continue-at-pace; `OPT-002` piloted in H1;
`OPT-003` funded now in H1 via a targeted budget weighting, not piloted or merely monitored; `OPT-004`
begun in H2) matches this section's own restatement of the recommended sequence in §14.3's closing
paragraph — no figure or sequencing was altered in transcription. Checked
against `DEC-008`: no `ASM-018` (2.2:1 Everyday App:Food-leadership) figure is shown anywhere in this
section, quantified or otherwise — not implicated. Checked against `Geographic_Evidence_Rules.md`: every
geography tag reproduced in §14.2's traceability table matches the tag already stated in its originating
section — none was widened, narrowed, or re-tagged in compiling this appendix. One flagged, unresolved item
carried forward rather than silently fixed: `Section_09_Financial_Plan.md`'s own text still frames
`ASM-015`–`028` as `Proposed` and `DEC-009` as open, both now stale relative to `Assumptions_Register.md`'s
and `DEC-009`'s current `Approved`/resolved status (see the Gap Detection note above) — this section does
not restate that stale framing, but flags it explicitly for whoever runs Section 9's own next revision
pass, rather than editing Section 9 directly, which is outside this task's scope.

**Addendum, 2026-07-24 (independent Pass 3 review):** this flag is now resolved — Section 9 has since
been independently corrected and re-verified ([[Citation_Audit_Section_09_v2_Pass2]],
[[Citation_Audit_Section_09_v2_Pass3]]), and now correctly states `ASM-015`–`028` as `Approved` and
`DEC-009` as resolved throughout, matching `Assumptions_Register.md` and `DEC-009`'s current status. No
other contradiction found.

---

## Traceability (for this section's own claims)

| Claim | Source |
|---|---|
| DEC-009 allocation-range exhibit rule and mandatory placement | `DEC-009_investment-options-ranking-and-allocation-priority.md`; `vault/Architecture/Publication_Layer.md` "DEC-009 allocation-range exhibit rule" |
| OPT-001–005 base/upside/downside ranges and both caveats | `Investment_Portfolio_Register.md` "Base / downside / upside allocation ranges" |
| ASM-029–033 status Approved | `Assumptions_Register.md` |
| Team roster (roles unassigned) | `Problem_Charter.md` |
| No talabat-side pilot exists for the allocation recommendation | `Investment_Options_Register.md` (all five `status: candidate`) |
| Phase 7-9 pipeline pilot history | `vault/MOC/Validation and Audit.md` |
| Source Register / 29-document corpus index | `vault/MOC/Source Register.md` |
| Section 9 staleness (ASM-015-028/DEC-009 framing), flagged 2026-07-24, since independently fixed and re-verified in Section 9's own Pass 2/Pass 3 | `Citation_Audit_Section_09_v2_Pass2.md`, `Citation_Audit_Section_09_v2_Pass3.md` |

## See also
[[Section_02_Business_Description]] · [[Section_09_Financial_Plan]] · [[Section_12_Implementation_Plan]] ·
`vault/MOC/Source Register.md` · `vault/MOC/Validation and Audit.md` ·
`vault/Decisions/Investment_Portfolio_Register.md` · `vault/Decisions/Investment_Options_Register.md` ·
[[DEC-009_investment-options-ranking-and-allocation-priority]] ·
`vault/Decisions/Assumptions_Register.md` · `vault/Forecasts/Value_Driver_Tree_v2.md` ·
`vault/Forecasts/Scenarios_v2.md` · `vault/Forecasts/KPI_Tree_v2.md` ·
`vault/Architecture/Publication_Layer.md` · `vault/Architecture/Geographic_Evidence_Rules.md` ·
`Problem_Charter.md`

# Project Memory

Project-scoped memory for this engagement. Persists across sessions. Update whenever a durable
decision, convention, or fact is established.

## What this project is

AASTMT MBA capstone (AI for Business Organizations track), **Group G02**, instructor **Dr. Hossam
Daoud**. The team stands up an Agentic OS around one business problem — **customer retention for
talabat Egypt** — and uses it to produce an AI Business Plan (GSB 14-section template v2.0,
McKinsey Edition, 15–25 pages), an OS structure document (3–5 pages), and a group presentation
(5 slides per member). Problem: talabat Egypt's price-crushed, low-switching-cost customers (71.9%
food inflation, 38% devaluation) are exposed to Breadfast, Rabbit, and elmenus; the plan argues for
AI-driven retention — churn prediction, personalized offers, t pro subscription targeting — in
Greater Cairo. Charter: `Problem_Charter.md` — **✅ approved by Dr. Hossam Daoud, 21/07/2026**
(team of 6 and a 30-slide group presentation approved alongside the problem statement).

## Team (Group G02)

| Member | AASTMT ID | Role |
|---|---|---|
| Omar Hassan Ali Mohamadin Mohamed | 24125108 | TBD |
| Ahmed Fawzy Mohamed Rashed | 24220998 | TBD |
| Mohamed Magdy Abdullah Marawan | 24224459 | TBD |
| **Sherif Samy Abdelhady Karoub (owner of this OS instance)** | 24225778 | Coordinating all roles |
| Ahmed Abd Elhakam Abd Elfattah Zaian | 24224008 | TBD |
| Abdallah Mahmoud Abdo Ahmed | 24220430 | TBD |

Guide specifies 4–5 members / 5 roles; team size of 6 is now instructor-approved (with a 30-slide,
5-slides-per-member presentation confirmed to match). **Still open:** how the 6 members map onto
the guide's 5 defined roles (e.g., co-leads on one role, or a 6th custom role) — not yet assigned.

## Source corpus (`Input_Data/`)

Two corpora, two manifests:

- **Markdown-extracted secondary/tertiary corpus** (9 docs, collected 20 Jul 2026) — manifest
  `Input_Data/_CORPUS_INDEX.md`. Organized as `01_Company_Filings/`, `02_Market_Research/`,
  `03_Competitors/`, `04_Strategy_News/`.
- **Native-PDF primary-source corpus** (29 docs — talabat Holding plc IR/regulatory filings,
  ingested 21 Jul 2026) — manifest `Input_Data/CORPUS_INDEX.md` (no underscore). Organized as
  `01_Annual_Reports/` through `07_Supplementary_Data/`. Fully processed into the knowledge base
  (see "Knowledge base" section below) — this is now the primary evidence base for the AI Business
  Plan's quantitative claims.

| # | Document | Type |
|---|----------|------|
| 1 | `01_Company_Filings/2026-02-13_talabat_Q4_FY2025_results_press_release.md` | Primary — official IR |
| 2 | `01_Company_Filings/2026-05-12_talabat_Q1_2026_results_press_release.md` | Primary — official IR |
| 3 | `02_Market_Research/2026_IMARC_egypt_online_food_delivery_market.md` | Secondary — report overview |
| 4 | `02_Market_Research/2026_Mordor_egypt_foodservice_market.md` | Secondary — report overview |
| 5 | `03_Competitors/2026-07-20_egypt_delivery_competitive_landscape.md` | Secondary — synthesis, per-claim links |
| 6 | `04_Strategy_News/2026-07-20_talabat_newsroom_index_2024-2026.md` | Primary — newsroom index |
| 7 | `04_Strategy_News/2026-04-28_talabat_egypt_largest_MENA_qcommerce_distribution_center.md` | Primary — official PR |
| 8 | `04_Strategy_News/2025-02-18_talabat_egypt_t_pro_subscription_launch.md` | Primary — official PR |
| 9 | `_CORPUS_INDEX.md` | Manifest + to-download list + data gaps |

Ordering: not meaningful; date-prefixed filenames. Primary sources outrank secondary.

## Knowledge base (`vault/Knowledge/`) — built from the 29-document primary corpus

- `_source_text/` — raw PyMuPDF/Tesseract-OCR extraction of all 29 documents (1,158 pages), doc IDs TLB-001–TLB-029
- `Sources/` — one knowledge note per document (executive summary, financial/operational metrics, Egypt mentions, retention-relevant info, quotations, limitations)
- `Facts/` — 14 topic-consolidated fact files (Revenue, GMV, Orders, Monthly Active Customers, Talabat Pro, Advertising, Marketplace, Q-Commerce, Customer Growth, Retention, Subscription, Logistics, AI, Competition), every fact cited back to `(DocID, page N)`; raw per-document fragments in `Facts/_raw/`
- `Entities/` — deduplicated rosters (Companies, Brands, Countries, Executives, Products, Business Units, Competitors, Technology Platforms, Delivery Models)
- `Relationship_Map.md` — how Customers/Restaurants/Riders/talabat pro/Marketplace/Q-Commerce/Advertising/Logistics/AI/Revenue/GMV/Orders connect, with a Mermaid diagram
- Doc ID map and templates: `_source_text/_INGESTION_BRIEFING.md`

## Key facts (verified, with source)

- FY2025: GMV USD 9.5bn (+28% cFX), revenue USD 3.9bn, Adj. EBITDA USD 615m (6.5%), net income
  USD 464m; 7.5m active customers (Q4 FY25 + Q1 26 press releases)
- Non-GCC (Egypt, Jordan, Iraq): +57% GMV FY2025, +52% Q1 2026 — fastest-growing segment
  (**superseded for Egypt specifically — see correction below**)
- 2026: USD 120m "Everyday App" investment (talabat mart, talabat pro, new ventures); margins
  compressing (Q1 26 Adj. EBITDA 4.8% vs 6.3% prior year)
- Egypt: t pro at EGP 79/month (Feb 2025); largest q-commerce DC in MENA opened Apr 2026 (27,000
  sqm, 1m items/day, in-house AI demand forecasting); 3,100 employees; Egypt tech hub delivers 74%
  of group shared services and 30% of app features
- Competitors: Breadfast (~USD 382m valuation, 39 fulfillment centers, ~1m orders/month), Rabbit
  (Saudi expansion 2025), elmenus (lower commissions)
- **⚠️ InstaShop: talabat paid USD 31.9m (2025, intra-group; confirmed independently in TLB-004 and
  TLB-008 audited financials), not USD 360m (Delivery Hero's 2020 price). Market reports conflate
  the two. InstaShop's own 2023 GMV was ~USD 487m per TLB-026 — a third, unrelated figure; do not
  conflate acquisition price with GMV.**

### ⚠️ CORRECTION (21 Jul 2026): Egypt now has disclosed standalone financials

The `_CORPUS_INDEX.md` "known data gaps" note that "Egypt-only financials are not disclosed" is
**no longer fully accurate** as of the FY2025 reporting cycle. Egypt independently met the IFRS 8
quantitative thresholds and became its own **standalone reportable segment**, distinct from the
residual "Non-GCC" bucket (now Jordan + Iraq only):
- **FY2025** (Annual Report TLB-002; audited financials TLB-008): Egypt revenue USD 509.94m,
  gross profit USD 124.996mn, net profit USD 44.35m — the Group's **3rd-largest revenue country**
  after UAE and Kuwait.
- **Q1 2026** (TLB-010): Egypt segment revenue USD 145.3m (external USD 139.9m), profit before tax
  USD 9.4m, vs. restated Q1 2025 USD 80.3m / USD 0.5m PBT — ~81% YoY growth, swinging from
  near-breakeven to solidly profitable.
- **TLB-019** (Q4/FY25 results deck): "Egypt is now our third largest market by GMV, after UAE and
  Kuwait, and our largest user base," with M1 retention and talabat pro retention/frequency-uplift
  data broken out by customer tier.
- Historical context (pre-2025, still true for that period): IPO Offering Memorandum (TLB-026)
  states Egypt was 6% of 2023 revenue but only 1% of 2023 Adjusted EBITDA, and talabat pro was not
  yet live in Egypt as of Nov 2024.
- talabat pro launched in Egypt **February 2025** (TLB-001); most pre-2025 documents' subscription
  KPIs explicitly exclude Egypt.

**Implication for the AI Business Plan:** Egypt-specific financial claims for FY2025/Q1 2026 onward
can now cite real disclosed segment data instead of the non-GCC-bundle estimation method described
in `_CORPUS_INDEX.md`. Pre-2025 periods still require the old estimation approach. Full detail and
citations: `vault/Knowledge/Entities/Countries.md` and `vault/Knowledge/Facts/*.md`.

### Other notable findings from the 29-doc ingestion

- **CEO transition**: Tomaso Rodriguez (CEO since 2019) → Toon Gyssels, observed between the Q2
  2025 results presentation (Aug 2025) and the Q4/FY2025 press release (Feb 2026, where Gyssels is
  named "newly-appointed CEO"). No document in the corpus narrates the transition itself — flagged
  as an open question in `vault/Knowledge/Entities/Executives.md`.
- Board composition change: Muhammad Hussain Ghati Al Jbori → Abdul Wahab Al-Halabi (Independent
  NED), visible between Mar 2025 and Feb 2026 audited financials, also unexplained in the corpus.

## Standing instructions

- **Goal:** see CLAUDE.md — AI Business Plan + OS structure doc + deck; McKinsey standards
  (SCQA, Pyramid, MECE, hypothesis-driven, value driver tree); MENA-grounded figures.
- **Ground claims in the sources** and cite which document each point comes from.
- **Extract before reading** — convert binaries to text/Markdown first; never read them raw.
- **Write artifacts to `Outputs/`**, never into `Input_Data/` (read-only).
- **Propose-then-approve** for destructive vault edits.
- **LLM decision (documented for grading):** Claude subscription (Claude Code / Cowork). Rationale:
  native to the template; corpus is 100% public so confidentiality risk is low; team already
  licensed; predictable cost vs API. Revisit if confidential interview data is added.
- **MCP decision:** none integrated yet; optional distinction credit — decide by end of Phase 2.

## Decisions log

- 2026-07-20 — Company: Talabat (Egypt focus); problem: AI-driven customer retention vs local
  rivals. Chosen over margin-recovery, basket-economics, and dark-store-optimization candidates.
- 2026-07-20 — Started from ProjectX template at folder root; corpus collected before activation.
- 2026-07-20 — AI persona: analyst + chief of staff; style: direct, recommendation-first;
  pressure-test standard: McKinsey (SCQA/MECE/Pyramid) + full GSB 14-section coverage.
- 2026-07-20 — Nightly maintenance available but unscheduled (manual, propose-only) per handout
  guardrail.
- 2026-07-21 — Revised problem statement (owner's recommendation): reframed the charter's problem
  paragraph to foreground the Agentic OS / centralized-knowledge-base deliverable and Customer
  Lifetime Value (CLV), merged with the original's concrete Egypt evidence (competitors, inflation/
  devaluation, t pro pricing) so the paragraph still satisfies the guide's company/problem/why-it-
  matters/obtainable-data structure. Two scope decisions locked in: (1) synthetic data / primary
  research may be used only where proprietary operational data is genuinely unavailable, and must
  always be clearly labeled as such, never blended with or presented as real disclosed data; (2)
  Egypt remains the target market for the actual deliverable — "MENA" is company-level backdrop
  context (talabat operates in 8 countries), not a scope expansion. See `CLAUDE.md` standing
  instructions and `Problem_Charter.md` for the resulting text.
- 2026-07-21 — Ingested the 29-document native-PDF primary-source corpus (uploaded to
  `Input_Data/00_Inbox/`) into the structured knowledge base under `vault/Knowledge/` (source
  notes, topic-consolidated facts, entities, relationship map). Installed PyMuPDF + Tesseract OCR
  in-session (one scanned PDF, TLB-007, required OCR). Used 8 parallel background agents for
  per-document note/fact extraction, each following a shared briefing
  (`vault/Knowledge/_source_text/_INGESTION_BRIEFING.md`) with a strict no-invented-facts rule and
  per-fact page citations.
- 2026-07-21 — Instructor (Dr. Hossam Daoud) approved the problem charter, the 6-person team size,
  and a 30-slide (5×6) group presentation. Received the graded AI Business Plan Template v2.0
  (McKinsey Edition) and stored it verbatim as `AI_Business_Plan_Template.md`. Built the
  `business-plan-drafting` skill (`.claude/skills/business-plan-drafting/SKILL.md`) — the Guide's
  third named example skill, previously missing — mapping all 14 GSB sections to the specific
  vault notes that feed them, and flagging every known evidence gap (no churn baseline, no Egypt
  funnel data, three unreconciled internal figures) so drafting doesn't silently paper over them.
- 2026-07-21 — **OS Architecture Design Phase: designed the complete Agentic OS architecture, explicitly before starting
  any Business Plan drafting** (user instruction: "The Agentic OS—not the Business Plan—is the
  primary product of this project"). Assessed the current OS (strong knowledge base, zero decision-
  making apparatus above it) and catalogued 14 missing capabilities. Designed and built: 8 named
  agents in `.claude/agents/` (`bp-orchestrator`, `research-agent`, `forecasting-agent`,
  `decision-steward`, `evidence-citation-agent`, `kpi-agent`, `exec-summary-agent`,
  `qa-review-agent`); 6 new skills (`external-research`, `forecast-builder`, `decision-log`,
  `evidence-ranking`, `citation-audit`, `qa-review`) plus a redesign of `business-plan-drafting`
  into an 11-stage pipeline entry point; three new, scaffolded-but-empty knowledge layers —
  `vault/Decisions/` (Assumptions Register + Decision Log), `vault/Research/` (Research Register +
  Notes), `vault/Forecasts/` (Value Driver Tree + Scenarios + KPI Tree) — implementing a five-tier
  evidence model (Facts → External Research → Forecasts → Decisions → Business Plan) where every
  number downstream must resolve to a citation or an Approved assumption. Full design in
  `vault/Architecture/` (`Agentic_OS_Architecture.md` + 4 companion docs). Work done on branch
  `feature/agentic-os-architecture`, reviewed (two PR review passes — 5 Required Changes and 5
  Recommended Improvements applied, a research-agent smoke test passed) and merged to `main` on
  the user's explicit authorization. **No Business
  Plan content was drafted** — the 14-section checklist remains 0/14; this was architecture design
  only, per explicit instruction.
- 2026-07-22 — **Phase 7: first real, non-simulated execution of the Business Plan Generation
  Pipeline**, per explicit instruction to stop designing and start proving the architecture works.
  Ran a readiness check (all 8 agents/8 skills/2 templates/10 pipeline references/4 memory files
  confirmed present), selected Section 3 (Market Analysis) as the pilot (exercises the most
  components against real, pre-existing corpus conflicts, with no forecasting required), and invoked
  `bp-orchestrator` for real. **Critical operational finding:** once spawned as a subagent,
  `bp-orchestrator` had no `Agent`, `WebSearch`, or `WebFetch` tools available — despite its own
  frontmatter listing them — so the designed delegation mechanism (orchestrator spawns isolated
  specialist agent threads) does not work as specified in this runtime. It self-detected this and
  adapted by executing each specialist's documented procedure in-context, flagging the degradation
  explicitly in every artifact rather than presenting self-executed work as independently delegated.
  Despite that, the content-generation logic worked: found and routed (never silently resolved) two
  real corpus conflicts through Decision records — `DEC-001` (Egypt category-share: 10x+ vs.
  1x+→4x+, present both footnoted) and `DEC-002` (three non-reconcilable Egypt market-size figures,
  presented separately) — and caught a real analytical error (IMARC's Egypt online-food-delivery
  figure is arithmetically smaller than talabat's own disclosed Egypt revenue). Resolved 4 research
  gaps (`RES-001`–`004`), registered 4 real assumptions (`ASM-001`–`004`) — the Decision and
  Research layers hold real content for the first time. Drafted Section 3 in full, McKinsey Lens
  compliant, citation-audited (PASS, 0 hard failures), and QA-reviewed (PASS, with an explicit
  self-review independence caveat since Stage 11 was self-administered, not independently verified).
  Found and fixed two minor broken wikilinks during independent verification of the output. **No
  architecture files were modified** — the recommended fix (invoke each specialist agent directly
  from the top-level session rather than nesting delegation inside `bp-orchestrator`) is recorded as
  a recommendation for the next pilot to test, not applied preemptively. Full report:
  `vault/Validation/Phase7_Pilot_Execution_Report_Section_03.md`. Work done on branch
  `feature/bp-pilot-sections`, not merged to `main`.
- 2026-07-22 — **Phase 8: evolved the architecture into Version 2, using only Phase 7's execution
  evidence** (`vault/Architecture/Agentic_OS_Architecture_v2.md`) — 4 traced changes (orchestration
  invocation pattern; two-pass self-reviewed/independently-verified QA; a `sourcing_method` field on
  Research Notes; a wikilink-scope convention for drafting agents), explicit "No change recommended"
  for every component execution validated as designed, and recalculated readiness metrics. Version 1
  kept intact, not rewritten. See the Session log entry below for full detail. Work done on branch
  `feature/agentic-os-v2`, merged to `main` on explicit authorization.
- 2026-07-22 — **Pilot 2: tested Architecture v2's Change 1 (top-level-invoked specialists) for the
  first time**, drafting Section 2 (Business Description). All four specialist agent invocations
  (`decision-steward`, `evidence-citation-agent`, `qa-review-agent` ×2) were genuine, separate
  top-level `Agent` calls, not nested inside `bp-orchestrator` — the fix worked. **Second real
  architecture finding:** `AskUserQuestion` is also unavailable inside a spawned subagent thread
  (same constraint class as `Agent`/`WebSearch`/`WebFetch`). `decision-steward` self-detected this
  correctly when escalating the Section 2 governing-hypothesis decision (a genuine strategic framing
  choice, unlike Pilot 1's two data-presentation calls) and preserved the exact escalation prompt for
  the top-level session, which ran it for real and got a genuine user decision: extend talabat's
  Group AI roadmap into Egypt, not build a net-new churn-prediction capability or optimize
  subscription-uplift alone (`DEC-003_section2-governing-hypothesis.md`, approved; `ASM-005`,
  Approved). The resulting genuinely-independent Stage 11 QA pass — the first in this project's
  history — caught a real, hard-blocking cross-section defect: Section 3's GEMs-analogy Opportunities
  bullet had drifted into the governing hypothesis's *unchosen* option. Fixed and independently
  re-verified (addendum to `QA_Review_Section_03.md`, original preserved). No architecture redesign
  was needed — the new finding is covered by the existing Change 1 fix. Section 2 reached ✅ Done
  (independently verified) on the first real attempt; Section 3 reached ✅ Done (self-reviewed +
  independently re-verified on one point). Full report:
  `vault/Validation/Pilot2_Execution_Report_Section_02.md`. Work done on branch
  `feature/bp-pilot-sections`, not merged to `main`.
- 2026-07-22 — **Pilot 3: first real test of the Forecast Layer**, drafting Section 9 (Financial Plan).
  `forecasting-agent` and `kpi-agent` both ran for the first time, building `Value_Driver_Tree.md`,
  `Scenarios.md`, and `KPI_Tree.md` from empty scaffolds — every intervention-driven node kept strictly
  consistent with DEC-003's confirmed mechanism, no numeric target set on any newly-instrumented KPI
  without a backing Decision. `decision-steward` resolved two new Decisions without escalation: the
  2026 investment-total conflict (`DEC-004_2026-investment-total.md`) — re-reading the primary source
  directly found this discrepancy, carried since corpus ingestion as one of three "unreconcilable"
  conflicts, is actually reconcilable (talabat's own USD175mn Board-approved total decomposes exactly
  into its two disclosed components) — and Section 9's headline-scenario framing
  (`DEC-005_section9-headline-scenario.md`, base=baseline/upside=return/downside=risk). **Central
  finding: the project's first complete fail/fix/independently-re-verified cycle.** A genuinely
  separate Stage 11 QA thread issued a real FAIL — the revenue-forecast scenarios never stated an
  actual dollar figure, and no P&L projection existed, despite the template's explicit requirement and
  despite the section already demonstrating the needed pattern elsewhere in itself. Both gaps were
  fixed entirely from already-Approved components (no new Research/Forecast/Decision work) and
  independently re-verified by a fresh agent thread — proving the two-pass QA gate does real work, not
  formality. No architecture redesign needed; every mechanism worked as Architecture v2 designed it.
  Section 9 reached ✅ Done (independently verified). Full report:
  `vault/Validation/Pilot3_Execution_Report_Section_09.md`. Work done on branch
  `feature/bp-pilot-sections`, not merged to `main`.
- 2026-07-22 — **Pilot 4: redefined mid-flight, on explicit instruction, into a full-system operational-
  stability test.** Original design (deliberate two-pass QA on Section 10) preserved intact as one
  component; primary deliverable became `vault/Validation/Pilot4_System_Stability_Report.md`. A
  pre-execution integrity audit of Pilots 1–3's output found and fixed 2 real defects (3 graph orphans;
  2 stale Validation-report frontmatter fields) and correctly identified 1 false positive. Section 10
  (Risk Analysis) was drafted as a deliberate cross-subsystem integration test — re-reading Section 9's
  Forecast Layer confidence tags as financial-risk input, referencing Section 3's Threats rather than
  re-deriving them — and underwent the most rigorous verification of any section: this project's first
  **citation-audit FAIL** (3 hard failures, fixed and re-verified), then two genuinely independent QA
  passes that both failed and — critically — **diverged**: both caught a missing algorithm-bias risk and
  a confidence/probability conflation, but only Pass 2 caught a real internal MECE contradiction (claimed
  five categories, proved four, used five in the matrix) that Pass 1 read past. This is the first
  concrete evidence in this project that a second independent QA pass catches something a rigorous first
  pass misses — see `vault/Validation/QA_Review_Section_10_Comparison.md`. All findings fixed and
  independently re-verified a third time; Section 10 reached ✅ Done (independently verified).
  **Stability verdict: the Agentic OS is operationally stable when every major subsystem is exercised
  together** — 17 real `Agent` invocations this session, zero failures, zero pipeline-gate violations,
  zero content contradictions. Findings classified against Phase 8's 8-category taxonomy: zero new
  Architecture Issues/Implementation Bugs/Knowledge Issues, only two Process Improvements (MOC-linking
  and frontmatter-freshness discipline, now standing conventions, not architecture changes) and four
  Successfully Validated Design confirmations. **All four Pilot Validation Plan pilots now complete —
  Phase 8 of the roadmap (drafting the remaining 10 sections) can begin.** Work done on branch
  `feature/bp-pilot-sections`, not merged to `main`.

## Session log

- 2026-07-20 — Session 1: corpus collection (9 docs), problem selection, charter draft, OS activation.
- 2026-07-21 — Session 2: pulled latest repo changes (29-doc PDF corpus in `Input_Data/00_Inbox/`);
  organized into 7 category folders + `Input_Data/CORPUS_INDEX.md`; extracted text/OCR for all 29
  documents; built `vault/Knowledge/` (29 source notes, 14 topic fact files, 9 entity rosters,
  relationship map); corrected the "Egypt financials not disclosed" assumption (now a standalone
  reportable segment as of FY2025). See `vault/Knowledge/_VALIDATION_REPORT.md` for the full audit.
  Same session, later: built the semantic knowledge layer (30 Topic Notes, 8 MOCs, 12 Strategic
  notes), ran an Obsidian graph cleanup (fixed 7 filename collisions, connected 34 orphans), ran a
  formal Project Readiness Assessment against the official Project Guide, recorded instructor
  approval of the charter/team/slide count, ingested the graded AI Business Plan Template and built
  the `business-plan-drafting` skill, then designed the full Agentic OS architecture (OS Architecture Design Phase:
  Decision Management, External Research, and Forecasting layers; 8 agents; 6 new skills; the
  11-stage drafting pipeline) — all before any Business Plan section was drafted, per explicit
  instruction. See `vault/Architecture/` for the architecture design.
- 2026-07-22 — Session 3: ran the first real, non-simulated execution of the Business Plan
  Generation Pipeline (Section 3, Market Analysis) — found and worked around a critical operational
  gap (the orchestrator cannot delegate to isolated agent threads once spawned as a subagent in this
  runtime), while proving the content-generation logic itself works, including catching a real
  analytical error. See `vault/Validation/Phase7_Pilot_Execution_Report_Section_03.md`.
- 2026-07-22 — Session 4 (Phase 8): evolved the architecture into **Version 2**, using only Session
  3's execution evidence — no redesign, no design preference. Classified all 12 pilot findings into
  8 categories (more confirmed the design than contradicted it: 4 Successfully Validated Design vs.
  1 real Architecture Issue). Validated all 12 major components individually, tracing every
  "partially validated" result to the same root cause (no agent-thread isolation). Produced 4
  evidence-traced changes — orchestration invocation pattern (flat, top-level-invoked specialists,
  not nested delegation), a two-pass QA/citation protocol (✅ Done (self-reviewed) vs. ✅ Done
  (independently verified) as distinct, trackable states), a `sourcing_method` field on Research
  Notes, and an explicit wikilink-scope convention for drafting agents — each documented as Previous
  Design → Execution Evidence → Reason for Change → New Design → Expected Benefit in
  `vault/Architecture/Agentic_OS_Architecture_v2.md`. Explicitly recorded "No change recommended"
  for every component execution validated as designed (Decision Layer schema, five-tier evidence
  hierarchy, 11-stage pipeline sequence/gate rules, the `business-plan-drafting` content map) —
  Version 1 (`Agentic_OS_Architecture.md`) kept intact as the historical record, not rewritten.
  Recalculated readiness metrics with reasoning for each delta (structural 90%→92%, operational
  30%→45%, skill validation coverage 12.5%→75%, agent validation coverage reported as two honestly
  separate numbers rather than one conflated figure). Wrote
  `vault/Validation/Lessons_Learned_Phase7.md` and `vault/Architecture/Pilot_Validation_Plan.md`
  (Pilots 2–4: Sections 2, 9, 10, each targeting one specific open question from Pilot 1 — explicitly
  not a jump to drafting the remaining Business Plan). Work done on branch `feature/agentic-os-v2`,
  merged to `main` on explicit authorization.
- 2026-07-22 — Session 5: ran Pilot 2 (Section 2, Business Description) — the first pipeline run using
  genuinely top-level-invoked specialist agents throughout (Architecture v2's Change 1), confirming the
  fix works. Produced the project's first real, human-confirmed strategic Decision (`DEC-003`, via a
  genuine `AskUserQuestion` escalation) after `decision-steward` correctly detected it could not obtain
  that consent from inside a subagent thread — a second real runtime finding, same constraint class as
  Phase 7's `Agent`/`WebSearch`/`WebFetch` discovery, requiring no new architecture change. The
  resulting genuinely-independent Stage 11 QA pass caught and drove the fix of a real cross-section
  defect in Section 3. See `vault/Validation/Pilot2_Execution_Report_Section_02.md`. Work done on
  branch `feature/bp-pilot-sections`, not merged to `main`.
- 2026-07-22 — Session 6: ran Pilot 3 (Section 9, Financial Plan) — the first real test of the Forecast
  Layer. `forecasting-agent` and `kpi-agent` both ran for the first time, building `Value_Driver_Tree.md`,
  `Scenarios.md`, and `KPI_Tree.md` from empty scaffolds. `decision-steward` resolved two new Decisions
  without escalation, including a genuine finding that the 2026 investment-total conflict — carried since
  corpus ingestion as one of three "unreconcilable" discrepancies — is actually reconcilable once its
  primary source is re-read directly. The project's first complete fail/fix/independently-re-verified
  cycle: a genuinely separate Stage 11 QA thread issued a real FAIL (missing revenue figure, missing P&L
  projection), both gaps were fixed from already-Approved components, and a fresh agent thread
  independently confirmed the fix. Section 9 reached ✅ Done (independently verified). See
  `vault/Validation/Pilot3_Execution_Report_Section_09.md`. Work done on branch
  `feature/bp-pilot-sections`, not merged to `main`.
- 2026-07-22 — Session 7: ran Pilot 4 (Section 10, Risk Analysis) — redefined mid-flight, on explicit
  instruction, from a narrow two-pass-QA test into a full-system operational-stability question. A
  pre-execution integrity audit of Pilots 1–3's output found and fixed 2 real defects and correctly
  flagged 1 false positive. Section 10 was drafted as a deliberate cross-subsystem integration test and
  underwent this project's first citation-audit FAIL (fixed, re-verified) plus the original two-pass QA
  design — two independent threads both failed, converged on two findings, and diverged on a third (Pass
  2 caught an internal MECE contradiction Pass 1 missed), the first concrete proof in this project that a
  second independent pass adds real value beyond formality. Combined fix independently re-verified a
  third time. Section 10 reached ✅ Done (independently verified). The pilot's primary deliverable, a
  full-system stability report, concludes the Agentic OS is operationally stable across 17 real agent
  invocations this session, with only a bounded, non-architectural repository-hygiene gap (now a
  standing process convention). All four Pilot Validation Plan pilots are now complete. See
  `vault/Validation/Pilot4_System_Stability_Report.md`. Work done on branch `feature/bp-pilot-sections`,
  not merged to `main`.

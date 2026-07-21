---
name: business-plan-drafting
description: Draft or update any section of the AI Business Plan (GSB Template v2.0, McKinsey Edition) for the talabat Egypt retention capstone. Encodes the full 14-section structure, every required sub-bullet, every McKinsey Lens requirement (SCQA, Pyramid Principle, MECE, hypothesis-driven analysis, value driver tree, Three Horizons, 7S), and exactly which vault notes feed each section, so drafting is grounded in the existing cited knowledge base rather than free-written. Trigger when drafting, revising, or reviewing any part of the Business Plan, or when the user says "draft the business plan", "work on section N", "/business-plan".
trigger: /business-plan
---

# /business-plan — AI Business Plan Drafting Skill

Draft the AI Business Plan section by section against `AI_Business_Plan_Template.md` (the verbatim,
graded specification — read it in full before drafting anything; this skill summarizes it into a
vault-mapped procedure but is not a substitute for it). Output lands in `Outputs/` per project
convention. Target: 15–25 pages of substance, all 14 sections, PDF or Word, exported from this OS.

## This skill is now the content map for an 11-stage pipeline, not a standalone drafting checklist

As of the Phase 6 architecture design (`vault/Architecture/`), invoking `/business-plan` runs the
`bp-orchestrator` agent through the 11-stage pipeline defined in
[`Business_Plan_Generation_Pipeline.md`](../../../vault/Architecture/Business_Plan_Generation_Pipeline.md).
This file still tells the Orchestrator *which vault notes feed each section* (below) and *what
McKinsey standard to write to* — that hasn't changed. What's new: when this file's "Caution" notes
flag a gap, the pipeline now has somewhere to send it instead of just labeling and proceeding —
external gaps go to the Research Agent (`vault/Research/`), forward-looking numbers go to the
Forecasting Agent (`vault/Forecasts/`), and judgment calls go to the Decision Steward
(`vault/Decisions/`). Every number the drafted section ultimately cites must resolve to a Facts/
Sources citation or an `Approved` row in `vault/Decisions/Assumptions_Register.md` — checked
mechanically by the `evidence-citation-agent` before any section can be marked ✅ Done. See
`vault/Architecture/Agentic_OS_Architecture.md` for the full agent/skill roster this pipeline runs on.

**Current status: design complete, 0 of 14 sections have entered the pipeline.** This skill update
is architecture, not drafting — no Business Plan content exists yet.

**Golden rule:** every claim in the plan must trace to a specific vault note, and every vault note
already traces to a specific source document (`vault/Knowledge/Sources/TLB-XXX...md`, page N). Do not
write a number, a market-share claim, or a competitor fact that doesn't already exist, cited, in the
vault. Where the vault has a real gap (see "Known evidence gaps" below), say so explicitly and either
flag it as an open question or use clearly-labeled synthetic/estimated data per the project's standing
instruction in `CLAUDE.md` — never blend an estimate with a disclosed figure silently.

## McKinsey writing discipline (applies to every section — internalize before drafting)

- **Pyramid Principle** — lead every section with its answer/conclusion, then grouped supporting
  arguments, then evidence beneath. A reader stopping after paragraph one still knows your conclusion.
- **SCQA** — the Executive Summary specifically: Situation → Complication → Question → Answer, Answer
  on page one.
- **MECE** — every breakdown (segments, risks, cost drivers, revenue streams) must have no overlaps
  and no gaps. State explicitly when a breakdown is MECE and why.
- **Hypothesis-driven** — state the governing hypothesis early (Section 2), then every subsequent
  section either proves, refines, or kills it using vault evidence. Don't accumulate data hoping a
  conclusion appears.
- **Value driver logic** — Section 4 (Value Proposition) names the value mechanisms; Section 9
  (Financial Plan) turns them into numbers; Section 13 (KPIs) turns them into metrics. The same 3–5
  mechanisms should be traceable end to end across all three sections — build the tree once, reuse it.
- **Writing discipline** — one message per exhibit; action titles on every chart/table (e.g. "Egypt
  crossed to a standalone profitable segment in FY2025", not "Egypt segment data"); 80/20 depth — go
  deep only where the recommendation actually turns on the detail.

## Vault map — where the evidence already lives

| Layer | Location | Use for |
|---|---|---|
| Source notes (primary, cited) | `vault/Knowledge/Sources/TLB-001...TLB-029` | Pulling an exact figure/quote with its original page citation |
| Facts (topic-consolidated, cited) | `vault/Knowledge/Facts/*.md` | The full cited data series behind a Topic Note's claims |
| Topics (synthesis) | `vault/Knowledge/Topics/*.md` | The narrative-ready synthesis of one business concept — start here, not in raw Facts |
| Entities (rosters) | `vault/Knowledge/Entities/*.md` | Named companies, competitors, executives, products, countries |
| Strategic (cross-cutting argument) | `vault/Knowledge/Strategic/*.md` | Pre-built arguments (value creation, revenue logic, competitive position, risk, growth, retention drivers, AI opportunities) — closest thing to plan prose already written |
| System diagrams | `vault/Knowledge/Relationship_Map.md`, `Business_Relationships.md` | Ready-made Mermaid diagrams and causal chains — reuse or adapt directly for Section 4/8/9 exhibits |
| Domain MOCs | `vault/MOC/*.md` | Navigation — start at `Talabat MOC.md` if unsure where a fact lives |

## The 14 sections — requirements, vault mapping, and drafting notes

### 1. Executive Summary (SCQA — write last, place first)
**Required:** Situation/Complication/Question/Answer; business overview; mission/vision; AI product & target market & value prop; objectives, growth goals, financial/funding summary.
**Draw from:** `Topics/Egypt.md` + `Strategic/Strategic Risks.md` (Situation/Complication) · `Strategic/Future AI Opportunities.md` (the Answer — this is the only note in the vault already written in "this is what we propose" voice, explicitly disciplined about the fact/recommendation boundary) · `Topics/Financial Performance.md` + `Strategic/Cost Structure.md` (financial summary).
**Caution:** write this only after Sections 2–13 exist — SCQA's Answer must reflect the finished plan's actual recommendation, not a guess made on day one.

### 2. Business Description
**Required:** industry overview; MECE problem decomposition; governing hypothesis (`"We believe [AI intervention] will [impact] because [logic]."`); core features/benefits; business model; business stage.
**Draw from:** `Topics/Growth Strategy.md`, `vault/MOC/Market Intelligence MOC.md` (industry overview) · `Strategic/Current Pain Points.md` (already structured as an honest gap roll-up — decompose it MECE into root drivers) · `Strategic/How Talabat Creates Value.md` (business model).
**Caution:** the governing hypothesis does not exist yet anywhere in the vault — it must be authored fresh. `Strategic/Future AI Opportunities.md` is the closest raw material (it already connects the Customer Churn evidence gap + Egypt's newly-profitable-segment status + talabat's own stated AI roadmap) — compress that argument into one sentence.

### 3. Market Analysis
**Required:** top-down + bottom-up market sizing, reconciled; MECE segmentation; SWOT with "so what" per quadrant; competitor benchmarking; untapped-opportunity scan.
**Draw from:** `Topics/Egypt.md` (the central note — Egypt's segment-reporting history, now 3rd-largest market/largest user base) · `Topics/UAE.md` (comparator) · `Topics/Competition.md` + `Strategic/Competitive Advantages.md` + `Strategic/Competitive Weaknesses.md` (SWOT raw material — these two Strategic notes are already framed as the two sides of one argument) · `Entities/Competitors.md` (named rivals: Deliveroo, Careem, noon, Jahez, Snoonu — all from TLB-026 only).
**Caution — real, documented gaps to handle explicitly, not silently:** (1) Egypt's relative category-share figure is **inconsistent across source documents** (10x+ in some, 1x+→4x+ in others) — flagged in both `Topics/Egypt.md` and `Topics/Competition.md`'s Open Questions; resolve against the primary source before citing a single number, or present both with the discrepancy noted. (2) No document in the primary corpus names Egypt-specific competitors (Breadfast, Rabbit, elmenus live only in the separate secondary corpus at `Input_Data/03_Competitors/` — outside this vault's citation regime by deliberate design, see `Topics/Competition.md`). If you cite them, you are stepping outside the audited corpus — say so.

### 4. Value Proposition
**Required:** USP; value creation mechanisms each quantified; customer + P&L impact with ROI logic shown.
**Draw from:** `Strategic/Customer Retention Drivers.md` (already ranks mechanisms by evidence strength: talabat pro > multi-vertical engagement > Rewards > PostPaid > Family Plan, with AI/personalization as the infrastructure multiplier) · `Topics/Talabat Pro.md`, `Topics/Personalization.md`.
**Caution:** every uplift figure behind these mechanisms is Group/GCC-level or explicitly *excludes* Egypt (talabat pro launched in Egypt only Feb 2025) — `Strategic/Customer Retention Drivers.md` already states this upfront as "a working hypothesis imported into Egypt." Carry that same honesty into this section rather than presenting Group figures as Egypt-proven.

### 5. AI Technology and Development
**Required:** AI technology description; build/buy/partner decision with criteria; proprietary IP; infrastructure/tools (incl. agentic tooling/MCP where relevant); scalability; R&D roadmap.
**Draw from:** `Topics/AI.md`, `Topics/Recommendation Systems.md`, `Entities/Technology_Platforms.md` (talabat's stack is licensed from Delivery Hero — a real, citable "partner" data point for the build/buy/partner analysis) · `Strategic/AI Opportunities.md` (talabat's own stated roadmap — evidenced intent, distinct from Section 12's proposed roadmap).
**Note on MCP:** this project's own MCP decision is still undecided (see `MEMORY.md`) — if it stays undecided, don't fabricate an MCP story here; describe the OS's actual tooling honestly instead.

### 6. Business Model and Revenue Streams
**Required:** MECE revenue streams tracing to the value driver tree; pricing strategy; recurring vs. one-time; unit economics.
**Draw from:** `Strategic/Revenue Model.md` (already argues the logic connecting the four revenue streams — commission, delivery/service fees, subscription, advertising — to volume/pricing drivers) · `Facts/Revenue.md` (the full cited revenue-by-stream series) · `Topics/Pricing.md`.
**Caution:** `Strategic/Revenue Model.md` flags an unexplained reclassification in the "Subscription fee & Other Income" line (TLB-011 splits it differently than earlier filings) — note it as an open question rather than picking a number silently.

### 7. Marketing and Sales Strategy
**Required:** positioning incl. what's NOT targeted; acquisition channels with funnel conversion numbers; sales funnel/journey mapping; partnerships; retention tactics.
**Draw from:** `Topics/Customer Journey.md`, `Topics/Promotions.md`, `Strategic/Customer Retention Drivers.md`.
**Caution — genuine gap:** the vault has no funnel-stage conversion data (awareness→trial→conversion percentages) for Egypt or anywhere else — this section will need either clearly-labeled synthetic/estimated funnel assumptions (per `CLAUDE.md`'s synthetic-data standing instruction) or a qualitative-only treatment. Do not invent numbers and cite them as if from the corpus.

### 8. Operations Plan
**Required:** infrastructure needs; dev/maintenance workflow; key roles and skills gap; 7S alignment check; security/compliance.
**Draw from:** `Topics/Corporate Structure.md`, `Strategic/Decision-Making Process.md` (already honest about what the corpus does and doesn't reveal about internal governance/decision mechanics — good raw material for the 7S "Structure/Style/Staff" columns) · `Topics/Logistics.md`, `Topics/Delivery Operations.md` for the operational infrastructure side.
**Caution:** the 7S check itself doesn't exist yet — `Strategic/Decision-Making Process.md` gives you Strategy/Structure/Staff inputs; Systems/Shared Values/Skills/Style need fresh synthesis, honestly marked as team judgment where the corpus is silent.

### 9. Financial Plan
**Required:** value driver tree; investment/opex; 3-scenario revenue forecast (base/upside/downside); break-even/P&L; assumptions register (5–10 numbers); funding needs.
**Draw from:** `Topics/Financial Performance.md`, `Topics/Profitability.md`, `Topics/GMV.md`, `Topics/Revenue Drivers.md`, `Topics/Segment Reporting.md` (Egypt's actual disclosed FY2025 figures: revenue $509.9M, GP $125.0M, net profit $44.4M — the strongest real anchor point for Egypt-specific financials in the entire corpus) · `Strategic/Cost Structure.md` (explicit about how thin granular cost-line detail is — read its caveats before building the cost side of any driver tree).
**Caution — three separate discrepancies already found and documented, must be resolved before citing:** (1) the 2026 investment programme has **three different totals** across source documents (>$100M / ~$120M / ~$175M — see `Strategic/Growth Drivers.md`); (2) no Egypt-specific GMV figure exists anywhere, even post-segment-reporting-change (only revenue/profit are Egypt-disclosed); (3) forward consensus estimates (TLB-027/028) exist only in `Facts/_raw/`, not the consolidated citable layer — cross-check before using.

### 10. Risk Analysis
**Required:** MECE risk categories (technical/market/financial/organizational/regulatory); probability-impact matrix; pre-mortem; mitigation per risk with an owner.
**Draw from:** `Strategic/Strategic Risks.md` (already structured around four clusters: Egypt FX/currency, geopolitical, margin, governance-disclosure) · `Strategic/Competitive Weaknesses.md` (rider-dependency, AdTech under-penetration, regulatory/antitrust exposure, disclosure posture).
**Note:** the pre-mortem and probability-impact matrix are new synthesis — the underlying risk *facts* are ready, the *framework artifacts* aren't built yet.

### 11. Corporate Social Responsibility & Responsible AI
**Required:** ethical AI commitments tied to concrete controls; sustainability; governance structures — each connected to a Section 10 risk or stakeholder expectation.
**Draw from:** thin in this vault — no dedicated ESG/responsible-AI note exists. `Strategic/Decision-Making Process.md` and `Strategic/Strategic Risks.md`'s governance-disclosure risk are the closest anchors. This section will require the most net-new authoring of any section; per the McKinsey Lens, every commitment made here must explicitly cite back to a named Section 10 risk — don't write generic AI-ethics boilerplate.

### 12. Implementation Plan (Three Horizons)
**Required:** H1 (0–6mo quick wins) / H2 (6–18mo core build) / H3 (18mo+ scaling) roadmap; timelines/dependencies; marketing rollout; team expansion.
**Draw from:** `Strategic/AI Opportunities.md` (talabat's own *evidenced* roadmap — natural H1 material) vs. `Strategic/Future AI Opportunities.md` (the capstone's own *proposed* recommendation-space — natural H2/H3 material; note the explicit fact/proposal distinction already built into these two notes, use it as the horizon boundary) · `Topics/Growth Strategy.md` for the "Everyday App" investment sequencing.

### 13. Monitoring and Evaluation
**Required:** KPIs mapped to the value driver tree (CAC, MRR-equivalent, churn, usage); leading vs. lagging split; tracking tools; feedback loops; kill/pivot criteria.
**Draw from:** `Strategic/Customer Retention Drivers.md`, `Topics/Orders.md` (order frequency as a leading indicator), `Topics/Customer Lifetime Value.md`, `Topics/Profitability.md`.
**Caution — the single most important gap in the whole knowledge base for this section:** **no churn rate is disclosed anywhere in the corpus** (`Topics/Customer Churn.md` is synthesized entirely by inference from retention statements). If churn is a headline KPI in this plan, state explicitly that it will be a *newly instrumented* metric under the proposed AI solution, not a reported baseline the corpus already tracks.

### 14. Appendices
**Required:** supporting research/data; traceability note (claim → vault note → source); team resumes; technical specs; case studies; legal/compliance docs.
**Draw from:** `vault/MOC/Source Register.md` (the ready-made document-level index — pairs every Source Note with its raw fact fragment) · `vault/MOC/Validation and Audit.md` (every QC checkpoint run on this vault, useful evidence of citation discipline) · all 29 `Sources/TLB-XXX*.md` notes directly.
**This section is the closest to mechanically ready** — the traceability infrastructure already exists; the work here is compiling the specific claims the finished plan actually makes into a table, not building new evidence.

## Known evidence gaps (repo-wide — consult before drafting, don't rediscover mid-section)

- No churn rate, no absolute LTV figure, and no funnel-conversion data exist anywhere in the corpus.
- Nearly every AI/personalization/talabat-pro uplift statistic is Group-level or explicitly excludes Egypt.
- Three unreconciled internal discrepancies: Egypt category-share (10x+ vs. 1x-4x+), the 2026 investment total (three figures), and a Subscription-revenue-line reclassification.
- No named Egypt-specific competitors exist in the primary (cited) corpus — only in the separate, out-of-regime secondary corpus.

These are not blockers — they're exactly the kind of finding a rigorous plan names openly (per the Guide: "risks named rather than waved away"). Where a plan needs a number the vault doesn't have, use clearly-labeled synthetic/primary-research data per `CLAUDE.md`'s standing instruction, never silently.

## Output & submission requirements (from the Project Guide, not the template)

- 15–25 pages of substance, GSB template structure, PDF or Word, exported to `Outputs/`.
- Include the one-page traceability note as a companion file (or as Appendix content, per Section 14).
- The team owns every sentence — this skill accelerates grounded drafting, it doesn't replace verification. Every claim must be defensible in the live presentation Q&A.

## Anti-patterns

- ❌ Writing a claim not traceable to a specific vault note (and through it, a source document/page).
- ❌ Silently resolving one of the documented internal discrepancies by picking a number — flag it.
- ❌ Presenting Group/GCC-level statistics as if Egypt-proven, when the vault explicitly says otherwise.
- ❌ Building Section 9/13 numbers that don't trace back to the Section 4 value mechanisms.
- ❌ Treating Section 11 (Responsible AI) as boilerplate disconnected from Section 10's actual risks.
- ❌ Drafting the Executive Summary first — it's SCQA's Answer, which requires the rest of the plan to exist.
- ❌ Resolving a flagged gap by drafting around it silently instead of routing it through the
  pipeline's Research/Forecast/Decision stages (see `Business_Plan_Generation_Pipeline.md`).

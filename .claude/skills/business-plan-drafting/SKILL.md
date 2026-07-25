---
name: business-plan-drafting
description: Draft or update any section of the AI Business Plan (GSB Template v2.0, McKinsey Edition) for the talabat Group 2026 capital-allocation capstone (Everyday App vs. Food-leadership investment programme, Group-wide across talabat's eight operating markets, Egypt as worked example). Encodes the full 14-section structure, every required sub-bullet, every McKinsey Lens requirement (SCQA, Pyramid Principle, MECE, hypothesis-driven analysis, value driver tree, Three Horizons, 7S), and exactly which vault notes feed each section, so drafting is grounded in the existing cited knowledge base rather than free-written. Trigger when drafting, revising, or reviewing any part of the Business Plan, or when the user says "draft the business plan", "work on section N", "/business-plan".
trigger: /business-plan
---

# /business-plan — AI Business Plan Drafting Skill

## Mandatory v1.2 preflight

Before reading section evidence or writing prose, load `Business_Plan_Generation_Contract.md`,
`vault/Architecture/Business_Plan_Editorial_Standard.md`, `Problem_Charter.md`,
`AI_Business_Plan_Template.md`, `vault/Architecture/Geographic_Evidence_Rules.md`, and the approved
decisions and assumptions relevant to the section.

The Generation Contract and Editorial Standard are active pipeline inputs, not optional references.
**A section that is factually correct but fails the Editorial Standard is incomplete.** It may not
advance to approval, assembly, or publication.

Draft the AI Business Plan section by section against `AI_Business_Plan_Template.md` (the verbatim,
graded specification — read it in full before drafting anything; this skill summarizes it into a
vault-mapped procedure but is not a substitute for it). Output lands in `Outputs/` per project
convention. Produce all 14 sections in a complete, readable publication. Follow the active template's
page guidance, but never force a page count by truncating sentences, shrinking tables, or removing
necessary evidence and limitations.

**Per-section length guidance (added 2026-07-23 — a soft budget while drafting, not a new gate):** at
~20 pages split across 14 sections, most sections should land around 1–1.5 pages of body prose (plus
tables/exhibits); Sections 2, 3, 4, 9, and 12 (the load-bearing sections named in "Plan of attack"
below) may reasonably run to 2 pages; Section 1 (Executive Summary) should stay under 1.5 pages by
construction (it's a synthesis, not a restatement). This is guidance for the drafting agent to self-pace
against while writing, not a mechanical rule — the only **hard** page-count check remains
`template-compliance-gate`'s check #10, run once at whole-plan scope (Stage 18), which is where a
budget overrun is reviewed. The Editorial Standard controls readability and completeness.

## Mandatory v1.2 drafting rules

- Write for an MBA professor, senior executive, Board reader, and external reader without repository access.
- Use the company-fact, recommendation, and methodology voices defined in the Editorial Standard.
- Keep raw paths, filenames, DEC/ASM codes, and agent/pipeline language out of the main narrative.
- Consolidate the evidence defence into one Evidence Basis and Limitations section.
- Use missing-baseline pilot tables instead of synthetic funnel percentages.
- Keep 10–15 executive KPIs in the body and the complete dictionary in Appendix C.
- Apply the standard Appendix A–G structure.
- Flag sentences above 35 words before sending a section to QA.

**Draft location (2026-07-23 pivot):** working section drafts live at
`vault/Projects/Business_Plan_Drafts_v2/Section_XX_*.md` — the only valid read/write location for
active drafting. **Never read from or write to `vault/Projects/Business_Plan_Drafts/` (no `_v2`
suffix)** — every file there is `superseded: true`, drafted against the retired Egypt-retention
problem; reusing it as a starting point or citation source would leak old-problem content into the
current Group-wide capital-allocation plan.

## This skill is now the content map for an 11-stage pipeline, not a standalone drafting checklist

As of the OS Architecture Design Phase (`vault/Architecture/`), invoking `/business-plan` runs the
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

**The 14-section structure below is an architectural contract, not a drafting suggestion.** Its
count, numbering, titles, and order come directly from `AI_Business_Plan_Template.md` and may only
change if that template itself changes — not during drafting, not during a later publication or
executive-editing pass. `.claude/skills/template-compliance-gate/SKILL.md` enforces this downstream,
immediately before any export; this skill enforces it upstream, by never proposing a different
section map than the one below.

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
**Draw from:** `Problem_Charter.md`'s own "Strategic problem" and "Why this problem matters, and why now" sections (near-publication-ready SCQA raw material — Situation/Complication/Question) · `vault/Decisions/Investment_Portfolio_Register.md` (the disclosed USD175mn = ~USD120mn Everyday App + ~USD55mn Food-leadership envelope — business overview, financial summary) · `vault/Knowledge/Investment_Relationship_Map.md` (the causal chain the Answer must trace, investment → capability → behaviour → GMV → revenue → EBITDA → cash) · `vault/Forecasts/Scenarios_v2.md`'s top-level base case (the only scenario tier `DEC-008` permits as the headline financial summary).
**Caution:** write this only after Sections 2–13 exist — SCQA's Answer must reflect the finished plan's actual recommendation, not a guess made on day one. Do **not** resurrect `Strategic/Future AI Opportunities.md`'s Egypt-only AI-churn-prediction recommendation as the Answer — that note's own thesis line still frames Egypt as "the target of this recommendation," which was the retired problem's scope, not this one's. Its "propose, don't report" voice and explicit fact/recommendation discipline remain a good model to write in; its content is not the new Answer.

### 2. Business Description
**Required:** industry overview; MECE problem decomposition; governing hypothesis (`"We believe [X] will [Y] because [Z]."`); core features/benefits; business model; business stage.
**Draw from:** `vault/Knowledge/Investment_Relationship_Map.md` (the master chain — this is where the governing hypothesis must be compressed from) · `vault/Decisions/Investment_Portfolio_Register.md` (the disclosed USD175mn split — the hypothesis's literal subject) · `vault/Knowledge/Topics/Capital Allocation and Investment Governance.md` (MECE problem decomposition — its own finding that talabat discloses allocation *outputs*, not *mechanics*, is the honest shape of the problem this plan decomposes) · `vault/Knowledge/Topics/2026 Investment Programme.md` (industry-overview / business-model context, incl. the disclosure's own evolution across three documents).
**Caution:** the governing hypothesis does not exist yet anywhere in the vault and must be authored fresh, in the capital-allocation form — e.g. "We believe [an evidence-ranked staging of the USD175mn programme] will [raise GMV/EBITDA/CLV] because [the Investment Relationship Map's capability→behaviour→GMV chain]." Do **not** reuse `DEC-003`'s superseded governing hypothesis (the Egypt-only AI-retention sentence; its Assumption row `ASM-005` is marked `obsolete` in `Assumptions_Register.md`'s Pivot Reclassification table) — it answers a retired question. The MECE decomposition should be honest that talabat's own disclosure is under-specified at the market/initiative level (`Capital Allocation and Investment Governance.md` Open Questions) — the hypothesis should propose a ranked framework to fill that gap, not claim to have reverse-engineered talabat's own logic.

### 3. Market Analysis
**Required:** top-down + bottom-up market sizing, reconciled; MECE segmentation; SWOT with "so what" per quadrant; competitor benchmarking; untapped-opportunity scan.
**Draw from:** `vault/Knowledge/Topics/GCC vs non-GCC.md` (the canonical Group segmentation — GCC 82% of pro-forma FY2025 GMV vs. non-GCC's higher growth rate — now the primary MECE segmentation, not a single-market comparator) · `vault/Knowledge/Topics/Egypt.md` (the worked example within non-GCC — segment-reporting history, third-largest GMV market, largest user base) · `Topics/Competition.md` + `Strategic/Competitive Advantages.md` + `Strategic/Competitive Weaknesses.md` (SWOT raw material, content unchanged, now read at Group/GCC/non-GCC/country level per market rather than Egypt-only) · `Entities/Competitors.md` (named rivals: Deliveroo, Careem, noon, Jahez, Snoonu — all from TLB-026 only) · `vault/Knowledge/Topics/Food Leadership.md` (the competitive-pressure evidence — non-high-value M1 retention -4% y/y — explicitly scoped only to UAE/Kuwait/Qatar, a market-comparison data point, not Group-wide).
**Caution — real, documented gaps to handle explicitly, not silently:** (1) Egypt's relative category-share figure is still **inconsistent across source documents** (10x+ in some, 1x+→4x+ in others) — flagged in both `Topics/Egypt.md` and `Topics/Competition.md`'s Open Questions; present both with the discrepancy noted rather than picking one. (2) No document in the primary corpus names Egypt-specific competitors (Breadfast, Rabbit, elmenus live only in the separate secondary corpus at `Input_Data/03_Competitors/` — outside this vault's citation regime by deliberate design). (3) The Food-leadership competitive-pressure evidence is disclosed only for UAE, Kuwait, and Qatar (`Food Leadership.md` Open Questions) — applying it to Egypt or other non-GCC markets is a labeled extrapolation, per `Geographic_Evidence_Rules.md`, not a directly evidenced parallel. (4) Jordan and Iraq have no individually disclosed GMV/revenue figure anywhere in the corpus — every non-GCC number post-Egypt-carve-out is a Jordan+Iraq combined figure (`GCC vs non-GCC.md` Open Questions) — never attribute a non-GCC statistic to either country by name.

### 4. Value Proposition
**Required:** USP; value creation mechanisms each quantified; customer + P&L impact with ROI logic shown.
**Draw from:** `vault/Knowledge/Investment_Relationship_Map.md` (the mechanism chain — capability → behaviour → frequency → GMV — now the structural basis for "value creation mechanisms each quantified") · `vault/Knowledge/Topics/Multi-Verticality.md` (the strongest single quantified mechanism in the corpus — 13.0x vs. 3.8x order frequency; multi-vertical GMV share rising 68%→73%→76% — the natural anchor node for this section's value driver tree) · `Topics/Talabat Pro.md` + `Strategic/Customer Retention Drivers.md` (the ranked mechanism list — pro > multi-vertical engagement > Rewards/PostPaid > Family Plan, AI/personalization as the infrastructure multiplier — content essentially unchanged, now read as Group/GCC evidence supporting the allocation case rather than an Egypt-import) · `vault/Knowledge/Topics/Customer Economics.md` (the per-customer P&L payoff — the >4x monthly-spend gap between food-only and multi-vertical customers — the clearest "so what for the P&L" quantification) · `vault/Knowledge/Topics/FinTech.md` (PostPaid's 14% frequency uplift, with a directly evidenced non-GCC/Egypt rollout precedent, unlike most other mechanisms in this list).
**Caution:** per `Assumptions_Register.md`'s Pivot Reclassification, `ASM-008`/`ASM-011` (the old Egypt-extrapolation rows built on these same Group/GCC uplift figures) are `requires-revision`, not directly citable as-is — the underlying evidence is legitimate, but must be re-established fresh under the new problem (`ASM-016` already does this for pro/multi-vertical/retention uplift). Every uplift figure behind these mechanisms remains GCC+Jordan-cohort (six markets live before December 2024), explicitly excluding Egypt and Iraq by name (`ASM-016`, Low confidence) — carry that caveat forward exactly as `Customer Retention Drivers.md` already does, now Group-framed rather than Egypt-framed. Basket/AOV (`ASM-015`) is a directional proxy only — zero disclosed AOV figure exists at any geography level — never present it as a measured value-creation number. Per `DEC-008`, the Everyday App vs. Food-leadership 2.2:1 weighting may be *argued narratively* here (this is the section where that argument belongs) but must not be dressed up as a quantified financial exhibit — that's reserved for, and restricted in, Section 9.

### 5. AI Technology and Development
**Required:** AI technology description; build/buy/partner decision with criteria; proprietary IP; infrastructure/tools (incl. agentic tooling/MCP where relevant); scalability; R&D roadmap.
**Draw from:** `Topics/AI.md`, `Topics/Recommendation Systems.md`, `Entities/Technology_Platforms.md` (unchanged — talabat's Delivery Hero-licensed stack remains the citable build/buy/partner anchor) · `Strategic/AI Opportunities.md` (talabat's own stated roadmap — evidenced intent, distinct from Section 12's proposed roadmap) · `vault/Forecasts/Value_Driver_Tree_v2.md` node N-06 (AI/personalisation as a cross-cutting capability embedded in *both* 2026 investment buckets — the clearest evidence for how this capability actually fits the current programme; note the node IDs live in `Value_Driver_Tree_v2.md`, never in `Investment_Relationship_Map.md`, which has no numbered nodes — a Pass 2 review on 2026-07-24 found and fixed this exact mis-attribution in Section 5) and N-09 (the capability's own disclosed EBITDA contribution, a distinct node from N-06).
**Note on MCP:** unchanged — this project's own MCP decision is still undecided (see `MEMORY.md`); if it stays undecided, don't fabricate an MCP story here, describe the OS's actual tooling honestly.
**Caution — new:** N-06 is explicitly *not* named as a separate dollar line within either the ~USD120mn or ~USD55mn bucket (`Investment_Relationship_Map.md`) — do not invent an "AI budget" figure. Describe it as embedded infrastructure whose own EBITDA contribution is disclosed (USD14mn+ FY2024 → USD30mn+ FY2025, `Topics/EBITDA.md`), while its share of either 2026 bucket specifically is not.

### 6. Business Model and Revenue Streams
**Required:** MECE revenue streams tracing to the value driver tree; pricing strategy; recurring vs. one-time; unit economics.
**Draw from:** `Strategic/Revenue Model.md` (unchanged — the four-stream logic connecting commission, delivery/service fees, subscription, advertising to volume/pricing drivers remains valid Group-level evidence) · `Facts/Revenue.md` (the full cited revenue-by-stream series) · `Topics/Pricing.md` · `vault/Knowledge/Topics/Customer Economics.md` (take-rate/fee-mix mechanics, now this section's unit-economics anchor) · `vault/Knowledge/Topics/Grocery and Retail.md` (G&R's structurally lower take rate/margin — directly relevant to unit economics now that G&R is a named, capital-receiving vertical rather than incidental detail).
**Caution:** the unexplained "Subscription fee & Other Income" reclassification (`ASM-013`, marked `still-valid` in the Pivot Reclassification table — a pure Group-level IFRS matter unaffected by the pivot) — cite it exactly as before, an open question, never silently resolved.

### 7. Marketing and Sales Strategy
**Required:** positioning incl. what's NOT targeted; acquisition channels with funnel conversion numbers; sales funnel/journey mapping; partnerships; retention tactics.
**Draw from:** `Topics/Customer Journey.md`, `Topics/Promotions.md`, `Strategic/Customer Retention Drivers.md` (unchanged core evidence, now Group-framed) · `vault/Knowledge/Topics/Food Leadership.md` (management's own stated CVP-over-discounting positioning — "rather than matching competitor discounts and vouchers" — direct, citable support for the plan's own positioning choice, and for naming what is deliberately NOT pursued: price competition) · `vault/Knowledge/Topics/FinTech.md` (talabat's own historical GCC-first-then-Egypt market-sequencing precedent — a usable template for how a Food-leadership or Everyday App initiative might sequence across the remaining non-Egypt, non-GCC markets).
**Caution — genuine gap, unchanged:** no funnel-stage conversion data (awareness→trial→conversion percentages) exists anywhere in the corpus, Group or country level — this section still needs either clearly-labeled synthetic/estimated funnel assumptions (per `CLAUDE.md`'s synthetic-data standing instruction) or a qualitative-only treatment. Do not invent numbers and cite them as if from the corpus.

### 8. Operations Plan
**Required:** infrastructure needs; dev/maintenance workflow; key roles and skills gap; 7S alignment check; security/compliance.
**Draw from:** `Topics/Corporate Structure.md`, `Strategic/Decision-Making Process.md` (unchanged structural evidence — Board composition, Delivery Hero SE officer overlap, the visible venue pattern for how strategic bets get announced) · `vault/Knowledge/Topics/Capital Allocation and Investment Governance.md` (now the central "Systems" input — its own finding that no internal capital-allocation committee, approval threshold, or stage-gate process is disclosed anywhere in the corpus) · `Topics/Logistics.md`, `Topics/Delivery Operations.md` (operational infrastructure).
**Caution:** the 7S check itself still doesn't exist and needs fresh synthesis. For "Systems" specifically: because `Capital Allocation and Investment Governance.md` finds no disclosed internal allocation mechanics, any stage-gate/approval workflow this section proposes for how the USD175mn (or a reallocated version of it) would actually move from decision to funded line item is **this OS's own proposed mechanism**, not a description of talabat's real process — say so explicitly, consistent with the Responsible-AI principle developed in Section 11.

### 9. Financial Plan
**Required:** value driver tree; investment/opex; 3-scenario revenue forecast (base/upside/downside); break-even/P&L; assumptions register (5–10 numbers); funding needs.
**Draw from:** `vault/Forecasts/Value_Driver_Tree_v2.md` (45 nodes — the required investment → capability → behaviour → GMV → revenue → gross profit → EBITDA → cash-flow chain) · `vault/Forecasts/Scenarios_v2.md` (base/upside/downside, anchored to talabat's own disclosed FY2026 guidance range) · `vault/Decisions/Investment_Portfolio_Register.md` (the disclosed envelope — investment/opex — plus its resolved allocation-ranges table, see Caution) · `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md` and `vault/Decisions/Investment_Options_Register.md` (the five ranked candidate options, `OPT-001`–`005`, and the funding-sequence recommendation Section 9/12 must present) · `vault/Decisions/Assumptions_Register.md` `ASM-015`–`ASM-033` (the assumptions register this section's numbers must resolve to, per the file's own "no number may appear in the Business Plan unless..." rule) · `Topics/EBITDA.md`, `Topics/Cash Generation.md` (the disclosed financial spine) · `Topics/GCC vs non-GCC.md` (for any market-tier financial comparison).
**Caution — hard constraint, `DEC-008` (approved 2026-07-23, Option 1):** Section 9's headline financial exhibits must show **only** the Group-level base/upside/downside scenario set from `Scenarios_v2.md`'s top-level section, anchored to talabat's disclosed FY2026 guidance (GMV +11-14% cFX; Revenue +14-17% cFX; Adjusted EBITDA 4.4-4.8% of GMV; FCF 3.2-3.6% of GMV). The Everyday App vs. Food-leadership ~2.2:1 allocation case (`ASM-018`) must be argued **narratively only** (Section 2/4's rationale) — it must never appear as a quantified financial sub-case, headline exhibit, or number adjacent to a quantified exhibit in Section 9 (or, by extension, Section 12/13, per `DEC-008`'s own scope).
**Caution — hard constraint, `DEC-009` (approved 2026-07-23, middle path):** Section 9 (and Section 12) shall state a clear recommended funding sequence across the five investment options, argued on `DEC-009`'s 11-criterion comparison (evidence strength, strategic alignment, execution feasibility, reversibility, scalability, measurement quality, etc.) — this is the plan's actual recommendation, write it with conviction. The `ASM-029`–`033` dollar ranges (and `Investment_Portfolio_Register.md`'s allocation-ranges table built from them) must **never** appear as a headline financial commitment — they may appear only in a clearly-labeled illustrative sensitivity/appendix exhibit (Section 14, or a footnoted supporting exhibit here), and every such appearance must carry the sentence **"This is an Agentic OS analytical recommendation, not a disclosed talabat allocation."**
Further: (1) **no disclosed ROI, payback period, or return figure exists for either investment bucket** — only the cost side (the FY2026 EBITDA margin bridge) is disclosed (`Investment_Relationship_Map.md`, `EBITDA.md`) — do not construct or imply one; (2) `ASM-020`'s ≈USD19.3m Egypt programme-exposure figure is an explicitly labeled illustrative pro-rata proxy (Egypt's ~11.0% revenue share × the full USD175mn) — usable only as a worked-example illustration, never as a disclosed or approved Egypt budget line; (3) no segment-level (GCC/non-GCC/Egypt) EBITDA or cash-generation figure is disclosed anywhere (`EBITDA.md` N-36, `Cash Generation.md` N-41) — any market-tier financial comparison must be built and labeled as an estimate; (4) `ASM-015`–`033` are now `Approved` in `Assumptions_Register.md` (resolved 2026-07-23) and citable, subject to the DEC-008/DEC-009 placement restrictions above.

### 10. Risk Analysis
**Required:** MECE risk categories (technical/market/financial/organizational/regulatory); probability-impact matrix; pre-mortem; mitigation per risk with an owner.
**Draw from:** `Strategic/Strategic Risks.md` (unchanged core clusters — Egypt FX/currency, the Q1 2026 "regional conflict," Group margin compression, unexplained leadership turnover — now read as Group-wide risks with Egypt-specific instances named where the evidence actually supports it) · `Strategic/Competitive Weaknesses.md` (rider-dependency, AdTech under-penetration, regulatory/antitrust exposure, disclosure posture) · `vault/Knowledge/Topics/Capital Allocation and Investment Governance.md` (a distinct, new risk category — the absence of any disclosed internal stage-gate or approval mechanics for the programme itself is an organisational/governance risk to name, not just an evidence gap) · `vault/Knowledge/Topics/Food Leadership.md` (competitive-pressure risk, scoped to UAE/Kuwait/Qatar) · `vault/Forecasts/Scenarios_v2.md`'s downside case (the disclosed Q1 2026 margin-compression trend as the financial-risk evidence base).
**Caution:** the pre-mortem and probability-impact matrix are still new synthesis — framework, not facts. The disclosed margin step-down (6.0%→4.4-4.8% FY2026 guided, already at 4.8% actual in Q1 2026) should be named as a real, evidenced financial risk with a documented trail, not a hypothetical one.

### 11. Corporate Social Responsibility & Responsible AI
**Required:** ethical AI commitments tied to concrete controls; sustainability; governance structures — each connected to a Section 10 risk or stakeholder expectation.
**Draw from:** `vault/Knowledge/Topics/Capital Allocation and Investment Governance.md` (the central anchor — its finding that talabat discloses almost no internal governance mechanics is the evidentiary reason this OS's own proposed controls must be explicit and clearly self-labeled) · `Problem_Charter.md`'s "Role of AI in this plan" section (the Responsible-AI principle stated at charter level: *"The AI does not claim to possess talabat's internal, customer-level data, and its output is not a substitute for management decision-making... gated for human approval before any capital actually moves"*) · `vault/Decisions/Investment_Portfolio_Register.md`'s "Owner" section (the same principle stated operationally: capital-allocation recommendations require human approval before being presented as a Business Plan recommendation) · `Strategic/Strategic Risks.md` (governance/leadership-continuity risk, still relevant).
**Caution:** unlike the retired framing (thin, no dedicated ESG/responsible-AI note), this section now has one concrete, load-bearing anchor — every commitment made here must operationalize the single Responsible-AI control the charter and Decisions layer already establish: **the OS may recommend capital allocation, but must not represent that recommendation as an automatic management decision; major reallocations require human/team approval, and every allocation output is a range or a staged-funding proposal, never a false-precision point figure presented as internally verified.** Tie this explicitly to a named Section 10 risk (governance/leadership continuity, or the false-precision risk `DEC-008` was itself escalated to guard against) — don't write generic AI-ethics boilerplate; this section is the direct governance counterpart to Section 9's `DEC-008` constraint and Section 8's proposed stage-gate mechanism.

### 12. Implementation Plan (Three Horizons)
**Required:** H1 (0–6mo quick wins) / H2 (6–18mo core build) / H3 (18mo+ scaling) roadmap; timelines/dependencies; marketing rollout; team expansion.
**Draw from:** `vault/Decisions/Investment_Portfolio_Register.md` (the disclosed envelope, and its explicit statement that no pilot-funding/reserve/reallocation-pool mechanism exists yet — this is where the OS proposes one) · `vault/Decisions/Investment_Options_Register.md` (currently scaffolded and empty by design — Section 12 drafting is where the first `OPT-` candidate-option records get populated, not before) · `vault/Forecasts/Scenarios_v2.md`'s eight scenario modules (talabat pro/loyalty, multi-vertical adoption, AI personalisation, targeted incentives, advertising, grocery & retail, Food-leadership, logistics — sequence horizons by each module's own stated confidence: Medium-confidence base cases riding strong observed trends, e.g. multi-vertical adoption and talabat pro, are the natural H1 quick wins; Low-confidence, thinly-evidenced modules, e.g. logistics, belong later or as monitoring-only) · `Topics/Everyday App.md` + `Topics/Food Leadership.md` (the two disclosed buckets as the sequencing spine, replacing the old Egypt-pilot-first structure).
**Caution:** this section must not become the place `DEC-008`'s Section 9 restriction gets silently reintroduced — the Everyday App/Food-leadership 2.2:1 weighting may be discussed narratively (why Everyday App is sequenced where it is relative to Food-leadership) but Section 12's own timeline/milestone exhibits must stay consistent with Section 9's base-case-only headline framing, since `DEC-008` explicitly governs "Section 9 (and by extension the Section 12/13 KPIs that trace to it)." Egypt appears in H1 only as a worked example (e.g. using `ASM-020`'s ≈USD19.3m proxy, explicitly labeled as illustrative), never as the plan's default primary pilot market — any market-sequencing choice should be argued from evidence (e.g. `FinTech.md`'s GCC-first-then-Egypt precedent, or `Growth Drivers.md`'s non-GCC growth-premium argument), not assumed.
**Caution — `DEC-009` (approved 2026-07-23, middle path):** this is the section that actually operationalizes the recommended funding sequence into a Three Horizons roadmap — H1/H2/H3 placement of `OPT-001`–`005` should follow `DEC-009`'s tiering (OPT-002/OPT-003 as near-term H1 priority; OPT-001/OPT-005 continue-at-pace; OPT-004 as the longer-horizon H2/H3 build), argued narratively on the same 11-criterion basis. If a milestone exhibit shows dollar figures from `ASM-029`–`033`, it must carry the same mandatory disclosure sentence as Section 9 ("Agentic OS analytical recommendation, not a disclosed talabat allocation") and stay out of the headline roadmap graphic — put it in a supporting table, not the primary timeline visual.

### 13. Monitoring and Evaluation
**Required:** KPIs mapped to the value driver tree (CAC, MRR-equivalent, churn, usage); leading vs. lagging split; tracking tools; feedback loops; kill/pivot criteria.
**Draw from:** `vault/Forecasts/KPI_Tree_v2.md` (the full 50-KPI, 5-family structure — Portfolio / Customer & growth / Financial / Operational / Governance — replacing the old 16-KPI tree wholesale) · `vault/Knowledge/Topics/Capital Allocation and Investment Governance.md` (the evidentiary basis for the Governance family specifically).
**Caution — the two most important gaps for this section:** (1) **the entire Governance family (7 KPIs, G1-G7) is newly-instrumented — talabat discloses zero internal governance mechanics, so none of these KPIs has a corpus baseline**; any stage-gate percentage, reallocation threshold, ROI hurdle rate, or approval-cycle-time target this section proposes is this OS's own recommended mechanism, not a description of talabat's actual process. (2) Churn (`KPI_Tree_v2.md`'s C12) remains, as before, the single biggest customer-side gap — no churn rate, definition, or cohort analysis exists anywhere in the corpus, Group or Egypt — state explicitly that it becomes a metric the programme must *start* measuring from zero, not one it improves against a known baseline. No numeric target may be assigned to any of the 20 newly-instrumented KPIs without a dedicated Decision Log entry — this section states the framework and review cadence, it does not invent thresholds.

### 14. Appendices
**Required:** supporting research/data; traceability note (claim → vault note → source); team resumes; technical specs; case studies; legal/compliance docs.
**Draw from:** `vault/MOC/Source Register.md` (the ready-made document-level index — pairs every Source Note with its raw fact fragment) · `vault/MOC/Validation and Audit.md` (every QC checkpoint run on this vault) · all 29 `Sources/TLB-XXX*.md` notes directly — unchanged, still the ready-made traceability infrastructure · now also `vault/Decisions/Assumptions_Register.md` (the full `ASM-015`–`033` set), `vault/Forecasts/Value_Driver_Tree_v2.md`, `Scenarios_v2.md`, and `vault/Forecasts/KPI_Tree_v2.md` as the new forecast-layer artifacts the traceability table must fold in.
**This section is still the closest to mechanically ready** — the traceability infrastructure already exists; the work here is compiling the claims the finished (new-problem) plan actually makes into a table, now pointing at the v2 forecast files and the new Topic Notes rather than the superseded v1 set.
**Also the designated home for `DEC-009`'s allocation-range sensitivity exhibit:** the full `OPT-001`–`005` base/upside/downside table from `Investment_Portfolio_Register.md` belongs here (or as a footnoted supporting exhibit in Section 9/12) — never in the Section 9/12 headline case. Reproduce it with the mandatory disclosure sentence attached exactly once, at the top of the exhibit: **"This is an Agentic OS analytical recommendation, not a disclosed talabat allocation."**

## Known evidence gaps (repo-wide — consult before drafting, don't rediscover mid-section)

- **No disclosed market-level breakdown of the USD175mn programme, at any granularity** — not by country, not by GCC/non-GCC, not for Egypt standalone. This is the single largest gap the whole plan works around (`Topics/GCC vs non-GCC.md`, `Topics/Capital Allocation and Investment Governance.md`, `Investment_Portfolio_Register.md`'s own "Market-level logic" section).
- **No disclosed ROI, payback period, or return figure for either investment bucket** — talabat discloses the cost side (the FY2026 Adjusted EBITDA margin bridge, ≈-0.7pp Everyday App / ≈-0.5pp Food-leadership) but not a quantified GMV or EBITDA return (`Investment_Relationship_Map.md`, `Topics/EBITDA.md`).
- **No disclosed internal capital-allocation governance mechanics** — no committee, approval threshold, stage-gate process, or description of how a specific initiative moves from proposal to funded line item (`Topics/Capital Allocation and Investment Governance.md`). Any stage-gate/KPI framework this plan proposes (Sections 8, 11, 12, 13) is the capstone's own construction, never a description of talabat's actual process.
- **No churn rate and no absolute LTV figure exist anywhere in the corpus, Group or Egypt** — carried forward unchanged from the retired problem, now confirmed a Group-wide gap, not an Egypt-specific one (`Topics/Customer Churn.md`, `KPI_Tree_v2.md` C12).
- **Nearly every pro/retention/multi-vertical uplift statistic is a GCC+Jordan cohort figure (six markets live before December 2024), explicitly excluding Egypt and Iraq by name** — any Egypt or non-GCC application is a labeled inference (`ASM-016`), never a disclosed figure for those markets.
- **No segment-level (GCC/non-GCC/Egypt) Adjusted EBITDA or cash-generation figure is disclosed anywhere** — only Revenue, Gross Profit, Profit Before Tax, and Net Profit are disclosed at the Egypt segment level (`Topics/EBITDA.md`, `Topics/Cash Generation.md`).
- **Egypt's specific exposure to the 2026 programme (≈USD19.3m, `ASM-020`) is an illustrative pro-rata proxy, not a disclosed or approved budget line** — usable only as a labeled worked example.
- **No disclosed rationale for the ~2.2:1 Everyday App : Food-leadership weighting**, despite Food still driving the majority of Group GMV — a real, quantifiable tension the plan should engage with, not resolve silently (`Topics/Food Leadership.md`).
- Three unreconciled or evolving disclosure issues carried forward from the retired problem, still live: the 2026 investment-figure's progressive sharpening across documents (Feb 2026's ">USD100mn" vs. May 2026's precise 120mn+55mn=175mn split — see `Topics/2026 Investment Programme.md`'s disclosure trace, now understood as sharpening over time, not an unreconciled contradiction), Egypt's inconsistent category-share figure (10x+ vs. 1x+→4x+), and the Subscription-revenue-line reclassification (`ASM-013`).
- No named Egypt-specific competitors exist in the primary (cited) corpus — unchanged; only in the separate, out-of-regime secondary corpus.

These are not blockers — say so openly, per the Guide's "risks named rather than waved away" standard and per `Problem_Charter.md`'s own evidence-limitations section, which anticipates exactly this: *"Exact optimal allocations cannot be proven from public data alone... recommendations are expressed as ranges and staged-funding proposals."* Where a plan needs a number the vault doesn't have, use clearly-labeled synthetic/primary-research data per `CLAUDE.md`'s standing instruction, never silently.

## Output & submission requirements (from the Project Guide, not the template)

- 15–25 pages of substance, GSB template structure, PDF or Word, exported to `Outputs/`.
- Include the one-page traceability note as a companion file (or as Appendix content, per Section 14).
- The team owns every sentence — this skill accelerates grounded drafting, it doesn't replace verification. Every claim must be defensible in the live presentation Q&A.

## Anti-patterns

- ❌ Writing a claim not traceable to a specific vault note (and through it, a source document/page).
- ❌ Presenting a Group- or GCC-level figure as if it were measured for Egypt (or any other single
  market) without the `inferred-applicability` label `Geographic_Evidence_Rules.md` requires — this is
  the pivot's single most likely failure mode (see that file's named Failure Patterns).
- ❌ Using "MENA" as a stand-in for talabat's own eight-market footprint, or treating "non-GCC" as a
  synonym for "Egypt."
- ❌ Mixing pre-FY2025 non-GCC figures (which include Egypt) with post-FY2025 non-GCC figures (which
  exclude Egypt) without flagging the segment-reporting change.
- ❌ Showing the Everyday App vs. Food-leadership ~2.2:1 split (`ASM-018`) as a quantified headline
  financial sub-case anywhere in Section 9, 12, or 13 — `DEC-008` restricts it to narrative use only.
- ❌ Citing an Assumption Register row's status incorrectly — check `Assumptions_Register.md` directly
  rather than assuming; as of 2026-07-23 all of `ASM-015`–`033` are `Approved`, but a future row may not
  be.
- ❌ Presenting a country-level, GCC/non-GCC-level, or initiative-level allocation split as if it were
  disclosed by talabat, when no such split exists anywhere in the corpus — allocation recommendations
  are always ranges or staged proposals, per `Problem_Charter.md`'s own evidence-limitations section.
- ❌ Showing `ASM-029`–`033`'s OPT-level dollar ranges as a headline financial commitment anywhere in
  Section 9 or 12, or omitting the mandatory disclosure sentence when they do appear in a Section
  9/12/14 sensitivity exhibit — `DEC-009`'s middle-path resolution requires both.
- ❌ Refusing to state a recommended funding sequence at all — `DEC-009` requires the plan to commit to
  one narratively; "present the ranking without a recommendation" was the option explicitly *not*
  chosen.
- ❌ Representing the OS's capital-allocation recommendation as an automatic management decision —
  human/team approval of major reallocations is mandatory (the Responsible-AI principle Section 11
  must operationalize).
- ❌ Describing this OS's own proposed governance controls (stage-gates, KPI thresholds, reallocation
  triggers) as if they were a documented talabat process, when `Capital Allocation and Investment
  Governance.md` establishes no such process is disclosed.
- ❌ Building Section 9/13 numbers that don't trace back to a named `Value_Driver_Tree_v2.md` node ID.
- ❌ Treating Section 11 (Responsible AI) as boilerplate disconnected from Section 10's actual risks.
- ❌ Drafting the Executive Summary first — it's SCQA's Answer, which requires the rest of the plan to exist.
- ❌ Resolving a flagged gap by drafting around it silently instead of routing it through the
  pipeline's Research/Forecast/Decision stages (see `Business_Plan_Generation_Pipeline.md`).

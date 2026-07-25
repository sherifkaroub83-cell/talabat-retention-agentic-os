---
section: 5
title: AI Technology and Development
status: "Done (independently verified) — merged 2026-07-25, both verification lineages combined: (a) Pass 2 fix cycle 2026-07-24 → independent re-verification double-PASS 2026-07-25 ([[Citation_Audit_Section_05_v2_pass2_reverify]], [[QA_Review_Section_05_v2_pass2_reverify]]); (b) Pass 2/Pass 3 fixes and Pass 4 closure audit completed 2026-07-24 ([[Citation_Audit_Section_05_v2_Pass2]], [[Citation_Audit_Section_05_v2_Pass3]]) — DEC-009 correctly treated as resolved initiative-level sequencing while cross-market allocation remains open, and the EBITDA contribution resolves to Facts/AI_Facts.md (TLB-001 p.23; TLB-002 p.16) / Topics/AI.md / N-09. Lineage (b)'s 'MCP undecided' row superseded — DEC-011 approved 2026-07-24, read-only vault-mcp registered in .mcp.json (see §5.4 and Merge note)"
pipeline_run: 2026-07-23
fix_cycle: "2026-07-24"
supersedes_note: "Companion to (not a replacement of) vault/Projects/Business_Plan_Drafts/Section_05_AI_Technology_and_Development.md (superseded Egypt-retention draft, untouched). Fresh draft for the 2026-07-23 pivot."
---

# 5. AI Technology and Development

> **Pipeline provenance note:** Phase 9 pilot draft, revised in the 2026-07-24 post-Pass-2 fix
> cycle. Evidence from `Topics/AI.md`, `Topics/Recommendation Systems.md`,
> `Entities/Technology_Platforms.md`, `Strategic/AI Opportunities.md`, and
> `vault/Forecasts/Value_Driver_Tree_v2.md` node N-06 (with
> `vault/Knowledge/Investment_Relationship_Map.md` as narrative provenance — that note carries no
> numbered nodes), per `.claude/skills/business-plan-drafting/SKILL.md`'s remapped and corrected
> (2026-07-24) Section 5 entry. Two distinct AI technologies are in scope here and kept explicitly
> separate throughout: (1) talabat's own embedded AI/personalisation capability, which the 2026
> investment programme scales, and (2) the AI-enabled decision-support system this plan itself
> proposes for ranking and monitoring the programme's allocation — this OS. Per the content map's
> caution, no "AI budget" figure is invented for either — N-06 is explicitly not a discrete dollar
> line in either bucket (its own EBITDA contribution is separately disclosed at N-09). **Status:**
> independent Pass 2 citation audit and QA review completed 2026-07-24 (both FAIL —
> `Citation_Audit_Section_05_v2_pass2.md`, `QA_Review_Section_05_v2_pass2.md`); all hard/blocking and
> soft/non-blocking findings resolved in this revision (see Fix record below), and independent
> re-verification of both returned PASS on 2026-07-25
> (`Citation_Audit_Section_05_v2_pass2_reverify.md`, `QA_Review_Section_05_v2_pass2_reverify.md`).
> A parallel lineage's Pass 2/Pass 3 audits ([[Citation_Audit_Section_05_v2_Pass2]],
> [[Citation_Audit_Section_05_v2_Pass3]]) independently found and fixed the same core defects
> (N-06/N-09 node mix-up, the Value_Driver_Tree_v2.md-vs-Investment_Relationship_Map.md attribution
> error, the 7-of-8-countries overstatement) — reconciled in the Merge note (2026-07-25) below.

## Answer, stated first

talabat does not need to build a new AI capability to execute this plan's core recommendation — the
customer-facing AI capability (recommendation ranking, offer timing, dispatch optimisation) it will
scale via the 2026 investment programme already exists as a **hybrid**: a logistics/dispatch stack
licensed from parent Delivery Hero SE (dispatch algorithms, real-time GPS tracking, rider staffing,
picking tools — TLB-001, TLB-026, via `Entities/Technology_Platforms.md`) plus talabat's **own
proprietary personalisation and ranking algorithm** (TLB-001, page 23), together generating a growing,
company-estimated EBITDA contribution (**Group**; >USD14mn FY2024 → >USD30mn FY2025; TLB-001, page 23;
TLB-002, page 16 — via `Topics/AI.md` / `Facts/AI_Facts.md`; consolidated at
`vault/Forecasts/Value_Driver_Tree_v2.md` node N-09). What this plan adds is a second, distinct
AI-enabled capability that talabat does *not* yet disclose having: a structured decision-support layer
for ranking and monitoring how the investment programme itself gets allocated. This section describes
both, keeps them clearly separate, and does not invent a budget figure for either that the corpus
doesn't disclose.

## 5.1 Description of AI Technology

The two-capability split is MECE: talabat's embedded customer-facing AI and this plan's
decision-support AI have distinct owners (talabat's product/tech organisation vs. this plan's
governance process), distinct users (customers and riders vs. the allocation decision-makers), and
distinct funding logic (the disclosed 2026 programme's opex vs. this plan's own build), and together
they exhaust the AI in this plan's scope — no capability discussed anywhere in this plan falls outside
these two.

**talabat's embedded AI (scaled by the investment programme):** machine-learning-driven personalisation
(item-level and cuisine-level recommendation ranking), offer/promotion timing (triggering talabat pro
and Rewards offers), and logistics dispatch optimisation — described in the corpus as producing
"AI-driven logistics improvements" credited with delivery-time and cost-efficiency gains (**Group**;
TLB-001, page 10) and personalisation credited with timing loyalty offers "at the right time for
customers" (`Topics/AI.md`; `Topics/Recommendation Systems.md`).

**This plan's decision-support AI (the Agentic OS):** a structured, multi-agent system that assembles
disclosed evidence, ranks candidate Investment Options against explicit criteria
(`vault/Architecture/Decision_Management_Layer.md`), builds range-bound financial scenarios rather than
point forecasts, and maintains a monitored KPI tree — the system that produced this plan's own
`OPT-001`–`005`, `DEC-009`, `Value_Driver_Tree_v2.md`, and `KPI_Tree_v2.md` artifacts. This
decision-support layer is the direct subject of Section 2.3's governing hypothesis — that applying an
AI-enabled, evidence-ranked, stage-gated allocation and monitoring framework to the disclosed USD175mn
programme raises its realized contribution versus an unranked allocation — while the embedded
capability's scaling enters that hypothesis through `OPT-005` and node N-06. This is a decision-support
tool, not a customer-facing product — its output requires human approval before any capital moves (see
Section 11).

## 5.2 Build / Buy / Partner Decision — Structured Options Analysis

**talabat's embedded AI capability:** a **hybrid of partner and build** — the logistics/dispatch layer
(dispatch algorithms, real-time GPS tracking, rider staffing algorithm, picking tools) is licensed from
Delivery Hero SE, the parent company (TLB-001, TLB-026, via `Entities/Technology_Platforms.md`), while
the personalisation/ranking layer — the very asset carrying the EBITDA-contribution trail above — is
talabat's **own proprietary build** (TLB-001, page 23). The 2026 investment programme's Everyday App
opex allocation (~USD75mn; **Group**; TLB-020, page 16) funds *scaling* this existing capability (more
markets, more inventory, deeper personalisation), not building a new one from scratch — noting that per
N-06 and `OPT-005` the capability is embedded across **both** investment buckets (primarily the
Everyday App opex line, with a lesser Food-leadership component), so the ~USD75mn line is its primary,
not exclusive, funding home. The build/buy/partner decision for the underlying technology was
effectively made before this programme existed, and this plan does not propose revisiting it.

**Decision-support AI (this plan's own recommendation):** a **build** decision. Applying the template's
required criteria — cost, speed, capability fit, and data confidentiality — to the three options for a
system whose task is ranking five candidate options against a bounded, disclosed corpus:

| Criterion | **Build** (chosen — this OS) | Buy (third-party portfolio/allocation platform) | Partner (external analytics firm) |
|---|---|---|---|
| Cost | Low — assembled from existing agentic tooling over the project's own corpus; no licence or engagement fees | Higher — platform licence purchased for a scale and generality the five-option task does not require | Higher — recurring engagement fees for each allocation/monitoring cycle |
| Speed | Fast — operational within the capstone timeline; has already produced `OPT-001`–`005`, `DEC-009`, and the Forecast/KPI trees | Slower — procurement, onboarding, and corpus ingestion precede any first output | Slower — scoping and knowledge transfer precede any first output |
| Capability fit | High — purpose-built for evidence-tiered ranking with full citation traceability and geographic-evidence discipline, which is the task | Low-to-moderate — generic portfolio tooling; the citation-traceability and evidence-governance discipline would still have to be built around it | Moderate — strong generic analytics, but the evidence-governance conventions would live outside the process being governed |
| Data confidentiality | High — operates only on the project's corpus and internal decision records, inside the project boundary | Moderate — corpus, decision records, and working assumptions loaded into a third-party platform | Lower — decision rationale and working assumptions shared with an external firm |

Ratings are qualitative, grounded in the disclosed license relationship, the bounded five-option scope,
and this OS's own demonstrated artifacts — no cost or timing figures are invented. Build dominates on
capability fit and confidentiality and is not dominated on cost or speed, because the underlying task
(ranking a small number of options against a disclosed, bounded corpus) does not require the scale or
generality a purchased platform or external partner would offer. The decision should be revisited if
the programme's evaluation scope grows materially beyond the current five candidate options.

## 5.3 Proprietary Algorithms, Data Models

The corpus names one proprietary asset for talabat's embedded AI capability: a "Proprietary
personalisation and ranking algorithm" — talabat's own ML-based recommendation system (TLB-001,
page 23; `Entities/Technology_Platforms.md`). It is, however, described only functionally (what it
does: ranking, timing, dispatch) — no architecture, model detail, or patent is disclosed
(`Topics/AI.md`'s Open Questions). This plan's decision-support system is not a novel algorithm
either — it is a structured evidence-ranking and citation-traceability *process*
(`vault/Architecture/Decision_Management_Layer.md`'s 11-criterion framework;
`vault/Architecture/Geographic_Evidence_Rules.md`'s tagging discipline), not a proprietary model.
Beyond the named personalisation/ranking algorithm, neither technology in scope here claims IP this
plan can quantify or protect.

## 5.4 Infrastructure and Tools

talabat's own infrastructure is not itemized in the corpus beyond the Delivery Hero licensing
relationship. This plan's decision-support system runs on Claude Code / Cowork (documented in
`MEMORY.md`'s LLM decision log), with the vault-based knowledge/decision/forecast architecture described
throughout `vault/Architecture/`. **MCP note:** the OS's agentic-tooling/MCP question is now decided —
`DEC-011` (approved 2026-07-24) resolved it by building a **read-only MCP layer**: the `vault-mcp`
server (`scripts/vault_mcp/server.py`, registered project-locally in `.mcp.json`) exposes pipeline
status, Decision/Assumption/Option lookups, Facts search, and Forecast-layer structures as query-only
tools. The surface is deliberately read-only so it can never bypass the pipeline's evidence and
approval gates — a tool answer is a pointer to governed records, never a new evidence tier — which
reinforces the human-approval discipline described in Section 11 rather than working around it. The
OS's agents themselves remain invoked via the pipeline in `Business_Plan_Generation_Pipeline.md`.

## 5.5 Scalability and Adaptability

talabat pro — the subscription product whose offers the embedded AI capability times — is available in
seven of the eight countries following the **February 2025** Egypt launch, with Iraq the exception at
that date (TLB-001, pages 11-12); at end-2024 the count was six of eight (TLB-015, page 77). The
corpus evidences *product availability* by market, not an AI-deployment-by-market map — so the claim
that the embedded AI capability has demonstrated multi-market scalability is an **analytical
inference** from talabat pro's footprint, labeled as such here, not a disclosed fact. On that inferred
basis, the investment programme's opex allocation extends existing multi-market reach rather than
building new scalability. This plan's own decision-support system is currently scoped to five
candidate Investment Options and the 14 Business Plan sections drafted as of 2026-07-24 (the
2026-07-23 pilot run covered six) — still genuinely narrow. Its adaptability is structural, not yet
demonstrated at scale: the same Investment Option schema, 11-criterion comparison, and Geographic
Evidence Rules discipline would extend to additional candidate initiatives or future investment
programmes without a redesign, but this has not been tested against a larger option set.

## 5.6 Research and Development Plans

For talabat's embedded AI: `Strategic/AI Opportunities.md` names talabat's own stated Group roadmap items
(evidenced intent) — this plan does not add new customer-facing AI R&D beyond what talabat has already
disclosed, since the programme's opex allocation is described as scaling, not inventing, capability. For
this plan's decision-support system: the two largest open R&D items are (1) resolving the cross-market
allocation question (problem 3 in Section 2.2 — a disclosure gap in the corpus itself, distinct from
`DEC-009`, which is already resolved (approved 2026-07-23) and settles a different question:
initiative-level funding sequence and allocation-range presentation within each bucket, problem 2) as
better country-level evidence becomes available, and (2) instrumenting the KPI Tree's Governance
family (currently 7/7 newly-instrumented KPIs
with no baseline) so future allocation rounds can be evaluated against real performance data rather than
constructed ranges alone.

---

## Traceability (partial — full table due at Section 14)

| Claim | Source |
|---|---|
| AI-driven logistics improvements credited with delivery-time/cost gains | Group; TLB-001, page 10 |
| Logistics/dispatch stack (dispatch, GPS tracking, rider staffing, picking) licensed from Delivery Hero SE | `Entities/Technology_Platforms.md` (TLB-001, TLB-026) |
| Proprietary personalisation and ranking algorithm — talabat's own build | TLB-001, page 23; `Entities/Technology_Platforms.md` |
| AI/personalisation company-estimated EBITDA contribution USD14mn+ → USD30mn+ | Group; TLB-001, page 23; TLB-002, page 16 — via `Topics/AI.md` / `Facts/AI_Facts.md`; `Value_Driver_Tree_v2.md` N-09 |
| Embedded capability not a discrete dollar line in either bucket; cross-cutting both | `Value_Driver_Tree_v2.md` N-06; `Investment_Relationship_Map.md` ("What this note deliberately does not claim") |
| ~USD75mn Everyday App opex allocation | Group; TLB-020, page 16 |
| talabat pro in 7/8 countries following the Feb 2025 Egypt launch; 6/8 at end-2024 | TLB-001, pages 11-12; TLB-015, page 77 |
| MCP layer decided and built — read-only `vault-mcp` server | `DEC-011` (approved 2026-07-24); `.mcp.json` |

## Fix record (2026-07-24, post-Pass 2)

Applied against `Citation_Audit_Section_05_v2_pass2.md` (HF-1–HF-8, S-1–S-4) and
`QA_Review_Section_05_v2_pass2.md` (B1–B6, NB-1–NB-4). B2=HF-1, B3=HF-2, B4=HF-6, B5=HF-3.

- **HF-1 / B2** — Provenance note and traceability row retargeted: N-06 now cited to
  `vault/Forecasts/Value_Driver_Tree_v2.md` (which holds the numbered nodes), with
  `Investment_Relationship_Map.md`'s "What this note deliberately does not claim" as the secondary
  anchor for the not-a-dollar-line substance.
- **HF-2 / B3** — EBITDA trail re-cited to node N-09 with the correct source path: (Group; TLB-001,
  page 23; TLB-002, page 16 — via `Topics/AI.md` / `Facts/AI_Facts.md`); `Topics/EBITDA.md` citation
  removed everywhere.
- **HF-3 / B5** — §5.5 and traceability re-dated: 7-of-8 now tied to the February 2025 Egypt launch
  (TLB-001, pages 11-12), end-2024 correctly stated as 6-of-8 (TLB-015, page 77); the claim is framed
  as talabat pro *availability*, with the personalisation-deployment framing dropped.
- **HF-4** — §5.3 rewritten: the corpus's named "Proprietary personalisation and ranking algorithm"
  (TLB-001, page 23) is acknowledged; what remains undisclosed is architecture/model detail/patents.
- **HF-5** — Blanket "licensed from Delivery Hero" replaced throughout (Answer, §5.2, traceability)
  with the hybrid classification: DH-licensed logistics/dispatch stack (TLB-001, TLB-026) plus
  talabat-proprietary personalisation/ranking (TLB-001, page 23).
- **HF-6 / B4** — §5.4 and traceability rewritten against `DEC-011` (approved 2026-07-24): read-only
  `vault-mcp` server built and registered in `.mcp.json`; query-only surface framed as reinforcing the
  pipeline's gates. (The stale `MEMORY.md` line was corrected separately, outside this draft.)
- **HF-7** — "six pilot Business Plan sections" updated to the 14 sections drafted as of 2026-07-24,
  with the pilot-era count date-stamped.
- **HF-8** — ~USD75mn Everyday App opex figure now cited (Group; TLB-020, page 16) in §5.2 and the
  traceability table.
- **S-1 / NB-2** — Inline **(Group)** geography tags added to the 14→30mn trail, the ~USD75mn figure,
  and §5.1's logistics claim.
- **S-2** — "disclosed" EBITDA contribution reworded to "company-estimated" (Answer, §5.2 reference,
  traceability).
- **S-3** — §5.5's multi-market scalability claim explicitly labeled an analytical inference from
  product availability, not a disclosed AI-deployment fact.
- **S-4** — §5.6 reworded: `DEC-009` is approved; what remains open is its residual evidence gap
  (problem 3 in Section 2.2), not the decision itself.
- **B1** — Satisfied by the pipeline, not a draft edit: the Pass 2 citation audit
  (`Citation_Audit_Section_05_v2_pass2.md`) is now on file as the v2 audit artifact; provenance note
  updated to reference both Pass 2 artifacts and the required re-audit.
- **B6** — Explicit criteria comparison table added to §5.2 (cost / speed / capability fit / data
  confidentiality × build / buy / partner) with qualitative ratings grounded only in the disclosed
  license relationship, the proprietary build, the bounded five-option scope, and the OS's own
  artifacts; revisit trigger retained.
- **NB-1** — §5.2 caveat added: the embedded capability is cross-cutting both buckets (primarily
  Everyday App opex, lesser Food-leadership) per N-06 / `OPT-005`; ~USD75mn is its primary, not
  exclusive, funding home.
- **NB-3** — One-sentence MECE rationale added at the top of §5.1 (distinct owners, users, funding
  logic; jointly exhaustive).
- **NB-4** — Explicit cross-reference to Section 2.3's governing hypothesis added in §5.1, linking the
  decision-support layer to the hypothesis's subject and the embedded capability to `OPT-005`/N-06.

---

## Merge note (2026-07-25)

Two parallel verification lineages of this section were merged on 2026-07-25:

- **Lineage A (this file's Fix record above):** independent Pass 2 citation audit + QA review
  (`Citation_Audit_Section_05_v2_pass2.md` / `QA_Review_Section_05_v2_pass2.md`, both FAIL
  2026-07-24) → fix cycle 2026-07-24 → independent re-verification, both PASS 2026-07-25
  (`Citation_Audit_Section_05_v2_pass2_reverify.md`, `QA_Review_Section_05_v2_pass2_reverify.md`).
- **Lineage B:** Pass 2/Pass 3 audits (`Citation_Audit_Section_05_v2_Pass2.md`,
  `Citation_Audit_Section_05_v2_Pass3.md` — fixing, i.a., the N-06/N-09 node mix-up, a
  `Value_Driver_Tree_v2.md`-vs-`Investment_Relationship_Map.md` attribution error, and a
  7-of-8-countries overstatement) and a Pass 4 closure audit (2026-07-24).

**Reconciliation:** Lineage A's text is retained throughout, as it carries the superset of verified
fixes: the licensed-vs-proprietary **hybrid** stack split (DH-licensed logistics/dispatch, TLB-001 /
TLB-026; talabat-proprietary personalisation/ranking, TLB-001 p.23), the AI EBITDA contribution
re-cited to `Facts/AI_Facts.md` (TLB-001 p.23; TLB-002 p.16) + N-09, the corrected
7/8-post-Feb-2025-Egypt-launch vs. 6/8-end-2024 dating with the analytical-inference label (§5.5),
and the current §5.4 MCP statement. Lineage B's traceability row "MCP decision undecided |
`MEMORY.md`" was **not** retained: it is factually false — `DEC-011_mcp-layer-pursue.md` was approved
2026-07-24 and the read-only `vault-mcp` server (`scripts/vault_mcp/server.py`) is registered in
`.mcp.json`; `MEMORY.md`'s stale line was corrected separately on 2026-07-24. Lineage B's §5.6
wording distinguishing the open cross-market allocation question (problem 3) from the resolved
`DEC-009` (problem 2) was retained as the clearer formulation, with the approval date added.

## See also
[[Section_02_Business_Description]] · [[Section_04_Value_Proposition]] · [[Investment_Relationship_Map]] · [[Value_Driver_Tree_v2]]

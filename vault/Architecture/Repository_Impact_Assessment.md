---
type: architecture
status: active
created: "2026-07-23"
scope: "Phase 1 of the strategic pivot: repository-wide impact map, produced before any file was modified for the new problem. Classifies every affected area as Must rewrite / Must revise / Can remain unchanged / Should be superseded-archived."
---

# Repository Impact Assessment — Strategic Pivot to Capital-Allocation Problem

Produced per explicit instruction, before any modification: inspect the whole repository and classify
every file/area that contains, depends on, or assumes the old problem (Egypt-only AI-driven customer
retention / churn prediction) against the new problem (Group-wide 2026 investment-programme capital
allocation). Grouped by directory/component rather than exhaustively file-by-file where a whole group
shares one classification and one reason — individual files are named where their classification
differs from their group's.

**Legend:** **A** Must rewrite · **B** Must revise · **C** Can remain unchanged · **D** Should be
superseded/archived (kept, marked historical, not deleted).

---

## 0. The one fact that makes this pivot evidentially sound, not arbitrary

Every Egypt-specific forecast node built this project (`Value_Driver_Tree.md` branches 1–4, all of
`ASM-007`–`012`) is capped at **Low confidence**, for one structural reason: the corpus has almost no
disclosed Egypt-specific customer, GMV, or order data — every Egypt projection is a Group/GCC ratio or
uplift figure imported and labeled as unproven for Egypt. The same corpus has extensive, disclosed,
audited **Group-level and market-comparison** data (GMV, revenue, EBITDA, the 2026 USD175m investment
programme's own USD120m/USD55m decomposition, talabat pro uplift figures, Egypt/UAE/Kuwait market-tier
comparisons). The new problem is better supported by the actual evidence base than the old one — this
is a genuine evidence-fit correction, not a preference change.

---

## 1. System identity and memory (root-level) — all **A/B**

| File | Class | Why |
|---|---|---|
| `Problem_Charter.md` | **A** | States the old problem verbatim as the charter; instructor-approved for the old problem specifically — cannot be silently edited in place without breaking that approval record (see §9, Historical Traceability) |
| `CLAUDE.md` | **A** | Project instructions header, "What this project is," and most standing instructions are Egypt-retention-specific throughout |
| `MEMORY.md` | **B** | "What this project is" header needs rewrite; the Decisions log / Session log entries are a historical record and must NOT be rewritten — append, don't edit |
| `PROJECT_PROGRESS.md` | **B** | Goal/milestone table header needs rewrite to the new problem; the detailed narrative of Pilots 1–4 etc. is legitimate historical record of *how the OS was built*, not of the *old business problem* — largely reusable, needs a framing update, not a rewrite |
| `SESSION_LOG.md` | **C, append-only** | Chronological log — never edit past entries; new entries append normally |
| `README.md` | **A** | Repository self-description ("customer retention and CLV for talabat Egypt") is the old problem statement, used as the project's public identity |
| `AI_Business_Plan_Template.md` | **C** | The graded, immutable 14-section specification — problem-agnostic by design, this is exactly what stays fixed regardless of which business problem fills it |
| `template_Activate.md` | **C** | Generic template-activation runbook, not project-specific |

## 2. Vault identity files — **B**

| File | Class | Why |
|---|---|---|
| `vault/soul.md` | **C** | Behavior rules (lead with recommendation, challenge assumptions, MECE) are fully problem-agnostic |
| `vault/identity.md` | **B** | "Talabat / Egyptian delivery-market material" and the plan description need updating to the new scope; the analyst/chief-of-staff role definition itself is reusable |
| `vault/user.md` | **B** | "Group G02's Talabat Egypt retention engagement" phrase needs updating; everything else (name, education, communication style) is unaffected |

## 3. Architecture layer (`vault/Architecture/`) — mixed, mostly **B**, two **C**

| File | Class | Why |
|---|---|---|
| `Agentic_OS_Architecture.md` | **D → historical** | Explicitly the "Version 1 (pre-execution) design" record — already superseded by v2 in this project's own convention; leave as historical record, do not rewrite |
| `Agentic_OS_Architecture_v2.md` | **B** | The evidence-based evolution log is about *runtime/delegation mechanics* (agent-thread isolation, two-pass QA), fully problem-agnostic — no rewrite needed structurally, but its own framing references should note the pivot happened after it |
| `Business_Plan_Generation_Pipeline.md` | **B** | The 11-stage sequence and gate rules are problem-agnostic; needs the new stages (per §18 of the pivot instruction: option identification, allocation ranges, geographic evidence review, financial integrity review) added, not a redesign of the sequence itself |
| `Decision_Management_Layer.md` | **B** | Five-tier evidence model and Decision/Assumption schema are reusable; the worked example (Egypt category-share) is illustrative only — keep as historical example, add a capital-allocation worked example |
| `External_Research_Layer.md` | **C** | Research sourcing/confidence-scoring procedure is problem-agnostic |
| `Forecasting_Layer.md` | **B** | Methodology (anchor Fact → growth logic → confidence) is reusable; needs the new Value Driver Tree shape (Investment → capability → behaviour → GMV → revenue → gross profit → EBITDA → cash flow) referenced |
| `Implementation_Roadmap.md` | **A** | Phase-by-phase roadmap is entirely about drafting the old 14-section Egypt plan — needs a new roadmap reflecting this pivot's own 9 phases |
| `Pilot_Validation_Plan.md` | **D → historical** | Documents Pilots 1–4 against the old problem's sections — historical record of how the OS was proven operationally stable, not to be rewritten |
| `Publication_Layer.md` | **C** | Presentation/export mechanics, the Template Compliance Gate, and the content-protection rules are fully problem-agnostic |

## 4. Decision layer (`vault/Decisions/`) — **D** for content, **C** for schema

| File | Class | Why |
|---|---|---|
| `Decisions_README.md`, `_TEMPLATE-decision.md` | **C** | Schema/template, reusable as-is |
| `Assumptions_Register.md` | **A (new rows), D (existing rows)** | The register mechanism/schema stays; all 14 existing rows (`ASM-001`–`014`) are 100% Egypt-retention-specific — mark **Superseded**, not deleted, per §22's explicit instruction; new rows for the capital-allocation problem start fresh |
| `DEC-001` through `DEC-007` | **D → superseded** | Every one resolves an Egypt-retention-specific question (category share, market-size definition, the governing hypothesis itself, investment-total reconciliation, headline scenario, revenue-line reclassification, review cadence) — mark Superseded with a pointer to why, keep in place as historical record. Note: `DEC-004`'s USD175m=120m+55m decomposition is a *fact reconciliation*, not a retention-specific judgment — its underlying finding remains directly reusable evidence for the new problem even though the Decision record itself is retention-scoped and should be superseded and re-cited fresh under the new Investment Portfolio Register |

## 5. Forecast layer (`vault/Forecasts/`) — **A**, full rebuild

| File | Class | Why |
|---|---|---|
| `Forecasts_README.md` | **C** | Generic layer description |
| `Value_Driver_Tree.md` | **A** | Every branch (Orders, AOV, Take Rate, Cost/Investment) is explicitly Egypt-anchored and DEC-003-dependent; the new tree (Investment → capability → behaviour → GMV → revenue → gross profit → EBITDA → cash flow, Group-wide) is structurally different, not an edit of this one — supersede, rebuild fresh |
| `Scenarios.md` | **A** | Base/upside/downside scenarios keyed to DEC-005's Egypt-specific headline framing — supersede |
| `KPI_Tree.md` | **A** | All 16 KPIs trace to Egypt-retention value mechanisms — supersede, rebuild around investment-performance KPIs per §14 |

## 6. Knowledge base (`vault/Knowledge/`) — mostly **C**, strengthen rather than rewrite

This is explicitly the layer the pivot instruction says to preserve. Classification:

| Area | Class | Why |
|---|---|---|
| `Sources/TLB-001`–`029`, `Facts/_raw/`, `_source_text/` | **C** | Raw ingestion and per-document notes — pure extraction, entirely problem-agnostic, the strongest asset this pivot inherits unchanged |
| `Facts/*.md` (14 topic-consolidated files) | **C** | Cited data series — Revenue, GMV, Orders, Talabat Pro, Advertising, Subscription, etc. are exactly the Group-level facts the new problem needs most; no rewrite, only heavier future use |
| `Entities/*.md` | **C** | Rosters (Companies, Countries, Competitors, Products, Technology Platforms) — reusable as-is |
| `Relationship_Map.md`, `Business_Relationships.md` | **B** | Existing Mermaid diagrams model Customer/Restaurant/Rider/Revenue relationships; needs a new diagram layer for Investment→Capability→Behaviour→Financial-outcome (§9 of the pivot instruction), additive not a replacement |
| `Topics/Egypt.md`, `Topics/UAE.md` | **C** | Legitimate country-level notes — remain exactly as valuable market-comparison inputs under the new geographic evidence rules |
| `Topics/Customer Churn.md`, `Topics/Customer Retention.md` | **C, reweighted** | Content stays (retention remains a real intermediate value driver per §9) — role changes from "the governing outcome" to "one node among several," a usage change in the skills/pipeline layer, not a content rewrite |
| `Strategic/Customer Retention Drivers.md`, `Strategic/AI Opportunities.md`, `Strategic/Future AI Opportunities.md` | **B** | Pre-built arguments are retention-centric framing of value drivers that are individually reusable (talabat pro, multi-vertical engagement, personalisation) — needs reframing as *inputs to a capital-allocation comparison*, not new evidence |
| **New topic notes needed** (§9 of the pivot instruction) | **New (A)** | Everyday App strategy, 2026 investment programme, Food leadership, capital allocation, CLV/customer economics, GCC-vs-non-GCC, investment governance — none of these exist yet as dedicated notes; all buildable from already-ingested Facts, no new research required for the Group-level ones |
| `_VALIDATION_REPORT.md`, `_PHASE4_VALIDATION_REPORT.md`, `_AUDIT_REPORT_PHASE4.md` | **D → historical** | Ingestion/graph-quality audit records — accurate history of how the knowledge base was built, unaffected by which business problem uses it |

## 7. MOCs (`vault/MOC/`) — **B**, navigation only

All 13 MOCs are navigation, not content — none require content rewrites. `Talabat MOC.md`,
`MOC-Second-Brain.md`, `Project Administration.md` need their framing text updated (they describe the
project as retention-scoped); `Source Register.md`, `Templates and Methods.md`, `Validation and
Audit.md` need only additive entries for new artifacts. **C** for the rest.

## 8. Research layer (`vault/Research/`) — **D** for existing notes, **C** for schema

`Research_README.md`, `Research_Register.md` schema, `_TEMPLATE-research-item.md`: **C**. The four real
research notes (`RES-001`–`004`) are Egypt-competitor/market-size specific: **D → superseded**, not
deleted — they remain legitimate evidence *about Egypt as one market*, just no longer feed the
headline recommendation directly.

## 9. Agents (`.claude/agents/`) — **B** across all eight, **none need full rewrite**

Confirmed by direct inspection: every agent file's Egypt/churn/retention references are light (1–5
mentions each, vs. 24 in `business-plan-drafting`) — the eight agents are already substantially
problem-agnostic procedural definitions (stage ownership, inputs/outputs, escalation rules). Each
needs its mission/example language updated to capital-allocation framing, not a redesign:
`bp-orchestrator`, `decision-steward`, `evidence-citation-agent`, `forecasting-agent`, `kpi-agent`,
`qa-review-agent`, `research-agent`, `exec-summary-agent`. **No ninth agent is justified yet** — the
pivot instruction's own "avoid unnecessary agent proliferation" test: portfolio-comparison logic is a
natural extension of `decision-steward`'s existing Decision Log ownership (an Investment Option is
structurally a Decision-Log-adjacent record) and `kpi-agent`'s existing tree-building role, not a
distinct responsibility. Recommend folding Investment Portfolio Register ownership into
`decision-steward` rather than adding `investment-portfolio-agent` — revisit only if that proves too
much for one agent once the portfolio layer is actually built.

## 10. Skills (`.claude/skills/`) — mixed

| Skill | Class | Why |
|---|---|---|
| `business-plan-drafting` | **A** | 24 Egypt/churn/retention mentions; its entire 14-section content map is built section-by-section against the old problem — full remap required per §16, template structure itself untouched |
| `forecast-builder` | **B** | Methodology reusable; its worked examples and confidence-calibration rules reference the old tree shape |
| `external-research` | **C** | Sourcing/confidence procedure is problem-agnostic |
| `decision-log` | **C** | Record template/workflow is problem-agnostic |
| `evidence-ranking` | **C** | Hierarchy procedure is problem-agnostic |
| `citation-audit` | **C** | Mechanical trace-check procedure is problem-agnostic |
| `qa-review` | **B** | Checklist references the old value-mechanism traceability (Section 4→9→13) by name — needs updating to whatever the new value-driver chain becomes, structure unchanged |
| `session-end` | **C** | Zero Egypt/churn/retention mentions — fully generic |
| `executive-document-formatting` | **C** | Zero content dependency on the business problem — pure presentation mechanics |
| `template-compliance-gate` | **C** | Validates structure against the template, not content — fully problem-agnostic |

## 11. Business Plan drafts (`vault/Projects/Business_Plan_Drafts/`) — **D → superseded**, not deleted

All 14 section drafts plus `Executive_Business_Plan.md` argue the old problem in full. Per explicit
instruction, do not regenerate them now. Mark the project tracker (`vault/Projects/Talabat-Egypt-
AI-Retention-Business-Plan.md`) and all 14 drafts' frontmatter as **Superseded by the pivot dated
2026-07-23**, preserved in place as the historical record of the first, fully-executed run of this
OS — valuable as evidence the pipeline mechanics work, not as active input to the new plan.

## 12. Validation records (`vault/Validation/`) — **D → historical**, all of them

Every citation audit, QA review, pilot execution report, the whole-plan pressure test, the two
Publication QA reports, and the Template Compliance Gate's (not-yet-run) checklist are records of
verifying the *old* problem's content, or — for `Publication_QA_Report.md` and `Formatting_QA_Report.md`
— of a real, valuable proof that the *formatting and publication mechanics* work. All: historical
record, not deleted, not rewritten. New validation runs (once the new plan drafts) create new dated
files following the same convention.

## 13. Outputs (`Outputs/`) — **D → historical**, untouched

The two DOCX/PDF pairs already exported are historical artifacts of the old problem. Not deleted (per
standing "don't delete without approval" discipline), not touched by this pivot. New exports, once
authorized, will be new files.

---

## Summary counts

| Class | Approximate count | Examples |
|---|---|---|
| **A — Must rewrite** | ~10 (Problem_Charter.md, CLAUDE.md, README.md, Implementation_Roadmap.md, Value_Driver_Tree.md, Scenarios.md, KPI_Tree.md, business-plan-drafting skill, + new topic notes to create) | |
| **B — Must revise** | ~25 (MEMORY.md header, PROJECT_PROGRESS.md header, identity.md, user.md, most Architecture docs, most agents, forecast-builder, qa-review, Relationship_Map.md, Strategic notes, MOCs) | |
| **C — Can remain unchanged** | ~220+ (all raw ingestion/Sources/Facts/_raw/_source_text, Entities, most Topics, session-end/external-research/decision-log/evidence-ranking/citation-audit/executive-document-formatting/template-compliance-gate skills, soul.md, AI_Business_Plan_Template.md, template_Activate.md) | |
| **D — Superseded/archived, not deleted** | ~50 (all 7 Decision Log entries + 14 Assumption rows, all 4 Research Notes, all 14 Business Plan drafts + tracker + executive edition, all Validation records, both Output pairs, Architecture v1, Pilot_Validation_Plan.md) | |

**Reading:** the large **C** count confirms the pivot instruction's own premise — the knowledge base
(ingestion, Facts, Entities, most Topics) and the OS's mechanical infrastructure (formatting,
compliance gate, most skills, most agents) are genuinely problem-agnostic and need no rewrite. The work
concentrates in a well-bounded set: system identity/memory, the Forecast layer, the Decision layer's
active content (not its schema), `business-plan-drafting`'s content map, and net-new knowledge/decision/
portfolio artifacts for the new problem.

## See also
[[Agentic_OS_Architecture]] · [[Agentic_OS_Architecture_v2]] · [[Publication_Layer]] ·
[[Talabat-Egypt-AI-Retention-Business-Plan|Project tracker]] · `Problem_Charter.md`

---
type: validation
section: 5
pass: "2-reverify"
status: PASS
date: "2026-07-25"
built_by: evidence-citation-agent
---

# Citation Audit — Section 5 v2 — Pass 2 Re-verification (independent, fresh thread)

## Scope and method

Independent re-verification of `vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md`
(post-Pass-2 fix cycle, 2026-07-24) against `Citation_Audit_Section_05_v2_pass2.md` (FAIL — HF-1..HF-8,
S-1..S-4). Every fixed passage and every newly-introduced passage (including the new build/buy/partner
criteria table) was re-traced against the underlying evidence layer directly — never against the draft's
own citations or the fix record on trust. Files trace-checked: `Facts/AI_Facts.md`;
`Facts/Talabat_Pro.md`; `Facts/_raw/TLB-001_facts.md`; `Entities/Technology_Platforms.md`;
`Topics/AI.md` (full); `Topics/2026 Investment Programme.md`; `Strategic/AI Opportunities.md`;
`Investment_Relationship_Map.md` (master chain + "What this note deliberately does not claim");
`Forecasts/Value_Driver_Tree_v2.md` (N-05..N-10 region + tree summary); `Forecasts/KPI_Tree_v2.md`
(family counts); `Decisions/Investment_Options_Register.md`;
`Decisions/Investment_Options/OPT-005_ai-personalisation-capability-scaling.md`;
`Decisions/Decision_Log/DEC-009…` (status via register) and `DEC-011_mcp-layer-pursue.md` (full header +
decision); `Decisions/Investment_Portfolio_Register.md` (via grep); `Architecture/Decision_Management_Layer.md`
(criteria table — eleven rows counted); `.claude/skills/business-plan-drafting/SKILL.md` Section-5 entry
(lines 114–118); `MEMORY.md` (LLM line 144, MCP line 147); `.mcp.json` and `scripts/vault_mcp/server.py`
(existence); `Section_02_Business_Description.md` (§2.2/§2.3 headings and hypothesis text); directory
listing of `Business_Plan_Drafts_v2/` (section count); `SESSION_LOG.md` Session 9 (pilot scope);
`_source_text/Talabat-Holding-plc_International-Offering-Memorandum.txt` (patents statement);
`Architecture/Geographic_Evidence_Rules.md` discipline applied throughout.

## Per-finding resolution check

| Finding | Fix claimed | Independent trace | Verdict |
|---|---|---|---|
| HF-1 (N-06 mis-addressed) | N-06 retargeted to `Value_Driver_Tree_v2.md`; `Investment_Relationship_Map.md` demoted to narrative provenance ("carries no numbered nodes") with its "What this note deliberately does not claim" as secondary anchor | `Value_Driver_Tree_v2.md` line 77 is N-06 ("AI/personalisation capability deployment (cross-cutting both buckets)… Not named as a discrete dollar line within either bucket"); `Investment_Relationship_Map.md` lines 149–155 carry the not-a-dollar-line substance ("No disclosed initiative-by-initiative split within either bucket") | **RESOLVED** |
| HF-2 (EBITDA trail cited to wrong note/node) | Re-cited (Group; TLB-001 p.23; TLB-002 p.16 — via `Topics/AI.md` / `Facts/AI_Facts.md`; N-09); `Topics/EBITDA.md` removed | `AI_Facts.md` line 16 (USD14mn+, TLB-001 p.23) and line 27 (USD30mn+, TLB-002 p.16 — page ref now corrected 15→16 with dated annotation); `Topics/AI.md` "Why It Matters" carries both at p.23/p.16; N-09 (Value_Driver_Tree_v2 line 96) carries the full trail, Geography: Group. No residual `Topics/EBITDA.md` reference anywhere in the draft. "Company-estimated" matches the Facts wording ("estimated to generate/contribute") | **RESOLVED** |
| HF-3 (7-of-8 "by end-2024" temporally wrong) | 7/8 tied to the February 2025 Egypt launch (TLB-001 pp.11-12), Iraq the exception at that date; end-2024 restated as 6/8 (TLB-015 p.77); personalisation-deployment framing dropped | `Facts/Talabat_Pro.md` line 104: "Live in 6 of 8 countries — all except Egypt and Iraq (TLB-015, page 77)"; Egypt launch Feb 2025 (TLB-001 p.11/p.19; corroborated TLB-012 p.17); Iraq the remaining exception until Sept 2025 (TLB-002 p.14; TLB-026 p.133 corroborates the pre-Egypt state); `_raw/TLB-001_facts.md` line 39 now carries the dated correction note resolving the source discrepancy. Draft claim now framed as talabat pro *availability* only | **RESOLVED** (see H-1 housekeeping) |
| HF-4 ("no proprietary algorithm disclosed" contradicted evidence) | §5.3 rewritten: corpus names the "Proprietary personalisation and ranking algorithm" (TLB-001 p.23); undisclosed = architecture/model detail/patents | `Technology_Platforms.md` line 9 and `AI_Facts.md` line 16 name the proprietary algorithm at TLB-001 p.23; the negative half re-verified true against the corpus (no architecture/model/patent disclosure found; TLB-026 source text line 9939 affirmatively states "we do not hold any patents") | **RESOLVED** (see H-2 note on citation depth) |
| HF-5 (blanket "licensed from DH" over-extension) | Hybrid classification throughout (Answer, §5.2, traceability): DH-licensed logistics/dispatch stack + talabat-proprietary personalisation/ranking | The DH-licensed set in the draft (dispatch algorithms, real-time GPS tracking, rider staffing algorithm, picking tools; TLB-001, TLB-026) matches `Technology_Platforms.md` line 7 exactly; proprietary build matches line 9 / TLB-001 p.23. §5.2 correctly restates the classification as "hybrid of partner and build" | **RESOLVED** |
| HF-6 (MCP "undecided" contradicted by DEC-011) | §5.4 rewritten against DEC-011; MEMORY.md corrected separately | `DEC-011` frontmatter: status approved, 2026-07-24; decision text matches the draft (read-only `vault-mcp`, `scripts/vault_mcp/server.py` exists, registered in `.mcp.json` which exists; tool list — pipeline status, Decision/Assumption/Option lookups, Facts search, Forecast structures — matches DEC-011/CLAUDE.md). MEMORY.md line 147 now reads "MCP decision: resolved 2026-07-24 by DEC-011". Draft does not overstate beyond read-only status, per the skill's caution | **RESOLVED** |
| HF-7 ("six pilot sections" stale) | Updated to 14 sections as of 2026-07-24, pilot-era six date-stamped | Directory listing confirms exactly 14 `Section_*.md` files in `Business_Plan_Drafts_v2/`; SESSION_LOG Session 9 (2026-07-23) confirms the pilot run drafted exactly six sections (2/4/5/9/12/13) | **RESOLVED** |
| HF-8 (~USD75mn uncited) | Cited (Group; TLB-020, page 16) in §5.2 and traceability | `Investment_Relationship_Map.md` line 77: "~USD 120mn total: ~USD 75mn operating investments... plus ~USD 45mn in capital investments" (TLB-020, page 16); corroborated `Topics/2026 Investment Programme.md` (TLB-020 p.16 / TLB-014). Group scope correct | **RESOLVED** |

Soft findings: **S-1** — inline (Group) tags present on the 14→30mn trail (Answer + traceability), the
~USD75mn figure (§5.2), and §5.1's logistics claim — verified. **S-2** — "company-estimated" wording
applied; `AI_Facts.md` p.15→16 correction propagated with a dated annotation — verified. **S-3** —
§5.5's multi-market scalability claim now explicitly labeled "an analytical inference" from product
availability — verified. **S-4** — §5.6 now states DEC-009 is approved (2026-07-23) with only the
residual evidence gap open; matches the register ("status approved, resolved 2026-07-23") and Section 2
(§2.2 = Problem Statement; "problem 3 in §2.2… remains open pending better evidence", line 222) — verified.

## New-content trace check (edited passages and additions)

- **Build/buy/partner criteria table (§5.2, new per B6):** contains **no numeric figures** — all
  ratings qualitative (Low/Higher, Fast/Slower, High/Moderate) and explicitly labeled "qualitative."
  Factual anchors inside it verified: `OPT-001`–`005` exist (register), `DEC-009` approved,
  `Value_Driver_Tree_v2.md`/`KPI_Tree_v2.md` exist. No invented cost, timing, or vendor claims. PASS.
- **NB-1 gradation ("primarily Everyday App opex, lesser Food-leadership"):** verified against
  `OPT-005` record line 49 ("Cross-cutting; embedded primarily within Everyday App opex (and, to a
  lesser extent, Food-leadership…)") and N-06. Correctly presented as OS-record-sourced, not disclosed. PASS.
- **NB-4 cross-reference to "Section 2.3's governing hypothesis":** §2.3 is indeed "Governing
  Hypothesis"; the paraphrase ("raises its realized contribution versus an unranked allocation") is
  faithful to Section 2 lines 135–144 ("will raise the programme's realized GMV, EBITDA, and
  customer-lifetime-value contribution… unranked, undifferentiated allocation"). PASS.
- **§5.1 "11-criterion" / §5.3 "11-criterion framework":** `Decision_Management_Layer.md` criteria
  table has exactly eleven rows ("show all eleven ratings side by side"). PASS.
- **§5.4 Claude Code / Cowork:** MEMORY.md line 144. PASS.
- **Provenance note reference to the corrected skill entry:** the skill's Section-5 entry (lines
  116–118) now carries the 2026-07-24 corrections (N-06 → `Value_Driver_Tree_v2.md`; EBITDA trail →
  `Facts/AI_Facts.md`/`Topics/AI.md`, TLB-001 p.23 / TLB-002 p.16, "NOT `Topics/EBITDA.md`"). PASS.
- **§5.6 roadmap items:** `Strategic/AI Opportunities.md` carries the Group-level roadmap language
  (TLB-015 p.89; TLB-002 p.10). Governance family "7/7 newly-instrumented, 0 baseline" matches
  `KPI_Tree_v2.md` line 162. PASS.
- **Geography sweep:** every numeric claim is Group-scope, Group-tagged, used at Group scope; the one
  cross-scope move (multi-market scalability) is explicitly labeled an analytical inference. No
  geography-transfer failures under `Geographic_Evidence_Rules.md`. PASS.

## New hard failures

**None.**

## Housekeeping notes (non-blocking, upstream of the draft)

- **H-1:** the Pass 2 correction of the "end-2024 / seven-of-eight" discrepancy was annotated in
  `Facts/_raw/TLB-001_facts.md` (line 39) but **not** propagated to the consolidated
  `Facts/Talabat_Pro.md` line 12, which still opens "By end-2024, available in all countries of
  operation except Iraq…". The draft itself states the dating correctly; fix the consolidated Facts
  note to match the raw annotation (propose-then-approve).
- **H-2:** §5.3's pointer to `Topics/AI.md`'s Open Questions (the citation the Pass 2 audit itself
  prescribed for HF-4) anchors the model-detail half well but only indirectly the architecture/patents
  half. The stronger citable fact — TLB-026's affirmative "we do not hold any patents" (source text,
  Offering Memorandum) — remains un-ingested into the Facts layer, as Pass 2 already noted. Ingesting
  it would upgrade §5.3's negative claim from corpus-absence to an affirmative primary citation.
  Non-blocking: the claim as drafted is true against the corpus and matches the prescribed fix.
- **H-3 (optional strengthening):** §5.5's "with Iraq the exception at that date" rests on TLB-001
  facts (Egypt Feb-2025 launch + seven-of-eight) with Iraq named in the corrected raw fact; TLB-026
  p.133 and TLB-002 p.14 corroborate and could be added, but are not required.

## Result

**PASS — all eight hard failures genuinely resolved with correct citations at correct scope; all four
soft findings addressed; no new hard failures introduced by the fix cycle.** Section 5 v2 clears the
Stage 9 citation gate from this audit's side and may proceed to Stage 10 subject to the parallel QA
re-review. The draft was not edited by this audit.

## Links

- `vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md` — the re-audited draft
- `vault/Validation/Citation_Audit_Section_05_v2_pass2.md` — the Pass 2 audit this re-verification closes out
- `vault/Forecasts/Value_Driver_Tree_v2.md` (N-06, N-09) · `vault/Knowledge/Facts/AI_Facts.md` · `vault/Knowledge/Facts/Talabat_Pro.md` · `vault/Knowledge/Entities/Technology_Platforms.md` · `vault/Knowledge/Investment_Relationship_Map.md`
- `vault/Decisions/Decision_Log/DEC-011_mcp-layer-pursue.md` · `vault/Decisions/Investment_Options/OPT-005_ai-personalisation-capability-scaling.md`
- `.claude/skills/citation-audit/SKILL.md` · `vault/Architecture/Geographic_Evidence_Rules.md`

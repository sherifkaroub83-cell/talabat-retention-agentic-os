---
type: validation
section: 5
pass: 2
status: FAIL
date: "2026-07-24"
built_by: evidence-citation-agent
---

# Citation Audit — Section 5 v2 (AI Technology and Development) — Pass 2 (independent)

## Independence note (read first)

Performed as the genuinely independent second-pass audit required by Agentic_OS_Architecture_v2
(Change 2), on `vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md`
(pipeline run 2026-07-23, frontmatter status "Drafted — self-reviewed"). Per the task's instruction,
no prior audit was read until after this audit's own trace was complete. **Finding on the Pass 1
record itself:** no Pass 1 audit artifact exists for the v2 draft. The only file matching
`Citation_Audit_Section_05*` is `vault/Validation/Citation_Audit_Section_05.md` (2026-07-22), which
audits the *superseded pre-pivot Egypt draft* in `vault/Projects/Business_Plan_Drafts/` — a different
document. The v2 draft's "Pass 1, self-reviewed" status therefore has no written audit trail; this
Pass 2 report is the first audit artifact for the v2 draft.

## Method

Every numeric and named-fact claim in the draft was walked sentence by sentence and traced — against
the underlying evidence layer directly, never against the draft's own citations on trust — to one of:
(a) a Facts/Sources citation `(TLB-XXX, page N)` verifiable through `vault/Knowledge/`, (b) an
`Approved` row in `vault/Decisions/Assumptions_Register.md`, (c) an approved Decision record, or
(d) an explicit `[SYNTHETIC — illustrative]` label. Geography checked against
`vault/Architecture/Geographic_Evidence_Rules.md`. Read/checked directly: the full draft;
`Facts/AI_Facts.md`; `Topics/AI.md`; `Topics/EBITDA.md`; `Topics/Recommendation Systems.md`
(existence); `Entities/Technology_Platforms.md`; `Strategic/AI Opportunities.md`;
`Investment_Relationship_Map.md` (full); `Forecasts/Value_Driver_Tree_v2.md` (N-06/N-09 region);
`Forecasts/KPI_Tree_v2.md` (Governance family); `Decisions/Investment_Options_Register.md`;
`Decisions/Investment_Portfolio_Register.md`; `Decisions/Decision_Log/DEC-009…` and `DEC-011…`
(existence/status); `Architecture/Decision_Management_Layer.md` (criteria framework); `MEMORY.md`
(LLM/MCP lines); `Section_02_Business_Description.md` (problem-3 cross-reference); the raw
Sources/Facts layer for the talabat pro 7-of-8 claim (TLB-001 p.11-12 quote, TLB-015 p.77);
directory listing of `Business_Plan_Drafts_v2/` (section count).

## Findings by claim

| # | Claim (location) | Trace target | Result |
|---|---|---|---|
| 1 | EBITDA trail >USD14mn FY2024 → >USD30mn FY2025 (Answer; traceability row) | Cited to `Topics/EBITDA.md`; N-06 | **HARD FAIL (HF-2)** — `Topics/EBITDA.md` contains neither figure (its only "30mn" string is inside "USD 130mn", Q1-2026 Group EBITDA); and the EBITDA trail is node **N-09** in `Value_Driver_Tree_v2.md`, not N-06 (N-06 is capability deployment, carries no dollar figures). Figures themselves are genuine: TLB-001 p.23; TLB-002 p.16 (Group) per `Topics/AI.md` / `Facts/AI_Facts.md` |
| 2 | "N-06" referenced as living in `vault/Knowledge/Investment_Relationship_Map.md` (provenance note; traceability row) | `Investment_Relationship_Map.md` | **HARD FAIL (HF-1)** — that file has no numbered nodes at all; N-06 lives in `vault/Forecasts/Value_Driver_Tree_v2.md`. The *substance* ("not a discrete dollar line in either bucket") is true — stated in Value_Driver_Tree_v2 N-06 and in Investment_Relationship_Map's "What this note deliberately does not claim" |
| 3 | "already built, **licensed**" / "talabat's technology stack is licensed from Delivery Hero SE" as a blanket **partner** classification (Answer; §5.2; traceability row) | `Entities/Technology_Platforms.md` | **HARD FAIL (HF-5)** — the cited note attributes only the dispatch algorithms, real-time GPS tracking, rider staffing algorithm, and picking tools to Delivery Hero licensing (TLB-001, TLB-026); the same note's line 9 lists the personalisation/ranking algorithm — the very asset carrying the USD14→30mn trail — as "talabat's own" **proprietary** system (TLB-001 p.23). Classifying the whole embedded AI capability as licensed/partner over-extends the citation |
| 4 | "AI-driven logistics improvements" quote, delivery-time/cost gains (§5.1) | `Facts/AI_Facts.md` — TLB-001 p.10 verbatim | PASS (Group; no inline geography tag — see S-1) |
| 5 | Offer timing "at the right time for customers"; item- and cuisine-level ranking (§5.1) | `Facts/AI_Facts.md` — TLB-015 p.84 / TLB-023 p.8; TLB-002 p.15 | PASS |
| 6 | ~USD75mn Everyday App opex allocation (§5.2) | No citation anywhere in the section | **HARD FAIL (HF-8)** — uncited numeric claim. Independently verified true: "~USD 75mn operating investments" within the ~USD120mn Everyday App bucket (TLB-020, page 16; Group; via `Investment_Relationship_Map.md` / `Topics/2026 Investment Programme.md`) — but the draft does not point there |
| 7 | §5.3 "No proprietary algorithm or patent is disclosed anywhere in the corpus" | `Topics/AI.md` Open Questions; `Entities/Technology_Platforms.md` | **HARD FAIL (HF-4)** — the corpus explicitly discloses and names a "**Proprietary** personalisation and ranking algorithm" (TLB-001 p.23; `Technology_Platforms.md` line 9). What is genuinely undisclosed is architecture/model detail and patents. The patent half is fine (TLB-026 raw text even affirmatively states "we do not hold any patents" — a stronger citable fact, still not ingested into Facts; known Knowledge-layer gap) |
| 8 | 11-criterion comparison framework (§5.3, §5.5) | `Decision_Management_Layer.md` criteria framework; "11-criterion comparison in DEC-009" per `Investment_Portfolio_Register.md` | PASS (internal OS artifact, consistent) |
| 9 | OS runs on Claude Code / Cowork, per MEMORY.md LLM decision log (§5.4) | `MEMORY.md` line 144 | PASS |
| 10 | "this project's own MCP integration decision remains undecided (`MEMORY.md`)" (§5.4) | `MEMORY.md` line 147 vs. `DEC-011_mcp-layer-pursue.md` | **HARD FAIL (HF-6)** — contradicted at audit date by approved Decision **DEC-011** (read-only `vault-mcp` MCP server, built and registered in `.mcp.json`, recorded in CLAUDE.md, 2026-07-24). MEMORY.md line 147 is stale; per the evidence hierarchy the Decision record governs a decision-status claim. True when drafted (2026-07-23), false now |
| 11 | talabat pro "live across 7 of 8 countries … **by end-2024**" (§5.5; traceability row citing TLB-001 p.11-12) | TLB-001 p.11-12 quote; TLB-015 p.77; `Geographic_Evidence_Rules.md` | **HARD FAIL (HF-3)** — TLB-001 p.11-12 actually reads "**At the time of writing**, talabat pro was recently launched in Egypt … now available in seven of the eight countries"; the Egypt launch was **February 2025** (Geographic_Evidence_Rules failure-pattern 1; `Relationship_Map.md`). End-2024 status was **6 of 8** (excl. Egypt and Iraq — TLB-015 p.77). Note: `Facts/_raw/TLB-001_facts.md` line 39 itself carries a discrepant "By end-2024 … except Iraq" phrasing — an unresolved internal discrepancy with no DEC record; flagged per the skill rule. Additionally, "for talabat pro **personalisation**" conflates pro availability with personalisation deployment (see S-3) |
| 12 | Five candidate Investment Options (§5.5, §5.2) | `Investment_Options_Register.md` — OPT-001…OPT-005, all present | PASS |
| 13 | "six pilot Business Plan sections" (§5.5) | Directory state of `Business_Plan_Drafts_v2/` | **HARD FAIL (HF-7)** — `Business_Plan_Drafts_v2/` contains **14** drafted sections at audit date. The numeric claim traces to nothing and is false as of 2026-07-24 (plausibly true at the 2026-07-23 pilot run, but the section cannot publish a stale count) |
| 14 | §5.6 Group roadmap items per `Strategic/AI Opportunities.md` | That note — TLB-015 p.89, TLB-002 p.10, explicitly labeled Group-level | PASS |
| 15 | DEC-009 cross-market allocation question open; "problem 3 in Section 2.2" (§5.6) | `DEC-009` (approved 2026-07-23); `Section_02_Business_Description.md` lines 110, 188 ("cross-market allocation question (problem 3 in §2.2) remains open pending better evidence") | PASS (see S-4 phrasing note) |
| 16 | Governance family "7/7 newly-instrumented KPIs with no baseline" (§5.6) | `KPI_Tree_v2.md` line 162: "Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented" | PASS |
| 17 | Named OS artifacts exist (OPT-001–005, DEC-009, Value_Driver_Tree_v2.md, KPI_Tree_v2.md) (§5.1) | All verified present | PASS |

## Hard failures (8) — fixes required before Stage 10

1. **HF-1 — N-06 cited to the wrong document.** Provenance note and traceability row point "N-06" at
   `vault/Knowledge/Investment_Relationship_Map.md`, which has no numbered nodes. **Fix:** retarget
   both references to `vault/Forecasts/Value_Driver_Tree_v2.md` N-06; the "not a discrete dollar
   line" substance may additionally cite Investment_Relationship_Map's "What this note deliberately
   does not claim" section.
2. **HF-2 — EBITDA-trail citation resolves to a note that does not contain the figures, via the wrong
   node.** Traceability row cites `Topics/EBITDA.md; N-06` for ">USD14mn FY2024 → >USD30mn FY2025";
   `Topics/EBITDA.md` contains neither figure, and the trail is node N-09, not N-06. **Fix:** cite
   `(Group; TLB-001, page 23; TLB-002, page 16 — via Topics/AI.md / Facts/AI_Facts.md, or
   Value_Driver_Tree_v2.md N-09)`. Note: `Facts/AI_Facts.md` still says TLB-002 p.15; the superseded
   draft's audit follow-up (2026-07-22) verified p.16 against raw source text and corrected
   `Topics/AI.md` but not `AI_Facts.md` — housekeeping item, see S-2.
3. **HF-3 — talabat pro "7 of 8 countries by end-2024" is temporally wrong.** TLB-001 p.11-12 dates
   7-of-8 to "the time of writing," following the February 2025 Egypt launch; end-2024 was 6 of 8
   (TLB-015 p.77). This is exactly Geographic_Evidence_Rules failure-pattern 1's documented timing
   trap. **Fix:** reword to "available in seven of the eight countries following the February 2025
   Egypt launch (TLB-001, page 11-12)"; the underlying Facts-note discrepancy
   (`_raw/TLB-001_facts.md` line 39) should be resolved at source.
4. **HF-4 — §5.3's "No proprietary algorithm … is disclosed" contradicts the cited evidence base.**
   The corpus names a "Proprietary personalisation and ranking algorithm" (TLB-001 p.23;
   `Technology_Platforms.md`). **Fix:** rephrase to "the corpus names a proprietary
   personalisation/ranking algorithm but describes it only functionally — no architecture, model
   detail, or patent is disclosed (TLB-001, page 23; `Topics/AI.md` Open Questions)."
5. **HF-5 — blanket "licensed from Delivery Hero" / partner classification over-extends the
   citation.** Only the logistics/dispatch stack is cited as DH-licensed; the personalisation/ranking
   algorithm is disclosed as talabat's own proprietary build. The superseded Section 5 draft kept
   this distinction and its audit passed it (item #11); v2 collapsed it. **Fix:** describe the
   embedded capability as a hybrid — DH-licensed logistics/dispatch stack (TLB-001, TLB-026) plus
   talabat-proprietary personalisation/ranking (TLB-001 p.23) — and restate the build/buy/partner
   classification accordingly.
6. **HF-6 — "MCP integration decision remains undecided" is contradicted by approved DEC-011.**
   The read-only `vault-mcp` server exists as of 2026-07-24. **Fix:** update §5.4 to reflect DEC-011
   (which strengthens, not weakens, the section's tooling story), and propose the MEMORY.md line-147
   correction to the owner (propose-don't-execute).
7. **HF-7 — "six pilot Business Plan sections" is stale.** 14 v2 sections are drafted at audit date.
   **Fix:** update the count (or date-stamp the pilot-scope statement and state the current scope).
8. **HF-8 — ~USD75mn Everyday App opex figure is uncited in the draft.** Verified true (TLB-020,
   page 16; Group). **Fix:** add `(Group; TLB-020, page 16)` — same defect class the superseded
   draft's audit hard-failed (true-but-unpointed numeric claim); 0% tolerance applies.

## Soft findings (4) — non-blocking, fix on revision

- **S-1 — No inline geography tags on numeric claims.** The >USD14mn→>USD30mn and ~USD75mn figures
  (both Group) carry no inline geography tag. No cross-geography *transfer* was found anywhere in the
  section (all Group figures are used at Group scope), so this is not an anti-pattern hard failure —
  but the Phase 7 Geographic Evidence Gate scans for missing tags (check (a)); add "(Group; …)" while
  fixing HF-2/HF-8.
- **S-2 — "disclosed … EBITDA contribution" overstates the disclosure's nature.** Both figures are
  company *estimates* ("estimated to generate/contribute"); say "company-estimated contribution."
  Related housekeeping: `Facts/AI_Facts.md` still cites TLB-002 p.15 for the USD30mn figure, which
  the 2026-07-22 follow-up check verified sits on p.16 — propagate the correction.
- **S-3 — §5.5's scalability inference is unlabeled.** "Embedded AI capability has already
  demonstrated multi-market scalability" is inferred from talabat pro's market footprint (a product
  availability fact), not from a disclosed AI-deployment-by-market fact. Label as inference when
  fixing HF-3.
- **S-4 — §5.6 phrasing "resolving DEC-009's cross-market allocation question."** DEC-009 itself is
  `approved` (resolved 2026-07-23); Section 2.2's framing (line 188) is that the *residual evidence
  gap* remains open pending better country-level evidence. Reword so the sentence does not imply an
  unresolved decision.

## Convergence / divergence with Pass 1

- **Divergence on process:** there is no Pass 1 audit artifact for this v2 draft to converge with —
  the "self-reviewed" status left no written trace. The only prior Section 5 audit
  (`Citation_Audit_Section_05.md`, 2026-07-22) covers the superseded pre-pivot Egypt draft.
- **Convergence on standards with that prior audit:** (a) it hard-failed true-but-uncited numeric
  claims (its Claim #7) — the same standard applied here to HF-2/HF-8; (b) its follow-up established
  TLB-002 **p.16** for the USD30mn figure, which this audit reuses in HF-2's fix; (c) it verified the
  proprietary-vs-DH-licensed distinction (its item #11) that the v2 draft collapsed — corroborating
  HF-4/HF-5 as regressions relative to the superseded draft, not inherited errors; (d) its MCP
  discussion already flagged the MEMORY.md decision-status sensitivity that has now matured into
  HF-6 via DEC-011.

## Result

**FAIL — 8 hard failures, 4 soft findings.** Every hard failure has a concrete, bounded fix listed
above; notably, all four dollar/count figures involved (14→30mn, 75mn, 7-of-8, option count) are
substantively *true* in the evidence layer — the failures are broken/missing/mis-addressed trace
paths, one temporal misstatement, one evidence mischaracterization (proprietary vs. licensed), and
two claims gone stale against 2026-07-24 repo state. Per the 0%-tolerance rule, Section 5 v2 cannot
proceed to Stage 10 until all eight are fixed and this audit is re-run. Do not soften any claim to
ease verification — route fixes through re-drafting per the fixes above.

## Links

- `vault/Projects/Business_Plan_Drafts_v2/Section_05_AI_Technology_and_Development.md` — the audited draft (not edited by this audit)
- `.claude/skills/citation-audit/SKILL.md` · `vault/Architecture/Geographic_Evidence_Rules.md` — procedure and geography rulebook
- `vault/Forecasts/Value_Driver_Tree_v2.md` (N-06, N-09) · `vault/Knowledge/Topics/AI.md` · `vault/Knowledge/Facts/AI_Facts.md` · `vault/Knowledge/Entities/Technology_Platforms.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md` · `vault/Decisions/Decision_Log/DEC-011_mcp-layer-pursue.md`
- `vault/Validation/Citation_Audit_Section_05.md` — superseded-draft audit (read only after this audit's trace was complete)

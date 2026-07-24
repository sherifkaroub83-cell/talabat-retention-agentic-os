---
type: validation
section: 9
pipeline_stage: 9
date: "2026-07-24"
result: "FAIL — 1 hard citation/numeric-accuracy failure, 1 stale-status failure; both fixable without re-drafting the section's substance"
---

# Citation Audit — Section 9 (Financial Plan), v2 draft — Pass 1

## Tooling / Independence note
This audit was run in a genuinely independent, freshly-invoked top-level thread with no access to any
`bp-orchestrator`, `forecasting-agent`, or `decision-steward` session's reasoning, memory, or
intermediate state — consistent with this project's two-pass discipline (see
`vault/Validation/QA_Review_Section_10_Pass2.md` for the precedent format). Tools available: `Read`,
`Grep`, `Glob`, `Write`. No prior citation audit of this v2 draft exists; this is Pass 1. The superseded
`vault/Validation/Citation_Audit_Section_09.md` (pre-pivot Egypt-retention draft) was deliberately **not**
read or used as an input, per instruction — it audits a different file (`Business_Plan_Drafts/`, not
`Business_Plan_Drafts_v2/`) against a different governing problem and a different (now-superseded)
Forecast Layer. Every finding below was independently re-derived from the current state of
`vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`,
`vault/Decisions/Assumptions_Register.md`, `vault/Decisions/Decision_Log/DEC-004/005/008/009/010`,
`vault/Decisions/Investment_Portfolio_Register.md`, `vault/Knowledge/Topics/EBITDA.md`,
`vault/Knowledge/Sources/TLB-019` and `TLB-020` source notes, and
`vault/Architecture/Geographic_Evidence_Rules.md`, read directly for this audit.

## Scope
Target: `vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md` (status: "Drafted —
self-reviewed, not yet independently verified", pipeline_run 2026-07-23). Every numeric and named-fact
claim in §9.1–9.6 and the Traceability table was traced to a Facts/Source citation or an
Assumption-Register row, per the citation-audit skill and CLAUDE.md's evidence-tier hierarchy.

---

## Pass/Fail table

| # | Claim (location) | Traces to | Result | Notes |
|---|---|---|---|---|
| 1 | FY2026 guidance: GMV +11-14% cFX, Revenue +14-17% cFX, Adj. EBITDA 4.4-4.8% of GMV, FCF 3.2-3.6% of GMV (Answer-first; §9.3 Base row) | TLB-020 p.14 (directly), consistent with TLB-019 p.18, TLB-014 p.9 | PASS | Verified verbatim against `TLB-020_q1-2026-results-presentation.md`. |
| 2 | "down from 6.0% in Q4 2025" (Answer-first) | TLB-020 p.12 margin bridge; `Value_Driver_Tree_v2.md` N-34 | PASS | Matches N-34's "guided step-down from 6.0% (Q4 2025 baseline)". |
| 3 | USD175mn total, Board-approved February 2026, fully funded by internal cash; ~USD120mn Everyday App (~75mn opex+~45mn capex) + ~USD55mn Food-leadership (§9.2) | `Investment_Portfolio_Register.md`; TLB-019 p.11 ("$175mn Board-approved programme," Feb 2026); TLB-020 p.12/p.16 | PASS | TLB-019 (13 Feb 2026) itself names the $175mn Board-approved total — the Feb-2026 date is directly disclosed, not inferred. Consistent with `DEC-004`/`DEC-010`'s reconciliation (`ASM-006`, Approved). Correctly, per `DEC-010`'s own finding, Section 9 cites the primary TLB-019/TLB-020 notes and the Portfolio Register directly rather than `DEC-004`/`ASM-006`/`DEC-010` — this is the pattern `DEC-010` anticipated and endorsed, not an omission. |
| 4 | OPT-002/OPT-003 near-term priority; OPT-001/OPT-005 continue-at-pace; OPT-004 longer-horizon (§9.2) | `DEC-009` (approved, middle path) | PASS | Verbatim match to `DEC-009`'s Decision section. |
| 5 | Governing value-driver chain; "every node from customer/partner behaviour onward that connects the programme to a financial outcome is an Assumption, not a Fact" (§9.1) | `Value_Driver_Tree_v2.md`'s "Central evidence-gap" statement | PASS | Accurate paraphrase — preserves the tree's own qualifier ("that connects the programme to a financial outcome"), not a claim that every downstream node is Assumption-tagged (most are Fact-tagged historical metrics; only N-13/19/37/42/43/44 are Assumptions). |
| 6 | Base/Upside/Downside scenario rows, "Group-level, per DEC-008" (§9.3) | `Scenarios_v2.md` top-level scenarios; `DEC-008` (approved, Option 1) | PASS | Matches `Scenarios_v2.md`'s top-level Base/Upside/Downside logic and geography tags exactly; correctly excludes the ASM-018 bucket-split per `DEC-008`. |
| **7** | **"(Q1 2026 actual already 4.8%, -9pp y/y)" — Downside row, §9.3** | TLB-020 ("4.8% of GMV, **-9% y/y**"); `Scenarios_v2.md` downside case ("-9% y/y"); `Value_Driver_Tree_v2.md` N-35 ("-9% y/y"); `EBITDA.md` ("-9% y/y") | **FAIL (hard)** | Every source in the chain states **"-9% y/y"** — a year-on-year decline in the *Adjusted EBITDA dollar figure* (from Q1'25 pro forma), not a 9-percentage-point drop in the *margin*. The actual margin move is 6.3%→4.8% (Q1'25 pro forma→Q1'26, -1.5pp) or 6.0%→4.8% (Q4'25 baseline→Q1'26, -1.2pp). Writing "-9pp y/y" overstates margin compression by roughly 6-7x and contradicts the section's own Traceability table (row: "Q1 2026 EBITDA margin 4.8%, -9% y/y") and its own §9.4 ("Adjusted EBITDA margin moving from 6.0%... to a realized 4.8%..."). This is a numeric claim that does not accurately trace to its cited source — a citation-audit failure, not a stylistic note, per this project's 0%-tolerance rule. |
| 8 | "No such figure exists in the corpus for either bucket... confirmed independently by Investment_Relationship_Map.md, EBITDA.md, and Capital Allocation and Investment Governance.md" (§9.4) | `Investment_Relationship_Map.md` ("No disclosed ROI or payback figure for either bucket"); `EBITDA.md` Open Questions (no segment-level EBITDA; no cost-line decomposition of the bridge) | PASS | Verified independently in both notes. |
| 9 | EBITDA margin snapshot 6.0%→4.8%→4.4-4.8% guided range; TLB-020 p.16 quote on "investments rather than costs" (§9.4) | TLB-020 p.12 (bridge), p.16 (quote), p.14 (guidance) | PASS | Quote verified verbatim in TLB-020 source note. |
| **10** | **"All fourteen listed are `status: Proposed`... not yet Approved" (§9.5, and the provenance-note banner at the top of the file, re ASM-015–028)** | `vault/Decisions/Assumptions_Register.md` | **FAIL (stale/named-fact)** | The register's current state (updated 2026-07-23, the *same* pipeline date as this draft) shows **ASM-015 through ASM-028 all moved `Proposed` → `Approved`** in the Final Execution Readiness Report pass, with an explicit note: *"Sections that already cite these rows already correctly described them by their prior `Proposed` status at the time of drafting... future citations and QA passes should refer to the current `Approved` status shown here."* The register itself anticipates and directs exactly this correction. Section 9's assertion that these are still Proposed is a named-fact claim that no longer matches the source of truth it cites. This does not invalidate any underlying number (the assumptions were approved, not rejected), and it errs in the conservative direction (understating rigor, not overstating it) — but it is a factual claim that must be corrected for the section to accurately represent its own evidentiary basis before Stage 10. |
| 11 | Funding requirement/allocation/monetization narrative (§9.6); "USD175mn fully funded from internal cash" (TLB-020 p.16) | `Investment_Portfolio_Register.md`; TLB-020 p.16 | PASS | Consistent. |
| 12 | Traceability table (bottom of file) | Cross-checked against `Scenarios_v2.md`, `Investment_Portfolio_Register.md`, `Investment_Relationship_Map.md`, `EBITDA.md`, `Assumptions_Register.md`, `DEC-008` | PASS (except propagates the same "-9% y/y" — correctly stated here, in contrast to the error in §9.3's body text) | The Traceability table itself states the Q1 2026 figure correctly as "-9% y/y" — confirming the error identified in Row 7 is a localized drafting slip in §9.3's table cell, not a wholesale misunderstanding of the source. |
| 13 | Cross-references to Section 2 and Section 4 v2 drafts ("See also"; provenance note's "per Section 4's narrative-only treatment") | `Section_02_Business_Description.md`, `Section_04_Value_Proposition.md` (both exist in `Business_Plan_Drafts_v2/`) | PASS | Verified: Section 4 v2 does argue the ~2.2:1 Everyday App:Food-leadership weighting narratively only (§4.1), consistent with `DEC-008`. |
| 14 | Geographic Evidence Rules compliance — all FY2026 guidance/scenario figures tagged Group; ASM-016 (GCC+Jordan→Egypt/non-GCC) and ASM-020 (Egypt pro-rata exposure) both carry inference/illustrative labels | `Geographic_Evidence_Rules.md` | PASS | No untagged geography transfer found. No Egypt-specific figure is presented as Group-proven or vice versa anywhere in this section. |

---

## Hard failures (block Stage 10 until fixed)

**Failure 1 — Miscited margin-compression figure (§9.3, Downside row).**
"(Q1 2026 actual already 4.8%, -9pp y/y)" must be corrected. Every underlying source (TLB-020,
`Scenarios_v2.md`, `Value_Driver_Tree_v2.md` N-35, `EBITDA.md`) states "-9% y/y" referring to the
Adjusted EBITDA *dollar* figure's year-on-year decline, not a 9-percentage-point margin move. **Fix:**
either (a) restate as "-9% y/y" (matching the source and this section's own Traceability table), or (b)
if a percentage-point figure is wanted, cite the correct one — margin fell from 6.3% (Q1'25 pro forma) to
4.8% (Q1'26), i.e. **-1.5pp**, or from 6.0% (Q4'25 baseline) to 4.8%, i.e. **-1.2pp** — and label which
comparator is being used. Do not conflate "9% decline in dollar EBITDA" with "9 percentage points of
margin."

**Failure 2 — Stale assumption-status claim (§9.5 and provenance note).**
"All cited assumptions (ASM-015–028) carry `status: Proposed`, not `Approved`" no longer matches
`Assumptions_Register.md`'s current state — all fourteen rows were moved to `Approved` on 2026-07-23,
the same date as this draft, in the Final Execution Readiness Report pass. The register's own text
explicitly instructs future citation audits to reflect the current `Approved` status. **Fix:** update
§9.5's table and the provenance-note banner to state ASM-015–028 are `status: Approved` (Tier: Forecast,
per the register), and correct the sentence "not yet citable as settled inputs" accordingly. This is a
correction in the direction of *more* rigor being available, not less — no number changes, only the
status label.

## Non-blocking limitations (do not require redraft, but worth noting)
- The section correctly and repeatedly flags that no return/ROI/payback figure exists for either
  investment bucket — this is itself Fact-tier (confirmed independently in three separate notes) and is
  not weakened by either failure above.
- `DEC-009`'s allocation ranges (`ASM-029`–033) are correctly kept out of Section 9's headline exhibits
  per the mandatory placement rule, consistent with the Investment Portfolio Register.

## Verdict
**FAIL.** Two citation-audit failures identified, both narrowly scoped and mechanically fixable without
touching the section's substantive financial narrative or recommendations: (1) a numeric
percentage-vs-percentage-point miscitation in §9.3's downside scenario row, and (2) a stale
Proposed/Approved status claim for ASM-015–028 in §9.5 and the provenance note. Per this project's 0%
tolerance rule, Section 9 cannot proceed to Stage 10 (QA Review) until both are corrected. No geography
misattribution, no untraceable figures, and no DEC-008/DEC-009/USD175mn inconsistencies were found — the
section's investment-total, bucket-split, funding-sequence, and headline-scenario citations are all
accurate and internally consistent with the current Decision Log and Forecast Layer state.

## See also
- `vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md` — audited file
- `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`
- `vault/Decisions/Assumptions_Register.md`, `DEC-004`, `DEC-005`, `DEC-008`, `DEC-009`, `DEC-010`
- `vault/Decisions/Investment_Portfolio_Register.md`
- `vault/Knowledge/Topics/EBITDA.md`, `vault/Knowledge/Investment_Relationship_Map.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Knowledge/Sources/TLB-019_q4-fy25-results-presentation.md`,
  `vault/Knowledge/Sources/TLB-020_q1-2026-results-presentation.md`

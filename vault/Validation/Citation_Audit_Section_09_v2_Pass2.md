---
type: validation
section: 9 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md
pipeline_stage: Independent Pass 2 citation re-check (per bp-orchestrator.md "Known runtime constraint")
run_date: 2026-07-24
auditor: independent Pass 2 reviewer (fresh thread, no memory of drafting)
status: FAIL — one hard, internally-inconsistent unit error found (first citation audit ever run on
  this section); fix is a single-clause correction, not a redraft. DEC-008/DEC-009 compliance,
  allocation-total arithmetic, and the 2026-07-23/2026-07-24 DEC-009 edit are all independently
  verified clean.
---

# Citation Audit — Section 9 (Financial Plan, v2), Independent Pass 2

## Independence note
No prior citation audit exists for the v2 draft of this section (`Citation_Audit_Section_09.md` under
`Business_Plan_Drafts_v2/` was never created — only a same-named file for the pre-pivot
`Business_Plan_Drafts/` v1 draft exists, out of scope). This is the section's first citation audit
against the v2 (Group-wide) content, and the first independent re-check of the 2026-07-23/2026-07-24
DEC-009 edits specifically. Tools used: Read, Grep, Write.

## Method
Walked the section sentence by sentence and table row by row. Opened every cited vault note directly:
`vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`,
`vault/Decisions/Investment_Portfolio_Register.md`, `vault/Decisions/Assumptions_Register.md`,
`DEC-008`, `DEC-009`, `DEC-010`, `Topics/EBITDA.md`, and the underlying Source notes
(`TLB-020_q1-2026-results-presentation.md`, `TLB-014_investor-presentation-may2026.md`,
`TLB-019_q4-fy25-results-presentation.md`) plus the two raw press-release extracts in `Input_Data/`
(`2026-05-12_talabat_Q1_2026_results_press_release.md`, `2026-02-13_talabat_Q4_FY2025_results_press_release.md`).
Independently re-derived the USD175mn = ~120mn + ~55mn (= ~75mn opex + ~45mn capex) arithmetic rather
than trusting the draft's own addition, and independently re-checked whether the section's own DEC-009
edit is internally consistent (not just consistent with DEC-009 in isolation).

## Hard failure

### Failure 1 — "-9pp y/y" conflates a percentage change with a percentage-point change, and is internally inconsistent with the section's own Traceability table
**Text (§9.3, downside-case row):** "Toward/below 4.4% (Q1 2026 actual already 4.8%, **-9pp y/y**)"

I checked the underlying disclosure directly. `Input_Data/01_Company_Filings/2026-05-12_talabat_Q1_2026_results_press_release.md`'s Q1'26-vs-Q1'25 table states: "Adjusted EBITDA | 130 | 143 | **−9%**" and separately "— margin (% of GMV) | 4.8% | 6.3% | **−1.5pp**". `vault/Knowledge/Sources/TLB-020_q1-2026-results-presentation.md` confirms: "Q1'26 Adjusted EBITDA: USD 130mn, 4.8% of GMV, **-9% y/y** (down from 6.3% margin in Q1'25 pro forma)." `vault/Forecasts/Value_Driver_Tree_v2.md` N-35 states the same figure identically: "Q1 2026 actual: Adjusted EBITDA USD 130mn, 4.8% of GMV, **-9% y/y**." `vault/Forecasts/Scenarios_v2.md`'s downside case states it a third time, identically: "Q1 2026 Adjusted EBITDA already fell to 4.8% of GMV (**-9% y/y**)."

So the disclosed "-9%" figure is the year-on-year **percentage decline in the absolute Adjusted EBITDA
dollar amount** (USD143mn → USD130mn, a 9% fall), **not** a 9-percentage-point decline in the margin —
the actual year-on-year margin change is **-1.5 percentage points** (6.3% → 4.8%). Writing "-9pp y/y"
asserts something the corpus does not disclose and that is not true of any figure in this chain (a
9-point margin collapse would have taken the margin from 6.3% to roughly -2.7%, which is nonsensical;
even measured against the highest plausible comparator in this file, 6.0%, a 9pp fall would go
substantially negative). This is exactly the class of error the Financial Integrity Gate's check 6
exists to catch ("no percentage-point vs. percentage confusion").

**This is also a self-contained internal inconsistency, not just a citation-vs-source mismatch:**
Section 9's own Traceability table, four rows below the error, cites the same figure correctly: "Q1 2026
EBITDA margin 4.8%, **-9% y/y** | `Scenarios_v2.md` downside case." The section disagrees with itself.
**Fix:** change "-9pp y/y" to "-9% y/y" in §9.3's downside-case cell, and, for extra clarity given how
easily this is misread, consider adding "(EBITDA dollar decline; the year-on-year margin change is
-1.5pp, 6.3%→4.8%)" so the two distinct percentage concepts aren't left for the reader to disentangle.

## Moderate finding (flagged, not a hard failure — an inherited, unreconciled corpus ambiguity)

### Finding 2 — "6.0% (Q4 2025 actual)" labels a bridge-baseline figure as an actual print, when a different, also-genuinely-disclosed 6.3% actual exists for the same quarter
**Text (§9.4):** "Adjusted EBITDA margin moving from **6.0% (Q4 2025 actual)** to a realized 4.8% (Q1
2026 actual)..."

Two different Q4 2025 Adjusted EBITDA margin figures exist in the corpus, both genuinely disclosed:
- `TLB-019_q4-fy25-results-presentation.md` (the actual Q4/FY2025 earnings presentation, talabat-only
  basis): "Q4'25 Adj. EBITDA: USD 156mn, **6.3%** of GMV (p.5, p.15)" — and this figure is corroborated
  by `Input_Data/01_Company_Filings/2026-02-13_talabat_Q4_FY2025_results_press_release.md`'s own table:
  "Adjusted EBITDA | 156 | 139 | 13% | — margin (% of GMV) | **6.3%** | 6.8% | −0.5pp."
- `TLB-019`/`TLB-014`/`TLB-020` separately describe a **"6.0% (Q4'25 baseline)"** / **"6.0% (Q4'25
  constant margin)"** / **"(Q4'25A)"** figure used specifically as the starting point of the FY2026
  margin-bridge walk (TLB-019 p.19: "6.0% (Q4'25 constant margin) → 5.3% after G&R product-mix shift...";
  TLB-020 p.12: "6.0% (Q4'25 baseline) → 4.8% (Q1'26 actual)"). This appears to be a pro-forma-including-
  instashop-basis figure (TLB-014's own Q4 2025 standalone table separately shows "Adj. EBITDA USD 159mn
  (**6.0%** of GMV)" on that basis) — distinct in scope from TLB-019's talabat-only 6.3% actual.

`Value_Driver_Tree_v2.md` N-34 already flags this precise discrepancy as an **unreconciled Open
Question** ("No document explains how the percentage-point attributions were calculated... unreconciled
in the corpus"), and per the citation-audit skill's own rule, a citation to a note with an unresolved
internal discrepancy is not automatically a failure — but the audit must check whether the discrepancy
was independently re-resolved via a `DEC-` record. **I found no `DEC-` record resolving the 6.0%-vs-6.3%
Q4 2025 question.** Section 9.4's use of the word "actual" for the 6.0% figure asserts one reading of an
unresolved ambiguity without flagging it as such.

**This is not counted as a hard, blocking Section-9-specific failure**, for three reasons: (1) it is a
genuinely disclosed number, not a fabrication; (2) TLB-014 itself labels the figure "(Q4'25A)," which a
reasonable reader would parse as "actual," so the label is not unreasonable on its face; (3) this exact
"6.0% Q4 2025 [actual/baseline]" framing already appears, identically treated, across multiple other
`Business_Plan_Drafts_v2/` sections (Executive Summary, Sections 2, 3, 4, 10) and prior QA/citation-audit
passes on those sections passed it without comment — flagging it as a fresh Section-9-only defect would
be inconsistent treatment of a repo-wide, already-accepted convention. **Recommended, non-blocking fix:**
either use TLB-020's own label ("6.0%, Q4'25 baseline") instead of "actual," or add a one-clause footnote
noting the distinct, also-disclosed 6.3% talabat-only Q4 2025 actual print, so the ambiguity Value Driver
Tree N-34 already names is acknowledged here too, not silently resolved in prose.

## Confirmed correct (independently re-verified)

- **USD175mn = ~USD120mn Everyday App (~USD75mn opex + ~USD45mn capex) + ~USD55mn Food-leadership** —
  independently re-added (75+45=120; 120+55=175) and verified against
  `Investment_Portfolio_Register.md`'s "Total envelope" and "Disclosed components" sections, and against
  `DEC-010`'s reconciliation (TLB-020, p.12/p.16). **PASS.**
- FY2026 guidance range (GMV +11-14% cFX, Revenue +14-17% cFX, Adj. EBITDA 4.4-4.8% of GMV, FCF 3.2-3.6%
  of GMV) — verified verbatim against `Scenarios_v2.md`'s anchor paragraph and TLB-020/TLB-014's own
  guidance tables. **PASS.**
- `Value_Driver_Tree_v2.md`'s "45 nodes" and the exact governing-chain sentence ("Investment → capability
  deployment → adoption/operational change → customer/partner behaviour → order frequency →
  multi-vertical usage → basket/AOV → retention/CLV → GMV → revenue → gross profit → EBITDA → cash
  flow") — verified against the tree's own summary table (41 Fact + 6 Assumption = 45 nodes) and its
  "Required chain shape" section, quoted correctly. **PASS.**
- The "Central evidence-gap this tree does not paper over" quotation (§9.1) — verified verbatim against
  `Value_Driver_Tree_v2.md`'s identically-titled section. **PASS** (this is a faithful, attributed quote
  of the source's own framing; I note for the record that a literal reading of "every node... is an
  Assumption, not a Fact" is broader than the tree's own per-node Fact/Assumption tagging would suggest
  in isolation — most Stage 4-13 nodes are individually tagged FACT — but the source's own intent, read
  in context, is about the *causal link to the investment* being unproven, not about the downstream
  business facts themselves being undisclosed; since Section 9 quotes this attributively rather than
  asserting it as its own independent finding, this is not counted as a Section 9 defect).
- **9.5's Key Assumptions Register table** — every ID (ASM-015 through ASM-028) and every stated
  confidence level cross-checked individually against `Assumptions_Register.md`: all fourteen are
  `status: Approved`, and every confidence level (Low for ASM-015/016/017/018/019/020/028; Medium for
  ASM-021 through ASM-027) matches the register exactly. **PASS.**
- **`DEC-008` compliance** — confirmed only the Group-level base/upside/downside rows appear in §9.3;
  `ASM-018`'s 2.2:1 split is never shown as a quantified figure anywhere in Section 9, referenced only
  narratively via its restriction note in §9.5. **PASS.**
- **`DEC-009` compliance, and internal consistency of the section's own 2026-07-23/2026-07-24 edit** —
  independently re-read `DEC-009` in full (not just trusted the section's summary of it). Confirmed: (a)
  the funding-sequence recommendation stated in §9.2/§9.6 (OPT-002/OPT-003 near-term priority; OPT-001/
  OPT-005 continue-at-pace; OPT-004 longer-horizon) matches `DEC-009`'s "Decision" section verbatim in
  substance; (b) the middle-path resolution language ("commit to a recommended funding sequence...
  allocation ranges remain... never a headline financial commitment... only as clearly labeled
  illustrative sensitivity/appendix exhibits") is accurately paraphrased; (c) **no `ASM-029`-`033` dollar
  figure appears anywhere in Section 9's own text** (confirmed by direct search) — only the option IDs
  and the funding-sequence narrative — so the mandatory "Agentic OS analytical recommendation, not a
  disclosed talabat allocation" sentence is correctly *not* required inside Section 9 itself (it would
  only be required if a dollar range were shown here); (d) I independently checked
  `Section_14_Appendices.md`, which Section 9 points readers to for the actual ranges, and confirmed the
  mandatory sentence does appear there. **PASS — the section's own DEC-009 edit is internally consistent
  and consistent with the source decision; no contradiction found between its 2026-07-23 and 2026-07-24
  states.**
- No disclosed ROI/payback/return figure for either bucket (§9.4) — independently verified against
  `Investment_Relationship_Map.md`'s "What this note deliberately does not claim" section and
  `Topics/EBITDA.md`'s Open Questions (both confirm no segment- or bucket-level return figure exists).
  **PASS.**
- "OPT-002 (talabat pro Egypt/Iraq — cheap, fast, reversible)" and "OPT-003 (Food-leadership GCC-3 —
  tightly evidenced)" characterizations (§9.2) — verified against `DEC-009`'s own written comparison
  ("OPT-002... the highest reversibility and execution feasibility... the strongest candidate
  specifically *for piloting*"; "OPT-003... the most tightly evidenced option for its specific, narrow
  geography"). **PASS.**

## Geography check
Every figure in Section 9's headline exhibits (§9.3, §9.4) is Group-level, correctly so per `DEC-008`.
The one Egypt reference in Section 9 (`ASM-020`'s ≈USD19.3m row in the §9.5 table) is correctly labeled
"illustrative worked-example only, not a budget line," matching `ASM-020`'s own register text exactly —
confirmed no dollar figure or Egypt reference appears anywhere else in the section's body prose. No
instance of Geographic Evidence Rules Failure Patterns 1-6 found.

## Summary
- **1 hard failure**, newly identified by this Pass 2 audit: "-9pp y/y" should be "-9% y/y" in §9.3's
  downside-case cell — a percentage-vs-percentage-point conflation that is also internally inconsistent
  with the section's own Traceability table four rows later.
- **1 moderate, non-blocking finding**: "6.0% (Q4 2025 actual)" in §9.4 labels a genuinely-disclosed but
  differently-scoped bridge-baseline figure as an "actual" print, when a distinct, also-genuinely-
  disclosed 6.3% talabat-only Q4 2025 actual exists for the same quarter — an ambiguity the corpus itself
  (and `Value_Driver_Tree_v2.md` N-34) already flags as unreconciled, and which this section (consistent
  with several other already-passed sections in this vault) resolves silently in one direction rather
  than flagging.
- Allocation-total arithmetic, DEC-008 compliance, and the section's own 2026-07-23/2026-07-24 DEC-009
  edit are all independently re-verified and found correct and internally consistent.

## Verdict
**FAIL — not yet citation-clean**, on the strength of Failure 1 alone (Finding 2 is documented but not
blocking). Per the citation-audit skill's zero-tolerance rule, the "-9pp y/y" defect must be corrected
before this section can be cited as verified. The fix is a single-clause correction (change "pp" to
"%"), not evidence that the section's financial architecture or DEC-008/DEC-009 compliance is unsound —
those are independently confirmed clean.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`
- `vault/Decisions/Investment_Portfolio_Register.md`, `vault/Decisions/Assumptions_Register.md`
- `DEC-008`, `DEC-009`, `DEC-010`
- `vault/Knowledge/Sources/TLB-020_q1-2026-results-presentation.md`,
  `TLB-014_investor-presentation-may2026.md`, `TLB-019_q4-fy25-results-presentation.md`
- `Input_Data/01_Company_Filings/2026-05-12_talabat_Q1_2026_results_press_release.md`,
  `2026-02-13_talabat_Q4_FY2025_results_press_release.md`

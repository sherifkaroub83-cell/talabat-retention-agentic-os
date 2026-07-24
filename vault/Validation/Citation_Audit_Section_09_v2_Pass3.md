---
type: validation
section: 9 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md
pipeline_stage: Independent Pass 3 re-verification (fresh audit of current file content, no memory of
  prior drafting/fixing sessions)
run_date: 2026-07-24
auditor: independent Pass 3 reviewer (fresh thread)
status: PASS — the Pass 2 "-9pp y/y" hard failure is confirmed fixed and correct in the current text;
  a full fresh trace of every numeric/named-fact claim, independent recomputation of all arithmetic, and
  independent re-verification of DEC-008/DEC-009 compliance find no new defect. The one Pass 2 moderate
  finding (6.0%-vs-6.3% Q4 2025 labeling) remains present, unchanged, and is again treated as
  non-blocking for the same reasons Pass 2 gave.
---

# Citation Audit — Section 9 (Financial Plan, v2), Independent Pass 3

## Independence note
This is a fresh audit of the CURRENT file content, not a check of the Pass 2 reviewer's diff or
reasoning. `vault/Validation/Citation_Audit_Section_09_v2_Pass2.md` was read first (per task
instructions) to know what to re-check, but every claim below was independently re-traced to source,
and all arithmetic was independently recomputed from the underlying Facts/Decisions rather than
trusting Pass 2's own re-derivation.

## Method
Read the full current text of `Section_09_Financial_Plan.md` line by line. Opened and read in full:
`DEC-008_section9-headline-bucket-split-presentation.md`, `DEC-009_investment-options-ranking-and-
allocation-priority.md`, `vault/Forecasts/Scenarios_v2.md`, `vault/Forecasts/Value_Driver_Tree_v2.md`,
`vault/Decisions/Assumptions_Register.md` (all 33 rows, focused on ASM-015–033), `vault/Decisions/
Investment_Portfolio_Register.md`, `vault/Architecture/Geographic_Evidence_Rules.md`, the Financial
Integrity Gate's 11-check template (`vault/Validation/Financial_Integrity_Gate.md`, run for Sections
12/13 but used here as the applicable rubric for Section 9), `vault/Knowledge/Facts/Marketplace_Facts.md`,
`vault/Knowledge/Facts/Revenue.md`, `vault/Knowledge/Topics/EBITDA.md`, `vault/Knowledge/
Investment_Relationship_Map.md`, `vault/Knowledge/Sources/TLB-020_q1-2026-results-presentation.md`, and
the raw press-release extract `Input_Data/01_Company_Filings/2026-05-12_talabat_Q1_2026_results_press_release.md`
(its own Q1'26-vs-Q1'25 table, the actual disclosure source for the previously-flagged cell). Also spot-
checked `Section_14_Appendices.md` for the DEC-009 mandatory-disclosure-sentence placement and
`vault/Validation/Financial_Integrity_Gate.md` for the OPT-003 fidelity defect found in Section 12, to
confirm Section 9 does not repeat it.

## Re-check of the Pass 2 hard failure ("-9pp y/y")

**Current text (§9.3, downside-case cell):** "Toward/below 4.4% (Q1 2026 actual already 4.8%, **-9% y/y
in absolute EBITDA dollars**)."

**Confirmed fixed and correct.** Independently re-derived against
`Input_Data/01_Company_Filings/2026-05-12_talabat_Q1_2026_results_press_release.md`'s own table: Adjusted
EBITDA USD130mn vs USD143mn Q1 2025 = **-9%** (dollar decline), margin 4.8% vs 6.3% = **-1.5pp** (margin
change) — two distinct, correctly-labeled figures. The current cell now writes "-9%" (not "-9pp") and adds
the clarifying phrase "in absolute EBITDA dollars," which is not just a minimal fix but actively better
than the Pass 2 reviewer's own suggested fix (which proposed the "%" correction plus an optional
parenthetical). The Traceability table's own row ("Q1 2026 EBITDA margin 4.8%, -9% y/y | `Scenarios_v2.md`
downside case") also correctly reads "-9%," so the internal self-contradiction Pass 2 found (headline cell
disagreeing with the section's own Traceability table) is resolved — both now agree, and both agree with
`Scenarios_v2.md`'s downside case ("Q1 2026 Adjusted EBITDA already fell to 4.8% of GMV (-9% y/y)") and
`Value_Driver_Tree_v2.md` N-35 ("Q1 2026 actual: Adjusted EBITDA USD 130mn, 4.8% of GMV, -9% y/y").
**No residual pp-vs-% defect found anywhere else in the section** — checked every other percentage figure
in §9.3, §9.4, §9.5 (GMV/Revenue/EBITDA/FCF ranges, the 6.0%→4.8%→4.4-4.8% bridge, ASM-018's 2.2:1 ratio
which is never shown as a percentage) for the same error class; none found.

## Fresh arithmetic recomputation (independent of any prior pass)

- **USD175mn = ~120mn + ~55mn:** 120 + 55 = 175. **Correct.**
- **~USD120mn = ~75mn opex + ~45mn capex:** 75 + 45 = 120. **Correct.** Both cross-checked against
  `Investment_Portfolio_Register.md`'s "Disclosed components" table and `Value_Driver_Tree_v2.md` N-02/
  N-03, which cite the same figures to TLB-020 p.12/p.16 and TLB-014 p.16/p.19.
- **Q1 2026 EBITDA arithmetic:** 130/2,685 (USD130mn Adjusted EBITDA / USD2,685mn GMV, per the raw Q1
  2026 press release table) = 4.84% ≈ "4.8% of GMV" as stated. (130-143)/143 = -9.09% ≈ "-9%" as stated.
  (4.8%-6.3%) = -1.5pp exactly as the source states. All three independently recomputed and consistent
  with the section's claims.
- **ASM-020's Egypt ≈USD19.3m pro-rata figure:** independently recomputed from `Facts/Revenue.md`'s own
  audited figures — Egypt segment external revenue USD509,936,177 / Group total revenue
  USD4,651,861,456 = 10.96% ≈ "~11.0%" as the register states; 11.0% × USD175mn = USD19.25mn ≈ "≈USD19.3m"
  as both the register and Section 9 §9.5 state (consistent with rounding). Section 9 correctly cites this
  as an "illustrative worked-example only, not a budget line," matching `ASM-020`'s own register language
  verbatim.
- **FY2026 guidance range figures (§9.3 table, and the "Answer, stated first" section):** GMV +11-14%
  cFX, Revenue +14-17% cFX, Adj. EBITDA 4.4-4.8% of GMV, FCF 3.2-3.6% of GMV — verified verbatim against
  the raw Q1 2026 press release's own "FY 2026 guidance (updated 12 May 2026)" section and against
  `Scenarios_v2.md`'s anchor paragraph. **Correct**, no figure altered or rounded differently between
  source and draft.
- **No other scenario-delta or break-even arithmetic is constructed anywhere else in the section** — §9.4
  explicitly declines to construct a break-even/payback calculation, consistent with the corpus's own
  disclosed absence of a return figure (independently confirmed below).

## DEC-008 compliance (independently re-verified)

Read `DEC-008` in full directly (not just Section 9's summary of it). Confirmed: Option 1 (base case
only) was the resolution — Section 9's headline exhibits (§9.3) show only the Group base/upside/downside
scenario set; `ASM-018`'s ~2.2:1 Everyday App:Food-leadership split is never shown as a quantified figure
anywhere in Section 9's body (confirmed by direct text search — the only appearance is the narrative,
non-quantified restriction note in §9.5's assumptions table, which correctly states "restricted per
DEC-008, narrative only"). **PASS.**

## DEC-009 compliance (independently re-verified, including the specific fidelity check that failed
elsewhere in the plan)

Read `DEC-009` in full directly. Confirmed:
- The funding-sequence language in §9.2 and §9.6 ("near-term priority to OPT-002 ... and OPT-003 ...;
  OPT-001 ... and OPT-005 ... continue at pace; OPT-004 ... is a longer-horizon build") matches DEC-009's
  own "Decision" section verbatim in substance: "OPT-002 and OPT-003 as the near-term, low-risk/high-fit
  priority; OPT-001 and OPT-005 continue-at-pace; OPT-004 as the longer-horizon build."
- **This is the specific point where `vault/Validation/Financial_Integrity_Gate.md` found a FAIL in
  Section 12** (OPT-003 miscast there as monitor-only/deferred rather than a near-term joint priority with
  OPT-002). I specifically checked Section 9 for the same defect: both §9.2 and §9.6 correctly pair
  OPT-002 and OPT-003 together as the near-term priority. **Section 9 does not repeat Section 12's
  defect — PASS.**
- No `ASM-029`–`033` dollar figure appears anywhere in Section 9's own text (confirmed by direct search);
  only option IDs and the funding-sequence narrative appear, so the mandatory "Agentic OS analytical
  recommendation, not a disclosed talabat allocation" sentence is correctly not required inside Section 9
  itself. Independently confirmed the sentence does appear verbatim in `Section_14_Appendices.md` §14.3,
  where the actual ranges are shown (line: "**This is an Agentic OS analytical recommendation, not a
  disclosed talabat allocation.**").

## Fresh trace of every remaining numeric/named-fact claim

- "Investment → capability deployment → adoption/operational change → customer/partner behaviour → order
  frequency → multi-vertical usage → basket/AOV → retention/CLV → GMV → revenue → gross profit → EBITDA →
  cash flow" (§9.1) — verified verbatim against `Value_Driver_Tree_v2.md`'s "Required chain shape."
  **PASS.**
- "45 nodes" (§9.1) — verified against the tree's own summary table (41 Fact + 6 Assumption = 45).
  **PASS.**
- "Central evidence-gap this tree does not paper over" quotation (§9.1) — verified verbatim as an
  attributed quote of `Value_Driver_Tree_v2.md`'s identically-titled section. **PASS** (attributed
  quotation, not asserted as the section's own independent finding).
- §9.5's fourteen Assumption Register rows (ASM-015 through ASM-028) — every ID and confidence level
  cross-checked individually against `Assumptions_Register.md`: all fourteen are `status: Approved`, all
  confidence levels match exactly (Low: ASM-015/016/017/018/019/020/028; Medium: ASM-021–027). **PASS.**
- "No disclosed ROI/payback/return figure for either bucket" (§9.4) — independently verified against
  `Investment_Relationship_Map.md`'s "What this note deliberately does not claim" section ("No disclosed
  ROI or payback figure for either bucket") and `Topics/EBITDA.md`'s Open Questions (no segment-level
  EBITDA figure disclosed; no document explains the FY2026 margin-bridge pp attributions). **PASS.**
- "a temporary, deliberate step-down management itself frames as investment, not deterioration (TLB-020,
  page 16)" (§9.4) — verified against `TLB-020_q1-2026-results-presentation.md`'s own quoted text: "These
  are investments rather than costs because the growth they generate is expected to offset the margin
  impact over time" (p.16). **PASS.**
- "USD175mn total, Board-approved February 2026, fully funded by internal cash" (§9.2) — verified against
  `Investment_Portfolio_Register.md`'s "Total envelope" section and `Value_Driver_Tree_v2.md` N-01/N-39.
  **PASS.**
- "OPT-002 (talabat pro Egypt/Iraq — cheap, fast, reversible)" / "OPT-003 (Food-leadership GCC-3 —
  tightly evidenced)" characterizations (§9.2) — verified against DEC-009's own written comparison
  language. **PASS.**

## Moderate finding carried forward from Pass 2 (unchanged, still non-blocking)

### "6.0% (Q4 2025 actual)" in §9.4 still labels a bridge-baseline figure as an "actual" print, alongside a
distinct, also-disclosed 6.3% talabat-only Q4 2025 actual

**Text (§9.4, unchanged from Pass 2):** "Adjusted EBITDA margin moving from **6.0% (Q4 2025 actual)** to
a realized 4.8% (Q1 2026 actual) to a 4.4-4.8% guided range (FY2026)."

Independently re-confirmed both figures are genuinely disclosed but differently scoped: TLB-019's Q4/FY2025
earnings presentation states Q4'25 Adj. EBITDA USD156mn, **6.3%** of GMV (corroborated by the Q4 FY2025
press release's own table: "Adjusted EBITDA | 156 | 139 | 13% | — margin (% of GMV) | 6.3% | 6.8% |
−0.5pp"), while TLB-019/TLB-020 separately use a **"6.0% (Q4'25 baseline/constant margin)"** figure
specifically as the FY2026 margin-bridge's starting point. `Value_Driver_Tree_v2.md` N-34 already flags
this as an unreconciled Open Question, and I found no `DEC-` record resolving it. This is not counted as
a new or escalated defect this pass, for the same reasons Pass 2 gave: (1) genuinely disclosed, not
fabricated; (2) TLB-014 itself labels the figure "(Q4'25A)," a defensible-on-its-face reading as
"actual"; (3) this identical framing already appears, unchanged, across several other sections
(Executive Summary, Sections 2, 3, 4, 10) that have separately cleared citation audit — treating Section
9 alone as newly defective for a repo-wide convention would be inconsistent. **Recommended, still
non-blocking fix (unchanged from Pass 2):** use TLB-020's own label ("6.0%, Q4'25 baseline") instead of
"actual," or footnote the distinct 6.3% talabat-only actual.

## Geography check (fresh pass against Geographic_Evidence_Rules.md's six failure patterns)

Every figure in §9.3/§9.4's headline exhibits is Group-level, correctly tagged, per `DEC-008`. The single
Egypt reference in the section (`ASM-020`'s ≈USD19.3m row, §9.5) is labeled "illustrative worked-example
only, not a budget line," matching the register's own inferred-applicability framing exactly — no dollar
figure or Egypt reference appears anywhere else in the section's body prose. No instance found of: (1)
Group/GCC evidence presented as Egypt-proven, (2) Egypt figures presented as Group-representative, (3)
"non-GCC" used as a synonym for Egypt, (4) pre/post-FY2025 non-GCC figures mixed, (5) "MENA" used as a
stand-in for the 8-market footprint, or (6) an external market-research figure blended arithmetically
with a Group/GCC/Egypt figure without reconciliation. **PASS — no Geographic Evidence Rules violation
found.**

## Financial Integrity Gate — 11-check rubric applied to Section 9 (fresh, independent scoring)

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Allocation totals reconcile | Pass | 175 = 120 + 55; 120 = 75 + 45, both independently re-added. |
| 2 | Scenario arithmetic internally consistent | Pass | Base/upside/downside rows all trace to `Scenarios_v2.md`'s top-level scenarios verbatim; no altered figure. |
| 3 | Units consistent within each exhibit | Pass | "-9pp" defect from Pass 2 is fixed; no other pp/% mixing found in a fresh full-section scan. |
| 4 | Currency stated and consistent | Pass | USD throughout. |
| 5 | Time periods stated and not silently mixed | Pass | FY2026 guidance, Q1 2026 actual, and Q4 2025 baseline are each explicitly dated in every cell; no silent mixing (the Q4 2025 6.0%-vs-6.3% ambiguity is a labeling issue, not an undated mixing issue). |
| 6 | Percentage logic correct | Pass | "-9% y/y" (dollar decline) now correctly distinguished from the "-1.5pp" margin change (not restated in-section, but not misstated either); no pp/% confusion remains. |
| 7 | No double counting | Pass | No additive dollar totals constructed beyond the disclosed 175=120+55. |
| 8 | No additive stacking of overlapping uplift statistics | N/A | Section 9 does not cite module-level uplift statistics directly (deferred to Scenarios_v2.md). |
| 9 | Revenue/GMV/gross profit/EBITDA/FCF not mixed or substituted | Pass | §9.3's table keeps GMV, Revenue, EBITDA margin, and FCF margin as distinct rows throughout. |
| 10 | No unlabeled false precision | Pass | ASM-020's Egypt figure and all ASM-015–028 rows are explicitly labeled illustrative/proxy/directional; no OS-constructed range shown as a bare point figure. |
| 11 | `DEC-008` constraint respected (no quantified 2.2:1 sub-case) | Pass | Confirmed — no dollar figure or ratio tied to ASM-018 appears as a quantified exhibit. |
| — (task-specific) | `DEC-009`'s funding sequence accurately represented | Pass | Both §9.2 and §9.6 correctly pair OPT-002/OPT-003 as joint near-term priority — Section 9 does not repeat Section 12's OPT-003 fidelity defect. |

## Summary
- **Pass 2's hard failure ("-9pp y/y") is confirmed fixed and correct**, independently re-derived from
  the raw Q1 2026 press release rather than trusted from the prior audit's own re-derivation. The
  internal self-contradiction with the section's own Traceability table (also flagged by Pass 2) is
  likewise resolved — both cells now agree.
- **No new defect found** across a full fresh trace of every numeric/named-fact claim in the section,
  independent recomputation of all arithmetic (175=120+55, 75+45=120, the Q1 2026 EBITDA dollar/margin
  math, and the Egypt ≈19.3m pro-rata proxy), and an independent re-read of `DEC-008` and `DEC-009` in
  full (not just Section 9's own summary of them) — including the specific OPT-003 fidelity check that
  produced a FAIL in Section 12, which Section 9 does not repeat.
- **1 moderate, non-blocking finding carries forward unchanged from Pass 2**: the "6.0% (Q4 2025 actual)"
  label in §9.4, alongside a distinct, also-genuinely-disclosed 6.3% talabat-only Q4 2025 actual — an
  unreconciled corpus ambiguity (`Value_Driver_Tree_v2.md` N-34) this section resolves silently in one
  direction, consistent with several other already-cleared sections' identical treatment.
- Allocation-total arithmetic, DEC-008 compliance, and DEC-009 compliance (including the funding-sequence
  fidelity point that failed elsewhere in the plan) are all independently re-verified clean.

## Verdict
**PASS — citation-clean.** The single hard failure identified by Pass 2 is confirmed corrected in the
current text and does not recur elsewhere in the section. No new hard failure was found in this
independent, ground-up re-verification. Section 9 may proceed past the citation-audit gate; Finding 2
(the 6.0%-vs-6.3% Q4 2025 labeling ambiguity) remains open as a documented, non-blocking, repo-wide
convention issue, consistent with how it was treated in Pass 2 and in the other sections that already
carry it.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_09_Financial_Plan.md`
- `vault/Validation/Citation_Audit_Section_09_v2_Pass2.md`
- `vault/Validation/Financial_Integrity_Gate.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`
- `vault/Decisions/Investment_Portfolio_Register.md`, `vault/Decisions/Assumptions_Register.md`
- `vault/Decisions/Decision_Log/DEC-008_section9-headline-bucket-split-presentation.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Knowledge/Facts/Marketplace_Facts.md`, `vault/Knowledge/Facts/Revenue.md`
- `vault/Knowledge/Topics/EBITDA.md`, `vault/Knowledge/Investment_Relationship_Map.md`
- `vault/Knowledge/Sources/TLB-020_q1-2026-results-presentation.md`
- `Input_Data/01_Company_Filings/2026-05-12_talabat_Q1_2026_results_press_release.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_14_Appendices.md`

---
type: validation
sections: 9-10
pipeline_stage: "17 (whole-plan citation audit)"
run_date: 2026-07-25
auditor: independent Stage 17 reviewer
status: PASS — 0 hard failures in Sections 9/10 themselves; 1 moderate cross-section observation (informational, not a Section 9/10 defect) noted for the record
---

# Citation Audit — Whole-Plan Stage 17 — Sections 9 (Financial Plan) and 10 (Risk Analysis)

## Method

1. **Full citation trace.** Read `Section_09_Financial_Plan.md` and `Section_10_Risk_Analysis.md` in
   full, current state. For every numeric/named-fact claim, opened the specifically cited source
   (`vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`,
   `vault/Forecasts/KPI_Tree_v2.md`, `vault/Decisions/Assumptions_Register.md`,
   `vault/Decisions/Decision_Log/DEC-008`, `DEC-009`, `vault/Decisions/Investment_Portfolio_Register.md`,
   `vault/Knowledge/Entities/Executives.md`, `vault/Knowledge/Topics/GCC vs non-GCC.md`,
   `vault/Knowledge/_source_text/Talabat-Holding-plc_International-Offering-Memorandum.txt`,
   `vault/Knowledge/Sources/TLB-019...md`, and others) and confirmed the specific fact/figure/node is
   actually present, not merely that the document exists. Recomputed Section 9's arithmetic directly
   (175=120+55; 120=75+45; margin-bridge sequence 6.0%→4.8%→4.4-4.8%). Checked geography tags against
   `vault/Architecture/Geographic_Evidence_Rules.md`.
2. **Cross-section reference check.** Grepped all 14 `Business_Plan_Drafts_v2/` files for every mention
   of "Section 9", "Section 10", "Section_09", "Section_10", "§9", "§10", read the surrounding context in
   Sections 1, 2, 3, 4, 6, 7, 8, 11, 12, 14 in full, and verified each cross-reference against Section 9's
   and Section 10's *current* text (post Pass-2/Pass-3 fixes).

## Hard failures

**None found in Section 9 or Section 10's own content.** All traced numeric/named-fact claims resolve
correctly to a Fact citation or an `Approved` Assumption/Decision row.

## Moderate findings

**M-1 (informational only — not a Section 9/10 defect).** Sections 2 (`Section_02_Business_Description.md`,
lines 120, 204) and 4 (`Section_04_Value_Proposition.md`, line 104) both state the FY2026 EBITDA margin
bridge as a single point, "6.0%→4.6% of GMV guided." Section 9, Section 10, Section 1, Section 3,
Section 11, and Section 14 all state the guided range as "4.4-4.8%." Traced both figures to source:
TLB-014 p.19 / TLB-019 p.19 literally say "a guided mid-range of 4.6%," and TLB-020/TLB-014/TLB-019 p.14
give the full range as 4.4-4.8% (USD 510-540mn). **Both figures are genuinely disclosed and
non-contradictory** — 4.6% is the primary source's own stated mid-point of the 4.4-4.8% range, not an
invented or stale number. This is not a Section 9 or Section 10 defect (neither section uses "4.6%"
anywhere), and it does not meet the bar of "same statistic, different value, unreconciled" since the two
framings are reconcilable point-vs-range presentations of one guided figure. Flagged for the record per
the instruction to note any statistic appearing with different values across sections, but assessed as
non-actionable for Sections 9/10's own audit and outside this auditor's assigned-section remit to fix.

No other moderate findings.

## Cross-section reference checks

| # | Reference (location) | Claim about the referenced section | Current-text verification | Result |
|---|---|---|---|---|
| 1 | Section 1 §Answer / Traceability (`Section_09_Financial_Plan.md` §9.2, §9.6) | OPT-004 is a "longer-horizon build," funding sequence OPT-002/OPT-003 near-term | Section 9 §9.2: "OPT-002... and OPT-003... near-term priority... OPT-004... is a longer-horizon build." | PASS — matches exactly |
| 2 | Section 1 (`Section_09_Financial_Plan.md` §9.3) | FY2026 base case GMV 11-14%, Revenue 14-17%, EBITDA 4.4-4.8%, FCF 3.2-3.6% | Section 9 §9.3 table: identical figures | PASS |
| 3 | Section 1 (`Section_09_Financial_Plan.md` §9.1, §9.4) | No disclosed ROI/payback/return figure for either bucket | Section 9 §9.1 ("not a quantified return... in this chain") and §9.4 ("No such figure exists in the corpus for either bucket") | PASS |
| 4 | Section 1 Addendum (2026-07-24 Pass 2 note) | "Section 9's Q1 2026 downside-case framing ('-9% y/y,' not '-9pp y/y')... not restated in this section" | Confirmed Section 1 does not restate this figure at all (grepped); Section 9's own downside cell reads "-9% y/y in absolute EBITDA dollars" — the correct, fixed unit | PASS |
| 5 | Section 1 (`Section_10_Risk_Analysis.md` §10.3, FIN-01) | Q1 2026 EBITDA margin 4.8% (vs. 6.3% y/y; vs. 6.0% Q4 2025) | Section 10 FIN-01: "Q1 2026 actual Adjusted EBITDA margin was already 4.8%... down 9% year-on-year"; dual-comparator (Problem_Charter 6.3% y/y vs. this section's Q4'25 6.0% q/q) both stated explicitly in FIN-01 | PASS |
| 6 | Section 1 (`Section_10_Risk_Analysis.md` §10.6) | Top three risks FIN-01, MKT-01, ORG-01 | Section 10 §10.6 priority quadrant: "FIN-01, MKT-01, ORG-01" (High×High) | PASS |
| 7 | Section 2 §2.3 ("Section 9 shows the financial case... bounded by DEC-008's constraint") | Section 9's headline stays at Group base-case level per DEC-008 | Section 9's provenance note and §9.3 confirm base/upside/downside are Group-level only, per DEC-008 | PASS |
| 8 | Section 4 §4.1/Answer ("range-based projections are shown in Section 9 at the Group base-case level only") | Same DEC-008 constraint | Confirmed as above | PASS |
| 9 | Section 6 §6.6 cross-check ("Section 9's headline case cites... 14-17% cFX... EBITDA margin bridge") | No contradiction with Section 9 | Section 9 §9.3 confirms 14-17% cFX revenue growth; no contradiction | PASS |
| 10 | Section 7 (line 217, 351) — "Section 9's financial case, which correctly excludes [synthetic funnel %s]"; "belongs to Section 9/12/14" | Section 9 excludes synthetic funnel figures and DEC-009 ranges | Confirmed — Section 9 contains no synthetic funnel data and no `ASM-029`-`033` dollar ranges | PASS |
| 11 | Section 8 §8.6 ("belongs to Section 9/12/14, where the [OPT-] ranges themselves are shown") | Section 9 shows the OPT- ranges | **Partially imprecise but not false**: Section 9 §9.2 explicitly states the ranges are "referenced here narratively, not shown as a headline financial exhibit" and that "the constructed dollar ranges belong in a Section 14 appendix/sensitivity exhibit... never here." Section 8's phrasing groups Section 9 together with 12/14 as where the ranges "are shown," which slightly overstates Section 9's role (Section 9 explicitly does NOT show the ranges; only Section 14 does). Not a hard citation failure since Section 8 makes no verifiable numeric claim depending on this — see note below. | NOTE (low-severity phrasing looseness, not a citation-audit failure) |
| 12 | Section 10 §10.9 (self-check) ("TECH-02/REG-04's data-breach and DTA evidence matches Section 8 §8.5's citations exactly") | Section 8 §8.5 cites same TLB-026 p.49 breach and DTA facts | Independently re-verified TECH-02/REG-04's TLB-026 p.49 citation directly against raw source text (144,469 customers, Norway, USD150,000 penalty, parent-vulnerability quote) — all confirmed present and accurately quoted | PASS |
| 13 | Section 10 Answer/§10.6 ("Section 11... must operationalize... ORG-01, ORG-02, ORG-03") | Section 11 depends on and correctly restates these risks | Section 11 §11.1 Control 1/2/3 and its own traceability table cite ORG-01/02/03 by name with matching mitigation language (§10.8) | PASS |
| 14 | Section 11 §11.4 cross-check ("this section's three governance structures restate... no risk ID, owner, or mitigation wording was altered in transcription") | Section 11 does not drift from Section 10's current risk text | Spot-checked TECH-01/ORG-01/ORG-02/ORG-03 wording in Section 11 against Section 10 §10.8 — consistent, no drift found | PASS |
| 15 | Section 12 §Answer/Traceability ("DEC-009's resolved funding-sequence... OPT-002/003 near-term, OPT-001/005 continue-at-pace, OPT-004 longer-horizon") | Matches Section 9 §9.2's identical sequence | Section 9 §9.2: "near-term priority to OPT-002... and OPT-003... OPT-001... and OPT-005... continue at pace; OPT-004... is a longer-horizon build" | PASS — identical sequencing in both sections |
| 16 | Section 14 §14.3/§14.8 ("Section 9's own narrative-only reference to the same five options... Section 9 states the sequence in words") | Section 9 doesn't show OPT- dollar ranges, only narrative sequence | Confirmed — Section 9 §9.2/§9.6 contain no `ASM-029`-`033` dollar figures | PASS |
| 17 | Section 14 §14.8 Addendum (2026-07-24 Pass 3) — "Section 9 has since been independently corrected... now correctly states ASM-015-028 as Approved and DEC-009 as resolved throughout" | Section 9's current status re: ASM-015-028 and DEC-009 | Section 9's current text (§9.5): "All fourteen listed are `status: Approved`... (resolved 2026-07-23, alongside DEC-009)"; provenance note also states DEC-009 "resolved the same day, middle path." **Confirmed accurate — no other section retains the stale "Proposed"/"unresolved" framing about Section 9.** Checked Section 1, 2, 4, 6, 7, 8, 11, 12 specifically for this same stale-claim pattern (per the task's explicit instruction to check for a repeat of the Section 14 defect class) — none found; only Section 14 ever carried the stale claim, and it is now fixed with a dated addendum | PASS |
| 18 | Section 10 traceability row / §10.1 TECH-01 ("USD14mn+ FY2024 → USD30mn+ FY2025... Group; TLB-002, p.15") | Matches Value_Driver_Tree_v2 N-09 | `Value_Driver_Tree_v2.md` N-09: "estimated EBITDA contribution rises from USD 14mn+ (FY2024) to USD 30mn+ (FY2025)" | PASS |
| 19 | Section 10 §10.6/§10.8 Governance KPI family (G1-G7) | KPI_Tree_v2.md's Governance family, all newly-instrumented | `KPI_Tree_v2.md` G1-G7 rows: all tagged "Newly-instrumented," "Group" | PASS |
| 20 | Section 9 §9.1 "formalized as Value_Driver_Tree_v2.md's 45 nodes" | Tree actually has 45 nodes | Counted N-01 through N-45 in `Value_Driver_Tree_v2.md` — exactly 45 node headers | PASS |

## Confirmed correct (full citation trace highlights)

- Section 9: USD175mn = ~120mn (~75mn opex + ~45mn capex) + ~55mn — reconciles arithmetically and traces
  to `Investment_Portfolio_Register.md` and TLB-020 p.16.
- Section 9 §9.3 scenario table figures match `Scenarios_v2.md`'s top-level base/upside/downside cases
  verbatim, including the downside cell's corrected "-9% y/y" (absolute EBITDA dollars, not percentage
  points) — the exact defect fixed in Pass 2/reconfirmed in Pass 3, re-verified here as still correct.
- All fourteen ASM-015–028 rows and all five ASM-029–033 rows are `status: Approved` in
  `Assumptions_Register.md`, matching Section 9's and Section 10's citations.
- Section 10's TECH-02/REG-04 breach citation (144,469 customers, Norway-based attacker, USD150,000
  penalty, parent-vulnerability quote) independently re-traced to the raw
  `Talabat-Holding-plc_International-Offering-Memorandum.txt` source text — verbatim match.
- Section 10's executive owners (Alfakesh/CFO, Assadi/COO, Makarem/SVP G&R, Vandepitte/Chair, Abu
  Amara/Head of GRC, AlGhrawi/VP Legal) all confirmed against `Entities/Executives.md`.
- Section 10's MKT-01 (-4% y/y non-high-value M1 retention, UAE/Kuwait/Qatar) and FIN-04 (GCC 1.28x vs.
  non-GCC 0.13x per-capita order frequency) figures both confirmed against primary/Topic sources.
- Section 10's Food GMV USD6.65bn vs. G&R USD2.77bn (FY2025) confirmed against TLB-002 p.18/TLB-019 p.14.
- Geography tags in both sections checked against `Geographic_Evidence_Rules.md`'s tag definitions and
  failure patterns — no unlabeled geography transfer found in either section; every inferred-applicability
  claim (e.g. TECH-01, FIN-04, MKT-01's extension beyond UAE/Kuwait/Qatar) is explicitly labeled as
  inference with both source and target geography named.
- No statistic appears in both Section 9 and Section 10 with a conflicting value — every figure shared
  between them (EBITDA margin bridge 6.0%→4.4-4.8%, Q1 2026 4.8%/-9% y/y, USD175mn=120+55, USD55mn
  Food-leadership budget) is stated identically in both.

## Summary

Sections 9 and 10 pass this Stage 17 whole-plan audit with zero hard failures. Both sections' own
citation traces hold up against direct re-verification of primary sources, the Forecast Layer, and the
Decision/Assumption registers. The specific defect class this audit round was designed to catch — a
stale cross-section claim about Section 9's status, of the kind previously found and fixed in Section 14
— was checked for across every section that references Section 9 (Sections 1, 2, 4, 6, 7, 8, 11, 12, 14);
only Section 14 ever carried that stale claim, and its 2026-07-24 Pass 3 addendum already correctly
resolves it against Section 9's current (Approved/resolved) text. Section 10's risk-matrix references to
Section 9's financial figures (the FY2026 margin step-down, the ~USD55mn Food-leadership budget, the
Q1 2026 4.8%/-9% y/y print) all land on Section 9's current, post-fix numbers. One informational
observation (M-1) is noted regarding a 4.6%-vs-4.4-4.8% framing difference between Sections 2/4 and the
rest of the plan (including 9 and 10) — both figures are genuinely disclosed and reconcilable, so this is
not scored as a defect, and it does not involve Section 9 or 10's own text.

## Verdict

**Section 9 (Financial Plan): PASS — 0 defects, independently re-verified from scratch.**
**Section 10 (Risk Analysis): PASS — 0 defects, independently re-verified from scratch.**
Both sections may proceed past Stage 17 for the cross-section dimension of this audit. (M-1 above is
informational and does not block either section; it is noted for whichever section/pass owns Sections 2
and 4's next revision.)

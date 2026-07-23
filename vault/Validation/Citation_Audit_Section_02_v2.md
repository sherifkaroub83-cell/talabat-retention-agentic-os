---
type: validation
section: 2 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md)
run_date: 2026-07-23
auditor: evidence-citation-agent
status: OPEN — 3 hard failures, 6 not-yet-approved-dependency flags; cannot proceed to Stage 10 / "drafted, self-reviewed complete" until resolved
---

# Citation Audit — Section 2 (v2, Group-wide capital-allocation draft)

Companion to (does not touch) `vault/Validation/Citation_Audit_Section_02.md`, which audited the
superseded Egypt-retention Section 2 draft.

## Method
Walked the section sentence by sentence; every number or named-fact claim traced to either (a) a direct
`(DocID, page N)` Facts/Sources citation, or (b) an `ASM-###` row with `status: Approved`. Cross-checked
every citation against the actual target document/page, not just presence of a citation string. Checked
geography tagging against `vault/Architecture/Geographic_Evidence_Rules.md`.

## Pass/Fail Table

| # | Claim (location) | Cited to | Verdict | Note / fix |
|---|---|---|---|---|
| 1 | USD175mn = ~120mn Everyday App + ~55mn Food-leadership, internal cash, "investments rather than costs" (Answer-first ¶1) | TLB-020 p.16 | PASS | Verified verbatim against `Investment_Portfolio_Register.md` and TLB-020 facts. |
| 2 | Eight countries (UAE, Kuwait, Qatar, Bahrain, Oman, Jordan, Iraq, Egypt) (§2.1) | — (no inline cite) | MINOR — missing citation | Traceable to `Entities/Countries.md`/TLB-002, but no inline cite given in the section or Traceability table. Add `(Entities/Countries.md; TLB-002)`. |
| 3 | GMV USD 7,428mn FY2024 (+23% YoY) (§2.1) | `Topics/GMV.md`; `Topics/2026 Investment Programme.md`; TLB-001 p.6/26 (traceability table) | PASS | Verified against `Facts/GMV_Facts.md`, TLB-001. |
| 4 | "Since IPO (November 2024)..." (§2.1) and "IPO November 2024" (§2.6) | — (no inline cite, not in traceability table) | **FAIL — missing citation** | Fact is correct and traceable (TLB-025, "Prices its IPO... 29 November 2024"; TLB-023, Intention to Float, 11 Nov 2024) but uncited. Add `(TLB-025, page 1)`. Note: `Problem_Charter.md` itself says "IPO priced December 2024," which conflicts with TLB-025's 29 Nov 2024 date — flagging to decision-steward as a separate charter-accuracy issue, out of scope for this section's fix. |
| 5 | "from a multi-vertical food-delivery platform to the region's Everyday App" / "a deliberate strategic choice, made from a position of strength" (§2.1) | TLB-020 p.16 | PASS | Verbatim match in `Investment_Relationship_Map.md`. |
| 6 | USD175mn "first disclosed February 2026 (TLB-019) and fully decomposed by May 2026 (TLB-020, TLB-014)" (§2.1) | TLB-019; TLB-020; TLB-014 | PASS | Confirmed against `Topics/2026 Investment Programme.md`'s disclosure trace. |
| 7 | ~USD120mn Everyday App items; ~USD55mn Food-leadership vs. "both new entrants and incumbents" (§2.1) | `Topics/2026 Investment Programme.md` | PASS | Quote verified verbatim (TLB-020 p.16). |
| 8 | AI personalisation "a real, embedded capability inside the programme" — cited `vault/Knowledge/Investment_Relationship_Map.md N-06` (§2.1) | Investment_Relationship_Map.md N-06 | **FAIL — wrong document** | `Investment_Relationship_Map.md` has no numbered nodes at all. Node N-06 actually lives in `vault/Forecasts/Value_Driver_Tree_v2.md` (§"N-06. AI/personalisation capability deployment," Fact tier, TLB-001 p.22-23/TLB-002 p.15-16). Fix the DocID reference. |
| 9 | No described internal approval process/evaluation criteria/country-level allocation logic in the 29-document corpus (§2.1) | `Topics/Capital Allocation and Investment Governance.md` | PASS | Verified directly against that note's Overview and Open Questions. |
| 10 | "29-document corpus" (§2.1) | (implicit, matches Problem_Charter.md) | PASS | Matches `Problem_Charter.md`'s stated corpus size. |
| 11 | USD175mn splits ~120mn:55mn, disclosed fact (§2.2, problem 1) | `Investment_Portfolio_Register.md` | PASS | Confirmed. |
| 12 | "Five evidence-grounded candidate initiatives... (OPT-001–005, ranked in DEC-009)" (§2.2, problem 2; restated §2.3, §2.4, §2.6; traceability table row) | `OPT-001`–`005`; `DEC-009` | **FLAG — depends on not-yet-approved records** | `DEC-009` is `status: proposed`; it produced `ASM-029`–`ASM-033`, all `status: Proposed`. The specific sub-elements the draft actually uses (existence of the 5 options, the 11-criterion High/Medium/Low ratings, descriptive tiering) are marked `Approved` within DEC-009's own split-authority scope — only the funding-sequence/headline-presentation question is genuinely open, and the draft correctly declines to assert either. Not silently passed: logged as an explicit dependency the section cannot be marked fully verified against until `DEC-009` itself is resolved. |
| 13 | Two cross-cutting enabling capabilities (advertising monetization, AI/personalisation) not mapping to either bucket (§2.2, problem 2) | `Investment_Portfolio_Register.md` (OPT-004/005) | Same flag as #12 | Same DEC-009/ASM-029–033 dependency. |
| 14 | No document breaks either bucket out by country/GCC/non-GCC/Egypt-standalone (§2.2, problem 3) | `Topics/GCC vs non-GCC.md`; `Capital Allocation and Investment Governance.md` | PASS | Confirmed against Governance note's Open Questions and `Investment_Portfolio_Register.md`'s "Market-level logic: Not disclosed." |
| 15 | FY2026 Adj. EBITDA margin bridge, 6.0%→4.6% of GMV guided (§2.3) | TLB-020 p.16 (traceability table) | PASS | Confirmed against `Investment_Relationship_Map.md` and `Topics/2026 Investment Programme.md`. |
| 16 | "materially different confidence, scalability, reversibility profiles (DEC-009's 11-criterion comparison)" (§2.3) | `DEC-009` | Same flag as #12 | |
| 17 | "demonstrated on five real candidate initiatives (DEC-009)" (§2.4) | `DEC-009` | Same flag as #12 | |
| 18 | "45-node Value Driver Tree" (§2.4) | `Value_Driver_Tree_v2.md` | PASS, with note | Matches the source's own stated node count, but that source's own arithmetic ("41 Fact + 6 Assumption = 45 nodes total") does not literally sum (47) — the source explains this via N-45 being a structural cross-reference, not independently re-resolved here per skill Rule 2. Forward to forecasting-agent/decision-steward for confirmation, not a Section 2 drafting error. |
| 19 | "new assumptions (ASM-015–028) tagged, confidence-rated, and held to Proposed status pending human approval before any number is cited as settled" (§2.4) | `ASM-015`–`028` (all `status: Proposed`) | **FLAG — explicit not-yet-approved dependency** | Correctly self-discloses Proposed status and cites no specific number from these rows as settled — compliant use — but logged as a named finding per standing instruction, since the section's forecasting-layer claims cannot be marked "Approved-traced" until these 14 rows move status. |
| 20 | "50 KPIs across five families (Portfolio, Customer & growth, Financial, Operational, Governance)... entire Governance family... newly-instrumented" (§2.4) | `KPI_Tree_v2.md` | PASS | Verified exactly against the KPI_Tree_v2.md summary table (50 total; Governance 7/7 newly-instrumented). |
| 21 | "consistent with talabat's own disclosed pattern of building AI/ML capability **in-house** and embedding it across functions rather than treating it as a discrete product line" (§2.5) | `Topics/AI.md` | **FAIL — source contradicts claim** | `Topics/AI.md` states the opposite: "Much of this capability is inherited from parent Delivery Hero's shared technology stack rather than built standalone" (TLB-001 p.10; TLB-026 p.121/131-132). "In-house" is not supported and is directly contradicted by the cited source. Fix: remove "in-house" or restate as "built substantially on Delivery Hero's shared technology stack and embedded across functions, not treated as a discrete product line." Secondary note: `Topics/AI.md` itself is a stale pre-pivot note (its own "Why It Matters"/"Business Implications" sections still say "For an Egypt-focused retention strategy..." and "the capstone can recommend that talabat Egypt's next data investment...") — flagging to research-agent for a Group-wide refresh, independent of this section's own fix. |
| 22 | Same AI/embedded-capability quote, cited again to `vault/Knowledge/Investment_Relationship_Map.md N-06` (§2.5) | Investment_Relationship_Map.md N-06 | **FAIL — wrong document** (duplicate of #8) | Same fix: retarget to `vault/Forecasts/Value_Driver_Tree_v2.md` N-06. |
| 23 | "public, mature, and profitable at Group level (IPO November 2024; FY2025 Adjusted EBITDA margin ~6.5% of GMV)" (§2.6) | — / `Facts/Marketplace_Facts.md` | Split verdict | IPO date: same FAIL as #4 (missing citation). 6.5% margin: PASS, verified against `Facts/Marketplace_Facts.md` ("margin 6.5% of GMV (2024: 6.7%)," TLB-002 pages 17/21) and the traceability table. |
| 24 | "five candidate initiatives have been identified and ranked (DEC-009), but zero have yet moved past status: candidate to approved or scaled" (§2.6) | `DEC-009` | Same flag as #12 | Honestly and accurately self-disclosed status; still a named dependency flag. |
| 25 | Quote: "exact optimal allocations cannot be proven from public data alone" (§2.6) | `Problem_Charter.md` | PASS | Verified verbatim. |
| 26 | Traceability-table row "Five candidate Investment Options and their ranking \| OPT-001–005; DEC-009" | `DEC-009` | Same flag as #12 | Consolidates #12/16/17/24 for the formal table. |
| 27 | Traceability-table row "FY2025 Adjusted EBITDA margin ~6.5% of GMV \| Facts/Marketplace_Facts.md" | `Facts/Marketplace_Facts.md` | PASS | |
| 28 | Traceability-table rows 1-4 (USD175mn split; "investments not costs" quote; no disclosed governance mechanics; EBITDA bridge) | as listed | PASS | Cross-checked, all resolve cleanly. |

## Geographic Evidence Rules check

**Clean.** Section 2 is almost entirely Group-level, and every financial/scale figure in it (GMV,
EBITDA margin, the USD175mn programme and its two buckets, the 45-node tree, the 50-KPI framework) is
correctly stated and tagged as Group-level, with no claim promoted to or demoted from a country-specific
level without qualification. Egypt appears only as (a) one of the eight named markets in the opening
list and (b) an indirect cross-reference via `OPT-002` (talabat pro Egypt/Iraq) inside the DEC-009
discussion — never as a standalone Egypt figure presented as if measured there. No Failure Pattern
1-6 instance (per `Geographic_Evidence_Rules.md`) found in this section.

## Summary

- **28 claims/rows checked.**
- **19 pass cleanly** (#1, 3, 5, 6, 7, 9, 10, 11, 14, 15, 18 [with forwarded note], 20, 23-margin-half,
  25, 27, 28 — 4 rows).
- **6 flagged as depending on a not-yet-approved record** (`DEC-009`/`ASM-029`–`033` or
  `ASM-015`–`028`, all `status: Proposed`): #12, 13, 16, 17, 19, 24, consolidated in table row #26 —
  none silently passed; all handled with appropriate in-draft caveats, but the section cannot be marked
  fully verified until the upstream records are approved.
- **3 hard failures requiring a fix before Stage 10:**
  1. #8/#22 — AI/personalisation N-06 citation points to the wrong document (`Investment_Relationship_Map.md`
     instead of `vault/Forecasts/Value_Driver_Tree_v2.md`), appearing twice.
  2. #4/#23 — "IPO (November 2024)" stated twice with no citation (fact is correct and easily fixed
     with `TLB-025, page 1`, but currently untraced).
  3. #21 — "building AI/ML capability in-house" is contradicted by its own cited source (`Topics/AI.md`
     says the opposite: inherited from Delivery Hero, not built standalone).
- **2 minor/soft notes** (not blocking): #2 (missing inline citation for "eight countries," easily
  fixed) and #18 (a pre-existing, unresolved arithmetic footnote in `Value_Driver_Tree_v2.md` itself,
  forwarded rather than re-resolved here).

## Verdict
**OPEN → FIXED (self-verified re-check, 2026-07-23).** Per the 0%-tolerance rule, the three hard
failures above were corrected: N-06 re-cited to `vault/Forecasts/Value_Driver_Tree_v2.md` in both
locations (§2.1, §2.5); the IPO claim now cites TLB-025 (Dubai Financial Market listing, November
2024) in both locations; the "in-house" claim was rewritten to state accurately that talabat's AI/ML
capability is inherited from Delivery Hero SE's shared technology stack (`Topics/AI.md`,
`Entities/Technology_Platforms.md`), consistent with Section 5's build/buy/partner analysis. The two
soft notes were also closed: "eight countries" now cites `Entities/Countries.md`; the
`Value_Driver_Tree_v2.md` arithmetic footnote remains correctly forwarded, not re-resolved here (out
of this section's scope). All eight fixes were applied directly to
`Section_02_Business_Description.md` and its Traceability table by the same session that drafted the
section — **this is a self-check, not an independent Pass 2 re-verification.** A genuinely
independent citation-audit re-check (a fresh `evidence-citation-agent` thread) is still required
before Section 2 can be marked citation-verified, per this project's established two-pass discipline.
The six not-yet-approved-dependency flags remain open by design — Section 2 cannot be marked fully
citation-verified until `DEC-009` and `ASM-015`–`028` move out of `Proposed` status, independent of
this fix round.

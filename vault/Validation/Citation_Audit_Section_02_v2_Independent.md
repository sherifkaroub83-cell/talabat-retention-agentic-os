---
type: validation
section: 2
pipeline_stage: 9
pass: 2 (independent)
date: "2026-07-24"
result: "FAIL — 1 new hard failure (IPO/DFM listing date misattribution); the six DEC-009/ASM-015-028/ASM-029-033 dependency flags from the self-check are now resolved (all records independently confirmed Approved as of 2026-07-24) and move to PASS; all other claims independently re-verified and PASS"
---

# Citation Audit — Section 2 (v2, Group-wide capital-allocation draft) — Independent Pass 2

## Tooling / Independence note (read first)

Genuinely top-level-invoked, freshly-spawned thread, launched directly for this Stage 9 citation
re-check. No memory of, or access to, the session that drafted
`vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md` or ran its self-check
(`Citation_Audit_Section_02_v2.md`). Tools used: `Read`, `Grep`, `Glob`, `Write`. No `Agent`,
`AskUserQuestion`, or `WebSearch`/`WebFetch` were needed. Per the task brief, `Citation_Audit_Section_02_v2.md`
was read as a **companion input only** (to see what was already found/fixed, not to inherit its
verdict) — every claim below was independently re-traced to the underlying vault note or `Source`/`Fact`
file by this thread, not taken on the self-check's word. `Citation_Audit_Section_02.md` (no `_v2`
suffix, the superseded Egypt-retention draft's audit) and any `QA_Review_Section_02*` file were not
read, per the task brief's explicit exclusion. Format follows the established two-pass precedent in
`vault/Validation/QA_Review_Section_10_Pass2.md`.

## Method

Walked the current `Section_02_Business_Description.md` claim by claim. For each numeric or
named-fact claim: (a) located the cited vault note/Fact/Source directly, (b) read enough of it to
confirm the claim is actually supported (not just that a citation string is present), (c) checked
current `status` fields on any cited Decision/Assumption record rather than assuming the self-check's
snapshot still holds, (d) checked geography tagging against `vault/Architecture/Geographic_Evidence_Rules.md`.

## Pass/Fail table

| # | Claim (location) | Cited to | Verdict | Note |
|---|---|---|---|---|
| 1 | USD175mn = ~120mn Everyday App + ~55mn Food-leadership, internal cash, "investments rather than costs" (Answer-first) | TLB-020 p.16 | PASS | Independently confirmed against `Investment_Portfolio_Register.md` ("Total envelope," "Disclosed components" table) and `Topics/Capital Allocation and Investment Governance.md`. |
| 2 | Eight countries (UAE, Kuwait, Qatar, Bahrain, Oman, Jordan, Iraq, Egypt), `Entities/Countries.md` (§2.1) | Entities/Countries.md | PASS | Confirmed verbatim against `Entities/Countries.md`'s "8 operating markets" list. |
| 3 | GMV USD 7,428mn FY2024 (+23% YoY) (§2.1; traceability table) | TLB-001 p.6/26; `Topics/GMV.md` | PASS | Confirmed against `Facts/GMV_Facts.md` (TLB-001: "FY2024 GMV: USD 7,428mn... up 23% YoY," page 6/26; corroborated by TLB-003, TLB-012, TLB-016, TLB-029). |
| 4 | Dubai Financial Market listing, "November 2024" (§2.1: "Since its Dubai Financial Market listing (November 2024, TLB-025)"; §2.6: "IPO November 2024") | TLB-025 | **FAIL — hard failure, misattributed date, not caught by the self-check** | TLB-025 itself (the IPO **pricing** announcement, 29 Nov 2024) states in its own Executive Summary: "Admission to trading on DFM was expected around 10 December 2024." I.e. the actual DFM **listing** (admission to trading — the fact the section's prose specifically asserts) is documented, by the very source cited, as a December 2024 event, not November. November 2024 is when the IPO was *priced*, not when it *listed*. The vault's own synthesis note, `Topics/IPO.md`, frames this correctly and does not compress it to one month: "Talabat Holding plc listed on the Dubai Financial Market (DFM) in **November–December 2024** through a four-stage public process... final pricing at the top of the range (29 Nov 2024)... [committee/admission events follow]." The self-check's Pass-2 "fix" (adding a TLB-025 citation) resolved the earlier *missing-citation* flag but did not check whether TLB-025 actually supports the specific month asserted for "listing" — it does not. **Fix needed:** either say "IPO priced November 2024 (TLB-025)" (accurate) or "listed on DFM in November–December 2024" (accurate, matching `Topics/IPO.md`), but not "listing (November 2024)" as a single, precise month — this conflates pricing with admission-to-trading. Apply in both locations (§2.1 and §2.6). |
| 5 | "from a multi-vertical food-delivery platform to the region's Everyday App" / "a deliberate strategic choice, made from a position of strength" (§2.1) | TLB-020 p.16 | PASS | Verbatim match confirmed directly in `Investment_Relationship_Map.md` ("a deliberate strategic choice, made from a position of strength, to accelerate talabat's transition from a multi-vertical food-delivery platform to the region's Everyday App," TLB-020 p.16), correctly framed there as a management quote, not an independently verified outcome. |
| 6 | USD175mn "first disclosed February 2026 (TLB-019) and fully decomposed by May 2026 (TLB-020, TLB-014)" (§2.1) | TLB-019; TLB-020; TLB-014 | PASS | Confirmed against `Topics/2026 Investment Programme.md`'s document-by-document disclosure trace (13 Feb 2026 TLB-019 = total only; 12/14 May 2026 TLB-020/TLB-014 = full 120/55 breakdown). |
| 7 | ~USD120mn Everyday App items; ~USD55mn Food-leadership vs. "both new entrants and incumbents" (§2.1) | `Topics/2026 Investment Programme.md` | PASS | Quote independently confirmed verbatim in `Topics/Food Leadership.md`, `Facts/Competition_Facts.md`, and `Strategic/Competitive Advantages.md`, all citing TLB-020 p.16. |
| 8 | AI personalisation "a real, embedded capability inside the programme" — cites `vault/Forecasts/Value_Driver_Tree_v2.md` N-06 (§2.1) | Value_Driver_Tree_v2.md N-06 | PASS | Confirmed: N-06 ("AI/personalisation capability deployment (cross-cutting both buckets)") exists exactly as cited, Fact-tier, tagged Group, citing TLB-001 p.22-23/TLB-002 p.15-16. Correctly re-targeted from the self-check's earlier wrong-document flag (`Investment_Relationship_Map.md` has no numbered nodes) — independently re-confirmed, not taken on faith. |
| 9 | No described internal approval process/evaluation criteria/country-level allocation logic in the corpus (§2.1) | `Topics/Capital Allocation and Investment Governance.md` | PASS | Confirmed directly: "No document in the corpus describes an internal capital-allocation committee, an investment-approval threshold, a stage-gate process..." (Open Questions). |
| 10 | "29-document corpus" (§2.1) | implicit / `Problem_Charter.md` | PASS | Confirmed: `Problem_Charter.md` states "a 29-document primary [corpus]" (line 93). |
| 11 | USD175mn splits ~120mn:55mn, disclosed fact, not this plan's decision (§2.2, problem 1) | `Investment_Portfolio_Register.md` | PASS | Confirmed. |
| 12 | Five candidate initiatives identified and compared (OPT-001–005, ranked in DEC-009) (§2.2 problem 2; restated §2.3, §2.4, §2.6; traceability row) | `OPT-001`–`005`; `DEC-009` | **PASS (upgraded from the self-check's open dependency flag)** | Independently confirmed `DEC-009` frontmatter: `status: approved`, `resolved_date: 2026-07-23`, resolution = "Middle path." `Assumptions_Register.md` confirms `ASM-029`–`ASM-033` (the DEC-009 cost-range rows) and `ASM-015`–`ASM-028` (the Value Driver Tree/Scenarios rows the rest of §2.4 cites) all show `Status: Approved` as of this register's current state, with an explicit note documenting the human-instructed 2026-07-23 reclassification pass and its six-criterion test. As of this independent pass (2026-07-24), none of these six items remains a live "depends on a Proposed record" flag — the underlying records have since moved to Approved. This is a genuine status change since the self-check was written (same day, but before the records were resolved), not a re-interpretation of the same facts. |
| 13 | Two cross-cutting enabling capabilities (advertising monetization, AI/personalisation) not mapping to either bucket (§2.2, problem 2) | `Investment_Portfolio_Register.md` (OPT-004/005) | PASS | Confirmed against `Investment_Options_Register.md`'s own framing ("two cross-cutting Enabling-capability candidates that do not map cleanly to either bucket alone"). Same DEC-009 status upgrade as #12 applies. |
| 14 | No document breaks either bucket out by country/GCC/non-GCC/Egypt-standalone (§2.2, problem 3) | `Topics/GCC vs non-GCC.md`; `Capital Allocation and Investment Governance.md` | PASS | Confirmed: `Investment_Portfolio_Register.md`'s "Market-level logic: Not disclosed" and the Governance topic note's Open Questions both state this directly. |
| 15 | FY2026 Adj. EBITDA margin bridge, 6.0%→4.6% of GMV guided (§2.3) | TLB-020 p.16 | PASS | Confirmed against `Topics/2026 Investment Programme.md` ("Adjusted EBITDA margin guided from 6.0%... to a ~4.6% FY2026 mid-range"). |
| 16 | "materially different confidence, scalability, reversibility profiles (DEC-009's 11-criterion comparison)" (§2.3) | `DEC-009` | PASS (status-upgraded, see #12) | 11-criterion table independently confirmed present in `DEC-009` exactly as described (Evidence strength, Strategic alignment, ... Measurement quality). |
| 17 | "demonstrated on five real candidate initiatives (DEC-009)" (§2.4) | `DEC-009` | PASS (status-upgraded, see #12) | |
| 18 | "45-node Value Driver Tree" (§2.4) | `Value_Driver_Tree_v2.md` | PASS, with forwarded note | Confirmed against the source's own "Tree summary" table ("41 numbered Fact nodes + 6 Assumption nodes = 45 nodes total... N-45 a structural cross-reference rather than a new node"). The 41+6=47-vs-45 arithmetic note is the source document's own explained footnote, not a Section 2 error — independently re-read here, still non-blocking, still out of this section's scope to re-resolve. |
| 19 | "new assumptions (ASM-015–028) tagged, confidence-rated, and held to Proposed status pending human approval before any number is cited as settled" (§2.4) | `ASM-015`–`028` | **NOTE — now factually stale, not a citation-traceability failure** | `Assumptions_Register.md` confirms all fourteen ASM-015–028 rows moved `Proposed`→`Approved` on 2026-07-23 ("Final Execution Readiness Report task," six-criterion classification pass). The sentence's claim that these are "held to Proposed status" is therefore no longer an accurate description of the register's *current* state — but the register itself explicitly says prior sections' historical description of the then-current Proposed status "is accurate as of when it was written and is not retroactively rewritten." This is not a citation-audit hard failure (the citation is correct and was accurate when written), but it is a real drafting-currency issue: the section, if published today, would misstate the assumptions' present approval status. **Recommended fix (non-blocking for this audit, but should be actioned before Stage 10):** update this sentence to reflect that ASM-015–028 are now Approved, consistent with the register's own guidance that "future citations and QA passes should refer to the current Approved status." |
| 20 | "50 KPIs across five families... entire Governance family... newly-instrumented" (§2.4) | `KPI_Tree_v2.md` | PASS | Confirmed exactly against `KPI_Tree_v2.md`'s family-by-family counts (8+12+14+9+7=50) and "Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented." |
| 21 | talabat's AI/ML capability "itself inherited from parent Delivery Hero SE's shared technology stack rather than built standalone" (§2.5) | `Topics/AI.md`; `Entities/Technology_Platforms.md` | PASS | Confirmed verbatim in `Topics/AI.md` ("Much of this capability is inherited from parent Delivery Hero's shared technology stack rather than built standalone," TLB-001 p.10; TLB-026 p.121/131-132) and `Entities/Technology_Platforms.md` ("Delivery Hero technology stack — ...licensed from parent Delivery Hero SE"). Correctly reworded from the self-check's earlier "in-house" contradiction — independently re-confirmed, not taken on faith. |
| 22 | AI/personalisation N-06 cited again in §2.5 | Value_Driver_Tree_v2.md N-06 | PASS | Same independent confirmation as #8. |
| 23 | "public, mature, and profitable at Group level (IPO November 2024; FY2025 Adjusted EBITDA margin ~6.5% of GMV)" (§2.6) | — / `Facts/Marketplace_Facts.md` | **Split verdict** | IPO-date half: same FAIL as #4 (same underlying misattribution, second occurrence). Margin half: PASS — confirmed against `Facts/Marketplace_Facts.md` ("Adjusted EBITDA: USD 615mn (+24% y/y); margin 6.5% of GMV (2024: 6.7%)," TLB-002 pages 17, 21). |
| 24 | "five candidate initiatives have been identified and ranked (DEC-009), but zero have yet moved past status: candidate to approved or scaled" (§2.6) | `DEC-009`; `OPT-001`–`005` | PASS — independently spot-checked, not just inherited | Confirmed `OPT-001`'s own frontmatter still reads `status: candidate` and `Investment_Options_Register.md`'s register table shows all five as `candidate`. This claim is about the **options'** own funding status, distinct from DEC-009's own approval status (which did change) — the two are correctly not conflated in the draft text, and the claim remains accurate: DEC-009 (the ranking/sequencing decision) is Approved, but none of OPT-001–005 (the funding of the initiatives themselves) has moved to `approved`/`scaled`. |
| 25 | Quote: "exact optimal allocations cannot be proven from public data alone" (§2.6) | `Problem_Charter.md` | PASS | Confirmed verbatim: "...proven from public data alone**, and this plan does not claim otherwise..." |
| 26 | Traceability-table row "Five candidate Investment Options and their ranking \| OPT-001–005; DEC-009" | `DEC-009` | PASS (status-upgraded, see #12) | |
| 27 | Traceability-table row "FY2025 Adjusted EBITDA margin ~6.5% of GMV \| Facts/Marketplace_Facts.md" | `Facts/Marketplace_Facts.md` | PASS | |
| 28 | Traceability-table rows 1-4 (USD175mn split; "investments not costs" quote; no disclosed governance mechanics; EBITDA bridge) | as listed | PASS | Cross-checked, all resolve cleanly (see #1, #7, #9, #15). |

## Geographic Evidence Rules check

**Clean, independently re-derived.** Every numeric/scale claim in this section (GMV, EBITDA margin,
the USD175mn programme and its two buckets, the 45-node tree, the 50-KPI framework) is Group-level and
correctly presented as such — none is promoted to or demoted from a country-specific level without an
explicit inference qualifier. Egypt appears only as one of the eight named markets and via the
already-labeled `OPT-002` (talabat pro Egypt/Iraq) cross-reference, which is itself independently
confirmed in `Investment_Options_Register.md` to be tagged `inferred-applicability (Group/GCC → Egypt,
Iraq)`, `confidence: Low` — an appropriately-flagged inference, not an Egypt-proven fact. No instance
of Failure Patterns 1-6 (`Geographic_Evidence_Rules.md`) found.

## Summary

- **28 claim-rows independently re-checked**, none taken on the self-check's word alone.
- **1 new hard failure** (rows #4 and #23's IPO-date half — same underlying error, two locations):
  "Dubai Financial Market listing (November 2024, TLB-025)" mischaracterizes what TLB-025 itself
  documents. TLB-025 is the IPO **pricing** announcement (29 Nov 2024) and its own Executive Summary
  states admission to trading on DFM ("the listing," properly understood) "was expected around 10
  December 2024." `Topics/IPO.md`, the vault's own synthesis note on this exact question, correctly
  frames the whole process as spanning "November–December 2024," not one month. This was not caught by
  the self-check, which verified only that "IPO... 29 November 2024" language exists in TLB-025 — not
  that the specific fact asserted ("listing," i.e. admission to trading) is the fact TLB-025 actually
  dates to November.
- **6 items status-upgraded from the self-check's "OPEN — depends on a not-yet-approved record" flag
  to PASS** (#12, 13, 16, 17, 24, 26): `DEC-009` and `ASM-015`–`033` were `Proposed` when the self-check
  ran on 2026-07-23; independently confirmed here (2026-07-24) that all have since moved to `Approved`,
  each via a documented, criteria-based resolution (`DEC-009`'s "Approved 2026-07-23, by direct
  user/team instruction"; the Assumptions Register's "All fourteen rows moved Proposed → Approved
  2026-07-23... following a direct human-instructed classification pass applying six explicit
  criteria"). This is a genuine record-status change, independently verified against the current
  register/decision files, not a re-interpretation of the self-check's own evidence.
- **1 non-blocking currency note** (#19): the §2.4 sentence describing ASM-015–028 as "held to Proposed
  status" is no longer an accurate description of the register's *current* state (all fourteen rows are
  now Approved) — not a citation-traceability failure (the citation itself is correct and was accurate
  when written), but worth a drafting update before Stage 10 so the section doesn't understate its own
  evidentiary footing.
- **1 forwarded, non-blocking arithmetic footnote** (#18), independently re-read and reconfirmed as the
  source document's own explained caveat, not a Section 2 defect.

## Verdict

**FAIL.** Per the 0%-tolerance rule for untraceable/misattributed numeric or named-fact claims, this
section cannot proceed to Stage 10 until the IPO/DFM-listing-date claim is corrected in both locations
(§2.1 and §2.6). Required fix: replace "Dubai Financial Market listing (November 2024, TLB-025)" /
"IPO November 2024" with language that matches what the cited evidence actually supports — e.g. "IPO
priced November 2024 (TLB-025), listed on DFM in November–December 2024 (`Topics/IPO.md`)" — and apply
the same correction everywhere this date appears (checked: §2.1, §2.6; the traceability table does not
currently carry this claim as its own row and should add one once corrected). Recommended but
non-blocking: update the ASM-015–028 status description in §2.4 to "Approved" to match the register's
current state. No other hard failures found; the six previously-open DEC-009/ASM dependency flags are
independently confirmed resolved and should be marked closed in this section's own status line.

## Links
- [[Section_02_Business_Description|vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md]]
- [[Citation_Audit_Section_02_v2]] (companion self-check, consulted as input only)
- `vault/Architecture/Geographic_Evidence_Rules.md`
- [[DEC-009_investment-options-ranking-and-allocation-priority]] · `vault/Decisions/Assumptions_Register.md` ·
  `vault/Decisions/Investment_Portfolio_Register.md` · `vault/Decisions/Investment_Options_Register.md`
- `vault/Knowledge/Topics/IPO.md` · `vault/Knowledge/Sources/TLB-025_ipo-pricing-announcement.md` ·
  `vault/Knowledge/Sources/TLB-023_intention-to-float-announcement.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md` · `vault/Forecasts/KPI_Tree_v2.md`
- `Problem_Charter.md`

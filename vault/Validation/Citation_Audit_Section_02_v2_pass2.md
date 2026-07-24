---
type: validation
section: 2
pass: 2
status: PASS
date: "2026-07-24"
built_by: evidence-citation-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md
---

# Citation Audit — Section 2 (v2), Pass 2 (independent)

Independent second-pass verification per the two-pass protocol (Agentic_OS_Architecture_v2, Change 2).
This trace was performed **before** reading `Citation_Audit_Section_02_v2.md` (Pass 1); convergence
notes are at the end. Method per `.claude/skills/citation-audit/SKILL.md`: every numeric and
named-fact claim walked sentence by sentence and traced to (a) a `vault/Knowledge/` Facts/Sources/Topic
note carrying a `(DocID, page)` citation, (b) an `Approved` `ASM-###` row, (c) an approved `DEC-XXX`
record, or (d) an explicit synthetic/illustrative label. Geography labels checked against
`vault/Architecture/Geographic_Evidence_Rules.md`.

## Independent trace — claim-by-claim results

| # | Claim (location) | Resolves to | Verdict |
|---|---|---|---|
| 1 | USD175mn programme = ~USD120mn Everyday App + ~USD55mn Food-leadership; "investments rather than costs" (Answer ¶, §2.1, §2.2, traceability rows 1-2) | `Topics/2026 Investment Programme.md` (TLB-020 p.12/16; TLB-014 p.6/8/19); `Investment_Portfolio_Register.md`; quote verbatim in `Topics/Capital Allocation and Investment Governance.md` (TLB-020 p.16) | PASS |
| 2 | "funded entirely from internal cash" (Answer ¶); "Board-approved, internally-funded" (§2.1) | `Investment_Relationship_Map.md` Chain 1: "fully funded by internal cash" (TLB-020 p.16; TLB-014 p.16); `Investment_Portfolio_Register.md` "Total envelope" | PASS |
| 3 | Eight operating markets, named list (§2.1) | `Entities/Countries.md` ("The 8 operating markets," TLB-001/002/009/012-016/019/022-026) | PASS |
| 4 | Three-sided marketplace (§2.1) | `Strategic/How Talabat Creates Value.md`; `Facts/Marketplace_Facts.md` | PASS (soft: no inline cite — see S-3) |
| 5 | GMV USD 7,428mn FY2024, +23% YoY (§2.1, traceability row 7) | `Facts/GMV_Facts.md` (TLB-001 p.6, p.26); `Topics/GMV.md` | PASS |
| 6 | Dubai Financial Market listing, November 2024 (TLB-025) (§2.1, §2.6, traceability row 10) | `Sources/TLB-025_ipo-pricing-announcement.md` (priced 29 Nov 2024, top of range, DFM); `Topics/IPO.md` ("listed... November–December 2024") | PASS (soft: precision — see S-5) |
| 7 | Quotes: "from a multi-vertical food-delivery platform to the region's Everyday App"; "a deliberate strategic choice, made from a position of strength" (§2.1) | `Investment_Relationship_Map.md` Chain 1, verbatim (TLB-020 p.16) | PASS |
| 8 | First disclosed February 2026 (TLB-019); fully decomposed May 2026 (TLB-020, TLB-014) (§2.1) | `Topics/2026 Investment Programme.md` disclosure-evolution trace (TLB-019 p.11, 13 Feb 2026; TLB-020/TLB-014, 12/14 May 2026) | PASS |
| 9 | Food-leadership defends against "both new entrants and incumbents" (§2.1) | `Facts/_raw/TLB-020_facts.md` (TLB-020 p.16, verbatim) | PASS |
| 10 | No disclosed internal approval process, evaluation criteria, or country-level allocation logic; "29-document corpus" (§2.1, §2.3, traceability row 3) | `Topics/Capital Allocation and Investment Governance.md` Overview + Open Questions; corpus = TLB-001–TLB-029 (29 Source notes, verified by listing `vault/Knowledge/Sources/`) | PASS |
| 11 | FY2026 Adjusted EBITDA margin bridge 6.0%→4.6% of GMV guided (Answer ¶, §2.3, traceability row 4) | `Topics/2026 Investment Programme.md`: "guided from 6.0% (Q4 2025 baseline) to a ~4.6% FY2026 mid-range" (TLB-014 p.6, p.19; guided bridges also attributed to TLB-020 p.8/12/16); consistent with `Scenarios_v2.md` (guidance 4.4–4.8% of GMV) | PASS (soft: cited note mismatch — see S-2) |
| 12 | Five candidate options OPT-001–005; spanning both buckets + two cross-cutting; ranked/compared in DEC-009; 11-criterion High/Medium/Low comparison (§2.2, §2.3, §2.4, traceability row 5) | `DEC-009` (**status: approved**, resolved 2026-07-23, middle path); five OPT files exist; comparison table has exactly 11 criteria | PASS |
| 13 | DEC-009 addendum claims: approved, middle path; ASM-029–033 ranges restricted to labeled sensitivity/appendix exhibits (frontmatter/provenance note) | `DEC-009` frontmatter + Decision section; `ASM-029`–`033` all `Approved` with mandatory disclosure sentence; `Investment_Portfolio_Register.md` placement rule | PASS |
| 14 | No corpus document breaks either bucket out by country/GCC/non-GCC/Egypt (§2.2 problem 3) | `Topics/Capital Allocation and Investment Governance.md` Open Questions; `Topics/2026 Investment Programme.md` Open Questions; `Topics/GCC vs non-GCC.md` | PASS |
| 15 | DEC-008 constraint: headline financial exhibit stays Group base-case level (§2.3) | `DEC-008` (**status: approved**, Option 1 — Base case only, resolved by user 2026-07-23) | PASS |
| 16 | Geography-discipline feature; root-cause claim (§2.4) | `vault/Architecture/Geographic_Evidence_Rules.md` and `Repository_Impact_Assessment.md` exist and state this | PASS (process claim about OS's own artifacts) |
| 17 | 45-node Value Driver Tree; base/upside/downside anchored to disclosed FY2026 guidance; N-06 (§2.4, §2.5) | `Value_Driver_Tree_v2.md` ("= 45 nodes total"); `Scenarios_v2.md` (anchored to disclosed FY2026 guidance range); N-06 quote verbatim: "Not named as a discrete dollar line within either bucket... an embedded capability, not a separate budget line" | PASS (soft: source's own node-arithmetic footnote — see S-6) |
| 18 | ASM-015–028 "tagged, confidence-rated, and held to `Proposed` status pending human approval" (§2.4) | All of ASM-015–028 exist in `Assumptions_Register.md` — but **all moved `Proposed` → `Approved` 2026-07-23**. No specific number from these rows is cited as settled in this section, so no claim traces through a `Proposed` row (the SKILL Rule-4 failure mode does not apply). Register's own note explicitly blesses historical Proposed-status framing in already-drafted sections | PASS (soft: outdated status description — see S-1) |
| 19 | 50 KPIs, five families (Portfolio, Customer & growth, Financial, Operational, Governance); entire Governance family newly-instrumented (§2.4) | `KPI_Tree_v2.md`: 8 + 12 + 14 + 9 + 7 = 50; Governance family "0 baseline-exists, 7 newly-instrumented" | PASS |
| 20 | AI/ML capability inherited from parent Delivery Hero SE's shared technology stack, not built standalone (§2.5, traceability row 11) | `Topics/AI.md` ("inherited from parent Delivery Hero's shared technology stack rather than built standalone"; Delivery Hero SE global tech stack, TLB-002 p.7); `Entities/Technology_Platforms.md` | PASS |
| 21 | FY2025 Adjusted EBITDA margin ~6.5% of GMV, Group (§2.6, traceability row 8) | `Facts/Marketplace_Facts.md`: "margin 6.5% of GMV (2024: 6.7%)" (TLB-002 pp.17, 21) | PASS |
| 22 | "zero have yet moved past `status: candidate` to `approved` or `scaled`" (§2.6) | All five `OPT-` files carry frontmatter `status: candidate` (verified by grep) | PASS |
| 23 | Charter quote: "exact optimal allocations cannot be proven from public data alone" (§2.6) | `Problem_Charter.md` lines 101-102, verbatim | PASS |
| 24 | GMV sentence's vertical/adjacent-services framing (§2.1) | Components individually resolve (`Topics/GMV.md`; `Topics/IPO.md` strategy pillars incl. FinTech/advertising/loyalty) | PASS (soft: composition wording — see S-4) |

## Geographic Evidence Rules check

**Clean — no hard geography failure.** Every financial/scale figure is stated at the level it is
disclosed: GMV, EBITDA margins, the USD175mn envelope and both buckets, the 45-node tree, and all 50
KPIs referenced are Group-level and labeled/read as Group. Country names appear only as (a) the
disclosed eight-market roster and (b) the OPT-002 (Egypt/Iraq) and OPT-003 (UAE/Kuwait/Qatar)
geographies, which match those options' own evidence scoping in `DEC-009` — no Group/GCC statistic is
presented as country-proven, no Egypt figure as Group-representative, and no pre/post-FY2025 non-GCC
figure is used interchangeably. None of Failure Patterns 1–6 in `Geographic_Evidence_Rules.md` occurs
in this section.

## Hard failures

**None.** Every numeric claim and named-fact claim in the section resolves to a Knowledge-layer note
with a (DocID, page) citation, an `Approved` Assumption Register row, or an approved Decision record.
No claim traces through a `Proposed` assumption (ASM-015–033 are all `Approved` as of 2026-07-23), and
no claim resolves to nothing.

## Soft findings (non-blocking; recommended fixes for a future drafting pass)

- **S-1 (§2.4):** "held to `Proposed` status pending human approval" is outdated — ASM-015–028 all
  moved to `Approved` on 2026-07-23 (register note explicitly preserves the historical framing, and
  the draft's own addendum updated DEC-009's status but not this sentence). Fix: restate as
  "registered `Proposed` and individually reviewed to `Approved` before any number is cited as settled."
- **S-2 (§2.3 + traceability row 4):** the 6.0%→4.6% bridge is cited to "TLB-020, page 16;
  `Topics/EBITDA.md`", but `Topics/EBITDA.md` does not contain the 6.0%/4.6% endpoint figures (it
  carries the bridge's per-component pp attribution via TLB-019 p.19). The endpoints live in
  `Topics/2026 Investment Programme.md` (TLB-014 p.6, p.19), which states ~4.6% as the **mid-range**
  of the guided 4.4–4.8% band. Fix: re-cite to `Topics/2026 Investment Programme.md`/TLB-014 and
  restore the "~"/mid-range qualifier ("6.0%→~4.6% guided mid-range").
- **S-3 (§2.1, first sentence):** "three-sided marketplace" carries no inline citation and no
  traceability-table row; it resolves to `Strategic/How Talabat Creates Value.md` /
  `Facts/Marketplace_Facts.md`. Fix: add the cite.
- **S-4 (§2.1):** "generating GMV of USD 7,428mn... across food delivery, grocery and quick-commerce
  (talabat mart), and a growing set of adjacent services (subscription, advertising, FinTech)" — the
  GMV figure is disclosed by vertical as Food vs. Groceries & Retail only, and GMV explicitly
  *excludes* subscription fees (`Topics/GMV.md`, TLB-001 p.27). The adjacent services are real,
  evidenced strategy pillars/revenue streams (`Topics/IPO.md` CEO commentary), but the sentence
  structure loosely implies the GMV figure spans them. Fix: attach the GMV figure to the transacting
  verticals and introduce adjacent services as revenue/strategy pillars, not GMV components.
- **S-5 (§2.1, §2.6):** "Dubai Financial Market listing (November 2024, TLB-025)" — TLB-025 is the
  **pricing** announcement (29 Nov 2024); the corpus does not capture the admission/first-trading
  date, and `Topics/IPO.md` says "November–December 2024." Note also Pass 1's forwarded flag that
  `Problem_Charter.md` says "IPO priced December 2024," an unresolved charter-side discrepancy for
  `decision-steward` (not a Section 2 defect). Fix (optional): "priced November 2024" or "listed
  November–December 2024."
- **S-6 (§2.4):** `Value_Driver_Tree_v2.md`'s own summary arithmetic ("41 Fact + 6 Assumption = 45
  nodes total") does not literally sum; the source explains this via N-45 being a structural
  cross-reference. Per SKILL Rule 2 this is a discrepancy internal to the cited note, not a Section 2
  failure — recorded here as not independently re-resolved, and already forwarded by Pass 1 to
  forecasting-agent/decision-steward.

## Convergence / divergence with Pass 1 (`Citation_Audit_Section_02_v2.md`, read only after the trace above)

- **Converged:** all three Pass 1 hard failures (N-06 mis-cited to `Investment_Relationship_Map.md`;
  uncited IPO date; "in-house" AI claim contradicting `Topics/AI.md`) are confirmed fixed in the
  current draft — my independent trace found the corrected citations resolve (rows 6, 17, 20 above).
  Pass 1's geography check (clean) also converges with mine.
- **Converged, now closed:** Pass 1's six not-yet-approved-dependency flags (DEC-009 `proposed`;
  ASM-015–033 `Proposed`) are resolved — DEC-009 was approved 2026-07-23 (middle path) and all
  nineteen ASM rows are `Approved`. The condition Pass 1 said must clear before full verification has
  cleared.
- **Divergence (new findings Pass 1 did not raise):** S-2 (the `Topics/EBITDA.md` citation added in
  the fix round does not carry the 6.0/4.6 endpoints — Pass 1's row #15 verified the number against
  different notes and did not check this cite), S-3 (uncited "three-sided marketplace"), S-4 (GMV /
  adjacent-services composition wording), and S-1 (the §2.4 Proposed-status sentence is now outdated
  in the opposite direction from Pass 1's flag #19). None rises to a hard failure.

## Verdict

**PASS.** 0 hard failures; 6 soft findings. Section 2 (v2) is citation-verified at Pass 2 and may
proceed to Stage 10 / QA review (including the Problem Consistency, Financial Integrity, and
Geographic Evidence gates, which remain separate checks). The soft findings above should be folded
into the next drafting/QA pass but do not block progression under the 0%-tolerance rule, which applies
to untraceable claims — none exist.

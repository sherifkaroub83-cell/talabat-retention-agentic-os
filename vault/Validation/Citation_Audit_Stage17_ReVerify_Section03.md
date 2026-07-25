---
type: validation
section: 3
pipeline_stage: "Stage 17 fix re-verification"
run_date: 2026-07-25
auditor: independent Stage 17 re-verification (fresh thread)
status: PASS — both reported fixes independently confirmed to hold; no new defect found in a broader fresh check
---

# Citation Audit — Stage 17 Fix Re-Verification, Section 3 (Market Analysis)

## Method
Fresh thread, no reliance on the prior Stage 17 report's conclusions. Opened the current
`Section_03_Market_Analysis.md` text directly, located both previously-flagged claims (prose and
Traceability table), then opened the specific source files now cited (`Topics/AI.md`,
`Facts/Talabat_Pro.md`) to independently confirm the figures are actually present at those targets.
Extended the check to a sample of every other numeric-claim category in the section (market sizing,
segment table, order frequency, multi-verticality, EBITDA-margin bridge, G&R margin drag) and to the
five stated cross-section references (Section 2, Section 10, DEC-009).

## Fix 1 — AI/personalisation EBITDA figure (>USD14mn FY2024 → >USD30mn FY2025)
**Location 1 (§3.3, Strengths, line 226):** "...a growing, disclosed EBITDA contribution (>USD 14mn
FY2024 → >USD 30mn FY2025, `Topics/AI.md`)."
**Location 2 (Traceability table, line 383):** "AI/personalisation EBITDA contribution
>USD14mn→>USD30mn (FY2024→FY2025) | `Topics/AI.md`; `Value_Driver_Tree_v2.md` N-09"

Opened `vault/Knowledge/Topics/AI.md` directly. "Why It Matters" section states verbatim: "the
personalisation/ranking algorithm's estimated contribution rose from USD 14mn+ p.a. (FY2024) to USD
30mn+ p.a. (FY2025) (TLB-001, page 23; TLB-002, page 16)" — repeated again in "Open Questions" and
"Business Implications." Cross-checked `Value_Driver_Tree_v2.md` N-09, which independently states the
identical figure, tagged `Geography: Group`, sourced `[FACT → Facts/AI_Facts.md]` (TLB-001 p.23,
TLB-002 p.15-16).

**HOLDS.** `Topics/AI.md` genuinely contains the exact figure at both cited locations; the retarget
from `Topics/EBITDA.md` is correct and complete (both prose and table).

## Fix 2 — talabat pro GMV-share figure (32%→49%, Q1'25→Q1'26)
**Location 1 (§3.2, "Early adopters," line 201-206):** "...talabat pro subscribers, whose share of
platform GMV rose from 32% (Q1 2025) to 49% (Q1 2026), and multi-vertical customers, whose GMV share
rose 68%→73%→76% (Dec'24→Dec'25→Mar'26) *(Group; `Facts/Talabat_Pro.md`, `Topics/Multi-Verticality.md`)*."
**Location 2 (Traceability table, line 380):** "talabat pro GMV share 32%→49% (Q1'25→Q1'26) |
`Facts/Talabat_Pro.md`; `Value_Driver_Tree_v2.md` N-08" — now a separate row from the multi-vertical
claim (line 381), correctly split.

Opened `vault/Knowledge/Facts/Talabat_Pro.md` directly. Under "TLB-020 — Q1 2026 Results
Presentation": "GMV share of talabat pro subscribers: 49% (Q1'26) vs 32% (Q1'25) — 'tPro subscribers
represent around half of talabat platform GMV...' (TLB-020, page 8)." Corroborated under "TLB-014 —
Investor Presentation (May 2026)": "talabat pro GMV share (talabat-only) rose to 49% of platform GMV
in Mar'26 from 32% in Mar'25 (TLB-014, page 14)." `Value_Driver_Tree_v2.md` N-08 independently states
the same figure, tagged `Geography: Group`.

**HOLDS.** `Facts/Talabat_Pro.md` genuinely contains the 32%→49% figure with the correct Q1'25→Q1'26
period at both citations. The prose sentence's citation is a single combined tag covering both the
talabat pro and multi-vertical claims together — not split per-claim — but since both cited sources
(`Facts/Talabat_Pro.md` for talabat pro, `Topics/Multi-Verticality.md` for the 68→73→76% figure,
confirmed to state it verbatim) are individually accurate, this is not a citation-audit failure, only
a minor readability note (a reader must know which source backs which of the two numbers in the
sentence). The Traceability table already resolves this ambiguity by splitting the two claims into
separate rows. Not flagged as a defect.

## Broader fresh check (other numeric/named-fact claims)
Independently re-traced, not merely re-confirmed from the prior report:
- **Order frequency figures** (6.7/customer/month +5% y/y; 6.7x Dec'24 vs 6.2x Dec'23; 6.5x Jul'24) —
  confirmed verbatim in `Facts/Orders_Facts.md` against TLB-002 p.9, TLB-001 p.15, TLB-015 p.13. Match.
- **Multi-vertical GMV share 68%→73%→76% (Dec'24→Dec'25→Mar'26)** — confirmed verbatim in
  `Topics/Multi-Verticality.md` ("68% (Dec 2024) → 73% (Dec 2025) → 76% (Mar 2026), TLB-019 p.7;
  TLB-020 p.8"). Match.
- **Grocery TAC ~USD104bn/3% adoption; "USD150bn+ TAM"; tMart TAC penetration <1.5%** — confirmed
  verbatim in `Facts/Q-Commerce.md` against TLB-014 p.5/p.19, TLB-020 p.16, TLB-019 p.11. Match.
- **G&R (0.5)-(0.7)pp EBITDA margin drag** — confirmed verbatim in `Topics/Grocery and Retail.md`.
  Match.
- **N-08/N-09 Value Driver Tree nodes** — both independently confirmed to carry the exact figures and
  correct `Geography: Group` tag, consistent with the section's own geography tagging.

**Cross-section references (all re-checked against current text of the target sections, not trusted
from the prior audit):**
1. §3.3 Weaknesses → Section 10 Risk Analysis: `MKT-02` (rider workforce), `MKT-03` (AdTech gap),
   `REG-01`–`REG-04` (Kuwait/UAE/Iraq antitrust, Qatar cap, Oman dispute, data-protection) all present
   in the current `Section_10_Risk_Analysis.md` risk register and consistent with Section 3's framing.
   **PASS.**
2. §3.5 → Section 2's "problem 2"/"problem 3" — current `Section_02_Business_Description.md` §2.2
   states "2. Within-bucket, cross-initiative allocation (open...)" and "3. Cross-market allocation
   (open...)" verbatim, matching Section 3's characterization exactly. **PASS.**
3. §3.5 → `DEC-009`'s "approved ranking" — current `DEC-009` file: `status: approved`,
   `resolved_date: 2026-07-23`, middle-path resolution. Matches. **PASS.**

## Geographic Evidence Rules compliance
Both fixed claims are tagged `Group` in the section prose and match the `Group` tag on their
respective `Value_Driver_Tree_v2.md` nodes (N-08, N-09) and source Facts files. No pre/post-FY2025
non-GCC conflation, no GCC/Group figure presented as Egypt-specific, and no Egypt figure presented as
Group-representative found anywhere in the section on this pass. The section's own explicit gap
notices (Jordan/Iraq never individually disclosed; Egypt's inconsistent category-share figures shown
as two unreconciled pairs, not blended; Food-leadership's -4% retention figure explicitly scoped to
UAE/Kuwait/Qatar only, not extrapolated to Egypt/non-GCC) remain intact and correctly qualified.

## Verdict
Both of Stage 17's reported fixes **HOLD** on independent re-verification. No new citation-audit
defect found in this pass across market sizing, segment table, order-frequency, multi-verticality,
EBITDA-margin, G&R margin-drag claims, or the three cross-section references checked. Section 3
remains clear to proceed past Stage 17 on the citation-audit dimension.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_03_Market_Analysis.md`
- `vault/Validation/Citation_Audit_WholePlan_Stage17_Sections03-04.md` (prior report, findings HF-1/MF-1)
- `vault/Knowledge/Topics/AI.md`
- `vault/Knowledge/Facts/Talabat_Pro.md`
- `vault/Knowledge/Topics/Multi-Verticality.md`
- `vault/Knowledge/Facts/Orders_Facts.md`
- `vault/Knowledge/Facts/Q-Commerce.md`
- `vault/Knowledge/Topics/Grocery and Retail.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md` (N-08, N-09)
- `vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md`
- `vault/Projects/Business_Plan_Drafts_v2/Section_10_Risk_Analysis.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`

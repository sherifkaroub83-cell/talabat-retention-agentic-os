---
type: validation
section: 2 (v2 — Group-wide capital-allocation draft)
target: vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md
pipeline_stage: Independent Pass 2 citation re-check (per bp-orchestrator.md "Known runtime constraint")
run_date: 2026-07-24
auditor: independent Pass 2 reviewer (fresh thread, no memory of drafting or of the Pass-1 self-check)
status: PASS WITH MINOR FIXES — no hard citation failures found; one stale-status claim and one
  persisting formatting gap require correction before this section is fully current
---

# Citation Audit — Section 2 (v2), Independent Pass 2

## Independence note
This is a genuinely separate thread from whatever produced `Section_02_Business_Description.md` or
`Citation_Audit_Section_02_v2.md` (the Pass-1 self-check). I read the Pass-1 file for context (per my
task brief) but re-derived every finding below from the underlying vault notes and source citations
myself, not by trusting Pass-1's verdicts. Tools used: Read, Grep, Write.

## Method
Walked the section sentence by sentence. For each numeric or named-fact claim, opened the cited vault
note directly (`Facts/`, `Topics/`, `Sources/TLB-XXX`, `Investment_Portfolio_Register.md`,
`Assumptions_Register.md`, `DEC-008`/`DEC-009`, `Value_Driver_Tree_v2.md`, `KPI_Tree_v2.md`) and
confirmed the number/quote is actually present, at the geography and time period claimed. Checked
`Assumptions_Register.md` directly for the *current* status of every `ASM-###` cited (not the status
recorded in Pass-1's file, which is now a day stale relative to the 2026-07-23 resolutions).

## Findings

### Confirmed correct (independently re-verified, not just re-trusted)
- USD175mn = ~120mn Everyday App + ~55mn Food-leadership, "investments rather than costs" — verified
  against `Investment_Portfolio_Register.md` and TLB-020 page 16 language directly. **PASS.**
- FY2024 GMV USD7,428mn (+23% YoY) — verified against `Topics/GMV.md` ("GMV grew from USD 6,062mn
  (FY2023) to USD 7,428mn (FY2024, +23% YoY)"). **PASS.**
- Dubai Financial Market listing, November 2024 (TLB-025) — verified against
  `Sources/TLB-025_ipo-pricing-announcement.md` ("Prices its IPO... 29 November 2024, Dubai, UAE").
  **PASS on substance.** See "Persisting minor issue" below on citation formatting.
- USD175mn disclosure trace (Feb 2026 TLB-019 total → May 2026 TLB-020/TLB-014 full breakdown) —
  verified against `Topics/2026 Investment Programme.md`'s disclosure-evolution trace. **PASS.**
- "No described internal approval process, evaluation criteria, or country-level allocation logic...
  in the 29-document corpus" — verified against `Topics/Capital Allocation and Investment
  Governance.md`'s Overview and Open Questions almost verbatim. **PASS.**
- N-06 (AI/personalisation, "not named as a discrete dollar line within either bucket... an embedded
  capability") — re-checked: `vault/Forecasts/Value_Driver_Tree_v2.md` N-06 does exist and does say
  exactly this. **The Pass-1 self-fix (retargeting from `Investment_Relationship_Map.md`, which has no
  numbered nodes, to `Value_Driver_Tree_v2.md`) is confirmed correctly applied**, in both §2.1 and §2.5.
- "talabat's own AI/ML capability is itself inherited from parent Delivery Hero SE's shared technology
  stack rather than built standalone" — re-checked against `Topics/AI.md`'s Overview ("Much of this
  capability is inherited from parent Delivery Hero's shared technology stack rather than built
  standalone"). **The Pass-1 self-fix of the earlier "built in-house" claim is confirmed correct** and
  is no longer contradicted by its own source.
- FY2025 Adjusted EBITDA margin ~6.5% of GMV — verified against `Facts/Marketplace_Facts.md`
  ("Adjusted EBITDA: USD 615mn (+24% y/y); margin 6.5% of GMV (2024: 6.7%)," TLB-002 pages 17, 21).
  **PASS.**
- FY2026 EBITDA margin bridge 6.0%→4.6% guided — verified against `Investment_Relationship_Map.md`
  Chain 3 ("a calculated temporary step-down in Adj. EBITDA margins from 6.0% of GMV (Q4'25A) to a
  guided mid-range of 4.6%," TLB-020 page 16). **PASS.**
- "45-node Value Driver Tree" — verified against `Value_Driver_Tree_v2.md`'s own summary table ("41
  numbered Fact nodes + 6 Assumption nodes = 45 nodes total"). **PASS**, with the same forwarded note
  Pass-1 raised: that summary line's own arithmetic (41+6) literally sums to 47, not 45 — the source
  file explains this via N-45 being a structural cross-reference rather than a new node, which is a
  pre-existing discrepancy in `Value_Driver_Tree_v2.md` itself, not a Section 2 drafting error. Not
  re-resolved here, consistent with the citation-audit skill's Rule 2 (an internally-flagged
  discrepancy in the cited note is not automatically a citation failure in the citing section).
- "50 KPIs across five families... entire Governance family... newly-instrumented" — verified against
  `KPI_Tree_v2.md`'s summary table (50 total; Governance family "7 KPIs — 0 baseline-exists, 7
  newly-instrumented"). **PASS.**
- Eight operating markets — verified against `Entities/Countries.md`. **PASS.**
- Problem Charter quote ("exact optimal allocations cannot be proven from public data alone") —
  verified verbatim against `Problem_Charter.md`. **PASS.**
- MECE decomposition (§2.2) — every dollar of the USD175mn maps to exactly one of the four categories
  as claimed; independently re-checked against `Investment_Portfolio_Register.md` and no fifth
  category is evident in the underlying registers. **No MECE gap found.**

### DEC-009 / ASM-029–033 status — correctly reflects the 2026-07-23 approval
The section's "Addendum, 2026-07-23 (Final Execution Readiness pass)" note correctly states DEC-009 is
now `status: approved` (middle path), which I independently confirmed against
`vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md` (resolved
2026-07-23, middle path: commit to a funding sequence narratively, ranges appendix/sensitivity-only).
`ASM-029`–`033` are confirmed `Approved` in `Assumptions_Register.md`. **The section does not treat
DEC-009 as still-open anywhere in its current text — the pre-approval provenance note is correctly kept
in past tense ("at drafting time... status: proposed") and the Addendum layers the current status on
top.** This is the correct pattern (contrast with the finding below, where an equivalent update was
*not* made for a different dependency).

### New finding (not caught by the Pass-1 self-check): stale Assumption-status claim in §2.4
**§2.4, "Scenario-based, range-bound forecasting" bullet states:** "...with genuinely new assumptions
(`ASM-015`–`028`) tagged, confidence-rated, and **held to `Proposed` status pending human approval**
before any number is cited as settled."

This was accurate when written (Pass-1's citation audit flagged it, correctly, as an explicit
not-yet-approved dependency at the time). **It is no longer accurate.** I checked
`vault/Decisions/Assumptions_Register.md` directly: its own changelog states "**All fourteen rows moved
`Proposed` → `Approved` 2026-07-23**" (covering `ASM-015`–`028`), following a documented six-criterion
classification pass. Every row's `Status` cell reads `Approved` today.

The register's own header does note that sections which cited these rows by their prior `Proposed`
status are not retroactively rewritten and that framing "is accurate as of when it was written" — but
it also explicitly instructs that "**future citations and QA passes should refer to the current
`Approved` status**." I am a future QA pass, and Section 2 is not yet marked ✅ Done — so the live
prose still describing these fourteen assumptions as pending approval is a material, fixable
inaccuracy a reader today would find misleading, not a historical record to leave untouched. This is
the direct analogue of the DEC-009 check the task asked me to run, extended to the Assumption Register
rows: **§2.4 needs the same kind of addendum/update DEC-009 already received, and does not currently
have one.**

**This is not a "resolves to neither Fact nor Approved Assumption" failure** under the citation-audit
skill's Rule 4 (the assumptions genuinely *are* Approved now) — so it does not block on evidentiary
grounds. It is a **staleness/currency defect**: the claim about their status is simply wrong as written
today. Classified as a required fix, not a hard citation failure.

### Persisting minor issue (carried forward from Pass 1, not fully closed)
Pass-1's citation audit recommended adding `TLB-025, page 1` to the two IPO/DFM-listing citations
(§2.1, §2.6) when it closed failures #4/#23. The current draft does cite `TLB-025` in both places
(the hard failure — a fully missing citation — is genuinely fixed), but **neither citation carries a
page number**, so the format still falls short of the citation-audit skill's `(DocID, page N)`
convention. Low severity (the fact is correct and the source is unambiguous — `TLB-025` is a short,
single-topic announcement), but worth closing for completeness. Suggested fix: `(TLB-025, page 1)`.

### Geography check
Independently re-ran the Geographic Evidence Rules check rather than trusting Pass-1's "Clean" verdict.
**Agree: clean.** Every financial/scale figure in Section 2 (GMV, EBITDA margin, the USD175mn programme
and its two buckets, the 45-node tree, the 50-KPI framework) is Group-level and correctly presented as
such. Egypt appears only as (a) one of eight named markets in the opening list, and (b) an indirect
cross-reference via `OPT-002` inside the DEC-009 discussion — never as a standalone Egypt figure
presented as if measured there. No instance of Geographic Evidence Rules Failure Patterns 1-6 found.

## Summary
- **No hard citation failures** (no untraceable claim, no wrong-document citation, no
  Group/Egypt geography conflation).
- **1 new, real, actionable finding:** §2.4's "`ASM-015`–`028`... held to `Proposed` status" claim is
  now stale — these rows are `Approved` as of 2026-07-23. Fix: update the sentence (e.g., "tagged,
  confidence-rated, and Approved as of 2026-07-23, per `Assumptions_Register.md`; every projected
  number remains range-bound and confidence-labeled, never presented as a single-point disclosed
  figure").
- **1 persisting minor formatting gap:** `TLB-025` citations lack a page number.
- All previously-fixed items (N-06 mis-citation, missing IPO citation, "in-house" AI misstatement)
  independently re-verified as genuinely fixed.
- All 6 previously-flagged not-yet-approved dependencies (`DEC-009`, `ASM-029`–`033`) are now resolved
  (Approved), closing that entire category of open flag from the Pass-1 audit.

## Verdict
**PASS WITH MINOR FIXES.** Neither finding above rises to a hard citation failure under the
citation-audit skill's rules — both are corrections to currency/formatting, not broken evidence
chains. Recommend the two fixes above before this section is cited as fully citation-clean, but they do
not, on their own, block QA approval.

## Links
- `vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md`
- `vault/Validation/Citation_Audit_Section_02_v2.md` (Pass-1 self-check, read for context, not trusted)
- `vault/Decisions/Assumptions_Register.md`
- `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`
- `vault/Architecture/Geographic_Evidence_Rules.md`

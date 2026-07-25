---
type: validation
section: 7
pass: "2-reverify"
status: FAIL
date: "2026-07-25"
built_by: evidence-citation-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_07_Marketing_and_Sales_Strategy.md
predecessors: vault/Validation/Citation_Audit_Section_07_v2_pass2.md (FAIL, HF-1–HF-5/SF-1–SF-5); vault/Validation/QA_Review_Section_07_v2_pass2.md (FAIL, B1–B3 + 8 non-blocking)
pipeline_stage: 13.9 (targeted Pass 2 re-verification of the post-fix-cycle draft, fresh thread)
---

# Citation Audit — Section 7, Pass 2 Re-verification (fresh thread)

**Verdict: FAIL — on one newly-arisen hard failure only (NF-1, a stale cross-section claim in §7.6
falsified by Section 6's parallel 2026-07-25 fix cycle; one-sentence fix).** Every hard, blocking,
soft, and in-draft non-blocking finding from the two Pass 2 reports is **genuinely resolved**, with
correct citations at correct scope, verified independently against the Facts tier (not the fix
record's own claims). The synthetic-funnel labeling is intact and undisturbed. No other
newly-introduced defect was found in any edited passage.

## Method

Every edited passage (per the draft's "Fix record (2026-07-25, post-Pass 2)") was re-traced to the
Facts tier directly: `Facts/_raw/TLB-001/002/015/018/019/020/023/026_facts.md`, `Facts/Retention.md`,
`Facts/Customer_Growth.md`, `Facts/AI_Facts.md`, `Facts/Talabat_Pro.md`, `Facts/Orders_Facts.md`,
`Sources/TLB-001/009/011/012/015/020/023`-level source notes and raw `_source_text` where needed,
plus `Assumptions_Register.md` (ASM-016, ASM-024), `Value_Driver_Tree_v2.md` (N-09, N-10),
`KPI_Tree_v2.md` (C11), `Strategic/Customer Retention Drivers.md`, `Topics/FinTech.md`,
`Section_03_Market_Analysis.md`, and `Section_06_Business_Model_and_Revenue_Streams.md` (current,
post-its-own-fix-cycle state). The fix record was read but not relied on as evidence.

---

## Per-finding resolution

### Hard / blocking findings — all resolved

| Finding | Verdict | Verification |
|---|---|---|
| **HF-1** (-4pp vs -4% y/y, ×2) | **Resolved** | Both §7.1 restatements now read "-4% y/y" / "the -4% y/y non-high-value retention decline," matching `Facts/_raw/TLB-019_facts.md` ("non-high-value -4%" y/y M1 change, competitive markets UAE/Kuwait/Qatar, TLB-019 p.9). No "-4pp" remains anywhere in the draft. Traceability row correct. |
| **HF-2** (blanket six-market cohort claim) | **Resolved** | §7.4 Caution now scopes per figure: (a) pro figures + pro-subscriber M1 deltas → pre-Feb-2025 six-of-eight cohort, cited TLB-015 p.77 ("Live in 6 of 8 countries — all except Egypt and Iraq," verified in `Facts/_raw/TLB-015_facts.md` line 37) with the cohort/timing attribution explicitly assigned to ASM-016 (Approved, Low), not to TLB-019; (b) Rewards → Group-level, no cohort stated (TLB-026 p.134, as of 29 Sep 2024 — verified `Facts/_raw/TLB-026_facts.md` line 73); (c) PostPaid → Group disclosure, product live only in the five GCC markets at CMD 2024 per `Topics/FinTech.md` (verified, line 24: "PostPaid live only in five GCC markets, non-GCC 'subject to regulatory approvals'"); (d) Family Plan → Q2 2025 Group disclosure post-dating the Feb 2025 Egypt launch, no cohort/country breakout (TLB-018 = `Sources/TLB-018_q2-2025-results-presentation.md`; `Facts/_raw/TLB-018_facts.md` line 25, p.6). The quoted source-note sentence — "all are Group-level, GCC-cohort-based, or explicitly Egypt-excluded" — verified **verbatim** at `Strategic/Customer Retention Drivers.md` line 33 (Open Questions). No contradiction remains with the "(Group; ...)" tags on figures 3–5. |
| **HF-3** (TLB-002 p.15→16) | **Resolved** | Body and traceability row now cite "(Group; TLB-001, page 23; TLB-002, page 16)". Verified: `Facts/_raw/TLB-002_facts.md` line 167 (USD 30mn+ p.a., TLB-002 p.16, correction note 2026-07-24); USD 14mn+ FY2024 at TLB-001 p.23 (`Facts/AI_Facts.md` line 16; `Facts/_raw/TLB-001_facts.md` lines 85/107); `Value_Driver_Tree_v2.md` N-09 (TLB-001 p.23, TLB-002 p.15-16, Group). The unrelated six-order-threshold TLB-002 p.15 cites are correct and correctly untouched (`_raw/TLB-002_facts.md` lines 121-123, 165-166). |
| **HF-4 / B2** (fused savings statistic) | **Resolved** | §7.2 now carries two separate sentences with a "different periods, different funders, not one statistic" preamble: (1) Partner-funded savings all-time-high 7% of GMV, Q1 2026 (TLB-020 p.7 — verified `Sources/TLB-020` lines 34/54); (2) aggregate annual customer savings >AED 1,567.7mn over a 12-month period, Nov-2024 ITF, funded by Partners, B2B, and bank partnerships — not Partners alone (TLB-023 p.6 — verified `Facts/_raw/TLB-023_facts.md` line 41 / `Facts/Retention.md` line 137, window 29 Sep 2023–29 Sep 2024). "Trailing" deleted everywhere. Traceability split into two matching rows with the funder attribution stated. (Optional polish, non-blocking: the exact 29 Sep 2023–29 Sep 2024 window could be stated instead of "a 12-month period"; current wording is accurate and matches the QA B2 prescription.) |
| **HF-5** (false "no partner-retention figure anywhere") | **Resolved** | §7.3 now uses N-10's scoped wording — "no disclosed partner-retention percentage or count *that this investment is expected to move*" — verified verbatim against `Value_Driver_Tree_v2.md` N-10 (lines 100-104). The ~99% Partner retention among pro-participating vendors, 2024 (TLB-001 p.21) is now acknowledged at its disclosed scope (different population, not a general partner-retention series) — verified `Facts/Retention.md` line 15 / `Sources/TLB-001` line 103. Traceability row added and accurate. |
| **B1** (support/training silently missing) | **Resolved — every citation in the new paragraph carries what is claimed** | (1) "Priority customer support" as a named talabat pro benefit: TLB-002 p.13 (`Sources/TLB-002` line 149), TLB-009 p.3 (`_raw/TLB-009_facts.md` line 19), TLB-011 p.2 (`_raw/TLB-011_facts.md` line 16) — all verified. (2) Customer support among the Aug-2024 survey attributes, five markets Kuwait/UAE/Egypt/Qatar/Bahrain, 80%+ ranked #1: TLB-015 pp.39, 44 (`Sources/TLB-015` line 58) and TLB-012 p.7 (`Sources/TLB-012` line 56) — verified, market-comparison tag matches the five named survey countries. (3) Egypt SME academy with the German Chamber of Commerce, 200+ SMEs by July 2024: TLB-001 p.46 (`Sources/TLB-001` line 82; raw source text line 3471) — verified, Egypt-standalone tag correct. (4) "tcamp" rider training, five named markets Egypt/UAE/Bahrain/Kuwait/Oman: TLB-001 p.49 (`Sources/TLB-001` line 84) and TLB-026 p.138 (`Sources/TLB-026` line 74; IOM raw text line 9814) — verified. The closing gap statement (no standalone customer-support metrics, no customer-facing training programme) is a true negative — no contradicting Fact found. Characterizations correct: support = product-embedded benefit + surveyed attribute; training = partner-/rider-facing only. |
| **B3 / SF-1** (CARC endpoint-only) | **Resolved in Section 7** | §7.2, §7.6, and the traceability row now show the full disclosed three-point series — USD 89mn (1.5%, 2023) → USD 103mn (1.4%, 2024) → USD 155mn (1.6%, 2025) — with the dollar path stated as monotonic and the share-of-GMV path stated as non-monotonic (1.5% → 1.4% → 1.6%). Verified: `Facts/_raw/TLB-001_facts.md` line 76 (2023/2024, TLB-001 p.28) and `Facts/_raw/TLB-002_facts.md` lines 124-126 (2025, TLB-002 p.21, incl. the USD 89mn 2025 vouchering component). Consistent with ASM-024's stated trajectory. **See NF-1 below** on the §7.6 coordination note about Section 6. |

### Soft / non-blocking findings — all resolved (spot-verified)

- **SF-2:** TLB-023 p.8 ("over 20%") now inline in the pro citation set and traceability — verified `Facts/Talabat_Pro.md` line 147 ("over 20% increase in order frequency," Sep 2024, TLB-023 p.8). Full pro range re-verified: 28% frequency (TLB-001 p.18, `_raw` lines 25/43; TLB-019 p.11), 26% retention (TLB-019 p.11), 32% retention and 136% gross-profit (TLB-015 pp.78, 104, `_raw/TLB-015_facts.md` lines 38-40).
- **SF-3:** USD 120mn vouchers-as-contra-revenue now cited directly (Group; TLB-002 p.20) — verified `_raw/TLB-002_facts.md` line 10 ("Vouchers and other discounts USD (120)mn," p.20); locator corrected and verified against Section 6's current headings (contra-revenue row at Section 6 line 121, inside §6.1 lines 108-175; CARC discussion in §6.4 lines 260-297).
- **SF-4:** +16pp/+20pp tag now "Group/GCC+Jordan cohort per ASM-016 — TLB-019, page 10 itself discloses no market scope" — verified: `_raw/TLB-019_facts.md` line 33 states "(Q4 2025 average)" with no market scope; ASM-016 row (register line 51) carries the Egypt/non-GCC-excluded measurement-population attribution, `status: Approved`, Low. Pro-figure timing attribution correctly assigned to the register, not TLB-019.
- **SF-5:** now "29-document corpus — 27 primary plus 2 secondary sell-side-consensus documents, TLB-027/TLB-028," matching the Pass 2 audit's own established composition.
- **QA NB-1:** ASM-024 now genuinely cited at the point of prospective reliance (§7.4) with correct status/confidence — verified register line 59: `Approved`, Medium, Rewards >15% / PostPaid ~14% held through FY2026, CARC USD89→103→155mn trajectory.
- **QA NB-3:** boxed disclosure now reads "No conversion percentage in the table below is a talabat-disclosed or corpus-derived figure," with the Anchor-column distinction stated — accurate (the Anchor column does carry real cites: TLB-002 p.15, TLB-013 p.6).
- **QA NB-4:** `KPI_Tree_v2.md` C11 cited by ID — verified (line 88: Customer-journey conversion rate, N-18, Newly-instrumented, Group).
- **QA NB-5:** new §7.1 cross-reference sentence faithful to Section 3 — verified Section 3 lines 191/200/401: "GCC (5 of 8 markets) carries 82% of GMV," pro-forma FY2025, TLB-002 p.18 (Section 3 also carries the flagged 81%/TLB-019 p.14 tension; Section 7 cites "as cited in Section 3," a faithful transfer).
- **QA NB-6:** "(if drafted)" hedge removed; Section 4 is drafted — consistent.
- **QA NB-7:** explicit MECE statement present in §7.4 (ranking-not-partition; uplifts never summed) — no citation load.
- **QA NB-2 / NB-8:** correctly handled as out-of-scope for the draft (register bookkeeping → decision-steward; this re-verification is NB-8's required independent re-check).

### Synthetic-funnel labeling — intact and undisturbed (PASS)

All five right-column cells retain inline bold `[SYNTHETIC — illustrative...]` labels; the boxed
disclosure retains the (now more precise) blanket statement; §7.5 still says "labeled synthetic
funnel model"; the traceability row remains marked SYNTHETIC / not an Approved Assumption / not
cited elsewhere; the figures remain absent from `Assumptions_Register.md`; the Section 9 exclusion
statement stands. No arithmetic combination with disclosed figures was introduced by any edit.

---

## New hard failure (1)

### NF-1. §7.6: "Section 6 still presents the CARC share-of-GMV series endpoint-only" — falsified by Section 6's own 2026-07-25 fix cycle
- **Claim:** "(Coordination note for stage 13.10: Section 6 still presents the CARC share-of-GMV
  series endpoint-only — flagged by QA Pass 2 (B3 out-of-scope flag) for fixing when Section 6 is
  next touched; not fixed from here...)"
- **Evidence:** `Section_06_Business_Model_and_Revenue_Streams.md` was touched: its own fix record
  (dated 2026-07-25, "CARC (from Section 7 QA)" row, line 386) states §6.4 and its traceability row
  now show the full three-point series — confirmed directly at Section 6 lines 279 (§6.4: "USD 89mn
  (1.5% of GMV, 2023) → USD 103mn (1.4% of GMV, 2024) → USD 155mn...") and 345 (traceability,
  "non-monotonic as % of GMV"). The two fix cycles ran in parallel on the same day; Section 7's
  sentence was true when written but is false against current repo state — the same class as Pass
  2's HF-3, and it actively misdirects stage 13.10 (invites a duplicate fix of Section 6).
- **Fix (one sentence):** restate the note as performed/closed, e.g.: "(Coordination note for stage
  13.10: Section 6's formerly endpoint-only CARC presentation — QA Pass 2's B3 out-of-scope flag —
  was fixed in Section 6's own 2026-07-25 fix cycle; both sections now show the full three-point
  series.)"

## Advisory notes (non-blocking)

- **AN-1.** The Rewards ">15%-order-frequency-uplift-**within-30-days**" qualifier (§7.4, item 3,
  pre-existing wording that Pass 2 passed): the 30-day window traces to TLB-001 p.19
  (`Facts/Orders_Facts.md` line 13 — first-time redeemers, Sep 2024, ">15% increase in order
  frequency within 30 days"), which is absent from the inline pair (TLB-026 p.134; TLB-015 p.79);
  TLB-026 p.134 carries the >15% among first-time redeemers as of 29 Sep 2024 without the 30-day
  window. Same underlying disclosure — recommend adding TLB-001 p.19 inline at next touch.
- **AN-2.** Reiterating QA NB-2 for `decision-steward`: `Assumptions_Register.md`'s "Used in"
  columns for ASM-016 and ASM-024 do not yet list Section 7 (ASM-024's still reads "Not yet cited
  in any drafted `_v2` section," now false).
- **AN-3.** `Strategic/Customer Retention Drivers.md` §"AI/personalization" still carries the stale
  "TLB-002, page 15" (Pass 2's HF-3 ripple flag) — propose the note update so future drafts don't
  re-inherit it.

## Verdict

**FAIL — solely on NF-1.** All ten Pass 2 hard/blocking findings and all ten soft/non-blocking
fixes are genuinely resolved with correct citations at correct scope; the synthetic-funnel handling
is untouched and compliant; no other new defect exists in any edited passage. Closure requires only
the one-sentence NF-1 fix in §7.6; re-audit of that single sentence is sufficient — no other
passage needs re-checking.

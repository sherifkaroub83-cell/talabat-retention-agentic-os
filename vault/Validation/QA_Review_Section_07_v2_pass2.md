---
type: validation
section: 7
pass: 2
status: FAIL
date: "2026-07-25"
built_by: qa-review-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_07_Marketing_and_Sales_Strategy.md
prior_reviews_read: "Only after independent findings were formed (Citation_Audit_Section_07_v2.md was consumed as required input per skill step 3; QA_Review_Section_07_v2.md was read last, for convergence/divergence only)"
---

# QA Review — Section 7 (v2), Independent Pass 2

**Verdict: FAIL — 3 blocking findings, 8 non-blocking.** The section is close: positioning, the
synthetic-funnel handling, geography tagging of the uplift statistics, and problem consistency are
genuinely strong. But two financial-presentation defects and one template-completeness gap must be
fixed before ✅ Done. Per the qa-review rules, no fixes were made to the draft — this hands back to
the Orchestrator. The tracker cell stays at its current non-✅ status.

---

## Blocking findings

### B1 — Template completeness: "customer support and training" is silently missing (Retention sub-bullet)
`AI_Business_Plan_Template.md` §7 Retention requires "Customer support, training, and
community-building." §7.4's heading promises "Support, Community, and Product Enhancement," but the
body contains **no customer-support or training content at all** — the explicit gap statement covers
community only ("The corpus discloses no dedicated customer community/forum product (no loyalty
community, ambassador programme, or user-generated-content mechanic is named...)"). Support and
training are neither evidenced nor gap-stated — exactly the "silently missing" condition the
template-completeness check exists to catch, and inconsistent with how the section handled every
other template/reality mismatch (explicit disclosure).
**Fix:** either cite whatever the corpus does disclose on customer/partner support or training, or
extend the §7.4 gap statement to name support and training explicitly (one to two sentences), so the
heading's promise is delivered by disclosure rather than left implicit.

### B2 — Financial Integrity Gate check 5 / Geographic Evidence Gate check 5: two different-period figures fused into one apparent Q1-2026 statistic
§7.2: "Partner-funded savings ... reached an all-time-high 7% of GMV in Q1 2026, totaling more than
AED 1,567.7mn over a trailing 12-month period *(Group; TLB-020, page 7; TLB-023, page 6)*" — repeated
in the traceability row ">AED1,567.7mn trailing 12 months."
Two problems:
1. **Time-period blending.** The 7%-of-GMV figure is Q1 2026 (TLB-020). The >AED 1,567.7mn figure is
   from TLB-023, the November 2024 intention-to-float announcement, covering "a 12-month period" as
   of that document — not the trailing 12 months to Q1 2026. The word "trailing" appears nowhere in
   the source (`Topics/Promotions.md`: "totaled more than AED 1,567.7 million over a 12-month period
   (TLB-023, page 6)"). As written, the sentence reads as one continuous statistic ("totaling")
   measured at Q1 2026 — a silent mix of a Q1-2026 actual with a 2024-era disclosure.
2. **Funding-attribution overstatement.** Per `Topics/Promotions.md`'s own source description
   (TLB-023), the >AED 1,567.7mn is aggregate annual customer savings "funded by Partners, B2B, and
   bank partnerships" — attributing the whole total to "Partner-funded savings" overstates the
   Partner-funded component.
**Fix:** split into two figures, each with its own stated period and source ("7% of GMV in Q1 2026
(TLB-020, p.7); separately, aggregate customer savings exceeded AED 1,567.7mn over a 12-month period
disclosed at the November 2024 ITF, funded by Partners, B2B, and bank partnerships (TLB-023, p.6)"),
delete "trailing," and correct the traceability row to match.

### B3 — Financial Integrity Gate check 5 (spirit of check 10): CARC share-of-GMV series presented endpoint-only, implying a monotonic rise the disclosed series doesn't show
§7.2 (and again in the traceability table): "CARC rose from USD 89mn (1.5% of GMV, 2023) to USD 155mn
(1.6% of GMV, 2025)." The disclosed series is three points and **non-monotonic in share-of-GMV**:
USD 89mn / 1.5% (2023) → USD 103mn / 1.4% (2024) → USD 155mn / 1.6% (2025) (TLB-001 p.28; TLB-002
p.21; `Facts/Customer_Growth.md`, `Facts/Retention.md`). Each cited endpoint is individually accurate
(the citation audit correctly passed them), but omitting the disclosed 2024 midpoint makes the
%-of-GMV parentheticals read as a steadily rising spend-intensity trend — the exact class of error
the Financial Integrity Gate exists for ("each individual number can be correctly cited while the
combination is still wrong"). It is also inconsistent with the register's own `ASM-024`, which states
the full "USD89mn→103mn→155mn (2023-2025)" trajectory.
**Fix:** include the 2024 point (USD 103mn / 1.4%) or restrict the trend claim to absolute dollars
and show the share series in full (1.5% → 1.4% → 1.6%).
**Out-of-scope flag for the Orchestrator:** Section 6 uses the identical endpoint-only presentation
(`Section_06_Business_Model_and_Revenue_Streams.md` lines 235 and 297) — the same fix should be
applied there when Section 6 is next touched; not a Section 7 blocker.

---

## Non-blocking findings

1. **Provenance-note inaccuracy (ASM-024).** The frontmatter provenance note (13.5) states `ASM-016`
   *and* `ASM-024` "are cited as-is" — `ASM-024` is in fact cited nowhere in the body or traceability
   table, and the register's own "Used in" column says "Not yet cited in any drafted `_v2` section."
   Fix the note, or (better, given §7.4's forward-looking recommendation rests on the Rewards/PostPaid
   uplifts persisting) cite `ASM-024` where those uplifts are used prospectively.
2. **Register bookkeeping (decision-steward).** `ASM-016`'s "Used in" column (Section 4, 9, 12, 13)
   does not yet list Section 7.
3. **Boxed-disclosure wording.** "No number below in this box is a talabat-disclosed or corpus-derived
   figure" is ambiguous: the funnel table's middle "Anchor" column *does* contain corpus-derived
   references (the 6-order threshold, TLB-002 p.15). Rephrase to "No **conversion percentage** below
   is talabat-disclosed or corpus-derived." The synthetic labeling itself is exemplary — every
   synthetic cell carries an inline bold `[SYNTHETIC]` tag, none is registered as an `ASM-` row, and
   Section 9 exclusion is stated; the standing rule is satisfied in substance.
4. **Funnel → Section 13 KPI link is implicit only.** "per KPI Tree gap" should cite `KPI_Tree_v2.md`
   **C11** (Customer-journey conversion rate, newly-instrumented, N-18) by ID — the substance aligns
   perfectly; the cross-reference is just unnamed.
5. **Template-lens 80/20 link absent.** The §7 McKinsey Lens says to concentrate spend "where Section
   3's 80/20 analysis says the value is." Section 3 §200 has that analysis (GCC = 82% of GMV);
   Section 7 is substantively consistent (OPT-003 targets the GCC-3) but never references it. Add one
   cross-reference sentence.
6. **Stale hedge in §7.6.** "Section_04_Value_Proposition.md's value-mechanism ranking (if drafted)" —
   Section 4 *is* drafted and does use the same five mechanisms (verified this pass). Remove the hedge
   and state the check as performed.
7. **MECE statement.** The five-mechanism set is a ranking with acknowledged interaction (multi-vertical
   "amplifies pro's effect rather than operating independently") — honestly handled, never additively
   stacked, but the skill asks each breakdown to state its MECE status explicitly. One sentence
   (ranking-not-partition, overlap handled by ranking and by never summing uplifts) would close it.
8. **Independent Pass 2 citation audit still outstanding.** The consumed audit
   (`Citation_Audit_Section_07_v2.md`) is Pass 1/self-verified, 25/25 pass, 0 open failures — no open
   failure blocks this review, and this pass's own spot-checks (CARC series, Promotions figures,
   ASM-016 row, Section 4/6/13 cross-checks) confirmed its citations are sound *as citations*
   (B2/B3 are combination/presentation errors, which a citation audit by design does not catch,
   except audit item 7's un-flagged "trailing 12 months" pairing). A separately-invoked citation
   audit remains a pipeline precondition for ✅ Done regardless of this review's outcome.

---

## Procedure results (per `.claude/skills/qa-review/SKILL.md`)

| # | Check | Result |
|---|---|---|
| 1 | Template completeness | **FAIL** — B1 (support/training silently missing); all other sub-bullets present (positioning incl. not-targeted segments §7.1; channels + funnel + journey §7.2; partnerships §7.3, template/reality mismatch handled by explicit disclosure; enhancements §7.4) |
| 2 | McKinsey Lens | PASS — answer-first ✔; SCQA N/A; MECE handled honestly (see non-blocking 7); hypothesis-driven: refines Section 2's governing hypothesis by surfacing the shared Partner-economics dependency between OPT-002/OPT-003; value-driver traceability: same five mechanisms verified end-to-end against Section 4 (lines 33–41) and Section 13/KPI_Tree_v2 (C11, pro/multi-vertical GMV-share KPIs) |
| 3 | Citation audit consumption | PASS with note — Pass 1 audit 25/25, 0 open failures; independent re-check still owed (non-blocking 8) |
| 4 | Staleness | Clean — no `vault/Research/Notes/` note is cited anywhere in the section; Part A Stage 5 remains open, acknowledged in the draft's own 13.4 note; nothing to re-verify |
| 5 | Anti-patterns | PASS — all list items checked against this section; no instance found, including the section's named highest-risk pattern (inventing funnel numbers and citing them as corpus). ASM-016 status correctly quoted (Approved, Low). No ASM-018/ASM-029–033 figure appears. No "MENA." No pre/post-FY2025 non-GCC mixing (no non-GCC figure cited) |
| 6 | Problem Consistency Gate | **PASS (8/8)** — Group-wide USD175mn allocation framing throughout; Egypt appears only as worked example / OPT-002 target; no pre-pivot Egypt-retention residue (retention content here is the template's own required sub-bullet, correctly framed as marketing strategy for the allocation problem, not the old problem's objective); no superseded artifact cited as current; no invented envelope sub-split (DEC-010's 175=120+55 decomposition is not reproduced and not misstated) |
| 7 | Financial Integrity Gate | **FAIL** — check 5 violated twice (B2 time-period fusion; B3 endpoint-only series presentation, also touching check 10's no-unlabeled-selectivity spirit). Checks 1–4, 6–9, 11: pass or correctly N/A (no allocation totals, no scenarios, no uplift stacking, no revenue/GMV/EBITDA substitution, DEC-008 not implicated — no 2.2:1 figure anywhere) |
| 8 | Geographic Evidence Gate | **FAIL on check 5 only** (same finding as B2: the AED 1,567.7mn claim's stated period does not match its source). Checks 1–4, 6–9 pass or correctly N/A: uplift figures scoped GCC+Jordan with Egypt/Iraq exclusion restated at each use and ASM-016 named in prose (Failure Pattern #1 avoided); UAE/Kuwait/Qatar evidence not generalized (§7.1 caution); engagement statistics correctly tagged Group; synthetic funnel figures correctly exempt from geography tagging; no external market-research figure cited; "MENA" absent |

## Convergence / divergence with Pass 1 (`QA_Review_Section_07_v2.md`, read only after the findings above were formed)

- **Convergence:** synthetic-data handling clean (strongest part of the draft — both passes agree);
  anti-patterns clean; Problem Consistency 8/8; geography discipline on the pro/multi-vertical uplifts
  and ASM-016; staleness N/A; Partnerships template-reframing judged compliant.
- **Divergence 1 (B1):** Pass 1 judged support/training "handled by explicit disclosure," asserting the
  draft states "no... training curriculum named anywhere in the primary corpus." The draft contains no
  such statement — its gap sentence is community-scoped only. Pass 1 over-read the draft.
- **Divergence 2 (B2):** Pass 1's FI check 5 and GE check 5 passed the Partner-savings sentence without
  noticing the TLB-023 (Nov 2024) figure had been fused into a Q1-2026 "trailing 12-month" statistic,
  or the Partners/B2B/bank-partnership funding attribution.
- **Divergence 3 (B3):** the endpoint-only CARC presentation was not considered in Pass 1 (nor in
  Section 6's equivalent, which shares it).
- The divergences are consistent with Pass 1's own disclosed limitation: it was performed by the
  drafting session. This is precisely what the two-pass discipline exists to catch.

## Disposition

**FAIL — hand back to Orchestrator with the three blocking fixes above.** All three are small,
localized edits (one gap sentence; one sentence split with corrected attribution + traceability row;
one added data point). On re-submission, this reviewer expects a fast re-check limited to the three
fixed passages plus the traceability table. Tracker cell not flipped.

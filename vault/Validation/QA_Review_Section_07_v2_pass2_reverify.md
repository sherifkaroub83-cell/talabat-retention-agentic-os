---
type: validation
section: 7
pass: "2-reverify"
status: FAIL
date: "2026-07-25"
built_by: qa-review-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_07_Marketing_and_Sales_Strategy.md
predecessor_reviews: "QA_Review_Section_07_v2_pass2.md (FAIL: B1-B3 + NB-1..NB-8); Citation_Audit_Section_07_v2_pass2.md (FAIL: HF-1..HF-5 + SF-1..SF-5)"
reviewer_independence: "Fresh thread — this reviewer did not draft, fix, or previously review Section 7"
---

# QA Re-verification — Section 7, Pass 2 (post-fix cycle)

**Verdict: FAIL — but narrowly.** All three original blocking findings (B1–B3), all five citation
hard failures (HF-1–HF-5), all five soft findings (SF-1–SF-5), and seven of eight non-blocking
items are genuinely and verifiably resolved; the three gates pass on the edited text as edited;
the synthetic-funnel discipline remains exemplary. However, the spot-check of the newly added B1
paragraph found **one new unsupported disclosure claim (ND-1, blocking)** — a per-attribute "#1"
survey ranking the corpus does not disclose — plus **one stale coordination note (ND-2,
non-blocking)** now falsified by the parallel Section 6 fix. Per the qa-review rules, no fixes
were made to the draft; tracker untouched.

---

## Resolution of the original blocking findings

### B1 — RESOLVED IN SUBSTANCE (but see ND-1 inside the new paragraph)
The new §7.4 paragraph "Customer support and training — what the corpus actually discloses"
delivers the template sub-bullet through actual disclosures, each independently re-traced to the
Facts/Sources tier by this reviewer:
- "Priority customer support" as a named talabat pro benefit — verified verbatim:
  `Facts/_raw/TLB-002_facts.md` (TLB-002, page 13), `Facts/_raw/TLB-009_facts.md` (TLB-009,
  page 3), `Facts/_raw/TLB-011_facts.md` (TLB-011, page 2), `Facts/Talabat_Pro.md`.
- Partner training: SME academy launched in Egypt with the German Chamber of Commerce, 200+ SMEs
  trained by July 2024 — verified: `Sources/TLB-001_annual-report-2024.md` (TLB-001, p.46),
  correctly tagged Egypt-standalone.
- Rider training: "tcamp" — verified: TLB-001 p.49 (78,000 riders across Bahrain, Egypt, Kuwait,
  Oman, UAE) and TLB-026 p.138 (`Facts/Logistics_Facts.md`, `Facts/_raw/TLB-026_facts.md`); the
  draft's five named markets match the source exactly.
- Explicit gap statement present and accurate: "no standalone customer-support metrics (contact
  rates, resolution times, satisfaction scores) and no customer-facing training programme" —
  nothing in the corpus contradicts this; support and training are no longer silently missing.
This is disclosure-plus-explicit-gap, not hand-waving — the mechanism the Pass 2 review demanded.
One sentence within the paragraph over-claims, however: see ND-1 below.

### B2 / HF-4 — RESOLVED
§7.2 now states two separate disclosures with their true scopes, periods, and funders, and the
traceability table carries two matching rows:
- Partner-funded savings at an all-time-high 7% of GMV, Q1 2026 *(Group; TLB-020, p.7)* — correct.
- Aggregate annual customer savings >AED 1,567.7mn over a 12-month period, disclosed at the
  November 2024 intention-to-float announcement, funded by Partners, B2B, and bank partnerships —
  "not by Partners alone" — verified against `Facts/Retention.md` line 137,
  `Facts/_raw/TLB-023_facts.md` line 41, and the raw ITF source text (window: 29 Sep 2023–29 Sep
  2024; "funded by Partners, business-to-business partnerships, and bank partnerships").
"Trailing" appears nowhere in the body (grep-confirmed; the word survives only inside the fix
record narrative and correctly in the unrelated tcamp Fact, which the draft does not use).
The funding-attribution overstatement is corrected. *Optional precision (not a finding):* the
Facts tier states the exact window 29 Sep 2023–29 Sep 2024; the draft's "12-month period per the
Nov-2024 ITF" matches the Pass 2 review's own prescribed fix wording and is accurate as written.

### B3 / SF-1 — RESOLVED
The full disclosed three-point CARC series now appears in §7.2, §7.6, and the traceability row:
USD 89mn (1.5% of GMV, 2023) → USD 103mn (1.4%, 2024) → USD 155mn (1.6%, 2025), with the dollar
path stated as monotonic and the share-of-GMV path stated as non-monotonic (1.5% → 1.4% → 1.6%).
Independently verified against `Facts/Customer_Growth.md` line 14 (TLB-001, p.28: 2023/2024
points) and `Facts/_raw/TLB-002_facts.md` lines 124–126 (TLB-002, p.21: 2025 point, including the
USD 89mn vouchering component). Consistent with `ASM-024`'s registered trajectory
("USD89mn→103mn→155mn, 2023-2025", Approved, Medium) and with **Section 6 as now fixed**
(`Section_06_Business_Model_and_Revenue_Streams.md` lines 279 and 345 show the identical full
series; its own fix record, line 386, records the import of this fix). No cross-section
contradiction. But this parallel Section 6 fix falsifies §7.6's coordination note — see ND-2.

## Resolution of the citation-audit findings (spot-checked, not merely read)

| Finding | Status | Re-verification |
|---|---|---|
| HF-1 (-4pp → -4% y/y) | RESOLVED | Both §7.1 restatements now read "-4% y/y"; no "-4pp" string remains in the body (grep-confirmed); matches TLB-019 p.9 / ASM-027's "-4% y/y" |
| HF-2 (blanket cohort claim) | RESOLVED | §7.4 Caution now scopes per figure exactly as the audit prescribed: pro figures (and M1 deltas) to the six-of-eight pre-Feb-2025 cohort (TLB-015 p.77) under ASM-016; Rewards/PostPaid as Group disclosures with no Egypt breakout (PostPaid five-GCC-live at CMD 2024); Family Plan as a Q2 2025 Group disclosure post-dating the Egypt launch. The quoted source-note line verified verbatim in `Strategic/Customer Retention Drivers.md` Open Questions ("all are Group-level, GCC-cohort-based, or explicitly Egypt-excluded") |
| HF-3 (AI EBITDA page ref) | RESOLVED | Body and traceability row now cite TLB-002 page 16, matching the 2026-07-24 repo-wide correction in `Facts/_raw/TLB-002_facts.md` / `Facts/AI_Facts.md` / N-09; the unrelated 6-order-threshold TLB-002 p.15 cites are correct and untouched |
| HF-4 (savings conflation) | RESOLVED | Same as B2 above |
| HF-5 (partner-retention false negative) | RESOLVED | §7.3 now uses N-10's scoped wording ("...that this investment is expected to move") and states the ~99% pro-participating-vendor retention figure (TLB-001, p.21) at its disclosed scope (different population, not a general series); traceability row added |
| SF-1 (CARC endpoints-only) | RESOLVED | Same as B3 above |
| SF-2 (TLB-023 p.8 lower bound) | RESOLVED | "over 20%" (TLB-023, p.8) now inline in the pro citation set and in the traceability row; verified at `Facts/Retention.md` line 136 |
| SF-3 (USD 120mn uncited) | RESOLVED | §7.6 now cites (Group; TLB-002, page 20) directly — verified: `Facts/_raw/TLB-002_facts.md` line 10, "Vouchers and other discounts USD (120)mn"; locator corrected (contra-revenue in Section 6 §6.1, CARC in §6.4 — matches Section 6 as drafted) |
| SF-4 (+16pp/+20pp tag precision) | RESOLVED | Tag now reads "Group/GCC+Jordan cohort per ASM-016 — TLB-019, page 10 itself discloses no market scope"; pro parenthetical attributes cohort/timing scope to the register, not TLB-019; matches ASM-016's row (Approved, Low) verified in `Assumptions_Register.md` line 51 |
| SF-5 (corpus count) | RESOLVED | Now "29-document corpus — 27 primary plus 2 secondary sell-side-consensus documents, TLB-027/TLB-028" |

## Resolution of the non-blocking items (NB-1..NB-8)

| Item | Status | Note |
|---|---|---|
| NB-1 (ASM-024 provenance) | RESOLVED | ASM-024 now genuinely cited at the point of prospective reliance (§7.4, persistence of Rewards/PostPaid uplifts, "Approved, Medium confidence") plus traceability row — the 13.5 provenance note is now true. Register row verified (line 59) |
| NB-2 (register "Used in" columns) | OPEN — correctly out of scope for the draft | Still with decision-steward: ASM-016's "Used in" lacks Section 7, and ASM-024's still reads "Not yet cited in any drafted `_v2` section," which the fixed draft now makes inaccurate. Non-blocking per Pass 2's own classification; must be closed before Section 7's row can honestly claim full register hygiene |
| NB-3 (boxed disclosure wording) | RESOLVED | Now "No conversion percentage in the table below is a talabat-disclosed or corpus-derived figure," with the Anchor-column/conversion-column distinction stated |
| NB-4 (KPI cross-reference) | RESOLVED | `KPI_Tree_v2.md` C11 cited by ID — verified: C11, Customer-journey conversion rate, N-18, Newly-instrumented, Group (KPI_Tree_v2 line 88) |
| NB-5 (80/20 link) | RESOLVED | §7.1 now cites Section 3's 80/20 analysis (GCC 5 of 8 markets = 82% of pro-forma FY2025 GMV; TLB-002 p.18) — matches Section 3 lines 191/200, including Section 3's own custody of the TLB-019 81% tension flag |
| NB-6 (stale hedge) | RESOLVED | "(if drafted)" removed; §7.6 states the Section 4 check as performed |
| NB-7 (MECE statement) | RESOLVED | Explicit MECE status added to §7.4: ranking-not-partition, overlap handled by ranking and by never summing uplifts |
| NB-8 (independent citation audit) | PARTIALLY CLOSED | `Citation_Audit_Section_07_v2_pass2.md` exists (independent, FAIL, findings fixed above). Its own disposition requires a **targeted re-audit of the changed sentences** for closure — still outstanding, and ND-1 below (a citation defect in a changed passage) confirms it is not a formality |

---

## New defects found in the edited passages

### ND-1 — BLOCKING: unsupported per-attribute "#1" survey claim in the new B1 paragraph
§7.4, new paragraph: "customer support is one of the attributes on which surveyed users **ranked
talabat #1** in the August 2024 survey *(market-comparison: Kuwait, UAE, Egypt, Qatar, Bahrain;
TLB-015, pages 39, 44; TLB-012, page 7)*."
What the corpus actually discloses (verified against the raw CMD source text,
`_source_text/October-2024_Capital-Markets-Day_talabat.txt`, pages 39 and 44, and
`Facts/_raw/TLB-012_facts.md` line 60):
1. Customer support is one of the eight attributes users were **surveyed on** in the OC&C study
   (footnote 3, TLB-015 pp.39/44: "restaurant variety, delivery time, rider behaviour, customer
   support, discounts, prices, delivery fees and loyalty programs");
2. 80%+ of surveyed users rank talabat **#1 platform overall** (TLB-012 p.7; TLB-015 p.39);
3. Per-attribute #1 rankings are disclosed **only for restaurant selection (87%) and customer
   experience (84%)** (TLB-015 p.44: "Food delivery users rank talabat #1 for restaurant
   selection and customer experience").
No source discloses a #1 ranking **on the customer-support attribute specifically** — the
sentence asserts attribute-level precision the corpus deliberately does not provide. The draft's
own traceability row already carries the correct decomposition ("Customer support among surveyed
attributes; 80%+ ranked talabat #1") — the body sentence compressed it into an over-claim. This
is the same defect class the Pass 2 cycle blocked on (HF-5's universalization; B2's attribution
overstatement), in the very paragraph whose purpose was to deliver the sub-bullet through actual
disclosures; passing it would apply a laxer standard to the fix than to the original.
**Fix (one clause):** reword to match the traceability row, e.g. "customer support is one of the
eight attributes covered by the August 2024 OC&C survey in which 80%+ of surveyed users ranked
talabat the #1 platform *(market-comparison: Kuwait, UAE, Egypt, Qatar, Bahrain; TLB-015, pages
39, 44; TLB-012, page 7)*" — optionally adding the genuinely per-attribute disclosure ("with
attribute-level #1 rankings disclosed for restaurant selection and customer experience, TLB-015
p.44"), which would strengthen, not weaken, the paragraph.

### ND-2 — Non-blocking (fix in the same cycle): §7.6 coordination note now false
§7.6: "Section 6 **still presents** the CARC share-of-GMV series endpoint-only — flagged by QA
Pass 2 (B3 out-of-scope flag) for fixing when Section 6 is next touched; not fixed from here..."
Section 6 **has been fixed**: `Section_06_Business_Model_and_Revenue_Streams.md` lines 279 and
345 now show the full three-point series with the non-monotonic share path stated, and its fix
record (line 386) attributes the fix to Section 7's QA review. The note was presumably true when
written and was falsified by the parallel Section 6 edit — but as it stands the section would go
final containing a verifiably false statement about a sibling section. The underlying numbers are
fully consistent (no Financial Integrity issue). **Fix:** update or delete the parenthetical
(e.g., "Section 6's equivalent presentation was corrected in the same fix cycle — see its fix
record"). Same class as the NB-6 stale hedge; non-blocking, but trivial and should ride with the
ND-1 edit.

---

## Gate re-confirmation on the edited text

| Gate | Result | Basis |
|---|---|---|
| Problem Consistency (8/8) | **PASS** | No edited passage touches problem framing; Group-wide USD 175mn allocation framing, Egypt-as-worked-example, and DEC-010 non-reproduction all unchanged from the Pass 2 review's 8/8; no pre-pivot residue introduced |
| Financial Integrity | **PASS** | Check 5 violations cured: the two savings disclosures are now separated with their own periods, funders, and citations (no time-period blending, no attribution overstatement); the CARC series is complete and non-monotonicity is stated, consistent with Facts, ASM-024, and fixed Section 6; currencies (AED vs USD) stay labeled and unmixed; no allocation totals, no scenario arithmetic, no uplift stacking, no metric substitution introduced by the edits; DEC-008 not implicated (no 2.2:1 figure anywhere) |
| Geographic Evidence | **PASS** (tagging) | Every new figure is geography-tagged correctly: pro support benefit (Group); survey (market-comparison: Kuwait, UAE, Egypt, Qatar, Bahrain — matches source); SME academy (Egypt-standalone); tcamp (five named markets, matching TLB-001 p.49/TLB-026 p.138 exactly); both savings figures Group with distinct periods; per-figure cohort tags in §7.4 now match ASM-016/the Facts tier precisely (HF-2/SF-4 cured); no "MENA"; no unsupported *geographic* transfer. ND-1 is an attribute-precision citation defect, not a geography-tagging defect — it is blocked under citation accuracy, not this gate |

## Synthetic-funnel discipline — re-confirmed exemplary

Unchanged where it should be unchanged, improved where flagged: every right-column cell still
carries an inline bold `[SYNTHETIC]` label; the boxed disclosure now states precisely which
column is synthetic (NB-3); no funnel figure is registered as an `ASM-` row or leaks into
Section 9; the instrumentation recommendation now carries its C11/N-18 KPI ID (NB-4); the
justification still matches `CLAUDE.md`'s last-resort standard. No blending introduced by the
fix cycle.

## Disposition

**FAIL — hand back to the Orchestrator with two small fixes:** ND-1 (blocking, one clause in the
new §7.4 support/training paragraph) and ND-2 (non-blocking, one parenthetical in §7.6). Both are
localized; nothing else in the section requires re-drafting. On re-submission, this reviewer's
re-check can be limited to those two sentences. Independently of this review, two pipeline
preconditions for ✅ Done remain open: the targeted citation re-audit of the changed passages
(NB-8, which should also cover the ND-1 rewording) and the decision-steward register-hygiene
update (NB-2: ASM-016/ASM-024 "Used in" columns). Tracker cell not flipped.

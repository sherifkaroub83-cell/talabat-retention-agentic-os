---
type: validation
section: 6
pass: "2-reverify"
status: PASS
date: "2026-07-25"
built_by: qa-review-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_06_Business_Model_and_Revenue_Streams.md
independence_note: "Fresh thread; this reviewer did not draft, fix, or previously review Section 6.
  Verification performed against the Facts layer (Facts/Revenue.md, Facts/Customer_Growth.md,
  Strategic/Cost Structure.md, Topics/Customer Economics.md), the Decision layer (DEC-013,
  Assumptions_Register.md ASM-013 note), the fixed Sections 3/4, and the two Pass 2 reports —
  not against the fix record's own claims alone."
---

# QA Re-verification — Section 6 (v2), Pass 2 fix cycle

## Verdict

**PASS.** All four blocking findings from `QA_Review_Section_06_v2_pass2.md` (B1–B4) are genuinely
resolved in the draft text, all five non-blocking findings (N1–N5) and the citation audit's HF-1 and
SF-1–SF-5 are addressed to the extent fixable within this file, the imported CARC finding is fixed,
and no new blocking defect was introduced by the edits. The three gates pass on the edited text.
Two residual items outside this file's scope keep the section short of ✅ Done (see Residuals);
the tracker was not touched by this review, per instruction.

---

## Per-finding resolution verification

### B1 / HF-1 — pro GMV-share baseline mislabeled FY2024 → RESOLVED

All three occurrences now read "32% (Q1 2025) → 49% (Q1 2026)": §6.1 table cell ("GMV share 32%
(Q1 2025) → 49% (Q1 2026), Group; TLB-020 p.8; TLB-014 p.14"), §6.3 "So what" paragraph
("(Q1 2025→Q1 2026) *(Group; TLB-020, page 8; TLB-014, page 14)*"), and the traceability row.
No "FY2024→Q1 2026" residue anywhere in the file (checked full text). Citations moved off
`Topics/Talabat Pro.md` to TLB-020 p.8 / TLB-014 p.14 (traceability row routes "via
`Facts/Talabat_Pro.md`", which the citation audit's HF-1 fix language explicitly permits).
Cross-section consistency confirmed against the fixed drafts: Section 3 §3.2 / traceability H1 row
and Section 4 §4.2 / traceability both carry the identical "32% (Q1 2025) → 49% (Q1 2026)" series
with the same citations. §6.6's "no conflict found" claim, stale under B1, is now true again. N4
folded in correctly.

### B2 / SF-1 — ads benchmark denominator blend → RESOLVED

§6.2's advertising bullet now presents the two ~7% figures as explicitly separate data points with
denominators stated: (1) the **global leading-peer benchmark**, ~7% of **total GMV**,
management-adopted medium-term target *(external/global benchmark; TLB-001 p.21; TLB-015
pp.26/86/105)*, set against Group advertising at 3.4–3.5% of **total GMV** *(TLB-002 pp.11/14/19;
TLB-011 p.4 — the SF-4 re-citation, verified as the figure's primary locus per the Pass 2 audit)*;
(2) UAE tMart adtech at ~7% of **tMart GMV/sales**, Q4'25, double the company average
*(country-specific, UAE, tMart denominator; TLB-002 p.10; TLB-019 p.7; TLB-014 p.19)*, framed as
attainability evidence "not a same-basis comparison against the Group figure." The offending
"already reached ... versus 3.4–3.5% Group-wide" construction is gone. Treatment now matches the
fixed Section 4 §4.2 (verified: Section 4's HF-2/B4 fix uses the same two-data-point structure and
the same citations). Traceability split into three separately-tagged rows as prescribed.

### B3 — superseded ASM-013/DEC-006 cited as current → RESOLVED

The prerequisite container exists and is real:
`vault/Decisions/Decision_Log/DEC-013_subscription-line-reclassification-reissuance.md`,
`status: approved`, dated 2026-07-25, `reissues: DEC-006`, following the DEC-010/ASM-006 precedent,
with a Facts-layer re-verification note (TLB-010 p.16 sum 25,772,018 + 408,418,477 = 434,190,495;
TLB-011 p.4 ~0.2% reconciliation; TLB-005 p.18 Q1 2025 comparator) whose figures match the draft's.
`Assumptions_Register.md` carries the dated "ASM-013 re-established 2026-07-25 under DEC-013" note
anchoring the row to DEC-013 as active container and prescribing the exact citation formulation.

The draft's container references — provenance notes 13.3, 13.5, 13.6; Answer paragraph; §6.1
decomposition heading and confidence note; §6.3 bullet ("per the `ASM-013`/`DEC-013`
decomposition"); traceability row; See also wikilink — all use the DEC-013-prescribed form
("still-valid per the register's Pivot Reclassification, re-established under `DEC-013` (approved
2026-07-25)"). No occurrence of "ASM-013 ... status: Approved" remains; DEC-006 appears only three
times, each explicitly as the "superseded/historical" original container, exactly as DEC-013's
Impact section instructs. The confidence labels (High for component figures, Medium for the
decomposition logic) match DEC-013's restated record verbatim.

### B4 — "smallest of the four lines" internal falsehood → RESOLVED

Both §6.3 occurrences reworded. The first bullet now correctly identifies subscription as "the
smallest disclosed revenue component, at 1.0% of GMV (~USD 25.8mn) in Q1 2026" *sitting inside* the
combined line, which is explicitly named "the **largest** of the four fee-type lines in dollar
terms" (USD 1,397mn FY2025 — verified largest: vs. Commission 1,297, Delivery & Service 859,
Advertising 323). The +44%/+47% growth rates are now explicitly attributed to the **combined line**,
with the component split stated as Q1 2025/Q1 2026-scope only, consistent with §6.1. The §6.3
"So what" paragraph carries the same corrected component-inside-largest-line construction. The
arithmetic is now internally true against the section's own MECE framework.

### Non-blocking findings and citation-audit soft findings

- **N1 — RESOLVED.** Answer and §6.4 now read "~40–41% of GMV FY2024–FY2025; 38%→39% Q1 2025→Q1
  2026" — one consistent take-rate series in all three locations (Answer, §6.1, §6.4), FY and Q1
  figures no longer merged.
- **N2 — RESOLVED.** Answer's closing sentence explicitly names Section 2's governing hypothesis
  (§2.3) and states this section refines it.
- **N3 — RESOLVED.** The 2% comparator is tagged "external industry benchmark, disclosed within
  TLB-015, page 108 — not a talabat Group metric; no arithmetic blending" in body and traceability;
  the 8% stays Group-tagged.
- **N4 — RESOLVED** (folded into B1).
- **N5 — CORRECTLY ACKNOWLEDGED, NOT CLOSABLE HERE.** Frontmatter status accurately records that the
  Pass 1 audit is superseded on items 3/14 and that a fresh independent citation re-check of the
  changed passages remains required. See Residuals.
- **SF-2 — RESOLVED within scope.** TLB-019 p.13 conflict kept flagged-not-resolved; the label-shift
  diagnosis is appended explicitly "as a diagnosis to be verified ... not as a resolution"; routing
  to `decision-steward` recorded in the flag paragraph and provenance note 13.6. The draft still
  does not use the discrepant range, so the open DEC record does not block this section.
- **SF-3 — RESOLVED.** §6.4 states the comparison is cross-sectional, names the selection-effect
  caveat, and closes "evidences the size of the prize, not a guaranteed uplift." No causal
  "becomes ... is worth" gloss remains.
- **SF-4 — RESOLVED.** Group 3.4–3.5% re-cited to TLB-002 pp.11/14/19 + TLB-011 p.4, with a
  dedicated traceability row.
- **SF-5 — RESOLVED and independently verified against `Facts/Revenue.md`.** The %-of-GMV split
  stays correctly stated as Q1 2025/Q1 2026-only (TLB-011 p.4); the newly-acknowledged dollar-split
  disclosures verify exactly: Q2 2025 (TLB-006 p.18 — Subscription USD 15,461,238 / Other direct
  income USD 323,988,969), Q3 2025 (TLB-007 p.19), and the audited since-inception period (TLB-008
  p.52 / TLB-002 p.105 — Subscription USD 83,790,496 / Other direct income USD 1,604,260,347). The
  485-day period is correctly labeled "3 September 2024–31 December 2025, **not** FY2025" (matches
  TLB-008 p.83's period statement in the Facts layer), and the load-bearing conclusion — no
  full-year FY2024/FY2025 pro-forma decomposition is disclosed — survives, correctly, because the
  audited split covers ~16 months, not FY2025.
- **CARC (imported from Section 7 QA) — RESOLVED and independently verified.** §6.4 and the
  traceability row show the full disclosed three-point series — USD 89mn (1.5%, 2023) → USD 103mn
  (1.4%, 2024) → USD 155mn (1.6%, 2025), TLB-001 p.28 / TLB-002 p.21 — verified verbatim against
  `Facts/Customer_Growth.md` and `Strategic/Cost Structure.md`. The non-monotonic %-of-GMV path
  (down, then up) is stated, replacing the endpoint-only presentation.

---

## New-defect spot-check of edited passages

No new blocking defect found. Checks performed: no "FY2024→Q1 2026" or "ASM-013 ... Approved"
residue anywhere in the file; DEC-013 wikilink target exists; frontmatter status accurately
describes the file's actual state; §6.1 decomposition figures match DEC-013's re-verified record;
§6.3's "largest of the four" claim verified arithmetically; the two Pass 2 report references in the
frontmatter and fix record resolve to real files with matching findings.

Two minor observations, neither blocking:

1. **Denominator-qualifier granularity across sections (cosmetic).** Section 3 tags the pro
   GMV-share series "(Group, talabat-only excl. instashop)"; Sections 4 and 6 tag it "Group
   (platform GMV)". Same figures, same periods, same citations — no numeric or period
   inconsistency — but Section 14's full traceability table should harmonize the qualifier wording.
2. **Traceability row citing a validation artifact.** The TLB-019 flag row cites
   `Citation_Audit_Section_06_v2_pass2.md` SF-2 as provenance for the diagnosis. Acceptable here
   because it sources the flag's routing history, not a factual claim, but the row should not
   survive into Section 14's final table once the decision-steward DEC record exists.

---

## Gate re-confirmation on the edited text

| Gate | Result |
|---|---|
| **Problem Consistency** | **PASS.** Check 7 now clears: no superseded artifact cited as current — ASM-013 anchored to the approved, on-file DEC-013; DEC-006 referenced only as historical. Checks 1–6, 8 unchanged from Pass 2 (already passing): Group-wide allocation framing, options-traced findings (OPT-001/002/004), envelope untouched, pre-pivot draft marked historical. |
| **Financial Integrity** | **PASS.** Check 5 clears (pro baseline correctly Q1 2025, matching Sections 3/4 — one consistent series). Checks 3/9 clear (the two ~7% figures carry stated, separate denominators; no cross-basis comparison). B4's internal-consistency break cleared (component-vs-combined-line arithmetic now true; growth rates attributed to the correct subject). CARC shown as the full non-monotonic three-point series, Facts-verified. Take-rate series consistent across Answer/§6.1/§6.4. 485-day period never conflated with FY2025. No allocation arithmetic, no uplift stacking, no Revenue/GMV/gross-profit/EBITDA substitution (the ~95% conversion-vs-margin caution retained), rounding tildes preserved (no false precision), DEC-008's base-case-only constraint not implicated (§6.6 confines the section to FY2024/FY2025 historicals). |
| **Geographic Evidence** | **PASS.** Check 5 clears (period labels now match sources: Q1 2025/Q1 2026, Q4'25, Sept-2024 basis, 485-day since-inception). Checks 6/9 clear via B2's fix (UAE-tMart figure kept country/vertical-scoped and never blended with the Group figure). N3's fix correctly separates the external 2% industry comparator from talabat Group metrics — no unreconciled blending. Geography tags present on every numeric claim; Egypt gaps stated, not filled by Group transfer; no MENA usage; no non-GCC segment figure used. |

---

## Residuals before ✅ Done (correctly recorded in the draft's own fix record)

1. **Fresh, independently-invoked citation re-check of the changed passages** (N5) — the Pass 2
   citation audit on file is status FAIL (HF-1, now fixed in the draft); its own re-run-eligibility
   note says a targeted re-check of the changed sentences suffices. This re-verification traced the
   changed passages' figures to the Facts layer itself, but the pipeline's two-pass discipline
   still requires the evidence-citation-agent artifact before the tracker flips.
2. **SF-2's decision-steward DEC record and Facts-layer correction note on TLB-019 p.13** — open,
   outside this file, non-blocking for this section (the discrepant range is flagged and unused).

Tracker not modified by this review, per task instruction: Section 6 stays at its current status
until residual 1 lands and the Orchestrator flips the cell.

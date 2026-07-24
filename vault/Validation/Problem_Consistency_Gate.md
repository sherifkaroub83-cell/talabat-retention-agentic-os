---
report: Problem Consistency Gate
run_date: "2026-07-24"
scope: "Consolidated — Sections 2, 4, 5, 9, 12, 13 (v2 drafts), Stage 11 independent QA reviews"
verdict: "5 PASS (8/8), 1 FAIL — Section 5"
---

# Problem Consistency Gate — Consolidated, 2026-07-24

**Why this file was rebuilt:** this is a shared, non-append-only artifact. Six independent `qa-review-agent`
threads ran concurrently on 2026-07-24 (Sections 2, 4, 5, 9, 12, 13), each overwriting this same file in
turn — only the last writer's single-section result survived on disk, even though all six runs' full
8-check tables are independently preserved inline in their own `QA_Review_Section_XX_v2.md`. This file
consolidates all six runs into one multi-section record from those authoritative per-section sources, so
no result is lost to the race. Canonical problem statement used by every run: `Problem_Charter.md`.

## Consolidated results (8 checks × 6 sections)

| # | Check | Sec 2 | Sec 4 | Sec 5 | Sec 9 | Sec 12 | Sec 13 |
|---|---|---|---|---|---|---|---|
| 1 | Matches `Problem_Charter.md`'s Group-wide USD175mn capital-allocation problem, not Egypt-retention | Pass | Pass | Pass | Pass | Pass | Pass |
| 2 | Geographic scope matches charter (Group/8 markets, Egypt as worked example, no "MENA") | Pass | Pass | Pass | Pass | Pass | Pass |
| 3 | Decision question matches charter (allocation, not "reduce Egypt churn") | Pass | Pass | Pass | Pass | Pass | Pass |
| 4 | Investment envelope matches disclosed figures, no invented sub-splits presented as disclosed | Pass | Pass | Pass | Pass | Pass | Pass |
| 5 | Evidence-category discipline respected (Facts/inferences/Decisions/Assumptions/Forecasts/synthetic never blended) | Pass | Pass | **Fail** | Pass (caveat) | Pass (caveat) | Pass |
| 6 | Output requirements match charter (ranges/staged funding, no false precision) | Pass | Pass | Pass (caveat) | Pass | Pass | Pass |
| 7 | No active file cites a superseded artifact as current | Pass | Pass | Pass | Pass | Pass | Pass |
| 8 | Any pre-pivot reference is clearly marked historical/superseded | Pass | Pass | Pass | Pass | Pass | Pass |
| | **Section verdict** | **PASS 8/8** | **PASS 8/8** | **FAIL** | **PASS 8/8** | **PASS 8/8** | **PASS 8/8** |

## Section 5 — the one Check-5 failure (detail)

Check 5 fails on two independent grounds, both in the same section:
(a) §5.5 presents a disclosed Fact (talabat pro's rollout) as if it were direct evidence for an
undisclosed claim (AI-model scalability specifically) with no inference label attached;
(b) §5.6 presents a resolved Decision (`DEC-009`) as if it addressed — and remained open on — a
different, genuinely still-open question (cross-market allocation), when `DEC-009` actually resolved the
funding-sequence question only. See `QA_Review_Section_05_v2.md` §6 for the full writeup.

## Caveats folded into other sections' Check 5 / Check 6 (not counted as independent violations)

- **Section 9, Check 5:** §9.5 states `ASM-015`–028 are still `Proposed`; the register shows them
  `Approved` as of 2026-07-23. Tracked as citation-audit Failure 2, not double-counted here.
- **Section 12, Check 5:** `DEC-009` is correctly cited and categorized as a Decision throughout, but its
  *resolution status* is misstated ("unresolved" vs. actual "approved") — the same hard failure already
  tracked under Section 12's citation audit, not double-counted here.
- **Section 5, Check 6:** the AI/personalisation EBITDA figure is called "disclosed" when its own source
  calls it "estimated" — tracked under that section's Financial Integrity Gate Check 10, not double-counted
  here.

## Cross-section pattern

Two sections (9 and 12) independently mischaracterize `DEC-009`'s status/scope — see the dedicated
cross-cutting fix below. This is a drafting-consistency issue, not a Problem Consistency Gate defect in
the gate's own technical sense (DEC-009 is still correctly categorized as a Decision in both places), but
it is the same underlying error surfacing twice.

## Source of truth per section

Each section's full, non-racing 8-check table remains authoritative inline in:
`QA_Review_Section_02_v2.md` §6 · `QA_Review_Section_04_v2.md` §6 · `QA_Review_Section_05_v2.md` §6 ·
`QA_Review_Section_09_v2.md` §6 · `QA_Review_Section_12_v2.md` §6 · `QA_Review_Section_13_v2.md` §5.

## See also
- `Problem_Charter.md`
- [[Talabat-Group-AI-Investment-Allocation-Business-Plan|Project tracker]]
- [[Financial_Integrity_Gate]] · [[Geographic_Evidence_Gate]]

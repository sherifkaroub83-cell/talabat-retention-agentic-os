---
report: Geographic Evidence Gate
run_date: "2026-07-24"
scope: "Consolidated — Sections 2, 4, 5, 9, 12, 13 (v2 drafts), Stage 11 independent QA reviews"
verdict: "4 PASS (9/9), 2 FAIL — Sections 4, 5"
---

# Geographic Evidence Gate — Consolidated, 2026-07-24

**Why this file was rebuilt:** this is a shared, non-append-only artifact. Six independent `qa-review-agent`
threads ran concurrently on 2026-07-24 (Sections 2, 4, 5, 9, 12, 13), each overwriting this same file in
turn — only the last writer's single-section result survived on disk, even though all six runs' full
9-check tables are independently preserved inline in their own `QA_Review_Section_XX_v2.md`. This file
consolidates all six runs into one multi-section record from those authoritative per-section sources.
Validated against `vault/Architecture/Geographic_Evidence_Rules.md`, read fresh by each run.

## Consolidated results (9 checks × 6 sections)

| # | Check | Sec 2 | Sec 4 | Sec 5 | Sec 9 | Sec 12 | Sec 13 |
|---|---|---|---|---|---|---|---|
| 1 | Every numeric/directional claim carries a geography tag | Pass | **Fail** | Pass (caveat) | Pass | Pass | Pass (stylistic note) |
| 2 | No Group/GCC figure presented as Egypt-specific without an inference qualifier | Pass | Pass | Pass | Pass | Pass | Pass |
| 3 | No Egypt-specific figure presented as Group-representative | Pass | Pass | Pass | Pass | Pass | Pass |
| 4 | Pre-FY2025 and FY2025-onward "non-GCC" figures not used interchangeably | Pass | Pass (N/A) | Pass (N/A) | Pass (N/A) | Pass (N/A) | Pass (N/A) |
| 5 | Time period of every geography-tagged claim stated and matches source | Pass | Pass (minor note) | **Fail** | Pass | Pass | Pass |
| 6 | No unsupported metric transfer across geographies | Pass | **Fail** | **Fail** | Pass | Pass | Pass |
| 7 | Every `inferred-applicability` claim explicitly labeled as inference, naming source and target geography | Pass | Pass | **Fail** | Pass | Pass | Pass |
| 8 | "MENA" never used as a stand-in for talabat's 8-market footprint | Pass | Pass | Pass | Pass | Pass | Pass |
| 9 | External market-research figures not blended arithmetically with talabat's own figures without reconciliation | Pass | Pass (N/A) | Pass (N/A) | Pass | Pass (N/A) | Pass (N/A) |
| | **Section verdict** | **PASS 9/9** | **FAIL 2/9** | **FAIL 3/9** | **PASS 9/9** | **PASS 9/9** | **PASS 9/9** |

## Failure detail by section

**Section 4** (checks 1, 6): the section's only geography mechanism is one blanket disclaimer ("every
uplift statistic below is GCC+Jordan-cohort evidence... unless stated otherwise"), which mis-defaults
several independently-confirmed **Group**-level Facts (`Value_Driver_Tree_v2.md` N-11, N-14, N-09, N-29) —
fragile drafting, not a stated inline tag (check 1). Separately, the "~7%-of-GMV UAE benchmark" phrase
attaches a UAE-specific label to what its own cited source calls a **global** benchmark, transferring a
global target's number onto a UAE-achievement label (check 6) — this is exactly the Rules document's
named "silently treating a different-geography figure as if it were measured at this geography" failure
pattern.

**Section 5** (checks 5, 6, 7): all three trace to one defective sentence in §5.5 — "talabat pro live in
7/8 countries by end-2024" (a) misstates the actual February 2025 disclosure date (check 5), (b) is used,
unqualified, as evidence of AI-model scalability specifically — a product-rollout fact standing in for an
undisclosed AI/ML-deployment claim (check 6), and (c) carries no inference label naming source/target
geography anywhere in the sentence (check 7). One rewrite fixes all three.

## Cross-section note

Section 4's blanket-disclaimer pattern (check 1) and Section 5's unqualified-inference pattern (check 7)
are related but distinct drafting defects — both stem from treating a single upfront geography caveat as
sufficient cover for individually-tagged claims later in the same section, rather than tagging each claim
inline. Worth a shared drafting-discipline note for any future section still in self-review.

## Source of truth per section

Each section's full, non-racing 9-check table remains authoritative inline in:
`QA_Review_Section_02_v2.md` §8 · `QA_Review_Section_04_v2.md` §8 · `QA_Review_Section_05_v2.md` §8 ·
`QA_Review_Section_09_v2.md` §8 · `QA_Review_Section_12_v2.md` §8 · `QA_Review_Section_13_v2.md` §6.

## See also
- `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Knowledge/Entities/Countries.md`, `vault/Knowledge/Topics/GCC vs non-GCC.md`
- [[Problem_Consistency_Gate]] · [[Financial_Integrity_Gate]]

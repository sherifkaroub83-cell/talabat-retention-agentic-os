---
report: Financial Integrity Gate
run_date: "2026-07-24"
scope: "Consolidated — Sections 2, 4, 5, 9, 12, 13 (v2 drafts), Stage 11 independent QA reviews"
verdict: "3 PASS (11/11), 3 FAIL — Sections 4, 5, 9, plus a separate 1-check fail on Section 13"
---

# Financial Integrity Gate — Consolidated, 2026-07-24

**Why this file was rebuilt:** this is a shared, non-append-only artifact. Six independent `qa-review-agent`
threads ran concurrently on 2026-07-24 (Sections 2, 4, 5, 9, 12, 13), each overwriting this same file in
turn — only the last writer's single-section result survived on disk, even though all six runs' full
11-check tables are independently preserved inline in their own `QA_Review_Section_XX_v2.md`. This file
consolidates all six runs into one multi-section record from those authoritative per-section sources.

## Consolidated results (11 checks × 6 sections)

| # | Check | Sec 2 | Sec 4 | Sec 5 | Sec 9 | Sec 12 | Sec 13 |
|---|---|---|---|---|---|---|---|
| 1 | Allocation totals reconcile (sum to USD175mn or discrepancy explained) | Pass | Pass | Pass | Pass | Pass | Pass |
| 2 | Scenario arithmetic internally consistent | Pass | Pass (N/A) | Pass (N/A) | Pass | Pass (N/A) | Pass (N/A) |
| 3 | Units consistent within each exhibit | Pass | **Fail** | Pass | Pass | Pass | **Minor issue** |
| 4 | Currency stated and consistent (USD throughout) | Pass | Pass | Pass | Pass | Pass | Pass |
| 5 | Time periods stated, not silently mixed | Pass | Pass (minor note) | **Fail** | Pass (caveat) | Pass | Pass |
| 6 | Percentage logic correct (no pp-vs-% confusion) | Pass | **Fail** | Pass (N/A) | **Fail** | Pass | Pass |
| 7 | No double counting | Pass | Pass | Pass | Pass | Pass | Pass |
| 8 | No additive stacking of overlapping uplift statistics | Pass | Pass | Pass (N/A) | Pass | Pass | Pass |
| 9 | Revenue/GMV/gross profit/EBITDA never mixed or substituted | Pass | Pass | **Fail** | Pass | Pass | **Fail** |
| 10 | No unlabeled false precision | Pass | Pass (caveat) | **Fail** | Pass | Pass | Pass |
| 11 | `DEC-008` base-case-only constraint respected | Pass | Pass | Pass | Pass | Pass | Pass |
| | **Section verdict** | **PASS 11/11** | **FAIL 2/11** | **FAIL 3/11** | **FAIL 1/11** | **PASS 11/11** | **FAIL 1/11 (minor)** |

## Failure detail by section

**Section 4** (checks 3, 6): "CARC rising from USD89mn (2023) to USD155mn (2025) as a share of GMV" dangles
an unquantified "as a share of GMV" modifier on two absolute-dollar figures (correct pairing: 1.5% of GMV in
2023, 1.6% in 2025); the "~7%-of-GMV UAE benchmark" clause conflates a global aspirational target
(TLB-001 p.21) with a distinct UAE-and-tMart-specific achieved figure (TLB-002 p.10/TLB-014 p.19).

**Section 5** (checks 5, 9, 10): "talabat pro live in 7/8 countries by end-2024" misstates a disclosed
February 2025 subsequent event (TLB-001 p.11); the AI/personalisation EBITDA-contribution figure is sourced
to `Topics/EBITDA.md` (Group Adjusted EBITDA, a different metric) instead of `Topics/AI.md`/
`Value_Driver_Tree_v2.md` N-09; the same figure is called "disclosed" in the Answer-first paragraph when its
own source frames it as "estimated."

**Section 9** (check 6 — the single most serious finding across all six sections): §9.3's Downside row reads
"(Q1 2026 actual already 4.8%, -9pp y/y)." Every source in the chain (TLB-020, `Scenarios_v2.md`,
`Value_Driver_Tree_v2.md` N-35, `EBITDA.md`) states "-9% y/y," referring to the *dollar* Adjusted EBITDA
decline, not a percentage-point margin move. The actual margin move is -1.5pp (6.3%→4.8%) or -1.2pp
(6.0%→4.8%) — the draft overstates margin compression roughly 6-7x, and contradicts its own Traceability
table and §9.4 elsewhere in the same file.

**Section 13** (check 9, minor): the Portfolio family's representative-KPI example cites "baseline:
disclosed EBITDA bridge" where `KPI_Tree_v2.md`'s own P1–P3 rows actually cite
`Investment_Portfolio_Register.md`'s dollar-plan figures — a one-line mischaracterization in an illustrative
summary table, not a defect in `KPI_Tree_v2.md` itself.

## Cross-section pattern

Sections 4 and 5 independently mis-cite the same class of figure — an EBITDA-adjacent number pulled from
the wrong Topic Note (`EBITDA.md` instead of the section-appropriate Fact/Forecast node). Flagged by two
separate reviewers as likely systemic rather than coincidental. See the dedicated cross-cutting fix below.

## Source of truth per section

Each section's full, non-racing 11-check table remains authoritative inline in:
`QA_Review_Section_02_v2.md` §7 · `QA_Review_Section_04_v2.md` §7 · `QA_Review_Section_05_v2.md` §7 ·
`QA_Review_Section_09_v2.md` §7 · `QA_Review_Section_12_v2.md` §7 · `QA_Review_Section_13_v2.md` §4.

## See also
- `vault/Decisions/Investment_Portfolio_Register.md`
- `vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Forecasts/Scenarios_v2.md`
- [[Problem_Consistency_Gate]] · [[Geographic_Evidence_Gate]]

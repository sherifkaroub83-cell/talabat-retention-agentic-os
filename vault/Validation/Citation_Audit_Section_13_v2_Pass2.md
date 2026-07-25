---
report: Citation Audit — Section 13 (Monitoring and Evaluation), Pass 2 (independent)
section: 13
run_date: 2026-07-24
reviewer: qa-review-agent (independent Pass 2 — no memory of drafting)
source_file: vault/Projects/Business_Plan_Drafts_v2/Section_13_Monitoring_and_Evaluation.md
verdict: PASS WITH MINOR FIXES
---

# Citation Audit — Section 13 (Monitoring and Evaluation) — Pass 2

Every numeric/named-fact claim in the drafted section was walked sentence-by-sentence and its
citation chain re-derived from scratch (source files opened and read, not assumed). No
`Value_Driver_Tree_v2.md` node IDs (N-06, N-09, or any other) are cited directly in this section's
body — all KPI-tree citations stay at the family/file level, so the specific N-06-for-N-09
mis-attribution pattern found in Section 5 does not recur here. Confirmed by direct grep: no `N-\d\d`
or bare KPI-ID token appears anywhere in the drafted text.

| # | Claim | Cited to | Verified against | Result |
|---|---|---|---|---|
| 1 | "50 KPIs across five families... 30 already have a talabat-disclosed baseline... 20 do not" | `KPI_Tree_v2.md` | Summary table: Total 50, Baseline-exists 30, Newly-instrumented 20 (4+9+11+6+0=30; 4+3+3+3+7=20) | Pass |
| 2 | Portfolio 8 / 4 baseline / 4 new | `KPI_Tree_v2.md` §1 | "Portfolio family: 8 KPIs — 4 baseline-exists, 4 newly-instrumented" | Pass |
| 3 | Customer & growth 12 / 9 / 3; "talabat pro subscriber GMV share (baseline: 32%→49% trend)" | `KPI_Tree_v2.md` §2 | C1: "TLB-020 p.8: ~32% (Q1 2025) → ~49% (Q1 2026)" — figures match; **but Section 13's table cell omits the period entirely** | **Minor finding.** Figure itself is correct (not the "FY2024" mislabeling found elsewhere), but the omission of the period is a precision gap given this exact statistic is the site of a known repo-wide date-mislabeling bug (Section 5, now fixed). Fix: state "(Q1 2025→Q1 2026)" inline, matching `KPI_Tree_v2.md` C1 and `ASM-021`. |
| 4 | "multi-vertical GMV share (baseline: 68%→73%→76%)" | `KPI_Tree_v2.md` §2 | C3: "TLB-019 p.7, TLB-020 p.8: 68% (Dec'24) → 73% (Dec'25) → 76% (Mar'26)" — figures match; **period again omitted in Section 13's table** | **Minor finding**, same fix as #3: add "(Dec'24→Dec'25→Mar'26)" inline |
| 5 | Financial 14 / 11 / 3; "programme-attributable incremental GMV (new, ASM-017-derived, illustrative only)" | `KPI_Tree_v2.md` §3; `ASM-017` | F10: "N-42 (`ASM-017`)... illustrative decomposition... not a disclosed or measured programme ROI"; `ASM-017` row: `Approved`, Forecast tier | Pass — correctly cites ASM-017/N-42, **not** N-06 or N-09 |
| 6 | Operational 9 / 6 / 3; "Dark-store count/density (baseline: 130→160 stores)" | `KPI_Tree_v2.md` §4 | O1: "TLB-002 p.12, p.14: 130 (end-2024) → 160 (2025)" | Pass |
| 7 | Governance 7 / 0 / 7 | `KPI_Tree_v2.md` §5 | "Governance family: 7 KPIs — 0 baseline-exists, 7 newly-instrumented" | Pass |
| 8 | "Portfolio and Operational KPIs are predominantly leading... Financial KPIs are predominantly lagging" | `KPI_Tree_v2.md` summary table | Portfolio: 5 leading/3 lagging; Operational: 6 leading/3 lagging; Financial: 3 leading/11 lagging | Pass |
| 9 | "No churn rate, definition, or cohort analysis exists anywhere in the corpus, at Group or any country level" | `Topics/Customer Churn.md` | Topic note's Open Questions state this explicitly for "talabat overall or for Egypt specifically" | **Minor finding.** The source note is explicit about Group and Egypt; it does not independently confirm the absence of a churn figure for each of the other seven countries individually (UAE, Kuwait, Qatar, Bahrain, Oman, Jordan, Iraq) — the broader "any country level" phrasing is a reasonable synthesis (if Group-level data doesn't exist, no country breakout of it can either) but is stated more broadly than the cited note itself asserts. Recommend narrowing to "Group or Egypt" (the note's actual scope) or adding one clause noting the generalization to the other seven markets is an inference, not a separately confirmed absence. |
| 10 | "the entire Governance family... because talabat discloses zero internal capital-allocation governance mechanics anywhere in the 29-document corpus" | `Topics/Capital Allocation and Investment Governance.md` | "No document in the corpus describes an internal capital-allocation committee, an investment-approval threshold, a stage-gate process..." | Pass |
| 11 | Tracking Tools: `Assumptions_Register.md`, `Investment_Options_Register.md`, Decision Log workflow | Named vault artifacts | All three files exist and function as described (status-transition mechanisms confirmed by direct inspection) | Pass |
| 12 | Kill/Pivot Criteria: OPT-002 H1→H2 gate tied to "GCC+Jordan cohort's 20-28%/26-32% uplift range" | `ASM-016` | Matches ASM-016 and C5/C6 exactly | Pass |
| 13 | "mirroring exactly how the pre-pivot plan's own DEC-007 handled the same class of problem" | `DEC-007` | `DEC-007` frontmatter: `status: superseded`; its Decision used "qualitative, trajectory-relative gates... not invented numeric thresholds" — Section 13 labels this "(superseded problem, methodology precedent only)" in its own traceability table | Pass — correctly labeled historical/methodology-only, satisfies Problem Consistency Gate check 8 |
| 14 | "No numeric target is assigned to any of the 20 newly-instrumented KPIs" | `KPI_Tree_v2.md` | "No numeric target is assigned to any newly-instrumented KPI in this file... requires a Decision Log entry" | Pass — verified no numeric target invented anywhere in Section 13's own text either |

## Verdict

**PASS WITH MINOR FIXES.** No fabricated or misattributed citation found; no node-ID mismatch; no
false claim about a Decision's status. Three precision gaps should be fixed before sign-off: (a) add
the missing time periods to the pro-GMV-share and multi-vertical-GMV-share table cells (#3, #4); (b)
narrow or qualify the churn "any country level" generalization (#9). None of these change the
section's substance or its compliance with DEC-008/DEC-009.

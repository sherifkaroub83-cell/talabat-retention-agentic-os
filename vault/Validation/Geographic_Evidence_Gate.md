---
report: Geographic Evidence Gate
run_date: 2026-07-25
scope: "whole plan (14 sections)"
verdict: PASS
---

# Geographic Evidence Gate — 2026-07-25

**Scope of this run:** All 14 sections of `vault/Projects/Business_Plan_Drafts_v2/` —
`Section_01_Executive_Summary.md` through `Section_14_Appendices.md` (Section 13 read from
`Section_13_Monitoring_and_Evaluation 2.md`, the current restored file per its own frontmatter's
2026-07-25 repository-incident note). This is Stage 16 of `Business_Plan_Generation_Pipeline.md` —
a fresh, whole-plan CROSS-section consistency check, run independently of, and superseding in scope,
the narrower Sections-12/13-only Geographic Evidence Gate run earlier on 2026-07-24 (overwritten by
this file, per the template's own re-run instruction).

**Validated against:** `vault/Architecture/Geographic_Evidence_Rules.md` (read fresh this run, in full).

## Method

Read all 14 section drafts in full. Traced every recurring geography-bearing fact across the sections
that cite it, checking that each section applies the same geography tag (Group / GCC / non-GCC
pre-FY2025 / non-GCC FY2025-onward / Egypt-standalone / country-specific / market-comparison /
external / inferred-applicability) to the same underlying evidence. Recurring facts traced in detail:
talabat pro GMV share (32%→49%, Q1 2025→Q1 2026, Group); talabat pro frequency/retention uplift
(`ASM-016`, GCC+Jordan cohort, excludes Egypt/Iraq); multi-vertical GMV share (68%→73%→76%,
Dec'24→Dec'25→Mar'26, Group); multi-vertical order-frequency gap (13.0x/12.8x vs 3.8x); the -4% y/y
non-high-value M1 retention decline (UAE/Kuwait/Qatar specifically); the GCC/non-GCC/Egypt FY2025
segment table; non-GCC GMV growth and share (+57% y/y; 18% FY2025 → 21% Q1 2026, two dated points);
the AI/personalisation EBITDA contribution (>USD14mn FY2024 → >USD30mn FY2025, Group); the AdTech ~7%
UAE-tMart benchmark vs. Group 3.4–3.5%; Egypt's inconsistent category-share figures; the FY2026 EBITDA
margin bridge (6.7%/6.5% FY2024/FY2025, 6.0% Q4 2025, 4.8% Q1 2026, 4.4–4.8% FY2026 guided); FY2025 GMV
USD9.5bn; CARC and per-customer spend figures; and the GCC-vs-non-GCC 1.28x/0.13x per-capita order
frequency figures.

## Checklist

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Every numeric or directional claim carries a geography tag | **Pass** | Every section reviewed tags its figures inline (e.g. "*(Group; TLB-019, p.14)*", "*(market-comparison: UAE, Kuwait, Qatar; TLB-019, p.9)*", "*(Egypt standalone, FY2025; TLB-002, p.111)*"). No untagged numeric claim found in Sections 1–14. |
| 2 | No Group-level or GCC-level figure presented as Egypt-specific (or any other single country) without a stated inference qualifier | **Pass** | The one recurring case (talabat pro uplift, `ASM-016`, GCC+Jordan cohort) is qualified every time it is used to reason about Egypt/Iraq: Section 4 states the cohort and "Low confidence for extension beyond that cohort"; Section 7 §7.4 states it "as a labeled inference... imported into Egypt/Iraq as a working hypothesis, not an Egypt-validated ranking"; Section 9's Assumptions table states "applied to Egypt/non-GCC as inference, not fact"; Section 12 states "explicitly an inference rather than a proven Egypt/Iraq-specific effect." No section states the GCC+Jordan uplift as an Egypt fact. Likewise the AdTech ~7% UAE benchmark is never presented as an already-achieved Group figure (Sections 3, 4, 6, 10 all state "UAE tMart specifically" vs. "Group 3.4–3.5%"), and the -4% M1 retention decline is never generalized beyond UAE/Kuwait/Qatar without an explicit gap statement (Sections 1, 3, 4, 7, 10, 12 all scope it to the three named markets; Sections 3 §3.3, 7 §7.1, and 10 `MKT-01` each explicitly flag extension to Egypt/non-GCC as an unevidenced, labeled inference). |
| 3 | No Egypt-specific (or other single-country) figure presented as Group-representative | **Pass** | Egypt-standalone FY2025 segment figures (revenue USD509.9mn, gross profit USD125.0mn, net profit USD44.4mn, ~81% y/y Q1 2026 revenue growth) appear only in Section 3 §3.2's segment table, correctly tagged Egypt-standalone, and are not reused elsewhere as if Group-representative. Egypt PostPaid+CIB, Egypt's Cairo tech hub, and Egypt's EV fleet figures are likewise confined to their own country-specific tag everywhere they appear (Sections 4, 7, 8, 11). |
| 4 | Pre-FY2025 and FY2025-onward "non-GCC" figures not used interchangeably without flagging the segment-reporting change | **Pass** | Every "non-GCC" reference reviewed (Sections 1–3, 7, 10, 14) is either the FY2025-onward Jordan+Iraq-only segment (Section 3 §3.2's segment table, explicitly labeled "Jordan + Iraq only") or a general/qualitative reference that does not depend on the pre/post split. No section cites a pre-FY2025 non-GCC figure (which would implicitly include Egypt) and treats it as equivalent to the FY2025-onward Jordan+Iraq-only figure. |
| 5 | Time period of every geography-tagged claim stated and matches its source | **Pass, with one non-blocking observation** | Time periods are consistently stated and internally consistent across sections for every headline recurring figure (pro GMV share Q1 2025→Q1 2026; multi-vertical share Dec'24→Dec'25→Mar'26; EBITDA margin bridge FY2024/FY2025/Q4 2025/Q1 2026/FY2026 guidance; non-GCC 18% FY2025 vs 21% Q1 2026 explicitly presented as "two dated data points, not a blended range" in Section 3, carried consistently into Section 1). **Observation (not a check failure):** the multi-vertical order-frequency gap is stated as "13.0x vs 3.8x" with no date given in Section 4, "13.0 times/month... Group, July 2024 basis (TLB-012/TLB-013)" in Section 7, and "12.8 orders... Group, September 2024 basis (TLB-026)" in Section 6 — three internally consistent Group-tagged citations to what appear to be two distinct, correctly-dated point-in-time disclosures (paralleling the plan's own accepted precedent of presenting distinct dated order-frequency figures side by side rather than blending them, e.g. the 6.7x/6.5x order-frequency figures in Section 3 §3.1). Section 4's omission of a date is a citation-precision gap, not a geography-tagging error — both figures are correctly tagged Group throughout, and neither is misattributed to a different geography. Flagged here for a future citation-precision pass; does not affect this gate's verdict. |
| 6 | No unsupported metric transfer — a mechanism/uplift evidenced in one geography not presented as measured in another | **Pass** | No instance found of a GCC/Group-measured mechanism being described as "measured" or "disclosed" for Egypt, Iraq, or any other market it was not evidenced in. The GEMs Partner-level churn-risk tool (Section 3 §3.4) is correctly described as a Partner-level, not customer-level, proof point when used to support `OPT-005`'s customer-level extension, not conflated with a customer-level measurement. `TECH-01` (Section 10) explicitly names the undisclosed non-GCC AI-tuning status as a risk rather than assuming Group effectiveness transfers uniformly. |
| 7 | Every `inferred-applicability` claim explicitly labeled as inference in the prose itself, everywhere it appears | **Pass** | `ASM-016` (GCC+Jordan → Egypt/Iraq) is checked across Sections 2, 3, 4, 7, 9, 10, 11, 12, 14 specifically per this run's instruction: Section 2 does not restate the uplift figures (no violation); Section 3 explicitly states it does not make the Food-leadership extrapolation to Egypt; Section 4 states cohort + Low confidence inline; Section 7 §7.4 uses the word "inference" explicitly with source/target geography named; Section 9's Assumptions Register table states "as inference, not fact"; Section 10 `TECH-01`/`MKT-01`/`MKT-03`/`FIN-04` each carry an explicit "*Geography: ... inferred-applicability caveat*" tag; Section 11 Control 4 restates the same `TECH-01` inference framing; Section 12 uses the word "inference" explicitly; Section 14's traceability table records the GCC+Jordan cohort scope inline. No section presents the GCC+Jordan uplift as an Egypt-measured fact. |
| 8 | "MENA" never used as a stand-in for talabat's 8-market footprint | **Pass** | Only Section 3 uses the string "MENA," and only to explicitly name what this section deliberately does NOT do (reframing away from a "MENA AI market" TAM figure the corpus doesn't support) and to flag the one Meituan comparator as explicitly "external, non-MENA" and not blended into any talabat figure. No section uses "MENA" as a synonym for Group/GCC/non-GCC/the 8-market footprint. |
| 9 | External market-research figures not blended arithmetically with talabat's own figures without reconciliation | **Pass** | Section 3 §3.1 presents the USD104bn/USD150bn+ grocery TAC figures and the Redseer/OC&C-sourced penetration figures as explicitly external/unreconciled ("these are presented together, not force-reconciled... this section does not guess which is correct"), and the >10x GMV-vs-TAC comparison is a stated ratio for scale context, not an arithmetic blend. The Meituan comparator is explicitly flagged external/non-MENA and not merged into any Group figure. No other section introduces an external market-research figure. |

## Verdict

**PASS.** All nine checks pass at whole-plan scope. The plan's geography-tagging discipline —
established by `Geographic_Evidence_Rules.md` and repeatedly exercised through each section's own
Pass 2/Pass 3 citation audits and the Stage 17 whole-plan citation audit — holds consistently across
all 14 sections for every recurring geography-bearing fact traced in this review, including the
highest-risk recurring case this pivot's own root-cause analysis identified (`ASM-016`'s GCC+Jordan→
Egypt inference), which is labeled as inference everywhere it recurs (Sections 3, 4, 7, 9, 10, 11, 12,
14). One non-blocking observation is recorded under Check 5 (a citation-precision, not
geography-tagging, gap in Section 4's un-dated restatement of the multi-vertical order-frequency
figure) for a future citation-precision pass — it does not constitute a Geographic Evidence Gate
failure and does not block this gate's PASS verdict.

## See also
- `vault/Architecture/Geographic_Evidence_Rules.md`
- `vault/Knowledge/Entities/Countries.md`, `vault/Knowledge/Topics/Segment Reporting.md`, `vault/Knowledge/Topics/GCC vs non-GCC.md`
- `.claude/agents/qa-review-agent.md`
- `vault/Architecture/Business_Plan_Generation_Pipeline.md` (Stage 16)

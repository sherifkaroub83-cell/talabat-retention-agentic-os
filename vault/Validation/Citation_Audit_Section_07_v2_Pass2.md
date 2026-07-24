---
type: validation
section: 7 (v2 — Group-wide capital-allocation draft) — INDEPENDENT PASS 2
target: vault/Projects/Business_Plan_Drafts_v2/Section_07_Marketing_and_Sales_Strategy.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md) — Pass 2
run_date: 2026-07-24
auditor: independent Pass 2 review agent (separate invocation from the drafting session; no memory of
  drafting this section — treated as a fresh, skeptical read)
status: PASS WITH MINOR FIXES (1 defect found and fixed)
---

# Citation Audit — Section 7 (v2), Independent Pass 2

Companion to (does not replace) `vault/Validation/Citation_Audit_Section_07_v2.md` (Pass 1,
self-reviewed by the drafting session). This is the genuinely independent re-check required before
Section 7 can be marked ✅ Done, per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline.

## Method

Re-read the section fresh, line by line, against the actual current content of the underlying vault
files it cites, and against the primary TLB-xxx source pages it names. Files independently re-read for
this pass: `vault/Decisions/Decision_Log/DEC-009_investment-options-ranking-and-allocation-priority.md`,
`vault/Decisions/Investment_Options/OPT-002_talabat-pro-acceleration-egypt-iraq.md`,
`vault/Decisions/Investment_Options/OPT-003_food-leadership-cvp-partner-retention-gcc3.md`,
`vault/Knowledge/Strategic/Customer Retention Drivers.md`, `vault/Knowledge/Topics/Customer Journey.md`,
`vault/Knowledge/Topics/Promotions.md`, `vault/Knowledge/Topics/FinTech.md`,
`vault/Forecasts/Value_Driver_Tree_v2.md`, `vault/Decisions/Assumptions_Register.md`. Specific focus
areas, per this Pass 2's brief: (1) whether §7.5's characterization of `OPT-002`/`OPT-003` against
`DEC-009` matches DEC-009's actual **resolved Decision text**, not just its earlier descriptive tiering;
(2) the synthetic-funnel labeling discipline in §7.2 (every synthetic figure explicitly flagged, never
blended with real data); (3) the repo-wide "FY2024→Q1 2026" date-mislabeling defect, checked against the
multi-vertical GMV-share and CARC figures this section cites.

## Pass/Fail Table

| # | Claim (location) | Cited to | Independent re-check | Verdict |
|---|---|---|---|---|
| 1 | "Rather than matching competitor discounts and vouchers... invest in the CVP" (Answer, §7.1) | TLB-020, p.16 | Matches the same quote independently verified in Section 9's provenance and Section 2 | PASS |
| 2 | "Retain high and medium value customers against partial or complete churn" (§7.1) | TLB-002, p.14 | Matches `Strategic/Customer Retention Drivers.md`'s own citation | PASS |
| 3 | Non-high-value M1 retention -4% y/y (UAE, Kuwait, Qatar) (§7.1, §7.4) | TLB-019, p.9 | Matches OPT-003's own option record, page and figure identical | PASS |
| 4 | Brand narrative arc 2016→2021→2025 (§7.1) | TLB-016, p.7 | Not independently re-derivable from a page image in this pass, but matches `Topics/Customer Journey.md`'s own citation verbatim — internally consistent | PASS |
| 5 | CARC USD89mn(2023)→USD155mn(2025), 1.5%→1.6% of GMV; USD89mn 2025 vouchering (§7.1, §7.2) | TLB-001 p.28; TLB-002 p.21 | Matches Section 6 §6.4's independently-reverified figures exactly (cross-checked in this pass against `QA_Review_Section_06_v2_Pass2.md`'s companion citation audit) | PASS |
| 6 | Partner-funded savings 7% of GMV Q1 2026, all-time high; >AED1,567.7mn trailing 12mo (§7.2) | TLB-020 p.7; TLB-023 p.6 | Re-verified against `Topics/Promotions.md`; figures match | PASS |
| 7 | Customer journey Food→G&R→pro sign-up; ~6-order personalisation threshold (§7.2) | TLB-013 p.6; TLB-002 p.15 | Matches `Topics/Customer Journey.md` verbatim | PASS |
| 8 | Multi-vertical vs. food-only frequency (13.0 vs. 3.8/month, July 2024) (§7.2) | TLB-012 p.9; TLB-013 p.6 | Matches `Topics/Multi-Verticality.md` | PASS |
| 9 | Multi-vertical GMV share 68%→73%→76% (Dec'24→Dec'25→Mar'26) (§7.2) | TLB-019 p.7; TLB-020 p.8 | **Specifically checked for the repo-wide date-mislabeling defect** — this section already states the correct three-period label ("Dec'24→Dec'25→Mar'26"), not the collapsed/wrong pattern found elsewhere this session. No fix needed | PASS |
| 10 | Synthetic acquisition-funnel table (§7.2) | None — explicitly synthetic | Every cell in the "Illustrative conversion" column carries an inline **[SYNTHETIC — ...]** flag; the boxed disclosure above the table states plainly no real % is disclosed; the traceability table's own row for this claim is itself labeled "SYNTHETIC ... not an Approved Assumption; not cited elsewhere" — labeling discipline is intact, no synthetic figure reads as a real one anywhere in the section | PASS |
| 11 | talabat PostPaid GCC-only through CMD 2024; Egypt first non-GCC follow-on (§7.2) | TLB-015 pp.25,74,103; TLB-002 pp.14,19 | Matches `Topics/FinTech.md` verbatim | PASS |
| 12 | Partner commission-rate-investment language (§7.3) | TLB-020 p.16; TLB-014 p.19 | Matches `Topics/Food Leadership.md` | PASS |
| 13 | ADCB co-branded card (UAE); CIB co-branded card (Egypt) (§7.3) | TLB-001 pp.9,13; TLB-002 pp.14,19 | Matches `Topics/FinTech.md` | PASS |
| 14 | Partner-funded free-delivery economics shared by OPT-002/OPT-003 (§7.3) | TLB-026, p.134 | Matches OPT-002/OPT-003's own "Dependencies" sections | PASS |
| 15 | talabat pro uplift figures (20-28% frequency; 26-32% retention; 136% GP/customer) (§7.4) | TLB-001 p.18; TLB-015 pp.78,104; TLB-019 p.11 | Matches `Strategic/Customer Retention Drivers.md`'s own ranked-mechanism table exactly, including the explicit "excludes Egypt and Iraq" scoping | PASS |
| 16 | Mono- vs. multi-vertical M1 retention delta (+16pp/+20pp) (§7.4) | TLB-019, p.10 | Matches `Strategic/Customer Retention Drivers.md` | PASS |
| 17 | Rewards 18% adoption, >15% frequency uplift (§7.4) | TLB-026 p.134; TLB-015 p.79 | Matches | PASS |
| 18 | PostPaid 14% frequency increase (§7.4) | TLB-001, pp.9,18 | Matches | PASS |
| 19 | Family Plan >60% retention premium (§7.4) | TLB-018, p.6 | Matches `Value_Driver_Tree_v2.md` N-23's identical citation | PASS |
| 20 | AI/personalisation EBITDA contribution USD14mn+→30mn+ (§7.4) | TLB-001 p.23; TLB-002 p.15 | Matches Section 5's independently re-verified figure | PASS |
| 21 | `ASM-016` cited for Group/GCC+Jordan uplift applied to Egypt/non-GCC by inference (§7.4) | `Assumptions_Register.md` | Status independently confirmed `Approved` | PASS |
| 22 | §7.6 cross-section check vs. Section 6 (CARC, vouchers figures) | `Section_06...md` | Independently confirmed no contradiction — same figures, different framing (strategy input vs. cost line), as the section itself states | PASS |
| 23 | §7.6 cross-section check vs. `DEC-008` (no `ASM-018` 2.2:1 split shown) | `DEC-008` | Confirmed — no such figure appears anywhere in Section 7 | PASS |
| 24 | §7.6 cross-section check vs. `DEC-009`/`ASM-029`-`033` (no OPT-level dollar range reproduced) | `DEC-009` | Confirmed — no dollar range appears; only narrative references to `OPT-002`/`OPT-003` by name | PASS |
| 25 | §7.5: `OPT-002`/`OPT-003` positioning against `DEC-009` and each option's own record | `DEC-009`; `OPT-002...md`; `OPT-003...md` | **DEFECT FOUND (pre-fix).** The Pass-1 text described both options as "Tier 2/3" per `DEC-009`'s earlier, purely descriptive 11-criterion tiering (which separately places `OPT-002` in "Tier 3 — ...best suited to piloting rather than scale commitment" and `OPT-003` in "Tier 2 — strong, narrowly-scoped"), and characterized the pairing as one where both should "pilot before scaling." Independently re-read against `DEC-009`'s own **Decision** section (lines 156-158): "OPT-002 and OPT-003 as the near-term, low-risk/high-fit priority" — a joint, resolved placement that supersedes the earlier separate-tier language for sequencing purposes. Independently re-read against `OPT-003`'s own record: "**Not a pilot** — this is an already-evidenced, already-operating mechanism... Recommend a targeted budget weighting toward these three markets within the existing bucket." The Pass-1 text's "pilot before scaling" characterization therefore mischaracterized OPT-003 specifically. **Fixed** in this pass: §7.5 rewritten to cite `DEC-009`'s resolved Decision-section language (near-term priority pair) rather than the superseded tiering framing, and to state OPT-003 is funded directly (not piloted), matching the identical fix independently applied to `Section_12_Implementation_Plan.md` for the same underlying misreading | **FAIL → FIXED** |

## Geographic Evidence Rules check (independently re-run)

Clean. Every claim carries an explicit geography tag (Group, GCC+Jordan, country-specific for UAE/Egypt,
or market-comparison for UAE/Kuwait/Qatar). §7.1's "Caution — market applicability" and §7.4's "Caution —
geography" both correctly label the Group/GCC-to-Egypt extrapolation as `inferred-applicability`, citing
`ASM-016` by name. "MENA" is never used as a stand-in.

## Summary

- **25 items independently re-checked.**
- **24 pass on first read; 1 defect found (item 25) and fixed in this pass.**
- No wrong `Value_Driver_Tree_v2.md` node IDs (none cited in this section — it references OPT/DEC records
  by name, not tree nodes, correctly). No stale date-labeling defects found. No synthetic-data leakage
  into a real-data context.

## Verdict

**PASS WITH MINOR FIXES.** One real defect (item 25 — a synthesis/characterization error against a
governing Decision record, not a broken source citation) found and fixed, cross-verified directly against
`DEC-009`'s own Decision-section text and `OPT-003`'s own option record. Section 7 is ready for the same
"not yet reconfirmed by a fresh independent pass" treatment as Sections 4/5/9/12, per the established
frontmatter convention.

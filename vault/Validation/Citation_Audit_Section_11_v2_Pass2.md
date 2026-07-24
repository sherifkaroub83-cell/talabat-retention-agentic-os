---
type: validation
section: 11 (v2 — Group-wide capital-allocation draft) — INDEPENDENT PASS 2
target: vault/Projects/Business_Plan_Drafts_v2/Section_11_CSR_and_Responsible_AI.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md) — Pass 2
run_date: 2026-07-24
auditor: independent Pass 2 review, performed directly in the main session thread
status: PASS (0 defects found)
---

# Citation Audit — Section 11 (v2), Independent Pass 2

Companion to (does not replace) `vault/Validation/Citation_Audit_Section_11_v2.md` (Pass 1,
self-reviewed by the drafting session). This is the genuinely independent re-check required before
Section 11 can be marked ✅ Done, per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline.

## Method

Re-read the section fresh, with particular attention to whether it inherited any stale, pre-Pass-2-fix
content from the sections it draws on most heavily (`Section_08_Operations_Plan.md`, `Section_10_Risk_
Analysis.md`, `DEC-008`/`DEC-009`) — this is the exact failure mode independently found in three places
in `Section_14_Appendices.md`'s own Pass 2 review (stale node IDs, a stale "7 of 8 countries" figure, and
stale DEC-009 Tier 2/3 language), so this section was checked specifically for the same pattern.
Independently re-verified: the EV fleet, emissions, tips, and tcamp/SME-partnership figures directly
against `vault/Knowledge/Facts/_raw/TLB-002_facts.md` and the raw source text of TLB-001/TLB-026; the
`DEC-008`/`DEC-009` characterization word-for-word against the Decision Log entries themselves; the
`ORG-01`/`ORG-02`/`ORG-03`/`TECH-01` risk restatements against Section 10's current (Pass-2-cleared)
text.

## Pass/Fail Table

| # | Claim (location) | Cited to | Independent re-check | Verdict |
|---|---|---|---|---|
| 1 | `ORG-02` false-precision risk; `DEC-008`/`DEC-009` as the already-exercised controls (Control 1) | `Section_10_Risk_Analysis.md`; `DEC-008`; `DEC-009` | Independently re-verified `DEC-008`'s Option 1 restriction and `DEC-009`'s middle-path resolution word-for-word against the Decision Log entries — this section does not use the stale Tier 2/3 tiering language found and fixed elsewhere (Sections 7, 12, 14); it correctly describes only the general funding-sequence-commitment mechanism, not per-option Horizon placement, avoiding the trap those other sections fell into | PASS |
| 2 | `Geographic_Evidence_Rules.md`'s nine-tag system; the superseded `Value_Driver_Tree.md` GCC→Egypt conflation case study (Control 2) | `Geographic_Evidence_Rules.md` | Independently confirmed against `Geographic_Evidence_Rules.md`'s own documented history | PASS |
| 3 | `Problem_Charter.md`'s no-customer-level-data principle (Control 3) | `Problem_Charter.md` | Confirmed against `Problem_Charter.md`'s "Role of AI in this plan" section verbatim | PASS |
| 4 | December 2022 breach — 144,469 customers, USD150,000 penalty (Control 3) | TLB-026, p.49 | Matches the independently re-located citation already verified in Sections 8 and 10's own Pass 2 reviews | PASS |
| 5 | `TECH-01` — AI/ML non-GCC tuning status undisclosed; EBITDA contribution USD14mn+→30mn+ (Control 4) | `Topics/AI.md`; TLB-002, p.15 | Matches Section 10's independently-verified `TECH-01` figure exactly; this section does not cite a `Value_Driver_Tree_v2.md` node ID for this figure, correctly avoiding the N-06/N-09 mix-up defect found in Sections 4/5/14 | PASS |
| 6 | `ORG-01`, `ORG-03` restatements (Governance structures 1-2) | `Section_10_Risk_Analysis.md` §10.4, §10.8 | Independently re-checked word-for-word against Section 10's current (Pass-2-cleared) text — no risk ID, owner, or wording altered | PASS |
| 7 | Proposed Systems stage-gate mechanism (Governance structure 1) | `Section_08_Operations_Plan.md` §8.4 | Independently re-checked against Section 8's current text — matches, including the "this OS's own proposed mechanism, not talabat's actual process" labeling | PASS |
| 8 | Named executives as proposed Systems-function anchor (Governance structure 2) | `Entities/Executives.md`; `Section_08_Operations_Plan.md` §8.3 | Matches Section 8's independently-verified executive roster | PASS |
| 9 | EV fleet — UAE 240 (Jan 2026), Egypt 200 (end 2025, Cairo, scaling planned 2026); Jordan/Oman pilots (§11.2) | TLB-002, pages 42-44 | Independently re-located in `Facts/_raw/TLB-002_facts.md` line 155: "EV fleet: UAE 240 electric vehicles (Jan 2026); Egypt 200 electric vehicles (end 2025, deployed..." — exact match | PASS |
| 10 | Group 2025 emissions 875,157 tCO2e (Scope 1: 8,177; Scope 2: 8,847; Scope 3: 858,132); delivery vehicles ~43% (§11.2) | TLB-002, pages 41-42 | Independently re-located in `Facts/_raw/TLB-002_facts.md` line 159: exact match on all four figures | PASS |
| 11 | Riders kept 100% of USD21.5mn+ tips (2025) (§11.2) | TLB-002, pages 33, 35 | Independently re-located in `Facts/_raw/TLB-002_facts.md` line 160: "Riders earned over USD 21.5 million in tips in 2025, keeping 100% of tips" — exact match | PASS |
| 12 | 78,000+ riders trained via tcamp, Egypt/UAE/Bahrain/Kuwait/Oman (§11.2) | TLB-026, pages 138, 144 | Independently re-located in the raw TLB-026 source text (line ~9813-9814): "78,000 riders being trained on 'tcamp'... in Egypt, the UAE, Bahrain, Kuwait and Oman" — exact match | PASS |
| 13 | Egypt SME academy with German Chamber of Commerce, MSMEDA partnership, Khalifa Fund (UAE), Egypt Food Bank/Misr El Kheir (§11.2) | TLB-001, pages 46, 55 | Independently re-located in the raw `20250404_Talabat-Annual-Report-2024-En.txt` source text (lines ~3471, 3486, 3490, 4110) — all four named partnerships confirmed present verbatim | PASS |
| 14 | No disclosed linkage between sustainability programmes and the USD175mn 2026 programme (§11.2) | `Investment_Portfolio_Register.md` | Confirmed by independent re-read — no such linkage appears anywhere in the corpus | PASS |
| 15 | §11.5 cross-section check vs. Section 10/Section 8 | `Section_10...md`; `Section_08...md` | Independently confirmed no risk ID, owner, or citation restated differently | PASS |
| 16 | §11.5 cross-section check vs. `DEC-008`/`DEC-009` (no `ASM-018`/`ASM-029`-`033` figures shown) | `DEC-008`; `DEC-009` | Confirmed — no dollar figure or 2.2:1 split appears anywhere in this section | PASS |

## Geographic Evidence Rules check (independently re-run)

Clean. Every claim carries an explicit geography tag (Group for the governance controls, country-specific
and market-comparison for the sustainability initiatives). No Group figure presented as Egypt-specific or
vice versa; no "MENA" usage.

## Summary

- **16 items independently re-checked**, with specific attention to whether this section inherited any of
  the stale pre-Pass-2-fix content found in three other sections (`Section_14_Appendices.md`'s own Pass 2
  review, run alongside this one, found exactly this failure mode there) — it did not.
- **16 pass, 0 defects found.**

## Verdict

**PASS (0 defects found), independently verified 2026-07-24.** This citation audit is now genuinely
independent of the drafting session and confirms the Pass 1 self-review's conclusions hold. No further
citation-level fix is required for Section 11.

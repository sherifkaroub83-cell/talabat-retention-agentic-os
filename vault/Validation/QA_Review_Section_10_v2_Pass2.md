---
report: QA Review — Section 10 (Risk Analysis), Pass 2 (independent)
section: 10
run_date: 2026-07-24
reviewer: independent Pass 2 review, performed directly in the main session thread
source_file: vault/Projects/Business_Plan_Drafts_v2/Section_10_Risk_Analysis.md
verdict: PASS
---

# QA Review — Section 10 (Risk Analysis) — Pass 2 (independent)

## 1. Template completeness (`AI_Business_Plan_Template.md` §10)

Required: MECE risk categories (technical/market/financial/organizational/regulatory);
probability-impact matrix; pre-mortem; mitigation per risk with an owner.

| Required item | Present? |
|---|---|
| MECE risk categories | Yes — 5 categories (§10.1-10.5), 17 risks, explicit MECE-by-proximate-cause statement |
| Probability-impact matrix | Yes — `## 10.6`, all 17 risks placed, priority quadrant named |
| Pre-mortem | Yes — `## 10.7`, 5 named failure narratives tied to specific risk IDs |
| Mitigation per risk with owner | Yes — `## 10.8`, full 17-row table, every owner drawn from the disclosed executive roster or explicitly named as an interim/proposed function |

**Template completeness: PASS.**

## 2. McKinsey Lens

- **Pyramid Principle:** "Answer, stated first" leads with the three-risk priority-quadrant conclusion
  (ORG-01, FIN-01, MKT-01) before the full 17-risk detail. Pass.
- **MECE:** §10.1's explicit "MECE by proximate cause" statement, with secondary effects cross-referenced
  inline rather than double-counted, is a genuine MECE justification — independently checked against the
  17-risk list and found consistent (no risk assigned to two categories, no double-counted matrix cell).
  Pass.
- **Hypothesis-driven:** the pre-mortem's finding ("four of five failure narratives trace to `ORG-01`")
  is a falsifiable, specific claim, independently checked against the five narratives and found accurate
  (narratives 1, 2, 3, and 4 all name `ORG-01` or a mechanism `ORG-01` would have prevented; narrative 5
  does not). Pass.
- **Value-driver traceability:** `ORG-02` is explicitly tied to `DEC-008`/`DEC-009`'s own escalation
  rationale rather than invented as a generic risk — a genuine, specific connection. Pass.

## 3. Citation audit consumption

`vault/Validation/Citation_Audit_Section_10_v2_Pass2.md` (this Pass 2 run): **PASS**, 26/26 items,
0 defects. No open finding to block approval.

## 4. Staleness check

All cited Decision/Assumption/Forecast records (`DEC-008`, `DEC-009`, `KPI_Tree_v2.md` Governance
family, `Scenarios_v2.md`) last updated 2026-07-23/24, within this drafting cycle. No `vault/Research/
Notes/` items cited (none apply).

## 5. Anti-patterns (`business-plan-drafting/SKILL.md`)

- ❌ "Generic risk-register placeholder without a specific mitigation or owner" — not present; every one
  of the 17 risks carries a specific, evidence-grounded mitigation and a named or explicitly-flagged
  interim owner. Pass.
- ❌ Wrong `Value_Driver_Tree_v2.md` node IDs — not applicable; this section does not cite tree nodes.
  Pass.
- ❌ "MENA" used as a geographic stand-in — not present. Pass.
- ❌ Force-merging two genuinely different comparators into one number — the opposite is true: §10.3
  (FIN-01) explicitly states both the year-on-year (`Problem_Charter.md`, 6.3%→4.8%) and
  quarter-on-quarter (this section, 6.0%→4.8%) framings of the same Q1 2026 print, correctly distinguished
  rather than merged — independently re-verified both hold against TLB-020. Pass.
- ❌ Showing `ASM-029`–`033` dollar ranges or the `ASM-018` 2.2:1 split — not present anywhere in this
  section. Pass.

## 6. Problem Consistency Gate

Section 10 assesses risk to the Group-wide USD175mn capital-allocation programme, not an Egypt-retention
framing. Egypt appears only as a named example within specific risks (FIN-02's FX exposure, FIN-04's
non-GCC inference), never as the plan's boundary. `DEC-007` (pre-pivot) is correctly not cited here
(Section 13 cites it, correctly labeled as pre-pivot precedent). **PASS.**

## 7. Financial Integrity Gate

No unit mixing (percentage-point vs. percentage distinctions are correctly maintained throughout,
including the FIN-01 y/y figures independently re-verified against TLB-020). No unlabeled false
precision. `DEC-008`/`DEC-009` constraints respected — no dollar range or 2.2:1 split shown; `ORG-02`'s
description of the disclosure-sentence rule matches `DEC-009`'s actual text. **PASS.**

## 8. Geographic Evidence Gate

Every risk geography-tagged correctly; `inferred-applicability` extensions explicitly labeled inline
(TECH-01, MKT-01, FIN-04). No non-GCC pre/post-2025 mixing (FIN-04's 1.28x/0.13x figure is correctly
stated as 2023-basis, not implied current). No "MENA" stand-in usage. **PASS.**

## Verdict

**PASS.** Section 10 requires no further fix. Independently confirmed **Done (independently verified)**.
No action required before Stage 17's whole-plan re-confirmation beyond what that stage runs for every
section as a matter of course.

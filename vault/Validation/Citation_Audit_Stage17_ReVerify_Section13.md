---
type: validation
section: 13
pipeline_stage: "Stage 17 fix re-verification"
run_date: 2026-07-25
auditor: evidence-citation-agent
status: FAIL (filename instability recurring — content itself passes)
---

# Citation Audit — Stage 17 Re-verification, Section 13 (Monitoring and Evaluation)

## 1. Filename stability check (primary check)

**FAIL.** Glob of `vault/Projects/Business_Plan_Drafts_v2/` for `Section_13*` returns exactly one
match: `Section_13_Monitoring_and_Evaluation 2.md`. The canonical filename
`Section_13_Monitoring_and_Evaluation.md` does **not** exist — `Read` on that exact path errors
"File does not exist." This matches the git status snapshot at session start (`D` on the canonical
path, `??` on the ` 2.md` duplicate). The iCloud sync artifact has recurred: the file is currently
filed under the wrong name, and every wikilink in the vault pointing to
`[[Section_13_Monitoring_and_Evaluation]]` is currently broken. This is not a content defect but it
blocks stage 10/17 progression on its own and must be fixed (rename ` 2.md` back to the canonical
name) before this section can be considered stable.

## 2. Content fixes (checked inside the ` 2.md` file, since that's where the content lives)

All three Pass-2 fixes hold:
- **Review Cadence section**: present (lines 64-74), not missing.
- **KPI baseline time periods**: talabat pro GMV share carries "32%→49%, Q1 2025→Q1 2026"; multi-vertical
  GMV share carries "68%→73%→76%, Dec'24→Dec'25→Mar'26." Both specific and dated.
- **Churn-scope claim**: reads "for talabat overall (Group) or for Egypt specifically
  (`Topics/Customer Churn.md`) — the only country the corpus addresses this question for at all" —
  correctly scoped, not a blanket "no country" claim.
- **Frontmatter**: `status` line includes a 2026-07-25 "Repository incident" note describing the file
  being found deleted, restored, and re-audited — present as expected.

## 3. Propagated fixes in Sections 1 and 14

- **Section_01_Executive_Summary.md** (lines 189-191): "no churn rate, definition, or baseline exists
  anywhere in the corpus, at Group level or for Egypt specifically — the only country the corpus
  addresses this question for at all." Matches Section 13's own wording. PASS.
- **Section_14_Appendices.md** (traceability table, row 219): "No churn rate, definition, or cohort
  analysis exists anywhere in the corpus, at Group level or for Egypt specifically (the only country
  the corpus addresses this question for)." Matches. PASS.

## 4. Fresh full citation trace, Section 13 numeric/named-fact claims

| Claim | Section 13 location | Traces to | Verdict |
|---|---|---|---|
| 50 KPIs, 5 families, 30 baseline-exists/20 newly-instrumented | KPI table intro | `KPI_Tree_v2.md` (P:8/4/4, C:12/9/3, F:14/11/3, O:9/6/3, G:7/0/7 — sums to 50/30/20) | PASS |
| Governance family: 7 KPIs, 0 baseline | KPI table | `KPI_Tree_v2.md` §5 Governance, `Topics/Capital Allocation and Investment Governance.md` | PASS |
| talabat pro GMV share 32%→49%, Q1 2025→Q1 2026 | KPI table (C&G row) | `KPI_Tree_v2.md` C1: TLB-020 p.8, "~32% (Q1 2025) → ~49% (Q1 2026)" | PASS |
| Multi-vertical GMV share 68%→73%→76%, Dec'24→Dec'25→Mar'26 | KPI table (C&G row) | `KPI_Tree_v2.md` C3: TLB-019 p.7, TLB-020 p.8 | PASS |
| Dark-store count 130→160 stores | KPI table (Operational row) | `KPI_Tree_v2.md` O1: TLB-002 p.12, p.14, "130 (end-2024) → 160 (2025)" | PASS |
| Adj. EBITDA margin baseline = guided range | KPI table (Financial row) | `KPI_Tree_v2.md` F9: FY2025 6.5%, FY2026 guided 4.4-4.8% | PASS |
| No churn baseline anywhere in corpus, Group or Egypt-specific | Churn section | `Topics/Customer Churn.md` | PASS (scope corrected, see §2/3 above) |
| GCC+Jordan cohort uplift range 20-28%/26-32% | Kill/Pivot Criteria | `KPI_Tree_v2.md` C5 (20-28%, TLB-001/TLB-015/TLB-019) and C6 (+26-32%, TLB-015/TLB-019) | PASS |
| `ASM-016` (pro-adoption inference for H1 pilot) | Kill/Pivot Criteria | `vault/Decisions/Assumptions_Register.md` — confirmed present | PASS |
| `OPT-002` (H1 pilot) | Kill/Pivot Criteria | `vault/Decisions/Investment_Options/OPT-002_talabat-pro-acceleration-egypt-iraq.md` — confirmed present | PASS |
| `DEC-007` (pre-pivot precedent) | Kill/Pivot Criteria, Traceability table | `vault/Decisions/Decision_Log/DEC-007_section13-review-cadence-kill-criteria.md` — confirmed present | PASS |
| `DEC-008` (Section 13 KPI-framing scope) | Pipeline provenance note | `vault/Decisions/Decision_Log/DEC-008_section9-headline-bucket-split-presentation.md` — confirmed present, scope extension asserted in Section 13's own text (unverifiable against DEC-008's own text in this pass, but the record exists) | PASS (record exists; scope-extension claim not independently re-checked against DEC-008 body this pass) |
| `ASM-017` (programme-attributable incremental GMV, illustrative) | KPI table (Financial row) | `vault/Decisions/Assumptions_Register.md` — confirmed present | PASS |
| No talabat internal tracking-tool/feedback-loop disclosure | Tracking Tools section | Vault-based architecture description (self-referential to `Decision_Management_Layer.md`, `Assumptions_Register.md`, `Investment_Options_Register.md`) — not a numeric claim, no external citation needed | PASS |

No untraceable numeric or named-fact claims found in Section 13's own body text.

## Overall verdict

Content-wise, Section 13's three Pass-2 fixes and both propagated fixes in Sections 1 and 14 hold
and are citation-clean. However, the section fails this audit at the file-stability gate: it is not
currently present under its canonical filename, which breaks internal wikilinks and blocks stage 10
progression until the rename is corrected. **Status: FAIL — filename instability, not content.**

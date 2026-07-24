---
report: Citation Audit — Section 12 (Implementation Plan), Pass 2 (independent)
section: 12
run_date: 2026-07-24
reviewer: qa-review-agent (independent Pass 2 — no memory of drafting)
source_file: vault/Projects/Business_Plan_Drafts_v2/Section_12_Implementation_Plan.md
verdict: FAIL
---

# Citation Audit — Section 12 (Implementation Plan) — Pass 2

Every numeric/named-fact claim in the drafted section was walked sentence-by-sentence and its
citation chain re-derived from scratch (source files opened and read, not assumed).

| # | Claim (as drafted) | Cited to | Verified against | Result |
|---|---|---|---|---|
| 1 | "DEC-009's funding-sequence question is unresolved" (provenance note) | `DEC-009` | `DEC-009` frontmatter: `status: approved`, `resolved_date: "2026-07-23"`; its own "Decision" section states "Resolved 2026-07-23... Funding sequence: YES, commit to one." | **FAIL — factually false.** DEC-009 is resolved/approved. This sentence directly contradicts the record it cites. |
| 2 | DEC-009 places OPT-001/OPT-005 in Tier 1, OPT-003 in Tier 2, OPT-002/OPT-004 in Tier 3 | `DEC-009` | DEC-009 "Tiering" sub-section (draft-stage descriptive grouping) — text matches | Pass (citation accurate to that sub-section), **but see #6 below** — this is not the sub-section that governs the section's own sequencing decision |
| 3 | "per DEC-009's own finding, OPT-002 is specifically the cheapest, most reversible, and best-suited to genuine piloting" | `DEC-009` | DEC-009 "Options considered — written comparison": "the strongest candidate specifically *for piloting*... cheap and fast to test, cheap and fast to stop" | Pass |
| 4 | H1: OPT-001 (dark-store densification) and OPT-005 (AI/personalisation) continue at pace, no new decision | `DEC-009`; implicitly `KPI_Tree_v2.md` | DEC-009 Decision: "OPT-001 and OPT-005 continue-at-pace"; OPT-001/OPT-005 records both describe themselves as "already-scaling, already-funded" / "already yielding disclosed results" | Pass |
| 5 | H1: OPT-002 (Egypt/Iraq pro) is the pilot; evidence is Low confidence, inference not proven Egypt/Iraq effect | `ASM-016` | `Assumptions_Register.md` ASM-016: "Low" confidence, `Approved`, "extended... by inference... no Egypt- or non-GCC-specific figure disclosed" | Pass |
| 6 | H1: OPT-003 (Food-leadership UAE/Kuwait/Qatar) — "Monitor, do not yet fund a change"; H2: incremental spend "beyond what's already committed" only raised if trend doesn't stabilize | `DEC-009` (via Section 12's own "tiering" framing) | DEC-009's **Decision** section (the resolved, approved text, not the earlier draft-stage Tiering paragraph): "OPT-002 **and OPT-003** as the near-term, low-risk/high-fit priority." Also `Investment_Options_Register.md` line 47-49: "the tiering (OPT-002/OPT-003 near-term priority, OPT-001/OPT-005 continue-at-pace, OPT-004 longer-horizon) is now the plan's citable recommended funding sequence." Also `.claude/skills/business-plan-drafting/SKILL.md` Section 12 entry: "H1/H2/H3 placement of OPT-001–005 should follow DEC-009's tiering (**OPT-002/OPT-003 as near-term H1 priority**...)." Also OPT-003's own record: "Not a pilot — this is an already-evidenced, already-operating mechanism... Recommend a targeted budget weighting toward these three markets **within the existing bucket**" (i.e., a near-term action, not a deferred H2-gated one, and not "incremental spend beyond" the ~55mn bucket). | **FAIL.** Four independent, mutually consistent sources (DEC-009's own approved Decision text, the Investment Options Register, the drafting skill's explicit Section 12 instruction, and OPT-003's own record) all establish OPT-003 as a near-term (H1) priority equal in standing to OPT-002. Section 12 instead demotes it to monitor-only in H1 and defers any funding action to a contingent H2 decision — a misrepresentation of the very decision it cites as its basis. |
| 7 | H1: "-4% y/y non-high-value M1 retention... is real and current" | TLB-019, page 9 | `TLB-019_q4-fy25-results-presentation.md`: "Q4'25 y/y M1 retention change by segment (competitive markets): high-value +6%, non-high-value -4%, new ~0% (p.9)"; "competitive markets" explicitly = UAE, Kuwait, Qatar (p.9, same source) | Pass — figure, page, and geography (UAE/Kuwait/Qatar, correctly not "GCC" or "MENA") all verified |
| 8 | H1: "the already-disclosed ~USD55mn bucket" | implied, `Investment_Portfolio_Register.md` | Confirmed: Food-leadership ~USD55mn (TLB-020 p.16) | Pass |
| 9 | H2: OPT-002 go/no-go gated on GCC+Jordan cohort's "20-28%/26-32%" range | `ASM-016` | ASM-016: "20-28% order-frequency uplift; 26-32% retention uplift" applied by inference; underlying figures also appear in `KPI_Tree_v2.md` C5/C6 | Pass |
| 10 | H2: OPT-004 begins, "the ~7%-of-GMV UAE benchmark is a multi-period target" | Not cited inline in Section 12; absent from Section 12's own traceability table | `OPT-004_advertising-monetization-gap-closure.md`: "UAE talabat mart specifically has already reached a ~7% of GMV medium-term advertising benchmark" (TLB-001 p.21; TLB-002 p.10) | **Minor finding.** The figure is real and traceable, but only via a document Section 12 doesn't cite in-line or in its own traceability table — a citation-completeness gap, not a fabrication. Fix: add an inline citation (or a traceability-table row) pointing to `OPT-004`/TLB-001 p.21/TLB-002 p.10. |
| 11 | "Dependencies and Timelines": "the KPI Tree's Governance family... none of which currently has a baseline" | `KPI_Tree_v2.md` | KPI_Tree_v2.md Governance family: "0 baseline-exists, 7 newly-instrumented" | Pass |
| 12 | "the same one flagged in Section 2.2: no market-level allocation logic is disclosed anywhere in the corpus" | `Capital Allocation and Investment Governance.md` | Topic note: "No document in the corpus describes an internal capital-allocation committee... or how a specific initiative... moves from proposal to funded line item"; cross-check against `Section_02_Business_Description.md` §2.2 problem 3 ("Cross-market allocation... the largest disclosed gap") | Pass — citation and cross-section reference both verified accurate |
| 13 | Traceability table: "OPT-002 cheapest, most reversible \| DEC-009" | `DEC-009` | Verified (see #3) | Pass |

## Ancillary finding (not a Section 12 defect, flagged for repo-wide awareness)

`OPT-002_talabat-pro-acceleration-egypt-iraq.md` (lines 12, 23) still states the talabat pro
32%→49% GMV-share figure as **"FY2024 → Q1 2026"** — the exact mislabeling pattern already found and
fixed elsewhere in the repo (correct label, per `TLB-020 p.8` and confirmed in `KPI_Tree_v2.md` C1
and `ASM-021`, is **"Q1 2025 → Q1 2026"**). Section 12 does not itself restate this figure, so this
does not fail Section 12's own citation audit, but the underlying evidence record it cites (via
`DEC-009`/`Investment_Options_Register.md`) still carries the stale label — the repo-wide fix was not
actually applied "everywhere." Recommend a targeted fix to `OPT-002`'s Rationale/Evidence sections.

## Verdict

**FAIL.** One claim (#1) is factually false on its face (states DEC-009 is unresolved when it is
approved). One claim-cluster (#6) materially misrepresents DEC-009's own approved funding sequence
for OPT-003, contradicted by four independent sources including DEC-009 itself. These must be fixed
before this section can be re-submitted for QA sign-off. Finding #10 is minor and should be fixed
alongside the above but would not independently fail the audit.

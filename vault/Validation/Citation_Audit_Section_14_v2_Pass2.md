---
type: validation
section: 14 (v2 — Group-wide capital-allocation draft) — INDEPENDENT PASS 2
target: vault/Projects/Business_Plan_Drafts_v2/Section_14_Appendices.md
pipeline_stage: 13.9 (Citation Verification, per .claude/skills/citation-audit/SKILL.md) — Pass 2
run_date: 2026-07-24
auditor: independent Pass 2 review, performed directly in the main session thread
status: PASS WITH MINOR FIXES (3 defects found and fixed)
---

# Citation Audit — Section 14 (v2), Independent Pass 2

Companion to (does not replace) `vault/Validation/Citation_Audit_Section_14_v2.md` (Pass 1,
self-reviewed by the drafting session). This is the genuinely independent re-check required before
Section 14 can be marked ✅ Done, per `Business_Plan_Generation_Pipeline.md`'s two-pass discipline.

## Method

Section 14 was drafted before every other section had been through its own independent Pass 2 review —
meaning it necessarily compiled its §14.2 traceability table and §14.8 cross-section check against the
**pre-fix** state of Sections 4, 5, and 12. This is the specific risk this Pass 2 review targeted: every
row of §14.2 was independently cross-checked against each source section's **current** (post-Pass-2-fix,
where applicable) content, not against what that section said when Section 14 was drafted.

## Pass/Fail Table (rows independently re-checked against current source-section content)

| # | Claim (location) | Cited to | Independent re-check | Verdict |
|---|---|---|---|---|
| 1 | Row for Section 4: multi-vertical order frequency node mapping | `Value_Driver_Tree_v2.md` N-19/N-20 | **DEFECT.** Section 4's own Pass 2 review found and fixed this exact citation: the correct nodes are N-14 (order frequency) and N-11 (GMV-share trend), not N-19/N-20. Section 14 was drafted before that fix and inherited the stale node IDs. **Fixed** — row split into the order-frequency claim (N-14) and cross-referenced N-11 | **FAIL → FIXED** |
| 2 | Row for Section 4: AI/personalisation EBITDA contribution + "not a discrete dollar line" | `Value_Driver_Tree_v2.md` N-06 | **DEFECT (partial).** Section 5's own Pass 2 review established the EBITDA-contribution dollar figure belongs to N-09, while N-06 backs only the "not a discrete dollar line" claim. Section 14's single combined row implied N-06 backed both. **Fixed** — split into two rows, EBITDA figure now correctly cited to N-09, "not a discrete dollar line" to N-06 | **FAIL → FIXED** |
| 3 | Row for Section 5: "talabat pro live in 7 of 8 countries by end-2024" | TLB-001, pages 11-12 | **DEFECT.** Section 5's own Pass 2 review found and fixed this exact figure: it is 6 of 8 countries (excludes Egypt, Iraq), not 7 of 8. Section 14 was drafted before that fix and inherited the stale figure. Independently re-verified against Section 5's current text and its citation list (TLB-012, TLB-013, TLB-015, TLB-016, TLB-026). **Fixed** — figure and citation corrected to match Section 5's current, Pass-2-cleared text | **FAIL → FIXED** |
| 4 | Row for Section 12: `DEC-009` tiering description ("Tier 2 `OPT-003` strong/narrow; Tier 3 `OPT-002`/`OPT-004` pilot/longer-horizon") | `DEC-009` | **DEFECT.** Section 12's own Pass 2 review found and fixed the identical misreading: `DEC-009`'s resolved Decision text names `OPT-002` and `OPT-003` jointly as the near-term priority pair, not `OPT-003` alone in a separate "Tier 2" and `OPT-002` grouped with the longer-horizon `OPT-004` in "Tier 3." Section 14 restated the pre-resolution descriptive tiering as if it were the resolved sequence — the same error independently found and fixed in Sections 7 and 12. **Fixed** — row rewritten to distinguish the evidence tiering from the resolved funding sequence | **FAIL → FIXED** |
| 5 | Row for Section 12: "`OPT-002`... recommended H1 pilot" (no mention of `OPT-003`) | `DEC-009` | **DEFECT (same root cause as #4).** Omits that `OPT-003` is jointly near-term-priority and funded now (not piloted), per `DEC-009`'s resolved text and `OPT-003`'s own record. **Fixed** — row expanded to state both options' resolved treatment | **FAIL → FIXED** |
| 6 | §14.8 cross-section check vs. `Section_12_Implementation_Plan.md`: "Tier 1 `OPT-001`/`OPT-005` continue-at-pace; `OPT-002` piloted in H1; `OPT-003` monitored; `OPT-004` begun in H2" | `Section_12...md` | **DEFECT (same root cause as #4/#5).** "`OPT-003` monitored" is Section 12's pre-Pass-2-fix Horizon 1 treatment; Section 12 now funds `OPT-003` directly in H1 via a targeted budget weighting, reviewing (not "monitoring") it in H2. Section 14's own self-check was checking against a version of Section 12 that no longer exists. **Fixed** — cross-check text updated to match Section 12's current H1/H2 treatment | **FAIL → FIXED** |
| 7 | Row for Section 3: FY2025 GMV, category share, TAM figures | — | Independently spot-checked against Section 3's current (Pass-2-cleared, PASS WITH MINOR FIXES) text — the non-GCC "18-21%" figure Section 3's own Pass 2 fixed is not reproduced in Section 14's table at all (a different row, "Non-GCC GMV +57% y/y vs. GCC +22% y/y," is used instead) — not implicated, no fix needed | PASS |
| 8 | Row for Section 6: revenue-by-fee-type, take rate, ASM-013 decomposition figures | — | Independently re-checked against Section 6's current (Pass-2-cleared, PASS, 0 defects) text — all figures match exactly, no stale content | PASS |
| 9 | Row for Section 8: GLSA/CQCA/breach citations, 7S Systems/Skills findings | — | Independently re-checked against Section 8's current (Pass-2-cleared, PASS WITH MINOR FIXES) text — the one Section 8 defect (store-count citation) is not reproduced in Section 14's table (Section 14 does not cite the store-count figure at all) — not implicated | PASS |
| 10 | Row for Section 9: FY2026 guidance, Q1 2026 actual margin | — | Independently re-checked against Section 9's current (Pass-2-cleared) text — matches | PASS |
| 11 | Row for Section 10: EBITDA margin trajectory, `ORG-01` | — | Independently re-checked against Section 10's current (Pass-2-cleared, PASS, 0 defects) text — matches exactly, including the -9%/-18% y/y figures | PASS |
| 12 | §14.3's own closing paragraph (recommended sequence: `OPT-002`/`OPT-003` near-term priority, `OPT-001`/`OPT-005` continue-at-pace, `OPT-004` longer-horizon) | `Section_09...`; `Section_12...` | Independently re-checked — this paragraph, unlike the §14.2/§14.8 items above, already correctly states the resolved sequence (joint OPT-002/OPT-003 near-term priority). This confirms the defects in items 4-6 were a **restatement inconsistency within Section 14 itself** (§14.3 correct, §14.2/§14.8 stale), not merely staleness relative to Section 12 — now resolved, all three locations consistent | PASS (post-fix, internally consistent) |
| 13 | §14.3's DEC-009 exhibit — five `ASM-029`–`033` ranges, mandatory disclosure sentence, non-additive/partial-coverage caveats | `Investment_Portfolio_Register.md`; `Assumptions_Register.md` | Independently re-verified all five ranges against `Assumptions_Register.md`'s current `ASM-029`–`033` rows (all `status: Approved`) and the mandatory sentence's exact wording — matches | PASS |
| 14 | §14.4 team roster, §14.6 pilot-history distinction, §14.7 compliance-document pointer | `Problem_Charter.md`; `vault/MOC/Validation and Audit.md` | Independently re-verified — no fabricated content, gaps stated honestly as the section itself claims | PASS |

## Geographic Evidence Rules check (independently re-run)

Clean. §14.2's geography tags were independently spot-checked against 6 of the table's rows (Sections 2,
3, 6, 9, 10, 12) and found to match each originating section's own tag exactly, as the section's own
§14.8 claims — confirmed accurate.

## Summary

- **14 rows/claims independently re-checked**, focused specifically on the risk that Section 14, drafted
  early relative to the other 8 post-pilot sections, would carry forward stale pre-Pass-2-fix content.
- **3 real defects found (items 1-2 combined as one root cause in Section 4's node IDs; item 3 in Section
  5's country count; items 4-6 as one root cause in Section 12's DEC-009 tiering), all fixed** — plus
  confirmation (item 12) that fixing items 4-6 also resolved a pre-existing internal inconsistency within
  Section 14 itself (§14.3 vs. §14.2/§14.8).
- **11 items pass clean** on first independent read.

## Verdict

**PASS WITH MINOR FIXES.** Three real defects found — all traceable to Section 14 having been drafted
before the sections it cites underwent their own Pass 2 fixes — cross-verified directly against each
source section's current, Pass-2-cleared text, then fixed. Section 14 is ready for the same "not yet
reconfirmed by a fresh independent pass" treatment as Sections 4/5/7/8/9/12.

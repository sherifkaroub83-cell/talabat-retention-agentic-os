---
type: validation
sections: 7-8
pipeline_stage: "17 (whole-plan citation audit)"
run_date: 2026-07-25
auditor: independent Stage 17 reviewer
status: Section 7 PASS (no hard failures); Section 8 PASS WITH ONE HARD FAILURE (stale cross-section reference in §8.1/§8.6, not a numeric-citation failure)
---

# Stage 17 Whole-Plan Citation Audit — Sections 7 (Marketing and Sales Strategy) and 8 (Operations Plan)

## Method

Read the current text of `Section_07_Marketing_and_Sales_Strategy.md` and `Section_08_Operations_Plan.md`
in full, fresh (not trusting the Pass 2/Pass 3 reports' conclusions). Performed two passes:

1. **Full citation trace** — every numeric/named-fact claim in both sections checked against the
   actually-cited source: primary-source raw text
   (`vault/Knowledge/_source_text/Talabat-Holding-plc_International-Offering-Memorandum.txt`, page
   markers), `vault/Knowledge/Facts/`, `vault/Decisions/Assumptions_Register.md`,
   `vault/Decisions/Decision_Log/DEC-009...md`, `vault/Decisions/Investment_Options/OPT-003...md`, and
   `vault/Architecture/Geographic_Evidence_Rules.md`.
2. **Cross-section reference check** — every place either section describes or relies on another
   section's content was traced to that section's CURRENT drafted text: Sections 2, 4, 5, 6, 10, 11, 12
   were opened and read in full for this purpose.

## Hard failures

**H1 — Section 8, §8.1 and §8.6: false/stale claim about what Section 5 §5.4 contains.**
§8.1 states: *"talabat processes over 235 terabytes of data daily... (Group; TLB-002, page 15) — already
established in Section 5.4 and not repeated in full here."* §8.6's cross-section check repeats this,
describing "235TB/day data infrastructure" as one of the findings "consistent with... Section 5's
build/buy/partner analysis."

Section 5 §5.4 ("Infrastructure and Tools"), read in full, does **not** contain the 235TB/day figure
anywhere — `grep` for "235" across all of `Business_Plan_Drafts_v2/` returns only Section 8 and Section
14. Section 5 §5.4's actual text says the opposite of what §8.1 claims it says: *"talabat's own
infrastructure is not itemized in the corpus beyond the Delivery Hero licensing relationship."* This is
exactly the defect class Stage 17 exists to catch — a claim about another section's current content that
does not match that section's actual text.

This is not a numeric-citation failure in the strict sense: the 235TB/day figure itself is correctly and
directly sourced to TLB-002, page 15, both times it appears in Section 8. The defect is narrower but real:
the parenthetical "already established in Section 5.4 and not repeated in full here" is false and should
be removed or corrected (either cite TLB-002 p.15 as the sole source without the Section-5 pointer, or add
the figure to Section 5 §5.4 if the intent was for Section 5 to carry it). Flagged back to the Orchestrator
for redrafting per this agent's standing instruction not to silently fix findings.

## Moderate findings

**M1 — Section 7's provenance note overstates ASM-024's actual use in the section body.**
Lines 47-50 (provenance note) state that `ASM-024` (Rewards/PostPaid uplift figures assumed to hold
through FY2026, `status: Approved`) "are cited as-is" in this section. In the actual body (§7.4) and the
traceability table, the Rewards (+15% frequency, 30 days) and PostPaid (14% frequency) uplift figures are
cited directly to disclosed historical facts (TLB-026 p.134, TLB-015 p.79, TLB-001 pp.9,18) — `ASM-024`
(a forward-looking FY2026-continuation assumption) does not appear anywhere in the section's body or its
traceability table. Not a citation-trace failure (no claim relies on the uncited assumption; the figures
that are cited are correctly sourced), but the provenance note's claim about what the section does is
inaccurate and should be corrected.

**M2 — `Assumptions_Register.md`'s `ASM-016` row omits Section 7 from "Used in (BP sections)."**
The register (line 51) lists `ASM-016`'s "Used in" cell as "Section 4, 9, 12, 13" — Section 7 is not
listed, despite Section 7 citing `ASM-016` explicitly, twice: in §7.4's body text ("applied to Egypt or
non-GCC generally only as a labeled inference (`ASM-016`, `status: Approved`...)") and in its
traceability table. This is a register-maintenance gap, not a defect in Section 7's own citation (the
citation itself is correct and the row status is genuinely `Approved`) — flagged for the register to be
updated to reflect Section 7's actual usage.

**M3 — Section 8 §8.4's Strategy row citation is ambiguous but not incorrect.**
The 7S table's Strategy row attributes "The Everyday App (~USD120mn) / Food-leadership (~USD55mn) split
and the CVP-over-discounting positioning" jointly to `Section_02_Business_Description.md §2.1` and
`Section_07_Marketing_and_Sales_Strategy.md §7.1`. Verified: the dollar split is stated in Section 2 §2.1
(not Section 7 §7.1, which never states the ~USD120mn/~USD55mn figures); the CVP-over-discounting
positioning is stated at length in Section 7 §7.1 (not the split). Read as "split from Section 2, CVP
positioning from Section 7," the citation is accurate; read as a single undifferentiated attribution, it
could mislead a reader checking Section 7 §7.1 for the dollar figures. Minor clarity issue only.

## Cross-section reference checks

| # | Reference (in Section 7 or 8) | Points to | Verification | Result |
|---|---|---|---|---|
| 1 | §7.1 brand-transition quote "cited in `Section_02_Business_Description.md` §2.1" | Sec 2 §2.1 | Sec 2 §2.1 contains the identical quote, identical TLB-020 p.16 citation | PASS |
| 2 | §7.3 "Consistent with Section 5's build/buy/partner analysis" + "cited in `Section_02_Business_Description.md` §2.5" (AI/ML stack inherited from Delivery Hero, not a separate vendor partnership) | Sec 2 §2.5, Sec 5 §5.2 | Sec 2 §2.5 states the identical inheritance claim; Sec 5 §5.2 independently confirms "already a partner arrangement... licensed from Delivery Hero SE" | PASS |
| 3 | §7.6 cross-check of CARC figures against Section 6's "less: Vouchers and other discounts" contra-revenue line (USD (120)mn, FY2025, §6.1) | Sec 6 §6.1 | Sec 6 §6.1's current Management Revenue table contains exactly this line/figure/citation (TLB-001 p.27/TLB-002 p.20); Section 7's "flag, don't force-reconcile" treatment matches Section 6's own §6.1 handling of its unreconciled figures | PASS |
| 4 | §7.6 cross-check against Section 4's "same five-mechanism ranking" (pro > multi-vertical > Rewards/PostPaid > Family Plan) | Sec 4 §4.2 | Sec 4 §4.2 covers the same mechanism set (multi-vertical, pro, Rewards, PostPaid, AI, Food-leadership CVP) with matching uplift figures; exact rank-ordering as a single list is not literally reproduced in Sec 4, but no contradiction — Section 7's own qualifier ("if drafted") shows this was written cautiously | PASS (no contradiction) |
| 5 | §7.5 "`Section 12`'s Three Horizons framing places both [OPT-002, OPT-003] in Horizon 1... one piloted, one funded directly" | Sec 12, Horizon 1 | Sec 12's current Horizon 1 section: OPT-002 listed under "Pilot"; OPT-003 listed under "Fund now... not a pilot" — exact match | PASS |
| 6 | §7.5 "matching the phrasing already independently corrected in `Section_12_Implementation_Plan.md`'s own Pass 2 fix" | Sec 12 | Sec 12's current text names OPT-002/OPT-003 jointly as the "near-term priority pair," consistent with the claimed fix | PASS |
| 7 | §7.5 characterization of `DEC-009`'s resolved text ("near-term priority pair," OPT-002 "cheapest, most reversible," OPT-003 "not a pilot") | `DEC-009` Decision Log; `OPT-003` record | `DEC-009`'s "Decision" section states verbatim "OPT-002 and OPT-003 as the near-term, low-risk/high-fit priority"; `OPT-003`'s own record states verbatim "Not a pilot... Recommend a targeted budget weighting toward these three markets within the existing bucket" | PASS |
| 8 | §8.1 "the concrete evidence base for Section 5.2's build/buy/partner finding" | Sec 5 §5.2 | Sec 5 §5.2 independently states the same partner/licensed-from-Delivery-Hero arrangement; consistent | PASS |
| 9 | §8.1 and §8.6: 235TB/day figure "already established in Section 5.4" | Sec 5 §5.4 | Sec 5 §5.4 does not contain this figure anywhere; its text states infrastructure is "not itemized in the corpus beyond the Delivery Hero licensing relationship" | **FAIL — see H1** |
| 10 | §8.6 "MCP status unchanged" vs. Section 5 | Sec 5 §5.4 | Sec 5 §5.4's "MCP note" (MCP integration decision remains undecided) matches | PASS |
| 11 | §8.4 Systems/Shared Values rows: "per the Responsible-AI principle Section 11 develops further" | Sec 11 | Sec 11 (Controls 1-4, Governance structures 1-3) directly operationalizes the human-approval-gated, non-automatic-decision principle referenced | PASS |
| 12 | §8.3/§8.4 Staff row: leadership-continuity caveat "carried forward into Section 10 (Risk Analysis) as an organizational risk" | Sec 10 §10.4 | Sec 10's `ORG-03` names the identical CEO/board-seat transitions and cites Sec 8's own "partially ready" Staff rating without contradiction | PASS |
| 13 | §8.5 breach/DTA facts, referenced onward by Section 10 (`TECH-02`/`REG-04`) and Section 11 (Control 3) | Sec 10 §10.1/§10.5, Sec 11 §11.1 | Both independently restate the identical facts/citations (144,469 customers, USD150,000 penalty, TLB-026 p.49; DTA dated 15 Oct 2021/amended 30 Oct 2024, TLB-026 pp.156-157) with no drift | PASS |
| 14 | §8.4 Strategy row citing Sec 7 §7.1 for CVP-over-discounting alongside Sec 2 §2.1 for the dollar split | Sec 2 §2.1, Sec 7 §7.1 | See M3 — technically correct if read as two separate attributions, ambiguous if read as one | PASS (with M3 noted) |
| 15 | Sec 10 §10.9's claim that its `ORG-01` mitigation "restates... Section 8 §8.4's proposed stage-gate mechanism" | Sec 8 §8.4 | Sec 8 §8.4's Systems row describes the identical stage-gate mechanism, same examples (OPT-002 Egypt pilot checkpoint, OPT-001 margin-drag checkpoint) | PASS |

## Confirmed correct

- Section 8's raw primary-source pulls (GLSA, GLSA Kuwait/UAE, CQCA, Kitchens Services Agreement, DTA,
  December 2022 breach) were independently re-traced directly against
  `Talabat-Holding-plc_International-Offering-Memorandum.txt` page markers (pp.49, 152-157) and match
  exactly, including the CQCA-terminated/GLSA-sub-licensing-since-1-Jan-2025 mechanics fixed in Pass 3
  and the German-law-governs-all-three-agreements claim with each agreement's law clause on its
  specifically-cited page (GLSA: p.153; CQCA and Kitchens Services Agreement: p.156).
- Section 8's "tMart store count almost 130 (end-2024) → ~160 (2025)" traces correctly to TLB-001 p.17
  and TLB-002 pp.12,14 respectively (independently confirmed against `Facts/Q-Commerce.md`).
- Section 7's `ASM-016` citations (status Approved, Low confidence, GCC+Jordan cohort excluding
  Egypt/Iraq) are accurate to the register's current content.
- No two figures shared between Section 7 and Section 8 (e.g., CARC USD89mn→155mn, TLB-020 p.16 quote,
  AI/personalisation EBITDA figures, December 2022 breach facts, ~90-95% 3PL rider sourcing) were found
  stated with different values in the two sections.
- No `ASM-018` (2.2:1 split) or `ASM-029`–`033` dollar range is reproduced in either section outside its
  permitted use, consistent with `DEC-008`/`DEC-009`'s headline-exhibit restriction.

## Summary

Section 7 has no hard failures under this whole-plan pass; every cross-section reference it makes to
Sections 2, 4, 6, and 12 was independently re-verified against those sections' current text and found
accurate. One minor internal inconsistency (M1, a provenance-note overstatement about `ASM-024`) does not
affect any actual claim in the section body.

Section 8 has one hard failure (H1): a false claim, repeated in two places (§8.1, §8.6), that the
235TB/day data-processing figure was "already established in Section 5.4" — it was not. The underlying
figure itself remains correctly and directly sourced to TLB-002 p.15, so this is a cross-section-reference
defect, not an unsupported-number defect, but it must be corrected before the section clears Stage 17.
One moderate ambiguity (M3) in an 7S-table citation is noted but not blocking. One register-maintenance
gap (M2) is flagged for `Assumptions_Register.md`, not for Section 7 or 8 themselves.

## Verdict

- **Section 7 (Marketing and Sales Strategy): PASS.** No open citation-audit failures under this
  whole-plan pass. Ready to be marked Done pending confirmation the rest of the plan's Stage 17 sweep
  (other section-pairs) finds nothing that implicates it.
- **Section 8 (Operations Plan): PASS WITH ONE OPEN HARD FAILURE (H1).** Per this agent's 0%-tolerance
  rule, Section 8 cannot proceed to Stage 18/publication until H1 is corrected (remove or fix the false
  "already established in Section 5.4" claim in §8.1 and §8.6) and re-verified. M2 and M3 are non-blocking
  but should be cleaned up in the same pass.

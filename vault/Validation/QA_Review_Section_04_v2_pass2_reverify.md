---
type: validation
section: 4
pass: "2-reverify"
status: PASS
date: "2026-07-25"
built_by: qa-review-agent
draft_reviewed: vault/Projects/Business_Plan_Drafts_v2/Section_04_Value_Proposition.md
prior_review: vault/Validation/QA_Review_Section_04_v2_pass2.md
prior_audit: vault/Validation/Citation_Audit_Section_04_v2_pass2.md
---

# QA Re-verification — Section 4 (Value Proposition), v2 draft, Pass 2 fix cycle

**Verdict: PASS.** All six blocking findings (B1–B6) from `QA_Review_Section_04_v2_pass2.md` and all
nine citation-audit findings (HF-1–3, S1–S6) are genuinely resolved in the fixed draft; all seven
non-blocking QA items are applied; the three gates re-confirm PASS on the edited text; DEC-008's
narrative-only restriction is respected in full. One condition and three non-blocking follow-ups are
recorded below — none re-opens a blocking finding.

**Independence statement:** fresh thread; this reviewer did not draft, fix, or previously review this
section. Every resolution below was verified against the underlying evidence tier (VDT nodes, Facts
notes, Assumptions Register rows, DEC-008 record, Topic notes, Business_Relationships chains), not
against the draft's own fix record.

## Per-finding resolution (B1–B6)

| Finding | Status | Verification performed |
|---|---|---|
| **B1** — wrong VDT node IDs (N-19/N-20) for multi-vertical evidence | **RESOLVED** | Body (§4.2) and traceability table now cite **N-14** for 13.0 vs. 3.8 orders/month and **N-11** for 68%→73%→76%. Verified against `Value_Driver_Tree_v2.md`: N-14 = "13.0 vs. 3.8 orders/month (July 2024)", Group; N-11 = "68% (Dec 2024) → 73% (Dec 2025) → 76% (Mar 2026)", Group. No residual N-19/N-20 citation for these figures anywhere in the section. |
| **B2** — AI EBITDA contribution mis-cited on both axes | **RESOLVED** | §4.2 and table now cite `Facts/AI_Facts.md` (which does carry both figures: USD 14mn+ at TLB-001 p.23; USD 30mn+ from TLB-002) and VDT **N-09** ("USD 14mn+ (FY2024) to USD 30mn+ (FY2025)", Group) for the contribution; **N-06** is retained only for the embedded-deployment point, which is exactly what N-06 evidences. `Topics/EBITDA.md` is no longer cited for this figure. Residual: one stale TLB page ref (NEW-1 below, non-blocking). |
| **B3** — blanket GCC+Jordan-cohort provenance mis-tagging Group statistics | **RESOLVED** | Blanket replaced with per-claim tags. Cohort label now restricted by name to the pro 20-28%/26-32% uplifts (and the M1-retention deltas, matching ASM-016's own registered scope — verified against the register row, which lists exactly those three statistics). Group tags verified inline at every occurrence: Answer (13.0/3.8; Rewards/PostPaid "Group disclosures"; AI "Group"), §4.2 (N-14, N-11, Rewards TLB-001 p.19, PostPaid with its 5-GCC-market measurement-footprint note, CARC), §4.3 (>4x spend gap "Group-wide"), and the table's Geography column. Each tag matches the corresponding VDT node's Geography line. |
| **B4** — "~7%-of-GMV UAE benchmark" mislabeling | **RESOLVED** | Gap argument now cites the **global leading-peer benchmark** (TLB-001 p.21) — verified against `Topics/Revenue Drivers.md` ("3.3–3.5% of GMV against a ~7% global benchmark"). The UAE talabat-mart 7%-of-tMart-GMV Q4'25 figure appears separately, explicitly labeled "country- and vertical-specific achieved level, not a Group-wide benchmark," used only as attainability proof — matching N-29's own flag ("a country-specific figure, not yet a Group-wide achieved level"). Table carries two distinct, correctly-tagged rows. No blended "UAE benchmark" remains. |
| **B5** — no independent citation audit on file | **RESOLVED in substance, with one process condition** | `Citation_Audit_Section_04_v2_pass2.md` (evidence-citation-agent, 2026-07-24) now exists and was consumed in full. Its 3 hard failures and 6 soft findings were each independently re-traced by this re-verify and confirmed **closed on the edited text** (HF-1/HF-2/HF-3 map to B-findings above and the pro-GMV-share fix below; S1–S6 all applied per the fix record and verified). **Condition:** that audit's Result clause requires a formal re-run after fixes, and no post-fix re-audit artifact exists. No substantive citation failure remains open, but the QA gate rule ("citation audit must show PASS before ✅ Done") means the tracker flip should wait for the evidence-citation-agent's re-stamp. See Disposition. |
| **B6** — missing MECE statement / ASM-033 overlap | **RESOLVED — verified against the exact requirement** | §4.2 now opens with an explicit MECE statement: MECE by template value category (four distinct revenue mechanisms + cost/efficiency + risk reduction + insight, collectively exhaustive against the corpus-evidenced drivers). It **names the AI/personalisation overlap** as deliberate cross-cutting infrastructure and **states the ASM-033 non-additive treatment** ("overlaps, non-additively, with OPT-001/OPT-002/OPT-004... measured separately and never summed with the mechanism uplifts"). Verified against the ASM-033 register row ("potentially overlapping with, not additive to, OPT-001/002/004's ranges"); the treatment is restated at the point of use in the AI paragraph. |

## Audit findings and non-blocking items — spot-verified

- **HF-1 (pro GMV share):** restated as 32% (Q1 2025) → 49% (Q1 2026), cited inline (TLB-020 p.8;
  TLB-014 p.14; N-08; ASM-021) and added to the table. Verified: N-08 reads "~32% to ~49% ... y/y
  through Q1 2026", Group; the **ASM-021 register row was genuinely corrected** (row now reads
  "32%→49% (Q1 2025→Q1 2026)", dated 2026-07-24, with the correction note appended by
  decision-steward resolving the same-tier conflict in favor of the Facts layer).
- **S1/NB-1:** "orders/month (≈3.4x multiple)" in all three occurrences; July 2024 unrefreshed caveat
  present; GMV-share trend dated through March 2026 — matches N-14's own caveat verbatim.
- **S3/NB-4:** sourcing untangled — Rewards >15% → Chain 1 + TLB-001 p.19; PostPaid 14% → TLB-001
  p.18 + `Facts/Orders_Facts.md`; CARC → Chains 2 and 4. Verified CARC's USD 89→103→155mn / 1.5→1.4→1.6%
  path against `Business_Relationships.md` (TLB-001 p.28; TLB-002 p.21).
- **S5:** 4.8% Q1 2026 realized margin now cited inline (TLB-020 pp.4, 11-12; `Topics/EBITDA.md`).
- **S6/NB-3:** CARC gloss corrected — monotonic in dollars, explicit 1.5%→1.4%→1.6% dip-then-rise path.
- **NB-2:** 4.6% now labeled "guided mid-range of the disclosed 4.4-4.8% FY2026 range."
- **NB-5:** §4.3 now says Section 9 shows "the full base/upside/downside scenario set ... at the Group
  level only ... no quantified bucket-split sub-case" — verified **verbatim-consistent with DEC-008's
  resolution text** (Option 1: "only the Group-level base/upside/downside scenario set ... argued
  narratively ... not shown as a quantified financial sub-case").
- **NB-6:** Assumption pointers corrected — VDT Assumption-tagged nodes cited as ASM-015–020,
  Scenarios modules as ASM-021–028; verified against the register's anchor column for both blocks.
- **NB-7:** one-clause justification for the efficiency/cost-savings merge present.

## Gate re-confirmation on the edited text

- **Problem Consistency Gate: PASS.** Same Group-wide USD 175mn allocation decision question as
  `Problem_Charter.md`; Egypt appears only as evidence/worked example (PostPaid/CIB precedent, OPT-002
  target), never as scope boundary; the superseded v1 draft is referenced only as an explicitly-marked
  superseded companion; no unmarked pre-pivot residue introduced by the edits.
- **Financial Integrity Gate: PASS.** USD 175mn envelope consistent (≈120+55, ~2.2:1); no
  ASM-029–033 dollar ranges surfaced; no revenue/GMV/gross-profit/EBITDA substitution (AI contribution
  consistently labeled estimated EBITDA; advertising figures labeled revenue; spend gap labeled
  monthly spend); false-precision items from Pass 2 (mid-range, CARC path, ≈3.4x) all corrected and
  labeled; double-counting risk now explicitly neutralized by the ASM-033 non-additivity statement.
  **DEC-008 (Option 1) respected:** the ~2.2:1 weighting appears narratively in the provenance note
  and §4.1 only; the section's only table is the citation-traceability table, not a financial exhibit;
  no quantified bucket-split exhibit crept in anywhere in the edited text.
- **Geographic Evidence Gate: PASS.** Every statistic geography-tagged inline and in the table at its
  disclosed level; all tags verified against the corresponding VDT node Geography lines (N-14/N-11/
  N-08/N-09/N-29 Group; N-15/N-20 GCC+Jordan excl. Egypt/Iraq by name; M1 -4% UAE/Kuwait/Qatar; CIB
  Egypt; tMart adtech UAE); extension beyond the pro cohort routed through ASM-016 as a labeled
  Low-confidence inference; no "MENA" usage; the global-benchmark vs. UAE-achieved 7% figures are now
  cleanly separated (the Pass 2 unreconciled-blending failure is cured, not merely reworded).

## New findings from spot-checking the edited passages (none blocking)

- **NEW-1 (non-blocking, fix on next touch):** §4.2 and the table cite "TLB-002, page 15" for the
  >USD 30mn (FY2025) AI contribution. `Facts/AI_Facts.md` corrected that figure's page ref from
  TLB-002 p.15 → **p.16** on 2026-07-24 (per the Section 5 Pass 2 audit) — a cross-section ripple
  that post-dates the Section 4 audit's own "(TLB-002 p.15)" instruction, so the drafter followed
  instructions faithfully. The claim fully resolves (the cited Facts note contains the figure and its
  correction annotation; N-09, also cited, says p.15-16) — imprecise-but-resolvable, soft by the
  audit's own taxonomy. Fix: "page 15" → "page 16" (or "pages 15-16" per N-09) in both occurrences.
- **NEW-2 (cosmetic):** the provenance note names "the multi-vertical M1-retention deltas" as
  GCC+Jordan-cohort evidence. This is faithful to ASM-016's registered scope and to the audit's
  prescribed HF-3 fix language, but the delta statistics (+16pp/+20pp) do not actually appear
  anywhere in the section body, and VDT N-21 tags the delta comparison itself Geography: Group with a
  cohort-caution caveat. Harmless as written (the note cannot mis-tag a statistic that never appears,
  and the -4% M1 claim carries its own UAE/Kuwait/Qatar tag inline); if the deltas are ever added to
  the body, tag them per N-21, not the blanket.
- **NEW-3 (cosmetic, pre-existing):** the Answer paragraph says "five value mechanisms" but its
  parenthetical chain names four (advertising is counted but not listed there). Pre-existing text
  that Pass 2 already passed under the Pyramid check; optional tidy only.

## Staleness

No `vault/Research/Notes/` Research Notes are cited — check N/A (unchanged from Pass 2). The July 2024
frequency pair now carries its unrefreshed-date caveat inline, closing Pass 2's staleness flag.

## Disposition

**PASS.** B1–B6 are genuinely resolved; HF-1–3 and S1–S6 are closed on the edited text; the three
gates pass; DEC-008 compliance is intact. Three non-blocking follow-ups (NEW-1–3) are recorded for
the next touch and do not require a further QA cycle.

**One condition before the tracker flips to ✅ Done** (tracker deliberately not touched by this
re-verify, per task instruction): the evidence-citation-agent must re-stamp
`Citation_Audit_Section_04_v2_pass2.md` (or file a successor) as PASS on the fixed draft, per that
audit's own Result clause and the QA-gate rule that the citation audit must show PASS alongside the
three gates. This re-verify has already confirmed every one of that audit's findings is closed, so
the re-stamp is expected to be a formality — but it is the citation agent's stamp to give, not QA's.
Recommended sequence for the Orchestrator: (1) citation re-audit stamp; (2) optionally fold NEW-1's
one-word page correction into the same touch; (3) flip Section 4 to ✅ Done.

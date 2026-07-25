---
type: validation
section: 6
pass: 2
status: FAIL
date: "2026-07-25"
built_by: evidence-citation-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_06_Business_Model_and_Revenue_Streams.md
pass1_audit: vault/Validation/Citation_Audit_Section_06_v2.md (read only AFTER this pass's own trace, per the two-pass protocol)
---

# Citation Audit — Section 6 (v2), Independent Pass 2

Independent second-pass trace per `.claude/skills/citation-audit/SKILL.md` and the two-pass
discipline (Architecture v2 Change 2). Every numeric/named-fact claim in the draft was walked
sentence-by-sentence and traced against the vault evidence layer directly — `Facts/Revenue.md`,
`Facts/Talabat_Pro.md`, `Facts/Advertising_Facts.md`, `Facts/Q-Commerce.md`, `Facts/GMV_Facts.md`,
`Facts/Marketplace_Facts.md`, `Facts/Competition_Facts.md`, `Topics/Customer Economics.md`,
`Topics/Grocery and Retail.md`, `Topics/Advertising.md`, `Topics/Pricing.md`, `Topics/Talabat Pro.md`,
`Strategic/Revenue Model.md`, `Entities/Technology_Platforms.md`, `Decisions/Assumptions_Register.md`,
`Decisions/Decision_Log/` (DEC-006/008/009), `Decisions/Investment_Options_Register.md`,
`Forecasts/Value_Driver_Tree_v2.md`, and `vault/Architecture/Geographic_Evidence_Rules.md`.
The Pass 1 audit was not consulted until this pass's own trace was complete.

## Verdict: FAIL — 1 hard failure, 5 soft findings

Per the 0%-tolerance rule, the section cannot proceed to stage 10 (✅ Done) until HF-1 is fixed and
re-verified. The fix is a two-word period-label correction, not a re-draft of any analysis.

---

## Hard failures (unresolvable or factually mis-attributed as cited)

### HF-1 — talabat pro subscriber GMV share "32%→49%, FY2024→Q1 2026": the 32% baseline is Q1 2025, not FY2024

- **Locations (3):**
  1. §6.1 stream table, "Subscription fee & Other Income" row: "GMV share 32%→49%, FY2024→Q1 2026"
  2. §6.3 "So what for the P&L": "subscriber GMV share has risen from 32% to 49% of platform GMV (FY2024→Q1 2026) *(Group; `Topics/Talabat Pro.md`)*"
  3. Traceability table row: "talabat pro subscriber GMV share 32%→49% (FY2024→Q1 2026)"
- **Why it fails:** The disclosed 32% baseline is dated **Q1 2025 / March 2025** — TLB-020 p.8
  ("49% (Q1'26) vs 32% (Q1'25)") and TLB-014 p.14 ("49% of platform GMV in Mar'26 from 32% in
  Mar'25"), both carried verbatim in `Facts/Talabat_Pro.md`. No source discloses 32% at FY2024;
  TLB-019 p.7 discloses a **25%** pro GMV share at Q4/FY2025 ("1.9x growth"), which is flatly
  incompatible with a 32% FY2024 baseline. `Assumptions_Register.md` (ASM-021 correction note,
  2026-07-24) already adjudicated this exact conflict for Sections 3–4: "Period label corrected
  FY2024→Q1 2025 ... The disclosed 32% talabat pro subscriber-GMV-share baseline is dated
  Q1 2025/March 2025, not FY2024; no source discloses 32% at FY2024." The cited source
  (`Topics/Talabat Pro.md`) itself dates the 49% to Q1 2026 and asserts no FY2024 baseline —
  the misattribution is the draft's own. This is a period-mixing failure of exactly the class
  the wave-1 (Sections 2–5) audits corrected, post-dating this draft's Pass 1.
- **Fix needed:** Replace "FY2024→Q1 2026" with "Q1 2025→Q1 2026" in all three locations, and cite
  TLB-020 p.8 / TLB-014 p.14 (directly or via `Facts/Talabat_Pro.md`) alongside or instead of the
  Topic note. No other change required: the surrounding argument (penetration-driven line, recurring-
  commitment shift) survives intact — the y/y trend is real, only the baseline period label is wrong.

---

## Soft findings (resolvable but imprecise — fix before submission-final, none blocks stage 10 once HF-1 clears)

### SF-1 — §6.2 Advertising bullet: "management-stated ~7%-of-GMV medium-term target already reached in the UAE for talabat mart specifically" bridges two different denominators
The ~7% medium-term benchmark (TLB-001 p.21) is a **global-peer benchmark for total AdTech revenue
as % of total GMV** (TLB-015 pp.26/86/105: "global leading peer benchmark ~7% penetration"); the UAE
talabat-mart figure is adtech revenue as a share of **tMart GMV** in one country (TLB-002 p.10;
TLB-019 p.7: "tMart NMR ~7% of tMart sales in UAE"; TLB-014 p.19: "double the company average").
"Already reached" implies benchmark attainment across unlike denominators. Not a hard failure: every
figure is individually cited, the geography qualifier "(country-specific, UAE tMart vs. Group)" is
present, and the phrasing mirrors the vault's own synthesis layer (`Strategic/Revenue Model.md`;
`Topics/Advertising.md` "already reached for talabat mart in the UAE" — TLB-002 p.10's own "already
reached" language). **Fix:** reword to keep the two 7% figures separate (e.g. "a global-peer
~7%-of-total-GMV medium-term benchmark (Group), with UAE talabat-mart adtech margins separately at
~7% of tMart GMV — double the company average"), and flag the same phrasing upstream in
`Strategic/Revenue Model.md` and `Topics/Advertising.md` for the same precision fix.

### SF-2 — TLB-019 p.13 fee-mix range: correctly flagged, not silently resolved — but the same-tier conflict still needs a decision-steward/DEC record, and Pass 2 offers a diagnosis
The draft's handling (name both sides, decline to use the discrepant range, state why) satisfies the
citation-audit skill's rule against silent selection and is a PASS as drafted. However, the
evidence-ranking procedure (stage 7) requires same-tier conflicts to be escalated to
`decision-steward`, and the draft's provenance note marks stage 13.6 "not applicable" — so the
conflict currently lives only inside this section's prose. **Pass 2 diagnosis (to be verified
against the TLB-019 p.13 source slide):** the ranges in `Facts/Revenue.md`'s TLB-019 entry appear to
be a one-row **label shift** in extraction. Recomputing FY2024/FY2025 fee-type revenue ÷ GMV from
disclosed dollars (TLB-029; TLB-002 p.20 at 40-41% take rate) gives Commission ~16.2→~13.7%,
Subscription & Other ~12.8→~14.8%, Delivery & Service ~9.4→~9.1%, Advertising ~3.3→~3.4% — i.e. the
recorded ranges match the four lines in order but assigned to the *next* row's label
(recorded "Delivery & Service 12.8-14.8%" = actual Subscription & Other; recorded "Advertising
8.9-9.4%" ≈ actual Delivery & Service; recorded "Subscription 3.3-3.5%" = actual Advertising).
**Fix:** route to `decision-steward` for a DEC record; verify against the TLB-019 p.13 slide and, if
confirmed, correct `Facts/Revenue.md` and `Facts/_raw/TLB-019_facts.md` with a dated correction note
(mirroring the ASM-021 precedent), so future sections inherit the resolution instead of re-flagging it.

### SF-3 — §6.4 causal gloss: "a customer who becomes multi-vertical is worth roughly four times as much per month"
The disclosed AED 194/AED 814 comparison (TLB-026 pp.91/122, Group, September 2024) is
**cross-sectional** — multi-vertical customers *spend* ~4.2x more — not a measured conversion
effect; selection (higher-spend customers self-selecting into multi-vertical) is not excluded by the
source. The sentence earlier in the same paragraph states the comparison correctly; only the
"becomes ... is worth" gloss overreaches (evidence-category rule: never a historical comparison as a
guaranteed future uplift). **Fix:** qualify, e.g. "multi-vertical customers spend roughly four times
as much per month; the disclosed comparison is cross-sectional, so the realizable per-customer
conversion uplift is not itself disclosed."

### SF-4 — Citation bundling: the Group 3.4–3.5%-of-GMV advertising figure is cited only under the benchmark/UAE citation cluster
In §6.2 and the traceability table, "3.4–3.5% of GMV Group-wide" is bundled under
"TLB-001 p.21; TLB-002 p.10; TLB-014 p.19" — none of which is that figure's primary locus. It is
disclosed at TLB-002 pp.11/14/19 (FY2025, 3.4–3.5%) and corroborated by TLB-011 p.4 / TLB-020 p.8
(Q1 2026, 3.4%) and TLB-019 p.7 (Q4'25, 3.5%), all in `Facts/Advertising_Facts.md`. Resolvable →
soft. **Fix:** add TLB-002 p.11/14/19 (or TLB-011 p.4) to the citation for the Group figure.

### SF-5 — §6.1: "This two-way split is disclosed only for Q1 2025/Q1 2026" — "only" is slightly overstated, though the claim resolves verbatim to Approved ASM-013
The sentence traces word-for-word to `ASM-013` (`status: Approved`), so it passes the mechanical
test. For precision: the **%-of-GMV mix-table** two-way split is indeed Q1 2025/Q1 2026 only
(TLB-011 p.4), but the **dollar** split of Subscription fees vs. Other direct income is also
disclosed for Q2 2025 (TLB-006 p.18), Q3 2025 (TLB-007 p.19), and the audited 485-day
since-inception period (TLB-008 p.52 / TLB-002 p.105 — which, per the wave-1 period-mixing rule, is
3 Sep 2024–31 Dec 2025, **not** FY2025). The draft's load-bearing conclusion — that the FY2025
pro-forma USD 1,397mn line cannot be cleanly decomposed at the annual level from disclosed data —
survives, because the audited split covers a 16-month period, not FY2025. **Fix (optional, with a
matching precision note on ASM-013):** "the two-way %-of-GMV split is disclosed only for
Q1 2025/Q1 2026, and no full-year FY2024/FY2025 pro-forma decomposition is disclosed (the audited
subscription/other-income dollar split covers the 485-day since-inception period, not FY2025)."

---

## Claims verified clean (Pass 2 trace, abbreviated)

| Claim | Resolves to | Verdict |
|---|---|---|
| FY2024/FY2025 revenue by fee type incl. growth rates and Vouchers (120)mn | `Facts/Revenue.md`: TLB-001 p.27; TLB-002 p.20; TLB-009 p.4 — verbatim match | PASS |
| Blended take rate ~40%→~41% (FY24→FY25); 38%→39% Q1'25→Q1'26; "~38–41%" range framing | TLB-001 p.27; TLB-002 p.20; TLB-020 p.4/10; `Topics/Customer Economics.md` | PASS |
| ASM-013 decomposition: Subscription 1.0%/~USD25.8mn + Own grocery & other 15.2%/~USD408.4mn = ~16.2%, ~0.2% reconciliation; confidence labels | `ASM-013` (Approved) + [[DEC-006]]; TLB-010 p.16 (25,772,018 / 408,418,477); TLB-011 p.4 | PASS |
| MECE-by-construction framing of the 4+1-line Management Revenue convention | TLB-001 p.27; TLB-002 p.20 (Group-labeled) | PASS |
| Qatar commission-rate cap + delivery-registration-fee ban, MoCI investigation | `Facts/Competition_Facts.md`: TLB-026 p.46 (country-specific tag present) | PASS |
| Oman licensing dispute | `Facts/Competition_Facts.md`: TLB-001 p.32 (country-specific tag present) | PASS |
| Q1 2026 "lower commission rates" as mix-shift factor | `Facts/Revenue.md`: TLB-014 p.15 | PASS |
| Family Plan >60% retention premium vs. solo | `Facts/Talabat_Pro.md`: TLB-018 p.6 | PASS |
| talabat pro Egypt price gap stated, not smuggled (EGP figure uncited; ASM-004 requires-revision under pivot layer, number not used) | `Topics/Pricing.md` Open Questions/Business Implications; `Assumptions_Register.md` ASM-004 + pivot-reclassification rule | PASS |
| tMart ~95% GMV-to-revenue conversion, with not-a-margin caution | `Facts/Q-Commerce.md`: TLB-002 p.20 | PASS |
| G&R product-mix (0.5)–(0.7)pp Adjusted-EBITDA-margin drag | `Topics/Grocery and Retail.md`: TLB-014 pp.6, 8 | PASS |
| CPG advertising investment ratio 8% vs. 2% industry benchmark | `Facts/Advertising_Facts.md`: TLB-015 p.108 (Group tag present) | PASS |
| Smart-auction / self-service ads system | `Entities/Technology_Platforms.md` (TLB-015) | PASS |
| AED 194 (USD 53)/3.8 orders vs. AED 814 (USD 222)/12.8 orders, Sept 2024; >4x spend / ~3.4x frequency (814/194=4.20; 12.8/3.8=3.37) | `Topics/Customer Economics.md`: TLB-026 pp.91, 122 (Group, September-2024 basis stated; USD conversions from the note, not constructed) | PASS (see SF-3 on the causal gloss only) |
| Net delivery cost 6.0%→6.3%; gross profit 12.3%→11.9% of GMV (FY24→FY25, direction verified) | `Facts/Marketplace_Facts.md`: TLB-002 pp.17, 20 | PASS |
| CARC USD 89mn (1.5%, 2023) → USD 155mn (1.6%, 2025) | `Topics/Customer Economics.md`: TLB-001 p.28; TLB-002 p.21 | PASS |
| DEC-009 "11-criterion comparison" reference | `DEC-009` (exists, resolved 2026-07-23; 11-criterion framework confirmed) | PASS |
| No AOV/basket figure at any geography (ASM-015, Approved); GMV excludes subscription fees and rider tips | `ASM-015` (Approved); `Facts/GMV_Facts.md`: TLB-001 p.27 | PASS |
| No per-order contribution margin; no Egypt fee-type breakdown; no country-level unit-economics split | `Topics/Customer Economics.md` Open Questions; `Strategic/Revenue Model.md` "Egypt-Specific Considerations" | PASS |
| Subscription fastest-growing line +44%/+47%; smallest-in-dollars contractually-recurring line; delivery-fee erosion by pro free delivery | `Strategic/Revenue Model.md` (grounded in TLB-001/002/009 figures re-verified above) | PASS |
| Value Driver Tree node references (N-05, N-07–N-12, N-14, N-16, N-17, N-20/21/22, N-26, N-29; §6.6 "N-26 through N-30") | `Forecasts/Value_Driver_Tree_v2.md` — all node IDs exist and match content | PASS |
| OPT-001/OPT-002/OPT-004 descriptions and roles | `Decisions/Investment_Options_Register.md`; `DEC-009` | PASS |
| §6.6 cross-section claims (Section 9's 14–17% cFX guidance + EBITDA bridge not restated; no ASM-029–033 dollar range shown; DEC-008 scope) | `Section_09_Financial_Plan.md`; `DEC-008`; grep of the draft confirms no OPT-level dollar range appears | PASS |

## Geographic Evidence Rules check (Pass 2)

Checked every numeric claim against `vault/Architecture/Geographic_Evidence_Rules.md`. Geography
tagging is clean: Group figures Group-labeled; Qatar/Oman/UAE-tMart figures country-labeled; the
Egypt fee-type and unit-economics gaps stated rather than filled by silent Group transfer; no
`inferred-applicability` transfer is made (and none is needed); "MENA" nowhere used; no non-GCC
segment figure is cited, so the pre/post-FY2025 non-GCC composition trap is not implicated. The one
audit failure (HF-1) is **temporal** (period misattribution), not geographic; SF-1 is a
denominator/benchmark-precision issue, geography-qualified as written.

## Convergence / divergence with Pass 1 (`Citation_Audit_Section_06_v2.md`, read after this trace)

- **Divergence — Pass 1 item #14 (the decisive one):** Pass 1 PASSED "32%→49% (FY2024→Q1 2026)" on
  the ground that Sections 3/4's audits had verified "the identical figure." This pass FAILS it
  (HF-1). The divergence is explained by timing: Pass 1 ran 2026-07-23; the ASM-021 period-label
  correction (Facts-layer adjudication: baseline = Q1 2025) landed 2026-07-24 out of the Pass 2
  audits of Sections 3–4. Pass 1's reliance on other sections' audits rather than the Facts layer
  itself is exactly the failure mode the two-pass protocol exists to catch.
- **Divergence — Pass 1 item #13:** Pass 1 passed the ~7% benchmark sentence as "verified against
  `Topics/Advertising.md` verbatim." This pass agrees it is traceable (hence not hard) but adds
  SF-1: the Knowledge-layer phrasing itself blends two denominators and should be precision-fixed
  upstream as well as in the draft.
- **Convergence — Pass 1 item #4 / this pass SF-2:** both passes agree the TLB-019 p.13 conflict is
  correctly flagged-not-silently-resolved and that the underlying Facts-layer entry needs fixing;
  this pass adds the probable label-shift diagnosis and the stage-7 escalation requirement
  (decision-steward DEC record) that Pass 1 left as a loose "future pass should consider."
- **Convergence:** all other Pass 1 rows (1–3, 5–12, 15–21) re-verified independently here with the
  same result. SF-3/SF-4/SF-5 are new findings Pass 1 did not raise.

## Summary

- Claims walked: full section, sentence by sentence (~24 distinct numeric/named-fact claim groups).
- **Hard failures: 1** (HF-1, three in-text locations — same single claim).
- **Soft findings: 5** (SF-1 through SF-5).
- **Status: FAIL.** Re-run eligibility: once HF-1's two-word period-label fix is applied (and
  ideally SF-1/SF-3 rewordings), a targeted re-check of the changed sentences suffices; the rest of
  the section's citation base is verified sound.

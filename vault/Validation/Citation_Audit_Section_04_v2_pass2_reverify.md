---
type: validation
section: 4
pass: "2-reverify"
status: PASS
date: "2026-07-25"
built_by: evidence-citation-agent
---

# Citation Audit — Section 4 (Value Proposition), v2 draft — Pass 2 re-verification (independent, fresh thread)

**Audited document:** `vault/Projects/Business_Plan_Drafts_v2/Section_04_Value_Proposition.md`
(fix cycle 2026-07-24, applied against `Citation_Audit_Section_04_v2_pass2.md` HF-1–3/S1–S6 and
`QA_Review_Section_04_v2_pass2.md` B1–B6/NB-1–7).
**Mandate:** independent re-verification of the Pass 2 FAIL findings after the fix cycle. Every edited
passage was re-traced to the evidence layers directly (Facts notes, `_raw` fact files, `_source_text`
extracts, `Assumptions_Register.md`, `Value_Driver_Tree_v2.md`, `Business_Relationships.md`,
Topic notes) — the fix record's own claims were not taken on trust.
**Procedure:** `.claude/skills/citation-audit/SKILL.md`; geography per
`vault/Architecture/Geographic_Evidence_Rules.md`. Unresolvable or geography-mislabeled = hard
failure; imprecise-but-resolvable citation = soft finding (convention consistent with Pass 2's own
S4 precedent: "pointer is wrong, not the number").

## Hard-failure resolution

### HF-1 — pro subscriber GMV share baseline/citation — **RESOLVED**

- §4.2 now reads "grown from 32% (Q1 2025) to 49% (Q1 2026) of platform GMV" with inline citation
  (TLB-020, page 8; TLB-014, page 14; `Value_Driver_Tree_v2.md` N-08; `ASM-021`).
- Independently verified at the Facts layer: `Facts/Talabat_Pro.md` — TLB-020 p.8 ("49% (Q1'26) vs
  32% (Q1'25)") and TLB-014 p.14 (Mar'26 vs Mar'25, talabat-only basis per footnote 5). VDT_v2 N-08
  concurs ("y/y through Q1 2026"; **Geography: Group**, 8-market rollout complete 2025).
- The escalated register correction genuinely happened: `Assumptions_Register.md` ASM-021 now reads
  "32%→49% (Q1 2025→Q1 2026)" with a dated correction note ("ASM-021 period label corrected
  2026-07-24... same-tier conflict resolved in favor of the Facts layer: TLB-020 p.8, TLB-014
  p.14"), status still Approved. No silent workaround.
- Traceability-table row added, Geography "Group (platform GMV)" — matches N-08.

### HF-2 — 7% benchmark conflation — **RESOLVED**

- The two facts are now cleanly disentangled, each with its correct source and geography:
  - Gap argument: "~7%-of-GMV **global leading-peer benchmark** (TLB-001, page 21)" vs. Group
    penetration 3.3-3.5%. Verified: `Facts/Advertising_Facts.md` — "Global benchmark target for
    AdTech revenue is ~7% of GMV in the medium term" (TLB-001, page 21); Group 3.3% (2024, TLB-001
    p.13/21), 3.4-3.5% (FY2025, TLB-002 p.20; TLB-019 p.7; TLB-020 p.8).
  - Separate sentence, explicitly "a country- and vertical-specific achieved level, not a Group-wide
    benchmark": talabat mart UAE adtech margin 7% of tMart GMV, Q4'25 (TLB-002, page 10; TLB-014,
    page 19; N-29). Verified: `Facts/Advertising_Facts.md` — "In the UAE, advertising technology
    margins have already reached 7% of GMV for talabat mart. (TLB-002, page 10)"; "Adtech margins
    for talabat mart... in the UAE reached 7% of GMV in Q4'25, double the company average (TLB-014,
    page 19)". VDT_v2 N-29 concurs ("a country-specific figure, not yet a Group-wide achieved level").
- Traceability table carries two separate rows with correct geography tags ("Group (benchmark:
  external/global)" and "UAE, tMart-specific (not Group-wide)"). No blended "UAE benchmark" phrase
  remains anywhere in body or table. The Pass 2 regression (pre-pivot audit HF#1 defect class) is
  closed again.

### HF-3 — provenance blanket mis-tagging Group statistics as cohort evidence — **RESOLVED**

- The blanket is gone. The provenance note now restricts the GCC+Jordan-cohort (ASM-016) label by
  name to the pro 20-28%/26-32% uplifts and the multi-vertical M1-retention deltas — which matches
  ASM-016's actual scope exactly (register row verified: frequency 20-28%, retention 26-32%,
  +16pp/+20pp M1 deltas; nothing else) — and declares everything else Group unless a narrower
  geography is named inline. The default now points the correct way.
- Per-claim geography tags re-traced, each independently verified correct:
  | Claim | Draft tag | Verified against |
  |---|---|---|
  | 13.0 vs. 3.8 orders/month (Answer, §4.2, table) | Group, July 2024 | VDT_v2 N-14 (Group); `Topics/Multi-Verticality.md` ("disclosed only at the Group level") |
  | Multi-vertical GMV share 68→73→76 | Group, current through Mar 2026 | VDT_v2 N-11 (Group); TLB-019 p.7, TLB-020 p.8 |
  | pro 20-28% / 26-32% | GCC+Jordan cohort, six markets live before Dec 2024, excl. Egypt/Iraq by name | ASM-016 (Approved); N-13/N-15; TLB-012 p.17 (UAE, Kuwait, Qatar, Bahrain, Jordan, Oman) |
  | pro GMV share 32%→49% | Group (platform GMV) — table + provenance default | N-08 (Group) |
  | Rewards >15% | Group | TLB-001 p.19 via `Business_Relationships.md` Chain 1 |
  | PostPaid 14% | Group disclosure, footprint at measurement 5 GCC markets | TLB-001 p.18 via `Facts/Orders_Facts.md` (measured Nov 2021–Jan 2024); footprint per Pass 2 trace (TLB-015) |
  | CARC USD89→155mn | Group | TLB-001 p.28; TLB-002 p.21 |
  | Egypt PostPaid + CIB | Egypt | `Topics/FinTech.md` (TLB-002 pp.14/19) |
  | AI EBITDA contribution >14→>30mn | Group (estimated) | N-09 (Group); `Facts/AI_Facts.md` |
  | M1 -4% y/y | UAE/Kuwait/Qatar inline | TLB-019 p.9; `Topics/Food Leadership.md`; ASM-027 |
  | >4x monthly-spend gap | Group-wide | `Topics/Customer Economics.md` (TLB-026, AED 194 vs. 814, Sep 2024, explicitly Group-wide) |
- No statistic is any longer presented under a false cohort (or false Egypt-proven) population.

## Soft-finding fix verification (Pass 2 S1–S6)

- **S1 — RESOLVED.** All three occurrences (Answer, §4.2, table) now read "13.0 vs. 3.8
  orders/month" with the derived "≈3.4x multiple" (13.0/3.8 = 3.42, transparently arithmetic), the
  July 2024 date, the "not since refreshed" caveat, and the GMV-share trend dated current through
  March 2026 — all matching `Topics/Multi-Verticality.md`'s own caveats and VDT_v2 N-14.
- **S2 — RESOLVED.** Node IDs corrected to **N-14** (13.0 vs. 3.8) and **N-11** (68→73→76) in body
  and table; verified against `Value_Driver_Tree_v2.md` section headers. No residual N-19/N-20
  reference to these figures.
- **S3 — MOSTLY RESOLVED.** Rewards → Chain 1 + TLB-001 p.19 (correct); PostPaid → TLB-001 p.18 +
  `Facts/Orders_Facts.md`, no longer Chain 1 (correct). The CARC pointer, however, was repaired to
  "Chains 2 and 4" — which is what the Pass 2 audit itself prescribed, and it is wrong: see NS-1.
- **S4 — RESOLVED (with a new page-ref wrinkle, NS-2).** AI figures re-cited to `Facts/AI_Facts.md`
  and VDT_v2 **N-09** (verified: N-09 carries USD14mn+→USD30mn+, Group); N-06 retained only for the
  embedded-deployment point, which is exactly what N-06 evidences ("capability deployment...
  embedded capability, not a separate budget line", Group).
- **S5 — RESOLVED.** "realized 4.8% in Q1 2026" now cited inline (TLB-020, pages 4 and 11-12;
  `Topics/EBITDA.md`) — verified in `Topics/EBITDA.md` ("USD 130mn (4.8% of GMV, -9% y/y)...
  TLB-020, pages 4, 11-12") and the TLB-020 source text.
- **S6 — RESOLVED.** CARC gloss now states the monotonic dollar rise and the non-monotonic GMV-share
  path explicitly (1.5%→1.4%→1.6%, 2023→2024→2025; TLB-002, page 21) — verified against
  `Business_Relationships.md` line-level evidence (TLB-001 p.28; TLB-002 p.21).
- QA-overlap fixes spot-checked: NB-2 (4.6% as guided mid-range of 4.4-4.8% — range verified in the
  TLB-020 source text guidance table, but see NS-3 on the page number); NB-6 (ASM-015–020 → VDT_v2
  nodes N-19/N-13/N-42/N-43/N-37/N-44; ASM-021–028 → `Scenarios_v2` modules — verified against the
  register's Source/Basis column, both roles now correct); B6 MECE/ASM-033 non-additivity statement
  matches ASM-033's register wording.

## New findings — soft (3), no new hard failures

- **NS-1 (pointer).** CARC "USD89mn (2023) → USD155mn (2025) (Group; `Business_Relationships.md`
  Chains 2 and 4)" (§4.2 body + table row): Chain 4 (Talabat Pro → Retention → GMV) contains no CARC
  evidence. The full USD89→103→155mn trajectory (TLB-001 p.28; TLB-002 p.21) sits in **Chain 5**;
  Chain 2 carries only 103→155mn. Correct pointer: "Chains 2 and 5" (or Chain 5 alone for the 2023
  starting point). Note: this wrong chain number was prescribed by the Pass 2 audit itself (claims
  11/S3 both say "Chains 2/4") and was copied faithfully — an auditor-introduced pointer error, not
  a drafting regression. Resolvable within the cited note → soft.
- **NS-2 (stale page ref).** The AI >USD30mn (FY2025) figure is cited "TLB-002, page 15" (§4.2 body
  + table). `Facts/AI_Facts.md` corrected this page ref 15 → **16** on 2026-07-24 (per the Pass 2
  citation audit of Section 5) — a parallel correction the Section 4 fix cycle did not pick up.
  VDT_v2 N-09 hedges as "p.15-16". Update both occurrences to page 16. Resolves via the cited
  Facts note → soft.
- **NS-3 (page attribution).** "the guided mid-range of the disclosed 4.4-4.8% FY2026 range
  (TLB-020, page 16)" (§4.3): the 4.4%-4.8% guidance range sits on TLB-020 **page 14** (FY2026e
  guidance table; verified in `_source_text/20260512_talabat-Q1-2026-Results-Presentation.txt`);
  page 16 carries the "6.0% (Q4'25A) to a guided mid-range of 4.6%" quote (verified verbatim). Cite
  "(TLB-020, pages 14 and 16)". Same document, verified content → soft.

None of the three blocks Stage 10: in each case the number itself is disclosed, correct, and present
in the cited artifact; only the intra-artifact pointer (chain number / page number) is imprecise —
squarely the "imprecise-but-resolvable" soft category. There are no untraceable numeric claims, no
geography mislabels, no citations to `Proposed` assumptions, and no synthetic data.

## Observations (not findings against this draft — for the orchestrator/steward)

- **OBS-1.** The TLB-019 p.7 differently-based 25% pro-GMV-share figure (Q4'25) flagged inside Pass
  2's HF-1 remains un-reconciled by any DEC record. The draft does not cite it, so it does not block
  here, but the source-level basis discrepancy (25% Q4'25 vs. the 32%→49% Q1-series) is still open
  at the register/decision layer.
- **OBS-2 (register-level, for `decision-steward`).** ASM-016/N-13 assert that the +16pp/+20pp M1
  deltas share the six-market pre-Dec-2024 cohort exclusion. That exclusion is corpus-explicit for
  the frequency (Sep'24; TLB-012 p.17, TLB-013 p.8, TLB-016 p.9) and retention (July 2023 joiners;
  TLB-015 p.78, TLB-026 p.133) measurements, but TLB-019 p.10 (the delta pair, "Q4 2025 average")
  does not itself state its measurement population — and by Q4'25 pro was live in all eight markets.
  The draft traces to the Approved ASM-016 row and therefore passes; the row's population claim for
  the delta pair (and for TLB-019 p.11's 26%/28% figures) merits steward verification. Same-tier
  question (register assertion vs. source silence) → escalated as a note, not resolved here.
- **OBS-3 (optional polish).** In the §4.2 pro paragraph, the 32%→49% sentence sits directly after
  the cohort-tagged uplift sentence and carries its Group tag only via the provenance-note default
  and the table. Adding "(Group)" inline would remove the last adjacency ambiguity. Non-blocking.

## Result

**PASS.** HF-1, HF-2, and HF-3 are each genuinely resolved and independently re-verified at the
evidence layers; all six Pass 2 soft findings and the overlapping QA items are fixed (S3's CARC
sub-item superseded by NS-1). Three new soft findings (NS-1–3: one wrong chain number, two page-ref
imprecisions) are recorded for the next touch and do not block. Section 4 (v2) may proceed to
Stage 10; NS-1–3 should be folded into the next drafting touch, and OBS-1/OBS-2 are handed to
`decision-steward`.

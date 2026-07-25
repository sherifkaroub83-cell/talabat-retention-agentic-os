---
type: validation
section: 6
pass: "2-reverify"
status: PASS
date: "2026-07-25"
built_by: evidence-citation-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_06_Business_Model_and_Revenue_Streams.md
scope: "Independent re-verification (fresh thread) of the post-Pass-2 fix cycle — every hard/blocking
  finding from Citation_Audit_Section_06_v2_pass2.md (HF-1, SF-1–SF-5) and QA_Review_Section_06_v2_pass2.md
  (B1–B4), plus the CARC three-point series imported from Section 7's review, traced against the Facts
  layer, the Assumptions Register, and DEC-013 directly; every edited passage trace-checked for
  newly-introduced defects."
---

# Citation Audit — Section 6 (v2), Pass 2 Re-verification

Fresh-thread re-verification per `.claude/skills/citation-audit/SKILL.md`. Both Pass 2 reports were
read first (findings only), then every fixed passage was traced directly against the evidence layer —
`Facts/Talabat_Pro.md`, `Facts/Revenue.md`, `Facts/Advertising_Facts.md`, `Facts/Customer_Growth.md`,
`Facts/_raw/TLB-002_facts.md`, `Knowledge/Strategic/Cost Structure.md`, `Topics/Customer Economics.md`,
`Decisions/Assumptions_Register.md` (ASM-013 entry + 2026-07-25 re-establishment note),
`Decisions/Decision_Log/DEC-013_subscription-line-reclassification-reissuance.md`,
`Section_02_Business_Description.md` §2.3, and `vault/Architecture/Geographic_Evidence_Rules.md` —
not against the fix record's own claims.

## Verdict: PASS — all hard/blocking findings genuinely resolved; no new hard failure introduced

The section's citation base is clean for stage-10 purposes. Three non-blocking observations are
recorded at the end; none is a citation-audit failure.

---

## Per-finding resolution verification

### HF-1 / B1 — pro-GMV-share baseline "FY2024" → Q1 2025 (3 locations) — **RESOLVED**
All three locations now read "32% (Q1 2025) → 49% (Q1 2026)": §6.1 table cell ("Subscription fee &
Other Income" driver, Group-tagged), §6.3 "So what" paragraph, and the traceability row. Citations
moved off `Topics/Talabat Pro.md` to TLB-020 p.8 / TLB-014 p.14 as both Pass 2 reports required.
Verified verbatim against `Facts/Talabat_Pro.md`: TLB-020 p.8 "49% (Q1'26) vs 32% (Q1'25)";
TLB-014 p.14 "49% of platform GMV in Mar'26 from 32% in Mar'25". Consistent with the register's
ASM-021 correction note (2026-07-24) and `Value_Driver_Tree_v2.md` N-08. Grep confirms no residual
"FY2024→Q1 2026" label anywhere in the draft except inside the Fix record's quotation of the old
(pre-fix) wording, which is a historical record, not a live claim.

### B2 / SF-1 — two ~7% advertising figures, mismatched denominators — **RESOLVED**
§6.2's advertising bullet now presents the two data points separately, each with its denominator and
geography tag stated, and states explicitly they are "never compared same-basis":
1. Global leading-peer benchmark ~7% of **total GMV**, management-adopted medium-term target —
   verified: TLB-001 p.21 ("Global benchmark target for AdTech revenue is ~7% of GMV in the medium
   term"); TLB-015 pp.26/86/105 ("global leading peer benchmark ~7% penetration"). Tagged
   "external/global benchmark". The only same-denominator comparison drawn is against the Group's
   3.4–3.5% of total GMV — a legitimate like-for-like comparison.
2. UAE talabat mart adtech ~7% of **tMart GMV/sales**, Q4'25, double the company average — verified:
   TLB-002 p.10 ("In the UAE, advertising technology margins have already reached 7% of GMV for
   talabat mart"); TLB-019 p.7 ("tMart NMR ~7% of tMart sales in UAE"); TLB-014 p.19 ("reached 7% of
   GMV in Q4'25, double the company average"). Tagged "country-specific, UAE, tMart denominator",
   framed as attainability evidence only. "Double the company average" is internally consistent
   (2 × 3.4–3.5% ≈ 7%).
The traceability table now carries three separately-tagged rows (benchmark / UAE tMart / Group
3.4–3.5%), matching the fixed Section 4 treatment of the identical evidence.

### B3 — ASM-013/DEC-006 container status (4 cited locations) — **RESOLVED**
`DEC-013` verified on file: `status: approved`, `date: 2026-07-25`, `reissues: DEC-006`, drafted by
`decision-steward` per the DEC-010 precedent; its Impact section prescribes the exact wording the
draft now uses. The register's ASM-013 entry carries the matching 2026-07-25 re-establishment note
anchoring the row to DEC-013. In the draft, the full container formula — "`ASM-013`, still-valid per
the register's Pivot Reclassification, re-established under `DEC-013` (approved 2026-07-25)" —
appears at provenance notes 13.3, 13.5, 13.6, the Answer paragraph, the §6.1 decomposition heading,
and the traceability row (the §6.1 confidence note's abbreviated "`ASM-013` per `DEC-013`" sits five
lines below the full formula and is unambiguous). Grep confirms zero residual occurrences of
"ASM-013 ... status: Approved" or of DEC-006-as-active-resolver — the draft's only remaining
backtick-`Approved` usages are ASM-004 ("not `Approved`", correct) and the Fix record's quotation.
DEC-006 is referenced only as the superseded/historical container; DEC-013 added to See also.
The decomposition figures themselves re-verified: TLB-010 p.16 (USD 25,772,018 / USD 408,418,477);
TLB-011 p.4 (1.0% / 15.2% Q1 2026; 0.5% / 12.6% Q1 2025 comparators); ~0.2% reconciliation per
DEC-013's own re-verification note.

### B4 — "smallest of the four lines" — **RESOLVED**
Both §6.3 occurrences reworded. Arithmetic re-verified against the Facts layer: standalone
subscription fees USD 25.77mn is the smallest disclosed IFRS revenue line in Q1 2026 (vs. Service
59.5mn, Advertising 91.6mn, Delivery 164.6mn, Commission 343.5mn, Other direct income 408.4mn —
TLB-010 p.16); the combined "Subscription fee & Other Income" line at USD 1,397mn FY2025 is correctly
identified as the **largest** of the four fee-type lines (vs. 1,297 / 859 / 323 — TLB-002 p.20). The
+44% (FY2024) / +47% (FY2025) growth rates are now explicitly attributed to the combined line
("fastest-growing of the four lines in both years" — verified: +44% vs. +25/+29/+27 FY2024;
+47% vs. +22/+24/+32 FY2025; TLB-001 p.27, TLB-002 p.20, TLB-009 p.4), with the component-level
split correctly scoped to Q1 2025/Q1 2026 only. The §6.3 "So what" paragraph is internally
consistent with the reworded bullet and with §6.1's five-row convention.

### SF-2 — TLB-019 p.13 fee-mix range — **RESOLVED as specified (flagged-not-resolved footnote intact)**
The §6.1 flag paragraph still names both sides of the same-tier conflict verbatim (recorded ranges
re-verified against `Facts/Revenue.md`'s TLB-019 entry: Commission 14.2–16.2%; Delivery & Service
12.8–14.8%; Advertising 8.9–9.4%; Subscription & Other 3.3–3.5%), still declines to use the
discrepant range, and still states why. The Pass 2 one-row label-shift diagnosis is appended and
**explicitly marked as "a diagnosis to be verified against the TLB-019 page 13 source slide, not as
a resolution"**, with the conflict stated to "remain flagged, unused, and unresolved here". Routing
to `decision-steward` is recorded in both the flag paragraph and provenance note 13.6; the routing
artifact is the Pass 2 audit report itself (SF-2) — the same report-as-escalation mechanism DEC-013
cites for B3. The DEC record and Facts-layer correction remain open **outside this file**, as the
Fix record's residual list honestly states — see Observation 3 below.

### SF-3 — cross-sectional AED 194/814 causal gloss — **RESOLVED**
The "becomes multi-vertical is worth" gloss is gone. §6.4 now states the comparison as
cross-sectional spend ("multi-vertical customers spend roughly four times as much per month"), adds
an explicit selection-effect caution, and states the realizable conversion uplift is not disclosed
("evidences the size of the prize, not a guaranteed uplift"). Underlying figures re-verified clean
(TLB-026 pp.91/122, Group, September-2024 basis stated; 814/194 = 4.20 ≈ ">4x"; 12.8/3.8 = 3.37 ≈
"~3.4x").

### SF-4 — Group 3.4–3.5% advertising citation — **RESOLVED**
Now cited to TLB-002 pp.11/14/19 and TLB-011 p.4 in body and in a dedicated traceability row.
Verified against `Facts/Advertising_Facts.md`: TLB-002 pp.11/14/19 (USD 323mn, 3.4–3.5% of GMV
FY2025); TLB-011 p.4 (3.4% Q1 2026).

### SF-5 — "disclosed only for Q1 2025/Q1 2026" — **RESOLVED**
The corrected sentence verifies in full: the **%-of-GMV** two-way split is disclosed only at
Q1 2025/Q1 2026 (TLB-011 p.4, both quarters on file); the **dollar** split is additionally disclosed
for Q2 2025 (TLB-006 p.18: 15,461,238 / 323,988,969 — verified), Q3 2025 (TLB-007 p.19:
21,875,615 / 351,106,322 — verified), and the audited 485-day since-inception period (TLB-008 p.52 /
TLB-002 p.105 — verified, and the period is correctly stated as 3 September 2024–31 December 2025,
not FY2025, matching TLB-008 p.10). The load-bearing conclusion — no full-year FY2024/FY2025
pro-forma decomposition is disclosed — is retained and remains true.

### CARC three-point series (imported from Section 7's QA review) — **RESOLVED**
§6.4 and the traceability row now show USD 89mn (1.5% of GMV, 2023) → USD 103mn (1.4%, 2024) →
USD 155mn (1.6%, 2025), described as non-monotonic as a share of GMV. All three points verified:
2023 and 2024 verbatim at TLB-001 p.28 (`Facts/Customer_Growth.md`: "total CARC of USD 103mn or
1.4% of GMV (2023: USD 89mn or 1.5% of GMV)"); 2025 at TLB-002 p.21 (`Facts/_raw/TLB-002_facts.md`:
"CARC, internal metric: USD 155mn / 1.6% of GMV in 2025"; same series with both citations in
`Strategic/Cost Structure.md`). The cited pair (TLB-001 p.28; TLB-002 p.21) covers the full series.

### Non-blocking QA items spot-checked (N1–N4)
- **N1** — Answer and §6.4 now read "~40–41% of GMV FY2024–FY2025; 38%→39% Q1 2025→Q1 2026" —
  verified (TLB-001 p.27: 40%; TLB-002 p.20: 41%; TLB-020 pp.4/10 and TLB-011 p.4: 38%→39%).
- **N2** — new closing Answer sentence names Section 2's governing hypothesis; paraphrase checked
  against `Section_02_Business_Description.md` §2.3 — faithful ("AI-enabled, evidence-ranked,
  stage-gated allocation ... rather than ... undifferentiated").
- **N3** — 8% tagged Group, 2% tagged "external industry benchmark, disclosed within TLB-015,
  page 108 — not a talabat Group metric" — matches the Facts entry ("8% (leading vs. typical CPG
  investment of 2%)"); no arithmetic blending.
- **N4** — folded into B1's fix; verified above.

## New-defect trace of edited passages

Every edited passage was walked for newly-introduced claims. No new hard failure found. Confirmed in
particular: no geography-transfer violation introduced (Group figures Group-tagged; UAE/Qatar/Oman
country-tagged; no inferred-applicability transfer made; no "MENA"; no non-GCC segment figure used);
no period-mixing introduced (the 485-day period is explicitly distinguished from FY2025; Q1 figures
used at Q1 scope); the new DEC-013 references match the approved record verbatim; the new CARC
middle point carries the correct source (TLB-001 p.28, which discloses both 2023 and 2024).

## Observations (non-blocking; not citation-audit failures)

1. **SF-5 enumeration is conservative, not wrong:** dollar splits of Subscription fees vs. Other
   direct income also exist for Q1 2025 (TLB-005 p.18) and the 3 Sep–31 Dec 2024 stub period
   (TLB-004 p.49). The draft's "additionally disclosed for Q2 2025, Q3 2025, and the audited 485-day
   period" reads as in-addition-to the Q1s already covered, and the stub period cannot produce an
   FY2024 decomposition, so the load-bearing conclusion is unaffected. Optional precision add for
   the Section 14 full traceability table.
2. **Pro-GMV-share basis note:** the 32%→49% metric is reported on a talabat-only platform basis
   excluding InstaShop (TLB-014 p.14, footnote 5). The draft's "Group" tag is geographically accurate
   (all markets), mirrors the source's own "platform GMV" language and the fixed Sections 3/4
   treatment — recorded here so Section 14's traceability table can carry the footnote-5 basis.
3. **SF-2 residuals live outside this file and remain open:** the decision-steward DEC record and
   the `Facts/Revenue.md` / `Facts/_raw/TLB-019_facts.md` correction note have no artifact on file
   yet (Decision Log ends at DEC-013, which covers B3 only). The draft's "has now been routed"
   statement traces to the Pass 2 audit report (SF-2) as the escalation source and the conflict
   stays flagged-and-unused in the draft, so this does not block stage 10 — but it must close before
   submission-final, exactly as the Fix record's residual list states.

## Disposition

**PASS.** All Pass 2 hard/blocking findings (HF-1; B1–B4) and all soft findings applied in the fix
cycle (SF-1–SF-5, CARC import, N1–N4) are genuinely resolved with correct citations at correct
scope; no new hard failure was introduced. This report satisfies the fresh independent citation
re-check the draft's frontmatter and QA finding N5 required. Remaining before ✅ Done, outside this
audit's scope: (a) Pass 2 QA re-review of the changed passages (`qa-review-agent`); (b) the SF-2
decision-steward DEC record and Facts-layer correction (Observation 3).

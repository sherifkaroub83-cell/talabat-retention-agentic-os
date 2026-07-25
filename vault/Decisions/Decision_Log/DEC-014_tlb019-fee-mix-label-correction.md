---
id: DEC-014
status: approved
date: "2026-07-25"
owner: decision-steward (agent) — data-resolution within OS authority
supersedes: none
---

# DEC-014 — TLB-019 p.13 fee-mix figures: extraction label-shift confirmed against source text; Facts layer corrected

## Tooling note (read first)
Drafted by the `decision-steward` subagent, escalated by the Pass 2 citation audit of Section 6
(`vault/Validation/Citation_Audit_Section_06_v2_pass2.md`, finding SF-2, 2026-07-25), which carried a
probable-label-shift diagnosis explicitly marked *pending verification against the TLB-019 p.13 source
slide*. That verification was performed directly in this session against the ingested source text
(`vault/Knowledge/_source_text/20260213_talabat-Q4-FY25-Results-Presentation.txt`, PAGE 13 — the
Q4 & FY 2025 Results Presentation, 13 February 2026) plus independent arithmetic cross-checks against
disclosed dollar figures (TLB-002 p.20; TLB-009 p.4; TLB-029 source sheet
`_source_text/20250429_talabat-FY24-Quarterly-PL-Breakdown.txt`). `Read`, `Write`, `Edit`, `Glob` were
available; `AskUserQuestion` was not exercised — this is a data-resolution call within the OS owner's
documented authority (a documented internal discrepancy resolved in favor of verified source text, the
exact ASM-021 correction precedent), marked `approved` without user escalation, stated explicitly per
procedure step 4. No new judgment or figure is introduced beyond what the source itself discloses.

## Question
`Facts/Revenue.md`'s TLB-019 p.13 entry recorded "Revenue by fee type (% of GMV, FY'25): Commission
Fees 14.2-16.2%; Delivery & Service Fees 12.8-14.8%; Advertising & Listing Fees 8.9-9.4%; Subscription
Fees & Other Income 3.3-3.5%" — figures that conflict with the same Facts file's TLB-011 Q1 2026 mix
table (Advertising 3.4% vs. "8.9-9.4%") and with the corroborated 3.4-3.5%-of-GMV Group advertising
figure (TLB-002 pp.11/14/19; TLB-019 p.7 itself: 3.5% Q4'25). Section 6 v2 correctly flagged the
conflict without silently resolving it, but the evidence-ranking procedure (stage 7) requires same-tier
conflicts to be adjudicated by a Decision record. Is the Pass 2 audit's diagnosis — a one-row label
shift during extraction — correct, and if so, what are the true disclosed figures?

## Evidence — the source slide, verified and fully reconstructed
The slide (extraction PAGE 13, "GMV momentum translating into strong revenue growth") shows the
Management Revenue bar chart split by fee type for **four periods** — FY'24, FY'25, Q4'24, Q4'25 —
with a **point value per fee line per period**, not ranges. Extracted values, in slide label order:

| Fee line (slide label) | FY'24 | FY'25 | Q4'24 | Q4'25 |
|---|---|---|---|---|
| Commission Fees | 14.3% | 13.8% | 14.2% | 13.3% |
| Subscription Fees & Other Income | 12.8% | 14.8% | 13.5% | 16.2% |
| Delivery & Service Fees | 9.4% | 9.1% | 9.3% | 8.9% |
| Advertising & Listing Fees | 3.3% | 3.4% | 3.3% | 3.5% |
| Total ("% of GMV" markers on same slide) | 40% | 41% | 40% | 42% |

**Column-order determination:** the same page's GMV and Management Revenue charts extract their values
in [FY'24, FY'25, Q4'24, Q4'25] stream order (7,428 / 9,421 / 2,044 / 2,476 and 2,956 / 3,876 / 824 /
1,039), fixing the column assignment for the sixteen percentage values, which extract in the same
per-line order (14.3, 13.8, 14.2, 13.3 / 12.8, 14.8, 13.5, 16.2 / 9.4, 9.1, 9.3, 8.9 / 3.3, 3.4, 3.3, 3.5).

**Independent arithmetic cross-verification (disclosed dollars ÷ disclosed GMV), all 16 values:**
- FY'24 (TLB-029 dollars ÷ GMV 7,427.85mn): Commission 1,062.43 → 14.30%; Subscription & Other 952.36
  → 12.82%; Delivery & Service 695.61 → 9.36%; Advertising 245.62 → 3.31%; sum 39.80% (slide "40%"). ✓
- FY'25 (TLB-002 p.20 / TLB-009 p.4 dollars ÷ GMV 9,421mn): 1,297 → 13.77%; 1,397 → 14.83%; 859 →
  9.12%; 323 → 3.43%; sum 41.15% (slide "41%"). ✓
- Q4'25 (TLB-009 p.4 dollars ÷ GMV 2,476mn): 329 → 13.29%; 402 → 16.23%; 221 → 8.93%; 87 → 3.51%;
  sum 41.96% (slide "42%"). ✓
- Q4'24 (TLB-009 p.4 dollars backed out via its disclosed y/y rates, ÷ GMV 2,044mn): ≈291 → 14.2%;
  ≈275 → 13.5%; ≈190 → 9.3%; ≈67 → 3.3%; sum ≈40.3% (slide "40%"). ✓

Every slide value matches its computed counterpart at the 0.1pp rounding shown. The slide is therefore
fully reconstructed with no residual ambiguity.

## Determination on the SF-2 diagnosis
**Correct in substance — confirmed, with one refinement.** The recorded "ranges" are min–max spans of
the wrong lines' point values:
- Recorded "Delivery & Service Fees 12.8-14.8%" = actual **Subscription Fees & Other Income** FY'24 →
  FY'25 (12.8% → 14.8%). One-row shift confirmed exactly as diagnosed.
- Recorded "Advertising & Listing Fees 8.9-9.4%" = actual **Delivery & Service Fees** min–max across
  the four periods (Q4'25 8.9% to FY'24 9.4%). Confirmed as diagnosed.
- Recorded "Subscription Fees & Other Income 3.3-3.5%" = actual **Advertising & Listing Fees** min–max
  (3.3% to 3.5%). Confirmed as diagnosed.
- **Refinement — recorded "Commission Fees 14.2-16.2%" is a hybrid, not a clean one-row shift:** 14.2%
  is actual Commission Q4'24 and 16.2% is actual Subscription & Other Q4'25 (values adjacent in the
  extraction stream). The audit's expectation that actual Commission FY'24 ≈ 16.2% traced to TLB-029's
  recorded "16.19% of GMV" — but the source sheet's own row label is **"Commissions (% GMV-other
  direct income)"**, a different denominator (GMV less other direct income); Commission ÷ full GMV
  FY'24 is 14.30%, matching the slide. This refines the diagnosis without changing its conclusion.
- **Additional error the diagnosis implied but did not name:** the period label "FY'25" was itself
  wrong — the slide discloses no ranges at all; the entry conflated four periods' point values.

## Options considered
1. **Confirm the diagnosis and correct the Facts layer to the verified per-period point values**
   (chosen) — Fact tier, High confidence: source text directly verified, and every value independently
   corroborated arithmetically from separately disclosed dollar figures.
2. **Record the conflict as formally footnoted-unresolved** — rejected: the source text is on file and
   decisive; leaving a resolvable, fully-verified discrepancy open would violate the evidence-ranking
   preference for verified source text and force every future section to re-flag it (the failure mode
   SF-2 exists to close).
3. **Correct only the three cleanly-shifted labels** — rejected: the Commission "range" and the
   "FY'25" period label are also wrong; a partial correction would leave the entry still uncitable.

## Decision
The label-shift diagnosis is **confirmed** (with the Commission-line refinement above). The same-tier
conflict is resolved **in favor of the verified source text**, per the ASM-021 correction precedent
(same-tier conflict resolved in favor of the Facts/source layer, dated correction note, substance of
surrounding records unchanged). The Facts layer now records, cited to TLB-019 p.13:
- **FY'24 → FY'25:** Commission 14.3% → 13.8%; Subscription & Other 12.8% → 14.8%; Delivery & Service
  9.4% → 9.1%; Advertising 3.3% → 3.4% (total 40% → 41% of GMV).
- **Q4'24 → Q4'25:** Commission 14.2% → 13.3%; Subscription & Other 13.5% → 16.2%; Delivery & Service
  9.3% → 8.9%; Advertising 3.3% → 3.5% (total 40% → 42% of GMV).

## Rationale
The corpus could not resolve this from the consolidated Facts layer alone — the erroneous entry *was*
the Facts layer, so only a return to the ingested source text could adjudicate. Once verified, the
correction is not a judgment call between competing disclosed figures but the restoration of what the
source actually discloses; the previously "conflicting" TLB-019 entry now corroborates, rather than
contradicts, TLB-011's Q1'26 mix table and the 3.4-3.5% Group advertising figure. Correcting the Facts
layer (rather than leaving a permanent footnote) means future sections inherit the resolution instead
of re-flagging it — the explicit intent of the SF-2 escalation.

## Impact
- `vault/Knowledge/Facts/Revenue.md` (TLB-019 section): erroneous bullet replaced with the two
  verified per-period bullets plus a dated correction annotation quoting the original wording for the
  audit trail (edited 2026-07-25).
- `vault/Knowledge/Facts/_raw/TLB-019_facts.md`: original bullet struck through and preserved for
  provenance, verified bullets appended with a dated annotation (edited 2026-07-25).
- **No Assumptions Register row is created or changed:** the resolution restores disclosed Fact-tier
  figures; no planning assumption is introduced. (ASM-021 is cited here only as the correction-
  procedure precedent; its subject is unrelated.)
- **Section 6 v2 draft not edited** (explicitly out of this record's write scope, per the task
  routing): its §6.1 flag paragraph, provenance note 13.6, and traceability row should be updated at
  the section's next touch to cite this record as the resolution. Until then the draft remains safe —
  it flagged and declined to use the erroneous figures, and nothing it does use is contradicted by the
  correction.
- **Follow-up flag, not resolved here (out of escalated scope — flagged, not silently corrected):**
  `Facts/Revenue.md`'s TLB-029 entry records "Commission fees: USD 1,062.43mn (16.19% of GMV)", but
  the source sheet's row label is "Commissions (% GMV-other direct income)" — a different denominator
  (Commission ÷ full GMV FY'24 = 14.30%). A future Facts-precision pass should add the denominator
  qualifier; this partially misled SF-2's recomputation and is worth closing.
- The "Open decisions" list in
  `vault/Projects/Talabat-Group-AI-Investment-Allocation-Business-Plan.md` should record DEC-014 as
  resolved at its next update (tracker edit outside this task's write scope).

## Approval
**Approved 2026-07-25** by `decision-steward` directly — a data-resolution call within the OS owner's
documented authority (documented internal discrepancy resolved in favor of verified source text,
following the ASM-021 correction precedent), stated explicitly per procedure step 4. No user
escalation required: no strategic choice, no new figure, no assumption — only restoration of the
source's own disclosed values, each independently arithmetically corroborated.

## Links
- `vault/Validation/Citation_Audit_Section_06_v2_pass2.md` — SF-2, the escalation source and diagnosis
- `vault/Knowledge/_source_text/20260213_talabat-Q4-FY25-Results-Presentation.txt` — PAGE 13, the verified source
- `vault/Knowledge/_source_text/20250429_talabat-FY24-Quarterly-PL-Breakdown.txt` — TLB-029 sheet used in cross-verification (and the denominator-label follow-up flag)
- `vault/Knowledge/Facts/Revenue.md` — corrected TLB-019 entry (and the TLB-002/TLB-009/TLB-029 dollar figures used in cross-verification)
- `vault/Knowledge/Facts/_raw/TLB-019_facts.md` — annotated raw fragment
- `vault/Decisions/Assumptions_Register.md` — the ASM-021 correction-note precedent (2026-07-24)
- `vault/Projects/Business_Plan_Drafts_v2/Section_06_Business_Model_and_Revenue_Streams.md` — the flagged footnote awaiting its next-touch update
- [[Decision_Management_Layer|Decision Management Layer]]
- [[Revenue Model]]

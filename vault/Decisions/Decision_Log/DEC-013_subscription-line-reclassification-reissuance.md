---
id: DEC-013
status: approved
date: "2026-07-25"
owner: decision-steward (agent) — procedural re-issuance, no new analysis
supersedes: none
reissues: DEC-006
---

# DEC-013 — Procedural re-issuance of the "Subscription fee & Other Income" decomposition (Subscription fees + Own grocery & other income / Other direct income) under the active problem

## Tooling note (read first)
Drafted by the `decision-steward` subagent, escalated by the Pass 2 QA review of Section 6
(`vault/Validation/QA_Review_Section_06_v2_pass2.md`, finding B3, 2026-07-25). This closes the same
class of governance-hygiene gap `DEC-010` closed for `ASM-006`/`DEC-004`: the Assumptions Register's
Pivot Reclassification section classifies `ASM-013` as **still-valid** ("Content holds exactly
as-is" — a pure Group-level IFRS revenue-line reconciliation, unconnected to the retention-vs-
allocation question), but its formal Decision Log container, `DEC-006`, was swept into the
2026-07-23 blanket `superseded` flag applied to all of `DEC-001`–`007`, with no re-issuance on
file — a container-status/content-validity mismatch, not a content error. `Read`, `Write`, `Edit`,
`Glob` were available in this session; `AskUserQuestion` was not exercised because no new judgment
call or figure is introduced — this is a procedural re-issuance within `decision-steward`'s
documented data-presentation authority, marked `approved` without user escalation (stated
explicitly per procedure step 4).

## Question
Should the `DEC-006` reconciliation — the "Subscription fee & Other Income" combined revenue line
(TLB-001/002/003/009/029; USD 952mn FY2024, USD 1,397mn FY2025) decomposing into two components,
"Subscription fees" (talabat pro membership fees) and "Own grocery & other income"/"Other direct
income" (predominantly tMart's near-95%-take-rate owned-inventory revenue), per TLB-011's Q1 2026
GMV-mix table cross-checked against TLB-010's audited line items — have a Decision Log record whose
own `status` field is not itself superseded, given Section 6 (Business Model and Revenue Streams)
actively relies on it under the current Group-wide capital-allocation problem?

## Decision
**Yes.** `DEC-013` formally re-establishes `DEC-006`'s reconciliation, unchanged in substance, as
an active decision under the current problem. No new evidence was introduced and no figure was
re-derived — this record reissues `DEC-006`'s own Evidence re-examination, Options considered, and
Decision sections by reference, not by rewriting them (`DEC-006`'s content is preserved exactly as
originally approved, per this project's standing rule against editing a superseded decision's
Decision/Rationale fields).

**The reconciliation, restated:** Section 6 uses the four-line headline revenue-stream structure
(Commission fees; Delivery & Service fees; Subscription fee & Other Income; Advertising & listing
fees — the only convention with full FY2024/FY2025 coverage), while explicitly stating that
"Subscription fee & Other Income" decomposes into "Subscription fees" (1.0% of GMV Q1 2026 /
USD 25.77mn audited; 0.5% Q1 2025 comparator) plus "Own grocery & other income"/"Other direct
income" (15.2% of GMV Q1 2026 / USD 408.42mn audited; 12.6% Q1 2025 comparator), per TLB-011 p.4
cross-checked against TLB-010 p.16 — a decomposition of the same underlying audited data, not a
definitional change. The two-way split is evidenced only for Q1 2025/Q1 2026, never presented as a
full-year FY2024/FY2025 dollar split (that gap stays an explicit Open Question). High confidence
for the individually disclosed component figures (Fact tier); Medium confidence for the
cross-document decomposition/reconciliation logic itself, which remains a stated capstone
inference, not a verbatim disclosure.

**Verification performed before re-issuance** (against `vault/Knowledge/Facts/Revenue.md`, not new
analysis — a re-check that the Facts layer still supports the record being reissued):
TLB-010 p.16 sum 25,772,018 + 408,418,477 = USD 434,190,495 confirmed; TLB-011 p.4's 16.2%-of-GMV
combined mix at the same document's 39% conversion ratio implies ≈USD 435.2mn (~0.2% tolerance)
confirmed; the Q1 2025 comparator cross-check (TLB-005 p.18, USD 293.68mn vs. ≈USD 287.4mn, ~2%
rounding tolerance) confirmed; the Subscription-fees/Other-direct-income split confirmed present as
separate IFRS line items in every audited statement TLB-004 through TLB-010; TLB-014 p.9 footnote 2
(2026 IFRS-only reporting alignment) confirmed on file. All figures match `DEC-006` exactly.

## Rationale
This is a container-level fix, not a content decision — the underlying reconciliation never stopped
holding when the problem pivoted; only the record documenting it was swept into the blanket
`superseded` flag applied to all of `DEC-001`–`007` on 2026-07-23 without individual
re-examination. The Pivot Reclassification section then did that individual re-examination and
found `ASM-013` still-valid, but (unlike `ASM-006`, which received `DEC-010`) the formal
re-issuance was never executed — the Pass 2 QA review of Section 6 (finding B3) caught the gap.
`DEC-006` itself stays `superseded` and unedited, as the historical record of the original
Section 6 reconciliation; `DEC-013` is the fresh, active container the current problem's citations
should point to going forward. The `DEC-010` precedent is followed verbatim in kind: reissue by
reference, never rewrite the superseded record.

## Impact
- `ASM-013` in `Assumptions_Register.md` updated to reference `DEC-013` (active) alongside
  `DEC-006` (its original, now-historical container), with a dated changelog note — same treatment
  `ASM-006` received on `DEC-010`'s approval.
- Unlike `DEC-010`'s case, a live section **does** cite the old container: Section 6 v2 cites
  "`ASM-013` ... status: Approved" and "`ASM-013`/`DEC-006`" in four places (QA finding B3).
  Correcting those citations is the drafting-side fix the QA review routed to the Orchestrator,
  outside this record's write scope; once made, they should read to the effect of "`ASM-013`,
  still-valid per the register's Pivot Reclassification, re-established under `DEC-013`" — not
  "status: Approved" of a pre-pivot row.
- No figure changes anywhere; no Business Plan number is affected. The FY2024/FY2025 full-year
  split gap remains open exactly as `DEC-006` carried it.

## Approval
**Approved 2026-07-25** — procedural re-issuance within `decision-steward`'s own
data-presentation authority (identical in kind to `DEC-006`'s original approval basis and to
`DEC-010`'s precedent), no user escalation required since no new judgment call or figure is
introduced.

## Links
- [[DEC-006_subscription-revenue-line-reclassification]] — the original decision, preserved unchanged, historical
- [[DEC-010_2026-investment-total-reissuance]] — the procedural-re-issuance precedent followed here
- `vault/Decisions/Assumptions_Register.md` — `ASM-013`
- `vault/Validation/QA_Review_Section_06_v2_pass2.md` — finding B3 (the escalation source)
- `vault/Knowledge/Facts/Revenue.md` — the Facts-layer figures re-verified above
- [[Revenue Model]]
- [[Talabat Pro]]
- [[Quick Commerce]]

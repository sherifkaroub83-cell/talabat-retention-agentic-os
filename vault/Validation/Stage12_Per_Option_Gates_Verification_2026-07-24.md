---
type: validation
status: complete
created: "2026-07-24"
built_by: kpi-agent
scope: "Pipeline Stage 12 — per-option stage-gate re-verification against OPT-001..005, KPI_Tree_v2, DEC-009"
---

# Stage 12 verification — per-option stage gates vs. OPT records (2026-07-24)

**Task:** verify that each of the five Investment Option records
(`vault/Decisions/Investment_Options/OPT-001..005`) carries explicit stage gates — go/no-go criteria
tied to named `vault/Forecasts/KPI_Tree_v2.md` KPIs, with review cadence and funding consequences
consistent with `DEC-007`'s carried-forward review-cadence/kill-criteria methodology and `DEC-009`'s
approved funding sequence (OPT-002/OPT-003 near-term priority; OPT-001/OPT-005 continue-at-pace;
OPT-004 longer-horizon build).

**Method note on DEC-007:** `DEC-007` is `status: superseded` (a pre-pivot, Egypt-problem record).
Its *methodology* — reviews at talabat's quarterly disclosure cadence; qualitative,
trajectory-relative criteria for metrics with no baseline series; numeric thresholds set only via a
future Decision Log entry once a first real baseline reading exists — is applied here as the OS's
standing monitoring discipline, and each verified section says so explicitly rather than citing
DEC-007 as an active decision.

**Overall finding:** all five records carried only sketch-level gates — none had the full per-gate
structure (named KPI ID + threshold direction + review point + funding consequence). A
"Stage gates (verified 2026-07-24)" section was therefore added to **all five** records; the
original sketches were retained (marked formalized/superseded), never deleted. No new KPI was added
to KPI_Tree_v2; no numeric threshold was invented for any newly-instrumented metric.

## Per-option summary

| Option | Gates found (pre-verification) | Gates added (verified) | Flagged KPI gaps |
|---|---|---|---|
| OPT-001 dark-store densification | 3 sketch gates, valid KPIs (F8, O2, O1) but no review points/consequences; one ungrounded numeric floor ("~40% y/y" on O2) | 3 gates: F8 margin-drag containment within disclosed (0.5)-(0.7)pp band (2 consecutive quarters, gate to any upside acceleration); O2 growth-trend continuation (qualitative vs. disclosed 45-47% trend — the ~40% constructed floor withdrawn); O1+P5 deployment pacing vs. disclosed 130→160 pace and "broadly on plan" phasing. Quarterly reviews; consequences continue / hold uncommitted tranches / reallocate toward DEC-009 near-term priorities | None — fully governed by existing KPIs |
| OPT-002 pro Egypt/Iraq | 1 sketch gate (C10, valid) — no instrumentation precondition, review point, or consequences | 3 gates: C10 instrumentation precondition (live within pilot quarter 1; threshold to be set at first baseline reading); C10 directional-uplift gate at end of pilot quarter 2 (C5/C6 as labeled comparators only, never Egypt targets); P2 bucket containment. Consequences: continue/scale via new Decision entry, or stop pilot and reallocate (high reversibility must be exercised, not waived) | None — C10 exists precisely for this option |
| OPT-003 Food-leadership GCC-3 | 2 sketch gates — primary outcome metric has **no KPI ID**; dry-powder gate had no KPI linkage | 3 gates: retention-trend stabilization vs. the disclosed -4% y/y anchor (flagged-gap metric, qualitative, threshold at first recurring baseline reading; decisive read quarter 3); G5+G1 dry-powder governance precondition (documented trigger before any reserve deployment, else hold — upside "dry powder deployed" case stays unfunded); G2+F3 reallocation transparency + Food-GMV confirmation | **1 gap (re-confirmed):** country-level non-high-value M1 retention for UAE/Kuwait/Qatar has no KPI_Tree_v2 ID — the option's motivating Fact is ungoverned by the tree; recorded, not patched |
| OPT-004 advertising gap | 1 sketch gate (F6, valid) — geography caveat and consequences missing | 3 gates: pilot-market F6 trend toward the UAE ~7%-of-GMV reference (pilot-market reading is newly-instrumented at that geography; 7% is a country-specific benchmark used as labeled inferred-applicability reference, threshold at first baseline reading); Group F6 trajectory confirmation (with explicit OPT-003 Partner-economics-tension review on deceleration); P6 attribution precondition before scale-up. Per DEC-009: longer-horizon — hold at pilot scale on failure, never pull capital forward from near-term priorities | None — pilot-market F6 recorded as a geographic instrumentation note within F6's scope, not a new node |
| OPT-005 AI/personalisation | 2 sketch gates — **both referenced metrics with no KPI ID** (weakest of the five, consistent with DEC-009's measurement-quality finding) | 4 gates: P6 attribution precondition (discrete AI spend line before any above-pace funding); return-trend confirmation via the disclosed N-09 contribution trail proxied by F9/F10 (directional proxies only, never clean attribution; annual review Q1 2027); non-GCC effectiveness instrumentation via the Egypt model-tuning pilot before any non-GCC-targeted scaling; O9 infrastructure pacing (supporting indicator only) | **2 gaps:** (1) AI-attributable EBITDA contribution (N-09 trail) has no KPI_Tree_v2 ID; (2) non-GCC/Egypt personalisation-effectiveness metric non-existent in corpus and tree alike |

## Disposition of flagged gaps
Three gaps total (1 × OPT-003, 2 × OPT-005). Per Stage 12 rules they are recorded in the OPT records
and here — **not** added to `KPI_Tree_v2.md` by this pass. Whether to extend the tree (each candidate
would need a `Value_Driver_Tree_v2.md` node to trace to: the OPT-003 gap plausibly traces to
N-05/N-12; the OPT-005 gaps to N-09 and N-06/N-13 respectively) is a `kpi-agent` tree-revision plus
`decision-steward` disposition, flagged for the next pipeline pass.

## Compliance statement
- Every KPI cited in a verified gate exists in `KPI_Tree_v2.md` by exact ID (F8, O2, O1, P5, C10,
  C5, C6, P2, G5, G1, G2, F3, F6, P6, F9, F10, O9).
- No numeric threshold was set on any newly-instrumented KPI; every such gate is stated
  qualitatively with "threshold to be set at first baseline reading" and a Decision Log entry named
  as the mechanism — consistent with KPI_Tree_v2's escalation summary and DEC-007's carried-forward
  point 5.
- The only numeric elements used are disclosed figures ((0.5)-(0.7)pp band, 45-47% y/y, 130→160
  stores, -4% y/y anchor, ~7% UAE benchmark, USD14mn+→USD30mn+, 235TB/day), each used as a disclosed
  anchor/band, not an invented target. One previously-existing constructed number (OPT-001's "~40%
  y/y" floor) was withdrawn.
- Funding consequences in every record map to DEC-009's approved sequence (continue / hold /
  reallocate), and DEC-009's mandatory labeling of `ASM-029`-`033` ranges is undisturbed.

## Files touched
- `vault/Decisions/Investment_Options/OPT-001_talabat-mart-dark-store-densification.md`
- `vault/Decisions/Investment_Options/OPT-002_talabat-pro-acceleration-egypt-iraq.md`
- `vault/Decisions/Investment_Options/OPT-003_food-leadership-cvp-partner-retention-gcc3.md`
- `vault/Decisions/Investment_Options/OPT-004_advertising-monetization-gap-closure.md`
- `vault/Decisions/Investment_Options/OPT-005_ai-personalisation-capability-scaling.md`
- this note.

## Links
[[KPI_Tree_v2]] · [[Value_Driver_Tree_v2]] ·
[[DEC-009_investment-options-ranking-and-allocation-priority]] ·
`vault/Decisions/Decision_Log/DEC-007_section13-review-cadence-kill-criteria.md` (superseded;
methodology carried forward) · `vault/Architecture/Business_Plan_Generation_Pipeline.md` (Stage 12)

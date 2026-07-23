---
status: active
created: 2026-07-23
owner: bp-orchestrator (enforced), decision-steward (adjudicates disputes)
---

# Geographic Evidence Rules

> Formal artifact required by the 2026-07-23 strategic pivot (see `Problem_Charter.md` and
> `vault/Architecture/Repository_Impact_Assessment.md`). Referenced from `CLAUDE.md`'s standing
> instructions. This is the rulebook the future **Geographic Evidence Gate** (Phase 7) will check
> drafted content against — it does not itself gate anything yet, it defines what "correct" means.

## Why this exists

The business question changed from "Egypt customer retention" (a single-country problem, where
every figure was implicitly Egypt-scoped) to "how should talabat allocate its 2026 ~USD175m
investment programme across its 8 operating markets" (a Group-wide capital-allocation problem,
where most disclosed figures are **not** country-specific). Reusing the corpus without re-tagging
geography risks the single most likely error mode in this pivot: silently treating a Group-level
or GCC-level figure as if it were Egypt-specific, or vice versa. `vault/Forecasts/Value_Driver_Tree.md`
(superseded 2026-07-23) was built almost entirely on this exact conflation and is the documented
case study for why this rule now exists.

## The geography tags

Every Fact, Decision, Assumption, Forecast, or Research finding that carries a numeric or
directional claim must be tagged with exactly one of the following. Source: `vault/Knowledge/Entities/Countries.md`
and `vault/Knowledge/Topics/Segment Reporting.md`.

| Tag | Meaning | Composition (per the corpus) |
|---|---|---|
| **Group** | Consolidated across all 8 operating markets | Kuwait, UAE, Qatar, Bahrain, Oman, Jordan, Iraq, Egypt |
| **GCC** | talabat's GCC reportable segment | UAE, Kuwait, Qatar, Bahrain, Oman |
| **non-GCC (pre-FY2025)** | The residual segment before Egypt was carved out | Jordan, Iraq, **and Egypt** — Egypt had no standalone disclosure in this period |
| **non-GCC (FY2025 onward)** | The residual segment after Egypt became its own segment | Jordan, Iraq only — Egypt excluded from this bucket from FY2025 |
| **Egypt (standalone)** | Egypt's own reportable segment | Egypt only, disclosed from FY2025 Annual Report (TLB-002) / Q4-FY25 audited financials (TLB-008) onward |
| **country-specific (other)** | Any single named market outside Egypt (UAE, Kuwait, Qatar, Bahrain, Oman, Jordan, Iraq) | One country |
| **market-comparison** | An explicit multi-country comparative claim in the source itself (e.g. "Egypt is now our third largest market by GMV, after UAE and Kuwait," TLB-019) | Named set of countries, as stated |
| **external** | Market-research or competitor evidence not from talabat's own disclosures (IMARC, Mordor, press) | Whatever geography the external source itself defines — do not assume it matches talabat's segment definitions |
| **inferred-applicability** | An analytical inference that applies evidence from one geography to another where the corpus does not directly disclose the target geography's figure | Must name both the source geography and the target geography, and must be visibly labeled as inference, never presented as fact |

**The pre/post-FY2025 non-GCC split is not cosmetic.** Egypt moved out of "non-GCC" partway through
the corpus's timeline (see `vault/Knowledge/Topics/Segment Reporting.md`). Any claim using a
pre-2025 "non-GCC" figure implicitly includes Egypt; any claim using a FY2025-onward "non-GCC"
figure explicitly excludes it. Citing one as if it were the other silently changes what the number means.

## Failure patterns this rule set exists to catch

These are concrete, corpus-grounded traps — not hypothetical:

1. **Applying a Group-level uplift statistic to Egypt as if it were measured there.** Example: the
   talabat pro +28% order-frequency uplift (TLB-001, page 18) was measured in September 2024 —
   talabat pro did not launch in Egypt until February 2025. Using this figure as an Egypt-specific
   *fact* is wrong; using it as an Egypt-applicability *inference*, explicitly labeled and with the
   timing caveat stated, is legitimate. This exact conflation is why `Value_Driver_Tree.md` was
   superseded.
2. **Projecting Egypt's newly-disclosed segment profitability onto the Group**, or vice versa —
   Egypt's FY2025 swing to profitability (TLB-002, TLB-008) is a country-specific data point, not
   evidence about Group-level margin trends, and the Group's ~6.5% Adjusted EBITDA margin is not
   evidence about Egypt's segment margin.
3. **Treating "GCC" as a synonym for "the profitable core" and "non-GCC" as a synonym for
   "Egypt"** — non-GCC is a three-country bucket (or was, pre-FY2025); Jordan and Iraq figures are
   not Egypt figures.
4. **Mixing pre- and post-FY2025 Egypt figures without flagging the segment-reporting change** —
   see the pre/post split above.
5. **Using "MENA" as a stand-in for talabat's 8-market footprint.** talabat's disclosed geography is
   always one of the 8 named countries, the GCC/non-GCC segment split, or the Group total — never a
   broader "MENA" region the corpus itself does not use as a reporting category.
6. **Citing an external market-research figure (IMARC, Mordor) as if it used talabat's segment
   definitions.** External sources define their own market boundaries (e.g. "Egypt online food
   delivery market") that do not necessarily align with talabat's own segment or GMV definitions —
   tag these `external` and do not blend them arithmetically with `Group`/`GCC`/`Egypt` figures
   without an explicit, stated reconciliation.

## How to apply this

- **New Facts/Decisions/Assumptions/Forecasts:** state the geography tag inline, next to the
  citation, e.g. "*(Group; TLB-001, page 18)*" or "*(Egypt standalone, FY2025; TLB-002, page 100)*."
- **Inference, not fact:** any time evidence from one geography is used to reason about another
  (the normal, necessary case for a Group-wide plan built partly on richer GCC/Group data than
  thin Egypt data), write it as "*Applying the Group-level finding that X to Egypt would imply
  Y — this is an inference, not a disclosed Egypt figure.*" Never drop the qualifier.
- **Existing content:** Facts/, Entities/, Sources/, and Topic Notes already carry the correct
  underlying geography in their citations (this was never wrong) — this rule set governs how that
  geography gets *used* going forward in Decisions, Assumptions, Forecasts, and Business Plan prose,
  which is where conflation actually happens.
- **Enforcement:** the Phase 7 Geographic Evidence Gate will scan drafted Business Plan sections and
  Decision/Assumption/Forecast records for (a) missing geography tags on numeric claims, (b) Egypt-labeled
  claims sourced from Group/GCC evidence without an inference qualifier, and (c) pre/post-FY2025
  non-GCC figures used interchangeably.

## See also
- `vault/Knowledge/Entities/Countries.md` — the authoritative 8-market list and Egypt's segment-reporting history
- `vault/Knowledge/Topics/Segment Reporting.md` — the GCC/non-GCC/Egypt segment definitions this rule set is built on
- `vault/Knowledge/Topics/GCC vs non-GCC.md` — synthesis note on what's disclosed at each level (Phase 3 topic note)
- `Problem_Charter.md` — the pivot this artifact was created to support
- `vault/Architecture/Repository_Impact_Assessment.md` §0 — the evidentiary case for the pivot, built on exactly this geography confusion

---
type: architecture
status: approved
created: "2026-07-21"
updated: "2026-07-23"
---

# Decision Management Layer

Task 5 of the OS Architecture Design Phase. Defines the evidence hierarchy that every claim in the
future Business Plan must be traceable through, and the version-controlled repository that
implements it.

> **2026-07-23 pivot note:** the five-tier evidence model, the Assumptions Register schema, the
> Decision Log schema, and the superseded-decision workflow below are all problem-agnostic and
> remain unchanged. What's new is the **Investment Option** section below, added because the
> governing business problem changed from a single retention question to a capital-allocation
> question across multiple candidate investment options — see `Problem_Charter.md`. All 7
> pre-pivot Decision Log entries were marked `superseded` on 2026-07-23 (content preserved, not
> deleted); this layer starts logging fresh `DEC-` and `OPT-` records against the new problem.

## The five-tier evidence model

```
1. Repository Facts        vault/Knowledge/Facts/, Sources/   — disclosed, cited, immutable
2. External Research        vault/Research/                    — sourced this project, dated, confidence-scored
3. Forecasts                 vault/Forecasts/                   — derived, method-stated, scenario-tagged
4. Management Decisions      vault/Decisions/Decision_Log/       — user/team judgment calls, dated, owned
5. Business Plan              Outputs/                            — the only tier allowed to read from all four above
```

**Rule:** a tier may only read from the tiers above it (Forecasts may cite Facts and Research; a
Decision may cite Facts, Research, and Forecasts; the Business Plan may cite all four). No tier
writes upward. This is what makes the plan's claims traceable end to end — walk backward from any
sentence in `Outputs/` through exactly one Decision, Forecast, or Research record, down to a
`(DocID, page N)` citation or an explicitly labeled synthetic assumption.

This formalizes what `CLAUDE.md`'s synthetic-data rule and the drafting skill's "Golden rule"
already required informally; it gives them a structure to be enforced against instead of prose to
remember.

## Repository structure

```
vault/Decisions/
├── README.md                       — this layer's index (mirrors this doc, vault-local)
├── Assumptions_Register.md         — the single source of truth: every numeric assumption in use
├── _TEMPLATE-decision.md           — template for new Decision Log entries
└── Decision_Log/
    ├── DEC-001_<slug>.md
    ├── DEC-002_<slug>.md
    └── ...
```

### `Assumptions_Register.md` — schema

One row per assumption actually used anywhere downstream (a forecast growth rate, a market-size
figure adopted, a funnel-conversion estimate). Columns:

| Column | Meaning |
|---|---|
| `Assumption ID` | `ASM-###`, stable, never reused |
| `Statement` | The assumption in one sentence |
| `Value` | The number/choice |
| `Tier` | Fact / External Research / Forecast / Decision |
| `Source` | Link to the Facts note, Research Note, Forecast node, or Decision record that set it |
| `Confidence` | High / Medium / Low (see below) |
| `Status` | Proposed / Approved / Superseded |
| `Used in (BP sections)` | Which of the 14 sections consume it |
| `Last updated` | Date |

**Confidence levels** (applies across Research, Forecasts, and Decisions alike):
- **High** — primary disclosed source (talabat IR filing) or unanimous corroboration across ≥2 primary sources.
- **Medium** — reputable secondary source (market-research firm, major press), or a single primary source with no corroboration.
- **Low** — team estimate, synthetic/illustrative data, or a source outside the audited corpus (e.g. the secondary competitor corpus). Must carry the `CLAUDE.md` synthetic-data label wherever cited.

### Decision Log entry — schema (`_TEMPLATE-decision.md`)

```markdown
---
id: DEC-XXX
status: proposed   # proposed | approved | superseded
date: YYYY-MM-DD
owner: <name>
supersedes: <DEC-XXX or none>
---

# DEC-XXX — <one-line decision title>

## Question
What judgment call is being made, and why can't the corpus answer it alone?

## Options considered
1. Option A — evidence for/against, tier, confidence
2. Option B — evidence for/against, tier, confidence
(...)

## Decision
Which option was chosen, or how a conflict was resolved (e.g. "present both figures with the
discrepancy footnoted" is itself a valid decision — not every conflict must be resolved to a single
number).

## Rationale
Why this option over the others.

## Impact
Which Assumption Register row(s) this creates/updates; which Business Plan section(s) it unblocks.

## Approval
Team decisions may be marked `approved` by the OS owner. Decisions requiring user/team
judgment beyond the OS owner's authority stay `proposed` until confirmed by the user — mirrors the
vault's existing propose-then-approve convention for destructive edits.
```

## Investment Option — the primary decision unit (added 2026-07-23)

The pre-pivot Decision Log treated every judgment call as a one-off (a market-size definition, a
governing hypothesis). The capital-allocation problem is structurally different: the plan must
compare **multiple candidate uses of the same USD175mn envelope** against each other, not just
resolve isolated conflicts. An **Investment Option** is a candidate capital-allocation choice —
either one of the two disclosed top-level buckets (Everyday App, Food-leadership) or a specific
initiative/market allocation proposed *within* one of them — carried through the same
propose → evidence → decide → track lifecycle as a Decision Log entry, but with a richer schema
built for comparison.

**Where Investment Options live:** `vault/Decisions/Investment_Options/OPT-XXX_<slug>.md`, indexed
in `vault/Decisions/Investment_Options_Register.md` (parallel structure to `Decision_Log/` and
`Assumptions_Register.md`). An Investment Option is not a replacement for a Decision Log entry —
"which option did we choose and why" is still recorded as a `DEC-` decision that cites the
compared `OPT-` records; the `OPT-` record is the candidate itself, the `DEC-` record is the
resolution.

### Investment Option — schema (`_TEMPLATE-investment-option.md`)

```markdown
---
id: OPT-XXX
status: candidate   # candidate | scored | recommended | approved | rejected | superseded
category: <Everyday App | Food-leadership | Enabling capability>
date: YYYY-MM-DD
owner: <name>
---

# OPT-XXX — <one-line option name>

## Rationale
Why this option exists as a candidate — what problem or opportunity it addresses.

## Evidence
Citations (DocID, page N) or links to Topic Notes / Facts supporting this option's premise.
Tier-tagged per the five-tier model above.

## Geography
Group / GCC / non-GCC / Egypt-standalone / a named country / market-comparison — per
`vault/Architecture/Geographic_Evidence_Rules.md`. State explicitly if the option is proposed for
one market, a group of markets, or Group-wide.

## Value drivers
Which node(s) of `vault/Knowledge/Investment_Relationship_Map.md`'s chain this option is expected
to move (e.g. "partner selection depth," "order frequency," "multi-vertical adoption") — not a
revenue number, a mechanism.

## Required capabilities
What has to be built/scaled/operated for this option to work (e.g. dark-store density, a
subscription-tier feature, a commission-rate change).

## Cost
Dollar estimate or range, and which bucket/sub-bucket of the USD175mn envelope it draws from.
State explicitly if this is a disclosed figure or an assumption (cite the Assumption ID if so).

## Time to impact
Rough horizon (e.g. "quarters" vs. "1-2 years") — not a false-precision date, unless the corpus
discloses one.

## Complexity
Qualitative: Low / Medium / High, with the one or two reasons why.

## Dependencies
Other options, capabilities, or Decisions this one requires or blocks.

## Risks
What could make this option fail to deliver its value drivers, or produce an unintended effect
elsewhere in the chain.

## Confidence
High / Medium / Low, per the tier definitions above — reflects evidence strength, not desirability.

## Recommended allocation range
A range (e.g. "USD 10-20mn"), never a single point estimate, unless the corpus discloses an exact
figure for this specific option. State the range's basis (assumption ID, forecast scenario, or
explicitly "team judgment, unvalidated").

## Pilot recommendation
Whether this option should be piloted/staged before full-scale funding, and what the pilot would
test.

## Stage gates
The specific evidence or KPI threshold that would justify moving from pilot to scale, or from
scale to reallocation.

## KPIs
Which KPI Tree node(s) (see `vault/Forecasts/KPI_Tree.md`, once rebuilt in Phase 5) would show
whether this option is working.

## Status
See frontmatter. Track transitions here with dates.

## Review date
When this option should be revisited.
```

### Comparison and scoring framework

When multiple Investment Options compete for the same finite envelope (or the same sub-bucket),
the Decision Steward Agent scores them across the following criteria — **the score supports
judgment, it does not replace it.** No single blended numeric score should be presented as if it
were a precise ranking; use the scores to structure a written recommendation, not to auto-select
a "winner."

| Criterion | What it captures |
|---|---|
| Evidence strength | How well the option's premise is supported — tier + confidence per the five-tier model |
| Strategic alignment | Fit with the disclosed Everyday App / Food-leadership framing (TLB-020, TLB-014) |
| Expected CLV/GMV/margin impact | Directional, not a point estimate, unless a disclosed figure exists |
| Time to value | Per the option's "Time to impact" field |
| Scalability | Whether the mechanism plausibly extends beyond its initial scope (market, segment) |
| Market applicability | How many of the 8 markets it plausibly applies to, and whether that's evidenced or inferred (Geographic Evidence Rules apply) |
| Execution feasibility | Organizational/operational difficulty, independent of cost |
| Implementation risk | Per the option's "Risks" field |
| Data readiness | Whether the KPIs needed to monitor this option are currently measurable, or require new instrumentation |
| Reversibility | How easily the investment could be scaled back if early signals are poor |
| Measurement quality | Whether success/failure will be cleanly attributable to this option, or confounded with other concurrent investments |

**Scoring convention:** each criterion is rated High / Medium / Low (never a 1-10 number — a
false-precision numeric scale would misrepresent how uncertain most of these judgments are, given
the corpus's disclosed-evidence gaps documented throughout Phase 3's topic notes, especially
`Capital Allocation and Investment Governance.md`). The comparison table in a `DEC-` record that
resolves between multiple `OPT-` records should show all eleven ratings side by side, plus a
written rationale — never a summed/averaged score standing alone as the justification.

## Worked example — applying this to an already-known conflict

The Egypt category-share figure conflict (10x+ in some sources vs. 1x–4x+ in others, flagged in
`Topics/Egypt.md` and `Topics/Competition.md`) is exactly the kind of item this layer exists for.
Under the new process, the Evidence & Citation Agent would raise it, the Decision Steward Agent
would draft `DEC-XXX_egypt-category-share-figure.md` listing both source values with their tiers and
confidence, and either (a) select one with stated rationale, or (b) decide to present both with a
footnote — either way, an Assumption Register row exists and Section 3 cites `ASM-XXX`, not a bare
number. **No such decision has been drafted yet** — this is a worked example of the mechanism, not
an executed decision.

## Superseded-decision workflow

A `supersedes:` field existing on a Decision record is not enough by itself — without a defined
re-verification cascade, a superseded decision can leave already-drafted plan content citing an
assumption that's no longer current. When Decision Steward Agent marks `DEC-NEW` as superseding
`DEC-OLD`, it must additionally:

1. **Identify affected Assumption Register rows** — every row whose `Source` traces to `DEC-OLD`
   gets its `Status` set to `Superseded` and a new row (or an updated `Value`) created citing
   `DEC-NEW`, never silently overwritten in place (history must stay readable).
2. **Identify affected forecasts** — any node in `vault/Forecasts/Value_Driver_Tree.md` or scenario
   in `Scenarios.md` tagged with a now-superseded Assumption ID is flagged `stale` and handed to
   Forecasting Agent for re-derivation before it's cited again.
3. **Identify affected Business Plan sections** — cross-reference the Assumption Register's
   `Used in (BP sections)` column for every row touched in step 1; every listed section that has
   already reached 🟡 or ✅ status is flagged `needs re-verification` in the Project tracker.
4. **Required re-drafting** — only the specific sentences/exhibits that cited the superseded
   assumption need rewriting, not the whole section — Decision Steward Agent's handoff to
   `bp-orchestrator` must name the exact claims, not just the section number.
5. **Required QA** — a flagged section cannot return to ✅ Done without re-running pipeline Stage 9
   (Citation Verification) and Stage 11 (QA & Final Review) specifically on the changed claims;
   passing once on the old assumption does not carry forward.
6. **Required consistency re-verification** — if the superseded assumption was one of the 3–5 value
   mechanisms threaded through Sections 4/9/13 (the drafting skill's value-driver-logic rule), all
   three sections are flagged together, not independently, since they're required to stay mutually
   consistent.

This workflow has never been exercised (no decision has been superseded yet, since no decision has
been logged at all — see the Phase-scope note below) — it is specified now so Phase 7 doesn't have
to improvise it the first time a real conflict resolution changes mid-drafting.

## Interactions

- Written to by: Decision Steward Agent (owns), Forecasting Agent (proposes assumption rows),
  Research Agent (proposes assumption rows).
- Read by: every pipeline stage in `Business_Plan_Generation_Pipeline.md`, especially Stage 6
  (Decision Escalation) and Stage 8 (Drafting — every number cited must resolve to an Assumption ID).
- Validated by: Evidence & Citation Agent (citation-audit skill checks that every Assumption ID
  referenced in a draft actually exists and is `Approved`, not `Proposed`).
- **(Added 2026-07-23)** Investment Options (`vault/Decisions/Investment_Options/`) are written to
  by Decision Steward Agent, proposed by any agent surfacing a candidate allocation, and rolled up
  into `vault/Decisions/Investment_Portfolio_Register.md`, which the Financial Integrity Gate
  (Phase 7) checks for arithmetic consistency against the disclosed USD175mn envelope.

## See also
[[Agentic_OS_Architecture]] · [[Project Administration]]
- `vault/Decisions/Investment_Options_Register.md` — the Investment Option index this layer now maintains
- `vault/Decisions/Investment_Portfolio_Register.md` — the envelope-level rollup
- `vault/Knowledge/Investment_Relationship_Map.md` — the value-driver chain Investment Options are scored against

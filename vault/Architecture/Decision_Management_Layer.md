---
type: architecture
status: design-approved
created: "2026-07-21"
---

# Decision Management Layer

Task 5 of the Phase 6 architecture design. Defines the evidence hierarchy that every claim in the
future Business Plan must be traceable through, and the version-controlled repository that
implements it.

## The five-tier evidence model

```
1. Repository Facts        vault/Knowledge/Facts/, Sources/   — disclosed, cited, immutable
2. External Research        vault/Research/                    — sourced this project, dated, confidence-scored
3. Forecasts                 vault/Forecasts/                   — derived, method-stated, scenario-tagged
4. Management Decisions      vault/Decisions/Decision_Log/       — team/instructor judgment calls, dated, owned
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
Team decisions may be marked `approved` by the OS owner. Decisions requiring instructor/team
judgment beyond the OS owner's authority stay `proposed` until confirmed by the user — mirrors the
vault's existing propose-then-approve convention for destructive edits.
```

## Worked example — applying this to an already-known conflict

The Egypt category-share figure conflict (10x+ in some sources vs. 1x–4x+ in others, flagged in
`Topics/Egypt.md` and `Topics/Competition.md`) is exactly the kind of item this layer exists for.
Under the new process, the Evidence & Citation Agent would raise it, the Decision Steward Agent
would draft `DEC-XXX_egypt-category-share-figure.md` listing both source values with their tiers and
confidence, and either (a) select one with stated rationale, or (b) decide to present both with a
footnote — either way, an Assumption Register row exists and Section 3 cites `ASM-XXX`, not a bare
number. **No such decision has been drafted yet** — this is a worked example of the mechanism, not
an executed decision.

## Interactions

- Written to by: Decision Steward Agent (owns), Forecasting Agent (proposes assumption rows),
  Research Agent (proposes assumption rows).
- Read by: every pipeline stage in `Business_Plan_Generation_Pipeline.md`, especially Stage 6
  (Decision Escalation) and Stage 8 (Drafting — every number cited must resolve to an Assumption ID).
- Validated by: Evidence & Citation Agent (citation-audit skill checks that every Assumption ID
  referenced in a draft actually exists and is `Approved`, not `Proposed`).

## See also
[[Agentic_OS_Architecture]] · [[Project Administration]]

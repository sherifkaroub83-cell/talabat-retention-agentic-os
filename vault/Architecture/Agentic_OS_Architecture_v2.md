---
type: architecture
status: approved
created: "2026-07-22"
version: "2.0"
scope: "Evidence-based evolution of the Agentic OS architecture, derived exclusively from Phase 7's real pipeline execution. Does not redesign anything execution did not touch."
---

# Agentic OS Architecture — Version 2 (Evidence-Based Evolution)

**What this document is.** [[Agentic_OS_Architecture|Version 1]] was a design specification, written
before any pipeline execution. This document is its evolution, written *after* the first real
execution ([[Phase7_Pilot_Execution_Report_Section_03|Phase 7's pilot run]]), and every change in it
traces to a specific, cited piece of execution evidence — not to design preference. Version 1 is not
rewritten or deleted; it remains the historical record of the pre-execution design. Where execution
validated something exactly as designed, this document says so explicitly rather than silently
agreeing by omission.

**Reading order:** Task 1 (classification) and Task 2 (per-component validation) are the evidence
base; Task 3 (runtime adaptation) and Task 4 (the actual version-2 changes) are what that evidence
justifies changing; Task 6 (recalculated readiness) is the resulting scorecard.

---

## Task 1 — Engineering Review: Classifying Every Execution Finding

Eight categories, each finding assigned to exactly one, with the reasoning for that assignment made
explicit (not left to be inferred).

| # | Finding | Category | Why this category and not another |
|---|---|---|---|
| 1 | `bp-orchestrator`, once spawned as a subagent, had no `Agent`, `WebSearch`, or `WebFetch` tools available, despite its own frontmatter listing them | **Runtime Limitation** | This is an objective fact about what this execution environment permits a spawned subagent to do — it is not a flaw in the pipeline's logic (the 11 stages are still correctly sequenced) and not a coding error (nothing is "broken" in the agent `.md` files themselves). It is a constraint of the platform, discovered empirically. |
| 2 | The orchestration design specified recursive delegation (an orchestrator agent spawning further agents) as its *sole* mechanism, with no fallback, and this was never validated against the runtime before being specified | **Architecture Issue** | Distinct from #1: #1 is what the platform does; this is that the *design* assumed a capability without verifying it first, and provided no alternative execution path when that assumption failed. A more robust design would not have a single point of failure here. |
| 3 | Stage 9 and Stage 11 (citation audit, QA review) lost their independence property as a direct consequence of #1 — the same context that drafted Section 3 also reviewed it | **Process Improvement** | The *gate rule itself* ("Stage 11 is the only path to ✅ Done") is sound and unchanged; what needs to change is the *workflow* around how that gate gets satisfied when thread-isolation isn't available — a process/procedure fix, not an architecture rewrite. |
| 4 | TLB-014 and TLB-026 disagree with each other on Egypt's category share at the same reference point ("at IPO"), a sharper version of a discrepancy prior audits only partially characterized | **Knowledge Issue** | This is a fact about the corpus's internal consistency, unrelated to any agent, skill, or pipeline mechanism. |
| 5 | IMARC's Egypt online-food-delivery market-size figure (USD 542.9m) is arithmetically smaller than talabat's own disclosed single-platform Egypt revenue (USD 509.9m) | **Knowledge Issue** *(see also finding 12 below — the same event is also evidence of successful design)* | Same reasoning as #4 — a fact about external data, not the system. |
| 6 | Two vault wikilinks pointed at skill files (`.claude/skills/...`) as if they were vault graph nodes, violating the project's own established convention | **Implementation Bug** | This is a concrete, mechanical error — the convention exists, is documented elsewhere in the vault, and was simply not followed in these two instances. It has a direct, complete fix (already applied) and doesn't imply any design or runtime issue. |
| 7 | Section 3's McKinsey Lens hypothesis-traceability check could not complete because Section 2 (where the governing hypothesis is authored) does not exist yet | **Expected Behaviour** | The pipeline's own gate logic is *supposed* to produce exactly this outcome when a dependency isn't met — QA correctly flagged it as an open item to re-check later rather than fabricating a pass. This is the system working, not a defect. |
| 8 | Stage 5 (Forecast & Assumption Generation) was correctly marked "not applicable" for Section 3, with stated reasoning, rather than silently skipped or forced | **Successfully Validated Design** | The pipeline's own "a stage may report not applicable" rule (`Business_Plan_Generation_Pipeline.md`, Gate rules) was exercised for the first time and worked exactly as specified. |
| 9 | Citation audit found 0 hard failures across 19 checked claim groups; every Group-level statistic was correctly labeled as such rather than presented as Egypt-proven | **Successfully Validated Design** | This is the citation-audit skill and the underlying vault citation discipline doing precisely what they were designed to do, under real (not synthetic) drafting conditions. |
| 10 | Two real, pre-existing corpus conflicts (category-share, market-size) were routed through Decision records rather than silently resolved by picking a convenient number | **Successfully Validated Design** | This is the single most important positive result of the whole pilot — the Decision Management Layer's core purpose (stop silent gap-resolution) worked, under real analytical pressure, without a single agent thread being isolated to enforce it. |
| 11 | The `Research_Register.md`/Research Notes produced this run cite `Input_Data/` files directly (IMARC, Mordor, the competitor landscape doc, newsroom PRs) rather than freshly-retrieved live web results | **Repository Issue** | This is not a bug or a knowledge gap — it's a structural ambiguity in how the vault currently distinguishes "already-collected-but-uningested corpus material" from "genuinely new external research," which this execution made visible for the first time by actually needing to draw the line. |
| 12 | The evidence-ranking hierarchy, applied to the IMARC/talabat-revenue inconsistency (finding #5), correctly caught and flagged the inconsistency rather than citing the smaller, more "impressive-sounding" figure | **Successfully Validated Design** | The mechanism's job is exactly this — to catch inconsistencies under real evidence pressure, not synthetic test conditions. It did. |

**Summary:** 1 Runtime Limitation, 1 Architecture Issue, 1 Process Improvement, 2 Knowledge Issues, 1
Implementation Bug (already fixed), 1 Expected Behaviour, 1 Repository Issue, 4 Successfully Validated
Design instances. The ratio matters: **more of this pilot's findings confirm the design than
contradict it** — the single Architecture Issue is real and consequential, but it is one finding among
twelve, not evidence of a broadly flawed design.

---

## Task 2 — Architecture Validation, Component by Component

| Component | Execution result | Design correctness | Runtime behaviour |
|---|---|---|---|
| Knowledge Layer | **Validated** | Every evidence file needed for Section 3 existed, was correctly located via the skill's vault map, and was directly usable | No issues — reads are reads |
| Semantic Layer | **Validated** | Topics/Strategic/Entities notes correctly fed the drafting stage exactly as `business-plan-drafting`'s content map predicted | No issues |
| Memory Layer | **Validated** | `MEMORY.md`/`PROJECT_PROGRESS.md`/`SESSION_LOG.md` were correctly read for context; this pilot itself is now recorded in them | No issues |
| Agent Layer | **Partially validated** | The *documented procedures* inside each agent's `.md` (mission, inputs, outputs, rules) were followed faithfully and produced correct results when executed | The *delegation mechanism* (isolated agent threads via the `Agent` tool) was **invalidated** — it did not occur |
| Skill Layer | **Partially validated** | 6 of 8 skills' documented procedures were followed correctly and produced schema-correct artifacts | `external-research`'s live-sourcing assumption (`WebSearch`/`WebFetch`) was **invalidated**; the other 5 exercised skills had no tool-availability issue |
| Decision Layer | **Validated** | Schema, template, and OS-owner-approval latitude rules were applied correctly to two real, non-trivial conflicts, producing sound, well-reasoned records | No issues — this layer's design does not depend on thread isolation to function correctly |
| Research Layer | **Partially validated** | The Research Note schema and confidence-scoring mechanism worked correctly and self-capped honestly | The *sourcing assumption* (genuinely new, live-retrieved external data) was **invalidated**; what actually happened was corpus-provenance reclassification — see Task 1, Finding 11 |
| Forecast Layer | **Did not exercise** | Stage 5 was correctly marked not-applicable for this section; the layer's own design correctness remains completely unproven either way | Not exercised |
| Evidence Layer (five-tier model) | **Validated** | Every claim in the draft was correctly tier-labeled and the hierarchy was correctly applied to resolve two real conflicts | No issues |
| Validation Layer (citation-audit / QA checklists) | **Partially validated** | The *checklist logic itself* found specific, real issues — not a rubber stamp | The *independence assumption* built into "only a separate agent can grant ✅ Done" was **invalidated** by the same constraint as the Agent Layer |
| Business Plan Generation Pipeline (11-stage sequence) | **Partially validated** | The stage *sequence*, the gate rules (Stage 8 blocked on open gaps, Stage 11 the only path to Done, the "not applicable" allowance) all worked exactly as specified | The *delegation* underneath the sequence was **invalidated**, same root cause as above |
| Human-in-the-loop controls | **Partially validated** | The *latitude rules* (which decisions are OS-owner-approvable vs. require `AskUserQuestion`) were correctly applied — both real decisions this run were correctly self-approved as data-presentation calls | The actual `AskUserQuestion` escalation mechanism was **not exercised** — no decision this run needed it, so it remains untested at the tool-integration level |

**The pattern across every "partially validated" row is the same root cause**: agent-thread isolation
did not occur. Every other property of every layer — schema correctness, reasoning quality, gate
logic, citation discipline — validated cleanly. This is a narrow, well-understood gap, not a diffuse
one.

---

## Task 3 — Runtime Adaptation (execution strategy changes, not architecture rewrites)

| Execution dimension | Original assumption | What execution showed | Adaptation |
|---|---|---|---|
| Agent orchestration | `bp-orchestrator`, once invoked, delegates to specialists itself | Nested delegation didn't occur | The **top-level session** invokes each specialist agent directly — proven to work by the original `research-agent` smoke test, which *was* top-level-invoked |
| Execution order | 11 stages run in sequence | Sequence and gating logic worked correctly | No change — the order is validated |
| Delegation strategy | Recursive (orchestrator → specialists) | Recursive delegation unavailable to a spawned subagent in this runtime | Flat (top-level session → each specialist, following `bp-orchestrator`'s stage table as a checklist rather than as an actor) |
| Validation sequence | Stage 9 + Stage 11 each run once, by a separate agent thread by construction | Ran once, self-administered, independence lost | Two-pass protocol — see Task 4, Change 2 |
| QA independence | Assumed automatic (different agent thread) | Not automatic — must be deliberately re-established | Explicit Pass 2 (a freshly-invoked, separate top-level call) before a section is treated as submission-final, not just pipeline-"Done" |
| Review workflow | Single "✅ Done" state | A section can be "Done" in two meaningfully different senses (self-reviewed vs. independently verified) and the tracker didn't distinguish them | Project tracker legend gains a formal sub-state — see Task 4, Change 2 |

---

## Task 4 — Architecture Evolution (Version 2 Changes)

Four changes, each fully traced. Every other component not listed here received **No change
recommended** — see the closing table.

### Change 1 — Orchestration invocation pattern

**Previous Design** → `bp-orchestrator` is invoked as a subagent and delegates to `research-agent`,
`decision-steward`, `evidence-citation-agent`, `kpi-agent`, `exec-summary-agent`, and `qa-review-agent`
via its own `Agent` tool calls (`Agentic_OS_Architecture.md` §3.1's delegation map;
`.claude/agents/bp-orchestrator.md`'s original design).

↓ **Execution Evidence** → Phase 7: `bp-orchestrator`, once spawned, had no `Agent` tool available to
it. Zero of its intended nested delegations occurred. It adapted by self-executing each specialist's
documented procedure in-context instead.

↓ **Reason for Change** → A design whose core mechanism has no fallback for a real, encountered
runtime constraint cannot be relied on as specified. The constraint may or may not be permanent
(future harness versions, or different invocation contexts, might support nested delegation) — the
architecture should not assume either way going forward without re-testing.

↓ **New Design** → **Top-level-orchestrated execution.** The top-level Claude Code session — not a
spawned `bp-orchestrator` subagent — invokes each of the 7 specialist agents directly, in the sequence
`bp-orchestrator`'s own stage-ownership table specifies (`Business_Plan_Generation_Pipeline.md`).
`bp-orchestrator.md`'s documented mission, stage ownership, and rules remain the authoritative
*specification* the top-level session follows; only *who executes it* changes. `bp-orchestrator.md` is
not deleted or rewritten — a runtime-constraint note is added to it (see Task 5) recording this and
inviting a future re-test.

↓ **Expected Benefit** → Restores genuine agent-thread isolation, proven to work by the original
`research-agent` smoke test (top-level-invoked, fully isolated, passed on every dimension). This in
turn is the prerequisite for Change 2.

### Change 2 — Two-pass verification protocol

**Previous Design** → Stage 9 (Citation Verification) and Stage 11 (QA & Final Review) each run once,
performed by `evidence-citation-agent`/`qa-review-agent` respectively, with independence assumed by
construction (a separate agent thread with no stake in the draft passing).

↓ **Execution Evidence** → When Change 1's constraint applied, Stages 9 and 11 were self-administered
by the same context that drafted Section 3. The QA review still found real, specific, non-trivial
issues (not a rubber stamp) — but independence, the property the design relies on, was absent, and the
resulting file said so explicitly rather than presenting an unqualified "PASS."

↓ **Reason for Change** → Independence cannot be assumed; it must be deliberately re-established, and
the tracker needs to be able to say honestly which sections have it and which don't.

↓ **New Design** → **Two-pass verification.** Pass 1 runs in-line during drafting (fast, catches
obvious issues, may be self-administered if Change 1's fix isn't yet in effect for a given run). Pass 2
is a **freshly-invoked, separate top-level `Agent` call** to `evidence-citation-agent`/`qa-review-agent`
— with no access to the drafting context's reasoning, only the finished artifact — performed before a
section is treated as submission-final. The Project tracker's status legend gains a new distinction:
**✅ Done (self-reviewed)** vs. **✅ Done (independently verified)** — see Task 5 for the exact wording
applied to Section 3's own entry, updated to reflect this.

↓ **Expected Benefit** → Sections move fast during initial drafting without waiting on a second agent
call every time, while final submission quality is never certified on a self-review alone. This
mirrors a pattern already proven elsewhere in this project (the two-pass PR review cycles before the
Phase 6 architecture merge).

### Change 3 — Research Layer provenance-tier distinction

**Previous Design** → `research-agent` sources external data via live `WebSearch`/`WebFetch`;
`External_Research_Layer.md`'s confidence-scoring rubric implicitly assumes genuinely fresh,
independently-retrieved sourcing.

↓ **Execution Evidence** → Without live web tools, "research" in this run meant reclassifying
already-collected-but-uningested `Input_Data/` files (IMARC, Mordor, the competitor landscape doc,
official newsroom PRs) as Research Notes — a materially different, lower-independence sourcing method.
Every Research Note this run honestly flagged the limitation and self-capped at Medium/Medium-High
confidence as a result — but that honesty depended on the agent remembering to do it, not on a
structural rule.

↓ **Reason for Change** → "Pre-collected corpus file, newly classified" and "freshly retrieved via live
web search" are different provenance types that deserve tracking as a structural field, not just a
confidence-score side effect an agent might forget to apply.

↓ **New Design** → Add a `sourcing_method` field to the Research Note frontmatter schema
(`corpus-reclassification` | `live-web-retrieval`) and a matching column in `Research_Register.md`.
`External_Research_Layer.md`'s confidence rubric now states explicitly: `corpus-reclassification`
sourcing is capped at Medium/Medium-High regardless of the underlying source's reputability, because it
has not been independently re-verified as current.

↓ **Expected Benefit** → Converts an already-good practice (honest self-capping) from something
dependent on each agent's discipline into a structural, enforced rule — and gives every future
Research Note reader a one-glance answer to "was this actually looked up, or reclassified from what we
already had."

### Change 4 — Explicit wikilink-scope convention for content-producing stages

**Previous Design** → The convention "skills and agents live outside the Obsidian vault graph, never
`[[wikilink]]` them" is established by precedent across the vault (`Project Administration.md`,
multiple prior fixes) but never stated as an instruction anywhere a drafting agent would read it.

↓ **Execution Evidence** → `bp-orchestrator` produced two broken wikilinks doing exactly this
(`[[Citation_Audit]]`, `[[QA_Review]]`, pointing at skill files). Caught and fixed during independent
verification of the pilot's output.

↓ **Reason for Change** → An unwritten convention gets violated by exactly the kind of agent this
project now runs. The fix is cheap and prevents a recurring, low-severity defect class (the same class
already hit once before, in the README/Templates basename collisions).

↓ **New Design** → One line added to `Business_Plan_Generation_Pipeline.md`'s Stage 8/9 guidance (see
Task 5): "Skills and agents are not vault graph nodes — reference them as plain backtick paths, never
as `[[wikilinks]]`."

↓ **Expected Benefit** → Removes this defect class from the pipeline's own drafting stages going
forward.

### No change recommended (execution validated these exactly as designed)

- **Knowledge Layer** — evidence assembly worked correctly against the existing vault map.
- **Semantic Layer** — Topics/Strategic/Entities notes fed the drafting stage exactly as designed.
- **Memory Layer** — no issues of any kind.
- **Decision Layer schema and OS-owner-approval latitude rules** *(distinct from the independence
  question, which is Change 2)* — both real decisions this run were correctly scoped, evidenced, and
  approved per the documented rules.
- **Evidence Layer's five-tier hierarchy and tier-tagging discipline** — applied correctly under real
  analytical pressure, including catching a genuine inconsistency.
- **The Business Plan Pipeline's 11-stage sequence and gate rules** *(distinct from the delegation
  mechanism underneath them, which is Change 1)* — Stage 8's gap-blocking, Stage 11's exclusive path to
  Done, and the "not applicable" allowance all worked exactly as specified.
- **`business-plan-drafting`'s Section 3 content map** — every named vault note was correct and
  sufficient; no section of the map needed correction.
- **Forecast Layer** — not exercised this run; no change is recommended for something that hasn't been
  tested, in either direction.

---

## Task 6 — Recalculated Readiness Metrics

Each figure is compared against the pre-Phase-7 baseline (`Independent_Project_Compliance_Report.md`
v3), with the specific execution evidence behind every change stated — not asserted.

| Metric | Pre-Phase-7 | Post-Phase-7 | Why it moved |
|---|---|---|---|
| **Structural Maturity** | 90% | **92%** | The Decision/Research layer schemas are now proven *usable*, not just internally consistent on paper — real rows were written into them without needing any schema correction. Small movement because structure was already strong; this confirms it rather than adding new structure. |
| **Operational Maturity** | 30% | **45%** | One full section moved through 9 of 11 stages for real; the Decision Layer went from 0 real entries to 2 well-reasoned ones; the Research Layer went from 1 smoke-test entry to 4 real (if degraded) ones; 5 of 8 skills' procedures were exercised for the first time. Capped well below "mature" because the central open question — does agent-thread isolation actually work — was invalidated, not resolved, this run. |
| **Business Plan Generation Readiness** | 35% | **42%** | Direct evidence the pipeline *can* produce a citation-clean, McKinsey-Lens-compliant section exists for the first time — 1 of 14 done. Still capped because that one section is self-reviewed, not independently verified, and 13 sections remain fully untouched. |
| **Agent Validation Coverage** | 1 of 8 tested (12.5%) | **Procedure-level: 5 of 8 (62.5%)** — `bp-orchestrator`, `research-agent`, `decision-steward`, `evidence-citation-agent`, `qa-review-agent`. **Thread-isolation level: still 1 of 8 (12.5%)**, unchanged | Reported as two separate numbers deliberately — conflating them would overstate progress. Phase 7 proved procedures, not isolation; isolation for agents 2–5 above was invalidated, not validated, this run. |
| **Skill Validation Coverage** | 1 of 8 (12.5%) | **6 of 8 (75%)** | `business-plan-drafting`, `external-research`, `decision-log`, `evidence-ranking`, `citation-audit`, `qa-review` all had their documented procedures exercised and produced correct, schema-conformant output. Only `forecast-builder` and `session-end` remain untested. This is the single largest, least-caveated improvement from this pilot. |
| **Pipeline Validation Coverage** | 0 of 11 stages ever run, as a sequence | **9 of 11 stage-types substantively completed in one real run; 2 correctly marked not-applicable; 0 of 11 yet independently re-verified a second time (n=1)** | The sequence and gate logic are now proven workable end-to-end once — a real, meaningful result — but a single successful run does not establish reliability. Pilot 2–4 (Task 8) exist specifically to raise n above 1. |

**Overall reading:** this pilot moved the system from "designed" toward "proven," concentrated almost
entirely in the Skill Layer and in the specific claim "the pipeline's reasoning and gating logic work."
It did **not** move the system's most consequential open question — genuine multi-agent thread
isolation — forward at all; it invalidated the assumption that this would just work, which is itself
valuable, evidence-grounded information, not a regression.

---

## See also
[[Agentic_OS_Architecture]] · [[Business_Plan_Generation_Pipeline]] · [[Phase7_Pilot_Execution_Report_Section_03]] · [[Implementation_Roadmap]] · [[Project Administration]]

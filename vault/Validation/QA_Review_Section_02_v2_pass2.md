---
type: validation
section: 2
pass: 2
status: FAIL
date: "2026-07-24"
built_by: qa-review-agent
target: vault/Projects/Business_Plan_Drafts_v2/Section_02_Business_Description.md
---

# QA Review — Section 2 (Business Description), v2 draft — Independent Pass 2

**Verdict: FAIL — 3 blocking findings, 4 non-blocking findings.**

Independence statement: this review was formed entirely from files on disk
(`Section_02_Business_Description.md`, `AI_Business_Plan_Template.md`, both SKILL files,
`Problem_Charter.md`, `Geographic_Evidence_Rules.md`, the three gate templates,
`Assumptions_Register.md`, `Investment_Options_Register.md`, `DEC-009`, `DEC-010`,
`Topics/2026 Investment Programme.md`, and `Citation_Audit_Section_02_v2.md`), with no access to the
drafting session's reasoning. No prior QA review of the v2 draft exists
(`QA_Review_Section_02.md` covers only the superseded pre-pivot v1 section); the citation audit on
file is explicitly self-verified by the drafting session, not independent.

---

## 1. Template completeness — PASS

All six required sub-bullets for Section 2 are present and substantive:

| Template requirement | Where | Verdict |
|---|---|---|
| Industry overview and opportunities for AI adoption | §2.1 | Present — Group marketplace context plus a specific, evidenced AI-for-decision-support opportunity |
| Problem statement, decomposed MECE | §2.2 | Present, with explicit MECE rationale |
| Governing hypothesis ("We believe [X] will [Y] because [Z]") | §2.3 | Present, in the exact required form, stated in bold |
| Core features and benefits | §2.4 | Present — five features, each tied to a real artifact |
| Business model | §2.5 | Present — "internal capability," a listed template option, with evidenced rationale |
| Current business stage | §2.6 | Present — established/mature underlying business, pilot-stage capability |

## 2. McKinsey Lens — PASS with notes

- **Pyramid Principle:** conclusion first — the "Answer, stated first" block leads. Pass.
- **MECE:** §2.2's four-way decomposition (cross-bucket / within-bucket cross-initiative /
  cross-market / timing-staging) is a legitimate dimensional decomposition of the allocation decision,
  and the draft states why it is MECE. Note (non-blocking, N3 below): the closing claim "no decision
  belongs to more than one" slightly overstates — a specific initiative-in-market funding decision
  touches dimensions 2, 3, and 4 simultaneously; the dimensions are orthogonal, not the decisions.
- **Hypothesis-driven:** §2.3 explicitly assigns proof duties to Sections 4/9/12/13. Pass.
- **Value-driver traceability:** the hypothesis names GMV, EBITDA, and CLV as its impact variables,
  consistent with the `Value_Driver_Tree_v2.md` chain Sections 4/9/13 are built on. Pass at
  section scope (end-to-end check re-runs at whole-plan scope).

## 3. Citation audit consumption — BLOCKING (see B3)

`Citation_Audit_Section_02_v2.md` status is "OPEN → FIXED (**self-verified** re-check, 2026-07-23)"
and states in terms that "a genuinely independent citation-audit re-check (a fresh
`evidence-citation-agent` thread) is still required before Section 2 can be marked
citation-verified." That independent re-check is not on file. My own spot-check of the three
self-verified fixes confirms two fully applied (N-06 re-cited to `Value_Driver_Tree_v2.md` in §2.1
and §2.5; the "in-house" AI claim correctly rewritten as inherited from Delivery Hero SE's shared
stack) but found the third **only partially applied**, contrary to the audit's closure claim — see B3.

## 4. Staleness — acknowledged, non-blocking

No `vault/Research/Notes/` are cited. However, `Topics/AI.md` (cited in §2.5 and the traceability
table) was flagged by the citation audit as a stale pre-pivot note (its "Why It Matters" prose still
argues the retired Egypt-retention framing) and forwarded to `research-agent` for a Group-wide
refresh. Acknowledged here per procedure; the specific claim Section 2 draws from it (Delivery Hero
shared-stack inheritance) is itself verified and pivot-neutral. Not a fail; refresh remains owed (N1).

## 5. Anti-patterns checklist — 2 hits (both blocking, B1 and B2)

Checked all 16 items in `.claude/skills/business-plan-drafting/SKILL.md`'s Anti-patterns list.
14 clear. Hits:

- "❌ Citing an Assumption Register row's status incorrectly — check `Assumptions_Register.md`
  directly rather than assuming; as of 2026-07-23 all of `ASM-015`–`033` are `Approved`" → **hit**,
  §2.4 (finding B1).
- "❌ Refusing to state a recommended funding sequence at all — `DEC-009` requires the plan to commit
  to one narratively" → **partial hit at section scope** (finding B2): the hard requirement sits on
  Sections 9/12, but Section 2's body affirmatively frames neutrality as deliberate
  ("presents the five options and their ranking narratively, not as a committed... funding
  sequence") against a decision that is no longer open, and its own addendum concedes the fix is owed.

## 6. Problem Consistency Gate (section scope) — PASS (8/8)

| # | Check | Result |
|---|---|---|
| 1 | Problem statement matches `Problem_Charter.md` (Group-wide USD175mn allocation, not Egypt-retention) | Pass — the Answer block and §2.2 restate the charter's problem and decision question faithfully |
| 2 | Geographic scope: Group across 8 markets, Egypt as worked example, no "MENA" | Pass — eight markets named and cited; "MENA" absent; "the region's Everyday App" appears only inside a verbatim, cited management quote (TLB-020 p.16) |
| 3 | Decision question matches the charter | Pass — §2.2's four sub-problems are exactly the charter's allocation question decomposed |
| 4 | Investment envelope matches disclosed figures, no invented sub-splits presented as disclosed | Pass — USD175mn = ~120 + ~55 throughout, consistent with `DEC-010`; §2.2 problem 1 explicitly labels the split "a constraint, not a variable"; no `ASM-029`–`033` dollar ranges appear |
| 5 | Evidence-category discipline (facts vs. inferences vs. decisions vs. assumptions vs. forecasts) | Pass — categories consistently labeled; the register-status *currency* error is logged separately as B1, not a category blend |
| 6 | Output requirements match the charter (ranges/staged funding, no false-precision allocation) | Pass — §2.6 quotes the charter's evidence-limitation verbatim |
| 7 | No superseded artifact cited as current | Pass — cites `Value_Driver_Tree_v2`/`Scenarios_v2`/`KPI_Tree_v2` and active registers only; `Topics/AI.md` is stale-but-active, not superseded (N1) |
| 8 | Pre-pivot references clearly marked historical | Pass — frontmatter `supersedes_note` does this explicitly |

## 7. Financial Integrity Gate (section scope) — PASS (11/11, one note)

| # | Check | Result |
|---|---|---|
| 1 | Allocation totals reconcile | Pass — 120 + 55 = 175, matching `DEC-010`'s reissued reconciliation |
| 2 | Scenario arithmetic consistent | Pass (n/a — no scenario figures shown in this section) |
| 3 | Units consistent | Pass — USD mn and %-of-GMV never silently mixed |
| 4 | Currency stated/consistent | Pass — USD throughout |
| 5 | Time periods stated, not mixed | Pass — FY2024, FY2025, FY2026-guidance each labeled |
| 6 | Percentage logic correct | Pass — margin figures consistently "% of GMV" |
| 7 | No double counting | Pass |
| 8 | No additive uplift stacking | Pass — no uplift statistics combined |
| 9 | Revenue/GMV/gross profit/EBITDA kept distinct | Pass |
| 10 | No unlabeled false precision | Pass, with note N2 — "6.0%→4.6%" drops the "~" its source (`Topics/2026 Investment Programme.md`: "~4.6%") carries, in §2.3 and the traceability table |
| 11 | `DEC-008` respected | Pass — the ~2.2:1 bucket weighting never appears as a quantified exhibit; the section's only bucket figures are the disclosed ~120/~55, and §2.3 explicitly defers headline financials to Section 9 under `DEC-008` |

## 8. Geographic Evidence Gate (section scope) — PASS (9/9)

| # | Check | Result |
|---|---|---|
| 1 | Every numeric/directional claim geography-tagged | Pass — GMV, EBITDA margins, the programme, the eight-market list are all stated at Group level with Group-level sources |
| 2 | No Group/GCC figure presented as country-specific | Pass — Egypt appears only in the market list and via `OPT-002` (which itself carries the inferred-applicability tag in the options register) |
| 3 | No country figure presented as Group-representative | Pass |
| 4 | Pre/post-FY2025 non-GCC not mixed | Pass — non-GCC appears only as a named disclosure *level*, not as a figure |
| 5 | Time period of geo-tagged claims stated | Pass |
| 6 | No unsupported metric transfer | Pass |
| 7 | Inferences labeled in prose | Pass (no cross-geography inference is asserted in this section) |
| 8 | No "MENA" stand-in | Pass — term absent except inside a verbatim quoted management phrase ("the region's"), cited |
| 9 | No external market-research figures blended | Pass — none used |

---

## Findings

### Blocking (any one of these fails the review)

**B1 — §2.4 misstates the current status of `ASM-015`–`028`.** The draft states these assumptions are
"held to `Proposed` status pending human approval before any number is cited as settled."
`Assumptions_Register.md` shows all fourteen rows moved `Proposed` → `Approved` on 2026-07-23. The
register's own note protects *historical* framing from retroactive rewriting, but a section
proceeding to ✅ Done and publication cannot present a reader-facing status claim that is false at
publication time — and the drafting skill's anti-patterns list names exactly this error. Fix: restate
as Approved (2026-07-23) with their confidence ratings, or explicitly date-stamp the status claim as
of drafting and add the current status.

**B2 — the body treats `DEC-009` as still open; the section never states the approved recommended
sequence.** The provenance note frames the section's neutral presentation ("the five options and
their ranking narratively, not as a committed... funding sequence") as conditional on `DEC-009` being
`proposed`; only a header addendum records the approval, and the body prose (§2.2, §2.3, §2.6) still
presents the ranking without ever naming `DEC-009`'s approved tiering (OPT-002/OPT-003 near-term
priority; OPT-001/OPT-005 continue-at-pace; OPT-004 longer-horizon). The addendum itself concedes: "a
future drafting/QA pass should confirm this section explicitly commits to the sequence rather than
only presenting the ranking neutrally, and should not treat DEC-009 as still-open in future
revisions." This is that pass; the section does not so commit. Fix: reconcile the provenance framing
with the approved decision and have the body state the recommended sequence narratively (no
`ASM-029`–`033` dollar ranges — those stay out per `DEC-009`'s disclosure rule).

**B3 — no independent citation re-check on file, and the self-verified audit contains one inaccurate
closure claim.** `Citation_Audit_Section_02_v2.md` closed its three hard failures via self-check by
the same session that drafted the section, and itself states an independent re-check is required
before the section can be marked citation-verified. My spot-check found the audit's claim that "the
IPO claim now cites TLB-025... in both locations" is not true of the draft: §2.6's "(IPO November
2024; FY2025 Adjusted EBITDA margin ~6.5% of GMV)" still carries no inline TLB-025 citation (only the
traceability-table row covers it). Minor in substance, but it demonstrates the self-verification is
not equivalent to an independent pass. Fix: run a fresh `evidence-citation-agent` thread on the
current draft; add the §2.6 inline cite (or have the audit correct its closure claim).

### Non-blocking

**N1 — `Topics/AI.md` staleness.** Pre-pivot prose flagged by the audit and forwarded to
`research-agent`; the specific claim Section 2 uses from it is verified. Refresh remains owed before
whole-plan publication.

**N2 — false-precision nuance on the margin bridge.** "6.0%→4.6% of GMV guided" (§2.3, traceability
table) should read "~4.6%" as the source states, or align to the disclosed 4.4–4.8% guidance range.

**N3 — MECE rationale overstatement.** §2.2's "no decision belongs to more than one [category]"
should be softened to claim orthogonality of the four decision *dimensions*, since a single
initiative-in-market funding decision engages dimensions 2–4 simultaneously.

**N4 — forwarded, not re-resolved.** `Value_Driver_Tree_v2.md`'s own "45 nodes" arithmetic footnote
(41+6=47 vs. 45, explained via a structural cross-reference) remains an upstream forecasting-layer
item, already forwarded by the citation audit; out of this section's scope.

---

## Convergence/divergence with prior review (read after findings were formed)

No independent Pass 1 QA review of the v2 draft exists — the only prior artifacts are the draft's
own self-review notes and the self-verified `Citation_Audit_Section_02_v2.md`. Convergence: my
independent geography check reached the same clean result as the audit's; the audit's three hard
failures were substantively fixed as claimed except the §2.6 IPO inline cite (divergence — the audit
recorded that fix as complete in both locations; it is complete in one). Divergence: the audit's
dependency flags (#12, #19, #24) treated `DEC-009`/`ASM-015`–`028` approval as the unblocking event;
those approvals have since landed, but the draft's prose was never reconciled to them — B1/B2 are new
findings no prior pass recorded.

## Disposition

**FAIL.** Handed back to the Orchestrator with the three blocking fixes above. Per the two-pass
protocol this reviewer does not edit the draft. Section status in the tracker remains 🟡
(drafted, needs verification); it may not move to ✅ Done until B1–B3 are resolved and a passed
review is on file. The three gates all PASS at section scope and need only re-confirmation (not
re-derivation) after the fixes, since none of the blocking findings touches a gate-governed claim.

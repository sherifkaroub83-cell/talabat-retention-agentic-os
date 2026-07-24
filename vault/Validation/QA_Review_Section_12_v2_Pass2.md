---
report: QA Review — Section 12 (Implementation Plan), Pass 2 (independent)
section: 12
run_date: 2026-07-24
reviewer: qa-review-agent (independent Pass 2)
source_file: vault/Projects/Business_Plan_Drafts_v2/Section_12_Implementation_Plan.md
verdict: FAIL
---

# QA Review — Section 12 (Implementation Plan) — Pass 2 (independent)

## 1. Template completeness (`AI_Business_Plan_Template.md` §12)

Required: Three Horizons roadmap with milestones (pilot/launch/scaling); development timelines and
dependencies; marketing rollout plan; team expansion and recruitment goals.

| Required item | Present? |
|---|---|
| Three Horizons roadmap (H1/H2/H3) | Yes — `## Three Horizons Roadmap` |
| Milestones: pilot/launch/scaling phases | Yes — "Pilot" (H1, OPT-002), "Scale" (H3) |
| Development timelines and dependencies | Yes — `## Dependencies and Timelines` (thin but present and honestly scoped — this is a capital-allocation plan, not a software build, so the section correctly reframes "development" as evidence-gating dependency) |
| Marketing rollout plan | Yes — explicitly addressed and explains why it is secondary to the internal decision-support product |
| Team expansion and recruitment goals | Yes — explicitly states no headcount figure is disclosed/invented, assigns a functional (not headcount) owner |

**Template completeness: PASS.**

## 2. McKinsey Lens

- **Pyramid Principle:** conclusion stated in "Answer, stated first" before any supporting detail. Pass.
- **MECE:** the H1/H2/H3 partition assigns each of the five Investment Options an initial horizon
  placement — but **the section never explicitly states why the breakdown is MECE** (contrast with
  Section 2 §2.2, which explicitly writes "This decomposition is MECE because..."). Minor gap —
  should add one sentence establishing that every option has exactly one initial horizon placement
  and none is double-counted.
- **Hypothesis-driven:** implicitly operationalizes Section 2's "evidence-ranked, stage-gated
  allocation" hypothesis (H1 generates evidence, H2 is evidence-gated, H3 scales what cleared the
  bar) but never states this connection explicitly. Minor gap.
- **Value-driver traceability:** ties correctly back to Section 2 §2.2 problem 3 (cross-market
  allocation) and to the KPI Tree families cited in Section 13. Pass.

## 3. Citation audit consumption

`vault/Validation/Citation_Audit_Section_12_v2_Pass2.md` (this Pass 2 run): **FAIL.** Two findings
block approval outright per the citation-audit skill's own rule ("any open failure blocks approval"):
- The provenance note asserts "DEC-009's funding-sequence question is unresolved" — false; DEC-009 is
  `status: approved`, resolved 2026-07-23.
- The H1/H2 treatment of OPT-003 (monitor-only, no near-term funding action, deferred to a contingent
  H2 Decision Log entry) contradicts DEC-009's own approved Decision text, `Investment_Options_Register.md`'s
  explicit restatement of that sequence, the drafting skill's own Section 12 instruction, and OPT-003's
  own record — all four independently state OPT-002 **and** OPT-003 are near-term (H1) priorities.

## 4. Staleness check

No `vault/Research/Notes/` items are cited in this section (none apply). All cited Decision/Assumption/
Forecast records (`DEC-009`, `ASM-016`, `KPI_Tree_v2.md`) were last updated 2026-07-23, the same
drafting session — no staleness flag required on that basis. However, the section's **own** provenance
note is stale relative to DEC-009's current (2026-07-23) resolved status — this is a staleness defect
in the section's own text, not in an external note, and is captured above.

## 5. Anti-patterns (`business-plan-drafting/SKILL.md`)

- ❌ "Showing `ASM-029`–`033`'s OPT-level dollar ranges as a headline financial commitment... or
  omitting the mandatory disclosure sentence" — **not present**; Section 12 shows no dollar figures at
  all. Pass (over-conservative if anything, not a violation).
- ❌ "Showing the Everyday App vs. Food-leadership ~2.2:1 split... as a quantified headline financial
  sub-case" — **not present**. Pass.
- ❌ "Refusing to state a recommended funding sequence at all" — Section 12 does commit to a sequence
  narratively, satisfying DEC-009's requirement in form — **but the sequence it states for OPT-003 is
  the wrong one** (see citation audit). This is a different anti-pattern in substance: **stating a
  funding sequence that misrepresents the actual approved decision it cites** — not explicitly listed
  in the skill's anti-patterns checklist by name, but squarely the kind of citation-not-matching-content
  failure the whole gate structure exists to catch.
- No geography-mislabeling anti-patterns found (Egypt/Iraq and UAE/Kuwait/Qatar geography tags both
  correctly scoped and inference-labeled where required — see Geographic Evidence Gate below).

## 6. Problem Consistency Gate

See `vault/Validation/Problem_Consistency_Gate.md` (this run, scope: Section 12) — **PASS**, all 8
checks. Section 12 addresses the Group-wide USD175mn allocation question, not Egypt-retention; Egypt/
Iraq and UAE/Kuwait/Qatar appear only as evidenced worked examples within specific Investment Options,
never as the plan's boundary; DEC-007 (pre-pivot) is correctly not cited here at all (Section 13 cites
it, correctly labeled).

## 7. Financial Integrity Gate

See `vault/Validation/Financial_Integrity_Gate.md` (this run, scope: Section 12) — **FAIL** on check
11 (DEC-008 compliance is technically fine — no dollar figures appear at all, so no bucket-split
sub-case risk) but the gate's underlying purpose — that financial/allocation claims in the section
accurately reflect the governing Decision Log records they cite — is violated by the OPT-003
sequencing error (Citation Audit finding #6). Recorded as a Financial Integrity finding because it
is precisely a "combination is wrong even though individual citations look plausible" defect: DEC-009
is correctly named as the source, but the sequence attributed to it is not what DEC-009 actually
resolved.

## 8. Geographic Evidence Gate

See `vault/Validation/Geographic_Evidence_Gate.md` (this run, scope: Section 12) — **PASS**, all 9
checks. OPT-002's Egypt/Iraq extrapolation from GCC/Group evidence is explicitly labeled inline
("GCC/Group evidence is most explicitly an inference rather than a proven Egypt/Iraq-specific
effect"); OPT-003's UAE/Kuwait/Qatar competitive-pressure figure is correctly scoped and cited to the
exact page (TLB-019 p.9) with the correct geography (not "GCC," not "MENA"); no non-GCC pre/post-2025
mixing; no external-research figures used.

## Verdict

**FAIL.** Section 12 cannot be marked ✅ Done. Required fixes before re-submission:

1. **Remove or correct the provenance-note sentence** "`DEC-009`'s funding-sequence question is
   unresolved" — DEC-009 is approved; the note should instead state that the section implements
   DEC-009's approved (2026-07-23) funding sequence.
2. **Rewrite the H1/H2 treatment of OPT-003** so it reflects DEC-009's actual approved Decision text
   (OPT-002 **and** OPT-003 both near-term/H1 priorities) — this likely means moving OPT-003 from
   "Monitor, do not yet fund a change" into an H1 action parallel to OPT-002's pilot (e.g., the
   "targeted budget weighting toward these three markets within the existing bucket" OPT-003's own
   record already recommends), and revising the H2 section so it no longer frames OPT-003 funding as
   a deferred, contingent, "incremental spend beyond what's already committed" decision.
3. Minor, non-blocking, fix alongside the above: add an inline citation (or traceability-table row)
   for the "~7%-of-GMV UAE benchmark" claim (OPT-004/TLB-001 p.21/TLB-002 p.10); add one explicit
   MECE-justification sentence for the horizon/option partition.

Do not flip the tracker status cell — hand back to the Orchestrator for a redraft of the H1/H2 OPT-003
treatment and the provenance note, then re-submit for a fresh Pass 2 review.

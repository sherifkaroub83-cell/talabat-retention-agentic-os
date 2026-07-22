---
type: validation
section: 10
pipeline_stage: 11
date: "2026-07-22"
result: "Comparison of two genuinely independent QA passes on the same, unedited draft — the deliberate test Pilot 4 was originally designed to run"
---

# QA Review Comparison — Section 10, Pass 1 vs. Pass 2

> This is the artifact [[Pilot_Validation_Plan]]'s original Pilot 4 design existed to produce: two
> genuinely separate, freshly-invoked `qa-review-agent` threads reviewed the **same, unedited**
> `Section_10_Risk_Analysis.md` (post-citation-fix, pre-QA-fix), with Pass 2 having zero access to
> Pass 1's findings. Both verdicts are preserved in full and unedited at
> [[QA_Review_Section_10_Pass1]] and [[QA_Review_Section_10_Pass2]] — this file compares them, it does
> not supersede either.

## Headline result: both passes independently reached FAIL, converged on two findings, and diverged on one

| Finding | Pass 1 | Pass 2 | Verdict |
|---|---|---|---|
| Algorithm bias/fairness missing from Technical Risks (template names it explicitly) | **Found** (Finding 1, required fix) | **Found** (Finding 1, required fix) | **Convergent** — independently derived, same finding, same reasoning (Section 11's future bias-commitment needs a Section 10 risk to anchor to) |
| Top matrix row conflates "Low confidence" (evidentiary uncertainty) with "High probability" (outcome direction) | **Found** (Finding 2, required fix) | **Found** (Finding 3, required fix) | **Convergent** — independently derived, same underlying logical error, near-identical fix recommendation (state the bridging judgment, or revise to a genuinely two-sided Medium rating) |
| §10.1 claims "five categories," its own MECE-justification sentence only proves four, and §10.2's matrix then uses five category labels — an internal self-contradiction | **Not found** — Pass 1 explicitly scored MECE as "Pass, with the explicit-statement requirement genuinely met," calling it "an improvement over Section 9" | **Found** (Finding 2, required fix) — read the MECE-justification sentence's own parenthetical literally and caught that it names four buckets, not five, while the matrix scores five | **Divergent — Pass 2 caught a defect Pass 1 missed entirely** |
| Stale Project tracker status (still shows Section 10 as "⬜ Not started" despite a full draft, a citation fail/fix cycle, and two QA passes existing) | Not checked (outside Pass 1's stated scope) | **Found**, noted as outside this review's own scope to fix unilaterally | Pass 2 only — a repository-hygiene observation, not a QA-checklist item either pass was specifically tasked with, but a genuine catch |

## Why the divergence matters (the actual answer to "does the two-pass fix add value, or is it redundant")

Pilot 2's design note anticipated two possible outcomes: Pass 2 either confirms Pass 1 (validating that
self-review is reliable enough to lean on) or catches something Pass 1 missed (validating that Pass 2 is
doing real independent work). **This is the first time in this project a genuine instance of the second
outcome has occurred between two passes of the *same* reviewing role on the *same* draft.** (Pilot 2's
independent QA caught a defect self-review couldn't have caught because the referenced section didn't
exist yet at self-review time — a different kind of gap. Pilot 3's fail/fix/re-verify cycle tested
whether a *fix* held up, not whether two independent *first reads* of the same material converge.) Here,
both reviewers read the identical, unedited section, with identical tools, following the identical
procedure — and one caught a real internal contradiction the other read past. Pass 1's own MECE check
(§2) actually quotes the same sentence Pass 2 flags, but stops at confirming the sentence *exists* and
reads plausibly, rather than checking whether its own internal arithmetic holds (four items named in a
parenthetical that claims to prove a five-way split). This is a legible, specific illustration of why a
second independent pass has genuine expected value beyond formality — not a hypothetical argument for
it.

## What this does NOT show

This is not evidence that Pass 1 is unreliable or that self-review-adjacent QA passes are systematically
weaker — Pass 1 caught both convergent findings independently and unprompted, at the same rigor level as
Pass 2, and its own review is thorough by any reasonable standard (it ran cross-section re-verification,
an independent DEC-004/DEC-005-style escalation re-adjudication, and a citation-audit spot-check, none of
which were mechanically required). The lesson is narrower and more useful: **even a rigorous, independent
reviewer can miss a specific class of defect — an internal arithmetic/count inconsistency inside a single
sentence — that a second independent reviewer, reading the same material fresh, catches.** This argues
for the two-pass gate as a standing practice for load-bearing sections, not as a one-time pilot exercise
to retire once proven.

## Disposition

Section 10 requires three fixes before either pass's verdict can flip to PASS: (1) add the missing
algorithm-bias/fairness technical risk, (2) resolve the five-vs-four-category internal contradiction, (3)
tighten the top matrix row's Rationale to state its bridging judgment explicitly. All three are fixed
immediately following this comparison (see the top-level session's next commit) and independently
re-verified by a third, freshly-invoked thread before Section 10 is promoted to Done — the same
fail/fix/re-verify discipline Pilot 3 established, now applied on top of a genuine two-pass comparison
rather than a single pass.

## See also
- [[QA_Review_Section_10_Pass1]] · [[QA_Review_Section_10_Pass2]] · [[Citation_Audit_Section_10]]
- [[Section_10_Risk_Analysis]] · [[Pilot_Validation_Plan]] · [[Agentic_OS_Architecture_v2]]

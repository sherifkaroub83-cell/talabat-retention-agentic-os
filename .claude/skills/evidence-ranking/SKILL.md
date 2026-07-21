---
name: evidence-ranking
description: The primary-over-secondary evidence hierarchy and the procedure for resolving or explicitly footnoting a conflict between sources, rather than silently picking one. No user-facing trigger — invoked internally by the evidence-citation-agent when it finds two sources disagreeing (pipeline stage 7).
---

# Evidence Ranking Skill

Full design: `vault/Architecture/Decision_Management_Layer.md`'s five-tier evidence model.

## The hierarchy

1. Primary disclosed source (talabat IR filing, audited financials, official press release)
2. Secondary reputable source (market-research firm, major business press)
3. Verified external research (this project's own Research Notes, `vault/Research/Notes/`)
4. Forecast (`vault/Forecasts/`, always lower-confidence than any disclosed figure by construction)
5. Synthetic/team estimate (must always carry the `CLAUDE.md` label)

## Procedure

1. Identify the tier of each conflicting value.
2. **Different tiers:** the higher tier wins as the plan's headline figure — but still note the
   lower-tier figure exists in a footnote or caveat. Silent suppression of a real disclosed number is
   as much a violation as silently picking the wrong one.
3. **Same tier:** do not resolve it yourself. Escalate to `decision-steward` with both values, their
   full citations, and your own assessment of why they might diverge (different reporting period,
   different denominator, restated figures, etc. — the corpus already has three examples of this:
   Egypt category-share, the 2026 investment total, the Subscription-line reclassification).

## Anti-patterns

- ❌ Picking whichever number is more favorable to the plan's recommendation — tier and recency
  decide, not narrative convenience.
- ❌ Treating "the vault already flagged this as an open question" as permission to pick silently
  now — a flagged conflict still requires a Decision record when it's actually used.

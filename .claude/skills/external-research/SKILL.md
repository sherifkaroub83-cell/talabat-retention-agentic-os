---
name: external-research
description: Procedure for sourcing, citing, and confidence-scoring external data the Input_Data corpus doesn't contain (market sizing across talabat's markets, funnel-conversion benchmarks, competitor capital-allocation/investment-ROI benchmarks, Egypt-specific competitor detail, CSR/AI-ethics benchmarks). Trigger when the research-agent resolves a Research Register item, or the user says "research", "/research".
trigger: /research
---

# /research — External Research Skill

Used exclusively by `research-agent`. Governs how a genuine corpus gap gets resolved without
compromising the OS's citation discipline. Full design: `vault/Architecture/External_Research_Layer.md`.

## When to use this (and when not to)

Check `vault/Knowledge/` first — Sources, Facts, Topics, Strategic. If the answer is already there,
this skill is the wrong tool; cite the vault directly. Use this skill only for gaps already named in
`vault/Architecture/External_Research_Layer.md`'s enumerated list, or a genuinely new one a drafting
stage surfaces.

## Procedure

1. Open the Research Register row (`vault/Research/Research_Register.md`) — topic, why needed, which
   BP section requires it.
2. Search with WebSearch; follow up with WebFetch on promising results.
3. Apply the provider filter:
   - **Acceptable:** named market-research firms (IMARC, Mordor, Statista, Euromonitor), official
     competitor press releases/funding announcements, reputable business press with a clear
     byline/date, government statistics (CAPMAS for Egypt).
   - **Unacceptable:** unsourced blogs, methodology-free aggregators, unattributed AI summaries,
     social media.
4. Write a Research Note (`vault/Research/Notes/RES-XXX_<slug>.md`, template at
   `vault/Research/_TEMPLATE-research-item.md`): publisher, URL, retrieval date, confidence
   rationale, explicit limitations, what it feeds downstream.
5. Update the Research Register row's status.
6. Propose the resulting Assumptions Register row to `decision-steward` — do not register it
   yourself; registration is the Decision Steward's exclusive responsibility.

## Confidence scoring

- **High** — corroborated by ≥2 independent acceptable sources.
- **Medium** — one acceptable source, no corroboration, or a reputable source with a stated
  methodology gap.
- **Low** — the best available source is weak (e.g. a competitor's own marketing claim, or a source
  outside the acceptable-provider list used because nothing better exists) — must carry the
  `CLAUDE.md` synthetic-data label wherever it's later cited.

## Anti-patterns

- ❌ Treating a competitor's own press release as neutral market sizing without noting the bias.
- ❌ Marking an item "Found" without a stated retrieval date.
- ❌ Lowering the provider bar because nothing acceptable turned up — mark **Rejected** instead and
  say so; a labeled synthetic estimate is more honest than a weak source dressed up as solid.
- ❌ Registering the Assumption yourself instead of handing off to `decision-steward`.

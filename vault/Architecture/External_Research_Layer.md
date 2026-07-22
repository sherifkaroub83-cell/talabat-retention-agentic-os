---
type: architecture
status: approved
created: "2026-07-21"
---

# External Research Layer

Task 6 of the OS Architecture Design Phase. No number from this layer is "made up" — it defines
exactly what's missing, where it may legitimately come from, how confident the OS is in it, and how
it gets updated if a better source appears later.

## What's actually missing (not hypothetical — enumerated from real gaps already found)

Pulled from the readiness assessment, the `business-plan-drafting` skill's "Known evidence gaps"
section, and `_CORPUS_INDEX.md`'s data-gaps note:

| Gap | Needed for | Why the corpus can't supply it |
|---|---|---|
| AI/retention-tech market sizing (Egypt or MENA) | Section 5 (AI Technology), Section 3 (Market Analysis) | No market-research firm report on AI-in-delivery specifically exists in `Input_Data/` |
| Funnel-conversion benchmarks (awareness→trial→retained) | Section 7 (Marketing and Sales) | No corpus document reports funnel data for talabat or any competitor |
| Egypt-specific competitor detail (Breadfast, Rabbit, elmenus) beyond what's in the secondary corpus | Section 3 (Market Analysis), Section 10 (Risk) | These names live only in `Input_Data/03_Competitors/`, deliberately kept out of the primary citation regime during ingestion |
| CSR / Responsible-AI industry benchmarks | Section 11 | No dedicated ESG/AI-ethics document was ingested |
| Churn-rate industry benchmarks (as a substitute *reference point*, not a talabat Egypt baseline, which genuinely does not exist) | Section 13 (KPIs) | No corpus document discloses a churn rate for talabat or peers |

Nothing on this list is invented preemptively — each row already has a named downstream consumer.
Research Register items are added when a pipeline stage (per `Business_Plan_Generation_Pipeline.md`
Stage 3, Gap Detection) actually hits one of these, not spun up speculatively.

## Repository structure

```
vault/Research/
├── README.md                    — this layer's index
├── Research_Register.md          — the request/status table
├── _TEMPLATE-research-item.md    — template for a new register row
└── Notes/
    ├── RES-001_<slug>.md
    ├── RES-002_<slug>.md
    └── ...
```

### `Research_Register.md` — schema

| Column | Meaning |
|---|---|
| `Item ID` | `RES-###` |
| `Topic` | What's being researched |
| `Why needed` | Which BP section, which required sub-bullet |
| `Status` | Requested / In progress / Found / Verified / Rejected (no acceptable source found) |
| `Candidate provider` | e.g. Statista, Mordor Intelligence, IMARC, official competitor press release |
| `Sourcing method` *(added post-Phase-7, see [[Agentic_OS_Architecture_v2]] Change 3)* | `corpus-reclassification` (already sat in `Input_Data/`, newly classified as a Research finding) or `live-web-retrieval` (freshly retrieved this session via `WebSearch`/`WebFetch`) |
| `Confidence (once found)` | High / Medium / Low — same scale as the Assumptions Register. **Rule:** `corpus-reclassification` sourcing is capped at Medium/Medium-High regardless of the underlying source's reputability — it has not been independently re-verified as current |
| `Research Note` | Link to `Notes/RES-###...md` once found |
| `Date requested` / `Date resolved` | |

### Research Note — schema (mirrors a Source Note's citation discipline)

```markdown
---
id: RES-XXX
status: verified   # found | verified | rejected
retrieved: YYYY-MM-DD
publisher: <org>
url: <url>
sourcing_method: live-web-retrieval   # or: corpus-reclassification
confidence: Medium
---

# RES-XXX — <topic>

## Finding
The figure/claim, stated plainly.

## Source detail
Publisher, publication date, methodology note if available (e.g. "survey-based," "modeled estimate").

## Confidence rationale
Why High/Medium/Low — corroborated elsewhere? single source? known potential bias (e.g. a
competitor's own PR)?

## Limitations
What this source does NOT tell us — mirrors the "Limitations" field on Source Notes.

## Feeds
Which Assumption Register row this becomes; which BP section(s) it's for.
```

## Acceptable vs. unacceptable providers (from the `external-research` skill)

**Acceptable:** named market-research firms (IMARC, Mordor, Statista, Euromonitor), official
competitor disclosures (press releases, funding announcements with a named source), reputable
business press (Reuters, Bloomberg, TechCrunch, MENA-focused outlets like Wamda/MAGNiTT) with a
clear byline and date, government/regulatory statistics (CAPMAS for Egypt).

**Unacceptable:** unsourced blog posts, aggregator sites with no visible methodology, any AI-
generated summary whose own provenance can't be traced, social media claims. If the Research Agent
cannot find an acceptable source, the register item is marked **Rejected** and the gap is instead
handled as a labeled synthetic/team-estimate assumption (per `CLAUDE.md`'s standing instruction) —
never silently dropped or silently guessed.

## Update workflow

1. Orchestrator's Stage 3 (Gap Detection) adds a row to `Research_Register.md`.
2. Research Agent runs (WebSearch/WebFetch), attempts to resolve it, writes a Research Note.
3. Evidence & Citation Agent applies the same citation-verification pass to the Research Note as to
   any Source Note.
4. Decision Steward Agent registers the resulting Assumption Register row, tier = External Research.
5. **Re-verification trigger:** any Research Note older than the drafting session in which it's cited
   should be spot-checked before final submission — market data dates quickly. This is a QA/Final
   Review Agent checklist item (Stage 11), not a standing background job — the guide's "propose,
   don't auto-execute" principle applies to auto-refreshing sourced data too.

## Interactions

- Triggered by: `bp-orchestrator` (Stage 3/4 of the pipeline).
- Feeds: `vault/Decisions/Assumptions_Register.md`.
- Checked by: `evidence-citation-agent` (citation-audit skill), `qa-review-agent` (staleness check).

**Current status:** layer scaffolded, register empty. No research has been conducted yet — this
happens during Business Plan drafting (Phase 7+), not during this architecture-design phase.

## See also
[[Agentic_OS_Architecture]] · [[Agentic_OS_Architecture_v2]] · [[Project Administration]]

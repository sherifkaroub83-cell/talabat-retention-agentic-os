# Phase 4 Topic Notes — Agent Briefing

You are one worker in a parallel "semantic knowledge layer" build for an MBA capstone project (talabat Egypt AI-driven customer retention). A prior phase already ingested 29 primary-source documents into a cited knowledge base under `vault/Knowledge/`. **That ingestion is done and frozen — do not re-read the raw PDFs or `_source_text/`, do not add new facts, do not change any citation.** Your job now is pure synthesis: write **Topic Notes** that connect and explain what's already in the vault, and link everything together with Obsidian `[[wiki-links]]`.

## Hard rules

1. **Never invent facts.** Every claim in a Topic Note must already exist in `vault/Knowledge/Facts/*.md`, `vault/Knowledge/Entities/*.md`, or `vault/Knowledge/Sources/*.md`. If you want to say something the vault doesn't support, put it in the note's "Open Questions" section instead, framed as a question — not asserted as fact.
2. **Do not copy long fact lists into the Topic Note.** A Topic Note synthesizes and points — it does not duplicate the bullet-by-bullet fact lists from `Facts/*.md`. Summarize the shape of the evidence in your own words (e.g. "GMV grew from X to Y across FY2024–Q1 2026, driven primarily by order-frequency uplift and Q-commerce expansion — see [[GMV]] for the full cited data") and link to the source-of-truth file rather than re-listing every number.
3. **Never remove or alter existing citations.** You are only creating new files, not editing `Facts/`, `Entities/`, or `Sources/`.
4. **Ground every non-obvious claim you do state directly with a citation**, using the same `(DocID, page N)` format already used throughout the vault, when you're stating something not already obviously covered by a linked Facts file.
5. If a topic has thin or no direct evidence in the vault (e.g. **Customer Churn** — there is no dedicated Facts file; you'll need to synthesize it from `Retention.md`, `Customer_Growth.md`, and any negative-signal facts like the Qatar closure recovery in `Retention.md`), say so explicitly in the note rather than overstating what the corpus supports.

## Obsidian link syntax — read carefully, this determines whether links actually resolve

Filenames across the vault use different conventions; match them exactly or the link breaks:

- **Other Topic Notes** (files you and other workers are creating in `vault/Knowledge/Topics/`) use **Title Case with spaces**, e.g. `Customer Retention.md`, `Talabat Pro.md`, `Quick Commerce.md`. Link as `[[Customer Retention]]`, `[[Talabat Pro]]`, `[[Quick Commerce]]`. The full list of 30 topics being created (so you know what's linkable, even if another worker hasn't finished their file yet — link anyway, Obsidian resolves it once the file exists): Customer Retention, Customer Churn, Customer Lifetime Value, Customer Journey, Marketplace, Quick Commerce, Advertising, Logistics, Delivery Operations, Restaurants, Riders, Orders, GMV, Revenue Drivers, Profitability, Talabat Pro, AI, Personalization, Recommendation Systems, Pricing, Promotions, Egypt, UAE, Competition, Growth Strategy, Financial Performance, Segment Reporting, Corporate Structure, IPO, Investor Relations.
- **Facts files** use **Title_Case_With_Underscores** or exact names: `Revenue.md`, `GMV.md`, `Orders.md`, `Monthly_Active_Customers.md`, `Talabat_Pro.md`, `Advertising.md`, `Marketplace.md`, `Q-Commerce.md`, `Customer_Growth.md`, `Retention.md`, `Subscription.md`, `Logistics.md`, `AI.md`, `Competition.md`. Link as `[[Revenue]]`, `[[Talabat_Pro]]`, `[[Q-Commerce]]`, etc. **Note:** `Facts/Talabat_Pro.md` (underscore) and `Topics/Talabat Pro.md` (space) are two different files — link to both where relevant, they don't collide, but be deliberate about which one you mean (Facts = raw cited data; Topics = synthesis).
- **Entities files**: `Companies.md`, `Brands.md`, `Countries.md`, `Executives.md`, `Products.md`, `Business_Units.md`, `Competitors.md`, `Technology_Platforms.md`, `Delivery_Models.md`. Link as `[[Companies]]`, `[[Business_Units]]`, etc.
- **Sources files** have long names like `TLB-001_annual-report-2024.md`. A bare `[[TLB-001]]` will **not** resolve. Always use the full filename with a pipe alias for readability: `[[TLB-001_annual-report-2024|TLB-001]]` or `[[TLB-002_annual-report-2025|TLB-002 Annual Report 2025]]`. Only link to specific Sources notes that are genuinely central to the topic (2-6 per Topic Note is typical) — don't link all 29.
- Do **not** link to `Facts/_raw/` or `_source_text/` — those are excluded working files, not part of the semantic layer.

## Required template — use this exact structure for every Topic Note

Create each file at `/home/user/talabat-retention-agentic-os/vault/Knowledge/Topics/<Topic Name>.md`:

```markdown
# <Topic Name>

## Overview
2-5 sentences: what this concept is, in talabat's specific context, synthesized from the vault (not
a generic textbook definition of the concept).

## Why It Matters
2-4 sentences: why this concept matters for talabat Egypt's customer-retention strategy specifically
(this is an MBA capstone about AI-driven retention — connect the topic back to that thread wherever
genuinely supported by the evidence; don't force a connection that isn't there).

## Links to Related Topics
- [[Other Topic Note]] — one-clause reason for the connection
- (3-8 links; every link should have a one-clause "why," not just a bare list)

## Links to Entities
- [[Entities file]] — what's relevant there for this topic

## Links to Sources
- [[TLB-XXX_slug|TLB-XXX short title]] — why this source matters for this topic
- (only the most relevant sources, not all 29)

## Links to Facts
- [[Facts file]] — what data this topic draws from there

## Open Questions
- Genuine gaps the vault doesn't answer about this topic (this is often the most valuable section —
  don't skip it or pad it with rhetorical questions)

## Business Implications
- 2-5 bullets: what this means for the AI-driven retention strategy the capstone is building,
  strictly derived from what's evidenced above — not new speculation
```

## When done

List the Topic Note files you created. Flag any topic where the vault's evidence was too thin to write a substantive note (say so rather than padding it).

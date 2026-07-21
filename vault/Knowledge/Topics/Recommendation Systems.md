# Recommendation Systems

## Overview
talabat's recommendation system is the specific machine-learning mechanism behind [[Personalization]]: a proprietary ranking algorithm that needs approximately six orders from a given customer before it can generate personalised recommendations, and that has evolved from ranking at the cuisine level to ranking at the individual-item level — for example, generating a "Meal for One" recommendation rather than just surfacing a cuisine category (TLB-001, page 22-23; TLB-002, page 15). The same underlying model is also used to decide which vertical (Food, tMart, Local Shops) to cross-sell to a customer and when to surface loyalty initiatives like talabat pro and talabat Rewards (TLB-023, page 8; TLB-026, page 121).

## Why It Matters
The item-level granularity shift (cuisine → specific meal/item) is the most concrete evidence in the corpus of the recommendation engine actively improving over time, and it sits directly upstream of the personalisation EBITDA figures also linked to [[AI]] and [[Personalization]]. For talabat Egypt's retention strategy, the recommendation system's mechanics — particularly the 6-order activation threshold and the "right time" cross-sell logic — define the concrete technical building blocks a retention intervention would need to either leverage (if already deployed in Egypt) or build toward (if Egypt is still on a less mature version of the model).

## Links to Related Topics
- [[AI]] — the recommendation engine is one specific, named application of talabat's broader AI/ML capability.
- [[Personalization]] — recommendation systems are the mechanism; personalisation is the customer-experience and business-impact frame around that mechanism.
- [[Talabat Pro]] — the same model that ranks item recommendations also decides the right moment to surface a pro offer.
- [[Orders]] — the 6-order threshold is defined directly in terms of order count, tying the recommendation system's activation to order-frequency data.
- [[Customer Journey]] — the cuisine-to-item-level evolution marks a maturing customer journey as more order history accumulates.
- [[Marketplace]] — cross-selling across verticals (Food, tMart, Local Shops) is a recommendation-system output that extends marketplace engagement.

## Links to Entities
- [[Technology_Platforms]] — the proprietary personalisation/ranking algorithm entity entry describes this system directly.
- [[Products]] — the loyalty products (talabat pro, talabat rewards) that the recommendation system times and surfaces.

## Links to Sources
- [[TLB-001_annual-report-2024|TLB-001 Annual Report 2024]] — original statement of the 6-order threshold ("it takes approximately six orders for our machine learning models to develop personalised recommendations").
- [[TLB-002_annual-report-2025|TLB-002 Annual Report 2025]] — documents the extension of the recommendation system from cuisine-level to item-level ranking, with the "Meal for One" example.
- [[TLB-015_capital-markets-day-2024|TLB-015 Capital Markets Day 2024]] — names "AI driven recommendations in new form factors" as a forward roadmap item, alongside "optimising timing, placement, and incentives of vertical and product cross-sells."
- [[TLB-026_international-offering-memorandum|TLB-026 International Offering Memorandum]] — prospectus-level description confirming the 6-order minimum and ~13 terabytes/day of data underpinning it (as of Sept 2024).

## Links to Facts
- [[AI_Facts]] — the source fact file containing every recommendation-system citation used in this note.
- [[Talabat_Pro]] — the loyalty product whose offer-timing depends on recommendation-system output.

## Open Questions
- The corpus does not specify what "new form factors" for AI-driven recommendations (named as a forward roadmap item in TLB-015, page 89) actually are or whether any have since shipped.
- No document discloses whether the cuisine-to-item-level upgrade (TLB-002) has been deployed uniformly across all eight markets, including Egypt, or is being rolled out market-by-market.
- There is no disclosed accuracy, click-through, or conversion metric for the recommendation system itself (e.g., recommendation acceptance rate) — only the downstream EBITDA estimate tied to the broader personalisation layer.

## Business Implications
- The documented progression from cuisine-level to item-level recommendations gives the strategy a cited technology roadmap to extend — e.g., proposing Egypt-specific item-level tuning (accounting for local cuisine mix and price sensitivity) as a retention lever.
- Because the recommendation system's cross-sell logic already spans Food, tMart, and Local Shops, the strategy can build on this evidenced multi-vertical mechanism rather than proposing a new one, focusing recommendations instead on Egypt-specific execution and measurement.
- The 6-order threshold reinforces the same early-tenure recommendation raised in [[Personalization]]: accelerating time-to-6th-order is a technically grounded, low-invention retention lever for Egypt's newer customer base.

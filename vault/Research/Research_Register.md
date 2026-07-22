---
type: register
status: active
created: "2026-07-21"
---

# Research Register

Tracks every external-data request raised while drafting the Business Plan. Schema defined in
[[External_Research_Layer]].

**Current status:** 5 items resolved — 1 smoke test (2026-07-21) and 4 real items from Section 3's
pilot run (2026-07-22, see [[Phase7_Pilot_Execution_Report_Section_03]]). Populated as pipeline
Stage 3 (Gap Detection) surfaces real gaps during drafting — not pre-populated speculatively. See the
enumerated candidate-gap list (AI/retention market sizing, funnel-conversion benchmarks, Egypt-specific
competitor detail, CSR/Responsible-AI benchmarks, churn-rate industry reference points) in the
architecture doc for what's still likely to appear here for future sections.

**Sourcing Method column added post-Phase-7** — see [[Agentic_OS_Architecture_v2]] Change 3 and
[[External_Research_Layer]]. `corpus-reclassification` sourcing is capped at Medium/Medium-High
confidence regardless of the underlying provider's reputability.

| Item ID | Topic | Why needed | Status | Candidate provider | Sourcing method | Confidence | Research Note | Date requested | Date resolved |
|---|---|---|---|---|---|---|---|---|---|
| RES-000-SMOKETEST | **Smoke test only** — confirm IMARC Group's official publisher name and homepage URL (already named as an acceptable provider in `External_Research_Layer.md`) | Validate that `research-agent` + the `external-research` skill actually run end to end before Phase 7 relies on them for real drafting — not a real Business Plan evidence need | Found | IMARC Group | live-web-retrieval | High | [[RES-000-SMOKETEST_imarc-group-publisher-check]] | 2026-07-21 | 2026-07-21 |
| RES-001 | Egypt-specific named competitors (Breadfast, Rabbit, elmenus, Akelni/Mrsool, Roboost) | Section 3 (Market Analysis) — Competitive Analysis / Competitor benchmarking sub-bullet; the primary vault corpus names zero Egypt-specific rivals ([[Competition]], [[Competitive Advantages]] Open Questions) | Found | Secondary corpus already collected at `Input_Data/03_Competitors/2026-07-20_egypt_delivery_competitive_landscape.md` (per-claim sourced: KrASIA, Sacra, Forbes ME, MenaBytes, Wamda, Disrupt Africa, Tech In Africa, Mordor Intelligence) | corpus-reclassification | Medium | [[RES-001_egypt-named-competitors]] | 2026-07-22 | 2026-07-22 |
| RES-002 | Egypt online food delivery market size, top-down (IMARC) | Section 3 — Industry Trends / top-down market sizing sub-bullet | Found | IMARC Group, `Input_Data/02_Market_Research/2026_IMARC_egypt_online_food_delivery_market.md` | corpus-reclassification | Medium | [[RES-002_egypt-imarc-online-food-delivery-market-size]] | 2026-07-22 | 2026-07-22 |
| RES-003 | Egypt total foodservice market size, top-down (Mordor) | Section 3 — Industry Trends / top-down market sizing + macro context sub-bullet | Found | Mordor Intelligence, `Input_Data/02_Market_Research/2026_Mordor_egypt_foodservice_market.md` | corpus-reclassification | Medium | [[RES-003_egypt-mordor-foodservice-market-size]] | 2026-07-22 | 2026-07-22 |
| RES-004 | Egypt-specific operational/tech datapoints (largest MENA q-commerce DC, AI demand forecasting, 3,100 Egypt employees incl. 1,500-person Global Tech & Shared Services hub delivering 74% of shared services / 30% of app features, 10,000+ Egypt partners, t pro EGP 79/month pricing) | Section 3 — Opportunities (technological advancements enabling differentiation) sub-bullet; strongest available Egypt-specific AI/tech evidence in either corpus | Found | talabat corporate newsroom (official press releases), `Input_Data/04_Strategy_News/2026-04-28_...md` and `2025-02-18_...md` | corpus-reclassification | Medium-High | [[RES-004_egypt-official-newsroom-operational-datapoints]] | 2026-07-22 | 2026-07-22 |

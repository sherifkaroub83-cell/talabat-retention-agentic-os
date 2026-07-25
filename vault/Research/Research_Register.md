---
type: register
status: active
created: "2026-07-21"
---

# Research Register

Tracks every external-data request raised while drafting the Business Plan. Schema defined in
[[External_Research_Layer]].

**Current status:** 8 items resolved — 1 smoke test (2026-07-21), 4 pre-pivot items from Section 3's
pilot run (2026-07-22, see [[Phase7_Pilot_Execution_Report_Section_03]]; RES-001..004 are
Egypt-retention-scoped and marked superseded by the 2026-07-23 pivot — their notes remain valid
Egypt worked-example evidence), and 3 post-pivot items (RES-005..007, 2026-07-24) from the first
Stage 5 (Targeted research) run against the pivoted governing problem (USD 175mn capital-allocation
programme). Populated as pipeline stages surface real gaps during drafting — not pre-populated
speculatively. See the enumerated candidate-gap list in the architecture doc for what's still likely
to appear here for future sections.

**Note on the 2026-07-24 run:** WebSearch functioned normally, but every direct WebFetch to
destination pages (imarcgroup.com, mordorintelligence.com, deliveryhero.com, investing.com,
finance.yahoo.com, tradingview.com, openpr.com, finanzwire.com) was blocked by this session's
egress policy (HTTP 403 from the agent proxy; per `/root/.ccr/README.md` these are org-policy
denials, not to be retried or routed around). RES-005..007 findings therefore rest on WebSearch
result content attributed to the named publisher pages, corroborated across multiple independent
results; confidence is capped accordingly and page-level verification is flagged for
`evidence-citation-agent`.

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
| RES-005 | Peer/parent investment-programme disclosure benchmark — how Delivery Hero SE (talabat's parent) discloses and directs its 2026 group growth-investment programme (FY2025 results, 2026 "lean in" guidance, Dmarts/MENA capex direction) | Capital-allocation/governance argument + financial margin-bridge narrative — fills the governance-mechanics gap named in [[Capital Allocation and Investment Governance]] (no disclosed peer stage-gate mechanism exists to benchmark against) | Found | Delivery Hero SE official newsroom/EQS releases (27 Feb 2026), corroborated by Investing.com and Yahoo Finance earnings coverage | live-web-retrieval | Medium-High | [[RES-005_delivery-hero-parent-investment-programme-disclosure]] | 2026-07-24 | 2026-07-24 |
| RES-006 | GCC quick-commerce / online-grocery market outlook, top-down, two providers (IMARC: USD 2.7bn 2025 → 26.5bn 2034, 27.87% CAGR; Mordor: USD 3.76bn 2025 → 12.43bn 2031, 22.05% CAGR; grocery 53.48% of category, KSA 54.76% of region) | Section 3 (Market Analysis) + the Everyday App (~USD 120mn) allocation case — external market-growth context for tMart scaling. **Regional GCC incl. Saudi Arabia ≠ talabat's 5-market GCC segment — headline figures must never be quoted as talabat-addressable** | Found | IMARC Group + Mordor Intelligence (report pages, via attributed search results) | live-web-retrieval | Medium | [[RES-006_gcc-quick-commerce-market-outlook]] | 2026-07-24 | 2026-07-24 |
| RES-007 | Advertising (AdTech) monetization benchmarks for delivery platforms (Delivery Hero ~3.0% of group GMV 2025, >4% long-term target; Uber >USD 2bn run-rate, >2% of gross bookings; DoorDash >USD 1bn run-rate) | Financial value-driver tree (Everyday App monetization upside) + Section 3 — externally-benchmarked ads-revenue band for scenario bounds; all figures global platform-level, none talabat-market-specific | Found | Delivery Hero / Uber / DoorDash self-disclosures via Yahoo Finance, Dealroom.co, industry press | live-web-retrieval | Medium | [[RES-007_delivery-platform-advertising-monetization-benchmarks]] | 2026-07-24 | 2026-07-24 |

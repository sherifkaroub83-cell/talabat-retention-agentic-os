# Project Memory

Project-scoped memory for this engagement. Persists across sessions. Update whenever a durable
decision, convention, or fact is established.

## What this project is

AASTMT MBA capstone (AI for Business Organizations track), **Group G02**, instructor **Dr. Hossam
Daoud**. The team stands up an Agentic OS around one business problem — **customer retention for
talabat Egypt** — and uses it to produce an AI Business Plan (GSB 14-section template v2.0,
McKinsey Edition, 15–25 pages), an OS structure document (3–5 pages), and a group presentation
(5 slides per member). Problem: talabat Egypt's price-crushed, low-switching-cost customers (71.9%
food inflation, 38% devaluation) are exposed to Breadfast, Rabbit, and elmenus; the plan argues for
AI-driven retention — churn prediction, personalized offers, t pro subscription targeting — in
Greater Cairo. Charter: `Problem_Charter_DRAFT.md`, submission 26/07/2026.

## Team (Group G02)

| Member | AASTMT ID | Role |
|---|---|---|
| Omar Hassan Ali Mohamadin Mohamed | 24125108 | TBD |
| Ahmed Fawzy Mohamed Rashed | 24220998 | TBD |
| Mohamed Magdy Abdullah Marawan | 24224459 | TBD |
| **Sherif Samy Abdelhady Karoub (owner of this OS instance)** | 24225778 | Coordinating all roles |
| Ahmed Abd Elhakam Abd Elfattah Zaian | 24224008 | TBD |
| Abdallah Mahmoud Abdo Ahmed | 24220430 | TBD |

Guide specifies 4–5 members / 5 roles; team is 6 — split to confirm with instructor.

## Source corpus (`Input_Data/`)

Manifest: `Input_Data/_CORPUS_INDEX.md` (keep current — it is the traceability record the
deliverable requires).

| # | Document | Type |
|---|----------|------|
| 1 | `01_Company_Filings/2026-02-13_talabat_Q4_FY2025_results_press_release.md` | Primary — official IR |
| 2 | `01_Company_Filings/2026-05-12_talabat_Q1_2026_results_press_release.md` | Primary — official IR |
| 3 | `02_Market_Research/2026_IMARC_egypt_online_food_delivery_market.md` | Secondary — report overview |
| 4 | `02_Market_Research/2026_Mordor_egypt_foodservice_market.md` | Secondary — report overview |
| 5 | `03_Competitors/2026-07-20_egypt_delivery_competitive_landscape.md` | Secondary — synthesis, per-claim links |
| 6 | `04_Strategy_News/2026-07-20_talabat_newsroom_index_2024-2026.md` | Primary — newsroom index |
| 7 | `04_Strategy_News/2026-04-28_talabat_egypt_largest_MENA_qcommerce_distribution_center.md` | Primary — official PR |
| 8 | `04_Strategy_News/2025-02-18_talabat_egypt_t_pro_subscription_launch.md` | Primary — official PR |
| 9 | `_CORPUS_INDEX.md` | Manifest + to-download list + data gaps |

Ordering: not meaningful; date-prefixed filenames. Primary sources outrank secondary.

## Key facts (verified, with source)

- FY2025: GMV USD 9.5bn (+28% cFX), revenue USD 3.9bn, Adj. EBITDA USD 615m (6.5%), net income
  USD 464m; 7.5m active customers (Q4 FY25 + Q1 26 press releases)
- Non-GCC (Egypt, Jordan, Iraq): +57% GMV FY2025, +52% Q1 2026 — fastest-growing segment
- 2026: USD 120m "Everyday App" investment (talabat mart, talabat pro, new ventures); margins
  compressing (Q1 26 Adj. EBITDA 4.8% vs 6.3% prior year)
- Egypt: t pro at EGP 79/month (Feb 2025); largest q-commerce DC in MENA opened Apr 2026 (27,000
  sqm, 1m items/day, in-house AI demand forecasting); 3,100 employees; Egypt tech hub delivers 74%
  of group shared services and 30% of app features
- Competitors: Breadfast (~USD 382m valuation, 39 fulfillment centers, ~1m orders/month), Rabbit
  (Saudi expansion 2025), elmenus (lower commissions)
- **⚠️ InstaShop: talabat paid USD 32m (2025, intra-group); USD 360m was Delivery Hero's 2020
  price. Market reports conflate the two.**

## Standing instructions

- **Goal:** see CLAUDE.md — AI Business Plan + OS structure doc + deck; McKinsey standards
  (SCQA, Pyramid, MECE, hypothesis-driven, value driver tree); MENA-grounded figures.
- **Ground claims in the sources** and cite which document each point comes from.
- **Extract before reading** — convert binaries to text/Markdown first; never read them raw.
- **Write artifacts to `Outputs/`**, never into `Input_Data/` (read-only).
- **Propose-then-approve** for destructive vault edits.
- **LLM decision (documented for grading):** Claude subscription (Claude Code / Cowork). Rationale:
  native to the template; corpus is 100% public so confidentiality risk is low; team already
  licensed; predictable cost vs API. Revisit if confidential interview data is added.
- **MCP decision:** none integrated yet; optional distinction credit — decide by end of Phase 2.

## Decisions log

- 2026-07-20 — Company: Talabat (Egypt focus); problem: AI-driven customer retention vs local
  rivals. Chosen over margin-recovery, basket-economics, and dark-store-optimization candidates.
- 2026-07-20 — Started from ProjectX template at folder root; corpus collected before activation.
- 2026-07-20 — AI persona: analyst + chief of staff; style: direct, recommendation-first;
  pressure-test standard: McKinsey (SCQA/MECE/Pyramid) + full GSB 14-section coverage.
- 2026-07-20 — Nightly maintenance available but unscheduled (manual, propose-only) per handout
  guardrail.

## Session log

- 2026-07-20 — Session 1: corpus collection (9 docs), problem selection, charter draft, OS activation.

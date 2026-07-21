# Capstone Problem Charter — Group G02

**Status:** ✅ **APPROVED by Dr. Hossam Daoud** (confirmed 21/07/2026) — team size of 6 and a 30-slide group presentation (5 slides × 6 members) approved alongside the problem statement.
**Instructor:** Dr. Hossam Daoud · **Submission date:** 26/07/2026
**Company:** Talabat Holding plc — Egypt operations (talabat Egypt)

| Team member | AASTMT ID | Role |
|---|---|---|
| Omar Hassan Ali Mohamadin Mohamed | 24125108 | [assign] |
| Ahmed Fawzy Mohamed Rashed | 24220998 | [assign] |
| Mohamed Magdy Abdullah Marawan | 24224459 | [assign] |
| Sherif Samy Abdelhady Karoub | 24225778 | [assign] |
| Ahmed Abd Elhakam Abd Elfattah Zaian | 24224008 | [assign] |
| Abdallah Mahmoud Abdo Ahmed | 24220430 | [assign] |

*Roles per the project guide: OS Architect, Data & Research Lead, Business Plan Lead, Strategy & Risk Lead, Integration & Delivery Lead. The 6-person team size is instructor-approved; how the 6 members map onto the 5 defined roles (e.g., co-leads on one role, or a 6th custom role) is the one remaining open item — see `PROJECT_PROGRESS.md` blockers.*

---

Talabat is MENA's leading on-demand delivery platform (FY2025 GMV USD 9.5bn, 7.5m active customers) operating across eight countries, and Egypt sits inside its fastest-growing segment — non-GCC GMV grew 52–57% y/y through 2025–2026, and as of FY2025 Egypt became talabat's third-largest market by GMV and its largest user base. Yet Egypt is also talabat's most contested and most fragile market: customers battered by 71.9% food inflation and a 38% currency devaluation face near-zero switching costs, while well-funded local rivals attack from every side — Breadfast (~USD 382m valuation, 39 fulfillment centers, ~1m orders/month) and Rabbit on grocery speed and price, and elmenus on lower restaurant commissions. Rising customer acquisition costs, intensifying competition, and fast-evolving customer expectations make retention and Customer Lifetime Value (CLV) a strategic priority — but doing anything about it first requires synthesizing fragmented information scattered across financial reports, investor communications, customer feedback, market intelligence, and competitive analysis. The problem we will solve: **design an AI-powered Agentic Operating System that integrates these fragmented sources into a centralized, evidence-based knowledge base, and use it to produce talabat Egypt's AI-driven customer retention strategy** — churn prediction, personalized offers, and smarter targeting of its t pro subscription (EGP 79/month) — to defend and deepen the customer base in Greater Cairo, where losing a price-sensitive customer costs a fraction of what reacquiring one does. This matters because talabat's 2026 strategy explicitly bets USD 120m on becoming the "Everyday App," and that bet fails in Egypt if order frequency and retention erode faster than subscriptions lock customers in. Data we will use: talabat's quarterly IR disclosures, annual reports, investor/earnings presentations, and IPO prospectus (a 29-document primary corpus, including talabat's first disclosed Egypt-standalone segment financials as of FY2025); official press releases on Egypt operations (t pro launch terms, the Cairo mega distribution center); paid-report public overviews of the Egyptian delivery market (IMARC, Mordor); competitor funding and scale data (Sacra, Tracxn, press); app-market analytics; and, only where proprietary operational data (e.g. individual-customer churn or feedback records) is genuinely unavailable, clearly-labeled synthetic data or primary research (surveys/interviews) to illustrate the retention framework — never substituted for, or presented as, real disclosed company data.

---

*Charter follows the guide's requirement: company, problem, why it matters, obtainable data — one paragraph. Problem statement revised 21/07/2026 (owner's recommendation) to foreground the Agentic OS / knowledge-base deliverable and CLV framing, merged with the original's Egypt-specific evidence. A corpus of 9 Markdown-extracted source documents plus a 29-document native-PDF/XLSX primary-source corpus (annual reports, quarterly financials, investor/earnings decks, IPO prospectus, consensus estimates) is collected in `Input_Data/` and fully processed into `vault/Knowledge/`.*

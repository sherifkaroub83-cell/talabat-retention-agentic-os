# Talabat Knowledge Graph — Relationship Map

How Customers, Restaurants, Riders, talabat pro, Marketplace, Q-Commerce, Advertising, Logistics, AI, Revenue, GMV, and Orders connect, grounded in the facts extracted from all 29 corpus documents (see `vault/Knowledge/Facts/` for full citations). This is a synthesis document — every causal claim below is traceable to a specific fact in the Facts/ topic files; nothing here is introduced from outside the corpus.

## Diagram

```mermaid
flowchart TB
    subgraph Demand["Demand side"]
        Cust["Customers\n(>6.5m Active Customers, Dec 2024\nTLB-001 p.4, p.15)"]
    end

    subgraph Supply["Supply side"]
        Rest["Restaurants & Local Shops\n(58,700 restaurants + 10,000+ Local Shops\n= 68,000+ Active Partners, Dec 2024\nTLB-001 p.4, p.17)"]
        Riders["Riders\n(>123,000 Active Riders, Dec 2024\n~95% via 3PL/freelance model\nTLB-001 p.4; TLB-026 p.131)"]
    end

    subgraph Core["Core marketplace"]
        MP["Marketplace\n(3-sided network / \"talabat flywheel\"\nTLB-001 p.4, p.15)"]
        QC["Q-Commerce\n(tMart dark stores, <30min delivery\n~130 locations end-2024\nTLB-001 p.17)"]
    end

    subgraph Retention["Retention layer"]
        Pro["talabat pro\n(subscription loyalty, since Mar 2022\nEgypt launch Feb 2025\nTLB-001 p.11-12, p.19)"]
        Rewards["talabat rewards\n(points loyalty\nTLB-001 p.19)"]
        AI["AI / ML\n(personalisation after ~6 orders\nUSD 14-30mn+ EBITDA impact\nTLB-001 p.22-23; TLB-002 p.15)"]
    end

    subgraph Monetization["Monetization"]
        Ads["Advertising / AdTech\n(USD 246mn, 3.3% of GMV, 2024\nTLB-001 p.13, p.21)"]
        GMV["GMV\n(USD 7,428mn FY2024, +23% YoY\nTLB-001 p.6, p.26)"]
        Rev["Revenue\n(Mgmt Revenue USD 2,956mn FY2024\n= commission + delivery + ads + subscription\nTLB-001 p.27)"]
    end

    subgraph Ops["Operations"]
        Log["Logistics\n(dispatch algorithms, GPS tracking,\n<30min avg delivery time\nTLB-001 p.15-16, p.23-24)"]
        Orders["Orders\n(6.7x avg frequency/customer, Dec 2024\nvs 6.2x Dec 2023\nTLB-001 p.15)"]
    end

    Cust -->|places orders on| MP
    Cust -->|subscribes to| Pro
    Cust -->|earns/redeems points| Rewards
    Rest -->|lists on| MP
    Riders -->|fulfil via| Log
    MP -->|generates| Orders
    MP -->|hosts inventory for| Ads
    QC -->|extends| MP
    Log -->|executes| Orders
    Log -->|optimised by| AI
    AI -->|personalises| MP
    AI -->|targets| Ads
    AI -->|times offers for| Pro
    AI -->|times offers for| Rewards
    Pro -->|+28% order frequency uplift\nTLB-001 p.18| Orders
    Rewards -->|>15% order frequency uplift (30 days)\nTLB-001 p.19| Orders
    Orders -->|x avg order value =| GMV
    QC -->|contributed 25% of GMV, +47% YoY\nTLB-001 p.11, p.26| GMV
    GMV -->|take rate ~40%\nTLB-001 p.27| Rev
    Ads -->|adds to| Rev
    Pro -->|subscription fees add to\nTLB-001 p.27| Rev
    Pro -->|"turbo-charges customer loyalty"\nTLB-001 p.21| Retention_out["Retention / LTV"]
    AI -->|drives| Retention_out
    Retention_out -->|sustains| Orders
```

## Narrative: how the pieces connect

### 1. Customers, Restaurants, and Riders form the three-sided marketplace

talabat's core structure is explicitly described as a "three-sided marketplace" generating network effects — the "talabat flywheel" (TLB-001, page 4, page 15). As of December 2024: **>6.5 million Active Customers**, **>68,000 Active Partners** (58,700+ restaurants, 10,000+ Local Shops offering 700,000+ SKUs), and **>123,000 Active Riders** (TLB-001, page 4, page 17). More customers attract more Partners (deeper selection); more Partners and better selection attract more customers; both are served by the rider network — the flywheel effect.

### 2. Q-Commerce extends the marketplace into a second growth engine

talabat mart (tMart) — talabat-owned dark stores — extends the marketplace model into quick-commerce grocery, reaching **~130 locations across MENA by end-2024** and growing GMV **47% YoY to 25% of total GMV** (2023: 21%) (TLB-001, page 11, page 26). This is structurally distinct from the Food Vertical's third-party marketplace model: tMart is principal (talabat owns inventory), not agent/commission-based (`Facts/Q-Commerce.md`, `Entities/Delivery_Models.md`).

### 3. Logistics executes Orders and is optimized by AI

Riders fulfil orders via a mix of talabat-managed and third-party logistics (~95% of riders operate via 3PL/freelance arrangements, TLB-026, page 131), supported by dispatch algorithms, GPS tracking, and a rider staffing algorithm (TLB-001, page 16, page 23–24). Average delivery time is held under 30 minutes despite rising fleet utilization (TLB-001, page 12, page 15). AI directly optimizes this layer: predictive dispatch and dynamic route optimization "minimise delivery times and maximise courier efficiency" (TLB-002, page 8), and the CEO explicitly credits "AI-driven logistics improvements" with enhancing delivery times and cost-efficiency (TLB-001, page 10).

### 4. AI is the connective tissue between personalization, retention, and monetization

AI/ML shows up in three distinct roles across the corpus, all converging on the same mechanism — it takes **approximately six orders** for talabat's models to build a personalized profile (TLB-001, page 22–23; TLB-002, page 15; TLB-015, page 84; TLB-026, page 131):
- **Marketplace personalization** — cross-selling verticals and surfacing the right offer at the right time (TLB-001, page 22–23).
- **Loyalty timing** — machine learning "allow[s] it to introduce and cross-sell verticals, as well as initiatives such as talabat pro and talabat Rewards, at the right time for customers" (TLB-023, page 8; echoed in TLB-015, page 84 and TLB-026, page 121).
- **Advertising targeting** — "integration of AI-driven targeting and automated ad-buying processes" (TLB-001, page 13).

The estimated financial impact of this personalization layer **grew from USD 14mn+ incremental EBITDA/year (FY2024, TLB-001 page 23; TLB-015 page 21) to USD 30mn+ (FY2025, TLB-002 page 15)** — a directly quantified, citable link between AI investment and bottom-line impact.

### 5. talabat pro and talabat rewards are the primary retention levers, and they measurably lift order frequency

- **talabat pro** (launched UAE, March 2022; by end-2024 available in 7 of 8 countries; launched Egypt February 2025) drove a **28% uplift in order frequency** among subscribers in September 2024, measured against "lookalike" non-subscribers matched on frequency, basket size, and tenure (TLB-001, page 18, page 19). The FY2025 Annual Report explicitly names "high-value customer retention through our talabat pro subscription programme" as a strategic focus (TLB-002, page 5), and the 2026 strategic objective is to "retain high and medium value customers against partial or complete churn to competition" (TLB-002, page 14).
- **talabat rewards** (points-based) drove a **>15% increase in order frequency within 30 days** of first redemption (TLB-001, page 19).
- **talabat PostPaid** (BNPL) is described as "accretive to order frequency and customer retention" with a measured 14% frequency increase post-adoption (TLB-001, page 9, page 18).

These retention mechanisms feed directly back into **Orders**: average order frequency rose from **6.2x (Dec 2023) to 6.7x (Dec 2024)** per active customer (TLB-001, page 15), and 2024 GMV growth is explicitly attributed to "a 25% expansion in monthly active users **and an 8% uplift in order frequency**" (TLB-001, page 26) — i.e., retention/frequency is a named, quantified GMV growth driver, not just a qualitative aspiration.

### 6. Orders and GMV drive Revenue, which advertising and subscription both contribute to directly

GMV (USD 7,428mn FY2024, +23% YoY, TLB-001 page 6/26) is the total transaction value flowing through the marketplace and Q-commerce; it explicitly **excludes subscription fees and rider tips** (TLB-001, page 27). Management Revenue (USD 2,956mn FY2024, +32% YoY, ~40% take rate of GMV) is built from four lines: commission fees, delivery & service fees, advertising & listing fees, and subscription fee & other income (TLB-001, page 27). This means:
- **Marketplace/Q-Commerce orders → GMV** (transaction volume × basket size)
- **GMV → Revenue** via the ~40% blended take rate
- **Advertising** (USD 246mn, 3.3% of GMV in 2024, TLB-001 page 13/21) sits on top of marketplace inventory as an independent revenue line, monetizing the same Partner base that AI helps target
- **Subscription** (talabat pro fees, USD 952mn "Subscription fee & Other Income," +44% YoY, TLB-001 page 27) is a direct revenue line **and** an indirect GMV driver via the frequency uplift described above — subscription is monetized twice: once directly (fee) and once indirectly (more orders)

### 7. Egypt sits at the intersection of every layer above, with a maturing data trail

Egypt's position in this graph has become progressively more visible across the corpus's timeline:
- **Pre-2025 (TLB-026, IPO prospectus, Nov 2024):** Egypt = 6% of 2023 revenue but only 1% of Adjusted EBITDA; talabat pro **not yet live** in Egypt.
- **Feb 2025 (TLB-001):** talabat pro launches in Egypt — "now available in seven of the eight countries."
- **FY2025 (TLB-002, TLB-008):** Egypt becomes a **standalone reportable segment** — revenue USD 509.9m, gross profit USD 125.0m, net profit USD 44.4m — the Group's 3rd-largest revenue country.
- **Q1 2026 (TLB-010):** Egypt segment revenue USD 145.3m, ~81% YoY growth, swinging from near-breakeven to a USD 9.4m profit before tax.
- **Q4/FY2025 results (TLB-019):** "Egypt is now our third largest market by GMV, after UAE and Kuwait, and our largest user base."

This progression — from an undisclosed sub-segment with no loyalty program, to a standalone, profitable, fast-growing segment with talabat pro live for roughly a year — is itself the central empirical basis for the capstone's retention-strategy recommendation: Egypt has just crossed the threshold where the corpus's own retention mechanisms (talabat pro frequency uplift, AI personalization, rewards) have measurable room to compound.

## See also

- `vault/Knowledge/Facts/` — the 14 topic-based fact files this map draws from
- `vault/Knowledge/Entities/` — the deduplicated entity rosters
- `vault/Knowledge/Sources/` — the 29 individual source notes, each with full Egypt-mention and retention-relevant sections

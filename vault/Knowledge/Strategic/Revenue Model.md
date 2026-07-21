# Revenue Model

## Thesis
talabat's revenue is not four independent fee lines but a single GMV-times-take-rate system in which
commission fees, delivery/service fees, subscription fee & other income, and advertising & listing fees
each respond to a *different* underlying volume or pricing driver — meaning the blended take rate (~40-41%
of GMV across FY2024-2025) moves not because talabat raises prices uniformly, but because the *mix* shifts
toward higher-take-rate lines (subscription, advertising, tMart) as the customer base matures and engages
more deeply.

## Synthesis
The starting identity in the corpus is that Management Revenue is GMV multiplied by a blended take rate:
GMV grew from USD 7,428mn (FY2024) to USD 9,421-9,512mn (FY2025), while Management Revenue rose from
39.8% of GMV toward 40-41% over the same period ([[GMV]]; [[Revenue Drivers]]; TLB-001, page 27; TLB-002,
page 20). Because revenue growth repeatedly outpaced GMV growth in the corpus's periodic results, the take
rate itself is a variable the business plan should treat as a driver in its own right, not a constant — and
the corpus is explicit, period by period, about *why* it moved: AdTech upside and tMart's rising revenue
share in 2024 (TLB-012, page 19); higher subscription fees and tMart contribution in Q1 2025 (TLB-013,
page 18); and higher tMart share plus AdTech margins in Q1 2026, partly offset by lower commission rates
and rising talabat pro adoption (TLB-014, page 15). Each of the four fee lines therefore needs its own
volume/pricing logic rather than being treated as a fixed percentage of GMV.

**Commission fees** are the structurally oldest line and the direct monetization of the core agent-model
marketplace transaction — talabat earns a commission on food-service and Local Shop orders without owning
inventory ([[Marketplace]]). Commission fees were the largest single revenue component in FY2024
(USD 1,062mn) and FY2025 (USD 1,297mn), but grew more slowly than the other three lines (+25% and +22%
respectively vs. +44-47% for subscription), and the FY2025 revenue mix as a share of GMV *fell* slightly in
Q1 2026 (12.8% vs. 13.4% a year earlier per TLB-011, page 4) even as absolute dollars rose — the corpus
explicitly names "lower commission rates" as a contributing factor to that Q1 2026 mix shift (TLB-014,
page 15). Commission's driver, in other words, is Food-vertical order volume, but its *rate* appears to be
under some downward pressure — plausibly linked to the competitive dynamics [[Competition]] documents
(commission caps in Qatar, licensing disputes in Oman), though the corpus does not draw that link explicitly
for Egypt.

**Delivery & service fees** are the second-oldest line and are more directly a function of order count and
basket composition than of customer loyalty — they move with [[Orders]] and average order value, and the
corpus lists them as growing steadily (+29% in FY2024, +24% in FY2025) but not disproportionately, tracking
overall order growth rather than outpacing it. Because talabat pro's flagship benefit is *free delivery
above a minimum basket*, this line has a direct tension with the subscription line: growing pro adoption
mechanically reduces per-order delivery-fee revenue for subscribed customers even as it raises order
frequency — a trade-off [[Talabat Pro]] and [[Revenue Drivers]] both flag but do not fully quantify at the
net level.

**Subscription fee & other income** is the fastest-growing line (+44% in FY2024, +47% in FY2025) and,
distinctively, is driven by a *penetration* variable (share of active customers subscribed to talabat pro)
rather than a pure volume variable — subscription revenue rises as more customers convert to pro, and
pro-adoption rose from 8.3% penetration (UAE, Sept 2024, pre-Egypt-launch baseline) to subscribers
accounting for roughly half of platform GMV by Q1 2026 ([[Talabat Pro]]; TLB-026, page 30; TLB-020, page 8).
Note that this revenue line's own definition is not fully stable across the corpus: TLB-001/TLB-029 report a
combined "Subscription fee & Other Income" line (USD 952mn, FY2024), while TLB-011's Q1 2026 revenue-mix
table separates "Subscription fees" (1.0% of GMV) from a distinct "Own grocery & other income" line (15.2%
of GMV) — this appears to reflect tMart's near-95%-take-rate principal revenue being folded into "other
income" in some periods and reported separately in others, a reclassification the corpus does not explain
(see Open Questions). What is clear is that subscription is the only line the corpus explicitly frames as
having a second, indirect revenue effect: it is "monetized twice," once as a direct fee and once via the
20-28% order-frequency uplift subscribers show, which feeds back into commission and delivery-fee volume
([[Relationship_Map]], section 6).

**Advertising & listing fees** are the smallest but most structurally under-penetrated line relative to its
own stated benchmark: AdTech grew from USD 84mn (2.1% of GMV, 2021) to USD 323mn (3.4-3.5% of GMV, FY2025),
against a management-stated medium-term target of ~7% of GMV already reached in the UAE for talabat mart
specifically ([[Advertising]]; TLB-001, page 21; TLB-002, page 10). Advertising's driver is Partner demand
for visibility, which in turn depends on how much Customer attention/engagement talabat can offer — meaning
advertising revenue is, structurally, a lagging function of the other three lines' success at building an
engaged, frequently-ordering customer base rather than an independent driver in its own right.

Read together, the four lines describe a revenue model that rewards *deepening* engagement with existing
customers (subscription penetration, order frequency, cross-vertical usage) more than it rewards raw
transaction volume alone — which is precisely the mechanism the capstone's AI-driven retention thesis needs:
an Egypt strategy that lifts talabat pro penetration and order frequency does not just improve a retention
KPI, it directly raises the blended take rate through mix shift toward the fastest-growing, highest-margin
revenue line in the model.

## Evidence Basis
- [[Revenue Drivers]] — the GMV-times-take-rate framing and the period-by-period causal narrative for why revenue outpaced GMV.
- [[GMV]] — the volume base the take rate is applied to.
- [[Marketplace]] — the commission/agent-model mechanics underlying the commission fee line.
- [[Quick Commerce]] — tMart's near-95% take rate and its effect on the blended mix.
- [[Talabat Pro]] — the subscription line's penetration-driven growth and its dual (fee + frequency) revenue effect.
- [[Advertising]] — the AdTech line's under-penetration relative to its own stated benchmark.
- `Facts/Revenue.md` — the per-document revenue-by-type figures (TLB-001, TLB-002, TLB-004 through TLB-011, TLB-019, TLB-029) this note's numbers are drawn from.
- [[Competition]] — the commission-rate-pressure context relevant to the commission line's slower growth.

## Egypt-Specific Considerations
No document in the corpus breaks out Egypt's revenue by the four fee-type lines — Egypt's only disclosed
figures are total segment revenue (USD 509.9mn FY2025; USD 145.3mn Q1 2026, ~81% YoY growth per
[[Segment Reporting]]), not a commission/delivery/subscription/advertising split. This means the entire
mix-shift argument above — that deepening engagement raises the blended take rate — is a Group-level
mechanism being proposed as applicable to Egypt, not something directly observed for Egypt. Given Egypt's
talabat pro programme is only ~18 months old at the point of this analysis (launched February 2025), it is
plausible Egypt's revenue mix is still commission/delivery-fee-heavy relative to the Group blend, with
subscription and advertising shares still building — but this is this note's synthesis, not a disclosed fact.

## Open Questions
- The corpus does not reconcile the "Subscription fee & Other Income" combined line (used in TLB-001,
  TLB-002, TLB-029) against TLB-011's separated "Subscription fees" vs. "Own grocery & other income" lines
  — it is unclear whether this is a reporting-period reclassification or a definitional change, and the
  business plan should not blend figures across the two conventions without flagging this.
- No Egypt-specific revenue-by-fee-type breakdown exists anywhere in the corpus.
- TLB-014 states 2026 reporting shifts to IFRS-only revenue, discontinuing the "Management Revenue"
  construct this note (and most of the corpus) is built on — how this affects future comparability of the
  four-line revenue model is not stated.
- The corpus names "lower commission rates" as a factor in the Q1 2026 mix shift but does not explain
  whether this reflects competitive pressure, regulatory caps, or a deliberate strategic choice.

## Strategic Implications
- An Egypt retention strategy built around accelerating talabat pro conversion should be pitched as a
  revenue-mix-shift lever, not only a retention-KPI lever — it directly targets the fastest-growing,
  most under-penetrated-relative-to-benchmark line in the model (subscription, and secondarily advertising).
- Because delivery-fee revenue is structurally eroded by pro's free-delivery benefit, the business plan's
  financial model should net out this cannibalization against the frequency uplift, rather than presenting
  pro adoption as additive to every revenue line simultaneously.
- The advertising line's headroom versus its own ~7%-of-GMV benchmark suggests that as Egypt's retained,
  frequently-ordering customer base grows, Egypt-specific AdTech monetization is a second-order revenue
  opportunity worth flagging in the business plan, even though no Egypt AdTech figure currently exists to size it.
- Given the total absence of an Egypt fee-type breakdown, any Egypt revenue-mix projection in the business
  plan must be presented as an estimate derived from Group-level ratios, explicitly labeled as such per the
  project's standing instruction on synthetic/derived data.

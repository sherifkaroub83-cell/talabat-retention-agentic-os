---
type: register
status: active
created: "2026-07-21"
---

# Assumptions Register

Single source of truth for every assumption used anywhere downstream of the raw corpus (a forecast
growth rate, an adopted market-size figure, a funnel-conversion estimate, a resolved-conflict
figure). Schema defined in
[[Decision_Management_Layer]].

**Rule:** no number may appear in the Business Plan (`Outputs/`) unless it either (a) is a direct
quote of a Fact/Source note citation, or (b) has a row here with an Assumption ID the plan cites.

**Current status:** empty. This register is populated as the Business Plan Generation Pipeline runs
(External Research, Forecasting, and Decision stages) — not during architecture design. See
`vault/Architecture/Implementation_Roadmap.md` for when drafting begins.

| Assumption ID | Statement | Value | Tier | Source | Confidence | Status | Used in (BP sections) | Last updated |
|---|---|---|---|---|---|---|---|---|
| ASM-001 | Egypt's relative food-service category-share figure is presented as two footnoted values, not blended; the more conservative, more recently-dated figure is used for qualitative framing | "10x+" (TLB-001/TLB-002) and "1x+ (IPO) → 4x+ (YE'25)" (TLB-014), both stated; 4x+ used as headline framing | Decision | [[DEC-001_egypt-category-share-figure]] (built on TLB-001 p.5, TLB-002 p.5, TLB-014 p.4) | Medium | Approved | Section 3 | 2026-07-22 |
| ASM-002 | Egypt-specific named competitors (Breadfast, Rabbit, elmenus, Akelni/Mrsool, Roboost) may be cited in the Business Plan as secondary/non-primary-corpus evidence, explicitly and separately labeled as such | Named list per RES-001 | External Research | [[RES-001_egypt-named-competitors]] (built on `Input_Data/03_Competitors/2026-07-20_egypt_delivery_competitive_landscape.md`) | Medium | Approved | Section 3 | 2026-07-22 |
| ASM-003 | Egypt market size is presented three ways, explicitly labeled and not force-reconciled into one number: bottom-up = talabat's own disclosed Egypt revenue; top-down ceiling = Mordor total foodservice; IMARC online-food-delivery figure cited only as a flagged, internally-inconsistent lower-bound reference | Bottom-up: USD 509.9m (FY2025 Egypt segment revenue, TLB-002/TLB-008); top-down ceiling: USD 10.35–11.83bn total foodservice, delivery growing 14.52% CAGR (Mordor, RES-003); reference-only: USD 542.9m online food delivery (IMARC, RES-002, flagged inconsistent) | Decision | [[DEC-002_egypt-market-size-definition]] (built on TLB-002, TLB-008, RES-002, RES-003) | Medium | Approved | Section 3 | 2026-07-22 |
| ASM-004 | Egypt-specific operational/tech datapoints from talabat's official newsroom (outside the audited TLB-XXX regime) may be cited in Section 3's Opportunities discussion, explicitly labeled as sourced from the official newsroom, not yet vault-ingested | Largest MENA q-commerce DC in Egypt (~27,000 sqm, AI demand forecasting); 3,100 Egypt employees incl. 1,500-person Global Tech & Shared Services hub (74% of shared services, 30% of app features, Group-wide); 10,000+ Egypt Partners; t pro EGP 79/month | External Research | [[RES-004_egypt-official-newsroom-operational-datapoints]] | Medium-High | Approved | Section 3 | 2026-07-22 |

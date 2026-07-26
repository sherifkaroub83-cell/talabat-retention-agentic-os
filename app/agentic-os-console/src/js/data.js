/* ============================================================================
   talabat Agentic OS Console — repository state snapshot
   Generated from the repository's governing documents on 2026-07-24:
   Problem_Charter.md, PROJECT_PROGRESS.md, vault/Architecture/*,
   vault/Decisions/*, vault/Forecasts/*, vault/Projects/*.
   This file is the single data source for the UI. To refresh the console,
   re-generate this snapshot from the repo (see README.md).
   ========================================================================== */

export const DATA = {
  meta: {
    appName: "talabat Agentic OS",
    subtitle: "Capital Allocation Command Console",
    problem:
      "How should talabat allocate its 2026 USD 175 million investment programme across Everyday App and Food-leadership initiatives — and within them, across markets and initiative categories — to maximise profitable growth, CLV, retention, and long-term platform economics?",
    charterStatus: "Active — governing problem for the Agentic OS",
    pivotDate: "2026-07-23",
    snapshotDate: "2026-07-26",
    group: "AASTMT MBA Capstone — Group G02",
    course: "AI for Business Organizations Track — Dr. Hossam Daoud",
    owner: "Sherif Samy Karoub",
    markets: ["UAE", "Kuwait", "Qatar", "Bahrain", "Oman", "Jordan", "Iraq", "Egypt"],
  },

  companyKpis: [
    { label: "FY2025 GMV", value: "$9.5bn", delta: "+28% cFX", tone: "up" },
    { label: "FY2025 Revenue", value: "$3.9bn", delta: "Group, 8 markets", tone: "flat" },
    { label: "Adj. EBITDA FY2025", value: "$615m", delta: "6.5% margin", tone: "up" },
    { label: "Active customers", value: "7.5m", delta: "Group-wide", tone: "flat" },
    { label: "Q1 2026 EBITDA margin", value: "4.8%", delta: "vs 6.3% Q1 2025", tone: "down" },
  ],

  allocation: {
    total: 175,
    unit: "USD million · Board-approved 2026 investment programme",
    parts: [
      {
        name: "Everyday App initiatives",
        amount: 120,
        color: "cat1",
        detail: "talabat pro · AI personalisation · multi-vertical cross-sell · grocery/retail expansion · new ventures",
      },
      {
        name: "Food-leadership initiatives",
        amount: 55,
        color: "cat2",
        detail: "Restaurant-partner growth · food customer value proposition · delivery reliability",
      },
    ],
  },

  milestones: [
    { n: 1, name: "Problem & Charter", weeks: "wk 1–2", status: "done", note: "Charter approved; pivoted 23/07 to Group capital allocation. Open: map 6 members to 5 roles." },
    { n: 2, name: "OS Activation", weeks: "wk 2–3", status: "active", note: "Template + skills live. Remaining: agent-role documentation, MCP decision, team walkthrough." },
    { n: 3, name: "Data Collection & Ingestion", weeks: "wk 3–5", status: "done", note: "9-doc Markdown + 29-doc PDF corpus → 103-note connected knowledge graph, 0 orphans." },
    { n: 4, name: "Analysis & Business Plan", weeks: "wk 5–8", status: "done", note: "All 14 sections drafted under the pivoted problem (v2); independent Pass 2 verification pending." },
    { n: 5, name: "Finalize & Present", weeks: "wk 8–9", status: "todo", note: "Whole-plan gates → publication layer → OS structure doc + 30-slide deck → Moodle." },
  ],

  sections: [
    { n: 1,  name: "Executive Summary (SCQA)",            status: "done_iv", note: "Merged lineage: drafted last, Stage 17 fixes applied, verified via main lineage (2026-07-25)." },
    { n: 2,  name: "Business Description",                status: "done_iv", note: "Pass 2 + fix cycle + re-verification PASS (2026-07-25)." },
    { n: 3,  name: "Market Analysis",                     status: "done_iv", note: "Pass 2 caught Egypt-in-non-GCC composition defect; fixed; re-verification double-PASS (2026-07-25)." },
    { n: 4,  name: "Value Proposition",                   status: "done_iv", note: "Pass 2 (3 hard + 6 blocking) fixed; re-verification double-PASS (2026-07-25)." },
    { n: 5,  name: "AI Technology & Development",         status: "done_iv", note: "Pass 2 (8 hard + 6 blocking) fixed incl. skill-map root cause; re-verification double-PASS (2026-07-25)." },
    { n: 6,  name: "Business Model & Revenue Streams",    status: "done_iv", note: "Pass 2 fixed incl. DEC-013 container re-issuance; fee-mix conflict resolved at root (DEC-014); double-PASS (2026-07-25)." },
    { n: 7,  name: "Marketing & Sales Strategy",          status: "done_iv", note: "Pass 2 fixed (5 hard + 3 blocking); synthetic labeling verified exemplary; double-PASS (2026-07-25)." },
    { n: 8,  name: "Operations Plan",                     status: "done_iv", note: "Verified via main lineage (Pass 2/3 + Stage 17); TLB-026 primary-source citations re-checked." },
    { n: 9,  name: "Financial Plan",                      status: "done_iv", note: "Verified via main lineage; DEC-008/DEC-010 presentation rules held." },
    { n: 10, name: "Risk Analysis",                       status: "done_iv", note: "Verified via main lineage (Pass 2/3 + Stage 17)." },
    { n: 11, name: "CSR & Responsible AI",                status: "done_iv", note: "Verified via main lineage (Pass 2/3 + Stage 17)." },
    { n: 12, name: "Implementation Plan (Three Horizons)", status: "done_iv", note: "Verified via main lineage; Three Horizons heading fix (Stage 18)." },
    { n: 13, name: "Monitoring & Evaluation (KPIs)",      status: "done_iv", note: "Verified via main lineage; survived the recurring iCloud sync-conflict incident." },
    { n: 14, name: "Appendices + Traceability",           status: "done_iv", note: "Verified via main lineage; 40-row traceability table + Stage 17 fixes." },
  ],
  sectionStatusLegend: {
    done_iv: "Done — independently verified",
    done_sr: "Done — self-reviewed",
    drafted: "Drafted — needs verification",
    progress: "In progress",
    todo: "Not started",
  },

  pipeline: {
    partA: {
      title: "Part A — Plan-Level Setup",
      subtitle: "Stages 1–12 · run once per active problem",
      stages: [
        { n: 1,  name: "Confirm business question",           owner: "bp-orchestrator",   status: "done",    note: "Problem_Charter.md rewritten 2026-07-23 — Active." },
        { n: 2,  name: "Assemble investment evidence",        owner: "bp-orchestrator",   status: "done",    note: "13 new Topic Notes + Investment Relationship Map." },
        { n: 3,  name: "Identify candidate investment options", owner: "decision-steward", status: "done",   note: "5 candidates OPT-001–005 populated." },
        { n: 4,  name: "Detect evidence gaps / conflicts",    owner: "bp-orchestrator",   status: "done",    note: "Every Topic Note documents its own gaps explicitly." },
        { n: 5,  name: "Targeted research",                   owner: "research-agent",    status: "done",    note: "First post-pivot run 2026-07-24: RES-005/006/007 (parent disclosure benchmark, GCC q-commerce outlook, ads monetization)." },
        { n: 6,  name: "Define decision criteria",            owner: "decision-steward",  status: "done",    note: "11-criterion comparison framework." },
        { n: 7,  name: "Build value-driver trees",            owner: "forecasting-agent", status: "done",    note: "Value_Driver_Tree_v2.md — 45 nodes." },
        { n: 8,  name: "Register assumptions",                owner: "decision-steward",  status: "done",    note: "ASM-015–033 registered, all Approved." },
        { n: 9,  name: "Build scenarios",                     owner: "forecasting-agent", status: "done",    note: "Scenarios_v2.md — base/upside/downside + 8 modules." },
        { n: 10, name: "Rank investment options",             owner: "decision-steward",  status: "done",    note: "DEC-009 — descriptive tiering, never a single blended score." },
        { n: 11, name: "Allocation ranges / pilot sequencing", owner: "decision-steward", status: "done",    note: "Portfolio Register ranges (ASM-029–033); ranges never a headline exhibit." },
        { n: 12, name: "Define KPIs / stage gates",           owner: "kpi-agent",         status: "done",    note: "Per-option gates verified 2026-07-24 — all 5 OPT records carry full gates; 3 KPI-tree gaps flagged for disposition." },
      ],
    },
    partB: {
      title: "Part B — Per-Section Drafting Loop",
      subtitle: "Stage 13 · the original 11-stage loop, run once per section",
      stages: [
        { n: "13.1",  name: "Intake & Scoping",                          owner: "bp-orchestrator" },
        { n: "13.2",  name: "Evidence Assembly",                         owner: "bp-orchestrator" },
        { n: "13.3",  name: "Gap Detection",                             owner: "bp-orchestrator" },
        { n: "13.4",  name: "External Research Resolution",              owner: "research-agent" },
        { n: "13.5",  name: "Forecast & Assumption Generation",          owner: "forecasting-agent" },
        { n: "13.6",  name: "Decision Escalation",                       owner: "decision-steward" },
        { n: "13.7",  name: "Evidence Ranking & Conflict Resolution",    owner: "evidence-citation-agent" },
        { n: "13.8",  name: "Drafting (McKinsey Lens)",                  owner: "bp-orchestrator" },
        { n: "13.9",  name: "Citation Verification",                     owner: "evidence-citation-agent" },
        { n: "13.10", name: "Cross-Section Consistency & KPI Alignment", owner: "kpi-agent" },
        { n: "13.11", name: "QA & Final Review",                         owner: "qa-review-agent" },
      ],
      gateRules: [
        "13.8 cannot start while any gap typed in 13.3 (external / forecast / decision) is unresolved for that claim.",
        "13.11 is the only sub-stage that can move a section to Done. 13.9 passing alone only earns Drafted.",
        "Two-pass verification: same-context review = Done (self-reviewed); a fresh, separately-invoked Pass 2 is required for Done (independently verified) — submission-final status.",
        "Section 1 skips 13.2–13.7 and 13.10 — gated until all 13 other sections reach Drafted.",
        "A sub-stage may report 'not applicable' — recorded explicitly, never silently skipped.",
      ],
    },
    partC: {
      title: "Part C — Whole-Plan Gates",
      subtitle: "Stages 14–19 · run once, after all 14 sections reach Drafted or better",
      stages: [
        { n: 14, name: "Cross-section consistency review", owner: "qa-review-agent",         status: "done", note: "Problem Consistency Gate at whole-plan scope — PASS, re-verified post-merge 2026-07-26." },
        { n: 15, name: "Financial consistency review",     owner: "qa-review-agent",         status: "done", note: "Financial Integrity Gate — Sections 6/9/12/13 reconcile with each other — PASS, re-verified post-merge 2026-07-26." },
        { n: 16, name: "Geographic evidence review",       owner: "qa-review-agent",         status: "done", note: "Geographic Evidence Gate — no inconsistent geography tags — PASS, re-verified post-merge 2026-07-26." },
        { n: 17, name: "Whole-plan citation audit",        owner: "evidence-citation-agent", status: "done", note: "Every claim in the assembled plan re-checked together — PASS, 9/9 fixes independently re-verified, zero open failures." },
        { n: 18, name: "Template Compliance Gate",         owner: "template-compliance-gate", status: "done", note: "Section count / numbering / titles / order intact — PASS, structure re-confirmed post-merge." },
        { n: 19, name: "Hand off to Publication Layer",    owner: "bp-orchestrator",         status: "todo", note: "Formal handoff to executive-document-formatting — next; published DOCX/PDF predates the Stage 17 fixes and needs regenerating." },
      ],
    },
  },

  agents: [
    {
      id: "bp-orchestrator", name: "Orchestrator", icon: "◉",
      mission: "Runs the 19-stage Business Plan Generation Pipeline; sequences the other seven agents; holds pipeline state in the Project tracker.",
      skills: ["business-plan-drafting"],
      stages: "All — pipeline owner",
      interacts: ["All seven specialist agents"],
      success: "No section reaches Drafted while an upstream stage is still open; every stage transition is logged.",
    },
    {
      id: "research-agent", name: "Research Agent", icon: "◈",
      mission: "Resolves a named external-evidence gap the corpus cannot fill, using web research, and registers the finding with publisher, date, and confidence level.",
      skills: ["external-research"],
      stages: "5 · 13.4",
      interacts: ["bp-orchestrator", "decision-steward", "evidence-citation-agent"],
      success: "Zero external figures enter the plan without a Research Note stating publisher + date + confidence.",
    },
    {
      id: "forecasting-agent", name: "Forecasting Agent", icon: "◮",
      mission: "Turns a historical Fact into a method-transparent forecast (base/upside/downside) and maintains the Value Driver Tree.",
      skills: ["forecast-builder"],
      stages: "7 · 9 · 13.5",
      interacts: ["decision-steward", "kpi-agent", "bp-orchestrator"],
      success: "Every forecast has a named historical anchor, stated growth logic, three scenarios, and an assumption ID.",
    },
    {
      id: "decision-steward", name: "Decision Steward", icon: "◆",
      mission: "Owns the Decision Log and Assumptions Register; converts open questions into structured, dated, owned Decision records.",
      skills: ["decision-log"],
      stages: "3 · 6 · 8 · 10 · 11 · 13.6",
      interacts: ["Every agent that surfaces an open question", "the human user"],
      success: "Every open item has exactly one Decision record; no assumption enters a forecast or section without a register ID.",
    },
    {
      id: "evidence-citation-agent", name: "Evidence & Citation Agent", icon: "❖",
      mission: "Ranks competing evidence, resolves or footnotes conflicts, and verifies every claim traces to a real vault note or registered assumption.",
      skills: ["evidence-ranking", "citation-audit"],
      stages: "13.7 · 13.9 · 17",
      interacts: ["bp-orchestrator", "decision-steward", "qa-review-agent"],
      success: "100% of numeric claims have a resolvable citation chain; zero silently-picked numbers.",
    },
    {
      id: "kpi-agent", name: "KPI & Metrics Agent", icon: "◫",
      mission: "Builds the monitored KPI tree from the Value Driver Tree and Section 4's value mechanisms, splitting leading vs lagging indicators.",
      skills: [],
      stages: "12 · 13.10",
      interacts: ["forecasting-agent", "bp-orchestrator"],
      success: "Every KPI traces to a value-driver-tree node and is tagged baseline-exists / newly-instrumented.",
    },
    {
      id: "exec-summary-agent", name: "Executive Summary Agent", icon: "◎",
      mission: "Synthesizes finished Sections 2–13 into the SCQA Executive Summary. Gated — blocked until all other sections are drafted.",
      skills: ["business-plan-drafting"],
      stages: "13.8 for Section 1 only",
      interacts: ["bp-orchestrator (gated dependency)"],
      success: "Section 1's Answer matches the plan's actual recommendation; no claim absent from Sections 2–13.",
    },
    {
      id: "qa-review-agent", name: "QA / Final Review Agent", icon: "✓",
      mission: "Final gate on every section: McKinsey Lens pressure test, template completeness, anti-patterns checklist, plus the Problem Consistency, Financial Integrity, and Geographic Evidence gates.",
      skills: ["qa-review"],
      stages: "13.11 · 14 · 15 · 16",
      interacts: ["bp-orchestrator", "evidence-citation-agent"],
      success: "No section is marked Done without a passed QA review on file.",
    },
  ],

  evidenceTiers: [
    { n: 1, name: "Repository Facts",     path: "vault/Knowledge/Facts", desc: "Disclosed, cited figures extracted from the 37-document corpus. The only tier that touches source documents directly.", count: "103-note knowledge graph" },
    { n: 2, name: "External Research",    path: "vault/Research", desc: "Named-gap findings from outside the corpus — publisher, URL, retrieval date, and confidence on every note.", count: "8 research notes (3 post-pivot, 4 superseded)" },
    { n: 3, name: "Forecasts",            path: "vault/Forecasts", desc: "Method-transparent projections anchored to Facts: value driver tree, scenarios, KPI tree.", count: "45 VDT nodes · 50 KPIs · 3 scenarios" },
    { n: 4, name: "Management Decisions", path: "vault/Decisions", desc: "Structured, dated, owned judgment calls with an auditable evidence trail and assumption register.", count: "10 decisions · 47 assumptions · 5 options" },
    { n: 5, name: "Business Plan",        path: "Outputs/", desc: "The deliverable itself. No number reaches this tier without resolving to a Facts citation or an Approved assumption.", count: "14 sections drafted (v2)" },
  ],

  corpus: {
    total: 37,
    note: "Native PDFs + Markdown extracts in Input_Data/ (read-only). Primary sources (official talabat IR/newsroom) outrank secondary.",
    categories: [
      { name: "Annual Reports", count: 2, kind: "primary" },
      { name: "Company Filings (press releases)", count: 2, kind: "primary" },
      { name: "Quarterly Financial Statements", count: 9, kind: "primary" },
      { name: "Investor Presentations", count: 4, kind: "primary" },
      { name: "Earnings Call Presentations", count: 5, kind: "primary" },
      { name: "Regulatory & IPO", count: 6, kind: "primary" },
      { name: "Consensus Reports", count: 2, kind: "primary" },
      { name: "Supplementary Data (XLSX)", count: 1, kind: "primary" },
      { name: "Market Research", count: 2, kind: "secondary" },
      { name: "Competitors", count: 1, kind: "secondary" },
      { name: "Strategy News", count: 3, kind: "secondary" },
    ],
  },

  decisions: [
    { id: "DEC-001", title: "Egypt category-share figure", status: "approved", note: "Two footnoted values, not blended; conservative figure leads." },
    { id: "DEC-002", title: "Egypt market-size definition", status: "approved", note: "Three explicitly-labeled market-size framings, never force-reconciled." },
    { id: "DEC-003", title: "Section 2 governing hypothesis", status: "approved", note: "First human-confirmed strategic decision (via AskUserQuestion escalation)." },
    { id: "DEC-004", title: "2026 investment total", status: "approved", note: "Reconciled the USD 175m discrepancy previously assumed irreconcilable." },
    { id: "DEC-005", title: "Section 9 headline scenario", status: "approved", note: "Base case as headline; upside/downside as labeled sensitivities." },
    { id: "DEC-006", title: "Subscription revenue-line reclassification", status: "approved", note: "" },
    { id: "DEC-007", title: "Section 13 review cadence & kill criteria", status: "approved", note: "" },
    { id: "DEC-008", title: "Section 9 headline bucket-split presentation", status: "approved", note: "Base case presented with the $120m/$55m bucket split." },
    { id: "DEC-009", title: "Investment-options ranking & allocation priority", status: "approved", note: "Middle path — funding sequence stated narratively; allocation ranges never a headline exhibit." },
    { id: "DEC-010", title: "2026 investment-total reissuance", status: "approved", note: "" },
    { id: "DEC-011", title: "MCP layer — pursue (vault-mcp)", status: "approved", note: "Read-only MCP server built and registered; closes the Phase-2 open question and the OS's missing tools layer." },
    { id: "DEC-012", title: "Production platform track (scoped)", status: "approved", note: "Track B approved 2026-07-25 as Option 2: incremental kernel/tests/CI evolution; enterprise stack deferred; capstone always takes precedence." },
    { id: "DEC-013", title: "Subscription-line reclassification re-issuance", status: "approved", note: "Procedural re-issuance of superseded DEC-006 (DEC-010 precedent); ASM-013 re-established." },
    { id: "DEC-014", title: "TLB-019 fee-mix label correction", status: "approved", note: "Label-shift confirmed by 16-value arithmetic reconstruction; Facts layer corrected at root." },
  ],

  options: [
    { id: "OPT-001", title: "talabat mart dark-store densification", bucket: "Everyday App" },
    { id: "OPT-002", title: "talabat pro acceleration — Egypt & Iraq", bucket: "Everyday App" },
    { id: "OPT-003", title: "Food-leadership CVP & partner retention — GCC-3", bucket: "Food-leadership" },
    { id: "OPT-004", title: "Advertising monetization gap closure", bucket: "Everyday App" },
    { id: "OPT-005", title: "AI personalisation capability scaling", bucket: "Everyday App" },
  ],

  registers: [
    { name: "Assumptions Register", count: 47, status: "All post-pivot rows Approved; 4 new ASM candidates from RES-005..007 await disposition", icon: "≔" },
    { name: "Decision Log", count: 14, status: "DEC-001–014, all approved", icon: "◆" },
    { name: "Investment Options", count: 5, status: "OPT-001–005 with verified stage gates (2026-07-24)", icon: "▤" },
    { name: "Research Register", count: 8, status: "RES-005..007 resolved 2026-07-24 (first post-pivot run); 4 pre-pivot notes superseded", icon: "◈" },
  ],

  forecasts: {
    vdt: { name: "Value Driver Tree v2", nodes: 45, desc: "Group-wide driver decomposition from GMV → revenue → EBITDA, mapped to the two investment buckets." },
    scenarios: {
      name: "Scenarios v2", modules: 8,
      cases: [
        { name: "Base",     desc: "Headline case (per DEC-005 / DEC-008) — disclosed trajectory with the $120m/$55m split." },
        { name: "Upside",   desc: "Labeled sensitivity — faster Everyday App adoption and adtech scaling." },
        { name: "Downside", desc: "Labeled sensitivity — margin compression persists; competitive intensity rises." },
      ],
    },
    kpis: { name: "KPI Tree v2", count: 50, desc: "Leading vs lagging split; every KPI traces to a VDT node and is tagged baseline-exists / newly-instrumented." },
  },

  gates: [
    { name: "Problem Consistency Gate", stage: 14, status: "done", desc: "All 14 sections argue one coherent problem — no section still on the old Egypt-retention framing. Re-verified post-merge 2026-07-26." },
    { name: "Financial Integrity Gate", stage: 15, status: "done", desc: "Sections 6/9/12/13 reconcile: one USD 175m split, one EBITDA trajectory, one headline scenario. Re-verified post-merge 2026-07-26." },
    { name: "Geographic Evidence Gate", stage: 16, status: "done", desc: "Evidence used at the level talabat discloses it — Group, GCC, non-GCC, or named country. Never 'MENA' as a stand-in. Re-verified post-merge 2026-07-26." },
    { name: "Whole-Plan Citation Audit", stage: 17, status: "done", desc: "Every claim re-checked together, whole plan. 9/9 previously-recorded fixes independently re-verified; zero open citation failures (2026-07-26)." },
    { name: "Template Compliance Gate", stage: 18, status: "done", desc: "GSB v2.0 structural contract intact: 14 sections, numbering, titles, order, subsection coverage. Page-count check deferred to a separate executive edition per DEC-011." },
  ],

  deliverables: [
    { name: "AI Business Plan", spec: "GSB 14-section template v2.0, McKinsey Edition · 15–25 pages", status: "drafted", note: "All 14 sections independently verified; Stages 14-18 whole-plan gates all PASS (re-verified post-merge 2026-07-26). Stage 19 (Publication handoff) next — published DOCX/PDF predates the Stage 17 fixes and needs regenerating." },
    { name: "OS Structure Document", spec: "3–5 pages", status: "todo", note: "Phase 5." },
    { name: "Group Presentation", spec: "30 slides — 5 per member × 6", status: "todo", note: "Phase 5." },
  ],

  /* Real OS event history, distilled from SESSION_LOG.md and the validation reports.
     Rendered as the Command Center activity replay. */
  activity: [
    { t: "07-20", kind: "milestone", who: "OS",                      text: "Agentic OS activated — identity, memory, tracking files, vault scaffold." },
    { t: "07-21", kind: "run",       who: "ingestion",               text: "37-document corpus ingested → 103-note connected knowledge graph, 0 orphans." },
    { t: "07-21", kind: "milestone", who: "architecture",            text: "OS Architecture v1 designed: 8 agents, 6 new skills, 3 decision-support layers." },
    { t: "07-22", kind: "pass",      who: "evidence-citation-agent", text: "Pilot 1 — Section 3 drafted, cited, QA-passed: first real pipeline run." },
    { t: "07-22", kind: "decision",  who: "decision-steward",        text: "DEC-003 — first human-confirmed strategic decision via AskUserQuestion escalation." },
    { t: "07-22", kind: "fail",      who: "qa-review-agent",         text: "Pilot 3 — genuine QA FAIL on Section 9 (no P&L projection) → fixed → independently re-verified." },
    { t: "07-22", kind: "pass",      who: "OS",                      text: "Pilot 4 — full-system stability confirmed: 17 agent invocations, zero failures, zero gate violations." },
    { t: "07-23", kind: "milestone", who: "OS",                      text: "STRATEGIC PIVOT — governing problem rewritten to Group-wide $175m capital allocation." },
    { t: "07-23", kind: "decision",  who: "decision-steward",        text: "DEC-009 approved — investment-option ranking and allocation priority (middle path)." },
    { t: "07-23", kind: "run",       who: "bp-orchestrator",         text: "All 14 v2 sections drafted against the pivoted problem (Pass 1, self-reviewed)." },
    { t: "07-24", kind: "milestone", who: "OS",                      text: "Agentic OS Console shipped — PWA + native packaging for all platforms." },
    { t: "07-24", kind: "decision",  who: "decision-steward",        text: "DEC-011 approved — MCP layer pursued: vault-mcp server built, 9 tools, registered in .mcp.json." },
    { t: "07-24", kind: "run",       who: "research-agent",          text: "Stage 5 first post-pivot run — RES-005/006/007 resolved (parent disclosure, GCC q-commerce, ads benchmarks)." },
    { t: "07-24", kind: "pass",      who: "kpi-agent",               text: "Stage 12 verified — full stage gates on all 5 investment options; 3 KPI-tree gaps flagged honestly." },
    { t: "07-25", kind: "pass",      who: "qa-review-agent",         text: "Pass 2 wave 1 complete — Sections 2/3/4/5 independently verified after 33-finding fix cycle." },
    { t: "07-25", kind: "decision",  who: "decision-steward",        text: "DEC-014 — fee-mix label-shift proven by 16-value reconstruction; Facts corrected at root." },
    { t: "07-25", kind: "pass",      who: "OS",                      text: "Sections 6/7 verified (6/14). AOS kernel + memory layer shipped: 34 tests, CI, ranked retrieval." },
  ],

  /* Six-layer structural completeness scorecard.
     Mirrors vault/Architecture/Agentic_OS_Completeness_Assessment.md — keep in sync. */
  structure: [
    { layer: "Agents",              pct: 95,  note: "9 durable agents (publication-agent added 07-24) with per-agent model policy. Open: human role mapping (6 members ↔ 5 roles)." },
    { layer: "Skills",              pct: 100, note: "15 skills — deck-builder, os-structure-doc, and console-data-refresh added 07-24." },
    { layer: "MCP · Agentic Tools", pct: 90,  note: "DEC-011: vault-mcp built and registered (9 read-only tools, selftest passing). Remaining: live console bridge." },
    { layer: "Memory",              pct: 100, note: "check_freshness.py automation added 07-24 — first run found and fixed 44 unlinked Validation notes." },
    { layer: "Brain (Second Brain)", pct: 85, note: "Stage 5 research re-run + Stage 12 gates done 07-24. Remaining bulk: Pass 2 verification on all 14 sections." },
    { layer: "LLMs",                pct: 85,  note: "LLM_Layer.md policy + model routing on all agents. Local-model fallback documented, not installed." },
  ],
};

export const STATUS = {
  done:    { label: "Done",        cls: "s-done",    icon: "●" },
  active:  { label: "In progress", cls: "s-active",  icon: "◐" },
  partial: { label: "Partial",     cls: "s-active",  icon: "◐" },
  drafted: { label: "Drafted — needs verification", cls: "s-drafted", icon: "◑" },
  pending: { label: "Pending",     cls: "s-todo",    icon: "○" },
  todo:    { label: "Not started", cls: "s-todo",    icon: "○" },
  approved:{ label: "Approved",    cls: "s-done",    icon: "●" },
};

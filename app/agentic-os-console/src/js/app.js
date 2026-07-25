/* talabat Agentic OS Console — application shell, hash router, and views.
   Smart-interface layer: command palette (Ctrl/⌘-K), live orchestration map,
   OS activity replay, readiness ring, and the rule-based "Ask the OS" assistant.
   Dependency-free: plain DOM + SVG. */

import { DATA, STATUS } from "./data.js";
import { KERNEL } from "./kernel.js";

const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const chip = (status) => {
  const s = STATUS[status] || STATUS.todo;
  return `<span class="chip ${s.cls}">${s.icon} ${esc(s.label)}</span>`;
};

/* ---------------- derived state ---------------- */

function readiness() {
  const a = DATA.pipeline.partA.stages.reduce((n, s) => n + (s.status === "done" ? 1 : s.status === "partial" ? 0.5 : 0), 0);
  const b = DATA.sections.reduce((n, s) => n + (s.status === "done_iv" ? 1 : s.status === "done_sr" ? 0.75 : s.status === "drafted" ? 0.5 : 0), 0);
  const c = DATA.pipeline.partC.stages.filter((s) => s.status === "done").length;
  const pct = Math.round(((a + b + c) / (12 + 14 + 6)) * 100);
  return { a, b, c, pct };
}

/* ---------------- chart primitives (inline SVG) ---------------- */

function donut(parts, total, centerLabel) {
  const R = 78, r = 56, C = 95;
  const palette = { cat1: "var(--cat1)", cat2: "var(--cat2)", cat3: "var(--cat3)", cat4: "var(--cat4)" };
  let a0 = -Math.PI / 2;
  const segs = parts
    .map((p) => {
      const frac = p.amount / total;
      const a1 = a0 + frac * 2 * Math.PI - 0.035;
      const large = a1 - a0 > Math.PI ? 1 : 0;
      const sx = C + R * Math.cos(a0), sy = C + R * Math.sin(a0);
      const ex = C + R * Math.cos(a1), ey = C + R * Math.sin(a1);
      const sx2 = C + r * Math.cos(a1), sy2 = C + r * Math.sin(a1);
      const ex2 = C + r * Math.cos(a0), ey2 = C + r * Math.sin(a0);
      const d = `M${sx} ${sy} A${R} ${R} 0 ${large} 1 ${ex} ${ey} L${sx2} ${sy2} A${r} ${r} 0 ${large} 0 ${ex2} ${ey2} Z`;
      a0 = a1 + 0.035;
      return `<path d="${d}" fill="${palette[p.color]}"><title>${esc(p.name)}: $${p.amount}m (${Math.round(frac * 100)}%)</title></path>`;
    })
    .join("");
  return `
  <div class="donut-wrap" role="img" aria-label="${esc(centerLabel)}">
    <svg viewBox="0 0 190 190" width="190" height="190">${segs}</svg>
    <div class="donut-center"><div><div class="dc-v">$${total}m</div><div class="dc-l">${esc(centerLabel)}</div></div></div>
  </div>`;
}

function statusBar(items, key = "status") {
  const buckets = { done: 0, mid: 0, todo: 0 };
  items.forEach((i) => {
    const s = i[key];
    if (s === "done") buckets.done++;
    else if (s === "todo" || s === "pending" || !s) buckets.todo++;
    else buckets.mid++;
  });
  const total = items.length;
  const seg = (n, color) => (n ? `<span style="flex:${n};background:${color}" title="${n} of ${total}"></span>` : "");
  return `<div class="hbar" role="img" aria-label="status distribution">
    ${seg(buckets.done, "var(--ok)")}${seg(buckets.mid, "var(--warn)")}${seg(buckets.todo, "var(--border)")}
  </div>`;
}

function ring(pct, label) {
  const r = 52, c = 2 * Math.PI * r;
  return `
  <div class="ring-wrap" role="img" aria-label="${esc(label)}: ${pct}%">
    <svg viewBox="0 0 130 130" width="130" height="130">
      <circle cx="65" cy="65" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="11"/>
      <circle class="ring-arc" cx="65" cy="65" r="${r}" fill="none" stroke="var(--brand-strong)" stroke-width="11"
        stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${c.toFixed(1)}"
        data-target="${(c * (1 - pct / 100)).toFixed(1)}" transform="rotate(-90 65 65)"/>
    </svg>
    <div class="ring-center"><div class="ring-v">${pct}%</div><div class="ring-l">${esc(label)}</div></div>
  </div>`;
}

/* ---------------- activity feed ---------------- */

const KIND_META = {
  run:       { dot: "var(--cat2)",   label: "RUN" },
  pass:      { dot: "var(--ok)",     label: "PASS" },
  fail:      { dot: "var(--bad)",    label: "FAIL→FIX" },
  decision:  { dot: "var(--cat1)",   label: "DECISION" },
  milestone: { dot: "var(--cat4)",   label: "MILESTONE" },
};

function activityFeed() {
  return `
  <div class="card">
    <div style="display:flex;align-items:center;justify-content:space-between">
      <div>
        <h3 class="block-title">OS activity — execution replay</h3>
        <p class="block-sub" style="margin-bottom:0">Real events from the session log and validation reports</p>
      </div>
      <button class="iconbtn" id="replay" title="Replay" aria-label="Replay activity">↻</button>
    </div>
    <div class="feed" id="feed">
      ${DATA.activity.map((e, i) => {
        const k = KIND_META[e.kind] || KIND_META.run;
        return `
        <div class="feed-item" style="animation-delay:${i * 140}ms">
          <span class="feed-dot" style="background:${k.dot}"></span>
          <div class="feed-body">
            <div class="feed-meta"><span class="feed-t">${esc(e.t)}</span><span class="feed-kind" style="color:${k.dot}">${k.label}</span><span class="feed-who">${esc(e.who)}</span></div>
            <div class="feed-text">${esc(e.text)}</div>
          </div>
        </div>`;
      }).join("")}
    </div>
  </div>`;
}

/* ---------------- orchestration map ---------------- */

const MAP_NODES = [
  { id: "corpus",    x: 40,  y: 140, w: 180, h: 58, t: "Input_Data/",      s: "37 source documents",     type: "store" },
  { id: "brain",     x: 40,  y: 300, w: 180, h: 58, t: "Second Brain",     s: "103 cited notes · 0 orphans", type: "store" },
  { id: "research",  x: 300, y: 80,  w: 180, h: 58, t: "Research Layer",   s: "vault/Research",          type: "layer" },
  { id: "forecasts", x: 300, y: 220, w: 180, h: 58, t: "Forecast Layer",   s: "45 nodes · 50 KPIs",      type: "layer" },
  { id: "decisions", x: 300, y: 360, w: 180, h: 58, t: "Decision Layer",   s: "10 DEC · 47 ASM · 5 OPT", type: "layer" },
  { id: "orch",      x: 560, y: 225, w: 200, h: 70, t: "bp-orchestrator",  s: "19-stage pipeline owner", type: "orch" },
  { id: "ra",        x: 880, y: 30,  w: 200, h: 50, t: "research-agent",   s: "external evidence",       type: "agent" },
  { id: "fa",        x: 880, y: 105, w: 200, h: 50, t: "forecasting-agent", s: "scenarios & drivers",    type: "agent" },
  { id: "ds",        x: 880, y: 180, w: 200, h: 50, t: "decision-steward", s: "judgment calls",          type: "agent" },
  { id: "ec",        x: 880, y: 255, w: 200, h: 50, t: "evidence-citation-agent", s: "ranking & audit",  type: "agent" },
  { id: "kpi",       x: 880, y: 330, w: 200, h: 50, t: "kpi-agent",        s: "KPI tree",                type: "agent" },
  { id: "es",        x: 880, y: 405, w: 200, h: 50, t: "exec-summary-agent", s: "SCQA synthesis (gated)", type: "agent" },
  { id: "qa",        x: 880, y: 480, w: 200, h: 50, t: "qa-review-agent",  s: "final gate",              type: "agent" },
  { id: "out",       x: 560, y: 430, w: 200, h: 58, t: "Outputs/",         s: "AI Business Plan",        type: "out" },
];

const MAP_LINKS = [
  ["corpus", "brain"], ["brain", "orch"],
  ["orch", "ra"], ["ra", "research"], ["research", "decisions"],
  ["orch", "fa"], ["fa", "forecasts"], ["forecasts", "decisions"],
  ["orch", "ds"], ["ds", "decisions"], ["decisions", "orch"],
  ["orch", "ec"], ["forecasts", "kpi"], ["kpi", "orch"],
  ["orch", "es"], ["orch", "qa"], ["qa", "out"], ["orch", "out"],
];

function mapSvg() {
  const byId = Object.fromEntries(MAP_NODES.map((n) => [n.id, n]));
  const edge = ([a, b], i) => {
    const A = byId[a], B = byId[b];
    const ax = A.x + (B.x > A.x + A.w ? A.w : B.x + B.w < A.x ? 0 : A.w / 2);
    const ay = A.y + (B.x > A.x + A.w || B.x + B.w < A.x ? A.h / 2 : B.y > A.y ? A.h : 0);
    const bx = B.x + (A.x > B.x + B.w ? B.w : A.x + A.w < B.x ? 0 : B.w / 2);
    const by = B.y + (A.x > B.x + B.w || A.x + A.w < B.x ? B.h / 2 : A.y > B.y ? B.h : 0);
    const mx = (ax + bx) / 2;
    return `<path class="maplink" data-a="${a}" data-b="${b}" d="M${ax} ${ay} C ${mx} ${ay}, ${mx} ${by}, ${bx} ${by}"/>`;
  };
  const node = (n) => `
    <g class="mapnode t-${n.type}" data-id="${n.id}" tabindex="0" role="button" aria-label="${esc(n.t)}">
      <rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="12"/>
      <text x="${n.x + 14}" y="${n.y + n.h / 2 - 4}" class="map-t">${esc(n.t)}</text>
      <text x="${n.x + 14}" y="${n.y + n.h / 2 + 15}" class="map-s">${esc(n.s)}</text>
    </g>`;
  return `<svg class="mapsvg" viewBox="0 0 1120 560" role="img" aria-label="Agentic OS orchestration map">
    ${MAP_LINKS.map(edge).join("")}${MAP_NODES.map(node).join("")}
  </svg>`;
}

function wireMap() {
  const svg = $(".mapsvg");
  if (!svg) return;
  const hot = (id, on) => {
    $$(".maplink", svg).forEach((l) => {
      if (l.dataset.a === id || l.dataset.b === id) l.classList.toggle("hot", on);
    });
    $$(".mapnode", svg).forEach((n) => {
      const linked = MAP_LINKS.some(([a, b]) => (a === id && b === n.dataset.id) || (b === id && a === n.dataset.id));
      n.classList.toggle("dim", on && n.dataset.id !== id && !linked);
    });
  };
  $$(".mapnode", svg).forEach((n) => {
    n.addEventListener("mouseenter", () => hot(n.dataset.id, true));
    n.addEventListener("mouseleave", () => hot(n.dataset.id, false));
    n.addEventListener("focus", () => hot(n.dataset.id, true));
    n.addEventListener("blur", () => hot(n.dataset.id, false));
    n.addEventListener("click", () => {
      const t = { store: "#/evidence", layer: n.dataset.id === "forecasts" ? "#/forecasts" : n.dataset.id === "decisions" ? "#/decisions" : "#/evidence", agent: "#/agents", orch: "#/agents", out: "#/sections" }[n.classList.contains("t-agent") ? "agent" : n.classList.contains("t-orch") ? "orch" : n.classList.contains("t-store") ? "store" : n.classList.contains("t-out") ? "out" : "layer"];
      location.hash = t;
    });
  });
}

/* ---------------- views ---------------- */

const views = {
  overview() {
    const m = DATA.meta;
    const r = readiness();
    const drafted = DATA.sections.filter((s) => s.status !== "todo").length;
    return `
      <div class="hero">
        <span class="hero-tag">▮ Governing problem · ${esc(m.charterStatus)}</span>
        <h2>${esc(m.problem)}</h2>
        <div class="hero-meta">
          <span class="chip s-accent">${esc(m.group)}</span>
          <span class="chip s-todo">Pivoted ${esc(m.pivotDate)}</span>
          <span class="chip s-todo">${m.markets.length} operating markets</span>
          <span class="chip s-todo">Snapshot ${esc(m.snapshotDate)}</span>
        </div>
      </div>

      <div class="grid kpis mt" id="kpi-grid">
        ${DATA.companyKpis.map((k) => `
          <div class="stat">
            <div class="s-label">${esc(k.label)}</div>
            <div class="s-value">${esc(k.value)}</div>
            <div class="s-delta ${k.tone === "up" ? "up" : k.tone === "down" ? "down" : ""}">${esc(k.delta)}</div>
          </div>`).join("")}
      </div>

      <div class="split mt">
        <div class="card">
          <h3 class="block-title">2026 investment programme</h3>
          <p class="block-sub">${esc(DATA.allocation.unit)}</p>
          <div class="alloc">
            ${donut(DATA.allocation.parts, DATA.allocation.total, "2026 programme")}
            <div class="legend">
              ${DATA.allocation.parts.map((p) => `
                <div class="legend-row">
                  <span class="legend-swatch sw-${p.color}"></span>
                  <div style="flex:1">
                    <div style="display:flex"><span class="legend-name">${esc(p.name)}</span><span class="legend-amt">$${p.amount}m</span></div>
                    <div class="legend-detail">${esc(p.detail)}</div>
                  </div>
                </div>`).join("")}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="exec-head">
            ${ring(r.pct, "pipeline execution")}
            <div style="flex:1;min-width:200px">
              <h3 class="block-title">Execution status</h3>
              <p class="block-sub">Weighted across all 32 pipeline stage-units</p>
              <div class="meter-row"><span class="m-label">Setup (Part A)</span>${statusBar(DATA.pipeline.partA.stages)}<span class="m-val">${r.a}/12</span></div>
              <div class="meter-row"><span class="m-label">Sections (v2)</span>${statusBar(DATA.sections)}<span class="m-val">${drafted}/14</span></div>
              <div class="meter-row"><span class="m-label">Whole-plan gates</span>${statusBar(DATA.pipeline.partC.stages)}<span class="m-val">${r.c}/6</span></div>
            </div>
          </div>
          <div class="callout mt">Drafted sections count 0.5 until independently verified (Pass 2). Next: Pass 2 per section, then gates 14–19 and publication.</div>
        </div>
      </div>

      <div class="split mt">
        ${activityFeed()}
        <div class="card">
          <h3 class="block-title">Capstone milestones</h3>
          <p class="block-sub">The five phases of the AASTMT capstone calendar</p>
          <div class="stage-list">
            ${DATA.milestones.map((ms) => `
              <div class="stage">
                <div class="stage-n">P${ms.n}</div>
                <div><div class="stage-name">${esc(ms.name)} <span class="stage-owner">· ${esc(ms.weeks)}</span></div></div>
                ${chip(ms.status)}
              </div>`).join("")}
          </div>
          <div class="grid g-3 mt">
            ${DATA.deliverables.map((d) => `
              <div style="border:1px solid var(--border-soft);border-radius:10px;padding:12px">
                <div style="font-weight:650;font-size:12.5px">${esc(d.name)}</div>
                <div style="font-size:11.5px;color:var(--ink-3);margin:4px 0 8px">${esc(d.spec)}</div>
                ${chip(d.status)}
              </div>`).join("")}
          </div>
        </div>
      </div>`;
  },

  workflow() {
    const K = KERNEL;
    const EV_META = { verdict: "var(--ok)", decision: "var(--cat1)", milestone: "var(--cat4)",
                      validation: "var(--cat2)", agent_run: "var(--cat2)", fix_cycle: "var(--warn)",
                      approval: "var(--cat1)", stage_transition: "var(--ink-3)", publish: "var(--ok)", note: "var(--ink-3)" };
    return `
      <h1 class="page-title">Workflow — ${esc(K.goal.name)}</h1>
      <p class="page-sub">The Goal → Publish rail, rendered from live kernel state (generated ${esc(K.generated)} — regenerate with <code class="kbd">python3 scripts/aos/export_console.py</code>). Click a stage; click any item to inspect it. <span class="kbd">G</span>+<span class="kbd">1–7</span> jumps stages, <span class="kbd">I</span> toggles the inspector.</p>
      <div class="wf-rail" id="wf-rail">
        ${K.workflow.map((s, i) => `
          <button class="wf-stage ${s.status}" data-stage="${s.id}" data-idx="${i}">
            <span class="wf-dot"></span><span class="wf-name">${esc(s.name)}</span>
            <span class="wf-detail">${esc(s.detail)}</span>
          </button>${i < K.workflow.length - 1 ? '<span class="wf-arrow">›</span>' : ""}`).join("")}
      </div>
      <div class="wf-body">
        <div style="min-width:0;flex:1">
          <div class="card" id="wf-panel"></div>
          <div class="card mt">
            <h3 class="block-title">Execution timeline</h3>
            <p class="block-sub">Event log (episodic memory) — newest first</p>
            <div class="feed" style="max-height:300px">
              ${[...K.events].reverse().map((e) => `
                <div class="feed-item wf-item" data-insp="${esc(e.ref)}" data-insp-sub="${esc(e.ts)} · ${esc(e.type)} · ${esc(e.actor)}${e.detail ? " — " + esc(e.detail) : ""}">
                  <span class="feed-dot" style="background:${EV_META[e.type] || "var(--ink-3)"}"></span>
                  <div class="feed-body"><div class="feed-meta"><span class="feed-t">${esc(e.ts.slice(5, 16).replace("T", " "))}</span><span class="feed-kind" style="color:${EV_META[e.type] || "var(--ink-3)"}">${esc(e.type.toUpperCase())}</span><span class="feed-who">${esc(e.actor)}</span></div>
                  <div class="feed-text">${esc(e.ref)}${e.detail ? " — " + esc(e.detail) : ""}</div></div>
                </div>`).join("") || '<div class="callout">No events yet.</div>'}
            </div>
          </div>
        </div>
        <aside class="inspector" id="inspector">
          <div class="insp-head">Inspector <button class="iconbtn" id="insp-close" aria-label="Close inspector">✕</button></div>
          <div class="insp-body" id="insp-body"><div class="insp-empty">Select a stage, plan item, section, or event.</div></div>
        </aside>
      </div>`;
  },

  map() {
    return `
      <h1 class="page-title">OS Map — live orchestration</h1>
      <p class="page-sub">The whole operating system on one canvas: evidence flows left-to-right, agents execute on the right, and no arrow reaches <code class="kbd">Outputs/</code> without passing the Orchestrator → Evidence &amp; Citation → QA chain. Hover any node to trace its connections; click to open it.</p>
      <div class="card map-card">${mapSvg()}</div>
      <div class="card mt">
        <h3 class="block-title">Structural completeness — six layers</h3>
        <p class="block-sub">From <code class="kbd">vault/Architecture/Agentic_OS_Completeness_Assessment.md</code> — what a 100% Agentic OS requires vs what exists today</p>
        ${DATA.structure.map((s) => `
          <div class="meter-row" style="grid-template-columns:170px 1fr 52px">
            <span class="m-label">${esc(s.layer)}</span>
            <div class="hbar"><span style="flex:${s.pct};background:${s.pct >= 80 ? "var(--ok)" : s.pct >= 50 ? "var(--warn)" : "var(--bad)"}"></span><span style="flex:${100 - s.pct};background:transparent"></span></div>
            <span class="m-val">${s.pct}%</span>
          </div>
          <div style="font-size:12px;color:var(--ink-3);margin:-2px 0 10px 0">${esc(s.note)}</div>`).join("")}
      </div>`;
  },

  pipeline() {
    const part = (p, showStatus = true) => `
      <div class="pipe-part">
        <div class="pipe-head">
          <h3 class="block-title">${esc(p.title)}</h3>
          <span class="block-sub" style="margin:0">${esc(p.subtitle)}</span>
        </div>
        ${showStatus ? `<div class="rail">${p.stages.map((s) => `<i class="${s.status || ""}" title="${esc(s.name)}"></i>`).join("")}</div>` : ""}
        <div class="stage-list">
          ${p.stages.map((s) => `
            <div class="stage">
              <div class="stage-n">${s.n}</div>
              <div>
                <div class="stage-name">${esc(s.name)}</div>
                <div class="stage-owner">${esc(s.owner)}</div>
              </div>
              ${s.status ? chip(s.status) : `<span class="chip s-todo">per section</span>`}
              ${s.note ? `<div class="stage-note">${esc(s.note)}</div>` : ""}
            </div>`).join("")}
        </div>
      </div>`;
    return `
      <h1 class="page-title">Business Plan Generation Pipeline</h1>
      <p class="page-sub">19 stages in three parts. No section reaches Done while an upstream stage is open; every claim must pass the Orchestrator → Evidence &amp; Citation → QA chain before it can appear in <code class="kbd">Outputs/</code>.</p>
      ${part(DATA.pipeline.partA)}
      ${part(DATA.pipeline.partB, false)}
      <div class="card" style="margin:-10px 0 26px">
        <h3 class="block-title">Gate rules (Part B)</h3>
        <ul class="list-plain" style="margin-top:8px">${DATA.pipeline.partB.gateRules.map((g) => `<li>${esc(g)}</li>`).join("")}</ul>
      </div>
      ${part(DATA.pipeline.partC)}`;
  },

  agents() {
    return `
      <h1 class="page-title">Agent Roster</h1>
      <p class="page-sub">Eight named, durable subagents in <code class="kbd">.claude/agents/</code>, MECE against the fourteen capabilities the OS had to add. Since the v2 architecture, specialists are invoked flat from the top-level session — the Orchestrator's spec defines <em>what</em> happens at each stage; the session executes <em>who</em>.</p>
      <div class="grid g-2">
        ${DATA.agents.map((a) => `
          <div class="card agent-card">
            <div class="agent-head">
              <div class="agent-avatar">${a.icon}</div>
              <div>
                <div class="agent-name">${esc(a.name)}</div>
                <div class="agent-id">${esc(a.id)}</div>
              </div>
            </div>
            <div class="agent-mission">${esc(a.mission)}</div>
            <div class="agent-meta">
              <div><b>Pipeline stages</b>${esc(a.stages)}</div>
              ${a.skills.length ? `<div><b>Skills</b><span class="tagrow">${a.skills.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</span></div>` : ""}
              <div><b>Works with</b>${a.interacts.map(esc).join(" · ")}</div>
              <div><b>Success criteria</b>${esc(a.success)}</div>
            </div>
          </div>`).join("")}
      </div>`;
  },

  sections() {
    const drafted = DATA.sections.filter((s) => s.status !== "todo").length;
    return `
      <h1 class="page-title">Business Plan Sections</h1>
      <p class="page-sub">GSB 14-section template v2.0 (McKinsey Edition) — 15–25 pages. Current state: <b>${drafted}/14 drafted</b> under the pivoted problem (Business_Plan_Drafts_v2). Every section still requires an independent Pass&nbsp;2 (citation audit + QA review + the three gates) before it earns submission-final status.</p>
      <div class="rail">${DATA.sections.map((s) => `<i class="${s.status === "drafted" ? "partial" : s.status}" title="S${s.n} ${esc(s.name)}"></i>`).join("")}</div>
      <div class="stage-list">
        ${DATA.sections.map((s) => `
          <div class="sec-row">
            <div class="sec-num">${String(s.n).padStart(2, "0")}</div>
            <div class="sec-name">${esc(s.name)}</div>
            ${chip(s.status)}
            ${s.note ? `<div class="sec-note">${esc(s.note)}</div>` : ""}
          </div>`).join("")}
      </div>`;
  },

  evidence() {
    const c = DATA.corpus;
    const max = Math.max(...c.categories.map((x) => x.count));
    return `
      <h1 class="page-title">Evidence &amp; Knowledge</h1>
      <p class="page-sub">The five-tier evidence hierarchy: a tier may only cite tiers above it. No number reaches the Business Plan without resolving to a Facts citation or an Approved assumption.</p>
      <div>
        ${DATA.evidenceTiers.map((t, i) => `
          ${i ? `<div class="tier-rule">▼ cites only upward</div>` : ""}
          <div class="tier">
            <div class="tier-n">${t.n}</div>
            <div>
              <div class="tier-name">${esc(t.name)}</div>
              <div class="tier-path">${esc(t.path)}</div>
            </div>
            <div class="tier-count">${esc(t.count)}</div>
            <div class="tier-desc">${esc(t.desc)}</div>
          </div>`).join("")}
      </div>

      <div class="split mt-lg">
        <div class="card">
          <h3 class="block-title">Source corpus — ${c.total} documents</h3>
          <p class="block-sub">${esc(c.note)}</p>
          ${c.categories.map((cat) => `
            <div class="meter-row" style="grid-template-columns:220px 1fr 90px">
              <span class="m-label">${esc(cat.name)}</span>
              <div class="hbar"><span style="flex:${cat.count};background:${cat.kind === "primary" ? "var(--cat1)" : "var(--cat2)"}"></span><span style="flex:${max - cat.count};background:transparent"></span></div>
              <span class="m-val">${cat.count} · ${cat.kind}</span>
            </div>`).join("")}
          <div class="tagrow mt"><span class="chip s-accent">■ primary — official talabat</span><span class="chip" style="color:var(--cat2);background:rgba(59,130,214,.12);border:1px solid rgba(59,130,214,.3)">■ secondary — market/press</span></div>
        </div>
        <div class="card">
          <h3 class="block-title">Evidence discipline</h3>
          <p class="block-sub">Standing rules every claim obeys</p>
          <ul class="list-plain">
            <li><b>Never mix evidence categories</b> — facts, inferences, decisions, assumptions, forecasts, and synthetic examples stay distinct and labeled.</li>
            <li><b>Geography at disclosed level</b> — Group, GCC, non-GCC, or named country. Never "MENA" as a stand-in.</li>
            <li><b>Synthetic data is a labeled last resort</b> — never blended with disclosed figures.</li>
            <li><b>Primary outranks secondary</b> — conflicts are resolved by ranking or explicitly footnoted, never silently picked.</li>
            <li><b>Two-pass verification</b> — self-reviewed and independently verified are distinct, trackable states.</li>
          </ul>
        </div>
      </div>`;
  },

  decisions() {
    return `
      <h1 class="page-title">Decision Layer</h1>
      <p class="page-sub">The auditable record of who decided what, from what evidence, when — the layer between "what the corpus says" and "what the plan claims."</p>

      <div class="grid g-4">
        ${DATA.registers.map((r) => `
          <div class="stat">
            <div class="s-label">${r.icon} ${esc(r.name)}</div>
            <div class="s-value">${r.count}</div>
            <div class="s-delta">${esc(r.status)}</div>
          </div>`).join("")}
      </div>

      <div class="card mt">
        <h3 class="block-title">Decision Log</h3>
        <p class="block-sub">vault/Decisions/Decision_Log — structured, dated, owned records</p>
        <div class="table-scroll"><table class="data">
          <thead><tr><th>ID</th><th>Decision</th><th>Status</th><th>Note</th></tr></thead>
          <tbody>
            ${DATA.decisions.map((d) => `
              <tr><td class="mono">${esc(d.id)}</td><td style="font-weight:600">${esc(d.title)}</td><td>${chip(d.status)}</td><td style="color:var(--ink-3)">${esc(d.note)}</td></tr>`).join("")}
          </tbody>
        </table></div>
      </div>

      <div class="card mt">
        <h3 class="block-title">Investment options under evaluation</h3>
        <p class="block-sub">OPT-001–005 · ranked with the 11-criterion framework under DEC-009 (descriptive tiering — never a single blended score)</p>
        <div class="table-scroll"><table class="data">
          <thead><tr><th>ID</th><th>Option</th><th>Bucket</th></tr></thead>
          <tbody>
            ${DATA.options.map((o) => `
              <tr><td class="mono">${esc(o.id)}</td><td style="font-weight:600">${esc(o.title)}</td>
              <td><span class="chip ${o.bucket === "Everyday App" ? "s-accent" : ""}" style="${o.bucket !== "Everyday App" ? "color:var(--cat2);background:rgba(59,130,214,.12);border:1px solid rgba(59,130,214,.3)" : ""}">${esc(o.bucket)}</span></td></tr>`).join("")}
          </tbody>
        </table></div>
      </div>`;
  },

  forecasts() {
    const f = DATA.forecasts;
    return `
      <h1 class="page-title">Forecasting Layer</h1>
      <p class="page-sub">Method-transparent projections: every forecast has a named historical anchor fact, a stated growth logic, three scenarios, and an assumption ID.</p>
      <div class="grid g-3">
        <div class="stat"><div class="s-label">Value Driver Tree v2</div><div class="s-value">${f.vdt.nodes}</div><div class="s-delta">driver nodes</div></div>
        <div class="stat"><div class="s-label">Scenarios v2</div><div class="s-value">3×${f.scenarios.modules}</div><div class="s-delta">cases × modules</div></div>
        <div class="stat"><div class="s-label">KPI Tree v2</div><div class="s-value">${f.kpis.count}</div><div class="s-delta">monitored KPIs, leading/lagging split</div></div>
      </div>
      <div class="card mt">
        <h3 class="block-title">${esc(f.vdt.name)}</h3>
        <p class="block-sub">${esc(f.vdt.desc)}</p>
      </div>
      <div class="card mt">
        <h3 class="block-title">Scenario structure</h3>
        <p class="block-sub">Headline vs sensitivity framing fixed by DEC-005 and DEC-008</p>
        <div class="stage-list">
          ${f.scenarios.cases.map((c, i) => `
            <div class="stage">
              <div class="stage-n">${["B", "U", "D"][i]}</div>
              <div><div class="stage-name">${esc(c.name)} case</div></div>
              ${i === 0 ? `<span class="chip s-accent">headline</span>` : `<span class="chip s-todo">labeled sensitivity</span>`}
              <div class="stage-note">${esc(c.desc)}</div>
            </div>`).join("")}
        </div>
      </div>
      <div class="card mt">
        <h3 class="block-title">${esc(f.kpis.name)}</h3>
        <p class="block-sub">${esc(f.kpis.desc)}</p>
        <div class="callout">Section 13 (Monitoring &amp; Evaluation) is sourced directly from this tree; per-option stage gates are the one Part A item still marked partial.</div>
      </div>`;
  },

  gates() {
    return `
      <h1 class="page-title">Quality Gates</h1>
      <p class="page-sub">The whole-plan gates every publication must pass (Stages 14–18), plus the per-section two-pass verification protocol. All four gates run once, after all 14 sections reach Drafted or better.</p>
      <div class="grid g-2">
        ${DATA.gates.map((g) => `
          <div class="card">
            <div style="display:flex;align-items:center;gap:10px;justify-content:space-between">
              <h3 class="block-title" style="margin:0">${esc(g.name)}</h3>
              ${chip(g.status)}
            </div>
            <p class="block-sub" style="margin:6px 0 8px">Pipeline stage ${g.stage}</p>
            <p style="margin:0;color:var(--ink-2);font-size:13px">${esc(g.desc)}</p>
          </div>`).join("")}
      </div>
      <div class="card mt">
        <h3 class="block-title">Two-pass verification protocol</h3>
        <p class="block-sub">Introduced by Architecture v2, proven by Pilot 4</p>
        <ul class="list-plain">
          <li><b>Pass 1 (self-reviewed):</b> citation audit + QA review run in-line by the drafting context → status "Done (self-reviewed)".</li>
          <li><b>Pass 2 (independently verified):</b> a fresh, separately-invoked agent thread re-audits the unedited draft → submission-final status.</li>
          <li>Pilot 4 evidence: two independent QA passes converged on two findings and <b>diverged on a third</b> — a real MECE contradiction only Pass 2 caught.</li>
        </ul>
      </div>`;
  },
};

/* ---------------- command palette ---------------- */

function buildIndex() {
  const ix = [];
  NAV.filter((n) => n.id).forEach((n) => ix.push({ label: n.label, sub: "View", go: `#/${n.id}` }));
  DATA.agents.forEach((a) => ix.push({ label: a.name, sub: `Agent · ${a.id}`, go: "#/agents" }));
  DATA.sections.forEach((s) => ix.push({ label: `Section ${String(s.n).padStart(2, "0")} — ${s.name}`, sub: `Plan section · ${(STATUS[s.status] || {}).label || ""}`, go: "#/sections" }));
  DATA.decisions.forEach((d) => ix.push({ label: `${d.id} — ${d.title}`, sub: "Decision", go: "#/decisions" }));
  DATA.options.forEach((o) => ix.push({ label: `${o.id} — ${o.title}`, sub: `Investment option · ${o.bucket}`, go: "#/decisions" }));
  DATA.pipeline.partA.stages.forEach((s) => ix.push({ label: `Stage ${s.n} — ${s.name}`, sub: `Pipeline · ${s.owner}`, go: "#/pipeline" }));
  DATA.pipeline.partB.stages.forEach((s) => ix.push({ label: `Stage ${s.n} — ${s.name}`, sub: `Pipeline · ${s.owner}`, go: "#/pipeline" }));
  DATA.pipeline.partC.stages.forEach((s) => ix.push({ label: `Stage ${s.n} — ${s.name}`, sub: `Pipeline · ${s.owner}`, go: "#/pipeline" }));
  DATA.gates.forEach((g) => ix.push({ label: g.name, sub: `Gate · stage ${g.stage}`, go: "#/gates" }));
  ix.push({ label: "2026 investment allocation — $175m", sub: "Everyday App $120m · Food-leadership $55m", go: "#/overview" });
  ix.push({ label: "Value Driver Tree v2", sub: "Forecast layer · 45 nodes", go: "#/forecasts" });
  ix.push({ label: "KPI Tree v2 — 50 KPIs", sub: "Forecast layer", go: "#/forecasts" });
  ix.push({ label: "Source corpus — 37 documents", sub: "Evidence", go: "#/evidence" });
  return ix;
}
let PALETTE_IX = null;

function openPalette() {
  if ($("#palette")) return;
  PALETTE_IX = PALETTE_IX || buildIndex();
  const el = document.createElement("div");
  el.id = "palette";
  el.innerHTML = `
    <div class="pal-scrim"></div>
    <div class="pal-box" role="dialog" aria-label="Command palette">
      <input class="pal-input" id="pal-q" placeholder="Jump to anything — sections, agents, decisions, stages…" autocomplete="off" spellcheck="false"/>
      <div class="pal-results" id="pal-r"></div>
      <div class="pal-hint"><span class="kbd">↑↓</span> navigate · <span class="kbd">Enter</span> open · <span class="kbd">Esc</span> close</div>
    </div>`;
  document.body.appendChild(el);
  const q = $("#pal-q"), r = $("#pal-r");
  let sel = 0, hits = [];
  const paint = () => {
    r.innerHTML = hits.slice(0, 9).map((h, i) => `
      <div class="pal-item ${i === sel ? "sel" : ""}" data-i="${i}">
        <span class="pal-label">${esc(h.label)}</span><span class="pal-sub">${esc(h.sub)}</span>
      </div>`).join("") || `<div class="pal-empty">No match — try an agent, section, DEC id, or stage number</div>`;
  };
  const search = () => {
    const t = q.value.trim().toLowerCase();
    hits = !t
      ? PALETTE_IX.slice(0, 9)
      : PALETTE_IX.filter((h) => (h.label + " " + h.sub).toLowerCase().includes(t));
    sel = 0;
    paint();
  };
  const go = () => { if (hits[sel]) { location.hash = hits[sel].go; closePalette(); } };
  q.addEventListener("input", search);
  q.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { sel = Math.min(sel + 1, Math.min(hits.length, 9) - 1); paint(); e.preventDefault(); }
    else if (e.key === "ArrowUp") { sel = Math.max(sel - 1, 0); paint(); e.preventDefault(); }
    else if (e.key === "Enter") go();
  });
  r.addEventListener("click", (e) => { const it = e.target.closest(".pal-item"); if (it) { sel = +it.dataset.i; go(); } });
  $(".pal-scrim", el).addEventListener("click", closePalette);
  search();
  q.focus();
}
function closePalette() { $("#palette")?.remove(); }

/* ---------------- Ask the OS (rule-based assistant) ---------------- */

function answer(qRaw) {
  const q = qRaw.toLowerCase();
  const link = (href, label) => `<a href="${href}">${esc(label)}</a>`;
  const r = readiness();

  let m;
  if ((m = q.match(/sec(?:tion)?\s*0*(\d{1,2})/))) {
    const s = DATA.sections.find((x) => x.n === +m[1]);
    if (s) return `<b>Section ${s.n} — ${esc(s.name)}</b><br>Status: ${chip(s.status)}<br>${esc(s.note || "")}<br>${link("#/sections", "Open Plan Sections →")}`;
  }
  if ((m = q.match(/dec[-\s]?0*(\d{1,2})/))) {
    const d = DATA.decisions.find((x) => x.id === `DEC-${String(m[1]).padStart(3, "0")}`);
    if (d) return `<b>${d.id} — ${esc(d.title)}</b><br>Status: ${chip(d.status)}<br>${esc(d.note || "Recorded in vault/Decisions/Decision_Log.")}<br>${link("#/decisions", "Open Decision Layer →")}`;
  }
  if ((m = q.match(/opt[-\s]?0*(\d{1,2})/))) {
    const o = DATA.options.find((x) => x.id === `OPT-${String(m[1]).padStart(3, "0")}`);
    if (o) return `<b>${o.id} — ${esc(o.title)}</b><br>Bucket: ${esc(o.bucket)} · ranked under DEC-009.<br>${link("#/decisions", "Open Decision Layer →")}`;
  }
  if ((m = q.match(/stage\s*(\d{1,2}(?:\.\d{1,2})?)/))) {
    const all = [...DATA.pipeline.partA.stages, ...DATA.pipeline.partB.stages, ...DATA.pipeline.partC.stages];
    const s = all.find((x) => String(x.n) === m[1]);
    if (s) return `<b>Stage ${s.n} — ${esc(s.name)}</b><br>Owner: <code>${esc(s.owner)}</code>${s.status ? `<br>Status: ${chip(s.status)}` : " · runs once per section"}${s.note ? `<br>${esc(s.note)}` : ""}<br>${link("#/pipeline", "Open Pipeline →")}`;
  }
  const ag = DATA.agents.find((a) => q.includes(a.id) || q.includes(a.name.toLowerCase()));
  if (ag) return `<b>${esc(ag.name)}</b> <code>${esc(ag.id)}</code><br>${esc(ag.mission)}<br>Stages: ${esc(ag.stages)}<br>${link("#/agents", "Open Agent Roster →")}`;
  if (/alloc|175|budget|invest|120|55/.test(q))
    return `<b>2026 investment programme — $175m</b> (Board-approved):<br>• Everyday App initiatives: <b>$120m</b> — talabat pro, AI personalisation, cross-sell, grocery, ventures<br>• Food-leadership: <b>$55m</b> — partner growth, food CVP, delivery reliability<br>The plan recommends how to allocate <i>within</i> these, across 8 markets. ${link("#/overview", "Command Center →")}`;
  if (/gate/.test(q))
    return `<b>4 whole-plan gates</b>, all pending (run after all sections reach Drafted):<br>${DATA.gates.map((g) => `• ${esc(g.name)} (stage ${g.stage})`).join("<br>")}<br>${link("#/gates", "Open Quality Gates →")}`;
  if (/kpi|forecast|scenario|driver/.test(q))
    return `<b>Forecast layer:</b> Value Driver Tree v2 (${DATA.forecasts.vdt.nodes} nodes) · Scenarios v2 (base/upside/downside × ${DATA.forecasts.scenarios.modules} modules) · KPI Tree v2 (${DATA.forecasts.kpis.count} KPIs). Every forecast is anchored to a disclosed Fact with a stated method. ${link("#/forecasts", "Open Forecasts →")}`;
  if (/agent/.test(q))
    return `<b>8 agents</b>: ${DATA.agents.map((a) => `<code>${a.id}</code>`).join(" · ")}.<br>Ask me about any one by name. ${link("#/agents", "Open Agent Roster →")}`;
  if (/status|progress|next|ready|where|summary/.test(q))
    return `<b>OS execution: ${r.pct}%</b> of 32 pipeline stage-units.<br>• Part A setup: ${r.a}/12 · Sections: 14/14 drafted (Pass 1) · Gates: ${r.c}/6<br><b>Next:</b> independent Pass 2 verification per section → whole-plan gates 14–18 → publication (19). ${link("#/pipeline", "Open Pipeline →")}`;
  if (/corpus|source|evidence|fact|knowledge|brain/.test(q))
    return `<b>Evidence base:</b> ${DATA.corpus.total} source documents → 103-note knowledge graph → 5-tier hierarchy (Facts → Research → Forecasts → Decisions → Plan). A tier only cites tiers above it. ${link("#/evidence", "Open Evidence →")}`;
  if (/pivot|problem|charter/.test(q))
    return `<b>Governing problem</b> (pivoted ${DATA.meta.pivotDate}): ${esc(DATA.meta.problem)}<br>${link("#/overview", "Command Center →")}`;
  return `I answer from the repository snapshot. Try:<br>• "status of section 9" · "what is DEC-009"<br>• "who is the decision steward" · "stage 13.11"<br>• "allocation" · "what's next" · "gates" · "kpis"`;
}

function mountAsk() {
  const fab = document.createElement("button");
  fab.id = "ask-fab";
  fab.innerHTML = "✦";
  fab.title = "Ask the OS";
  fab.setAttribute("aria-label", "Ask the OS");
  document.body.appendChild(fab);

  const drawer = document.createElement("div");
  drawer.id = "ask";
  drawer.innerHTML = `
    <div class="ask-head">
      <div><div class="ask-title">✦ Ask the OS</div><div class="ask-sub">answers from the live repository snapshot</div></div>
      <button class="iconbtn" id="ask-close" aria-label="Close">✕</button>
    </div>
    <div class="ask-log" id="ask-log">
      <div class="msg os">Hi — I'm the console's OS guide. Ask me about any section, agent, decision, stage, or the allocation itself.</div>
      <div class="ask-chips">
        ${["What's next?", "Status of section 9", "What is DEC-009?", "Allocation", "Who is the QA agent?"].map((c) => `<button class="ask-chip">${c}</button>`).join("")}
      </div>
    </div>
    <form class="ask-inrow" id="ask-form">
      <input id="ask-in" placeholder="Ask anything about the OS…" autocomplete="off"/>
      <button class="ask-send" type="submit" aria-label="Send">➤</button>
    </form>`;
  document.body.appendChild(drawer);

  const log = $("#ask-log", drawer);
  const put = (html, cls) => {
    const d = document.createElement("div");
    d.className = `msg ${cls}`;
    d.innerHTML = html;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
    return d;
  };
  const respond = (text) => {
    put(esc(text), "me");
    const typing = put(`<span class="tdot"></span><span class="tdot"></span><span class="tdot"></span>`, "os typing");
    setTimeout(() => { typing.classList.remove("typing"); typing.innerHTML = answer(text); log.scrollTop = log.scrollHeight; }, 420);
  };

  fab.addEventListener("click", () => { drawer.classList.toggle("open"); if (drawer.classList.contains("open")) $("#ask-in").focus(); });
  $("#ask-close", drawer).addEventListener("click", () => drawer.classList.remove("open"));
  $("#ask-form", drawer).addEventListener("submit", (e) => {
    e.preventDefault();
    const v = $("#ask-in").value.trim();
    if (v) { respond(v); $("#ask-in").value = ""; }
  });
  drawer.addEventListener("click", (e) => {
    const c = e.target.closest(".ask-chip");
    if (c) respond(c.textContent);
  });
}

/* ---------------- workflow view wiring ---------------- */

function wireWorkflow() {
  const rail = $("#wf-rail");
  if (!rail) return;
  const panel = $("#wf-panel");
  const stages = KERNEL.workflow;
  const select = (idx) => {
    $$(".wf-stage", rail).forEach((b) => b.classList.toggle("sel", +b.dataset.idx === idx));
    const st = stages[idx];
    panel.innerHTML = `<h3 class="block-title">${esc(st.name)}</h3><p class="block-sub">${esc(st.detail)}</p>` + (STAGE_PANELS[st.id] || "");
    wireInspectorItems();
  };
  window.__wfSelect = select;
  rail.addEventListener("click", (e) => {
    const b = e.target.closest(".wf-stage");
    if (b) select(+b.dataset.idx);
  });
  const activeIdx = Math.max(0, stages.findIndex((s) => s.status === "active"));
  buildStagePanels();
  select(activeIdx);
  $("#insp-close")?.addEventListener("click", () => $(".wf-body").classList.remove("insp-open"));
  wireInspectorItems();
}

let STAGE_PANELS = {};
function buildStagePanels() {
  const K = KERNEL;
  STAGE_PANELS = {};
  K.workflow.forEach((st) => {
    if (st.id === "execution") {
      STAGE_PANELS[st.id] = `<div class="stage-list">${K.plan.slice(0, 9).map((p) => `
        <div class="stage wf-item" data-insp="${esc(p.action)}" data-insp-sub="owner: ${esc(p.owner)} · stage ${esc(String(p.stage))}">
          <div class="stage-n">▶</div><div><div class="stage-name">${esc(p.action)}</div>
          <div class="stage-owner">${esc(p.owner)}</div></div><span class="chip s-todo">queued</span></div>`).join("") ||
        '<div class="callout">No runnable items — stage complete.</div>'}
        <div class="block-sub" style="margin-top:8px">Wave budget: max ${K.waveBudget} concurrent agents</div></div>`;
    } else if (st.id === "validation") {
      STAGE_PANELS[st.id] = `<div class="table-scroll"><table class="data"><thead><tr><th>Section</th><th>Citation</th><th>QA</th></tr></thead><tbody>
        ${K.sections.map((s) => {
          const v = K.validation[s.n] || {};
          const cell = (x) => x ? `<span class="chip ${x.verdict === "PASS" ? "s-done" : "s-drafted"}">${esc(x.verdict)}${x.stage === "reverify" ? " ✓✓" : ""}</span>` : '<span class="chip s-todo">—</span>';
          return `<tr class="wf-item" data-insp="Section ${s.n} — ${esc(s.name)}" data-insp-sub="${esc((STATUS[s.status] || {}).label || s.status)}"><td>${s.n} ${esc(s.name)}</td><td>${cell(v.citation)}</td><td>${cell(v.qa)}</td></tr>`;
        }).join("")}</tbody></table></div>`;
    } else if (st.id === "approval") {
      STAGE_PANELS[st.id] = `<ul class="list-plain">
        <li><b>Open for human decision:</b> map the 6 team members onto the 5 capstone roles (Phase 1 item — no agent can decide it).</li>
        <li><b>Approved and on file:</b> DEC-001–014 (incl. DEC-012 scoped Track B, DEC-013 re-issuance, DEC-014 Facts correction).</li>
        <li>Approvals flow: AskUserQuestion escalation → DEC record → register update (see Decisions view).</li></ul>`;
    } else if (st.id === "publish") {
      STAGE_PANELS[st.id] = `<ul class="list-plain">
        <li>Business Plan DOCX/PDF — blocked on Validation (gates 14–18) → Stage 19 handoff.</li>
        <li>OS Structure Document — unblocked (os-structure-doc skill; source material ready).</li>
        <li>30-slide deck — blocked on verified sections (deck-builder skill ready).</li></ul>`;
    } else {
      STAGE_PANELS[st.id] = `<div class="callout">${esc(st.detail)}</div>`;
    }
  });
}

function wireInspectorItems() {
  $$(".wf-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const body = $("#insp-body");
      if (!body) return;
      body.innerHTML = `<div class="insp-title">${el.dataset.insp || ""}</div>
        <div class="insp-sub">${el.dataset.inspSub || ""}</div>`;
      $(".wf-body").classList.add("insp-open");
    });
  });
}

/* ---------------- shell & router ---------------- */

const NAV = [
  { group: "Monitor" },
  { id: "overview",  label: "Command Center", icon: "◧" },
  { id: "workflow",  label: "Workflow",       icon: "➤" },
  { id: "map",       label: "OS Map",         icon: "⬡" },
  { id: "pipeline",  label: "Pipeline",       icon: "⇶" },
  { id: "sections",  label: "Plan Sections",  icon: "▤" },
  { id: "gates",     label: "Quality Gates",  icon: "✓" },
  { group: "System" },
  { id: "agents",    label: "Agents",         icon: "◉" },
  { id: "evidence",  label: "Evidence",       icon: "❖" },
  { id: "decisions", label: "Decisions",      icon: "◆" },
  { id: "forecasts", label: "Forecasts",      icon: "◮" },
];

function renderShell() {
  $("#app").innerHTML = `
    <div class="shell">
      <aside class="sidebar" aria-label="Primary navigation">
        <div class="logo">
          <div class="logo-mark">t</div>
          <div>
            <div class="logo-name">Agentic OS</div>
            <div class="logo-sub">talabat · $175m allocation</div>
          </div>
        </div>
        <nav class="nav" id="nav">
          ${NAV.map((n) => n.group
            ? `<div class="nav-group">${n.group}</div>`
            : `<a href="#/${n.id}" data-view="${n.id}"><span class="n-icon">${n.icon}</span>${n.label}</a>`).join("")}
        </nav>
        <div class="sidebar-foot">
          ${esc(DATA.meta.group)}<br>
          Snapshot ${esc(DATA.meta.snapshotDate)} · read-only console
        </div>
      </aside>
      <div class="scrim" id="scrim"></div>
      <div class="main">
        <header class="topbar">
          <button class="iconbtn menu-toggle" id="menu" aria-label="Toggle navigation">☰</button>
          <span class="crumb">talabat Agentic OS / <b id="crumb-here">Command Center</b></span>
          <span class="topbar-spacer"></span>
          <button class="searchbtn" id="searchbtn" aria-label="Open command palette">🔍 Jump to… <span class="kbd">⌘K</span></button>
          <span class="badge-live"><span class="dot"></span>OS operationally stable</span>
          <button class="iconbtn" id="theme" title="Toggle theme" aria-label="Toggle theme">◐</button>
        </header>
        <main class="content" id="view" tabindex="-1"></main>
      </div>
    </div>`;

  $("#theme").addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = cur;
    try { localStorage.setItem("aos-theme", cur); } catch {}
  });
  $("#menu").addEventListener("click", () => $(".shell").classList.toggle("nav-open"));
  $("#scrim").addEventListener("click", () => $(".shell").classList.remove("nav-open"));
  $("#nav").addEventListener("click", (e) => { if (e.target.closest("a")) $(".shell").classList.remove("nav-open"); });
  $("#searchbtn").addEventListener("click", openPalette);
}

function route() {
  const id = (location.hash.replace(/^#\//, "") || "overview").split("?")[0];
  const view = views[id] ? id : "overview";
  $$(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.view === view));
  const label = NAV.find((n) => n.id === view)?.label || "Command Center";
  $("#crumb-here").textContent = label;
  document.title = `${label} · talabat Agentic OS`;
  const v = $("#view");
  v.innerHTML = `<div class="view-enter">${views[view]()}<div class="footer-note">talabat Agentic OS Console · repository snapshot ${esc(DATA.meta.snapshotDate)} · AASTMT MBA Capstone G02 · press <span class="kbd">⌘K</span> to jump anywhere</div></div>`;
  window.scrollTo(0, 0);

  // post-render wiring
  requestAnimationFrame(() => {
    const arc = $(".ring-arc");
    if (arc) requestAnimationFrame(() => { arc.style.strokeDashoffset = arc.dataset.target; });
    wireWorkflow();
    wireMap();
    $("#replay")?.addEventListener("click", () => {
      const feed = $("#feed");
      const html = feed.innerHTML;
      feed.innerHTML = "";
      requestAnimationFrame(() => { feed.innerHTML = html; });
    });
  });
}

/* ---------------- boot ---------------- */

try {
  const saved = localStorage.getItem("aos-theme");
  if (saved) document.documentElement.dataset.theme = saved;
} catch {}

renderShell();
mountAsk();
route();
window.addEventListener("hashchange", route);
window.addEventListener("keydown", (e) => {
  const inField = /^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName || "");
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); $("#palette") ? closePalette() : openPalette(); }
  else if (e.key === "/" && !inField && !$("#palette")) { e.preventDefault(); openPalette(); }
  else if (e.key === "Escape") { closePalette(); $("#ask")?.classList.remove("open"); }
  else if (!inField && location.hash.includes("workflow")) {
    if (e.key.toLowerCase() === "i") { $(".wf-body")?.classList.toggle("insp-open"); }
    else if (/^[1-7]$/.test(e.key) && window.__wfSelect) { window.__wfSelect(+e.key - 1); }
  }
});

/* Demo mode (for presentations & testing): ?palette opens the command palette,
   ?ask=<question> opens the assistant and asks it. */
const demo = new URLSearchParams(location.search);
if (demo.has("palette")) setTimeout(openPalette, 300);
if (demo.has("ask")) setTimeout(() => {
  $("#ask").classList.add("open");
  const qv = demo.get("ask");
  if (qv) { $("#ask-in").value = qv; $("#ask-form").dispatchEvent(new Event("submit")); }
}, 300);

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

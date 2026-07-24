/* talabat Agentic OS Console — application shell, hash router, and views.
   Dependency-free: plain DOM + SVG. */

import { DATA, STATUS } from "./data.js";

const $ = (sel, el = document) => el.querySelector(sel);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const chip = (status) => {
  const s = STATUS[status] || STATUS.todo;
  return `<span class="chip ${s.cls}">${s.icon} ${esc(s.label)}</span>`;
};

/* ---------------- charts (inline SVG) ---------------- */

function donut(parts, total, centerLabel) {
  const R = 78, r = 56, C = 95;
  const palette = { cat1: "var(--cat1)", cat2: "var(--cat2)", cat3: "var(--cat3)", cat4: "var(--cat4)" };
  let a0 = -Math.PI / 2;
  const segs = parts
    .map((p) => {
      const frac = p.amount / total;
      const a1 = a0 + frac * 2 * Math.PI - 0.035; // 2px-equivalent surface gap
      const large = a1 - a0 > Math.PI ? 1 : 0;
      const sx = C + R * Math.cos(a0), sy = C + R * Math.sin(a0);
      const ex = C + R * Math.cos(a1), ey = C + R * Math.sin(a1);
      const sx2 = C + r * Math.cos(a1), sy2 = C + r * Math.sin(a1);
      const ex2 = C + r * Math.cos(a0), ey2 = C + r * Math.sin(a0);
      const d = `M${sx} ${sy} A${R} ${R} 0 ${large} 1 ${ex} ${ey} L${sx2} ${sy2} A${r} ${r} 0 ${large} 0 ${ex2} ${ey2} Z`;
      a0 = a1 + 0.035;
      return `<path d="${d}" fill="${palette[p.color]}" data-name="${esc(p.name)}" data-amount="${p.amount}"><title>${esc(p.name)}: $${p.amount}m (${Math.round(frac * 100)}%)</title></path>`;
    })
    .join("");
  return `
  <div class="donut-wrap" role="img" aria-label="${esc(centerLabel)}">
    <svg viewBox="0 0 190 190" width="190" height="190">${segs}</svg>
    <div class="donut-center"><div><div class="dc-v">$${total}m</div><div class="dc-l">${esc(centerLabel)}</div></div></div>
  </div>`;
}

function statusBar(items, key = "status") {
  const buckets = { done: 0, active: 0, drafted: 0, partial: 0, todo: 0, pending: 0 };
  items.forEach((i) => { buckets[i[key]] = (buckets[i[key]] || 0) + 1; });
  const total = items.length;
  const seg = (n, color) => (n ? `<span style="flex:${n};background:${color}" title="${n} of ${total}"></span>` : "");
  return `<div class="hbar" role="img" aria-label="status distribution">
    ${seg(buckets.done, "var(--ok)")}${seg(buckets.active + buckets.partial + buckets.drafted, "var(--warn)")}${seg(buckets.todo + buckets.pending, "var(--border)")}
  </div>`;
}

/* ---------------- views ---------------- */

const views = {
  overview() {
    const m = DATA.meta;
    const doneA = DATA.pipeline.partA.stages.filter((s) => s.status === "done").length;
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
          <h3 class="block-title">Execution status</h3>
          <p class="block-sub">Where the OS stands right now</p>
          <div class="meter-row"><span class="m-label">Setup stages (Part A)</span>${statusBar(DATA.pipeline.partA.stages)}<span class="m-val">${doneA}/12</span></div>
          <div class="meter-row"><span class="m-label">Plan sections (v2)</span>${statusBar(DATA.sections)}<span class="m-val">${drafted}/14</span></div>
          <div class="meter-row"><span class="m-label">Whole-plan gates</span>${statusBar(DATA.pipeline.partC.stages)}<span class="m-val">0/6</span></div>
          <div class="callout mt">All 14 sections are drafted under the pivoted problem. Remaining: independent Pass&nbsp;2 verification per section, then the whole-plan gates (Stages 14–19) and publication.</div>
        </div>
      </div>

      <div class="card mt">
        <h3 class="block-title">Capstone milestones</h3>
        <p class="block-sub">The five phases of the AASTMT capstone calendar</p>
        <div class="stage-list">
          ${DATA.milestones.map((ms) => `
            <div class="stage">
              <div class="stage-n">P${ms.n}</div>
              <div><div class="stage-name">${esc(ms.name)} <span class="stage-owner">· ${esc(ms.weeks)}</span></div></div>
              ${chip(ms.status)}
              <div class="stage-note">${esc(ms.note)}</div>
            </div>`).join("")}
        </div>
      </div>

      <div class="grid g-3 mt">
        ${DATA.deliverables.map((d) => `
          <div class="card">
            <h3 class="block-title">${esc(d.name)}</h3>
            <p class="block-sub">${esc(d.spec)}</p>
            ${chip(d.status)}
            <p style="font-size:12.5px;color:var(--ink-3);margin:10px 0 0">${esc(d.note)}</p>
          </div>`).join("")}
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

/* ---------------- shell & router ---------------- */

const NAV = [
  { group: "Monitor" },
  { id: "overview",  label: "Command Center", icon: "◧" },
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
}

function route() {
  const id = (location.hash.replace(/^#\//, "") || "overview").split("?")[0];
  const view = views[id] ? id : "overview";
  document.querySelectorAll(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.view === view));
  const label = NAV.find((n) => n.id === view)?.label || "Command Center";
  $("#crumb-here").textContent = label;
  document.title = `${label} · talabat Agentic OS`;
  $("#view").innerHTML = views[view]() + `<div class="footer-note">talabat Agentic OS Console · repository snapshot ${esc(DATA.meta.snapshotDate)} · AASTMT MBA Capstone G02</div>`;
  $("#view").scrollTop = 0;
  window.scrollTo(0, 0);
}

try {
  const saved = localStorage.getItem("aos-theme");
  if (saved) document.documentElement.dataset.theme = saved;
} catch {}

renderShell();
route();
window.addEventListener("hashchange", route);

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}

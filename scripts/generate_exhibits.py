#!/usr/bin/env python3
"""Generate numbered, sourced visual exhibits for the talabat Group Business Plan.

Reads the EXHIBITS list below (each entry hand-authored, no invented data — every series must carry
a `source` string, either a Fact/Source citation or an Assumption ID) and writes one PNG per exhibit
under vault/Projects/Business_Plan_Drafts_v2/Exhibits/, plus a manifest recording number, title,
type, source note, geography tag, and target section for each. See
vault/Templates/_TEMPLATE-visual-exhibit-standard.md for the governing principles this script
enforces (no unsourced series, DEC-009 disclosure sentence on any OPT-cost-range exhibit).

Usage: python3 scripts/generate_exhibits.py
Requires: matplotlib (pip install matplotlib)
"""
import os

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EXHIBITS_DIR = os.path.join(
    REPO_ROOT, "vault", "Projects", "Business_Plan_Drafts_v2", "Exhibits"
)
MANIFEST_PATH = os.path.join(EXHIBITS_DIR, "Exhibits_Manifest.md")

# talabat's disclosed brand color is orange; this exact hex is this OS's own professional
# approximation for chart styling, not a value confirmed against a disclosed brand asset.
TALABAT_ORANGE = "#FF6B00"
NEUTRAL_GREY = "#4A4A4A"
LIGHT_GREY = "#B0B0B0"

DEC009_DISCLOSURE = "This is an Agentic OS analytical recommendation, not a disclosed talabat allocation."

# Each exhibit: id, slug, title (action title, McKinsey style), type, section(s), geography,
# source_note (string covering every data point — Fact citation or Assumption ID), dec009 (bool),
# and a `render` callable that draws onto a given matplotlib Axes.
EXHIBITS = []


def register(id_, slug, title, type_, section, geography, source_note, dec009, render):
    EXHIBITS.append(
        dict(
            id=id_,
            slug=slug,
            title=title,
            type=type_,
            section=section,
            geography=geography,
            source_note=source_note,
            dec009=dec009,
            render=render,
        )
    )


def _investment_programme_structure(ax):
    # Source: TLB-020 p.16 (Everyday App ~USD120mn = ~USD75mn opex + ~USD45mn capex;
    # Food-leadership ~USD55mn) — vault/Decisions/Investment_Portfolio_Register.md
    labels = ["Everyday App\nopex (~USD75mn)", "Everyday App\ncapex (~USD45mn)", "Food-leadership\n(~USD55mn)"]
    values = [75, 45, 55]
    colors = [TALABAT_ORANGE, "#FFB27A", NEUTRAL_GREY]
    bars = ax.bar(labels, values, color=colors, width=0.6)
    for bar, v in zip(bars, values):
        ax.text(bar.get_x() + bar.get_width() / 2, v + 2, f"USD {v}mn", ha="center", fontsize=10)
    ax.set_ylabel("USD million")
    ax.set_title("USD175mn 2026 Investment Programme — Disclosed Component Structure", fontsize=11, loc="left")
    ax.spines[["top", "right"]].set_visible(False)
    ax.set_ylim(0, 90)


register(
    id_="01",
    slug="investment_programme_structure",
    title="talabat's disclosed 2026 investment programme totals USD175mn, split ~USD120mn Everyday App / ~USD55mn Food-leadership",
    type_="Investment-allocation exhibit",
    section="1, 9",
    geography="Group",
    source_note="TLB-020, p.16 (Fact) — Investment_Portfolio_Register.md",
    dec009=False,
    render=_investment_programme_structure,
)


def _scenario_comparison(ax):
    # Source: TLB-020 p.14 (FY2026 guidance range) — vault/Forecasts/Scenarios_v2.md top-level scenarios
    metrics = ["GMV growth\n(cFX)", "Revenue growth\n(cFX)", "Adj. EBITDA\n(% of GMV)", "FCF\n(% of GMV)"]
    low = [11.0, 14.0, 4.4, 3.2]
    high = [14.0, 17.0, 4.8, 3.6]
    mid = [(a + b) / 2 for a, b in zip(low, high)]
    x = range(len(metrics))
    ax.bar(x, [h - l for l, h in zip(low, high)], bottom=low, color=TALABAT_ORANGE, width=0.5, label="Guided range")
    for i, m in enumerate(mid):
        ax.plot(i, m, marker="D", color=NEUTRAL_GREY, markersize=6)
    ax.set_xticks(list(x))
    ax.set_xticklabels(metrics, fontsize=9)
    ax.set_ylabel("%")
    ax.set_title("FY2026 disclosed guidance range — the only headline scenario set (DEC-008, base case)", fontsize=11, loc="left")
    ax.spines[["top", "right"]].set_visible(False)


register(
    id_="02",
    slug="scenario_comparison",
    title="FY2026 guidance range is the plan's sole headline scenario set, per DEC-008",
    type_="Scenario comparison",
    section="9",
    geography="Group",
    source_note="TLB-020, p.14 (Fact) — Scenarios_v2.md top-level scenarios; presentation constrained by DEC-008 (approved 2026-07-23, Option 1)",
    dec009=False,
    render=_scenario_comparison,
)


def build_all():
    os.makedirs(EXHIBITS_DIR, exist_ok=True)
    manifest_rows = []
    for i, ex in enumerate(EXHIBITS, start=1):
        if not ex["source_note"]:
            raise ValueError(f"Exhibit {ex['id']} ({ex['slug']}) has no source_note — refusing to render unsourced data.")
        caption = ex["source_note"]
        if ex["dec009"] and DEC009_DISCLOSURE not in caption:
            caption = f"{caption}. {DEC009_DISCLOSURE}"
        fig, ax = plt.subplots(figsize=(7, 4.2), dpi=200)
        ex["render"](ax)
        fig.text(0.02, 0.01, f"Source: {caption}", fontsize=7.5, color=NEUTRAL_GREY, wrap=True)
        fig.tight_layout(rect=[0, 0.06, 1, 1])
        filename = f"Figure_{ex['id']}_{ex['slug']}.png"
        out_path = os.path.join(EXHIBITS_DIR, filename)
        fig.savefig(out_path, facecolor="white")
        plt.close(fig)
        manifest_rows.append(
            f"| {i} | `{filename}` | {ex['title']} | {ex['type']} | Section {ex['section']} | {ex['geography']} | {caption} |"
        )
        print(f"Wrote {out_path}")

    with open(MANIFEST_PATH, "w") as f:
        f.write("---\ntype: manifest\ntitle: Exhibits Manifest\nupdated: \"2026-07-23\"\n---\n\n")
        f.write("# Exhibits Manifest\n\n")
        f.write(
            "Generated by `scripts/generate_exhibits.py`. Every row's Source/Assumption note is "
            "mandatory and mechanically checked before render — see "
            "`vault/Templates/_TEMPLATE-visual-exhibit-standard.md`. Figure numbers below are "
            "provisional (generation order); `scripts/export_business_plan.py` assigns the final "
            "sequential number at document-assembly time based on where each figure's marker actually "
            "appears in the assembled plan.\n\n"
        )
        f.write("| # | File | Action title | Type | Target section | Geography | Source / assumption note |\n")
        f.write("|---|---|---|---|---|---|---|\n")
        f.write("\n".join(manifest_rows) + "\n")
    print(f"Wrote {MANIFEST_PATH}")


if __name__ == "__main__":
    build_all()

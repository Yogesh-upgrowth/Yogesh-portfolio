#!/usr/bin/env python3
"""
Build page-inventory.csv (+ inventory-summary.md) from seeds/entities.json and seeds/curated.json.

Usage:  python3 scripts/build_inventory.py
Never hand-edit page-inventory.csv — change the seeds and re-run.

Columns:
  id, wave, hub, archetype, url, title_hint, primary_keyword, secondary_keywords,
  intent, funnel, audience_tier, entity_a, entity_b, geo, template_id, notes
"""
import csv, json, os, re, sys
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ENT = json.load(open(os.path.join(ROOT, "seeds", "entities.json")))
CUR = json.load(open(os.path.join(ROOT, "seeds", "curated.json")))

# Archetype metadata: (intent, funnel, audience_tier, template_id)
META = {
    "hub":               ("navigational", "—",    "all", "hub"),
    "service":           ("transactional", "BOFU", "A",  "service"),
    "service-industry":  ("transactional", "BOFU", "A",  "service-industry"),
    "hire-city":         ("transactional", "BOFU", "A",  "hire-city"),
    "case-study":        ("commercial",   "BOFU", "A",  "case-study"),
    "teardown":          ("informational","TOFU/MOFU", "B", "teardown"),
    "benchmark-hub":     ("informational","MOFU", "B",  "benchmark-hub"),
    "benchmark":         ("informational","MOFU", "B",  "benchmark"),
    "tool":              ("transactional","MOFU", "A/B","tool"),
    "playbook":          ("informational","TOFU/MOFU", "B", "playbook"),
    "glossary":          ("informational","TOFU", "B/C","glossary"),
    "compare":           ("commercial",   "MOFU", "B",  "compare"),
    "template":          ("transactional","MOFU", "B",  "template"),
    "india":             ("informational","MOFU", "A/B","india"),
    "pricing-examples":  ("informational","MOFU", "B",  "pricing-examples"),
    "decision":          ("informational","MOFU/BOFU", "A/B", "decision"),
    "growth":            ("informational","MOFU", "A/B","growth"),
}

rows = []
seen_urls = set()

def slugify(s):
    s = s.lower().replace("&", "and").replace("+", "plus").replace("₹", "inr")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s

def add(wave, hub, archetype, url, title, kw, kw2=None, entity_a="", entity_b="", geo="IN+US", notes=""):
    if url in seen_urls:
        sys.exit(f"Duplicate URL: {url}")
    seen_urls.add(url)
    intent, funnel, tier, tid = META[archetype]
    rows.append({
        "id": f"{archetype}-{len(rows)+1:04d}",
        "wave": wave, "hub": hub, "archetype": archetype, "url": url,
        "title_hint": title, "primary_keyword": kw,
        "secondary_keywords": "; ".join(kw2 or []),
        "intent": intent, "funnel": funnel, "audience_tier": tier,
        "entity_a": entity_a, "entity_b": entity_b, "geo": geo,
        "template_id": tid, "notes": notes,
    })

industries = {i["slug"]: i for i in ENT["industries"]}
apps = {a["slug"]: a for a in ENT["apps"]}

# 0. Hubs (wave 1 — built in wave 0, published with wave 1)
for h in CUR["hubs"]:
    add(1, h["slug"], "hub", f"/{h['slug']}", h["title"], h["kw"], notes="Curated hub: intro + featured + full index; ItemList schema")

# 1. Services
for s in ENT["services"]:
    add(1, "services", "service", f"/services/{s['slug']}", f"{s['label']} Consulting (India & Global)", s["kw"], s["kw2"], entity_a=s["slug"])

# 2. Service × Industry
for s in ENT["services"]:
    inds = s.get("industries", "none")
    if inds == "none":
        continue
    targets = list(industries.keys()) if inds == "all" else inds
    targets = [t for t in targets if t not in s.get("exclude_industries", [])]
    for t in targets:
        ind = industries[t]
        add(s["industry_wave"], "services", "service-industry",
            f"/services/{s['slug']}/{t}",
            f"{s['label']} for {ind['label']} Apps",
            s["industry_kw"].format(industry=ind["kw"]),
            [f"{ind['kw']} {s['kw']}"],
            entity_a=s["slug"], entity_b=t,
            notes=f"Examples to reference: {', '.join(ind['example_apps'])}; must be ≥65% unique vs /services/{s['slug']} and siblings")

# 3. Hire × City
for r in ENT["city_roles"]:
    for c in ENT["cities"]:
        add(3, "hire", "hire-city", f"/hire/{r['slug']}-{c['slug']}", f"{r['label']} in {c['label']}",
            r["kw"].format(city=c["kw"]), [f"{r['slug'].replace('-', ' ')} {c['label'].lower()}"],
            entity_a=r["slug"], entity_b=c["slug"], geo=c["region"],
            notes="Hard cap 27 pages; needs local ecosystem facts + on-site availability; ≥60% unique vs siblings")

# 4. Case studies
for cs in CUR["case_studies"]:
    add(cs["wave"], "case-studies", "case-study", f"/case-studies/{cs['slug']}", cs["title"], cs["kw"], notes=cs.get("note", ""))

# 5. Teardowns (app × lens)
for a in ENT["apps"]:
    for l in ENT["teardown_lenses"]:
        add(a["wave"], "teardowns", "teardown", f"/teardowns/{a['slug']}/{l['slug']}",
            f"{a['name']} {l['label']} Teardown (2026)",
            l["kw"].format(app=a["name"].lower()),
            [f"{a['name'].lower()} {l['slug']} strategy", f"how does {a['name'].lower()} make money" if l["slug"] == "monetization" else f"{a['name'].lower()} {l['slug']} analysis"],
            entity_a=a["slug"], entity_b=l["slug"], geo=("IN" if a["region"] == "in" else "IN+US"),
            notes=f"industry={a['industry']}; merge into /teardowns/{a['slug']}/monetization if research object has <6 facts; sibling similarity ≤0.55")

# 6. Benchmarks (metric hubs + metric × industry)
for m in ENT["metrics"]:
    add(1, "benchmarks", "benchmark-hub", f"/benchmarks/{m['slug']}", f"{m['label']} Benchmarks by Industry (2026)", m["hub_kw"],
        [f"{m['slug'].replace('-', ' ')} benchmark"], entity_a=m["slug"], notes="Cross-industry table with per-cell sources; tool embed; methodology")
    for t, ind in industries.items():
        add(m["industry_wave"], "benchmarks", "benchmark", f"/benchmarks/{m['slug']}/{t}",
            f"{m['label']} Benchmarks for {ind['label']} Apps (2026)",
            m["industry_kw"].format(industry=ind["kw"]),
            [f"{ind['kw']} {m['slug'].replace('-', ' ')}"],
            entity_a=m["slug"], entity_b=t,
            notes=f"≥3 sources or mark 'insufficient public data'; examples: {', '.join(ind['example_apps'])}")

# 7. Tools
for t in CUR["tools"]:
    add(t["wave"], "tools", "tool", f"/tools/{t['slug']}", t["title"], t["kw"], notes="Interactive island; INR/USD toggle; shareable state; interpretation text")

# 8. Playbooks
for p in CUR["playbooks"]:
    add(p["wave"], "playbooks", "playbook", f"/playbooks/{p['slug']}", p["title"], p["kw"], notes="2,000–3,500 words; ≥2 experience blocks; Yogesh edits line-by-line in wave 1")

# 9. Glossary
for g in CUR["glossary"]:
    add(g["wave"], "glossary", "glossary", f"/glossary/{g['slug']}", f"What is {g['term']}? Definition, Formula & Benchmarks",
        f"what is {g['term'].split(' (')[0].lower()}", [g["term"].lower(), f"{g['term'].split(' (')[0].lower()} formula"], entity_a=g["slug"],
        notes="Definition ≤40 words; formula; INR+USD worked example; benchmark ranges; tool embed")

# 10. Compare
for c in CUR["compare"]:
    slug = f"{slugify(c['a'])}-vs-{slugify(c['b'])}"
    add(c["wave"], "compare", "compare", f"/compare/{slug}", f"{c['a']} vs {c['b']} (2026): Which Should You Pick?",
        f"{c['a'].lower()} vs {c['b'].lower()}", [f"{c['b'].lower()} vs {c['a'].lower()}", f"{c['a'].lower()} alternative"],
        entity_a=c["a"], entity_b=c["b"], notes=f"category={c['category']}; pricing facts dated; India availability/INR billing row required")

# 11. Templates
for t in CUR["templates"]:
    add(t["wave"], "templates", "template", f"/templates/{t['slug']}", f"{t['title']} (Free Template)", t["kw"],
        notes=f"gated={t['gated']}; walkthrough with filled example; Sheet/Doc/Notion duplicate link")

# 12. India
for i in CUR["india"]:
    add(i["wave"], "india", "india", f"/india/{i['slug']}", i["title"], i["kw"], geo="IN",
        notes="Official sources only (RBI/CBIC/Play/App Store policy pages); verified_on mandatory; quarterly refresh")

# 13. Pricing examples
for p in CUR["pricing_examples"]:
    add(p["wave"], "pricing-examples", "pricing-examples", f"/pricing-examples/{p['slug']}",
        f"{p['category']} Pricing Examples 2026 (India & US)",
        (p["slug"].replace("-apps", "").replace("-", " ") + " app pricing") if p["slug"].endswith("-apps") else (p["slug"].replace("-", " ") + " pricing"),
        [f"how much do {p['category'].lower()} charge", f"{p['category'].lower()} subscription price"],
        entity_a=p["slug"], notes="8–15 apps; per-row source + verified date; feeds annual pricing index study")

# 14. Decisions
for d in CUR["decisions"]:
    add(d["wave"], "decisions", "decision", f"/decisions/{d['slug']}", d["title"], d["kw"], notes="Short answer with conditions; decision table; ≥4 cited data points; stage-based advice")

# 15. Growth (conditional, wave 4)
for pr in ENT["problems"]:
    for at in ENT["app_types"]:
        add(4, "growth", "growth", f"/growth/{pr['slug']}/{at['slug']}", f"How to {pr['label']} for {' '.join(w if w == '&' else w.capitalize() for w in at['label'].split())}",
            f"{pr['kw']} {at['kw']}", [f"{at['kw']} {pr['slug'].split('-')[-1]}"], entity_a=pr["slug"], entity_b=at["slug"],
            notes="CONDITIONAL: build only after wave-3 gate; merge app types that produce near-identical tactics")

# Write CSV
out_csv = os.path.join(ROOT, "page-inventory.csv")
with open(out_csv, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
    w.writeheader()
    w.writerows(rows)

# Summary
by_arch = defaultdict(Counter)
for r in rows:
    by_arch[r["archetype"]][r["wave"]] += 1
core = sum(1 for r in rows if r["archetype"] != "growth")
lines = ["# Inventory summary", "", f"Total rows: {len(rows)}  (core: {core}, conditional growth: {len(rows)-core})", "",
         "| Archetype | W1 | W2 | W3 | W4 | Total |", "|---|---|---|---|---|---|"]
for a, c in by_arch.items():
    lines.append(f"| {a} | {c[1]} | {c[2]} | {c[3]} | {c[4]} | {sum(c.values())} |")
wave_tot = Counter(r["wave"] for r in rows)
lines += ["", f"By wave: W1={wave_tot[1]}  W2={wave_tot[2]}  W3={wave_tot[3]}  W4={wave_tot[4]}"]
open(os.path.join(ROOT, "inventory-summary.md"), "w").write("\n".join(lines) + "\n")
print("\n".join(lines))
print(f"\nWrote {out_csv}")

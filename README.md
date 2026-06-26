# Davronbek Malikov — Portfolio (“Agent Constellation”)

A minimalist, dark-mode portfolio that presents AI projects as **collectible
trading cards** with holographic tilt, scored on 5 axes, plus an ecosystem map
showing how they connect into one system.

Built with **Next.js 14 (App Router)** and hand-written CSS — no UI framework, so
the production build is fast and dependency-light. Deploys to **Vercel** with zero
config.

---

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node 18.17+ (Node 22 recommended).

---

## ➕ Add a new project (e.g. a Machine Learning Engineering card)

Everything renders from **one file**: `data/projects.js`.

1. Open `data/projects.js`.
2. Copy an existing object in the `projects` array and edit the fields. Minimum:

```js
{
  id: "ml-churn-model",          // unique slug
  n: "09",                        // card number
  title: "Churn Prediction Model",
  rarity: "epic",                 // mythic | legendary | epic | rare | common
  cls: "ML Engineer / Modeling",
  flavor: "Predicts who leaves — before they do.",
  motif: "ml",                    // picks the hero illustration (see Motif.jsx)
  group: "ml",                    // agent | platform | rnd | ml
  stats: { PWR: 80, SCL: 70, AUT: 50, INT: 88, PLH: 75 },
  // extraStat: { label: "ACCURACY", value: 94 },   // optional 6th meter
  abilities: [
    "Gradient-boosted model on 2M customer events",
    "SHAP explainability dashboard",
  ],
  stack: ["Python", "XGBoost", "FastAPI", "Docker"],
  status: { state: "live", label: "LIVE" },   // live | beta | rnd | proven
  links: { demo: "https://...", github: "https://github.com/..." },
}
```

3. Save. The card appears automatically, and the **“ML Engineering” filter tab
   shows up on its own** once at least one project has `group: "ml"`.

### Notes
- **Stat axes** (0–100): `PWR` power/impact · `SCL` scale/reach · `AUT` autonomy ·
  `INT` AI intelligence · `PLH` polish/production.
- **New illustration?** Add a `case "yourMotif":` block in `components/Motif.jsx`.
- **Rarity colors** live in `components/rarity.js`.
- Edit your name, roles, tagline and links at the bottom of `data/projects.js`
  (`profile`). **Replace the LinkedIn URL placeholder there.**

---

## 📄 Add your CV

Drop your CV as `public/cv.pdf`. The “Download CV” buttons already point to `/cv.pdf`.

---

## 🚀 Deploy to Vercel (GitHub → Vercel)

1. **Create a repo and push:**
   ```bash
   git init
   git add .
   git commit -m "portfolio: agent constellation"
   git branch -M main
   git remote add origin https://github.com/<you>/portfolio.git
   git push -u origin main
   ```
2. Go to **vercel.com → Add New → Project → Import** your repo.
3. Vercel auto-detects Next.js. Leave all defaults (Build: `next build`,
   Install: `npm install`). Click **Deploy**.
4. Done — you get a `*.vercel.app` URL. Every future `git push` auto-deploys.

> Want a custom domain? Vercel → Project → Settings → Domains.

---

## Project structure

```
app/
  layout.jsx        root layout + fonts + metadata
  page.jsx          the whole homepage (hero, cards, ecosystem, footer)
  globals.css       full design system (colors, card, holo effect, layout)
components/
  Card.jsx          holographic tilt card (client component)
  Gallery.jsx       filter chips + grid (client)
  Motif.jsx         abstract SVG illustration per project class
  EcosystemMap.jsx  the "one system, not eight projects" map
  Reveal.jsx        scroll-in animation wrapper
  rarity.js         rarity → color mapping
data/
  projects.js       ← edit this to add/update projects + your profile
```

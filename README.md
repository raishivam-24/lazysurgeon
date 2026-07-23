# Lumiflex Website

A React (Vite + Tailwind CSS) recreation of the Lumiflex product brochure for The Lazy Surgeon.

## Structure

```
lumiflex-website/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   └── hero.jpg          product photo extracted from the brochure
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Features.jsx      feature grid + voice-command signature banner + at-a-glance stats
        ├── WhyLumiflex.jsx   problem/solution, stats, use cases, frustration chart
        ├── Pricing.jsx       plan cards, comparison table, value breakdown, how-to-buy
        ├── FooterCTA.jsx
        ├── Reveal.jsx        scroll-reveal animation wrapper
        └── icons.jsx         inline SVG icon set
```

## Run locally

```bash
npm install
npm run dev       # starts a dev server (default: http://localhost:5173)
```

## Build for production

```bash
npm run build      # outputs static files to dist/
npm run preview    # preview the production build locally
```

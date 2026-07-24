# Motion Library

**[motion-library.natsapp.workers.dev](https://motion-library.natsapp.workers.dev)**

A reference gallery of everyday UI micro-interactions, buttons, form feedback, loaders, modals, and notifications, built to answer a question that's easy to hand-wave and hard to actually pin down: *what should this motion feel like, and why?*

## Why this exists

I wanted a place to collect and study the small animations that make an interface feel considered rather than static: a button that presses, a toggle that eases instead of snapping, a checkmark that draws itself in. Each motion in the library ships with a short note on the reasoning behind it, not just the CSS, because the "why" (perceived continuity, cause-and-effect legibility, avoiding a jarring instant state change) is the part worth actually learning. This project is as much about building that muscle for myself as it is about the code.

It started as a single self-contained HTML prototype (still kept under [`reference/`](reference/) as the original design source) and got rebuilt from there into a real, routed, deployed site.

## What's here (V1)

- A gallery homepage grouping all 16 motions by category, each card auto-looping its animation
- An individual page per motion (e.g. `/motions/hover-glow`) with a bigger preview and a copy-to-clipboard CSS snippet
- A design-token system (`src/styles/tokens.css`) so the whole look is swappable without touching structure

## Roadmap

- **V1 (done)**: the gallery + per-motion pages described above
- **V2 (next)**: live controls on each motion's page, drag a slider and watch the preview *and* the generated code update together
- **V3 (later)**: export a motion back into Figma so it plays as a native Figma animation

## Stack

[Astro](https://astro.build) with [React](https://react.dev) islands for the interactive bits (arriving in V2), deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/) via [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/). Chosen over a plain SPA because each motion needing its own real, crawlable page mattered more than an all-client-rendered bundle, and over Next.js because the Cloudflare-authored Astro adapter needs no extra translation layer to run on Workers.

## Running locally

```sh
npm install
npm run dev        # astro dev server at localhost:4321
```

| Command             | Action                                              |
| :------------------ | :--------------------------------------------------- |
| `npm run dev`       | Start the local dev server                          |
| `npm run build`     | Build the production site to `./dist/`               |
| `npm run preview`   | `wrangler dev` against the built output (real Workers runtime, locally) |
| `npm run deploy`    | Build, then `wrangler deploy` to Cloudflare Workers   |
| `npx astro check`   | Type-check all `.astro`/`.ts` files                   |

## Project structure

```
src/
├── data/
│   ├── types.ts          # MotionDef / ParamDef shape
│   └── motions/          # one file per motion (keyframes, preview markup, shipped CSS)
├── lib/motions.ts         # motion registry (getAllMotions, getMotionBySlug, ...)
├── components/            # MotionCard, CodePanel, Nav
├── pages/
│   ├── index.astro        # gallery
│   └── motions/[slug].astro
└── styles/tokens.css      # design tokens
reference/                 # the original .dc.html prototype this was rebuilt from
```

See [`AGENTS.md`](AGENTS.md) for a deeper architecture walkthrough if you're picking this repo back up (human or AI).

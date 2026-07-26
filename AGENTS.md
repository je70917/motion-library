# Motion Library — architecture notes

A reference gallery of UI micro-interactions (buttons, forms, loaders, modals, notifications), each with its own page and a copy-to-clipboard CSS snippet. Live at https://motion-library.natsapp.workers.dev. Full context and roadmap in [`README.md`](README.md); this file is for whoever (human or agent) picks up the codebase next.

## Stack

Astro (static output) + React islands, deployed to Cloudflare Workers via `@astrojs/cloudflare`. No server endpoints yet, everything prerenders at build time via `getStaticPaths`.

## Data model

Everything about a motion lives in one place: `src/data/types.ts` defines `MotionDef` and `ParamDef`, and `src/data/motions/*.ts` has one file per motion (16 total). The registry in `src/lib/motions.ts` imports all of them and exposes `getAllMotions()`, `getMotionBySlug()`, `getMotionsByCategory()`.

Each `MotionDef` has:
- `params: ParamDef[]`, the adjustable values (currently just `duration` per motion), unused by the UI in V1 but the shape V2's live controls will read from
- `previewCss` / `previewHtml`, the autoplay demo shown on the gallery card and detail page
- `codeTemplates.css(values)`, a function returning the real, shippable CSS snippet (not the demo's infinite-loop version, an actual `:active`/`:focus-visible`/`.open`-style snippet)

**Important distinction, easy to get wrong**: for motions that are state-triggered rather than continuously looping (press, focus ring, error shake, modal, drawer, toast, badge, etc.), the demo's autoplay cycle length and the real shipped duration are *different numbers*. The demo loops on an artificially stretched cycle just so it's visible without a real click/focus/submit; the shipped snippet uses the real, much shorter duration. `params[].default` should always hold the *real* shipped value, decoupled from whatever the demo's `previewCss` cycle is doing. (Continuously-looping motions like hover-glow, icon-ripple, spinner, skeleton-shimmer, and banner-pulse are the exception, there the demo and shipped duration are genuinely the same number, and `previewCss` uses `var(--duration, <default>)` so it's already wired for V2.)

## Directory structure

```
src/
├── data/
│   ├── types.ts
│   └── motions/*.ts       # one file per motion
├── lib/motions.ts          # registry
├── components/
│   ├── MotionCard.astro    # gallery card, static, no JS
│   ├── CodePanel.astro     # code block + copy button (vanilla <script>, no React yet)
│   └── Nav.astro           # currently unmounted, see below
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro         # gallery, grouped by category, sticky filter bar
│   └── motions/[slug].astro
└── styles/tokens.css       # design tokens (base "Industry" system + dark/fuchsia override)
reference/                  # original .dc.html prototype this was rebuilt from, kept as source material
```

`Nav.astro` (the top brand bar) is currently commented out in `BaseLayout.astro`, hidden per request but kept in place, not deleted, so it's a one-line uncomment to bring back.

## Conventions

- **No em-dashes in user-facing copy** (motion descriptions, headings, intro text). Use a comma or split into a new sentence. This came from an explicit correction, applies to prose shown on the site, not to code/CSS comments.
- Only create git commits when the user asks for one.
- The design tokens (`src/styles/tokens.css`) are the single source of truth for the look, a restyle should mean editing values there, not touching component structure.

## QA

`qa/demo-vs-shipped.html` is a standalone (no build step, just open it in a browser) side-by-side comparison of all 16 motions: the autoplay demo next to the actual shipped Code-panel snippet applied to real markup, with interactive triggers for anything that's hover/click/focus-gated. It's hand-authored, not generated from the source files, so if a motion's `previewHtml`/`previewCss`/`codeTemplates.css` changes, this file needs a matching manual update or it'll drift and stop being trustworthy. It's excluded from the Astro build (lives outside `src/` and `public/`), so it never ships with the site.

This is how several real bugs got caught that a build/type-check couldn't: success-check's missing `@keyframes checkRing`, hover-glow/icon-ripple animating unconditionally instead of on `:hover`, easing mismatches between demo and shipped (modal-enter-exit, drawer-slide), and a missing error-shake label. Worth re-running this whenever a motion's CSS changes.

## Roadmap

- **V1 (done)**: gallery + per-motion pages, static preview, copy-to-clipboard code panel
- **V2 (next)**: `ControlPanel`/`MotionPlayground` React islands, live sliders bound to each motion's `params`, wired up for a few motions first to validate the pattern before rolling out to all 16
- **V3 (later, undesigned)**: export a motion back into Figma. No scaffolding built for this yet, the typed `ParamDef` structure should be enough for a future exporter to read from without restructuring V1/V2

## Commands

| Command           | Action                                                     |
| :----------------- | :----------------------------------------------------------- |
| `npm run dev`       | Astro dev server at `localhost:4321`                        |
| `npm run build`     | Build to `./dist/client` (Cloudflare adapter's asset dir)   |
| `npm run preview`   | `wrangler dev`, real Workers runtime, locally                |
| `npm run deploy`    | Build, then `wrangler deploy`                                |
| `npx astro check`   | Type-check all `.astro`/`.ts` files                          |

When starting the dev server, background mode works well here: `astro dev --background`, managed with `astro dev stop` / `astro dev status` / `astro dev logs`.

## Deployment notes

Deploys to Cloudflare Workers (not Pages, intentionally, Workers is Cloudflare's recommended path for new projects and has full asset-hosting parity now). `wrangler.jsonc` at the repo root gets auto-redirected by Wrangler to the adapter's resolved config at `dist/client/wrangler.json`, that's expected, not a misconfiguration.

The adapter auto-enables two bindings we don't currently use, a KV namespace (`SESSION`) and Cloudflare Images (`IMAGES`), default adapter behavior, not something explicitly configured. Harmless for `wrangler dev`; may prompt for provisioning on a from-scratch `wrangler deploy` in a new account.

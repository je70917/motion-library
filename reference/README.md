# Handoff: Motion / Micro-interaction Library

## Overview
A reference gallery of 16 UI micro-interactions (buttons, form feedback, loading states, modals/drawers, notifications) for the design team to browse and copy motion timing from. Each panel auto-loops its animation continuously; clicking a panel opens a modal with the CSS/keyframes snippet for that interaction.

## About the Design Files
The files in this bundle are **design references built in HTML** (a single self-contained prototype file, `Motion Library.dc.html`, plus its stylesheet `industry-styles.css`). They are not production code to import as-is — the task is to recreate this library's look, motion timing and code-viewer behavior in the target codebase's existing environment (React, Vue, native, etc.), using its own component/animation patterns.

## Fidelity
**High-fidelity.** Colors, spacing, typography and animation timings below are final — implement pixel- and timing-accurate.

## Screens / Views

### Single view: "Motion library" gallery
- **Purpose**: Browse and reference micro-interactions; click any panel to see its code.
- **Layout**: Sticky top nav bar (brand + 5 anchor links) → centered content column (max-width 1120px) → header block (eyebrow tag, H1, intro paragraph) → 5 stacked sections, each with an eyebrow ("01 — Buttons & controls" etc.), an H2, and a responsive grid of cards (`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`, gap = `--space-4` ≈ 13.6px).
- **Card component** ("blueprint card"): square corners (no radius), 1px hairline border in `--color-divider`, background `--color-surface`, four small "+" crosshair registration marks at each corner (absolutely positioned outside the box, ~11×11px, drawn from two 1px lines). Inside: a fixed-height (128px) "stage" area centered content showing the looping demo, a small uppercase kicker label (10px, accent color, letter-spacing 0.1em), and a body paragraph (13px, ~80% opacity) describing when to use the motion. Cursor: pointer; whole card is clickable.

## The 16 motions (grouped by category)

**Buttons & controls**
1. **Hover glow** — pill button; box-shadow blooms from 0 to a soft 9px accent-tinted ring and background shifts to a darker/lighter accent step, 2.6s ease-in-out, infinite, alternating.
2. **Press depress** — button scales to 0.93 and darkens, then returns to 1, 2.4s cubic-bezier(.45,0,.2,1), infinite.
3. **Toggle switch** — track background eases between neutral-300 and accent; knob translateX(0→22px); both 3s ease-in-out, infinite, synced.
4. **Icon button ripple** — a 1.5px accent ring scales from 0.25→2 while fading opacity .45→0, 2.2s ease-out, infinite.

**Form feedback**
5. **Focus ring** — input border + a 4px accent-tinted box-shadow ring ease in/out, 3s ease-in-out, infinite.
6. **Error shake** — input translateX shakes ±7/6/5/3px in quick succession then holds, 3.4s ease-in-out infinite (shake occupies ~20% of the cycle, rest is hold); an "This field is required" label fades in/out in sync.
7. **Success check** — a circular ring (box-shadow pulse) plus a two-stroke checkmark (two 1.5px bars, each animated via `transform: rotate(Ndeg) scaleX(0→1)` staggered), 2.8s ease-out, infinite.

**Loading & progress**
8. **Spinner** — a 4-tick crosshair (not a ring) rotating 360°, 1.6s linear, infinite.
9. **Progress fill** — bar width animates 0%→100% then fades opacity to 0 near the end before restarting, 2.8s ease-in-out, infinite.
10. **Skeleton shimmer** — two bars with a 200%-wide 3-stop gradient, `background-position` sweeps -150%→150%, 2.4s ease-in-out, infinite (second bar delayed 0.15s).

**Modals & drawers**
11. **Modal enter/exit** — a small dialog mock scales 0.92→1 and translateY 6px→0 with opacity 0→1, holds, then reverses; 3.2s ease-in-out, infinite.
12. **Drawer slide** — a side panel (46% width) translateX(100%→0→100%), 3.2s ease-in-out, infinite, within an overflow-hidden "screen" mock.
13. **Backdrop fade** — a full-bleed scrim (55% black) opacity fades in/out around the hold window, 3.2s ease-in-out, infinite.

**Notifications & toasts**
14. **Toast slide-in** — chip translateY(22px→0→22px) + opacity 0→1→0, holds mid-cycle, 3s ease-in-out, infinite.
15. **Badge bump** — count badge scales 1→1.4→1 ("overscale and settle"), 2.5s ease-out, infinite.
16. **Banner pulse** — inset box-shadow (accent, 38% tint) pulses 0→2px→0, 2.4s ease-in-out, infinite.

## Interactions & Behavior
- **Click any card → modal opens** showing: the motion's label (H4), a one-line description, and a `<pre>` code block with a runnable CSS/keyframes snippet (using transition/animation-based CSS, not the literal always-looping demo CSS — written as you'd actually ship it, e.g. `:active`/`:focus-visible`/`.open` state classes rather than `infinite`).
- **Close modal**: click the backdrop, or click the "×" button. Clicking inside the modal card does not close it (stopPropagation).
- Modal backdrop: fixed, full-viewport, centered content, black tint ~55%, simple 150ms fade-in on mount.
- No other interactivity — all gallery animations are autoplaying/looping (CSS `animation: … infinite`), not hover- or click-triggered in the reference (contrast with the shipped code snippets, which mostly use hover/focus/active/state-class triggers instead of infinite loops).

## State Management
Minimal: a single `activeId: string | null` (which motion's modal is open, or none). Everything else is stateless CSS animation.

## Design Tokens
Dark, neutral (true gray) theme with a bright fuchsia accent (built on the "Industry" design system's token structure — same CSS variable names, values overridden for this theme):

- `--color-bg`: `#141414`
- `--color-surface`: `#1f1f1f`
- `--color-text`: `#f2f2f2`
- `--color-divider`: `color-mix(in srgb, #f2f2f2 16%, transparent)`
- Neutral ramp (100→900, light-to-pale on this dark ground): `#292929, #333333, #454545, #5c5c5c, #7a7a7a, #9a9a9a, #bdbdbd, #dedede, #f2f2f2`
- Accent (fuchsia) ramp (100→900): `#3a1830, #55204a, #7c2c6a, #a8398c, #d048a8, #e563ba, #ef8ecb, #f7bfe2, #fde3f2` — base accent `#e6399b` (~= step 500/600); accent-2 mirrors accent (mono palette, no second hue).
- Shadows: `--shadow-sm: 0 1px 2px rgba(0,0,0,.45)`, `--shadow-md: 0 3px 12px rgba(0,0,0,.5)`, `--shadow-lg: 0 14px 36px rgba(0,0,0,.6)`
- Spacing scale (`--space-1`…`--space-8`): 3.4px, 6.8px, 10.2px, 13.6px, 20.4px, 27.2px
- Radius: square corners throughout (radius 0) — this is a deliberate "blueprint/wireframe" aesthetic: hairline borders + small "+" crosshair marks at the four corners of every card/frame.
- Type: headings in "Barlow Condensed" (weight 600), body in "Barlow" (Google Fonts). H1 42px, H2 32px, H6 (eyebrow) 13px uppercase, letter-spacing 0.08em.

## Assets
No images or icons beyond CSS-drawn shapes (crosshair corner marks, checkmark strokes, spinner ticks — all plain divs/borders, no SVG/icon font used in this file).

## Files
- `Motion Library.dc.html` — the full prototype (markup + the interaction logic for the click-to-view-code modal).
- `industry-styles.css` — the base "Industry" design-system stylesheet this file links and layers its dark/fuchsia token overrides on top of (see the inline `<style>` block near the top of the HTML file for the actual override values — that block is the source of truth for this theme, not the base file).

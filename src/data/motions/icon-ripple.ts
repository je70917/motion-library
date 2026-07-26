import type { MotionDef } from '../types';

export const iconRipple: MotionDef = {
  slug: 'icon-ripple',
  label: 'Icon button ripple',
  category: 'buttons',
  description: 'A single expanding ring reads as "action sent" on icon-only controls with no label to react.',
  why: 'Icon-only buttons have no text state to change after a click, so there\'s nothing new to read besides the icon itself, which usually doesn\'t change either. An expanding, fading ring borrows a widely legible physical metaphor (a ripple on water, a radar ping) for "a pulse of action went out from this point," giving feedback without inventing new iconography.',
  params: [
    { key: 'duration', label: 'Duration', type: 'range', unit: 's', min: 1, max: 4, step: 0.1, default: 2.2, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes iconRipple { 0% { transform: scale(0.25); opacity: 0.45;} 75%,100% { transform: scale(2); opacity: 0;} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center;">
      <div style="position: relative; width: 40px; height: 40px; border: 1px solid var(--color-divider); display: flex; align-items: center; justify-content: center;">
        <div style="position: absolute; inset: 0; border: 1.5px solid var(--color-accent); border-radius: 50%; animation: iconRipple var(--duration, 2.2s) ease-out infinite;"></div>
        <div style="width: 10px; height: 10px; position: relative;">
          <div style="position: absolute; top: 50%; left: 0; width: 100%; height: 1.5px; background: var(--color-accent); transform: translateY(-50%);"></div>
          <div style="position: absolute; left: 50%; top: 0; height: 100%; width: 1.5px; background: var(--color-accent); transform: translateX(-50%);"></div>
        </div>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.icon-btn {
  position: relative;
}
.icon-btn:hover::after,
.icon-btn:focus-visible::after {
  content: "";
  position: absolute; inset: 0;
  border: 1.5px solid var(--color-accent);
  border-radius: 50%;
  animation: iconRipple ${values.duration}s ease-out infinite;
}
@keyframes iconRipple {
  0% { transform: scale(0.25); opacity: 0.45; }
  75%, 100% { transform: scale(2); opacity: 0; }
}`,
  },
};

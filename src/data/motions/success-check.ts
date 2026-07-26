import type { MotionDef } from '../types';

export const successCheck: MotionDef = {
  slug: 'success-check',
  label: 'Success check',
  category: 'forms',
  description: 'The check draws stroke-by-stroke after a valid save, a small reward beat, not just a static icon swap.',
  why: 'A static checkmark icon swap is easy to miss, especially right after a save when attention may have already moved elsewhere. A check that visibly draws itself gives the eye a distinct moment to catch mid-action, closing the loop on what the user just did instead of silently updating an icon in the background.',
  params: [
    { key: 'duration', label: 'Ring duration', type: 'range', unit: 's', min: 0.4, max: 1.4, step: 0.05, default: 0.8, cssVar: '--duration' },
  ],
  // A checkmark drawn from two independently-timed rotated bars only looks
  // like a check once both bars finish — for a good chunk of the loop only
  // one bar is visible, which reads as a stray diagonal line. A single SVG
  // path with a stroke-draw animation reads correctly at every frame.
  previewCss: `
    @keyframes checkDraw { 0%,20% { stroke-dashoffset: 1; } 68%,100% { stroke-dashoffset: 0; } }
    @keyframes checkRing { 0%,15% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-accent) 0%, transparent);} 45%,90% { box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent);} 100% { box-shadow: 0 0 0 0 transparent;} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center;">
      <div style="width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid var(--color-accent); display: flex; align-items: center; justify-content: center; animation: checkRing 2.8s ease-out infinite;">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M2 6.5L6.2 10.5L14 2" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" style="stroke-dasharray: 1; stroke-dashoffset: 1; animation: checkDraw 2.8s ease-out infinite;" />
        </svg>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.check-ring { animation: checkRing ${values.duration}s ease-out; }
.check path {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: draw ${(Number(values.duration) * 0.6).toFixed(2)}s ease-out .2s forwards;
}
@keyframes checkRing {
  from { box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-accent) 30%, transparent); }
  to { box-shadow: 0 0 0 4px transparent; }
}
@keyframes draw { to { stroke-dashoffset: 0; } }`,
  },
};

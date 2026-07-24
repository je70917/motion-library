import type { MotionDef } from '../types';

export const hoverGlow: MotionDef = {
  slug: 'hover-glow',
  label: 'Hover glow',
  category: 'buttons',
  description: 'For primary CTAs, a soft radial bloom signals "clickable" without a hard color swap.',
  params: [
    { key: 'duration', label: 'Duration', type: 'range', unit: 's', min: 1, max: 5, step: 0.1, default: 2.6, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes btnGlow {
      0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-accent) 0%, transparent); background: var(--color-accent); }
      50% { box-shadow: 0 0 0 9px color-mix(in srgb, var(--color-accent) 16%, transparent); background: var(--color-accent-600); }
    }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center;">
      <div style="padding: 10px 26px; border-radius: 0; color: var(--color-bg); font-family: var(--font-heading); font-weight: 600; font-size: 14px; animation: btnGlow var(--duration, 2.6s) ease-in-out infinite;">Continue</div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.btn-primary {
  animation: btnGlow ${values.duration}s ease-in-out infinite;
}
@keyframes btnGlow {
  0%, 100% {
    box-shadow: 0 0 0 0 transparent;
    background: var(--color-accent);
  }
  50% {
    box-shadow: 0 0 0 9px color-mix(in srgb, var(--color-accent) 16%, transparent);
    background: var(--color-accent-600);
  }
}`,
  },
};

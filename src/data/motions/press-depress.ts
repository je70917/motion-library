import type { MotionDef } from '../types';

export const pressDepress: MotionDef = {
  slug: 'press-depress',
  label: 'Press depress',
  category: 'buttons',
  description: 'A quick compress on tap confirms the click registered before the async result returns.',
  // Note: the demo loop below runs on its own fixed 2.4s cycle purely so the
  // gallery card stays visible without a real click — that cycle length is
  // independent of `duration`, which is the real one-shot :active duration.
  params: [
    { key: 'duration', label: 'Press duration', type: 'range', unit: 's', min: 0.1, max: 0.6, step: 0.01, default: 0.24, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes btnPress {
      0%, 18%, 100% { transform: scale(1); background: var(--color-accent); }
      32% { transform: scale(0.93); background: var(--color-accent-700); }
      48% { transform: scale(1); }
    }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center;">
      <div style="padding: 10px 26px; border-radius: 0; color: var(--color-bg); font-family: var(--font-heading); font-weight: 600; font-size: 14px; animation: btnPress 2.4s cubic-bezier(.45,0,.2,1) infinite;">Save changes</div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.btn-primary:active {
  animation: btnPress ${values.duration}s cubic-bezier(.45,0,.2,1);
}
@keyframes btnPress {
  0% { transform: scale(1); }
  50% { transform: scale(0.93); background: var(--color-accent-700); }
  100% { transform: scale(1); }
}`,
  },
};

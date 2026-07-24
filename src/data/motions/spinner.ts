import type { MotionDef } from '../types';

export const spinner: MotionDef = {
  slug: 'spinner',
  label: 'Spinner',
  category: 'loading',
  description: 'A rotating crosshair rather than a ring reads as instrumentation, not a stock loader.',
  params: [
    { key: 'duration', label: 'Rotation duration', type: 'range', unit: 's', min: 0.6, max: 3, step: 0.1, default: 1.6, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes spin { to { transform: rotate(360deg); } }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center;">
      <div style="width: 34px; height: 34px; position: relative; animation: spin var(--duration, 1.6s) linear infinite;">
        <div style="position: absolute; top: -1px; left: 50%; width: 1.5px; height: 10px; background: var(--color-accent); transform: translateX(-50%);"></div>
        <div style="position: absolute; bottom: -1px; left: 50%; width: 1.5px; height: 10px; background: var(--color-accent-300); transform: translateX(-50%);"></div>
        <div style="position: absolute; left: -1px; top: 50%; height: 1.5px; width: 10px; background: var(--color-accent-500); transform: translateY(-50%);"></div>
        <div style="position: absolute; right: -1px; top: 50%; height: 1.5px; width: 10px; background: var(--color-accent-500); transform: translateY(-50%);"></div>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.spinner { animation: spin ${values.duration}s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }`,
  },
};

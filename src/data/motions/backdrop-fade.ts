import type { MotionDef } from '../types';

export const backdropFade: MotionDef = {
  slug: 'backdrop-fade',
  label: 'Backdrop fade',
  category: 'modals',
  description: 'The scrim eases in just ahead of its overlay so focus shifts before the modal itself moves.',
  params: [
    { key: 'duration', label: 'Duration', type: 'range', unit: 's', min: 0.1, max: 0.6, step: 0.01, default: 0.3, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes backdropPulse { 0%,10% { opacity: 0;} 26%,74% { opacity: 1;} 92%,100% { opacity: 0;} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center; background: var(--color-neutral-100); position: relative; overflow: hidden;">
      <div style="width: 90%; display: flex; gap: 6px;">
        <div style="flex: 1; height: 50px; background: var(--color-surface); border: 1px solid var(--color-divider);"></div>
        <div style="flex: 1; height: 50px; background: var(--color-surface); border: 1px solid var(--color-divider);"></div>
      </div>
      <div style="position: absolute; inset: 0; background: color-mix(in srgb, #000 55%, transparent); animation: backdropPulse 3.2s ease-in-out infinite;"></div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.backdrop {
  opacity: 0;
  transition: opacity ${values.duration}s ease-in-out;
}
.backdrop.open { opacity: 1; }`,
  },
};

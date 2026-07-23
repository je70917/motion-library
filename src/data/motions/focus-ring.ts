import type { MotionDef } from '../types';

export const focusRing: MotionDef = {
  slug: 'focus-ring',
  label: 'Focus ring',
  category: 'forms',
  description: 'Border and outline ease in together on focus so keyboard navigation feels deliberate, not jumpy.',
  params: [
    { key: 'duration', label: 'Transition duration', type: 'range', unit: 's', min: 0.1, max: 0.6, step: 0.01, default: 0.25, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes focusRing { 0%,20%,100% { box-shadow: 0 0 0 0 transparent; border-color: var(--color-divider);} 55%,80% { box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-accent) 22%, transparent); border-color: var(--color-accent);} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center; padding: 0 var(--space-3);">
      <div style="width: 100%; height: 36px; background: var(--color-bg); border: 1px solid var(--color-divider); animation: focusRing 3s ease-in-out infinite;"></div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.input {
  transition: border-color ${values.duration}s ease-in-out, box-shadow ${values.duration}s ease-in-out;
}
.input:focus-visible {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-accent) 22%, transparent);
}`,
  },
};

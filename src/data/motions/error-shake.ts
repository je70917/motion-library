import type { MotionDef } from '../types';

export const errorShake: MotionDef = {
  slug: 'error-shake',
  label: 'Error shake',
  category: 'forms',
  description: 'A short horizontal shake on invalid submit — brief enough to read as feedback, not an alarm.',
  params: [
    { key: 'duration', label: 'Shake duration', type: 'range', unit: 's', min: 0.2, max: 0.8, step: 0.01, default: 0.4, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes errorShake { 0%,58%,100% { transform: translateX(0);} 62% { transform: translateX(-7px);} 66% { transform: translateX(6px);} 70% { transform: translateX(-5px);} 74% { transform: translateX(3px);} 78% { transform: translateX(0);} }
    @keyframes errorLabel { 0%,58%,100% { opacity: 0;} 66%,88% { opacity: 1;} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; padding: 0 var(--space-3);">
      <div style="width: 100%; height: 36px; background: var(--color-bg); border: 1px solid var(--color-accent-700); animation: errorShake 3.4s ease-in-out infinite;"></div>
      <div style="font-size: 11px; color: var(--color-accent-700); animation: errorLabel 3.4s ease-in-out infinite;">This field is required</div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.input.invalid { animation: errorShake ${values.duration}s ease-in-out; }
@keyframes errorShake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-7px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(3px); }
}`,
  },
};

import type { MotionDef } from '../types';

export const progressFill: MotionDef = {
  slug: 'progress-fill',
  label: 'Progress fill',
  category: 'loading',
  description: 'Eased fill rather than linear. It starts eager and settles in, matching how real transfers feel.',
  why: 'A linear fill implies constant, predictable throughput, which is rarely how real transfers behave, they start fast and taper off as buffers and handshakes finish. An eased fill sets expectations closer to reality instead of feeling like it\'s lying to the user, and it avoids the classic complaint of progress bars that appear to stall right near the end.',
  params: [
    { key: 'duration', label: 'Fill duration', type: 'range', unit: 's', min: 0.2, max: 1.2, step: 0.05, default: 0.6, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes progressFill { 0% { width: 0%; opacity: 1;} 70% { width: 100%; opacity: 1;} 88%,100% { width: 100%; opacity: 0;} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center; padding: 0 var(--space-3);">
      <div style="width: 100%; height: 6px; background: var(--color-neutral-200); position: relative; overflow: hidden;">
        <div style="height: 100%; background: var(--color-accent); animation: progressFill 2.8s ease-in-out infinite;"></div>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.progress-fill {
  width: var(--percent);
  transition: width ${values.duration}s cubic-bezier(.22,1,.36,1);
}`,
  },
};

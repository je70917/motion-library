import type { MotionDef } from '../types';

export const toastSlideIn: MotionDef = {
  slug: 'toast-slide-in',
  label: 'Toast slide-in',
  category: 'notifications',
  description: 'Rises from the edge, holds long enough to read, then eases back out. Never a hard cut.',
  params: [
    { key: 'duration', label: 'Duration', type: 'range', unit: 's', min: 1.5, max: 5, step: 0.1, default: 3, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes toastSlide { 0%,8% { transform: translateY(22px); opacity: 0;} 22%,75% { transform: translateY(0); opacity: 1;} 92%,100% { transform: translateY(22px); opacity: 0;} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 14px;">
      <div style="padding: 8px 16px; background: var(--color-neutral-900); color: var(--color-bg); font-size: 12px; box-shadow: var(--shadow-md); animation: toastSlide 3s ease-in-out infinite;">Changes saved</div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.toast {
  animation: toastSlide ${values.duration}s ease-in-out;
}
@keyframes toastSlide {
  0% { transform: translateY(22px); opacity: 0; }
  15% { transform: translateY(0); opacity: 1; }
  85% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(22px); opacity: 0; }
}`,
  },
};

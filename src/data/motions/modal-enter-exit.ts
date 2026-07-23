import type { MotionDef } from '../types';

export const modalEnterExit: MotionDef = {
  slug: 'modal-enter-exit',
  label: 'Modal enter/exit',
  category: 'modals',
  description: "Scale up from 92% with a slight rise — a modal should feel like it's arriving, not appearing.",
  params: [
    { key: 'duration', label: 'Duration', type: 'range', unit: 's', min: 0.15, max: 0.6, step: 0.01, default: 0.35, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes modalPop { 0%,10% { opacity: 0; transform: scale(0.92) translateY(6px);} 26%,74% { opacity: 1; transform: scale(1) translateY(0);} 92%,100% { opacity: 0; transform: scale(0.92) translateY(6px);} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center; background: var(--color-neutral-100); position: relative; overflow: hidden;">
      <div style="width: 110px; padding: 10px; background: var(--color-surface); border: 1px solid var(--color-divider); box-shadow: var(--shadow-md); animation: modalPop 3.2s ease-in-out infinite;">
        <div style="width: 60%; height: 6px; background: var(--color-accent-300); margin-bottom: 6px;"></div>
        <div style="width: 90%; height: 4px; background: var(--color-neutral-300); margin-bottom: 3px;"></div>
        <div style="width: 70%; height: 4px; background: var(--color-neutral-300);"></div>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.modal {
  animation: modalPop ${values.duration}s cubic-bezier(.22,1,.36,1);
}
@keyframes modalPop {
  from { opacity: 0; transform: scale(0.92) translateY(6px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}`,
  },
};

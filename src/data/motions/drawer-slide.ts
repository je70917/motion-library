import type { MotionDef } from '../types';

export const drawerSlide: MotionDef = {
  slug: 'drawer-slide',
  label: 'Drawer slide',
  category: 'modals',
  description: "Panels enter from the edge they're anchored to — right for detail, bottom for sheets — never fade in place.",
  params: [
    { key: 'duration', label: 'Duration', type: 'range', unit: 's', min: 0.15, max: 0.6, step: 0.01, default: 0.35, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes drawerSlide { 0%,10% { transform: translateX(100%);} 32%,74% { transform: translateX(0);} 94%,100% { transform: translateX(100%);} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; background: var(--color-neutral-100); position: relative; overflow: hidden;">
      <div style="flex: 1; padding: 10px; display: flex; flex-direction: column; gap: 5px;">
        <div style="width: 80%; height: 5px; background: var(--color-neutral-300);"></div>
        <div style="width: 60%; height: 5px; background: var(--color-neutral-300);"></div>
        <div style="width: 70%; height: 5px; background: var(--color-neutral-300);"></div>
      </div>
      <div style="width: 46%; height: 100%; background: var(--color-surface); border-left: 1px solid var(--color-divider); box-shadow: var(--shadow-lg); animation: drawerSlide 3.2s ease-in-out infinite; padding: 10px;">
        <div style="width: 70%; height: 5px; background: var(--color-accent-400); margin-bottom: 6px;"></div>
        <div style="width: 90%; height: 4px; background: var(--color-neutral-300);"></div>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.drawer {
  transform: translateX(100%);
  transition: transform ${values.duration}s cubic-bezier(.32,.72,0,1);
}
.drawer.open { transform: translateX(0); }`,
  },
};

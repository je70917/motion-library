import type { MotionDef } from '../types';

export const skeletonShimmer: MotionDef = {
  slug: 'skeleton-shimmer',
  label: 'Skeleton shimmer',
  category: 'loading',
  description: 'Placeholder blocks for content that hasn\'t arrived yet. It implies "still loading," not "empty."',
  params: [
    { key: 'duration', label: 'Duration', type: 'range', unit: 's', min: 1, max: 4, step: 0.1, default: 2.4, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes shimmer { 0% { background-position: -150% 0;} 100% { background-position: 150% 0;} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; padding: 0 var(--space-3);">
      <div style="width: 100%; height: 14px; background: linear-gradient(90deg, var(--color-neutral-200) 25%, var(--color-neutral-100) 50%, var(--color-neutral-200) 75%); background-size: 200% 100%; animation: shimmer var(--duration, 2.4s) ease-in-out infinite;"></div>
      <div style="width: 70%; height: 14px; background: linear-gradient(90deg, var(--color-neutral-200) 25%, var(--color-neutral-100) 50%, var(--color-neutral-200) 75%); background-size: 200% 100%; animation: shimmer var(--duration, 2.4s) ease-in-out infinite .15s;"></div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.skeleton {
  background: linear-gradient(90deg,
    var(--color-neutral-200) 25%, var(--color-neutral-100) 50%, var(--color-neutral-200) 75%);
  background-size: 200% 100%;
  animation: shimmer ${values.duration}s ease-in-out infinite;
}
@keyframes shimmer {
  0% { background-position: -150% 0; }
  100% { background-position: 150% 0; }
}`,
  },
};

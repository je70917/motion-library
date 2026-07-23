import type { MotionDef } from '../types';

export const successCheck: MotionDef = {
  slug: 'success-check',
  label: 'Success check',
  category: 'forms',
  description: 'The check draws stroke-by-stroke after a valid save — a small reward beat, not just a static icon swap.',
  params: [
    { key: 'duration', label: 'Ring duration', type: 'range', unit: 's', min: 0.4, max: 1.4, step: 0.05, default: 0.8, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes checkA { 0%,20% { transform: rotate(45deg) scaleX(0);} 42%,100% { transform: rotate(45deg) scaleX(1);} }
    @keyframes checkB { 0%,34% { transform: rotate(-48deg) scaleX(0);} 56%,100% { transform: rotate(-48deg) scaleX(1);} }
    @keyframes checkRing { 0%,15% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--color-accent) 0%, transparent);} 45%,90% { box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 20%, transparent);} 100% { box-shadow: 0 0 0 0 transparent;} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center;">
      <div style="width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid var(--color-accent); display: flex; align-items: center; justify-content: center; animation: checkRing 2.8s ease-out infinite;">
        <div style="width: 14px; height: 9px; position: relative;">
          <div style="position: absolute; width: 6px; height: 1.5px; background: var(--color-accent); left: 0; top: 5px; transform-origin: left center; animation: checkA 2.8s ease-out infinite;"></div>
          <div style="position: absolute; width: 11px; height: 1.5px; background: var(--color-accent); left: 4px; top: 5px; transform-origin: left center; animation: checkB 2.8s ease-out infinite;"></div>
        </div>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.check-ring { animation: checkRing ${values.duration}s ease-out; }
.check path {
  stroke-dasharray: 20;
  stroke-dashoffset: 20;
  animation: draw ${(Number(values.duration) * 0.6).toFixed(2)}s ease-out .2s forwards;
}
@keyframes draw { to { stroke-dashoffset: 0; } }`,
  },
};

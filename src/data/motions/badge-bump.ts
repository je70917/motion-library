import type { MotionDef } from '../types';

export const badgeBump: MotionDef = {
  slug: 'badge-bump',
  label: 'Badge bump',
  category: 'notifications',
  description: 'A quick overscale-and-settle on the count draws the eye to a new arrival without a full re-layout.',
  params: [
    { key: 'duration', label: 'Duration', type: 'range', unit: 's', min: 0.2, max: 1, step: 0.05, default: 0.5, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes badgeBump { 0%,40%,100% { transform: scale(1);} 52% { transform: scale(1.4);} 66% { transform: scale(1);} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center;">
      <div style="position: relative; width: 34px; height: 34px; border: 1px solid var(--color-divider); display: flex; align-items: center; justify-content: center;">
        <div style="width: 10px; height: 10px;">
          <div style="position: absolute; top: 50%; left: 0; width: 100%; height: 1.5px; background: var(--color-text); opacity: .5; transform: translateY(-50%);"></div>
        </div>
        <div style="position: absolute; top: -6px; right: -6px; min-width: 16px; height: 16px; padding: 0 3px; border-radius: 8px; background: var(--color-accent); color: var(--color-bg); font-size: 10px; display: flex; align-items: center; justify-content: center; animation: badgeBump 2.5s ease-out infinite;">3</div>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.badge.updated { animation: badgeBump ${values.duration}s ease-out; }
@keyframes badgeBump {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.4); }
}`,
  },
};

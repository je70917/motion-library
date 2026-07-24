import type { MotionDef } from '../types';

export const bannerPulse: MotionDef = {
  slug: 'banner-pulse',
  label: 'Banner pulse',
  category: 'notifications',
  description: 'A slow inner glow keeps a persistent banner from feeling inert without demanding constant attention.',
  why: 'Unlike a toast, a persistent banner has to stay noticeable without becoming visual noise the user tunes out entirely, a version of banner blindness. A slow, subtle inner glow keeps it from reading as fully dead UI while staying calm enough not to compete with whatever task the user is actually focused on, a middle ground between static and distracting.',
  params: [
    { key: 'duration', label: 'Duration', type: 'range', unit: 's', min: 1, max: 4, step: 0.1, default: 2.4, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes bannerPulse { 0%,100% { box-shadow: inset 0 0 0 0 color-mix(in srgb, var(--color-accent) 0%, transparent);} 50% { box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--color-accent) 38%, transparent);} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center; padding: 0 var(--space-3);">
      <div style="width: 100%; padding: 10px 12px; border: 1px solid var(--color-accent); display: flex; align-items: center; gap: 8px; animation: bannerPulse var(--duration, 2.4s) ease-in-out infinite;">
        <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--color-accent); flex: none;"></div>
        <div style="font-size: 12px;">Maintenance window at 10pm</div>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.banner {
  animation: bannerPulse ${values.duration}s ease-in-out infinite;
}
@keyframes bannerPulse {
  0%, 100% { box-shadow: inset 0 0 0 0 transparent; }
  50% { box-shadow: inset 0 0 0 2px color-mix(in srgb, var(--color-accent) 38%, transparent); }
}`,
  },
};

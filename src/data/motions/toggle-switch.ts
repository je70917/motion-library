import type { MotionDef } from '../types';

export const toggleSwitch: MotionDef = {
  slug: 'toggle-switch',
  label: 'Toggle switch',
  category: 'buttons',
  description: 'Track color and knob position ease together. Never snap a switch between states.',
  why: 'An instant flip reads as a UI glitch rather than an intentional toggle. Material Design and Apple\'s HIG both animate the thumb slide and color change together by default, no system switch component ships a "snap" variant. Eased motion here follows classic "slow in, slow out" animation principles: it gives the eye time to register what changed and that the user caused it.',
  // Demo loops the on/off cycle every 3s purely for visibility; the real
  // transition below is much snappier.
  params: [
    { key: 'duration', label: 'Transition duration', type: 'range', unit: 's', min: 0.1, max: 0.6, step: 0.01, default: 0.3, cssVar: '--duration' },
  ],
  previewCss: `
    @keyframes toggleTrack { 0%,15% { background: var(--color-neutral-300);} 50%,85% { background: var(--color-accent);} 100% { background: var(--color-neutral-300);} }
    @keyframes toggleKnob { 0%,15% { transform: translateX(0);} 50%,85% { transform: translateX(20px);} 100% { transform: translateX(0);} }
  `,
  previewHtml: `
    <div style="height: 128px; display: flex; align-items: center; justify-content: center;">
      <div style="width: 46px; height: 26px; border-radius: 13px; position: relative; animation: toggleTrack 3s ease-in-out infinite;">
        <div style="width: 20px; height: 20px; border-radius: 50%; background: var(--color-bg); position: absolute; top: 3px; left: 3px; box-shadow: var(--shadow-sm); animation: toggleKnob 3s ease-in-out infinite;"></div>
      </div>
    </div>
  `,
  codeTemplates: {
    css: (values) => `.switch-track { transition: background ${values.duration}s ease-in-out; }
.switch-track.on { background: var(--color-accent); }
.switch-knob { transition: transform ${values.duration}s ease-in-out; }
.switch-knob.on { transform: translateX(20px); }`,
  },
};

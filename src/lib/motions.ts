import type { MotionCategory, MotionDef } from '../data/types';

import { hoverGlow } from '../data/motions/hover-glow';
import { pressDepress } from '../data/motions/press-depress';
import { toggleSwitch } from '../data/motions/toggle-switch';
import { iconRipple } from '../data/motions/icon-ripple';
import { focusRing } from '../data/motions/focus-ring';
import { errorShake } from '../data/motions/error-shake';
import { successCheck } from '../data/motions/success-check';
import { spinner } from '../data/motions/spinner';
import { progressFill } from '../data/motions/progress-fill';
import { skeletonShimmer } from '../data/motions/skeleton-shimmer';
import { modalEnterExit } from '../data/motions/modal-enter-exit';
import { drawerSlide } from '../data/motions/drawer-slide';
import { backdropFade } from '../data/motions/backdrop-fade';
import { toastSlideIn } from '../data/motions/toast-slide-in';
import { badgeBump } from '../data/motions/badge-bump';
import { bannerPulse } from '../data/motions/banner-pulse';

export const CATEGORIES: { key: MotionCategory; label: string; navLabel: string }[] = [
  { key: 'buttons', label: 'Buttons & controls', navLabel: 'Buttons' },
  { key: 'forms', label: 'Form feedback', navLabel: 'Form feedback' },
  { key: 'loading', label: 'Loading & progress', navLabel: 'Loading' },
  { key: 'modals', label: 'Modals, drawers & sheets', navLabel: 'Modals & drawers' },
  { key: 'notifications', label: 'Notifications & toasts', navLabel: 'Notifications' },
];

const ALL_MOTIONS: MotionDef[] = [
  hoverGlow,
  pressDepress,
  toggleSwitch,
  iconRipple,
  focusRing,
  errorShake,
  successCheck,
  spinner,
  progressFill,
  skeletonShimmer,
  modalEnterExit,
  drawerSlide,
  backdropFade,
  toastSlideIn,
  badgeBump,
  bannerPulse,
];

export function getAllMotions(): MotionDef[] {
  return ALL_MOTIONS;
}

export function getMotionBySlug(slug: string): MotionDef | undefined {
  return ALL_MOTIONS.find((motion) => motion.slug === slug);
}

export function getMotionsByCategory(category: MotionCategory): MotionDef[] {
  return ALL_MOTIONS.filter((motion) => motion.category === category);
}

/** The next motion in gallery order, wrapping back to the first after the last. */
export function getNextMotion(slug: string): MotionDef {
  const index = ALL_MOTIONS.findIndex((motion) => motion.slug === slug);
  return ALL_MOTIONS[(index + 1) % ALL_MOTIONS.length];
}

/** The previous motion in gallery order, wrapping to the last before the first. */
export function getPreviousMotion(slug: string): MotionDef {
  const index = ALL_MOTIONS.findIndex((motion) => motion.slug === slug);
  return ALL_MOTIONS[(index - 1 + ALL_MOTIONS.length) % ALL_MOTIONS.length];
}

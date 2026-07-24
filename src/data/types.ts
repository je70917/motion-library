export type ParamType = 'range' | 'select' | 'color';

export interface ParamOption {
  label: string;
  value: string;
}

export interface ParamDef {
  key: string;
  label: string;
  type: ParamType;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: ParamOption[];
  default: number | string;
  /** CSS custom property this param drives, e.g. "--duration". */
  cssVar: string;
}

export type MotionCategory =
  | 'buttons'
  | 'forms'
  | 'loading'
  | 'modals'
  | 'notifications';

export interface CodeTemplates {
  css: (values: Record<string, string | number>) => string;
  /** Reserved for a later milestone — not populated yet. */
  tailwind?: (values: Record<string, string | number>) => string;
  /** Reserved for a later milestone — not populated yet. */
  react?: (values: Record<string, string | number>) => string;
}

export interface MotionDef {
  slug: string;
  label: string;
  category: MotionCategory;
  description: string;
  /** The perceptual/design reasoning behind the motion, shown under the code panel. */
  why: string;
  params: ParamDef[];
  /** @keyframes block(s) for the autoplay preview. Written against var(--x, default) so a future live-controls milestone can drive them without rewriting this CSS. */
  previewCss: string;
  /** Inner markup of the preview stage. */
  previewHtml: string;
  codeTemplates: CodeTemplates;
}

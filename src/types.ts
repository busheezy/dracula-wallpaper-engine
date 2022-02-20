import { effectNames } from './effects';

export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface UserProperties {
  squareSize: number;
  spacing: number;
  effect: EffectsNames;
  speed: number;
}

export interface GeneralProperties {
  fps: number;
}

export interface WEUserProperties {
  squareSize: UserPropertySlider;
  spacing: UserPropertySlider;
  effect: UserPropertyCombo<EffectsNames>;
  speed: UserPropertySliderFraction;
}

export interface WEGeneralProperties {
  fps: number;
}

export interface Square {
  colorIndex: number;
  alpha: number;
  debugs?: string[];
}

export interface WallpaperInfo {
  columns: number;
  rows: number;
}

export type DrawFn = (x: number, y: number, info: WallpaperInfo) => Square;
export type EffectFn = (info: WallpaperInfo) => void;
export interface EffectExport {
  draw: DrawFn;
  effect?: EffectFn;
}
type EffectsNamesTuple = typeof effectNames;
export type EffectsNames = EffectsNamesTuple[number];
export type Effects = Partial<Record<EffectsNames, EffectExport>>;

export interface UserProperty {
  index: number;
  order: number;
  text: string;
  type: string;
}

export interface UserPropertyComboOption<T> {
  label: string;
  value: T;
}

export interface UserPropertyCombo<T> extends UserProperty {
  options: UserPropertyComboOption<T>[];
  value: T;
}

export interface UserPropertySlider extends UserProperty {
  min: number;
  max: number;
  fraction: false;
  value: number;
}

export interface UserPropertySliderFraction {
  min: number;
  max: number;
  fraction: true;
  value: number;
  precision: number;
}

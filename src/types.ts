import { schemeNames } from './colors';
import { effectNames } from './effects';

export interface ColorScheme {
  background: string;
  colors: string[];
}

export interface UserProperties {
  squareSize: number;
  spacing: number;
  effect: EffectsNames;
  interval: number;
  scheme: SchemeNames;
}

export interface GeneralProperties {
  fps: number;
}

export interface WEUserProperties {
  squareSize: UserPropertySlider;
  spacing: UserPropertySlider;
  effect: UserPropertyCombo<EffectsNames>;
  interval: UserPropertySlider;
  scheme: UserPropertyCombo<SchemeNames>;
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
  cache?: SquareCache;
}
type EffectsNamesTuple = typeof effectNames;

export type EffectsNames = EffectsNamesTuple[number];

export type Effects = Partial<Record<EffectsNames, EffectExport>>;

export type ColorSchemes = Record<string, ColorScheme>;

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

type SchemeNamesTuple = typeof schemeNames;
export type SchemeNames = SchemeNamesTuple[number];

export type SquareCache = Record<string, Square>;

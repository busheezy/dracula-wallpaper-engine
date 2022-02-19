import { effectNames } from './effects';

export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface GeneralProperties {
  fps: number;
}
export interface SquareProperties {
  colorIndex: number;
  alpha: number;
  debugs?: string[];
}

export type EffectFn = (x: number, y: number) => SquareProperties;
type EffectsNamesTuple = typeof effectNames;
export type EffectsNames = EffectsNamesTuple[number];
export type Effects = Partial<Record<EffectsNames, EffectFn>>;

import { effectNames } from './effects';

export interface Color {
  r: number;
  g: number;
  b: number;
}

export interface Settings {
  fps: number;
  squareSize: number;
  spacing: number;
  effect: EffectsNames;
  speed: number;
}

export interface Square {
  colorIndex: number;
  alpha: number;
  debugs?: string[];
}

export type EffectFn = (x: number, y: number) => Square;
type EffectsNamesTuple = typeof effectNames;
export type EffectsNames = EffectsNamesTuple[number];
export type Effects = Partial<Record<EffectsNames, EffectFn>>;

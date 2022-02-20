import { effects } from './effects';
import { currentInfo } from './lib';
import { userProperties } from './settings';

const { effect } = userProperties;

export function effectUpdate() {
  const info = currentInfo();
  const currentEffect = effects[effect];

  currentEffect.effect?.(info);
}

let timer: null | NodeJS.Timer = null;

export function startEffectUpdate() {
  clearTimeout(timer);
  timer = setInterval(effectUpdate, userProperties.interval);
}

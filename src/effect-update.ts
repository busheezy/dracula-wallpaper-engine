import { effects } from './effects';
import { currentInfo } from './lib';
import { UserProperties } from './types';

export function effectUpdate(userProperties: UserProperties) {
  const info = currentInfo();

  const { effect } = userProperties;
  const currentEffect = effects[effect];

  currentEffect.effect?.(info);
}

let timer: null | NodeJS.Timeout = null;

export function startEffectUpdate(userProperties: UserProperties) {
  clearInterval(timer);

  timer = setInterval(() => {
    effectUpdate(userProperties);
  }, userProperties.interval);
}

import { userProperties } from './settings';

import tick from './tick';
import { generalProperties } from './settings';
import { resize } from './resize';

import { startEffectUpdate } from './effect-update';

const fpsTick = 1.0 / generalProperties.fps;

let fpsLastTime = performance.now() / 1000;
let fpsThreshold = 0;

function run() {
  const now = performance.now() / 1000;

  const fpsDelta = Math.min(now - fpsLastTime, 1);
  fpsLastTime = now;

  if (generalProperties.fps > 0) {
    fpsThreshold += fpsDelta;

    if (fpsThreshold < fpsTick) {
      return window.requestAnimationFrame(run);
    }

    fpsThreshold -= fpsTick;
  }

  tick();
  window.requestAnimationFrame(run);
}

window.addEventListener('load', () => {
  window.requestAnimationFrame(run);
  resize();

  if (process.env.NODE_ENV !== 'production') {
    startEffectUpdate(userProperties);
  }
});

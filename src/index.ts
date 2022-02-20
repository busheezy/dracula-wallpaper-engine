import { canvas } from './canvas';
import tick from './tick';
import { generalProperties } from './settings';

const tickLength = 1.0 / generalProperties.fps;
let lastTime = performance.now() / 1000;
let fpsThreshold = 0;

function run() {
  let now = performance.now() / 1000;
  const delta = Math.min(now - lastTime, 1);
  lastTime = now;

  if (generalProperties.fps > 0) {
    fpsThreshold += delta;

    if (fpsThreshold < tickLength) {
      window.requestAnimationFrame(run);
      return;
    }

    fpsThreshold -= tickLength;
  }

  tick();
  window.requestAnimationFrame(run);
}

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.onload = function () {
  window.requestAnimationFrame(run);
  resize();
};

window.onresize = resize;

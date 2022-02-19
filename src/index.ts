import draw from './draw';
import { settings } from './settings';

const tickLength = 1.0 / settings.fps;
let lastTime = performance.now() / 1000;
let fpsThreshold = 0;

function run() {
  window.requestAnimationFrame(run);

  let now = performance.now() / 1000;
  const delta = Math.min(now - lastTime, 1);
  lastTime = now;

  if (settings.fps > 0) {
    fpsThreshold += delta;

    if (fpsThreshold < tickLength) {
      return;
    }

    fpsThreshold -= tickLength;
  }

  draw();
}

function resize() {
  const canvas = <HTMLCanvasElement>document.getElementById('canvas');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.onload = function () {
  window.requestAnimationFrame(run);
  resize();
};

window.onresize = resize;

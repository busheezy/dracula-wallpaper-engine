import draw from "./draw";

import { GeneralProperties } from "./types";

declare global {
  interface Window {
    wallpaperPropertyListener: {
      applyGeneralProperties: (properties: GeneralProperties) => void;
    };
  }
}

const wallpaperSettings = {
  fps: 60,
};

window.wallpaperPropertyListener = {
  applyGeneralProperties(properties: GeneralProperties) {
    if (properties.fps) {
      wallpaperSettings.fps = properties.fps;
    }
  },
};

const tickLength = 1.0 / wallpaperSettings.fps;
let lastTime = performance.now() / 1000;
let fpsThreshold = 0;

function run() {
  window.requestAnimationFrame(run);

  let now = performance.now() / 1000;
  const delta = Math.min(now - lastTime, 1);
  lastTime = now;

  if (wallpaperSettings.fps > 0) {
    fpsThreshold += delta;

    if (fpsThreshold < tickLength) {
      return;
    }

    fpsThreshold -= tickLength;
  }

  draw();
}

function resize() {
  const canvas = <HTMLCanvasElement>document.getElementById("canvas");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.onload = function () {
  window.requestAnimationFrame(run);
  resize();
};

window.onresize = resize;

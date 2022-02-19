import { Settings } from './types';

export const settings: Settings = {
  fps: 60,
  squareSize: 6,
  spacing: 4,
  effect: 'drops',
  speed: 1,
};

declare global {
  interface Window {
    wallpaperPropertyListener: {
      applyGeneralProperties: (properties: Settings) => void;
    };
  }
}

window.wallpaperPropertyListener = {
  applyGeneralProperties(properties: Settings) {
    if (properties.fps) {
      settings.fps = properties.fps;
    }

    if (properties.squareSize) {
      settings.squareSize = properties.squareSize;
    }

    if (properties.spacing) {
      settings.spacing = properties.spacing;
    }

    if (properties.effect) {
      settings.effect = properties.effect;
    }

    if (properties.speed) {
      settings.speed = properties.speed;
    }
  },
};

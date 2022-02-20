import {
  GeneralProperties,
  UserProperties,
  WEGeneralProperties,
  WEUserProperties,
} from './types';

export const generalProperties: GeneralProperties = {
  fps: 60,
};

export const userProperties: UserProperties = {
  squareSize: 6,
  spacing: 4,
  effect: 'blinkySin',
  speed: 1,
};

declare global {
  interface Window {
    wallpaperPropertyListener: {
      applyUserProperties: (properties: WEUserProperties) => void;
      applyGeneralProperties: (properties: WEGeneralProperties) => void;
    };
  }
}

window.wallpaperPropertyListener = {
  applyUserProperties(properties: WEUserProperties) {
    console.log({ user: properties });

    if (properties.squareSize) {
      userProperties.squareSize = properties.squareSize.value;
    }

    if (properties.spacing) {
      userProperties.spacing = properties.spacing.value;
    }

    if (properties.effect) {
      userProperties.effect = properties.effect.value;
    }

    if (properties.speed) {
      userProperties.speed = properties.speed.value;
    }
  },
  applyGeneralProperties(properties: WEGeneralProperties) {
    console.log({ general: properties });

    if (properties.fps) {
      generalProperties.fps = properties.fps;
    }
  },
};

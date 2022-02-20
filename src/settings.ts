import { startEffectUpdate } from './effect-update';
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
  effect: 'drops',
  interval: 50,
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
  applyGeneralProperties(properties: WEGeneralProperties) {
    if (properties.fps) {
      generalProperties.fps = properties.fps;
    }
  },
  applyUserProperties(properties: WEUserProperties) {
    if (properties.squareSize) {
      userProperties.squareSize = properties.squareSize.value;
    }

    if (properties.spacing) {
      userProperties.spacing = properties.spacing.value;
    }

    if (properties.effect) {
      userProperties.effect = properties.effect.value;
    }

    if (properties.interval) {
      userProperties.interval = properties.interval.value;
      startEffectUpdate();
    }
  },
};

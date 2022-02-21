import { isArray } from 'lodash-es';
import { parse } from 'query-string';
import { startEffectUpdate } from './effect-update';
import {
  EffectsNames,
  GeneralProperties,
  SchemeNames,
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
  interval: 200,
  effect: 'drops',
  scheme: 'pro',
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

    if (properties.interval) {
      userProperties.interval = properties.interval.value;
      startEffectUpdate(userProperties);
    }

    if (properties.effect) {
      userProperties.effect = properties.effect.value;
    }

    if (properties.scheme) {
      userProperties.scheme = properties.scheme.value;
    }
  },
};

const qs = parse(location.search);

window.addEventListener('load', () => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  if (qs.fps && !isArray(qs.fps)) {
    generalProperties.fps = parseInt(qs.fps, 10);
  }

  if (qs.squareSize && !isArray(qs.squareSize)) {
    userProperties.squareSize = parseInt(qs.squareSize, 10);
  }

  if (qs.spacing && !isArray(qs.spacing)) {
    userProperties.spacing = parseInt(qs.spacing, 10);
  }

  if (qs.interval && !isArray(qs.interval)) {
    userProperties.interval = parseInt(qs.interval, 10);
  }

  if (qs.effect && !isArray(qs.effect)) {
    userProperties.effect = <EffectsNames>qs.effect;
  }

  if (qs.scheme && !isArray(qs.scheme)) {
    userProperties.scheme = <SchemeNames>qs.scheme;
  }
});

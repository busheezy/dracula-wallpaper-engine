import { WallpaperInfo } from './types';
import { userProperties } from './settings';
import { effects } from './effects';
import debounce from 'lodash-es/debounce';

export function currentInfo(): WallpaperInfo {
  const columns = Math.ceil(
    window.innerWidth / (userProperties.squareSize * userProperties.spacing),
  );

  const rows = Math.ceil(
    window.innerHeight / (userProperties.squareSize * userProperties.spacing),
  );

  return {
    columns,
    rows,
  };
}

export function clearCache() {
  const currentEffect = effects[userProperties.effect];

  if (currentEffect.cache) {
    const cacheKeys = Object.keys(currentEffect.cache);

    cacheKeys.forEach((cacheKey) => {
      delete currentEffect.cache[cacheKey];
    });
  }
}

export const debouncedClearCache = debounce(clearCache, 250);

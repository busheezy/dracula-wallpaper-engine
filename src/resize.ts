import debounce from 'lodash-es/debounce';
import { canvas } from './canvas';
import { effects } from './effects';
import { userProperties } from './settings';

function clearCache() {
  const currentEffect = effects[userProperties.effect];

  if (currentEffect.cache) {
    const cacheKeys = Object.keys(currentEffect.cache);
    cacheKeys.forEach((cacheKey) => {
      delete currentEffect.cache[cacheKey];
    });
  }
}

const debouncedClearCache = debounce(clearCache, 250);

export function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  debouncedClearCache();
}

window.addEventListener('resize', resize);

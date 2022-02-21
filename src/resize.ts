import { canvas } from './canvas';
import { debouncedClearCache } from './lib';

export function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  debouncedClearCache();
}

window.addEventListener('resize', resize);

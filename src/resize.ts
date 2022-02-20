import { canvas } from './canvas';

export function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.onresize = resize;

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

import { RECT_SIZE, SPACING, CURRENT_EFFECT } from './consts';
import { effects } from './effects';

let debug = false;
let debugXCoord = 0;
let debugYCoord = 0;

canvas.addEventListener('mousedown', (e) => {
  debug = true;

  debugXCoord = e.offsetX;
  debugYCoord = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
  if (debug === true) {
    debugXCoord = e.offsetX;
    debugYCoord = e.offsetY;
  }
});

canvas.addEventListener('mouseup', () => {
  if (debug) {
    debug = false;

    debugXCoord = 0;
    debugYCoord = 0;
  }
});

export function drawDebug() {
  if (!debug) {
    return;
  }

  const [debugX, debugY] = [
    Math.round((debugXCoord + 10) / RECT_SIZE / SPACING),
    Math.round((debugYCoord + 10) / RECT_SIZE / SPACING),
  ];

  const {
    debugs = [],
    colorIndex,
    alpha,
  } = effects[CURRENT_EFFECT]!(debugX, debugY);

  debugs.unshift(`Alpha: ${alpha}`);
  debugs.unshift(`Color Index: ${colorIndex}`);
  debugs.unshift(`Box: ${debugX}, ${debugY}`);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
  ctx.fillRect(10, 10, 200, 28 * debugs.length);

  ctx.fillStyle = '#fff';
  ctx.font = '14px serif';

  const stroke = 6;

  ctx.strokeStyle = '#fff';
  ctx.strokeRect(
    RECT_SIZE * (debugX - 1) * SPACING + 10 - stroke / 2,
    RECT_SIZE * (debugY - 1) * SPACING + 10 - stroke / 2,
    RECT_SIZE + stroke,
    RECT_SIZE + stroke,
  );

  for (let i = 0; i < debugs.length; i++) {
    ctx.fillText(debugs[i], 14, 28 * (i + 1));
  }
}

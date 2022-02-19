const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

import { userProperties } from './settings';
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

function squareFromCoord(coord: number) {
  const offsetCoord = coord - 10 - userProperties.spacing;

  const output =
    offsetCoord / userProperties.squareSize / userProperties.spacing;

  const outputInt = Math.ceil(output);

  return outputInt;
}

export function drawDebug() {
  if (!debug) {
    return;
  }

  const [debugX, debugY] = [
    squareFromCoord(debugXCoord),
    squareFromCoord(debugYCoord),
  ];

  const {
    debugs = [],
    colorIndex,
    alpha,
  } = effects[userProperties.effect]!(debugX, debugY);

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
    userProperties.squareSize * (debugX - 1) * userProperties.spacing +
      10 -
      stroke / 2,
    userProperties.squareSize * (debugY - 1) * userProperties.spacing +
      10 -
      stroke / 2,
    userProperties.squareSize + stroke,
    userProperties.squareSize + stroke,
  );

  for (let i = 0; i < debugs.length; i++) {
    ctx.fillText(debugs[i], 14, 28 * (i + 1));
  }
}

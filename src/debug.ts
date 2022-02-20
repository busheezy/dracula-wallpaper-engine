import { parse } from 'query-string';
import { userProperties } from './settings';
import { effects } from './effects';

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

const qs = parse(location.search);

export function drawDebug() {
  if (!qs.x || !qs.y || Array.isArray(qs.x) || Array.isArray(qs.y)) {
    return;
  }

  const [debugX, debugY] = [parseInt(qs.x, 10), parseInt(qs.y, 10)];

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

  const selectedBoxX =
    userProperties.squareSize * debugX * userProperties.spacing +
    10 -
    stroke / 2;

  const selectedBoxY =
    userProperties.squareSize * debugY * userProperties.spacing +
    10 -
    stroke / 2;

  ctx.strokeRect(
    selectedBoxX,
    selectedBoxY,
    userProperties.squareSize + stroke,
    userProperties.squareSize + stroke,
  );

  for (let i = 0; i < debugs.length; i++) {
    ctx.fillText(debugs[i], 14, 28 * (i + 1));
  }
}

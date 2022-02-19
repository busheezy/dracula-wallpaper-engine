import { colors } from './colors';
import { settings } from './settings';
import { drawDebug } from './debug';
import { effects } from './effects';
import { Color } from './types';

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

export default function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const columns = Math.ceil(
    window.innerWidth / (settings.squareSize * settings.spacing),
  );
  const rows = Math.ceil(
    window.innerHeight / (settings.squareSize * settings.spacing),
  );

  for (let columnsI = 0; columnsI < columns; columnsI++) {
    for (let rowsI = 0; rowsI < rows; rowsI++) {
      const { colorIndex, alpha } = effects[settings.effect]!(columnsI, rowsI);

      const color = <Color>colors[colorIndex];

      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;

      ctx.fillRect(
        settings.squareSize * columnsI * settings.spacing + 10,
        settings.squareSize * rowsI * settings.spacing + 10,
        settings.squareSize,
        settings.squareSize,
      );
    }
  }

  drawDebug();
}

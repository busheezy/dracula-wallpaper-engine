import { colors } from './colors';
import { RECT_SIZE, SPACING, CURRENT_EFFECT } from './consts';
import { drawDebug } from './debug';
import { effects } from './effects';
import { Color } from './types';

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

export default function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const columns = Math.ceil(window.innerWidth / (RECT_SIZE * SPACING));
  const rows = Math.ceil(window.innerHeight / (RECT_SIZE * SPACING));

  for (let columnsI = 0; columnsI < columns; columnsI++) {
    for (let rowsI = 0; rowsI < rows; rowsI++) {
      const { colorIndex, alpha } = effects[CURRENT_EFFECT]!(columnsI, rowsI);

      const color = <Color>colors[colorIndex];

      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;

      ctx.fillRect(
        RECT_SIZE * columnsI * SPACING + 10,
        RECT_SIZE * rowsI * SPACING + 10,
        RECT_SIZE,
        RECT_SIZE,
      );
    }
  }

  drawDebug();
}

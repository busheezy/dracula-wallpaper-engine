import { colors } from './colors';
import { userProperties } from './settings';
import { drawDebug } from './debug';
import { effects } from './effects';
import { Color } from './types';

const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

export default function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const columns = Math.ceil(
    window.innerWidth / (userProperties.squareSize * userProperties.spacing),
  );
  const rows = Math.ceil(
    window.innerHeight / (userProperties.squareSize * userProperties.spacing),
  );

  for (let columnsI = 0; columnsI < columns; columnsI++) {
    for (let rowsI = 0; rowsI < rows; rowsI++) {
      const { colorIndex, alpha } = effects[userProperties.effect]!(
        columnsI,
        rowsI,
      );

      const color = <Color>colors[colorIndex];

      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;

      ctx.fillRect(
        userProperties.squareSize * columnsI * userProperties.spacing + 10,
        userProperties.squareSize * rowsI * userProperties.spacing + 10,
        userProperties.squareSize,
        userProperties.squareSize,
      );
    }
  }

  drawDebug();
}

import { colors } from './colors';
import { userProperties } from './settings';
import { drawDebug } from './debug';
import { effects } from './effects';
import { Color, DrawFn, WallpaperInfo } from './types';
import { canvas, ctx } from './canvas';
import { currentInfo } from './lib';

export function drawAll(info: WallpaperInfo, drawSquare: DrawFn) {
  ctx.fillStyle = '#22212c';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let columnsI = 0; columnsI < info.columns; columnsI++) {
    for (let rowsI = 0; rowsI < info.rows; rowsI++) {
      const { colorIndex, alpha } = drawSquare(columnsI, rowsI, info);

      const color = <Color>colors[colorIndex];
      const alphaFixed = alpha.toFixed(2);
      ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alphaFixed})`;

      ctx.fillRect(
        userProperties.squareSize * columnsI * userProperties.spacing + 10,
        userProperties.squareSize * rowsI * userProperties.spacing + 10,
        userProperties.squareSize,
        userProperties.squareSize,
      );
    }
  }
}

export default function tick() {
  const info = currentInfo();
  const currentEffect = effects[userProperties.effect];

  drawAll(info, currentEffect.draw);
  drawDebug();
}

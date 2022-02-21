import { schemes } from './colors';
import { userProperties } from './settings';
import { drawDebug } from './debug';
import { effects } from './effects';
import { DrawFn, WallpaperInfo } from './types';
import { canvas, ctx } from './canvas';
import { currentInfo } from './lib';
import hexRgb, { RgbaObject } from 'hex-rgb';

export function drawAll(info: WallpaperInfo, drawSquare: DrawFn) {
  const { scheme } = userProperties;
  const currentScheme = schemes[scheme];

  const { colors, background } = currentScheme;

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let columnsI = 0; columnsI < info.columns; columnsI++) {
    for (let rowsI = 0; rowsI < info.rows; rowsI++) {
      const { colorIndex, alpha } = drawSquare(columnsI, rowsI, info);

      if (
        colorIndex < 0 ||
        colorIndex > colors.length - 1 ||
        isNaN(colorIndex)
      ) {
        console.error(`Color out of index: ${colorIndex}`);
        continue;
      }

      const color = colors[colorIndex];
      const alphaFixed = alpha.toFixed(2);

      const colorObject: RgbaObject = hexRgb(color);

      ctx.fillStyle = `rgba(${colorObject.red}, ${colorObject.green}, ${colorObject.blue}, ${alphaFixed})`;

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

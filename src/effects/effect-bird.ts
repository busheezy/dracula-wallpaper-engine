import { currentInfo } from '../lib';
import { EffectExport, Square } from '../types';

let numInt = 1000;

function draw(x: number, y: number): Square {
  const { rows, columns } = currentInfo();
  const seed = columns / (x + 1) + (y + 1) * Math.sin(numInt * 0.001);

  const roundedSeed = Math.round(seed);
  const absSeed = Math.abs(roundedSeed);
  const colorIndex = absSeed % 8;

  const alpha = 1 - y / rows;

  return {
    colorIndex: colorIndex,
    alpha,
  };
}

const effect: EffectExport = {
  draw,
  effect: () => {
    numInt++;
  },
};

export default effect;

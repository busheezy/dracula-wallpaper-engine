import { EffectExport, Square } from '../types';

let numInt = 1;

function sine(x: number, y: number): Square {
  const seed = numInt * Math.sin((x + 1) * (y + 1));

  const roundedSeed = Math.round(seed);
  const absSeed = Math.abs(roundedSeed);
  const colorIndex = absSeed % 8;

  const alpha = (absSeed % 10) * 0.1;

  return {
    colorIndex,
    alpha,
  };
}

const effect: EffectExport = {
  draw: sine,
  effect: () => {
    numInt++;
  },
};

export default effect;

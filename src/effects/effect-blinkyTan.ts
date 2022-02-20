import { userProperties } from '../settings';

function blinkyTan(x: number, y: number) {
  const now = (performance.now() / 1000) * userProperties.speed;
  const seed = now * Math.tan((x + 1) * (y + 1));

  const roundedSeed = Math.round(seed);
  const absSeed = Math.abs(roundedSeed);

  const colorIndex = absSeed % 8;
  const alpha = (absSeed % 10) * 0.1;

  return {
    colorIndex,
    alpha,
  };
}

export default {
  draw: blinkyTan,
};

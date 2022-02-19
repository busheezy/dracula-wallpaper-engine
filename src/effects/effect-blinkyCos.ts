import { EFFECT_SPEED } from '../consts';

export default function blinkyCos(x: number, y: number) {
  const now = (performance.now() / 1000) * EFFECT_SPEED;
  const seed = now * Math.cos((x + 1) * (y + 1));

  const roundedSeed = Math.round(seed);
  const absSeed = Math.abs(roundedSeed);

  const colorIndex = absSeed % 8;
  const alpha = (absSeed % 10) * 0.1;

  return {
    colorIndex,
    alpha,
  };
}

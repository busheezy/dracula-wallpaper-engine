import { settings } from '../settings';

export default function blinkyTan(x: number, y: number) {
  const now = (performance.now() / 1000) * settings.speed;
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

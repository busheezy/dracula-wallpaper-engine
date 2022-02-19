import random from 'lodash-es/random';
import { SquareProperties } from '../types';

const cache: Record<string, SquareProperties> = {};

export default function drops(x: number, y: number): SquareProperties {
  const key = `${x}.${y}`;

  if (cache[key]) {
    if (random(1, 5000) === 1) {
      cache[key] = {
        colorIndex: random(0, 8),
        alpha: random(0, 1, true),
      };
    }

    if (cache[key].colorIndex < 2 && cache[key].alpha >= 0.01) {
      cache[key].alpha -= cache[key].alpha * 0.0001;
    } else if (cache[key].alpha >= 0.01) {
      cache[key].alpha -= cache[key].alpha * 0.01;
    }

    return cache[key];
  }

  cache[key] = {
    colorIndex: 0,
    alpha: 0,
  };

  return cache[key];
}

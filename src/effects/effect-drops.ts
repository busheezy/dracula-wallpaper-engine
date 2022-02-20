import random from 'lodash-es/random';
import { currentInfo } from '../lib';
import { Square } from '../types';

const cache: Record<string, Square> = {};

function addSquare() {
  const { columns, rows } = currentInfo();

  cache[`${random(0, columns)}.${random(0, rows)}`] = {
    colorIndex: random(0, 8),
    alpha: random(0, 1, true),
  };
}

function drops(x: number, y: number): Square {
  const key = `${x}.${y}`;

  if (cache[key]) {
    if (cache[key].colorIndex < 2 && cache[key].alpha >= 0.01) {
      cache[key].alpha -= cache[key].alpha * 0.0001;
    } else if (cache[key].alpha >= 0.01) {
      cache[key].alpha -= cache[key].alpha * 0.01;
    }
  } else {
    cache[key] = {
      colorIndex: 0,
      alpha: 0,
    };
  }

  return cache[key];
}

export default {
  draw: drops,
  effect: addSquare,
};

import { Effects } from '../types';

import blinky from './effect-blinky';
import drops from './effect-drops';
import test from './effect-test';
import bird from './effect-bird';
import boring from './effect-boring';

export const effectNames = [
  'blinky',
  'drops',
  'test',
  'bird',
  'boring',
] as const;

export const effects: Effects = {
  blinky,
  drops,
  test,
  bird,
  boring,
};

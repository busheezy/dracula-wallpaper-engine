import { Effects } from '../types';

import blinkySin from './effect-blinkySin';
import blinkyCos from './effect-blinkyCos';
import blinkyTan from './effect-blinkyTan';
import drops from './effect-drops';

export const effectNames = [
  'blinkySin',
  'blinkyTan',
  'blinkyCos',
  'drops',
] as const;

export const effects: Effects = {
  blinkySin,
  blinkyCos,
  blinkyTan,
  drops,
};

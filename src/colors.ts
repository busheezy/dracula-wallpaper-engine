import { ColorSchemes } from './types';

export const schemeNames = [
  'pro',
  'blade',
  'buffy',
  'lincoln',
  'morbius',
  'vanHelsing',
] as const;

export const schemes: ColorSchemes = {
  pro: {
    background: '#22212C',
    colors: [
      '#454158',
      '#7970A9',
      '#9580FF',
      '#80FFEA',
      '#8AFF80',
      '#FFFF80',
      '#FFCA80',
      '#FF9580',
      '#FF80BF',
    ],
  },
  blade: {
    background: '#212C2A',
    colors: [
      '#415854',
      '#70A99F',
      '#9580FF',
      '#80FFEA',
      '#8AFF80',
      '#FFFF80',
      '#FFCA80',
      '#FF9580',
      '#FF80BF',
    ],
  },
  buffy: {
    background: '#2A212C',
    colors: [
      '#544158',
      '#9F70A9',
      '#9580FF',
      '#80FFEA',
      '#8AFF80',
      '#FFFF80',
      '#FFCA80',
      '#FF9580',
      '#FF80BF',
    ],
  },
  lincoln: {
    background: '#2C2A21',
    colors: [
      '#585441',
      '#A99F70',
      '#9580FF',
      '#80FFEA',
      '#8AFF80',
      '#FFFF80',
      '#FFCA80',
      '#FF9580',
      '#FF80BF',
    ],
  },
  morbius: {
    background: '#2C2122',
    colors: [
      '#584145',
      '#A97079',
      '#9580FF',
      '#80FFEA',
      '#8AFF80',
      '#FFFF80',
      '#FFCA80',
      '#FF9580',
      '#FF80BF',
    ],
  },
  vanHelsing: {
    background: '#0B0D0F',
    colors: [
      '#414D58',
      '#708CA9',
      '#9580FF',
      '#80FFEA',
      '#8AFF80',
      '#FFFF80',
      '#FFCA80',
      '#FF9580',
      '#FF80BF',
    ],
  },
};

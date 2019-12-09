import photo1 from '../images/photo1.png';
import photo2 from '../images/photo2.png';
import photo3 from '../images/photo3.png';
import photo4 from '../images/photo4.png';
import photo5 from '../images/photo5.png';
import photo6 from '../images/photo6.png';
import photo7 from '../images/photo7.png';
import photo8 from '../images/photo8.png';

export const PHOTOS_URLS = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];


export const FILTERS_NAMES = [
  'original',
  'contrast',
  'brightness',
  'saturation',
  'vignette',
  'lighten',
  'gray',
  'sepia',
  'blue',
  'red',
  'green',
  'purple',
];

export const UNCONTROLLED_FILTERS_NAMES = ['gray', 'sepia', 'original'];

export const FILTERS_SETTINGS = {
  original: {},
  contrast: { contrast: 0.3 },
  brightness: { brightness: 0.3 },
  saturation: { saturation: 0.4 },
  vignette: { vignette: 1 },
  lighten: { lighten: 0.7 },
  gray: { gray: true },
  sepia: { sepia: true },
  blue: {
    screen: {
      r: 0,
      g: 255,
      b: 255,
      a: 0.2,
    },
  },
  red: {
    screen: {
      r: 255,
      g: 0,
      b: 0,
      a: 0.2,
    },
  },
  green: {
    screen: {
      r: 0,
      g: 255,
      b: 0,
      a: 0.2,
    },
  },
  purple: {
    screen: {
      r: 255,
      g: 0,
      b: 255,
      a: 0.2,
    },
  },
};

export const INITIAL_INTENSITY = 0.25;

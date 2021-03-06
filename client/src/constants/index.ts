import photo1 from '../images/photo1.png';
import photo2 from '../images/photo2.png';
import photo3 from '../images/photo3.png';
import photo4 from '../images/photo4.png';
import photo5 from '../images/photo5.png';
import photo6 from '../images/photo6.png';
import photo7 from '../images/photo7.png';
import photo8 from '../images/photo8.png';

export const PHOTOS_URLS = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

export const EFFECTS_NAMES: string[] = [
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

interface EFFECTS_DESCRIPTIONS_TYPE {
  [effect: string]: string,
}

export const EFFECTS_DESCRIPTIONS: EFFECTS_DESCRIPTIONS_TYPE = {
  original: 'Оригинальная фотография без изменений.',
  contrast: 'Эффект делает фотографию более контрастной.',
  brightness: 'Данный эффект повышает яркость фотографии.',
  saturation: 'Данный эффект изменяет насыщенность фотографии.',
  vignette: 'Эффект добавляет затемнение по краям фотографии.',
  lighten: 'Эффект добавляет яркости в небольшом радиусе по центру фотографии.',
  gray: 'Этот фильтр делает фотографию черно-белой.',
  sepia: 'Один из самых популярных фильтров, имитирующий старину, винтаж, стиль ретро.',
  blue: 'Эффект придаёт фотографии голубоватый оттенок.',
  red: 'Эффект придаёт фотографии красноватый оттенок.',
  green: 'Эффект придаёт фотографии зеленоватый оттенок.',
  purple: 'Эффект фильтр придаёт фотографии фиолетовый оттенок.',
};

export const UNCONTROLLED_EFFECTS_NAMES: string[] = ['gray', 'sepia', 'original'];

export const EFFECTS_SETTINGS = {
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

export const INITIAL_INTENSITY: number = 0.25;

export const SET_PHOTO_EFFECT: 'SET_PHOTO_EFFECT' = 'SET_PHOTO_EFFECT';
export const SET_INTENSITY: 'SET_INTENSITY' = 'SET_INTENSITY';

export interface SetPhotoEffectType {
  type: 'SET_PHOTO_EFFECT',
  effect: string,
}

export interface SetIntensityType {
  type: 'SET_INTENSITY',
  intensity: number | number[],
}

export const setPhotoEffect = (effect: string): SetPhotoEffectType => ({
  type: SET_PHOTO_EFFECT,
  effect,
});

export const setIntensity = (intensity: number | number[]): SetIntensityType => ({
  type: SET_INTENSITY,
  intensity,
});

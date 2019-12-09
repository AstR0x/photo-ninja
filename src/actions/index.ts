export const SET_PHOTO_FILTER: 'SET_PHOTO_FILTER' = 'SET_PHOTO_FILTER';
export const SET_INTENSITY: 'SET_INTENSITY' = 'SET_INTENSITY';

export interface SetPhotoFilterType {
  type: 'SET_PHOTO_FILTER',
  filter: string,
}

export interface SetIntensityType {
  type: 'SET_INTENSITY',
  intensity: number | number[],
}

export const setPhotoFilter = (filter: string): SetPhotoFilterType => ({
  type: SET_PHOTO_FILTER,
  filter,
});

export const setIntensity = (intensity: number | number[]): SetIntensityType => ({
  type: SET_INTENSITY,
  intensity,
});

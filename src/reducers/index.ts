import { SET_PHOTO_FILTER, SET_INTENSITY, SetPhotoFilterType, SetIntensityType } from '../actions';

export default (state: any = { filter: 'origin' }, action: SetPhotoFilterType | SetIntensityType) => {
  switch (action.type) {
    case SET_PHOTO_FILTER:
      return { ...state, filter: action.filter };
    case SET_INTENSITY:
      return { ...state, value: action.intensity };
    default:
      return state;
  }
};

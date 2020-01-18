import {
  SET_PHOTO_EFFECT,
  SET_INTENSITY,
  SetPhotoEffectType,
  SetIntensityType,
} from '../actions';

export default (state: any = { effect: 'original' }, action: SetPhotoEffectType | SetIntensityType) => {
  switch (action.type) {
    case SET_PHOTO_EFFECT:
      return { ...state, effect: action.effect };
    case SET_INTENSITY:
      return { ...state, value: action.intensity };
    default:
      return state;
  }
};

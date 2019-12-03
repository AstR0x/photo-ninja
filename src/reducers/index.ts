import { SET_PHOTO_FILTER, ActionType } from '../actions';

export default (state: any = {}, action: ActionType) => {
  switch (action.type) {
    case SET_PHOTO_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

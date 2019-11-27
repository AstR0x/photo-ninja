import {SET_PHOTO_FILTER} from "../actions";

import {ActionType} from "../actions";

// interface ReducerType {
//     state: any,
//     action: ActionType,
// }

export const reducer = (state: any = {}, action: ActionType) => {
    switch (action.type) {
        case SET_PHOTO_FILTER:
            return {...state, filter: action.filter};
        default:
            return state;
    }
}
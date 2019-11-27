export const SET_PHOTO_FILTER: 'SET_PHOTO_FILTER' = 'SET_PHOTO_FILTER';

export interface ActionType {
    type: 'SET_PHOTO_FILTER',
    filter: string,
}

export const setPhotoFilter = (filter: string): ActionType => {
    return {
        type: SET_PHOTO_FILTER,
        filter,
    }
}
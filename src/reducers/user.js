import { SET_USER } from '../constants/actionTypes';
export const user = (state={}, {type, payload}) => {
    switch(type) {
        case SET_USER:
            return {
                   ...state,
                   ...payload
                }
        default:
            return state;
    }
}


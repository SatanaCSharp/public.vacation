import { USER_PENDING, USER_FULFILLED, USER_REJECTED } from "../constants/actionTypes";

export const  userPending = (payload) =>({
    type: USER_PENDING,
    payload
});
export const  userFulfilled = (payload) =>({
    type: USER_FULFILLED,
    payload
});
export const  userRejected = (payload) =>({
    type: USER_REJECTED,
    payload
});


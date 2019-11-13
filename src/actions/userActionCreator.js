import { SET_USER } from "../constants/actionTypes";
import { getUserRequest } from "../services/requestService";
export const  setUser = (userId, token) =>({
    type: SET_USER,
    payload: getUserRequest(userId, token)
});
import { ADD_VACATION } from "../constants/actionTypes";

export const  addVacation = (userId, startDate, endDate, description) =>({
    type: ADD_VACATION,
    userId,
    startDate,
    endDate,
    description
});
import {
    VACATIONS_PENDING,
    VACATIONS_FULFILLED,
    VACATIONS_REJECTED } from "../constants/actionTypes";

const vacationsPending = (payload) => ({
    type: VACATIONS_PENDING,
    payload
});
const vacationsFulfilled = (payload) => ({
    type: VACATIONS_FULFILLED,
    payload
});
const vacationsRejected = (payload) => ({
    type: VACATIONS_REJECTED,
    payload
});

export {
    vacationsPending,
    vacationsFulfilled,
    vacationsRejected
}
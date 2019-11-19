import { takeEvery, call, put } from "redux-saga/effects";
import { USER_PENDING } from "../constants/actionTypes";
import { getUserRequest } from "../services/requestService";
import { userRejected, userFulfilled } from "../actions/userActionCreator";
function* getUser(action) {
    try{
        const { payload :{userId, token}} = action;
        const user = yield call(async ()=> await getUserRequest(userId, token));
        yield put(userFulfilled(user))
    } catch(err) {
        yield put(userRejected());
    }
}

export default function* userRootSaga() {
    yield takeEvery(USER_PENDING, getUser);
}
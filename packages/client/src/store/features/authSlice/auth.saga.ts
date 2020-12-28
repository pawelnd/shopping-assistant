import { takeEvery, put, call } from 'redux-saga/effects';
import { getLoggedUser } from './auth.api';
import { getLoggedUserStart, getLoggedUserFailure, getLoggedUserSuccess } from './auth.slice';

function* getLoggedUserAsync() {
  try {
    const user = yield call(getLoggedUser);
    yield put(getLoggedUserSuccess(user));
  } catch (err) {
    yield put(getLoggedUserFailure());
  }
}

export function* authSaga() {
  yield takeEvery(getLoggedUserStart, getLoggedUserAsync);
}

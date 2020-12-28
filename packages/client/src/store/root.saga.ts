import { all } from 'redux-saga/effects';
import { authSaga } from './features/authSlice/auth.saga';

export default function* rootSaga() {
  yield all([authSaga()]);
}

/** @format */

import { all } from 'redux-saga/effects';
import { AuthSaga } from './AuthSagas';
import { HomeSaga } from './HomeSaga';

export default function* rootSaga() {
  yield all([...AuthSaga, ...HomeSaga]);
}

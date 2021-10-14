/** @format */

import { all } from 'redux-saga/effects';
import { AuthSaga } from './AuthSagas';
import { PostSaga } from './PostSaga';
import { UserSaga } from './UserSaga';

export default function* rootSaga() {
  yield all([...AuthSaga, ...PostSaga, ...UserSaga]);
}

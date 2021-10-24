/** @format */

import { all } from 'redux-saga/effects';
import { AuthSaga } from './AuthSagas';
import { CategorySaga } from './CategorySaga';
import { PostSaga } from './PostSaga';
import { ProductSaga } from './ProductSaga';
import { UserSaga } from './UserSaga';

export default function* rootSaga() {
  yield all([
    ...AuthSaga,
    ...PostSaga,
    ...UserSaga,
    ...CategorySaga,
    ...ProductSaga,
  ]);
}

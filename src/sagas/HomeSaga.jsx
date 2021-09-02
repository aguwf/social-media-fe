/** @format */

import * as constants from '../constants';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as homeAction from '../actions/HomeAction';
import * as API from '../fetchAPI/AllAPI';

function* searchHandle(action) {
  try {
    const { textSearch } = action.payload;
    const objFetch = {
      url: `/api/search?q=${textSearch}&_limit=${constants.LIMIT}`,
    };
    const response = yield API.getData(objFetch);

    yield put(
      homeAction.searchSuccess({ result: response.listUser, textSearch }),
    );
  } catch (error) {
    yield put(homeAction.searchFailure(error));
  }
}

function* getSingleUserHandle(action) {
  try {
    const { _id } = action.payload;
    const objFetch = {
      url: `/api/user/${_id}`,
    };
    const response = yield API.getData(objFetch);

    yield put(
      homeAction.getSingleUserSuccess({ userDetail: response.userDetail }),
    );
  } catch (error) {
    yield put(homeAction.getSingleUserFailure(error));
  }
}

export const HomeSaga = [
  takeLatest(constants.SEARCH_REQUEST, searchHandle),
  takeEvery(constants.GET_SINGLE_USER_REQUEST, getSingleUserHandle),
];

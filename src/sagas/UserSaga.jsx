/** @format */

import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import * as constants from '../constants';
import * as userAction from '../actions/UserAction';
import * as API from '../fetchAPI/AllAPI';

function* searchHandle(action) {
  try {
    const { textSearch } = action.payload;
    const objFetch = {
      url: `/api/search?q=${textSearch}&_limit=${constants.LIMIT}`,
    };
    const response = yield API.getData(objFetch);

    yield put(
      userAction.searchSuccess({ result: response.listUser, textSearch }),
    );
  } catch (error) {
    yield put(userAction.searchFailure(error));
  }
}

function* handleUpdateProfile(action) {
  try {
    let objFetch = {
      url: '/api/users/update',
      data: action.payload.user,
    };
    yield API.updateData(objFetch);
    yield put(userAction.updateProfile.success());
    if (!action.payload.upload) {
      yield put(
        userAction.getSingleUser.request({ _id: action.payload.user._id }),
      );
    }
  } catch (error) {
    yield put(userAction.updateProfile.failure(error));
  }
}

function* handleUploadImage(action) {
  try {
    const formUpload = new FormData();
    action.payload.avatar && formUpload.append('avatar', action.payload.avatar);
    action.payload.cover && formUpload.append('cover', action.payload.cover);

    const objFetch = {
      url: '/api/users/upload',
      data: formUpload,
    };
    yield API.addData(objFetch);
    yield put(userAction.uploadImage.success());
    yield put(
      userAction.getSingleUser.request({ _id: action.payload.user._id }),
    );
  } catch (error) {
    yield put(userAction.uploadImage.failure(error));
  }
}

function* getSingleUserHandle(action) {
  try {
    const { _id } = action.payload;
    const objFetch = {
      url: `/api/users/${_id}`,
    };
    const response = yield API.getData(objFetch);

    yield put(
      userAction.getSingleUser.success({ userDetail: response.userDetail }),
    );
  } catch (error) {
    yield put(userAction.getSingleUser.failure(error));
  }
}

export const UserSaga = [
  takeLatest(constants.SEARCH_REQUEST, searchHandle),
  takeEvery(constants.UPDATE_PROFILE.REQUEST, handleUpdateProfile),
  takeEvery(constants.GET_SINGLE_USER.REQUEST, getSingleUserHandle),
  takeEvery(constants.UPLOAD_IMAGE.REQUEST, handleUploadImage),
];

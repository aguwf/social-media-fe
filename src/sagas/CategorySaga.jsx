/** @format */

import * as constants from '../constants';
import { takeEvery, put } from 'redux-saga/effects';
import * as categoryAction from '../actions/CategoryAction';
import * as API from '../fetchAPI/AllAPI';

function* handleGetCategory(action) {
  try {
    const objFetch = {
      //   url: `/api/categories?_page=${action.payload.page}&_limit=${constants.LIMIT}`,
      url: `/api/categories`,
    };
    const response = yield API.getData(objFetch);
    console.log(
      '🚀 ~ file: CategorySaga.jsx ~ line 15 ~ function*handleGetCategory ~ response',
      response,
    );

    yield put(
      categoryAction.getCategory.success({
        listCategory: response.listCategory,
      }),
    );
  } catch (error) {
    yield put(categoryAction.getCategory.failure(error));
  }
}

function* handleAddCategory({ payload }) {
  try {
    let categoryResponse, objFetch;

    if (payload.category) {
      objFetch = {
        url: `/api/categories`,
        data: payload.category,
      };
      categoryResponse = yield API.addData(objFetch);
    }
    console.log(
      '🚀 ~ file: CategorySaga.jsx ~ line 40 ~ function*handleAddCategory ~ categoryResponse',
      categoryResponse,
    );

    if (payload.images) {
      const formUpload = new FormData();
      formUpload.append('overview_image', payload.images);
      objFetch = {
        url: `/api/categories/images/${categoryResponse?._id}`,
        data: formUpload,
      };
      const imageResponse = yield API.addData(objFetch);

      yield put(categoryAction.addCategory.success(imageResponse.data));
    } else {
      yield put(categoryAction.addCategory.success(categoryResponse.data));
    }
  } catch (error) {
    yield put(categoryAction.addCategory.failure(error));
  }
}

function* handleUpdateCategory({ payload }) {
  try {
    let postResponse, objFetch;
    const { id } = payload;

    if (payload.category) {
      objFetch = {
        url: `/api/categories/${id}`,
        data: payload.category,
      };
      postResponse = yield API.addData(objFetch);
    }

    if (payload.images) {
      const formUpload = new FormData();
      formUpload.append('overview_image', payload.images);
      objFetch = {
        url: `/api/categories/images/${id}`,
        data: formUpload,
      };
      const imageResponse = yield API.addData(objFetch);

      yield put(categoryAction.updateCategory.success(imageResponse.data));
    } else {
      yield put(categoryAction.updateCategory.success(postResponse.data));
    }
  } catch (error) {
    yield put(categoryAction.updateCategory.failure(error));
  }
}

function* handleDeleteCategory(action) {
  try {
    const { id } = action.payload;
    const objFetch = {
      url: `/api/categories/delete/${id}`,
    };
    const response = yield API.patchData(objFetch);

    yield put(categoryAction.deleteCategory.success(response.data));
  } catch (error) {
    yield put(categoryAction.deleteCategory.failure(error));
  }
}

export const CategorySaga = [
  takeEvery(constants.GET_CATEGORY.REQUEST, handleGetCategory),
  takeEvery(constants.ADD_CATEGORY.REQUEST, handleAddCategory),
  takeEvery(constants.UPDATE_CATEGORY.REQUEST, handleUpdateCategory),
  takeEvery(constants.DELETE_CATEGORY.REQUEST, handleDeleteCategory),
];

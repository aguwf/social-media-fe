/** @format */

import * as constants from '../constants';
import { takeEvery, put } from 'redux-saga/effects';
import * as productAction from '../actions/ProductAction';
import * as API from '../fetchAPI/AllAPI';

function* handleGetProduct(action) {
  try {
    const objFetch = {
      url: `/api/products?_page=${action?.payload?.page}&_limit=${constants.LIMIT}`,
    };
    const response = yield API.getData(objFetch);
    console.log(
      '🚀 ~ file: ProductSaga.jsx ~ line 15 ~ function*handleGetProduct ~ response',
      response,
    );

    yield put(
      productAction.getProduct.success({
        listProduct: response.listProduct,
      }),
    );
  } catch (error) {
    yield put(productAction.getProduct.failure(error));
  }
}

function* handleAddProduct({ payload }) {
  try {
    let postResponse, objFetch;

    if (payload.product) {
      objFetch = {
        url: `/api/products`,
        data: payload.product,
      };
      postResponse = yield API.addData(objFetch);
    }

    if (payload.image) {
      objFetch = {
        url: `/api/products/images/${postResponse._id}`,
        data: payload.image,
      };
      const imageResponse = yield API.addData(objFetch);

      yield put(productAction.addProduct.success(imageResponse.data));
    } else {
      yield put(productAction.addProduct.success(postResponse.data));
    }
  } catch (error) {
    yield put(productAction.addProduct.failure(error));
  }
}

function* handleUpdateProduct({ payload }) {
  try {
    let postResponse, objFetch;
    const { id } = payload;

    if (payload.product) {
      objFetch = {
        url: `/api/products/${id}`,
        data: payload.product,
      };
      postResponse = yield API.addData(objFetch);
    }

    if (payload.image) {
      objFetch = {
        url: `/api/products/images/${id}`,
        data: payload.image,
      };
      const imageResponse = yield API.addData(objFetch);

      yield put(productAction.updateProduct.success(imageResponse.data));
    } else {
      yield put(productAction.updateProduct.success(postResponse.data));
    }
  } catch (error) {
    yield put(productAction.updateProduct.failure(error));
  }
}

function* handleDeleteProduct(action) {
  try {
    const { id } = action.payload;
    const objFetch = {
      url: `/api/products/delete/${id}`,
    };
    const response = yield API.patchData(objFetch);

    yield put(productAction.deleteProduct.success(response.data));
  } catch (error) {
    yield put(productAction.deleteProduct.failure(error));
  }
}

export const ProductSaga = [
  takeEvery(constants.GET_PRODUCT.REQUEST, handleGetProduct),
  takeEvery(constants.ADD_PRODUCT.REQUEST, handleAddProduct),
  takeEvery(constants.UPDATE_PRODUCT.REQUEST, handleUpdateProduct),
  takeEvery(constants.DELETE_PRODUCT.REQUEST, handleDeleteProduct),
];

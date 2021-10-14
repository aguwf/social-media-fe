/** @format */

import { takeEvery, put } from 'redux-saga/effects';
import * as constants from '../constants';
import * as authAction from '../actions/AuthAction.jsx';
import * as API from '../fetchAPI/AllAPI';

function* handleSignin(action) {
  try {
    const objFetch = {
      url: `/api/accounts/login`,
      data: action.payload.User,
    };
    const response = yield API.signin(objFetch);
    yield put(authAction.signinSuccess(response.data));
  } catch (error) {
    yield put(authAction.signinFailure(error.response.data.error));
  }
}

function* handleSignup(action) {
  try {
    const objFetch = {
      url: `/api/accounts/signup`,
      data: action.payload.User,
    };
    const response = yield API.signup(objFetch);
    yield put(authAction.signupSuccess(response.data));
    action.payload.history.push('/activation');
  } catch (error) {
    yield put(authAction.signupFailure(error.response.data.error));
  }
}

function* handleLogout(action) {
  try {
    const objFetch = {
      url: `/api/accounts/logout`,
    };
    const response = yield API.logout(objFetch);
    yield put(authAction.logoutSuccess(response.data));
  } catch (error) {
    yield put(authAction.logoutFailure(error));
  }
}

function* handleGetCsrfToken(action) {
  try {
    const objFetch = {
      url: `/api/csrf-token`,
    };
    yield API.getCsrfToken(objFetch);
  } catch (error) {
    console.log(error);
  }
}

function* handleActiveAccount(action) {
  try {
    const objFetch = {
      url: `/api/accounts/activation`,
      data: {
        activation_token: action.payload,
      },
    };
    const response = yield API.addData(objFetch);
    yield put(authAction.activeAccountSuccess(response.data));
  } catch (error) {
    yield put(authAction.activeAccountFailure(error));
  }
}

export const AuthSaga = [
  takeEvery(constants.SIGNIN_REQUEST, handleSignin),
  takeEvery(constants.SIGNUP_REQUEST, handleSignup),
  takeEvery(constants.GET_CSRF_TOKEN, handleGetCsrfToken),
  takeEvery(constants.LOGOUT_REQUEST, handleLogout),
  takeEvery(constants.ACTIVE_ACCOUNT_REQUEST, handleActiveAccount),
];

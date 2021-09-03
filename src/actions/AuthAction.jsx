/** @format */

import * as constants from '../constants';
import { createAction } from 'redux-actions';

const auth = createAction(constants.AUTH);

const clearMsg = createAction(constants.CLEAR_MSG);

const getCsrfToken = createAction(constants.GET_CSRF_TOKEN);

const signupRequest = createAction(constants.SIGNUP_REQUEST);
const signupSuccess = createAction(constants.SIGNUP_SUCCESS);
const signupFailure = createAction(constants.SIGNUP_FAILURE);

const logoutRequest = createAction(constants.LOGOUT_REQUEST);
const logoutSuccess = createAction(constants.LOGOUT_SUCCESS);
const logoutFailure = createAction(constants.LOGOUT_FAILURE);

const signinRequest = createAction(constants.SIGNIN_REQUEST);
const signinSuccess = createAction(constants.SIGNIN_SUCCESS);
const signinFailure = createAction(constants.SIGNIN_FAILURE);

const activeAccountRequest = createAction(constants.ACTIVE_ACCOUNT_REQUEST);
const activeAccountSuccess = createAction(constants.ACTIVE_ACCOUNT_SUCCESS);
const activeAccountFailure = createAction(constants.ACTIVE_ACCOUNT_FAILURE);

export {
  auth,
  clearMsg,
  signinRequest,
  signinSuccess,
  signinFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  getCsrfToken,
  activeAccountRequest,
  activeAccountSuccess,
  activeAccountFailure
};

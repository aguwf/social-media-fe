/** @format */

import * as constants from '../constants';

const initialState = {
  isFetching: null,
  ssMsg: '',
  authData: null,
  error: null,
  errMsg: '',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CLEAR_MSG:
      return {
        ...state,
        ssMsg: '',
        errMsg: '',
      };

    case constants.SIGNIN_REQUEST:
    case constants.LOGOUT_REQUEST:
    case constants.SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case constants.SIGNIN_FAILURE:
    case constants.LOGOUT_FAILURE:
    case constants.SIGNUP_FAILURE:
      return {
        ...state,
        error: true,
        errMsg: action.payload,
        isFetching: false,
      };

    case constants.SIGNIN_SUCCESS:
    case constants.SIGNUP_SUCCESS:
      localStorage.setItem(
        'profile',
        JSON.stringify({
          user: action.payload.user,
          username: action.payload.username,
        }),
      );
      return {
        ...state,
        isFetching: false,
        ssMsg: action.payload.msg,
        authData: action.payload,
        error: null,
        errMsg: '',
      };

    case constants.LOGOUT_SUCCESS:
      localStorage.clear();
      return {
        ...state,
        isFetching: false,
        ssMsg: action.payload.msg,
        error: null,
        errMsg: '',
      };

    default:
      return state;
  }
};

export default AuthReducer;

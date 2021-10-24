/** @format */

const createActionTypeSet = (action) => {
  return {
    REQUEST: action + '_REQUEST',
    SUCCESS: action + '_SUCCESS',
    FAILURE: action + '_FAILURE',
  };
};

export const UPDATE_PROFILE = createActionTypeSet('UPDATE_PROFILE');
export const GET_SINGLE_USER = createActionTypeSet('GET_SINGLE_USER');
export const UPLOAD_IMAGE = createActionTypeSet('UPLOAD_IMAGE');
export const LIKE_POST = createActionTypeSet('LIKE_POST');
export const COMMENT_POST = createActionTypeSet('COMMENT_POST');
export const GET_ALL_POST = createActionTypeSet('GET_ALL_POST');
export const ADD_POST = createActionTypeSet('ADD_POST');
export const DELETE_POST = createActionTypeSet('DELETE_POST');

//Category
export const GET_CATEGORY = createActionTypeSet('GET_CATEGORY');
export const ADD_CATEGORY = createActionTypeSet('ADD_CATEGORY');
export const UPDATE_CATEGORY = createActionTypeSet('UPDATE_CATEGORY');
export const DELETE_CATEGORY = createActionTypeSet('DELETE_CATEGORY');

//Category
export const GET_PRODUCT = createActionTypeSet('GET_PRODUCT');
export const ADD_PRODUCT = createActionTypeSet('ADD_PRODUCT');
export const UPDATE_PRODUCT = createActionTypeSet('UPDATE_PRODUCT');
export const DELETE_PRODUCT = createActionTypeSet('DELETE_PRODUCT');

export const DOMAIN = 'http://192.168.0.103:3333';
// export const DOMAIN = 'https://nodejs-memory-mern.herokuapp.com'

export const LIMIT = 3;

export const HTTP_HEADER_JSON = { 'Content-Type': 'application/json' };

export const AUTH = 'AUTH';
export const CLEAR_MSG = 'CLEAR_MSG';
export const GET_CSRF_TOKEN = 'GET_CSRF_TOKEN';

export const HTTP_READ = 'GET';
export const HTTP_POST = 'POST';
export const HTTP_PUT = 'PUT';
export const HTTP_DELETE = 'DELETE';

export const GET_POST_REQUEST = 'GET_POST_REQUEST';
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
export const GET_POST_FAILURE = 'GET_POST_FAILURE';

export const GET_DELETED_POST_REQUEST = 'GET_DELETED_POST_REQUEST';
export const GET_DELETED_POST_SUCCESS = 'GET_DELETED_POST_SUCCESS';
export const GET_DELETED_POST_FAILURE = 'GET_DELETED_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const RESTORE_POST_REQUEST = 'RESTORE_POST_REQUEST';
export const RESTORE_POST_SUCCESS = 'RESTORE_POST_SUCCESS';
export const RESTORE_POST_FAILURE = 'RESTORE_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const GET_SINGLE_USER_REQUEST = 'GET_SINGLE_USER_REQUEST';
export const GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS';
export const GET_SINGLE_USER_FAILURE = 'GET_SINGLE_USER_FAILURE';

export const GET_RECOMMEND_POST_REQUEST = 'GET_RECOMMEND_POST_REQUEST';
export const GET_RECOMMEND_POST_SUCCESS = 'GET_RECOMMEND_POST_SUCCESS';
export const GET_RECOMMEND_POST_FAILURE = 'GET_RECOMMEND_POST_FAILURE';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

export const ACTIVE_ACCOUNT_REQUEST = 'ACTIVE_ACCOUNT_REQUEST';
export const ACTIVE_ACCOUNT_SUCCESS = 'ACTIVE_ACCOUNT_SUCCESS';
export const ACTIVE_ACCOUNT_FAILURE = 'ACTIVE_ACCOUNT_FAILURE';

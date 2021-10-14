/** @format */

import * as constants from '../constants';

const initialState = {
  isFetching: null,
  ssMsg: '',
  error: null,
  errMsg: '',
  userDetail: {},
  listUser: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_PROFILE.REQUEST:
    case constants.SEARCH_REQUEST:
    case constants.GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case constants.GET_SINGLE_USER_SUCCESS:
    case constants.SIGNIN_SUCCESS:
      localStorage.setItem(
        'profile',
        JSON.stringify({
          user: action.payload.userDetail,
        }),
      );
      return {
        ...state,
        isFetching: false,
        userDetail: action.payload.userDetail,
      };
    case constants.LIKE_POST.SUCCESS:
      return {
        ...state,
        isFetching: false,
        userDetail: { ...state.userDetail, posts: action.payload.listPost },
      };
    case constants.SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listUser: action.payload.result,
        error: null,
        errMsg: '',
      };
    case constants.UPDATE_PROFILE.SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case constants.UPDATE_PROFILE.FAILURE:
    case constants.GET_SINGLE_USER_FAILURE:
    case constants.SEARCH_FAILURE:
    case constants.LIKE_POST.FAILURE:
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default UserReducer;

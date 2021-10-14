/** @format */

import * as constants from '../constants';

const initialState = {
  isFetching: null,
  listPost: [],
  ssMsg: '',
  error: null,
  errMsg: '',
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LIKE_POST.REQUEST:
    case constants.GET_ALL_POST.REQUEST:
    case constants.ADD_POST.REQUEST:
    case constants.DELETE_POST.REQUEST:
    case constants.COMMENT_POST.REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case constants.ADD_POST.SUCCESS:
    case constants.DELETE_POST.SUCCESS:
      return {
        ...state,
        isFetching: false,
        listPost: action.payload.listPost,
        ssMsg: action.payload.msg,
      };

    case constants.GET_ALL_POST.SUCCESS:
    case constants.LIKE_POST.SUCCESS:
    case constants.COMMENT_POST.SUCCESS:
      return {
        ...state,
        isFetching: false,
        listPost: action.payload.listPost,
      };
    case constants.LIKE_POST.FAILURE:
    case constants.GET_ALL_POST.FAILURE:
    case constants.ADD_POST.FAILURE:
    case constants.DELETE_POST.FAILURE:
    case constants.COMMENT_POST.FAILURE:
      return {
        ...state,
        error: true,
        errMsg: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
};

export default PostReducer;

/** @format */

import * as constants from '../constants';

const initialState = {
  isFetching: null,
  listCategory: [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
  ],
  ssMsg: '',
  error: null,
  errMsg: '',
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_CATEGORY.REQUEST:
    case constants.ADD_CATEGORY.REQUEST:
    case constants.UPDATE_CATEGORY.REQUEST:
    case constants.DELETE_CATEGORY.REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case constants.ADD_CATEGORY.SUCCESS:
    case constants.UPDATE_CATEGORY.SUCCESS:
    case constants.DELETE_CATEGORY.SUCCESS:
      return {
        ...state,
        isFetching: false,
        listCategory: action.payload.listCategory,
        ssMsg: action.payload.msg,
        errMsg: '',
        error: false,
      };

    case constants.GET_CATEGORY.SUCCESS:
      return {
        ...state,
        isFetching: false,
        listCategory: action.payload.listCategory,
      };
    case constants.GET_CATEGORY.FAILURE:
    case constants.ADD_CATEGORY.FAILURE:
    case constants.UPDATE_CATEGORY.FAILURE:
    case constants.DELETE_CATEGORY.FAILURE:
      return {
        ...state,
        error: true,
        errMsg: action.payload,
        ssMsg: '',
        isFetching: false,
      };

    default:
      return state;
  }
};

export default CategoryReducer;

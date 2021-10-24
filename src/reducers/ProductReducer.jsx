/** @format */

import * as constants from '../constants';

const initialState = {
  isFetching: null,
  listProduct: [],
  ssMsg: '',
  error: null,
  errMsg: '',
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PRODUCT.REQUEST:
    case constants.ADD_PRODUCT.REQUEST:
    case constants.UPDATE_PRODUCT.REQUEST:
    case constants.DELETE_PRODUCT.REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case constants.ADD_PRODUCT.SUCCESS:
    case constants.UPDATE_PRODUCT.SUCCESS:
    case constants.DELETE_PRODUCT.SUCCESS:
      return {
        ...state,
        isFetching: false,
        listProduct: action.payload.listProduct,
        ssMsg: action.payload.msg,
        errMsg: '',
        error: false,
      };

    case constants.GET_PRODUCT.SUCCESS:
      return {
        ...state,
        isFetching: false,
        listProduct: action.payload.listProduct,
      };
    case constants.GET_PRODUCT.FAILURE:
    case constants.ADD_PRODUCT.FAILURE:
    case constants.UPDATE_PRODUCT.FAILURE:
    case constants.DELETE_PRODUCT.FAILURE:
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

export default ProductReducer;

/** @format */

import * as constants from '../constants';
import { createAction } from 'redux-actions';

const createActionSet = (type) => {
  return {
    request: createAction(type.REQUEST),
    success: createAction(type.SUCCESS),
    failure: createAction(type.FAILURE),
  };
};

export const getProduct = createActionSet(constants.GET_PRODUCT);
export const addProduct = createActionSet(constants.ADD_PRODUCT);
export const updateProduct = createActionSet(constants.UPDATE_PRODUCT);
export const deleteProduct = createActionSet(constants.DELETE_PRODUCT);

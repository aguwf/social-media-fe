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

export const getCategory = createActionSet(constants.GET_CATEGORY);
export const addCategory = createActionSet(constants.ADD_CATEGORY);
export const updateCategory = createActionSet(constants.UPDATE_CATEGORY);
export const deleteCategory = createActionSet(constants.DELETE_CATEGORY);

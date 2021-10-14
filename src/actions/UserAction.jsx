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

const searchRequest = createAction(constants.SEARCH_REQUEST);
const searchSuccess = createAction(constants.SEARCH_SUCCESS);
const searchFailure = createAction(constants.SEARCH_FAILURE);

export const updateProfile = createActionSet(constants.UPDATE_PROFILE);
export const getSingleUser = createActionSet(constants.GET_SINGLE_USER);
export const uploadImage = createActionSet(constants.UPLOAD_IMAGE);

export { searchRequest, searchSuccess, searchFailure };

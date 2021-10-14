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

export const getAllPost = createActionSet(constants.GET_ALL_POST);

export const likePost = createActionSet(constants.LIKE_POST);
export const addPost = createActionSet(constants.ADD_POST);
export const deletePost = createActionSet(constants.DELETE_POST);
export const commentPost = createActionSet(constants.COMMENT_POST);

/** @format */

import * as constants from '../constants';
import { takeEvery, put } from 'redux-saga/effects';
import * as postAction from '../actions/PostAction';
import * as API from '../fetchAPI/AllAPI';

function* handleGetAllPost(action) {
  try {
    const objFetch = {
      url: `/api/posts/all?_page=${action.payload.page}&_limit=${constants.LIMIT}`,
    };
    const response = yield API.getData(objFetch);

    yield put(postAction.getAllPost.success({ listPost: response.listPost }));
  } catch (error) {
    yield put(postAction.getAllPost.failure(error));
  }
}

function* handleLikePost(action) {
  try {
    const { _id } = action.payload;
    const objFetch = {
      url: `/api/posts/${_id}`,
      data: {
        callback: action.payload.callback,
      },
    };
    const response = yield API.patchData(objFetch);

    yield put(postAction.likePost.success(response.data));
    // yield put(
    //   postAction.getSingleUser.request({ _id: action.payload.userId }),
    // );
  } catch (error) {
    yield put(postAction.likePost.failure(error));
  }
}

function* handleAddPost(action) {
  try {
    //Gui du lieu chu
    let postResponse;
    if (action.payload.post.content) {
      let objFetch = {
        url: `/api/posts`,
        data: {
          content: action.payload.post.content,
        },
      };
      postResponse = yield API.addData(objFetch);

      if (action.payload.post.images?.length > 0) {
        //Gui anh
        objFetch = {
          url: `/api/posts/${postResponse.data._id}/images`,
          data: {
            post: {
              content: action.payload.post.content,
            },
            callback: action.payload.callback,
          },
        };
        const imageResponse = yield API.addData(objFetch);
        yield put(postAction.addPost.success(imageResponse.data));
      }
    }
    yield put(postAction.addPost.success(postResponse.data));

    // yield put(
    //   postAction.getSingleUser.request({ _id: action.payload.userId }),
    // );
  } catch (error) {
    yield put(postAction.addPost.failure(error));
  }
}

function* handleDeletePost(action) {
  try {
    const { id } = action.payload;
    const objFetch = {
      url: `/api/posts/delete/${id}`,
      data: {
        callback: action.payload.callback,
      },
    };
    const response = yield API.patchData(objFetch);

    yield put(postAction.deletePost.success(response.data));
  } catch (error) {
    yield put(postAction.deletePost.failure(error));
  }
}

function* handleCommentPost(action) {
  try {
    const { postId, comment, callback } = action.payload;
    const objFetch = {
      url: `/api/comments`,
      data: {
        postId,
        comment,
        callback,
      },
    };
    const response = yield API.addData(objFetch);

    yield put(postAction.commentPost.success(response.data));
  } catch (error) {
    yield put(postAction.commentPost.failure(error));
  }
}

export const PostSaga = [
  takeEvery(constants.GET_ALL_POST.REQUEST, handleGetAllPost),
  takeEvery(constants.LIKE_POST.REQUEST, handleLikePost),
  takeEvery(constants.ADD_POST.REQUEST, handleAddPost),
  takeEvery(constants.DELETE_POST.REQUEST, handleDeletePost),
  takeEvery(constants.COMMENT_POST.REQUEST, handleCommentPost),
];

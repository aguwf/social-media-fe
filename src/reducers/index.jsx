/** @format */

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  auth: AuthReducer,
  post: PostReducer,
  user: UserReducer,
});

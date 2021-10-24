/** @format */

import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import CategoryReducer from './CategoryReducer';
import PostReducer from './PostReducer';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  auth: AuthReducer,
  post: PostReducer,
  user: UserReducer,
  category: CategoryReducer,
  product: ProductReducer,
});

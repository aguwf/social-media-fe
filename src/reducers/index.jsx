import { combineReducers } from 'redux'
import AuthReducer from './AuthReducers'
import HomeReducer from './HomeReducer'

export default combineReducers({
  auth: AuthReducer,
  home: HomeReducer
})

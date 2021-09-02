import * as constants from '../constants'
import { createAction } from 'redux-actions'

const searchRequest = createAction(constants.SEARCH_REQUEST)
const searchSuccess = createAction(constants.SEARCH_SUCCESS)
const searchFailure = createAction(constants.SEARCH_FAILURE)

const getSingleUserRequest = createAction(constants.GET_SINGLE_USER_REQUEST)
const getSingleUserSuccess = createAction(constants.GET_SINGLE_USER_SUCCESS)
const getSingleUserFailure = createAction(constants.GET_SINGLE_USER_FAILURE)

export {
  getSingleUserRequest,
  getSingleUserSuccess,
  getSingleUserFailure,
  searchRequest,
  searchSuccess,
  searchFailure
}

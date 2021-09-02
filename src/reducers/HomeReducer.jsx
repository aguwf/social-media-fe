import * as constants from '../constants'

const initialState = {
  isFetching: null,
  searchResult: [],
  ssMsg: '',
  error: null,
  errMsg: '',
  userDetail: {}
}

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SEARCH_REQUEST:
    case constants.GET_SINGLE_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case constants.SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchResult: action.payload.result,
        error: null,
        errMsg: ''
      }
    case constants.GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userDetail: action.payload.userDetail
      }
    case constants.SEARCH_FAILURE:
    case constants.GET_SINGLE_USER_FAILURE:
      return {
        ...state,
        error: true,
        errMsg: action.payload,
        isFetching: false
      }

    default:
      return state
  }
}

export default HomeReducer

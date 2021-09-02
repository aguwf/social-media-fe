/**
 * /* eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */
/* eslint-disable react-hooks/exhaustive-deps*/

import React from 'react';
import { connect } from 'react-redux';
import NavBarComponent from '../components/common/NavBarComponent';
import Toast from '../components/common/Toast';
import * as authAction from '../actions/AuthAction';
import * as homeAction from '../actions/HomeAction';

export const HomeContainer = (props) => {
  const [ShowToast, setShowToast] = React.useState(false);

  React.useEffect(() => {
    if (!ShowToast && (props.errMsg || props.ssMsg)) {
      setShowToast(true);
      setTimeout(() => {
        props.clearMsg();
      }, 4 * 1000);
    }
  }, [props]);

  // React.useEffect(() => {
  //   props.getCsrfToken();
  // }, []);
  return (
    <div>
      {ShowToast ? (
        <Toast
          setShowToast={(data) => setShowToast(data)}
          msg={props.error ? props.errMsg : props.ssMsg}
          error={props.error}
        />
      ) : null}
      <NavBarComponent
        logoutRequest={() => props.logoutRequest()}
        searchResult={props.searchResult}
        getSingleUserRequest={(data) => props.getSingleUserRequest(data)}
        searchRequest={(data) => props.searchRequest(data)}
        id={props.userDetail._id}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetail: state.home.userDetail,
  searchResult: state.home.searchResult,
  error: state.auth.error,
  errMsg: state.auth.errMsg,
  ssMsg: state.auth.ssMsg,
});

const mapDispatchToProps = (dispatch) => ({
  logoutRequest: () => dispatch(authAction.logoutRequest()),
  clearMsg: () => dispatch(authAction.clearMsg()),
  searchRequest: (data) => dispatch(homeAction.searchRequest(data)),
  getSingleUserRequest: (data) =>
    dispatch(homeAction.getSingleUserRequest(data)),
  getCsrfToken: () => dispatch(authAction.getCsrfToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

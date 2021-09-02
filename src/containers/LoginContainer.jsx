/**
 * /* eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */
/* eslint-disable react-hooks/exhaustive-deps*/

import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/auth_component/LoginComponent';
import * as authAction from '../actions/AuthAction';
import Loading from '../components/common/Loading';
import Toast from '../components/common/Toast';
import { useHistory } from 'react-router-dom';

export const LoginContainer = (props) => {
  const history = useHistory();
  const [ShowToast, setShowToast] = React.useState(false);
  const User = JSON.parse(localStorage.getItem('profile'));

  React.useEffect(() => {
    if (User) {
      history.push('/');
    }
  }, [User, history]);

  React.useEffect(() => {
    !ShowToast && (props.errMsg || props.ssMsg) && setShowToast(true);
  }, [props]);

  // React.useEffect(() => {
  //   props.getCsrfToken();
  // }, []);
  return (
    <div>
      {props.isFetching && <Loading />}
      {ShowToast ? (
        <Toast
          setShowToast={(data) => setShowToast(data)}
          msg={props.error ? props.errMsg : props.ssMsg}
          error={props.error}
        />
      ) : null}
      <Login loginRequest={(data) => props.loginRequest(data)} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error,
  errMsg: state.auth.errMsg,
  ssMsg: state.auth.ssMsg,
  isFetching: state.auth.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  loginRequest: (data) => dispatch(authAction.signinRequest(data)),
  getCsrfToken: () => dispatch(authAction.getCsrfToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

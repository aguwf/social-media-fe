/** @format */

import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Register from '../components/auth_component/RegisterComponent';
import * as authAction from '../actions/AuthAction';

export const RegisterContainer = (props) => {
  const history = useHistory();
  const User = JSON.parse(localStorage.getItem('profile'));
  React.useEffect(() => {
    if (User.fullname) {
      history.push('/');
    }
  }, [User, history]);

  // React.useEffect(() => {
  //   props.getCsrfToken();
  // }, []);
  return (
    <div>
      <Register signupRequest={(data) => props.signupRequest(data)} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  signupRequest: (data) => dispatch(authAction.signupRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

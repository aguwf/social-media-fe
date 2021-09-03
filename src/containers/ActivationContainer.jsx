/** @format */

import React from 'react';
import { connect } from 'react-redux';
import Activation from '../components/auth_component/Activation';
import * as authAction from '../actions/AuthAction';

export const ActivationContainer = (props) => {
  return (
    <div>
      <Activation activeAccountRequest = {(data) => props.activeAccountRequest(data)} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  activeAccountRequest: (data) => dispatch(authAction.activeAccountRequest(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivationContainer);

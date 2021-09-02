/** @format */

import React from 'react';
import { connect } from 'react-redux';
import Activation from '../components/auth_component/Activation';
import * as authAction from '../actions/AuthAction';

export const ActivationContainer = (props) => {
  return (
    <div>
      <Activation activeAccountRequest={() => props.activeAccountRequest()} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  activeAccountRequest: () => dispatch(authAction.activeAccountRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivationContainer);

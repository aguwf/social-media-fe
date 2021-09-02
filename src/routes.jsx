/** @format */

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageRender from './PageRender';
import * as Pages from './pages';
import { useSelector } from 'react-redux';
import Loading from './components/common/Loading';

const Routes = () => {
  const { authData } = useSelector((state) => state.auth);
  const User = JSON.parse(localStorage.getItem('profile'));
  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route
            exact
            path={'/'}
            component={authData || User ? Pages.home : Pages.login}
          />
          <Route
            exact
            path={'/user/activation/:id'}
            component={Pages.activation}
          />
          <Route exact path={'/user/activation'} component={Pages.activation} />
          <Route exact path={'/:page'} component={PageRender} />
          <Route exact path={'/:page/:id'} component={PageRender} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;

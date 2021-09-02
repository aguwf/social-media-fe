/** @format */

import React from 'react';
const login = React.lazy(() => import('./login'));
const register = React.lazy(() => import('./register'));
const home = React.lazy(() => import('./home'));
const profile = React.lazy(() => import('./profile'));
const reset = React.lazy(() => import('./reset'));
const activation = React.lazy(() => import('./activation'));
const forgot = React.lazy(() => import('./profile'));

export { login, register, home, profile, reset, activation, forgot };

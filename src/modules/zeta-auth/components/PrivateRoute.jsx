import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authService } from '..';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authService.isAuthenticated() === true ?
      <Component {...props} /> :
      <Redirect to={{ pathname: '/public/login', state: { from: props.location } }} />
  )} />
);

export default PrivateRoute;

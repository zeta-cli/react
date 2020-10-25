import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authService from '../services/auth.service';

/**
 * Private Route
 *
 * @param {*} param0 Component parameter
 * @returns {object} Private Route react component
 */
export default function PrivateRoute({ component: Component, path }) {
  return (
    <Route
      path={path}
      render={(props) => (
        authService.isAuthenticated() === true
          ? <Component path={path} />
          : <Redirect to={{ pathname: '/public/login', state: { from: props.location } }} />
      )}
    />
  );
}

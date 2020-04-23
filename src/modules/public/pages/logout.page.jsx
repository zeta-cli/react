import React from 'react';
import { Redirect } from 'react-router-dom';
import { authService } from '../../zeta-auth';

const LogoutPage = () => (
  authService.signOut() && <Redirect to={{ pathname: '/public/login' }} />
);

export { LogoutPage };
export default { LogoutPage };

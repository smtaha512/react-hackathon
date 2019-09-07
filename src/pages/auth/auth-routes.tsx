import * as React from 'react';
import { Route } from 'react-router-dom';
import SignupPage from './signup-page/signup-page';
import SigninPage from './signin-page/signin-page';

export interface AuthRoutesProps {}

const AuthRoutes: React.SFC<AuthRoutesProps> = () => (
  <div>
    <Route path='/auth/signup' component={SignupPage}></Route>
    <Route path='/auth/signin' component={SigninPage}></Route>
  </div>
);

export default AuthRoutes;

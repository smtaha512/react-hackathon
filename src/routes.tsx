import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignupPage from './pages/auth/signup-page/signup-page';
import BlogPostPage from './pages/blog-post-page/blog-post-page';
import LandingPage from './pages/landing-page/landing-page';

const AppRouter: React.FC = () => (
  <Router>
    <Route path='/' exact component={LandingPage} />
    <Switch>
      <Route path='/signup' exact component={SignupPage}></Route>
      <Route path='/:id' exact component={BlogPostPage}></Route>
    </Switch>
  </Router>
);
export default AppRouter;

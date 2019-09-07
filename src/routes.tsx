import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BlogPostPage from './pages/blog-post-page/blog-post-page';
import LandingPage from './pages/landing-page/landing-page';
import AuthPage from './pages/auth/auth-page';

const AppRouter: React.FC = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/auth' component={AuthPage}></Route>
      <Route path='/:id' exact component={BlogPostPage}></Route>
    </Switch>
  </Router>
);
export default AppRouter;

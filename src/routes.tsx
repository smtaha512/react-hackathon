import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './landing-page/landing-page';
import BlogPostPage from './pages/blog-post-page/blog-post-page';

const AppRouter: React.FC = () => (
  <Router>
    <Route path='/' exact component={LandingPage} />
    <Route path='/:id' component={BlogPostPage}></Route>
  </Router>
);
export default AppRouter;

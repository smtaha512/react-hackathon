import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './landing-page/landing-page';

const AppRouter: React.FC = () => (
  <Router>
    <Route path='/' exact component={LandingPage} />
  </Router>
);
export default AppRouter;

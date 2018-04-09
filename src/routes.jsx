import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Intro from './components/Intro';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ShowCase from './components/Pages/ShowCase';
import AutoRegex from './components/Pages/AutoRegex';

const Routes = () => (
  <Router>
    <div className="container">
      <Navigation />
      <Route exact path="/" component={Intro} />
      <Route exact path="/lab" component={ShowCase} />
      <Route exact path="/lab/autoregex" component={AutoRegex} />
      <Footer />
    </div>
  </Router>
);

export default Routes;

import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// import axios from 'axios';

import './css/index.css';
// import apiKey from './config';

/* App Components */
import Search from './Search';
import Nav from './Nav';
import NotFound from './NotFound';
import Container from './Container';

/* Image holding components (to genearlize in the Container component) */
import Batman from './components/Batman';
import Coffee from './components/Coffee';
import Gym from './components/Gym';

const App = props => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Container} />
          <Route path="/search" component={Search} />
          <Route path="/batman" component={Batman} />
          <Route path="/coffee" component={Coffee} />
          <Route path="/gym" component={Gym} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

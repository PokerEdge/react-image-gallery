import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import axios from 'axios';

import './App.css';
import './config';

/* App Components */
import SearchForm from './SearchForm';
import Nav from './Nav';
import NotFound from './NotFound';
import Container from './Container';

/* Image components to create in the Container component */
import Batman from './components/Batman';
import Coffee from './components/Coffee';
import Gym from './components/Gym';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (data) => {
    // fetch data with axios with string passed from SearchForm form onSubmit
  }

  render() {

    return (

      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/" component={Container} />
            <Route path="/batman" component={Batman} />
            <Route path="/coffee" component={Coffee} />
            <Route path="/gym" component={Gym} />
            <Route path='/notfound' component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

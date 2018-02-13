import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import axios from 'axios';

import './css/index.css';
import apiKey from './config';

/* App Components */
import Search from './Search';
import Nav from './Nav';
import NotFound from './NotFound';
import Container from './Container';

/* Image holding components to create in the Container component */
import Batman from './components/Batman';
import Coffee from './components/Coffee';
import Gym from './components/Gym';


let serverID = '4750';
let photoID = '40119717621';
let secret = '3033ffcd2a';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      images: [
        {
          farm: '5',
          server: '4750',
          id: '40119717621',
          secret: '3033ffcd2a',
          title: 'test photo'
        },
        {
          farm: '5',
          server: '4761',
          id: '28447116979',
          secret: 'ed2575fe86',
          title: 'volleyball_court_with_coffee',
        },
      ],
      isLoading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (searchTerm = 'batman') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&media=photos&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos,
          isLoading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
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
            <Route path='/notfound' component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

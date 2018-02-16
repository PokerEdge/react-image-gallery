import React, { Component } from 'react';
import ImageList from './ImageList';

import axios from 'axios';
import apiKey from './config';

export default class Container extends Component {
  constructor(props) {
    super(props);
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
    // this.performSearch();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e0f54a50652c3fa50b048354439e10ac&tags=batman&media=photos&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          isLoading: false
        })
        console.log('state was updated by componentDidMount')
      })
      .catch(error => 'Unable to fetch data with axios', error);
    { /* Use index argument in mapping to get array elements by index */}
    console.log(
      this.state.images[0].farm,
      this.state.images[0].server,
      this.state.images[0].id,
      this.state.images[0].secret,
      this.state.images[0].title
    );
  }

  // performSearch = (searchTerm = 'batman') => {
  //   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&media=photos&per_page=12&format=json&nojsoncallback=1`)
  //     .then(response => {
  //       this.setState({
  //         images: response.data.photos.photo,
  //         isLoading: false
  //       })
  //       console.log('state was updated by performSearch')
  //     })
  //     .catch(error => {
  //       console.log('Error fetching and parsing data', error);
  //     });
  // }

  /* Map over rate limited API fetch for particular string entered */
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <li><img src={'https://farm5.staticflickr.com/4753/40116133061_dd388d8c67.jpg'} alt={} /></li>
      </ul>
    </div>
  );
}

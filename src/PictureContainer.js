import React, { Component } from 'react';
import PictureList from './PictureList';
import axios from 'axios';

export default class PictureContainer extends Component {
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

  // componentWillMount() {
  //   this.performSearch();
  //   console.log('componentWIllMount called')
  // }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e0f54a50652c3fa50b048354439e10ac&tags=batman&media=photos&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          isLoading: false
        })
      })
      .catch(error =>
        'Unable to fetch data with axios'
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

  render(){

    return (
      <div className="photo-container">
          {
            (this.state.isLoading)
            ? <p>Loading...</p>
            : <PictureList data={this.state.images} />
          }
      </div>
    );
  }
}

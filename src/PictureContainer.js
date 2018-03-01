import React, { Component } from 'react';
import PictureList from './PictureList';
// import SearchForm from './SearchForm';
import axios from 'axios';
import config from './config';

export default class PictureContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      searchTerm: '',
      isLoading: true
    }
  }

  componentWillReceiveProps(nextProps) {
    this.performSearch(nextProps.match.params.searchTerm);
  }

  componentDidMount() {
    this.performSearch(this.props.match.params.searchTerm);
  }

  performSearch = (searchTerm = 'pickle rick') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${searchTerm}&media=photos&per_page=12&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          searchTerm: '',
          isLoading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
      console.log('searchTerm after performSearch method:', this.props.searchTerm)
  }

  render(){

    // if(searchTerm){
    //   let searchTerm = (this.props.match.params.searchTerm);
    //   let formattedSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1).toLowerCase();
    // }

    // if(!this.props.match.params){
    //   this.props.match.params = {};
      this.props.match.params.searchTerm = 'batman';
      this.props.match.params.title = this.props.match.params.searchTerm.charAt(0).toUpperCase() + this.props.match.params.searchTerm.slice(1).toLowerCase();
    // }

    console.log('match params:', this.props.match.params)

    return (
      <div className="photo-container">
          {
            (this.state.isLoading)
            ? <p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="40" height="40" fill="#438bbd">
                  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
                  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
                    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
                  </path>
                </svg>
              </p>
            : <PictureList data={this.state.images} searchTerm={this.props.match.params.searchTerm} />
          }
          { /* : <PictureList data={this.state.images} searchTerm={formattedSearchTerm} /> */ }
      </div>
    );
  }
}

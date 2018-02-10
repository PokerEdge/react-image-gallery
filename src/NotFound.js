import React, { Component } from 'react';

export default class SearchForm extends Component {

  render() {
    return (
      <ul>
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>Your search did not return any results. Please try again.</p>
        </li>
      </ul>
    );
  }
}

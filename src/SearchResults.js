import React from 'react';
import PictureContainer from './PictureContainer';
import SearchForm from './SearchForm';

const SearchResults = ({ match }) => {

  let searchTerm = match.params.searchTerm;

  return (
    <div>
      <SearchForm />
      <PictureContainer title="" searchTerm={searchTerm} />
    </div>
  );
}

export default SearchResults;

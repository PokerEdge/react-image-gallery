import React from 'react';
import PictureContainer from './PictureContainer';

const SearchResults = ({match}) => {
  return (
    <PictureContainer title="" searchTerm={match.params.searchTerm} />
    /* <PictureContainer title="" searchTerm={match.params.searchTerm} /> */ 
  );
}

export default SearchResults;

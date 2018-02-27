import React from 'react';
import PictureContainer from './PictureContainer';
// import SearchForm from './SearchForm';
// import NotFound from './NotFound';

const SearchResults = ({ match }) => {

  let searchTerm = match.params.searchTerm;

  return (
    <div className="photo-container">
      { /* <SearchForm /> */ }
      <PictureContainer title="" searchTerm={searchTerm} />
      // <NotFound />
    </div>
  );
}

export default SearchResults;

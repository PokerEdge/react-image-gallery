import React from 'react';
import PictureContainer from '../PictureContainer';

const Coffee = props => {

  if(!props.match.params){
    props.match.params = {};
    props.match.params.searchTerm = 'coffee';
    props.match.params.title = props.match.params.searchTerm.charAt(0).toUpperCase() + props.match.params.searchTerm.slice(1).toLowerCase();
  }

  return(
    <div className="photo-container">
      <PictureContainer title={props.match.params.title} {...props} />
    </div>
  );
}

export default Coffee;

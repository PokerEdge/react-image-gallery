import React from 'react';
import Picture from './Picture';
// import PropTypes from 'prop-types';
// import axios from 'axios';

/*
<li><img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" /></li>
*/

const PictureList = props => {

  const photos = props.data.map((photo) =>
    <Picture key={photo.id}
             url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
             title={photo.title} />
  );
  console.log(props.data);

  return (
    // <li key={props.data.id}>
    //   <img src={url} alt={props.data.title} />
    // </li>
    <div>
      <h2>Results</h2>
      <ul>
        { photos }
      </ul>
    </div>
  );
}

export default PictureList;

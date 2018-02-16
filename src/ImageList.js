import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

/*
<li><img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" /></li>
*/

const ImageList = props => {

  return(
    <ul>
      {props.images.map((image, index) =>
        <li>
          <img src="" alt="" />
        </li>
      )}
    </ul>
  );
}

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageList;

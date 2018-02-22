import React from 'react';
import PictureContainer from '../PictureContainer';

const Batman = props => {

  let serverID = '4750';
  let photoID = '40119717621';
  let secret = '3033ffcd2a';

  /*
  let farm = data.photos.photo.farm;
  let altText = data.photos.photo.title;
  */

  let url = [
              `https://farm5.staticflickr.com/${serverID}/${photoID}_${secret}.jpg`,
              `https://farm5.staticflickr.com/4753/40116133061_dd388d8c67.jpg`,
              `https://farm5.staticflickr.com/4710/25239153027_21ec5b2c9d.jpg`,
              `https://farm5.staticflickr.com/4752/39213908465_129e4c46a5.jpg`,
            ];

  let altText = ['batman0', 'batman1', 'batman2', 'batman3'];

  if (url.length > 0){

  }

  /* Map over rate limited API fetch for particular string entered */
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {/* url and altText will be replaced by mapped over search term props from axios call */}
        <li><img src={url[0]} alt={altText[0]} /></li>
        <li><img src={url[1]} alt={altText[1]} /></li>
        <li><img src={url[2]} alt={altText[2]} /></li>
        <li><img src={url[3]} alt={altText[3]} /></li>
      </ul>
    </div>
    /*
    <li><img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" /></li>
    */
  );
}

export default Batman;

import React from 'react';

const Batman = props => {

  let serverID = '4750';
  let photoID = '40119717621';
  let secret = '3033ffcd2a';

  /*
  let farm = data.photos.photo.farm;
  let altText = data.photos.photo.title;
  */

  let url = [`https://farm5.staticflickr.com/${serverID}/${photoID}_${secret}.jpg`];

  if (url.length > 0){

  }

  /* Map over rate limited API fetch for particular string entered */
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <li><img src={url[0]} alt="" /></li>
        <li><img src={url[0]} alt="" /></li>
        <li><img src={url[0]} alt="" /></li>
        <li><img src={url[0]} alt="" /></li>
      </ul>
    </div>
    /*
    <li><img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" /></li>
    */
  );
}

export default Batman;

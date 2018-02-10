import React from 'react';

const Coffee = props => {

  let serverID = '4764';
  let photoID = '26300130668';
  let secret = 'b3b1ee507f';

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

export default Coffee;

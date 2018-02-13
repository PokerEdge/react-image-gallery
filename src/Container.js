import React from 'react';
import ImageList from './ImageList';
// import axios from 'axios';

const Container = props => {


  let data; // axios call to store data based on submitted keyword prop (data.photos.photo)

  // if (url.length > 0){
  //
  // }

  let url = `https://farm${props.farm}.staticflickr.com/${props.server}/{$props.id}_{$props.secret}.jpg`;
  let titleText = props.title;

  /* Map over rate limited API fetch for particular string entered */
  return(
    <div className="photo-container">
      <h2>Results</h2>
      <ImageList images={this.state.images} />
      { /* url={url} alt={titleText} */ }
    </div>
    /*
    <li><img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" /></li>
    */
  );
}

export default Container;

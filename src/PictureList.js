import React from 'react';
import Picture from './Picture';
import NotFound from './NotFound';

const PictureList = props => {

  const data = props.data;
  let photos;

  if(data.length > 0){
    photos = data.map((photo) =>
      <Picture key={photo.id}
               url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
               title={photo.title} />
    );
  }
  else {
    photos = <NotFound />
  }

  return (
    <div className="photo-container">
      <h2>{props.searchTerm} Images</h2>
      <ul>
        { photos }
      </ul>
    </div>
  );
}

export default PictureList;

import React from 'react';
import PictureContainer from '../PictureContainer';

// const Batman = props => {
//
  // if(!props.match.params){
  //   props.match.params = {};
  //   props.match.params.searchTerm = 'batman';
  //   props.match.params.title = props.match.params.searchTerm.charAt(0).toUpperCase() + props.match.params.searchTerm.slice(1).toLowerCase();
  // }
//
//   console.log('title:', props.match.params.title)
//
//   return(
//     <div className='photo-container'>
//       <PictureContainer title={props.match.params.title} {...props} />
//     </div>
//   );
// }

const Batman = props => {

  // return(
  //   <div className="photo-container">
  //     <PictureContainer title="" searchTerm={'batman'} />
  //   </div>
  // );

    if(!props.match.params){
      props.match.params = {};
      props.match.params.searchTerm = 'batman';
      props.match.params.title = props.match.params.searchTerm.charAt(0).toUpperCase() + props.match.params.searchTerm.slice(1).toLowerCase();
    }

    return(
      <div className='photo-container'>
        <PictureContainer title={props.match.params.title} {...props} />
      </div>
    );
}

export default Batman;

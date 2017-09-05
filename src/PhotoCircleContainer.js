import React from 'react';
import PhotoCircle from './PhotoCircle';

class PhotoCircleContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-circle-container">
        <PhotoCircle />
      </div>
    );
  }
}

export default PhotoCircleContainer;

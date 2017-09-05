import React from 'react';

class PhotoCircle extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-circle">
        <div className="photo-circle-photo">
          <img src="http://lorempixel.com/400/400" />
        </div>
        <div className="photo-circle-caption">
          Louisville DSA
        </div>
      </div>
    );
  }
}

export default PhotoCircle;

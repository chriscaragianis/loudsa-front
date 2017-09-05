import React from 'react';

class PhotoCircle extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-circle">
        <img src="http://lorempixel.com/400/400" />
      </div>
    );
  }
}

export default PhotoCircle;

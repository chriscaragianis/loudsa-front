import React from 'react';

const Image = (props) => (
  <div>
    <div className="image-container">
      <img alt={props.alt} src={props.src} />
    </div>
    <div className="image-caption">
      {props.caption}
    </div>
  </div>
);

export default Image;

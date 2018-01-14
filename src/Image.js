import React from 'react';

const Image = (props) => (
  <div className="image-container">
    <img alt={props.alt} src={props.src} />
    <div className="image-caption">
      {props.caption}
    </div>
  </div>
);

export default Image;

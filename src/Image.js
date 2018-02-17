import React from 'react';

const Image = (props) => (
  <div className="image-container">
    <div className="">
      <img alt={props.alt} src={props.src} />
    </div>
    <div className="image-caption">
      {props.caption}
    </div>
  </div>
);

export default Image;

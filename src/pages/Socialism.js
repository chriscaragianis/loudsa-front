import React from 'react';
import Image from '../Image';
import Lorem from '../lorem';

const Socialism = () => (
  <div className="page about-page">
    <div className="copy about-copy">
      <h1>Socialism</h1>
      { Lorem }
    </div>
    <div className="image-strip">
      <Image src="http://lorempixel.com/200/200" />
      <Image src="http://lorempixel.com/200/200" />
      <Image src="http://lorempixel.com/200/200" />
    </div>
  </div>
);

export default Socialism;

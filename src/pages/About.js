import React from 'react';
import Image from '../Image';
import Lorem from '../lorem';

const About = () => (
  <div className="page about-page">
    <div className="copy about-copy">
      <h1>About us</h1>
      { Lorem }
    </div>
    <div className="image-strip">
      <Image src="http://lorempixel.com/200/200" caption="A caption for the picture" />
      <Image src="http://lorempixel.com/200/200" caption="A caption for the picture" />
      <Image src="http://lorempixel.com/200/200" caption="A caption for the picture" />
    </div>
  </div>
);

export default About;

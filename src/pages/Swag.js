import React from 'react';
import TitleBar from '../TitleBar';
import SwagShop from '../SwagShop';

class Swag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="swag-page page">
        <TitleBar text="swag" />
        <SwagShop />
      </div>
    );
  }
}

export default Swag;

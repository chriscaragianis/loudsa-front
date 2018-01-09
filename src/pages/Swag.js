import React from 'react';
import SwagShop from '../SwagShop';

class Swag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="swag-page page">
        <SwagShop />
      </div>
    );
  }
}

export default Swag;

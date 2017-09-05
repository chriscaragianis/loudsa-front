import React from 'react';
import PhotoCircleContainer from './PhotoCircleContainer';
import MenuContainer from './MenuContainer';

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="layout-container">
        <PhotoCircleContainer />
        <MenuContainer />
      </div>
    );
  }
}

export default Layout;

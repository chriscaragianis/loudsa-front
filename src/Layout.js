import React from 'react';
import ContentContainer from './ContentContainer';
import MenuContainer from './MenuContainer';

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="layout-container">
        <ContentContainer />
        <MenuContainer />
      </div>
    );
  }
}

export default Layout;

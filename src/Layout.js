import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContentContainer from './ContentContainer';
import MenuContainer from './MenuContainer';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="layout-container">
          <ContentContainer />
          <MenuContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;

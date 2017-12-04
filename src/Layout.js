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
          <div className="curtain">
            <div className="main-title">
              <span className="louisville">Louisville</span>
              <span className="dsa">DSA</span>
              <span className="dsa-long">Democratic Socialists of America</span>
            </div>
            Lorem
          </div>
        </div>
    );
  }
}

export default Layout;

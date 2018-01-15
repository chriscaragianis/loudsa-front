import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContentContainer from './ContentContainer';
import 'normalize.css'
import Menu from './Menu';
import Footer from './Footer';
import './main.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="header">
            <div className="header-logo">
              Logo
            </div>
            <Menu />
          </div>
          <div className="body">
            <ContentContainer />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;

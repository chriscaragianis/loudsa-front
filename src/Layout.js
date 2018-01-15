import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContentContainer from './ContentContainer';
import 'normalize.css'
import Footer from './Footer';
import Header from './Header';
import './main.css';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
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

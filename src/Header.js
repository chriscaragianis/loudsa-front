import React from 'react';
import Menu from './Menu';

const Header = () => (
  <div className="header">
    <div className="header-logo">
      <img alt="Louisville DSA logo" src="dsalogo.png" />
      <div className="header-text">
        Louisville Democratic Socialists of America
      </div>
    </div>
    <Menu />
  </div>
);

export default Header;

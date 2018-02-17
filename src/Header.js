import React from 'react';
import Menu from './Menu';

const Header = () => (
  <div className="header">
    <div className="header-logo">
      <img alt="Louisville DSA logo" src="dsalogo.png" /><br />
    </div>
    <Menu />
  </div>
);

export default Header;

import React from 'react';
import Menu from './Menu';

const Header = () => (
  <div className="header">
    <div className="header-logo">
      <img alt="Louisville DSA logo" src="loudsa.png" /><br />
    </div>
    <p>Democratic Socialists of America in Louisville and Southern Indiana</p>
    <Menu />
  </div>
);

export default Header;

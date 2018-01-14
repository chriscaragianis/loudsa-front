import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import _ from 'lodash';

const Menu = () => (
  <div className="menu">
    <Link className="menu-item" to="/About">About</Link>
    <Link className="menu-item" to="/News">News</Link>
    <Link className="menu-item" to="/Events">Events</Link>
    <Link className="menu-item" to="/Socialism">Socialism</Link>
    <Link className="menu-item" to="/Info">Info</Link>
  </div>
);

export default Menu;

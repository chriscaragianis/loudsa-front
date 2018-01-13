import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import _ from 'lodash';
import About from './pages/About';
import News from './pages/News';
import Blog from './pages/Blog';
import Calendar from './pages/Calendar';
import Swag from './pages/Swag';
import Bylaws from './pages/Bylaws';

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

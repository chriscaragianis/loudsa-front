import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu">
        <MenuItem text="About" />
        <MenuItem text="News" />
        <MenuItem text="Blog" />
        <MenuItem text="Calendar" />
        <MenuItem text="Swag" />
        <MenuItem text="Bylaws, etc " />
      </div>
    );
  }
}

export default Menu;

import React from 'react';
import Menu from './Menu';

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menu-container">
        <Menu />
      </div>
    );
  }
}

export default MenuContainer;

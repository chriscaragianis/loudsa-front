import React from 'react';
import MenuItem from './MenuItem';
import _ from 'lodash';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: [false, false, false, false, false, false],
    };
  }

  menuClick(ind) {
    console.log("called");
    const result = [false, false, false, false, false, false];
    result[ind] = true;
    this.setState({
      open: result,
    });
  }

  items() {
    const titles = [
      "About",
      "News",
      "Blog",
      "Calendar",
      "Swag",
      "Bylaws, etc.",
    ];
    return _.map(titles, (val, ind) =>
      <MenuItem
        text={val}
        onClick={this.menuClick.bind(this, ind)}
        clopen={
          this.state.open[ind] ? "menu-item-open" : "menu-item"
        }
      />
    );
  }

  render() {
    return (
      <div className="menu">
        {this.items()}
      </div>
    );
  }
}

export default Menu;

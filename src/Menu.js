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
    result[ind] = !this.state.open[ind];
    this.setState({
      open: result,
    });
  }

  items() {
    const Links = [
      {
        text: "About",
        path: "/about",
      },
      {
        text: "News",
        path: "/news",
      },
      {
        text: "Blog",
        path: "/blog",
      },
      {
        text: "Calendar",
        path: "/calendar",
      },
      {
        text: "Swag",
        path: "/swag",
      },
      {
        text: "Bylaws",
        path: "/bylaws",
      },
    ];
    return _.map(Links, (val, ind) =>
      <MenuItem
        link={Links[ind]}
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
        {}
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Menu;

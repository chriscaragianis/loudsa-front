import React from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { link, clopen, onClick } = this.props;
    return (
      <div
        className={clopen}
        onClick={onClick}
      >
        <Link
          to={link.path}
        >
          {link.text}
        </Link>
      </div>
    );
  }
}

export default MenuItem;


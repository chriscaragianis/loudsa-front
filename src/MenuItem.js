import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div
        className={this.props.clopen}
        onClick={this.props.onClick}>
        {this.props.text}
      </div>
    )
  }

}

export default MenuItem

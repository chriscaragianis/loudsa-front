import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
  }

  click(e) {
    e.target.className = " open";
  }

  render() {
    return(
      <div className="menu-item" onClick={this.click}>
        {this.props.text}
      </div>
    )
  }

}

export default MenuItem

import React from 'react';

class TitleBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="title-bar">
        <span className="title-text">
          {this.props.text}
        </span>
      </div>
    );
  }
}

export default TitleBar;

import React from 'react';
import { Route } from 'react-router';
import PhotoCircleContainer from './PhotoCircleContainer';

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-container">
        <Route path="/" component={PhotoCircleContainer} />
      </div>
    )
  }
}

export default ContentContainer;

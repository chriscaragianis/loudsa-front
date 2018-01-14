import React from 'react';
import { Route } from 'react-router';
import PhotoCircleContainer from './PhotoCircleContainer';
import About from './pages/About';
import News from './pages/News';
import Socialism from './pages/Socialism';
import Events from './pages/Events';
import Swag from './pages/Swag';
import Info from './pages/Info';

class ContentContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-container">
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/socialism" component={Socialism} />
        <Route path="/events" component={Events} />
        <Route path="/swag" component={About} />
        <Route path="/info" component={Info} />
      </div>
    )
  }
}

export default ContentContainer;

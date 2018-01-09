import React from 'react';
import { Route } from 'react-router';
import About from './pages/About';
import News from './pages/News';
import CalendarPage from './pages/Calendar';
import Swag from './pages/Swag';
import Bylaws from './pages/Bylaws';

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
        <Route path="/blog" component={About} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/swag" component={Swag} />
        <Route path="/bylaws" component={Bylaws} />
      </div>
    );
  }
}

export default ContentContainer;

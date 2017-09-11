import React from 'react';
import TitleBar from '../TitleBar';
import Calendar from '../Calendar';

class CalendarPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="calendar-page page">
        <TitleBar text="calendar" />
        <Calendar />
      </div>
    );
  }
}

export default CalendarPage;

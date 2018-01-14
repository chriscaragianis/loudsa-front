import React from 'react';
import Calendar from '../Calendar';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calendar-page page">
        <h1>Events</h1>
        <Calendar />
        sequential list with desciptions
      </div>
    );
  }
}

export default CalendarPage;

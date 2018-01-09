import React from 'react';
import Calendar from '../Calendar';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calendar-page page">
        <Calendar />
      </div>
    );
  }
}

export default CalendarPage;

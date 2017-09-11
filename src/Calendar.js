import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class Calendar extends React.Component {
  render() {
    return(
      <div className="calendar">
        <BigCalendar
          events={[]}
          startAccessor='startDate'
          endAccessor='endDate'
        />
    </div>
    );
  }
}

export default Calendar;

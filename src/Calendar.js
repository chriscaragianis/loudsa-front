import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import _ from 'lodash';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


const Calendar = (props) => {

  return (
    <div className="calendar">
      <BigCalendar
        events={[]}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
  );
}

export default Calendar;

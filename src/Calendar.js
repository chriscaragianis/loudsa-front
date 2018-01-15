import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import _ from 'lodash';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


const Calendar = (props) => {
  const { events } = props;
  return (
    <div className="calendar">
      <BigCalendar
        selectable
        onSelectEvent={event => alert(event.desc)}
        events={events}
        views={['month']}
        startAccessor='start'
        endAccessor='end'
      />
    </div>
  );
}

export default Calendar;

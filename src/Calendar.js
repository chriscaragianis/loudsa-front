import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import _ from 'lodash';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    const request = new Request('http://localhost:4000/api/v1/events', {
      method: 'GET',
    });
    const events = fetch(request)
      .then((res) => res.json())
      .then((json) => {
        const ev = _.map(json, (x) => {
          x.start = new Date(x.start);
          x.end = new Date(x.end);
        });
        this.setState({
          events: json,
        });
      });
  }

  render() {
    return (
      <div className="calendar">
        <BigCalendar
          events={this.state.events}
          startAccessor='start'
          endAccessor='end'
        />
      </div>
    );
  }
}

export default Calendar;

import React from 'react';
import BigCalendar from 'react-big-calendar';
import ReactModal from 'react-modal';
import moment from 'moment';
import _ from 'lodash';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

const eventsFixture = [
  {
    startTime: moment('2017-11-08 09'),
    endTime: moment('2017-11-08 11'),
    title: 'title',
    location: 'location',
  }
];

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: eventsFixture,
    }
  }
  componentDidMount() {
    const request = new Request('http://localhost:4000/api/v1/events', {
      method: 'GET',
    });
    const events = fetch(request)
      .then((res) => { return res.json(); })
      .then((json) => {
        const ev = _.map(json, (x) => {
          x.startTime = new Date(x.startTime);
          x.endTime = new Date(x.endTime);
        })
        this.setState({
          events: json,
        })
      })
  }

  render() {
    return(
      <div className="calendar">
        <BigCalendar
          selectable
          events={this.state.events}
          startAccessor='startTime'
          endAccessor='endTime'
          onSelectEvent={(e) => { console.log(e); alert('selected!'); }}
        />
        <ReactModal
          isOpen={this.state.modalOpen}
          styles={customStyles}
        />
    </div>
    );
  }
}

export default Calendar;

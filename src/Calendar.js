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

const EventModal = (props) => (
  <div className="event-modal">
    <div className="closeX" onClick={props.closeModal}>
      X
    </div>
    {JSON.stringify(props, null, '  ')}
  </div>
);

class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: eventsFixture,
      modalProps: {},
      modalOpen: false,
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
  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }
  calendar() {
    return this.state.modalOpen ? '' : (
      <BigCalendar
        selectable
        events={this.state.events}
        startAccessor='startTime'
        endAccessor='endTime'
        onSelectEvent={(e) => {
          this.setState({
            modalOpen: true,
            modalProps: e,
          })
        }}
      />
    );
  }

  render() {
    return(
      <div className="calendar">
        {this.calendar()}
        <ReactModal
          isOpen={this.state.modalOpen}
          styles={customStyles}
        >
          <EventModal
            closeModal={this.closeModal.bind(this)}
            {...this.state.modalProps}
          />
        </ReactModal>
    </div>
    );
  }
}

export default Calendar;

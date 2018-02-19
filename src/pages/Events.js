import React from 'react';
import map from 'lodash/map';
import moment from 'moment';
import sortBy from 'lodash/sortBy';
import Calendar from '../Calendar';
import events from '../sample_events';

const makeContact = (e) => {
  if (e.contactName) {
    const ph = e.contactPhone ? `, Ph: ${e.contactPhone}` : '';
    const em = e.contactEmail ? `, Email: ${e.contactEmail}` : '';
    return (
      <span>
        {`Contact: ${e.contactName}${ph}`}<a href={ `mailto:${e.contactEmail}` }>{em}</a>;
      </span>
    )
  } else return '';
};

const makeEvents = (evs) => {
  return map(sortBy(events, (x) => x.start), (e, i) =>
    moment() < moment(e.start) ? (
    <li key={i}>
      <h1 className="event-title>">{e.title}</h1>
      <p className="event-time">
        {moment(e.start).format("dddd, MMMM, Do YYYY")} <br />
        Starts: {moment(e.start).format("h:mm a")}<br />
        Ends: {moment(e.end).format("h:mm a")}<br />
      </p>
      <p className="event-desc">
        {e.desc}
      </p>
      <p className="event-contact">
        {makeContact(e)}
      </p>
    </li>
): '');
};

const CalendarPage = () => {
  return (
    <div className="calendar-page page">
      <h1>Events</h1>
      <Calendar events={events}/>
      <ul className="event-descriptions">
        {makeEvents(events)}
      </ul>
    </div>
  );
}

export default CalendarPage;

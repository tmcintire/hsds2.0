import React from 'react';
import { Link } from 'react-router';
import { fetchUserEvents } from '../../../data/actions';
import { EventListing } from './EventListing';

export class EventList extends React.Component {
  constructor() {
    super();
    fetchUserEvents();
  }
  render() {
    const events = this.props.userEvents;
    console.log(this.props.userEvents);
    const renderEvents = () =>
      Object.keys(events).map((event) => {
        const eventDetails = events[event];
        return (
          <EventListing key={event} id={event} {...eventDetails} />
        );
      });
    return (
      <div>
        <h1>Events List</h1>
        {renderEvents()}
      </div>
    );
  }
}

import React from 'react';
import { NavbarEvent } from '../navbar/NavbarEvent';

export const EventBase = props => (
  <div>
    <div className="main-container">
      {props.children}
    </div>
  </div>
);

EventBase.propTypes = {
  params: React.PropTypes.shape({
    orgId: React.PropTypes.string,
    eventId: React.PropTypes.string,
  }),
  children: React.PropTypes.node,
};

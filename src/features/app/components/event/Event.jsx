import React from 'react';
import { Link } from 'react-router';
import * as api from '../../../data/api';
import { Admission } from './admission/Admission';
import { Income } from './Income';
import * as actions from '../../../data/actions';

export class Event extends React.Component {
  componentWillMount() {
    const { orgId, eventId } = this.props.params;
    api.fetchEvent(orgId, eventId);
    const navStatus = 'event';
    this.props.dispatch(actions.setNavBar(navStatus));
  }
  render() {
    const { orgId, eventId } = this.props.params;
    return (
      <div>
        <Link to={`organization/details/${orgId}`}>
          <button className="button">Back</button>
        </Link>
        <h1>{this.props.event.name}</h1>
        <h4>{this.props.event.date}</h4>
        <Admission
          orgId={orgId}
          eventId={eventId}
          tickets={this.props.event.tickets}
          loading={this.props.event.loading}
        />
        <Income
          tickets={this.props.event.tickets}
        />
      </div>
    );
  }
}

Event.propTypes = {
  name: React.PropTypes.string,
  // eslint-disable-next-line
  event: React.PropTypes.shape({
    name: React.PropTypes.string,
    date: React.PropTypes.string,
    tickets: React.PropTypes.object,
    loading: React.PropTypes.string,
  }),
  // eslint-disable-next-line
  params: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

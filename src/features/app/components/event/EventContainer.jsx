import { connect } from 'react-redux';
import { Event } from './Event';

const mapStateToProps = state => ({
  orgs: state.data.userOrganizations,
  event: state.data.event,
});

export const EventContainer = connect(mapStateToProps)(Event);

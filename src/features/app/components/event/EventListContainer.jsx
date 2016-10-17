import { connect } from 'react-redux';
import { EventList } from './EventList';

function mapStateToProps(state) {
  return {
    user: state.data.user,
    userEvents: state.data.userEvents,
  };
}

export const EventListContainer = connect(mapStateToProps)(EventList);

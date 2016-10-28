import { connect } from 'react-redux';
import { EventBase } from './EventBase';

const mapStateToProps = (state) => {
  return {
    orgs: state.data.userOrganizations,
  };
};

export const EventBaseContainer = connect(mapStateToProps)(EventBase);

import { connect } from 'react-redux';
import { AddEvent } from './AddEvent';

function mapStateToProps(state) {
  return {
    event: state.data.event,
    user: state.data.user,
  };
}

export const AddEventContainer = connect(mapStateToProps)(AddEvent);

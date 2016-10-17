import { connect } from 'react-redux';
import { Volunteers } from './Volunteers';

const mapStateToProps = state => ({ user: state.data.user });

export const VolunteersContainer = connect(mapStateToProps)(Volunteers);

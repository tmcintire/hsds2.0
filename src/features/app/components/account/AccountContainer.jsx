import { connect } from 'react-redux';
import { Account } from './Account';

const mapStateToProps = state => ({ user: state.data.user });

export const AccountContainer = connect(mapStateToProps)(Account);

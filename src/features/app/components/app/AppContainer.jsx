import { connect } from 'react-redux';
import { App } from './App';

const mapStateToProps = state => ({
  user: state.data.user,
});

export const AppContainer = connect(mapStateToProps)(App);

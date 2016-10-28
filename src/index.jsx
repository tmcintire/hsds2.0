import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import app from './features/app';
import firebase from '../src/firebase/';
import * as actions from '../src/features/data/actions';
import * as api from './features/data/api';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.getUser(user));
    api.fetchUserOrganizations(user.uid);
  } else if (!user) {
    store.dispatch(actions.signOut());
  }
});

const {
  AppContainer,
  LoginContainer,
  Register,
  UserHomeContainer,
  OrganizationContainer,
  OrganizationBaseContainer,
  EventContainer,
  EventBaseContainer,
  AddEvent,
  AddOrganization,
  AddTicket,
} = app.components;

// const requireLogin = (nextState, replace, next) => {
//   if (!firebase.auth().currentUser) {
//     replace('/login');
//   }
//   next();
// };
//
// const redirectIfLoggedIn = (nextState, replace, next) => {
//   if (firebase.auth().currentUser) {
//     replace('/events');
//   }
//   next();
// };

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={UserHomeContainer} />
        <Route path="login" component={LoginContainer} />
        <Route path="register" component={Register} />
        <Route path="home" component={UserHomeContainer} />
        <Route path="organization" component={OrganizationBaseContainer}>
          <Route path="addorganization" component={AddOrganization} />
          <Route path="details/:orgId" component={OrganizationContainer} />
          <Route path=":orgId/addevent" component={AddEvent} />
        </Route>
        <Route path="organization/:orgId/event" component={EventBaseContainer}>
          <Route path="details/:eventId" component={EventContainer} />
          <Route path="details/:eventId/addticket" component={AddTicket} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import app from './features/app';
import firebase from './firebase';
import { getUser } from '../src/features/data/actions';

getUser();

const {
  AppContainer,
  LoginContainer,
  AccountContainer,
  VolunteersContainer,
  AddVolunteer,
  AddEventContainer,
  EventListContainer,
  Register,
} = app.components;

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/login');
  }
  next();
};

const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={EventListContainer} onEnter={requireLogin} />
        <Route path="volunteers" component={VolunteersContainer} onEnter={requireLogin} />
        <Route path="addvolunteer" component={AddVolunteer} onEnter={requireLogin} />
        <Route path="account" component={AccountContainer} onEnter={requireLogin} />
        <Route path="addevent" component={AddEventContainer} onEnter={requireLogin} />
        <Route path="login" component={LoginContainer} onEnter={redirectIfLoggedIn} />
        <Route path="register" component={Register} />
        <Route path="event/:id" component={VolunteersContainer} onEnter={requireLogin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

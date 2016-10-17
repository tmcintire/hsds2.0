import firebase, { firebaseRef } from '../../firebase/';
import store from '../../store';

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';
export const ADD_EVENT = 'ADD_EVENT';
export const FETCH_USER_EVENTS = 'FETCH_USER_EVENTS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const NO_LOGIN_ERROR = 'NO_LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

const eventsRef = firebaseRef.child('events');
const usersRef = firebaseRef.child('users');

// Get the current user from firebase
export function getUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch({
        type: SET_USER,
        user,
      });
    }
  });
}

export function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
    const userRef = usersRef.child(user.uid);
    userRef.set({
      email: user.email,
    });
  });
}

// Sign into firebase
export function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).catch((err) => {
    // Take the user to the events page once the sign in is completed
    if (err) {
      store.dispatch({
        type: LOGIN_ERROR,
      });
    }
  }).then((err) => {
    if (err) {
      store.dispatch({
        type: NO_LOGIN_ERROR,
      });
      window.location = '#/';
    }
  });
}

// Sign out
export function signOut() {
  firebase.auth().signOut().then(() => {
    window.location = '#/login';
    store.dispatch({
      type: UNSET_USER,
    });
    store.dispatch({
      type: LOGOUT,
    });
  });
}

export function fetchUserEvents() {
  // Fetch the current user
  const currentUser = firebase.auth().currentUser;
  const userid = currentUser.uid;

  // Create the firebase reference
  const user = usersRef.child(userid);
  const userEventsRef = user.child('events');

  // Get the list of events under the user and place it in an array
  const parsedEvents = [];
  const eventsArray = [];
  userEventsRef.on('value', (snapshot) => {
    const userEvents = snapshot.val() || {};
    Object.keys(userEvents).forEach((event) => {
      parsedEvents.push(event);
    });

    /* Iterate through the events that the user is a member of and
      add them to the redux store */
    for (let i = 0; i < parsedEvents.length; i += 1) {
      eventsRef.child(parsedEvents[i]).once('value', (newSnapshot) => {
        const eventData = newSnapshot.val() || {};
        console.log(parsedEvents[i]);
        eventsArray.push({
          ...eventData,
          id: parsedEvents[i],
        });
        console.log('New', eventsArray);
        store.dispatch({
          type: FETCH_USER_EVENTS,
          eventData: eventsArray,
        });
      });
    }
  });
}

export function addEvent(eventName, userId) {
  const userRef = usersRef.child(userId);
  const userEvents = userRef.child('events');
  const newEventKey = eventsRef.push().key; // get the key for the new event
  // set the data on the new event
  eventsRef.child(newEventKey).set({
    name: eventName,
    members: {
      [userId]: 'true',
    },
  });
  userEvents.update({
    [newEventKey]: 'true',
  });
  store.dispatch({
    type: ADD_EVENT,
    eventName,
  });
}


// Add a volunteer to the system
export function addVolunteer(volunteer) {
  const events = firebaseRef.child('events');
  const event = events.child(0);
  const volunteers = event.child('volunteers');

  volunteers.push().set({
    name: volunteer.name,
    phone: volunteer.phone,
    email: volunteer.email,
  });
}

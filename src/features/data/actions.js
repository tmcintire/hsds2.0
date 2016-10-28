import firebase, { firebaseRef } from '../../firebase/';

// const eventsRef = firebaseRef.child('events');
const usersRef = firebaseRef.child('users');
// const orgsRef = firebaseRef.child('organizations');

export const setNavBar = navStatus => ({
  type: 'SET_NAV_MENU',
  navStatus,
});

export const clearEvent = () => ({
  type: 'CLEAR_EVENT',
});

// Get the current user from firebase
export function getUser(user) {
  return (dispatch) => {
    dispatch({ type: 'FETCHING_USER' });
    dispatch({
      type: 'SET_USER',
      user,
    });
  };
}

// Create a new user
export function createUser(user) {
  firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((newUser) => {
    const userRef = usersRef.child(newUser.uid);
    userRef.set({
      name: user.name,
      email: user.email,
    });
  });
  window.location = '#/events';
}

// Sign into firebase
export const loginError = () => ({
  type: 'LOGIN_ERROR',
});

// Sign out
export const signOut = () => ({
  type: 'LOGOUT',
});

export function fetchUserOrganizations(organizationData) {
  // eslint-disable-next-line
  return function (dispatch) {
    dispatch({
      type: 'START_FETCHING_ORGANIZATIONS',
    });
    dispatch({
      type: 'FETCH_USER_ORGANIZATIONS',
      payload: organizationData,
    });
  };
}

export function fetchEventData(eventData) {
  // eslint-disable-next-line
  return function (dispatch) {
    dispatch({
      type: 'START_FETCHING_EVENT',
    });
    dispatch({
      type: 'FETCHED_EVENT_DATA',
      payload: eventData,
    });
  };
}

export const addEvent = (newEventKey, newEventData) => ({
  type: 'ADD_EVENT',
  payload: newEventData,
  key: newEventKey,
});

export const addTicket = (newTicketKey, newTicket) => ({
  type: 'ADD_TICKET',
  payload: newTicket,
  key: newTicketKey,
});


// export function getOrganizationData(orgId) {
//   orgsRef.child(orgId).on('value', (snapshot) => {
//     store.dispatch({
//       type: RECEIVED_CURRENT_ORGANIZATION,
//       org: snapshot.val(),
//     });
//   });
// }
//
//
// export function addEvent(eventName, userId) {
//   const userRef = usersRef.child(userId);
//   const userEvents = userRef.child('events');
//   const newEventKey = eventsRef.push().key; // get the key for the new event
//   // set the data on the new event
//   eventsRef.child(newEventKey).set({
//     name: eventName,
//     members: {
//       [userId]: 'true',
//     },
//   });
//   userEvents.update({
//     [newEventKey]: 'true',
//   });
//   store.dispatch({
//     type: ADD_EVENT,
//     eventName,
//   });
// }
//
// export function addOrganization(organization) {
//   const currentUser = firebase.auth().currentUser;
//   const userId = currentUser.uid;
//   const newOrg = orgsRef.push().key;
//
//   orgsRef.child(newOrg).set({
//     name: organization.name,
//     contact: organization.contact,
//     phone: organization.phone,
//     administrators: {
//       [userId]: 'true',
//     },
//   });
//
//   const userRef = usersRef.child(userId);
//   userRef.child('organizations').update({
//     [newOrg]: 'true',
//   });
// }

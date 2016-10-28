import firebase, { firebaseRef } from '../../firebase/';
import store from '../../store';
import * as actions from '../data/actions';

// Fetch all the organizations for the current logged in user
export function fetchUserOrganizations(userId) {
  // Find which organizations are under the username
  const organizationsArray = [];
  firebaseRef.child('users').child(userId).child('organizations').on('value', (snapshot) => {
    const userOrganizations = snapshot.val();
    /* Iterate through each organization, grab that information from firebase
       and push it to the organizationsArray */
    if (userOrganizations) {
      Object.keys(userOrganizations).forEach((organization) => {
        firebaseRef.child('organizations').child(organization).on('value', (newSnapshot) => {
          const organizationData = newSnapshot.val();
          organizationData.id = organization;
          store.dispatch(actions.fetchUserOrganizations(organizationData));
        });
      });
    }
  });
  return organizationsArray;
}

// fetch the event using the eventID and the organizations ID
export function fetchEvent(orgId, eventId) {
  firebaseRef.child('organizations').child(orgId).child('events').child(eventId)
    .on('value', (snapshot) => {
      const eventData = snapshot.val();
      store.dispatch(actions.fetchEventData(eventData));
    });
}

// add an event using the current organization ID
export function addEvent(orgId, newEvent) {
  const newEventKey = firebaseRef.child('organizations').child(orgId).child('events').push().key;
  firebaseRef.child('organizations')
    .child(orgId)
    .child('events')
    .child(newEventKey)
    .set(newEvent);
  store.dispatch(actions.addEvent(newEventKey, newEvent));
}

// get the current user that is logged into firebase
export function getCurrentUser() {
  const currentUser = firebase.auth().currentUser;
  return currentUser.uid;
}

export function addOrganization(organization) {
  const currentUser = firebase.auth().currentUser;
  const userId = currentUser.uid;
  const newOrgKey = firebaseRef.child('organizations').push().key;

  firebaseRef.child('organizations').child(newOrgKey).set({
    name: organization.name,
    contact: organization.contact,
    phone: organization.phone,
    administrators: {
      [userId]: 'true',
    },
  });
  firebaseRef.child('users').child(userId).child('organizations').update({
    [newOrgKey]: 'true',
  });
}

// Add a new ticket
export function addTicket(orgId, eventId, newTicket) {
  // set the firebase reference and get the key for the newly added item
  const newTicketKey = firebaseRef.child('organizations')
  .child(orgId)
  .child('events')
  .child(eventId)
  .child('tickets')
  .push().key;

  // use the new key and push data to that key
  firebaseRef.child('organizations')
  .child(orgId)
  .child('events')
  .child(eventId)
  .child('tickets')
  .child(newTicketKey)
  .update(newTicket);

  store.dispatch(actions.addTicket(newTicketKey, newTicket));
}

// Function to modify tickets (increase or decrease)
export function modifyTicket(orgId, eventId, typeId, count, price, edit) {
    // Set firebase references
  const orgsRef = firebaseRef.child('organizations');
  const orgRef = orgsRef.child(orgId);
  const eventsRef = orgRef.child('events');
  const eventRef = eventsRef.child(eventId);
  const ticketsRef = eventRef.child('tickets');
  const ticketRef = ticketsRef.child(typeId);

  let newCount;
  if (edit === 'add') { // check if add
    newCount = count + 1;
  } else if (edit === 'remove') { // check if remove
    newCount = count - 1;
  }

  // set the new total
  const newTotal = newCount * price;

  // Update the ticket in the database
  ticketRef.update({
    count: newCount,
    total: newTotal,
  });
}

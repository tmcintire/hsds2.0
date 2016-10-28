import { combineReducers } from 'redux';

const user = (state = [], action) => {
  switch (action.type) {
    case 'FETCHING_USER':
      return {
        ...state,
        loading: true,
      };
    case 'SET_USER':
      return {
        ...state,
        email: action.user.email,
        id: action.user.uid,
        name: action.user.displayName,
        loading: false,
      };
    case 'LOGIN_ERROR':
      return {
        error: 'That username or password is not correct',
      };
    case 'NO_LOGIN_ERROR':
      return {
        error: '',
      };
    case 'SET_NAV_MENU':
      return {
        ...state,
        navStatus: action.navStatus,
      };
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

const userOrganizations = (state = [], action) => {
  switch (action.type) {
    case 'START_FETCHING_ORGANIZATIONS':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_USER_ORGANIZATIONS':
      return {
        ...state,
        loading: false,
        orgs: {
          ...state.orgs,
          [action.payload.id]: action.payload,
        },
      };
    case 'ADD_EVENT':
      return {
        ...state,
        orgs: {
          ...state.orgs,
          [action.key]: action.payload,
        },
      };
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

const event = (state = [], action) => {
  switch (action.type) {
    case 'START_FETCHING_EVENT':
      return {
        ...state,
        loading: true,
      };
    case 'FETCHED_EVENT_DATA':
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case 'CLEAR_EVENT':
      return [];
    case 'ADD_TICKET':
      return {
        ...state,
        tickets: {
          ...state.tickets,
          [action.key]: action.payload,
        },
      };
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};

// const organizationEvents = (state = [], action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_ORGANIZATION_EVENTS:
//       return {
//         ...state,
//         ...action.orgData,
//       };
//     case actionTypes.LOGOUT:
//       return [];
//     default:
//       return state;
//   }
// };

//
// const currentOrganization = (state = [], action) => {
//   switch (action.type) {
//     case actionTypes.RECEIVED_CURRENT_ORGANIZATION:
//       return {
//         ...state,
//         ...action.org,
//       };
//     default:
//       return state;
//   }
// };

export default combineReducers({
  user,
  event,
  userOrganizations,
  // organizationEvents,
  // currentOrganization,
});

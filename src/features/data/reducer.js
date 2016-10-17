import { combineReducers } from 'redux';
import * as actionTypes from './actions';

const user = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        email: action.user.email,
        id: action.user.uid,
      };
    case actionTypes.UNSET_USER:
      return {
        ...state,
        email: null,
        id: null,
      };
    case actionTypes.LOGIN_ERROR:
      return {
        error: 'That username or password is not correct',
      };
    case actionTypes.NO_LOGIN_ERROR:
      return {
        error: '',
      };
    default:
      return state;
  }
};

const event = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_EVENT:
      return {
        ...state,
        ...action.eventData,
      };
    default:
      return state;
  }
};

const userEvents = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_EVENTS:
      return {
        ...state,
        ...action.eventData,
      };
    case actionTypes.LOGOUT:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  user,
  event,
  userEvents,
});

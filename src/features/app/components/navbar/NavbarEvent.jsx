import React from 'react';
import { Link } from 'react-router';
import firebase from '../../../../firebase/';

export class NavbarEvent extends React.Component {
  logout() {
    firebase.auth().signOut();
  }
  render() {
    const { orgId, eventId } = this.props;
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">HSDS</li>
            <li><Link to={`organization/${orgId}/event/details/${eventId}/addticket`}>Add Tickets</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>{this.props.user}</li>
            <li><Link to="login" onClick={e => this.logout(e)}>Logout</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

NavbarEvent.propTypes = {
  orgId: React.PropTypes.string,
  eventId: React.PropTypes.string,
};

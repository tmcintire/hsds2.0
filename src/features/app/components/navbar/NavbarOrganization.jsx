import React from 'react';
import { Link } from 'react-router';
import firebase from '../../../../firebase/';

export class NavbarOrganization extends React.Component {
  // eslint-disable-next-line
  logout() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">HSDS</li>
            <li><Link to={`organization/${this.props.orgId}/addevent`}>Add Event</Link></li>
            <li><Link to="">Past Events</Link></li>
            <li><Link to="">Records</Link></li>
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

NavbarOrganization.propTypes = {
  orgId: React.PropTypes.string,
  user: React.PropTypes.string,
};

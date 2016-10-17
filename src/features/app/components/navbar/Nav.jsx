import React from 'react';
import { Link } from 'react-router';
import { signOut } from '../../../data/actions';
import './nav.scss';

export class Nav extends React.Component{
  logOut() {
    signOut();
  }
  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link to="">Events</Link></li>
          <li><Link to="addevent">Add Event</Link></li>
          <li><Link to="volunteers">Volunteers</Link></li>
          <li><Link to="">Tasks</Link></li>
          <li><Link to="">Schedule</Link></li>
          <li><Link to="account">Account</Link></li>
          <li><Link to="login">Login</Link></li>
          <li><Link to="" onClick={() => this.logOut()}>Logout</Link></li>
          <li><Link to="register">Register</Link></li>
          {this.props.user.email}
        </ul>
      </div>
    );
  }
}

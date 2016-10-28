import React from 'react';
import { Link } from 'react-router';
import firebase from '../../../../firebase/';

export class NavbarHome extends React.Component {
  logout() {
    firebase.auth().signOut();
  }
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">HSDS</li>
            <li><Link to="organization/addorganization">Add Organization</Link></li>
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

NavbarHome.propTypes = {
  signOut: React.PropTypes.func,
  user: React.PropTypes.string,
};

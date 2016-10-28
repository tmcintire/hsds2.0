import React from 'react';
import { Link } from 'react-router';
import './_nav.scss';
import firebase from '../../../../firebase/';

export class Nav extends React.Component {
  static logout() {
    firebase.auth().signOut();
  }
  render() {
    console.log(this.props);
    return (
      <div className="nav">
        <ul>
          <li><strong>HSDS</strong></li>
          <li><Link to="login">Login</Link></li>
          <li><Link to="register">Register</Link></li>
          <li className={this.props.nav}><Link to="">Test Link</Link></li>
          <li><Link to="login" onClick={() => this.logout()}>Logout</Link></li>
        </ul>
      </div>
    );
  }
}

Nav.propTypes = {
  nav: React.PropTypes.string,
};

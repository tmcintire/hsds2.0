import React from 'react';
import * as actions from '../../../data/actions';
import firebase from '../../../../firebase/';

export class Login extends React.Component {
  login() {
    const email = this.email.value;
    const password = this.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch((err) => {
      if (err) {
        this.props.dispatch(actions.loginError());
      }
    }).then((success) => {
      if (success) {
        window.location = '#/home';
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" ref={(ref) => { this.email = ref; }} />
        <input type="password" ref={(ref) => { this.password = ref; }} />
        <button onClick={() => this.login()}>Login</button>
        <br />
        <p className="login-error">{this.props.error}</p>
      </div>
    );
  }
}

Login.propTypes = {
  error: React.PropTypes.string,
  dispatch: React.PropTypes.func,
};

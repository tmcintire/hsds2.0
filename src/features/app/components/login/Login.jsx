import React from 'react';
import './login.scss';
import { signIn, signOut, getUser } from '../../../data/actions';

export class Login extends React.Component {
  login() {
    signIn(this.email.value, this.password.value);
    getUser();
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
};

import React from 'react';
import { createUser } from '../../../data/actions';

export class Register extends React.Component {
  handleRegisterUser() {
    const email = this.email.value;
    const password = this.password.value;
    createUser(email, password);
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" ref={(ref) => { this.email = ref; }} placeholder="Email" />
          <input type="text" ref={(ref) => { this.password = ref; }} placeholder="Password" />
          <button onClick={() => this.handleRegisterUser()} >Register</button>
        </form>
      </div>
    );
  }
}

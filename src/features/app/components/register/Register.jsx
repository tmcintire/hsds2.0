import React from 'react';
import { createUser } from '../../../data/actions';

export class Register extends React.Component {
  handleRegisterUser(e) {
    e.preventDefault();
    const user = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
    };
    createUser(user);
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" ref={(ref) => { this.name = ref; }} placeholder="Name" />
          <input type="text" ref={(ref) => { this.email = ref; }} placeholder="Email" />
          <input type="text" ref={(ref) => { this.password = ref; }} placeholder="Password" />
          <button onClick={e => this.handleRegisterUser(e)} >Register</button>
        </form>
      </div>
    );
  }
}

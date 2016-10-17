import React from 'react';
import { addVolunteer, getUser } from '../../../data/actions';

export class AddVolunteer extends React.Component {
  onSubmit() {
    const volunteer = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
    };
    getUser();
    addVolunteer(volunteer);
    window.location = '#/volunteers';
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" ref={(ref) => { this.name = ref; }} placeholder="Volunteers Name" />
          <input type="text" ref={(ref) => { this.email = ref; }} placeholder="Email Address" />
          <input type="text" ref={(ref) => { this.phone = ref; }} placeholder="Phone Number" />
          <button type="button" onClick={() => this.onSubmit()}>Submit</button>
        </form>
      </div>
    );
  }
}

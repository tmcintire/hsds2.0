import React from 'react';
import * as api from '../../../data/api';

export class AddOrganization extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const newOrg = {
      name: this.name.value,
      contact: this.contact.value,
      phone: this.phone.value,
    };
    api.addOrganization(newOrg);
    window.location = '#/';
  }
  render() {
    return (
      <form className="custom-form">
        <input type="text" ref={(ref) => { this.name = ref; }} placeholder="Organization Name" />
        <input type="text" ref={(ref) => { this.contact = ref; }} placeholder="Contact Name" />
        <input type="text" ref={(ref) => { this.phone = ref; }} placeholder="Contact Phone #" />
        <button type="button" className="button" onClick={e => this.handleSubmit(e)}>Submit</button>
      </form>
    );
  }
}

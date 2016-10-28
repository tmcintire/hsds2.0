import React from 'react';
import * as api from '../../../data/api';

export class AddTicket extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { orgId, eventId } = this.props.params;
    const newTicket = {
      type: this.type.value,
      price: this.price.value,
      count: 0,
      total: 0,
    };
    api.addTicket(orgId, eventId, newTicket);
    window.location = `#/organization/${orgId}/event/details/${eventId}`;
  }
  render() {
    return (
      <form className="custom-form">
        <input type="text" ref={(ref) => { this.type = ref; }} placeholder="Ticket Type" />
        <input type="text" ref={(ref) => { this.price = ref; }} placeholder="Price" />
        <button type="button" className="button" onClick={e => this.handleSubmit(e)}>Submit</button>
      </form>
    );
  }
}

AddTicket.propTypes = {
  params: React.PropTypes.shape({
    orgId: React.PropTypes.string,
    eventId: React.PropTypes.string,
  }),
};

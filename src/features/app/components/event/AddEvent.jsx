import React from 'react';
import * as api from '../../../data/api';

export class AddEvent extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { orgId } = this.props.params;
    const newEvent = {
      name: this.name.value,
      date: this.date.value,
      time: this.time.value,
      fee: this.fee.value,
      max_fee: this.max_fee.value,
      band_min: this.band_min.value,
      cash: this.cash.value,
    };
    api.addEvent(orgId, newEvent);
    window.location = `#/organization/details/${orgId}`;
  }
  render() {
    return (
      <form className="custom-form">
        <input type="text" ref={(ref) => { this.name = ref; }} placeholder="Event name..." />
        <input type="text" ref={(ref) => { this.date = ref; }} placeholder="Date..." />
        <input type="text" ref={(ref) => { this.time = ref; }} placeholder="Time..." />
        <input type="text" ref={(ref) => { this.fee = ref; }} placeholder="Administrative Fee..." />
        <input type="text" ref={(ref) => { this.max_fee = ref; }} placeholder="Maximum Administrative Fee..." />
        <input type="text" ref={(ref) => { this.band_min = ref; }} placeholder="Band Minimum..." />
        <input type="text" ref={(ref) => { this.cash = ref; }} placeholder="Starting Cashbox Amount..." />
        <button type="button" className="button" onClick={e => this.handleSubmit(e)}>Submit</button>
      </form>
    );
  }
}

AddEvent.propTypes = {
  params: React.PropTypes.node,
};

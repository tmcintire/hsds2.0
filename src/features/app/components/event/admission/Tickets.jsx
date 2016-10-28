import React from 'react';
import * as api from '../../../../data/api';

export class Tickets extends React.Component {
  handleModifyTicket(edit) {
    const { orgId, eventId, typeId, count, price } = this.props;
    api.modifyTicket(orgId, eventId, typeId, count, price, edit);
  }
  render() {
    return (
      <tr className="ticket">
        <td>{this.props.type}</td>
        <td>${this.props.price}</td>
        <td>
          <button
            onClick={() => this.handleModifyTicket('add')}
            className="button success large custom-button"
          >
            <i className="fi-plus" />
          </button>
        </td>
        <td>
          <button
            onClick={() => this.handleModifyTicket('remove')}
            className="button alert large custom-button"
          >
            <i className="fi-minus" />
          </button>
        </td>
        <td>{this.props.count}</td>
        <td>${this.props.price * this.props.count}</td>
      </tr>
    );
  }
}

Tickets.propTypes = {
  eventId: React.PropTypes.string,
  orgId: React.PropTypes.string,
  typeId: React.PropTypes.string,
  count: React.PropTypes.string,
  price: React.PropTypes.string,
  type: React.PropTypes.string,
};

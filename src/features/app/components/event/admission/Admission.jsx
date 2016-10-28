import React from 'react';
import { Link } from 'react-router';
import { Tickets } from './Tickets';

export class Admission extends React.Component {
  render() {
    const { orgId, eventId, tickets, loading } = this.props;
    const renderTickets = () => {
      if (tickets !== undefined) {
        return Object.keys(tickets).map((ticket) => {
          const ticketInfo = tickets[ticket];
          return (
            <Tickets key={ticket} typeId={ticket} {...this.props} {...ticketInfo} />
          );
        });
      }
      return true;
    };
    console.log(this.props);
    const renderIncome = () => {
      let ticketsArray = [];
      if (loading === false) {
        Object.keys(tickets).map((ticket) => {
          ticketsArray.push(tickets[ticket].total);
        });
        return ticketsArray.reduce((a, b) => a + b);
      }
    };
    return (
      <div>
        <Link to={`organization/${orgId}/event/details/${eventId}/addticket`}>
          Add Tickets
        </Link>
        <table className="table-styles">
          <thead>
            <tr>
              <th>Type</th>
              <th>Price</th>
              <th>Add</th>
              <th>Remove</th>
              <th>Count</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody id="tickets-table-body">
            {renderTickets()}
            <tr>
              <td colSpan="5">Total Income</td>
              <td>${renderIncome()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Admission.proptypes = {
  orgId: React.PropTypes.string,
  eventId: React.PropTypes.string,
};

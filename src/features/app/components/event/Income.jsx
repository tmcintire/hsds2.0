import React from 'react';
import { Link } from 'react-router';

export class Income extends React.Component {
  render() {
    const { tickets, loading } = this.props;
    const ticketsTotal = () => {
      let ticketsArray = [];
      if (loading === false) {
        Object.keys(tickets).map((ticket) => {
          ticketsArray.push(tickets[ticket].total);
        });
        return ticketsArray.reduce(function (a, b) {
          return a + b;
        });
      }
    };
    return (
      <table className="table-styles">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody id="tickets-table-body">
          <tr>
            <td colSpan="4">Total Income</td>
            {ticketsTotal()}
          </tr>
        </tbody>
      </table>
    );
  }
}

Income.propTypes = {
  tickets: React.PropTypes.number,
  loading: React.PropTypes.string,
};

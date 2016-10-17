import React from 'react';

export class Account extends React.Component {
  render() {
    return (
      <div>
        <h1>Account</h1>
        <hr />
        <p>{this.props.user.email}</p>
      </div>
    );
  }
}

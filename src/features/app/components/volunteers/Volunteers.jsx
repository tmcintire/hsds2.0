import React from 'react';
import { Link } from 'react-router';

export class Volunteers extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Volunteers Page</h1>
        <Link to="addvolunteer">Add Volunteer</Link>
      </div>
    );
  }
}

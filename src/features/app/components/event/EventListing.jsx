import React from 'react';
import { Link } from 'react-router';

export const EventListing = (props) => {
  console.log(props);
  return (
    <div>
      <Link to={'event/' + props.id}>{props.name}</Link>
    </div>
  );
};

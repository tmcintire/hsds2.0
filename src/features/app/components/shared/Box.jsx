import React from 'react';
import { Link } from 'react-router';

export const Box = (props) => {
  let link = '';
  if (props.type === 'event') {
    link = `organization/${props.orgId}/${props.type}/details/${props.id}`;
  } else if (props.type === 'organization') {
    link = `organization/details/${props.orgId}`;
  }
  return (
    <Link to={link} className="box">
      <button className="button expanded primary hollow">
        {props.name}
      </button>
    </Link>
  );
};

Box.propTypes = {
  type: React.PropTypes.string,
  id: React.PropTypes.string,
  name: React.PropTypes.string,
  orgId: React.PropTypes.string,
};

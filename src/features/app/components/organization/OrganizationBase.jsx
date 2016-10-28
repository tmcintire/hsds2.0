import React from 'react';

export const OrganizationBase = props => (
  <div>
    <div className="main-container">
      {props.children}
    </div>
  </div>
);

OrganizationBase.propTypes = {
  params: React.PropTypes.shape({
    orgId: React.PropTypes.string,
  }),
  children: React.PropTypes.node,
};

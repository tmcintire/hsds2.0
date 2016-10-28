import React from 'react';
import '../../../../styles/index.scss';
import { NavbarEvent, NavbarHome, NavbarOrganization } from '../../components';

export const App = (props) => {
  const orgId = props.params.orgId;
  const renderNav = () => {
    switch (props.user.navStatus) {
      case 'userhome':
        return <NavbarHome orgId={orgId} />;
      case 'organization':
        return <NavbarOrganization orgId={orgId} />;
      case 'event':
        return <NavbarEvent orgId={orgId} />;
      default:
        return <NavbarHome orgId={orgId} />;
    }
  };
  return (
    <div>
      {renderNav()}
      <div className="main-container">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node,
  user: React.PropTypes.shape({
    // eslint-disable-next-line
    navStatus: React.PropTypes.string,
  }),
  params: React.PropTypes.shape({
    orgId: React.PropTypes.string,
  }),
};

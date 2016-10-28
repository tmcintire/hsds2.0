import { connect } from 'react-redux';
import { OrganizationBase } from './OrganizationBase';

const mapStateToProps = (state) => {
  return {
    orgs: state.data.userOrganizations,
  };
};

export const OrganizationBaseContainer = connect(mapStateToProps)(OrganizationBase);

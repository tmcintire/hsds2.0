import { connect } from 'react-redux';
import { Organization } from './Organization';

const mapStateToProps = (state) => {
  return {
    orgs: state.data.userOrganizations,
  };
};

export const OrganizationContainer = connect(mapStateToProps)(Organization);

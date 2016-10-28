import { connect } from 'react-redux';
import { UserHome } from './UserHome';

const mapStateToProps = (state) => {
  return {
    user: {
      id: state.data.user.id,
      email: state.data.user.email,
      loading: state.data.user.loading,
    },
    orgs: state.data.userOrganizations,
  };
};

export const UserHomeContainer = connect(mapStateToProps)(UserHome);

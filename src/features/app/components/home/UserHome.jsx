import React from 'react';
import { Box } from '../shared/Box';
import './_userhome.scss';
import * as actions from '../../../data/actions';

export class UserHome extends React.Component {
  constructor(props) {
    super(props);
    const navStatus = 'userhome';
    this.props.dispatch(actions.setNavBar(navStatus));
  }
  render() {
    const { orgs } = this.props.orgs;
    const type = 'organization';
    const renderUserInfo = () => {
      if (this.props.user.loading === false) {
        const renderOrgs = () => {
          if (orgs && this.props.orgs.loading === false) {
            return Object.keys(orgs).map(org => (
              <Box key={org} orgId={org} type={type} {...orgs[org]} />
            ));
          }
          return <div><h4>No organizations</h4></div>;
        };
        return (
          <div>
            <h4 className="text-center">My Organizations</h4>
            <hr />
            {renderOrgs()}
          </div>
        );
      }
      return false;
    };
    return (
      <div>
        <div className="container">
          {renderUserInfo()}
        </div>
      </div>
    );
  }
}

UserHome.propTypes = {
  user: React.PropTypes.shape({
    email: React.PropTypes.string,
    loading: React.PropTypes.boolean,
  }),
  // eslint-disable-next-line
  orgs: React.PropTypes.object,
};

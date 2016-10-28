import React from 'react';
import { Link } from 'react-router';
import { Box } from '../shared/Box';
import * as actions from '../../../data/actions';

export class Organization extends React.Component {
  constructor(props) {
    super(props);
    const navStatus = 'organization';
    this.props.dispatch(actions.setNavBar(navStatus));
    this.props.dispatch(actions.clearEvent());
  }
  render() {
    const orgId = this.props.params.orgId; // get the organization id from the url parameters
    let org = '';
    const renderOrganization = () => {
      // eslint-disable-next-line
      if (this.props.orgs.loading === false) { // ensure that loading from firebase is finished
        const findById = (object, id) => {
          // eslint-disable-next-line
          for (const i in object) { // return only the object that matches the organization we want
            if (i === id) {
              return object[i];
            }
          }
          return true;
        };
        // eslint-disable-next-line
        const orgsList = this.props.orgs.orgs;
        org = findById(orgsList, orgId); // get the organization from the store we want to look at
        const type = 'event';
        const renderEvents = () => {
          if (org.events) {
            return Object.keys(org.events).map(event => (
              <Box key={event} type={type} orgId={orgId} id={event} {...org.events[event]} />
            ));
          }
          return <div><h4>No Events</h4></div>;
        };
        return (
          <div>
            <Link to="#/">
              <button className="button">
                Back
              </button>
            </Link>
            <h1 className="text-center">{org.name}</h1>
            {renderEvents()}
          </div>
        );
      }
      return true;
    };

    return (
      <div>
        {renderOrganization()}
      </div>
    );
  }
}

Organization.propTypes = {
  params: React.PropTypes.shape({
    orgId: React.PropTypes.string,
  }),
  dispatch: React.PropTypes.func,
};

import React from 'react';
import './app.scss';
import { Nav } from '../navbar/Nav';

export class App extends React.Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <Nav user={this.props.user} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element,
};

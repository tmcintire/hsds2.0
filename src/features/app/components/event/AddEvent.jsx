import React from 'react';
import { addEvent } from '../../../data/actions';

export class AddEvent extends React.Component {
  handleAddEvent() {
    const eventName = this.name.value;
    const userid = this.props.user.id;
    addEvent(eventName, userid);
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" ref={(ref) => { this.name = ref; }} placeholder="Event name..." />
          <button type="button" onClick={() => this.handleAddEvent()}>Submit</button>
        </form>
      </div>
    );
  }
}

AddEvent.propTypes = {
  user: React.PropTypes.shape({
    id: React.PropTypes.string,
  }),
};

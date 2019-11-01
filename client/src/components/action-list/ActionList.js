import React, { Component } from 'react';
import axios from 'axios';
import ActionListItem from './ActionListItem';

class ActionList extends Component {
  state = {
    actionListItems: []
  };

  componentDidMount() {
    axios
      .get('api/action-list/')
      .then(res => this.setState({ actionListItems: res.data }));
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name of Task</th>
            <th>Delete Item</th>
          </tr>
        </thead>

        <tbody>
          <ActionListItem actionListItems={this.state.actionListItems} />
        </tbody>
      </table>
    );
  }
}

export default ActionList;

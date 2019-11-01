import React, { Component } from 'react';
import axios from 'axios';
import DeleteActionListItem from './DeleteActionListItem';

class ActionListItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.actionListItems);
  }

  render() {
    return this.props.actionListItems.map((actionItem, i) => (
      <tr>
        <td>
          <label>
            <input onChange={this.props.markComplete} type="checkbox" />
            <span></span>
          </label>
        </td>
        <td key={i}>{actionItem.title}</td>
        <td>
          <DeleteActionListItem key={i} actionListItemId={actionItem.id} />
        </td>
      </tr>
    ));
  }
}

export default ActionListItem;

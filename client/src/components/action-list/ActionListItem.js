import React, { Component } from 'react';
import axios from 'axios';
import DeleteActionListItem from './DeleteActionListItem';

class ActionListItem extends Component {
  render() {
    return this.props.actionListItems.map((actionItem, i) => (
      <tr>
        <td key={i}>{actionItem.title}</td>
        <td>
          <DeleteActionListItem />
        </td>
      </tr>
    ));
  }
}

export default ActionListItem;

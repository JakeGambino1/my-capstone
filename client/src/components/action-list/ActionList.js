import React, { Component } from 'react';
import axios from 'axios';
import ActionListItem from './ActionListItem';

class ActionList extends Component {
  render() {
    return (
      <div>
        <ActionListItem />
        <p>Test</p>
      </div>
    );
  }
}

export default ActionList;

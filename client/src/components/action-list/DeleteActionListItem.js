import React, { Component } from 'react';
import axios from 'axios';

class DeleteActionListItem extends Component {
  handleDelete() {
    axios.delete(`/api/action-list/${this.props.actionListItemId}`);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDelete} className="btn">
          Delete
        </button>
      </div>
    );
  }
}

export default DeleteActionListItem;

import React, { Component } from 'react';
import axios from 'axios';

class DeleteActionListItem extends Component {
  handleDelete(e) {
    console.log(e.target.name);
    axios.delete('/api/action-list/' + e.target.name);
  }

  render() {
    const data = this.props.actionListItemId;
    console.log(data);
    return (
      <div>
        <button onClick={this.handleDelete} name={data} className="btn">
          Delete
        </button>
      </div>
    );
  }
}

export default DeleteActionListItem;

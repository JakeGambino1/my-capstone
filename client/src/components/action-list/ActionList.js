import React, { Component } from 'react';
import axios from 'axios';
import ActionListItem from './ActionListItem';
import AddActionListItem from './AddActionListItem';

class ActionList extends Component {
  state = {
    actionListItems: []
  };

  componentDidMount() {
    axios
      .get('api/action-list/')
      .then(res => this.setState({ actionListItems: res.data }));
    console.log(this.state);
  }

  deleteActionListItem = id => {
    axios
      .delete(`/api/action-list/${id}`)
      .then(res => {
        this.setState({
          actionListItems: [
            ...this.state.actionListItems.filter(
              actionItem => actionItem.id !== id
            )
          ]
        });
      })
      .catch(err => console.error(err));
  };

  addActionListItem = title => {
    axios.post(`/api/action-list`, { title, isComplete: false }).then(res => {
      this.setState({
        actionListItems: [...this.state.actionListItems, res.data]
      });
    });
  };

  render() {
    return (
      <div>
        <h4>Action List</h4>
        <AddActionListItem addActionListItem={this.addActionListItem} />
        <table>
          <thead>
            <tr>
              <th>Completed?</th>
              <th>Name of Task</th>
              <th>Delete Item</th>
            </tr>
          </thead>

          <tbody>
            <ActionListItem
              actionListItems={this.state.actionListItems}
              markComplete={this.markComplete}
              deleteActionListItem={this.deleteActionListItem}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActionList;

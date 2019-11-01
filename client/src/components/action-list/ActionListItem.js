import React, { Component } from 'react';
import axios from 'axios';

class ActionListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.title.value);
    axios.post('api/action-list/', {
      title: e.target.title.value
    });
  };

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="col s9">
            <div className="input-field col s12">
              <input
                name="title"
                id="title-field"
                type="text"
                className="validate"
              />
              <label htmlFor="title-field">Action Item</label>
            </div>
          </div>
          <div className="col s3">
            <button className="btn" type="submit">
              Add Action Item
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ActionListItem;

import React, { Component } from 'react';
import axios from 'react';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    axios.post('api/written-content/').then(res => {
      const data = res.data;
      console.log(data);
    });

    console.log('test');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="col s12">
          <div className="input-field col s12">
            <input
              name="title"
              id="title-field"
              type="text"
              className="validate"
            />
            <label htmlFor="title-field">Title</label>
          </div>
        </div>
        <div className="input-field col s12">
          <textarea
            name="content"
            id="content-field"
            className="materialize-textarea"
          ></textarea>
          <label htmlFor="content-field">Content Body</label>
        </div>
        <button className="btn">Create Post</button>
      </form>
    );
  }
}

export default CreatePost;

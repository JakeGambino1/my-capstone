import React, { Component } from 'react';
import axios from 'axios';

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
    console.log(e.target.title.value);
    console.log(e.target.content.value);
    axios.post('api/written-content/', {
      title: e.target.title.value,
      content: e.target.content.value
    });
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
        <button className="btn" type="submit">
          Create Post
        </button>
      </form>
    );
  }
}

export default CreatePost;

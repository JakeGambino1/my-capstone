import React, { Component } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

class CreatePost extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      title: '',
      content: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/written-content/', {
        user: this.context.id,
        title: e.target.title.value,
        content: e.target.content.value
      })
      .then(res => {
        console.log(res);
        this.setState({
          user: res.user,
          title: res.title,
          content: res.content
        });
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

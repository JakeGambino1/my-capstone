import React, { Component } from 'react';

class CreatePost extends Component {
  handleSubmit = e => {
    e.preventDefault();
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

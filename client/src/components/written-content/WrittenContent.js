import React, { Component } from 'react';
import axios from 'axios';

class WrittenContent extends Component {
  upvote(e) {
    // Need an If statement where If the user already liked that post, then it unlikes it
    console.log(e.target.name);
    axios.put('/api/posts/like/' + e.target.name);
  }

  render() {
    return this.props.writtenContentPosts.map((content, i) => (
      <article className="written-content-item" key={i}>
        <h5 className="written-content-title">{content.title}</h5>
        <h6>
          by, {content.firstName} {content.lastName}
        </h6>
        <div className="written-content-content">
          <p>{content.content}</p>
        </div>
        <button onClick={this.upvote} name={content._id} className="btn">
          <i className="material-icons">thumb_up</i> {content.likes.length}
        </button>
      </article>
    ));
  }
}

export default WrittenContent;

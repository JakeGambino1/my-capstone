import React, { Component } from 'react';

class WrittenContent extends Component {
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
        <button className="btn">Like</button>
      </article>
    ));
  }
}

export default WrittenContent;

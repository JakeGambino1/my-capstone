import React, { Component } from 'react';
import WrittenContent from './WrittenContent';
import axios from 'axios';

class WrittenContentContainer extends Component {
  state = {
    writtenContent: []
  };

  componentDidMount() {
    axios
      .get('api/written-content/')
      .then(res => this.setState({ writtenContent: res.data }));
  }

  render() {
    return (
      <section className="written-content">
        <WrittenContent writtenContentPosts={this.state.writtenContent} />
      </section>
    );
  }
}

export default WrittenContentContainer;

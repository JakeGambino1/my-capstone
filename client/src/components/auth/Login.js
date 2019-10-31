import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailInput = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePasswordInput = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(`${this.state.email} ${this.state.password}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Email:{' '}
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmailInput}
        />
        Password:{' '}
        <input
          type="text"
          value={this.state.password}
          onChange={this.handlePasswordInput}
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    );
  }
}
export default Login;

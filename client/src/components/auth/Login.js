import React, { Component } from 'react';
import M from 'materialize-css';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    M.AutoInit();
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
    // axios.post('api/users/', {
    //   name: e.target.firstName.value + ' ' + e.target.lastName.value,
    //   email: e.target.email.value,
    //   password: e.target.password.value
    // });
    console.log(`${this.state.email} ${this.state.password}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Login</h4>
        <div className="row">
          <div className="input-field col m6">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="text"
              value={this.state.email}
              onChange={this.handleEmailInput}
            />
          </div>
          <div className="input-field col m6">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordInput}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    );
  }
}

export default Login;

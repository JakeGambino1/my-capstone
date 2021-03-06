import React, { Component } from 'react';
import M from 'materialize-css';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import jwt_decode from 'jwt-decode';

class Login extends Component {
  static contextType = UserContext;
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
    const { updateState } = this.context;
    let data = {};
    e.preventDefault();
    axios
      .post('api/auth/', {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        const decoded = jwt_decode(res.data.token);
        axios.get('api/profile/user/' + decoded.user.id).then(res => {
          data = res.data;
          let newInterests = [];
          data.interests.forEach(interest => {
            newInterests.push(interest);
          });
          updateState(
            data.user._id,
            data.user.name,
            newInterests,
            data.user.email,
            data.user.avatar,
            data.isMentor,
            data.social.youtube,
            data.social.linkedin,
            data.alternateTheme
          );
        });
      });
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

Login.contextType = UserContext;

export default Login;

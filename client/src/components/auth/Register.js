import React, { Component } from 'react';
import M from 'materialize-css';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleSubmit(e) {
    e.preventDefault();

    // console.log(e.target.firstName.value);
    // console.log(e.target.lastName.value);
    // console.log(e.target.email.value);
    // console.log(e.target.password.value);
    // console.log(e.target.password2.value);

    if (e.target.password.value !== e.target.password2.value) {
      return console.log('Passwords much match');
    }

    axios.post('api/users/', {
      name: e.target.firstName.value + ' ' + e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value
    });
  }

  render() {
    return (
      <div className="container">
        <h4>Register for an account</h4>
        <div className="row">
          <form onSubmit={this.handleSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  name="firstName"
                  id="first_name"
                  type="text"
                  className="validate"
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  name="lastName"
                  id="last_name"
                  type="text"
                  className="validate"
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="validate"
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="validate"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password2"
                  id="password2"
                  type="password"
                  className="validate"
                />
                <label htmlFor="password2">Confirm Password</label>
              </div>
            </div>
            <div>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;

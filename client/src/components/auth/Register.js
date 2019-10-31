import React, { Component } from 'react';
import M from 'materialize-css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.state = {
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: '',
    //   password2: ''
    // };
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });

    console.log(e.target.firstName.value);
    console.log(e.target.lastName.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(e.target.password2.value);

    // this.setState({
    //   firstName: e.firstName,
    //   lastName: e.lastName,
    //   email: e.email,
    //   password: e.password
    // });
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

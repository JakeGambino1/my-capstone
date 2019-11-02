import React, { Component } from 'react';
import M from 'materialize-css';
import axios from 'axios';

class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interests: '',
      bio: '',
      isMentor: false,
      youtube: '',
      linkedin: ''
    };
  }

  componentDidMount() {
    M.AutoInit();
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('api/profile/', {
      interests: e.target.email.value,
      bio: e.target.password.value,
      isMentor: e.target.isMentor.value,
      youtube: e.target.youtube.value,
      linkedin: e.target.linkedin.value
    });
  }

  render() {
    return (
      <div className="container">
        <h4>Create Profile</h4>
        <div className="row">
          <form onSubmit={this.handleSubmit} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input name="bio" id="bio" type="text" className="validate" />
                <label htmlFor="bio">Personal Bio</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label>
                  <input name="isMentor" type="checkbox" />
                  <span>Mentor</span>
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="interests"
                  id="interests"
                  type="text"
                  className="validate"
                />
                <label htmlFor="interests">Interests</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="youtube"
                  id="youtube"
                  type="text"
                  className="validate"
                />
                <label htmlFor="youtube">YouTube URL</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="linkedin"
                  id="linkedin"
                  type="text"
                  className="validate"
                />
                <label htmlFor="linkedin">LinkedIn URL</label>
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

export default CreateProfile;

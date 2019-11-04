import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import WrittenContentContainer from '../written-content/WrittenContentContainer';
import ActionList from '../action-list/ActionList';

const Profile = () => {
  const value = useContext(UserContext);

  let theme = value.alternateTheme;

  const getStyle = {
    height: '500px',
    overflowY: 'scroll',
    boxShadow: 'inset 0 0 10px black',
    padding: '20px'
  };

  const overallStyle = {
    paddingTop: '50px'
  };

  const changeTheme = () => {
    theme = !theme;
    value.alternateTheme = theme;
  };

  if (theme) {
    return (
      <div style={overallStyle}>
        <div className="row">
          <div className="col m4">
            <div className="valign-wrapper">
              <div className="profile center">
                <div className="profile-img">
                  <img
                    className="circle responsive-img"
                    src={`https:${value.avatar}`}
                    alt={`${value.name}`}
                  />
                </div>
                <h4 className="profile-name">{value.name}</h4>
                <div className="profile-interest">
                  <ul>
                    <h4>Interests:</h4>
                    {value.interests.map((interest, i) => {
                      return (
                        <li key={i}>
                          <h5>{interest}</h5>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="profile-social">
                  <div className="profile-social-youtube">
                    YouTube: <a href={value.youtube}>{value.youtube}</a>
                  </div>
                  <div className="profile-social-linkedin">
                    LinkedIn: <a href={value.linkedin}>{value.linkedin}</a>
                  </div>
                </div>
                <div className="row">
                  <button className="btn center" onClick={changeTheme}>
                    Change Layout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h4 className="center">Action List</h4>
          <div className="col m8" style={getStyle}>
            <ActionList />
          </div>
        </div>
        <hr />
        <div className="row">
          <h4 className="center">Written Content</h4>
          <WrittenContentContainer />
        </div>
      </div>
    );
  } else {
    return (
      <div style={overallStyle}>
        <div className="row">
          <div className="col m4">
            <div className="valign-wrapper">
              <div className="profile center">
                <div className="profile-img">
                  <img
                    className="circle responsive-img"
                    src={`https:${value.avatar}`}
                    alt={`${value.name}`}
                  />
                </div>
                <h4 className="profile-name">{value.name}</h4>
                <div className="profile-interest">
                  <ul>
                    <h4>Interests:</h4>
                    {value.interests.map((interest, i) => {
                      return (
                        <li key={i}>
                          <h5>{interest}</h5>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="profile-social">
                  <div className="profile-social-youtube">
                    YouTube: <a href={value.youtube}>{value.youtube}</a>
                  </div>
                  <div className="profile-social-linkedin">
                    LinkedIn: <a href={value.linkedin}>{value.linkedin}</a>
                  </div>
                </div>
                <div className="row">
                  <button className="btn center" onClick={changeTheme}>
                    Change Layout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h4 className="center">Written Content</h4>
          <div className="col m8" style={getStyle}>
            <WrittenContentContainer />
          </div>
        </div>
        <hr />
        <div className="row">
          <h4 className="center">Action List</h4>
          <ActionList />
        </div>
      </div>
    );
  }
};

export default Profile;

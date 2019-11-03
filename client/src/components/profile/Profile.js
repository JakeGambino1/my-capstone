import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import WrittenContentContainer from '../written-content/WrittenContentContainer';
import ActionList from '../action-list/ActionList';

const Profile = () => {
  const value = useContext(UserContext);
  const getStyle = {
    height: '500px',
    overflowY: 'scroll',
    boxShadow: 'inset 0 0 10px black',
    padding: '20px'
  };
  const overallStyle = {
    paddingTop: '50px'
  };
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
                />
              </div>
              <div className="profile-name">{value.name}</div>
              <div className="profile-interest">
                <ul>
                  Interests:
                  {value.interests.map((interest, i) => {
                    return <li key={i}>{interest}</li>;
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
        <ActionList />
      </div>
    </div>
  );
};

export default Profile;

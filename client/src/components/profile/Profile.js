import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import WrittenContentContainer from '../written-content/WrittenContentContainer';
import ActionList from '../action-list/ActionList';

const Profile = () => {
  const value = useContext(UserContext);
  return (
    <div>
      <div className="row">
        <div className="col m4">
          <div className="profile center">
            <div className="profile-img">
              <img className="circle responsive-img" src={value} alt="" />
            </div>
            <div className="profile-name">{value.name}</div>
            <div className="profile-interest">
              <ul>
                {value.interests.map((interest, i) => {
                  return <li key={i}>{interest}</li>;
                })}
              </ul>
            </div>
            <div className="profile-social">
              <div className="profile-social-youtube">{value.youtube}</div>
              <div className="profile-social-linkedin">{value.linkedin}</div>
            </div>
          </div>
        </div>
        <div className="col m8">
          <WrittenContentContainer />
        </div>
      </div>
      <div className="row">
        <ActionList />
      </div>
    </div>
  );
};

export default Profile;

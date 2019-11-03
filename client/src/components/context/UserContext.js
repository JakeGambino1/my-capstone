import React, { Component, createContext } from 'react';

export const UserContext = createContext({});

export class UserProvider extends Component {
  state = {
    id: '12345',
    name: 'Jake',
    interests: ['interest1', 'interest2', 'interest3'],
    email: 'Jake.Gambino1@gmail.com',
    avatar: '',
    isMentor: false,
    youtube: 'YouTube.com/URL',
    linkedin: 'LinkedIn.com/URL'
  };

  updateState(id, name, interests, email, avatar, isMentor, youtube, linkedin) {
    console.log(this);
    this.setState({
      id: id,
      name: name,
      interests: interests,
      email: email,
      avatar: avatar,
      isMentor: isMentor,
      youtube: youtube,
      linkedin: linkedin
    });
    console.log(this.state);
  }

  render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, updateState: this.updateState.bind(this) }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

// export const UserProvider = props => {
//   const [user, setUser] = useState({
//     name: 'Jake',
//     email: 'Jake.Gambino1@gmail.com',
//     avatar: '',
//     isMentor: false,
//     youtube: 'YouTube.com/URL',
//     linkedin: 'LinkedIn.com/URL'
//   });

//   return (
//     <UserContext.Provider value={(user, setUser)}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

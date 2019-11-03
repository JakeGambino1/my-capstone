import React, { Component, createContext } from 'react';

export const UserContext = createContext();

export class UserProvider extends Component {
  constructor() {
    super();
    this.state = {
      id: '12345',
      name: 'Jake',
      interests: ['interest1', 'interest2', 'interest3'],
      email: 'Jake.Gambino1@gmail.com',
      avatar: '',
      isMentor: false,
      youtube: 'YouTube.com/URL',
      linkedin: 'LinkedIn.com/URL'
    };
  }

  render() {
    const { children } = this.props;
    return (
      <UserContext.Provider value={this.state}>{children}</UserContext.Provider>
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

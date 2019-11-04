import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateWrittenContent from './components/written-content/CreateWrittenContent';
import ActionList from './components/action-list/ActionList';
import CreateProfile from './components/profile/CreateProfile';
import Profile from './components/profile/Profile';
import { UserProvider } from './components/context/UserContext';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <UserProvider>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createpost" component={CreateWrittenContent} />
            <Route exact path="/actionlist" component={ActionList} />
            <Route exact path="/createprofile" component={CreateProfile} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </UserProvider>
      </section>
    </Fragment>
  </Router>
);

export default App;

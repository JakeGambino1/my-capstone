import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-fixed">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <Link to="#" className="brand-logo">
              Staff Engagement
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/createpost">Create Post</Link>
              </li>
              <li>
                <Link to="/actionlist">Action List</Link>
              </li>
              <li>
                <Link to="/createprofile">Create Profile</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;

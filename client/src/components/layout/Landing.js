import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="row">
      <div className="col s12 m12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">
              Thanks for checking out our SES from Marketing Boon LLC
            </span>
            <p>
              This is our software solution to help create relationships between
              your workforce, increasing engagement, productivity, and the value
              people bring.
            </p>
          </div>
          <div className="card-action">
            <Link to="#">This is a link</Link>
            <Link to="#">This is a link</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

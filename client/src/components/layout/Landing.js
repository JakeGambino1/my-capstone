import React, { Component } from 'react';

class Landing extends Component {
  render() {
    const landingStyle = {
      backgroundImage:
        "url('https://www.nps.gov/ever/planyourvisit/images/5204457439_c8dd299265_o.jpg?maxwidth=1200&maxheight=1200&autorotate=false')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    return (
      <section className="landing-page" style={landingStyle}>
        <div className="row container">
          <div className="col s4 center white-text valign-wrapper">
            <i className="large material-icons">assignment</i>
            <h4>Create your own action list</h4>
          </div>
          <div className="col s4 center white-text valign-wrapper">
            <i className="large material-icons">featured_play_list</i>
            <h4>View Featured Content</h4>
          </div>
          <div className="col s4 center white-text valign-wrapper">
            <i className="large material-icons">group</i>
            <h4>Connect with mentors</h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;

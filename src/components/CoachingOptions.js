import React from 'react';
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import Link from 'gatsby-link';

import clock from '../assets/images/clock.jpg';

export default () => (
  <section id="three" className="main style1 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>How do you want to experience your coaching?</h2>
        </header>
      </div>

      <div className="col-4">
        <div className="header-image"></div>
        <span className="image fit">
          <div className="section-header-image" style={{ background: `url(${clock})`}}/>
        </span>
        <h3>ONE-ON-ONE COACHING</h3>
        <p>Start immediately with an experienced coach. Non-Profit rates available</p>
        <ul className="actions">
          <li><Link to="./coaching" className="button">More</Link></li>
        </ul>
      </div>
      <div className="col-4">
        <span className="image fit"><img src={pic03} alt="" /></span>
        <h3>GROUP COACHING</h3>
        <p>Join in with 4-6 other individuals plus your coach.</p>
        <ul className="actions">
        <li><Link to="./coaching" className="button">More</Link></li>
        </ul>
      </div>
      <div className="col-4">
        <span className="image fit"><img src={pic04} alt="" /></span>
        <h3>LIVE WORKSHOP</h3>
        <p>“The Clearing” Two-Day leadership training for corporate teams and non-profits.</p>
        <ul className="actions">
        <li><Link to="./workshops" className="button">More</Link></li>
        </ul>
      </div>
    </div>
  </section>
);

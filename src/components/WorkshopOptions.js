import React from 'react';
import smoothscroll from 'smoothscroll';

import clearing from '../assets/images/clearing.jpg';
import wine from '../assets/images/wine-and-cheese.jpg';

const WorkshopOptions = () => (
  <section id="three" className="main style1 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>Which Workshop Supports You Best?</h2>
        </header>
      </div>

      <div className="col-6">
        <span className="image fit">
          <div className="section-header-image" style={{ background: `url(${clearing})`}}/>
        </span>
        <h3>The Clearing</h3>
        <p>Leadership Training</p>
        <ul className="actions">
          <li>
            <button
              onClick={() => smoothscroll(document.getElementById('the-clearing'))}
              className="button">More</button>
          </li>
        </ul>
      </div>
      <div className="col-6">
        <span className="image fit">
          <div className="section-header-image" style={{ background: `url(${wine})`}} />
        </span>
        <h3>Wine & Wonder</h3>
        <p>Creativity Coaching</p>
        <ul className="actions">
          <li>
            <button
              onClick={() => smoothscroll(document.getElementById('wine-and-wonder'))}
              className="button">More</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default WorkshopOptions;

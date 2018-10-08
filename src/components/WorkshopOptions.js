import React from 'react';
import smoothscroll from 'smoothscroll';

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'


export default () => (
  <section id="three" className="main style1 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>How Workshop Supports You Best?</h2>
        </header>
      </div>

      <div className="col-6">
        <span className="image fit"><img src={pic02} alt="" /></span>
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
        <span className="image fit"><img src={pic03} alt="" /></span>
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

import React from 'react';
import library from '../assets/images/library.jpg';

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(51, 51, 51, .85), rgba(51, 51, 51, .85)), url(${library})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export default () => (
  <section id="two" className="main style2" style={backgroundImageStyle}>
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major align-center">
          <h2>Feel like you're missing out?</h2>
        </header>
      </div>
        <div className="col-6">
          <ul className="align-left" style={{ marginBottom: 0 }}>
            <li>Do you long for something new in your relationships?</li>
            <li>Does work feel like the same thing over and over again?</li>
            <li>Have you lost your passion?</li>
            <li>Do you feel stuck?</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="align-left">
            <li>Do you wish you were more creative?</li>
            <li>Do you regularly feel irritated or angry?</li>
            <li>Are you struggling to get up in the morning?</li>
            <li>Are you drifting more than living?</li>
          </ul>
        </div>
    </div>
  </section>
)
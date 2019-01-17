import React from 'react';
import aboutCaitlin from '../assets/images/about-caitlin.jpg';

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(51, 51, 51, .6), rgba(51, 51, 51, .6)), url(${aboutCaitlin})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const AboutCaitlin = () => (
  <section id="two" className="main style2" style={backgroundImageStyle}>
    <div className="grid-wrapper align-center">
      <div className="col-12">
        <header className="major">
          <h2 className="align-center">
            About Caitlin
          </h2>
        </header>
      </div>
      <div className="col-2"></div>
      <div className="col-8 align-left">
        <p>
          Caitlin experienced her first transformational training the winter of 2012 and has been pursuing the transformational life ever since. She received her Bachelor’s in Business from Belmont University (Nashville, TN), completed her Master’s at Talbot School of Theology. She has been certified by <a href="https://gapcommunity.com/" target="_blank" rel="noopener noreferrer">GAP</a> as both a trainer and coach.
        </p>
        <p>
          In addition to her own coaching and training clients, Caitlin is a full-time corporate trainer for an international healthcare company. Here, she designs both character and leadership trainings and travels the US to facilitate said trainings.
        </p>
        <p>
          She also volunteers her time with <a href="https://gapcommunity.com/" target="_blank" rel="noopener noreferrer">GAP Community</a>, a non-profit designed facilitate training opportunities that empower individuals to come alive and create a lasting impact in their community.
        </p>
        <p>
          Caitlin has a standing commitment to hope, curiosity and excitement.
        </p>
        <p>
          She lives in Southern California with her husband of 5 years. She loves great books, red wine, dinners out with friends and the year-round smell of fall candles.
        </p>
      </div>
      <div className="col-2"></div>
    </div>
  </section>
);

export default AboutCaitlin;

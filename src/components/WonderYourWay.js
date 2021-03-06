import React from 'react';
import clock from '../assets/images/clock.jpg';

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(51, 51, 51, .7), rgba(51, 51, 51, .7)), url(${clock})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const WonderYourWay = () => (
  <section id="two" className="main style2" style={backgroundImageStyle}>
    <div className="grid-wrapper">
      <div className="col-12">
        <header>
          <h2 className="align-center">
            <em>
              &quot;You won&apos;t wander into a meaningful life, but you can wonder your way into a life worth living.&quot;
            </em>
          </h2>
        </header>
      </div>
    </div>
  </section>
);

export default WonderYourWay;
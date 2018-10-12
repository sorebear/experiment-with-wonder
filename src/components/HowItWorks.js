import React from 'react';
import PropTypes from 'prop-types';
import gear from '../assets/images/gear.svg';
import levers from '../assets/images/levers.jpg';
import CtaButton from '../components/CtaButton';

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(51, 51, 51, .8), rgba(51, 51, 51, .8)), url(${levers})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const HowItWorks = ({ setPageState }) => (
  <section id="two" className="main style2" style={backgroundImageStyle}>
    <div className="grid-wrapper align-center">
      <div className="col-12">
        <header className="major">
          <h2 className="align-center">
            How it Works
          </h2>
        </header>
      </div>
      <div className="col-4 gear-container">
        <span className="image fit">
          <img src={gear} alt="gear" />
          <h2>1</h2>
        </span>
        <h3>Free Session</h3>
        <p>&quot;Try on&quot; coaching without any pressure or&nbsp;obligation.</p>
      </div>
      <div className="col-4 gear-container">
        <span className="image fit">
          <img src={gear} alt="gear" />
          <h2>2</h2>
        </span>
        <h3>Decide</h3>
        <p>Consider which coaching option is right for&nbsp;you.</p>
      </div>
      <div className="col-4 gear-container">
        <span className="image fit">
          <img src={gear} alt="gear" />
          <h2>3</h2>
        </span>
        <h3>Go</h3>
        <p>Go after that new life you&apos;re committed to&nbsp;create.</p>
      </div>
      <div className="col-12">
        <ul className="actions uniform">
          <li>
            <CtaButton buttonType="coachingGetStarted" setPageState={setPageState} />
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default HowItWorks;

HowItWorks.propTypes = {
  setPageState: PropTypes.func
};
import React from 'react';
import PropTypes from 'prop-types';
import CtaButton from '../components/CtaButton';

const WhatToExpect = ({ setPageState }) => (
  <section id="two" className="main style3">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major align-center">
          <h2>What to Expect</h2>
        </header>
      </div>
        
      <div className="col-12">
        <ul className="align-left" style={{ marginBottom: 0 }}>
          <li>Clarity</li>
          <li>Curiosity</li>
          <li>Empowerment</li>
          <li>Commitment</li>
          <li>New Possibilities</li>
          <li>WONDER</li>
        </ul>
      </div>
        
      <div className="col-12 align-center">
        <ul className="actions uniform">
          <li>
            <CtaButton buttonType="coachingGetStarted" setPageState={setPageState} />
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default WhatToExpect;

WhatToExpect.propTypes = {
  setPageState: PropTypes.func
};
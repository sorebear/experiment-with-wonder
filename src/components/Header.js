import React from 'react';
import CtaButton from '../components/CtaButton';

export default ({ setPageState, children, buttonType, backgroundImg }) => (
  <section id="header" style={{ backgroundImage: `linear-gradient(rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.7)), url(${backgroundImg})`}}>
    <div className="position-top-right desktop-only">
      <CtaButton setPageState={setPageState} buttonType={buttonType} />
    </div>
    <div className="inner">
      { children }
      <ul className="actions">
        <li>
          <CtaButton setPageState={setPageState} buttonType={buttonType} />
        </li>
      </ul>
    </div>
  </section>
);

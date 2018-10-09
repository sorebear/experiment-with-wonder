import React from 'react';
import CtaButton from '../components/CtaButton';

export default ({ setPageState, children, buttonType }) => (
  <section id="header">
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

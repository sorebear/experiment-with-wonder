import React from 'react';
import CtaButton from '../components/CtaButton';
import Link from 'gatsby-link';

export default ({ setPageState, children, buttonType, backgroundImg }) => (
  <section id="header" style={{ backgroundImage: `linear-gradient(rgba(51, 51, 51, 0.7), rgba(51, 51, 51, 0.7)), url(${backgroundImg})`}}>
    <div className="position-top-nav desktop-only">
      <Link to="/">
        <h3 className="site-logo">Wonderment, Inc.</h3>
      </Link>
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

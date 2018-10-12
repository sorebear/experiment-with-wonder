import React from 'react';
import PropTypes from 'prop-types';
import CtaButton from '../components/CtaButton';

const Header = ({ setPageState, children, buttonType, backgroundImg }) => (
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

export default Header;

Header.propTypes = {
  setPageState: PropTypes.func,
  buttonType: PropTypes.string,
  backgroundImg: PropTypes.string
};
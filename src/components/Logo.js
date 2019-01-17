import React from 'react';
import Link from 'gatsby-link';
import logoC from '../assets/images/logo-c.svg';
import logoB from '../assets/images/logo-b.svg';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <div className="logo__wrapper" style={styles.logoWrapperStyle}>
        <div style={styles.letterWrapperStyle}>
          <img className="logo__image logo__image--b" alt="C" src={logoC} style={styles.imageStyle} />
          <h5 className="logo__text" style={{...styles.textStyle, letterSpacing: '4.65px', color: '#de7e24'}}>
            Caitlin
          </h5>
        </div>
        <div style={styles.letterWrapperStyle}>
          <img className="logo__image logo__image--c" alt="B" src={logoB} style={styles.imageStyle} />
          <h5 className="logo__text" style={{ ...styles.textStyle, letterSpacing: '4.2px' }}>
            Baird
          </h5>
        </div>
      </div>
    </Link>
  </div>
);

export default Logo;

const styles = {
  logoWrapperStyle: {
    color: 'white',
    display: 'flex'
  },
  imageStyle: {
    margin: 0,
    height: '80px'
  },
  textStyle: {
    fontSize: '18px',
    margin: 0,
    textDecoration: 'none',
    backgroundImage: 'none',
    color: 'white'
  },
  letterWrapperStyle: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 10
  },
  verticalLineStyle: {
    borderRight: '1px solid white',
    height: '96px',
    marginLeft: '10px'
  },
  jobTitlesContainerStyle: {
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  jobTitleStyle: {
    margin: 0,
    fontWeight: '100'
  }
};
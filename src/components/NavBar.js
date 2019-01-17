import React, { Component } from 'react';
import smoothscroll from 'smoothscroll';

import Logo from './Logo';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.listenForHittingTopOfPage = this.listenForHittingTopOfPage.bind(this);
    this.listenForLeavingTopOfPage = this.listenForLeavingTopOfPage.bind(this);
    this.state = {
      scrollState: 'loading'
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      if (window.pageYOffset === 0) {
        document.addEventListener('scroll', this.listenForLeavingTopOfPage);
        this.setState({
          scrollState: 'unscrolled',
        });
      } else {
        document.addEventListener('scroll', this.listenForHittingTopOfPage);
      }
    }, 1);
  }
	
  componentWillUnmount() {
    if (this.state.scrollState === 'scrolled') {
      document.removeEventListener('scroll', this.listenForHittingTopOfPage);
    } else {
      document.removeEventListener('scroll', this.listenForLeavingTopOfPage);
    }
  }

  listenForHittingTopOfPage() {
    if (window.pageYOffset === 0) {
      document.removeEventListener('scroll', this.listenForHittingTopOfPage);
      document.addEventListener('scroll', this.listenForLeavingTopOfPage);
      this.setState({
        scrollState: 'unscrolled',
      });
    }
  }

  listenForLeavingTopOfPage() {
    if (window.pageYOffset !== 0) {
      document.removeEventListener('scroll', this.listenForLeavingTopOfPage);
      document.addEventListener('scroll', this.listenForHittingTopOfPage);
      this.setState({
        scrollState: 'scrolled',
      });
    }
  }

  handleSmoothScroll(anchor) {
    const scrollDestination = document.getElementById(anchor);
    smoothscroll(scrollDestination, 600);
  }

  render() {
    return (
      <div
        className={`header bg-primary-color header--${this.state.scrollState}`}
        style={styles.headerStyle}
      >
        <div style={styles.contentContainerStyle}>
          <div 
            // onClick={() => this.handleSmoothScroll('home')}
            style={{ cursor: 'pointer' }}
          >
            <Logo />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;

const styles = {
  headerStyle: {
    position: 'fixed',
    zIndex: 1,
    top: 0,
  },
  contentContainerStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoWrapperStyle: {
    display: 'flex'
  },
  navStyle: {
    listStyle: 'none',
    display: 'flex',
    marginRight: '10px',
    textDecoration: 'none',
    margin: 0,
    backgroundImage: 'none',
    textShadow: 'none',
    cursor: 'pointer'
  },
  listItemStyle: {
    marginBottom: 0
  },
  navLinkStyle: {},
  navTextStyle: {
    marginLeft: '20px'
  }
};

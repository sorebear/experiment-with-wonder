import React from 'react';
import wine from '../assets/images/wine-and-cheese.jpg';

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(51, 51, 51, .7), rgba(51, 51, 51, .7)), url(${wine})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export default () => (
  <React.Fragment>
  <section id="wine-and-wonder" className="main style2" style={backgroundImageStyle}>
    <div className="grid-wrapper align-center">
      <div className="col-12">
        <header className="major">
          <h2>
            Wine & Wonder
          </h2>
          <p>
            a creativity workshop to reveal the artist within
          </p>
        </header>
        <p>
          In Wine & Wonder the lines between art and life blur. You need not special qualifications to be an artist—you need only to be alive.
        </p>
        <button className="button">
          Info on Upcoming Sessions
        </button>
      </div>
    </div>
  </section>
  <section className="main style1">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>
            WHAT IS WINE & WONDER?
          </h2>
        </header>
        <p>
          Sometimes in life we say things like, “I don’t know,” “I’m confused” or “I’m stuck.” When our words fail to capture our reality, art steps in.
        </p>
        <p>
          A blend of coaching and creative expression, Wine & Wonder is a workshop designed to explore yourself as an artist. You will unlock your creativity through art expression, experiential exercises, free writing, guided conversation, mindfulness and feedback.
        </p>
      </div>
    </div>
  </section>
  <section className="main style3">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>
            WHO ATTENDS WINE & WONDER?
          </h2>
        </header>
        <p>
          Artists of all kinds—those who’ve never touched a paint brush, those who’ve been practicing for years, DIY project do-ers, anyone with a longing to find beauty in the everyday. 
        </p>
      </div>
    </div>
  </section>
  <section className="main style1">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>
            WHAT TOPICS ARE COVERED?
          </h2>
        </header>
        <ul>
          <li>
            Authentic expression
          </li>
          <li>
            Unlocking creativity
          </li>
          <li>
            Exploring possibilities
          </li>
          <li>
            Making friend with “what is”
          </li>
          <li>
            Freedom
          </li>
          <li>
            Perceived limits
          </li>
          <li>
            Underlying belief systems
          </li>
          <li>
            Awareness
          </li>
        </ul>
      </div>
    </div>
  </section>
  </React.Fragment>
);
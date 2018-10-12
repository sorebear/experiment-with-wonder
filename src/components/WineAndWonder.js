import React from 'react';
import PropTypes from 'prop-types';
import wine from '../assets/images/wine-and-cheese.jpg';
import CtaButton from '../components/CtaButton';
import Collapse from 'rc-collapse';

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(51, 51, 51, .7), rgba(51, 51, 51, .7)), url(${wine})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const WineAndWonder = ({ setPageState }) => (
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
          <CtaButton buttonType="wineAndWonder" setPageState={setPageState} />
        </div>
      </div>
    </section>
    <section className="main style4">
      <div className="grid-wrapper align-center">
        <div className="col-12">
          <h3 style={{ color: 'white' }}>
            <em>
              In Wine & Wonder the lines between art and life blur. You need not special qualifications to be an artist—<br />you need only to be alive.
            </em>
          </h3>
        </div>
      </div>
    </section>
    <section className="main style1">
      <div className="grid-wrapper">
        <div className="col-12">
          <Collapse
            accordion={true}
            className="faq-accordion"
          >
            <Collapse.Panel header="WHAT IS WINE AND WONDER?">
              <p>
                Sometimes in life we say things like, “I don’t know,” “I’m confused” or “I’m stuck.” When our words fail to capture our reality, art steps in.
              </p>
              <p>
                A blend of coaching and creative expression, Wine & Wonder is a workshop designed to explore yourself as an artist. You will unlock your creativity through art expression, experiential exercises, free writing, guided conversation, mindfulness and feedback.
              </p>
            </Collapse.Panel>
            <Collapse.Panel header="WHO ATTENDS WINE AND WONDER?">
              <p>
                Artists of all kinds—those who’ve never touched a paint brush, those who’ve been practicing for years, DIY project do-ers, anyone with a longing to find beauty in the everyday. 
              </p>
            </Collapse.Panel>
            <Collapse.Panel header="WHAT TOPICS ARE COVERED?">
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
                  Making friends with “what is”
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
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
    </section>
  </React.Fragment>
);

WineAndWonder.propTypes = {
  setPageState: PropTypes.func
};

export default WineAndWonder;
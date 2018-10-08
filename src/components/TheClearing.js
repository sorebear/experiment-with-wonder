import React from 'react';
import clearing from '../assets/images/clearing.jpg';

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(51, 51, 51, .7), rgba(51, 51, 51, .7)), url(${clearing})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export default () => (
  <React.Fragment>
  <section id="the-clearing" className="main style2" style={backgroundImageStyle}>
    <div className="grid-wrapper">
      <div className="col-12 align-center">
        <header className="major">
          <h2>
            The Clearing
          </h2>
          <p>
            a leadership training experience designed to unleash your inner leader and empower you to personal and professional success.
          </p>
        </header>
        <p><em>Available for corporate and non-profit settings</em></p>
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
            WHAT IS THE CLEARING?
          </h2>
        </header>
        <p>
          Have you ever asked the question, “What does it mean to BE a leader?” Most of us learn a set of leadership tactics (do this, don’t do that) and are then confused when these tactics don’t universally work the way we want them to! In Thrive Leadership we ask the question, <strong>"Who are you <em>being</em> while you’re doing what you’re doing?”</strong> We look at the character of our leadership in addition to our competence.
        </p>
        <p>
          This training will help you uncover your assumptions, beliefs and patterns; and examine how they are working both for and against the vision you have for your leadership. As your trainers, we are committed to rigorously supporting you and standing for new possibilities in your life.
        </p>
      </div>
    </div>
  </section>
  <section className="main style3">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>
            WHO ATTENDS THE CLEARING?
          </h2>
        </header>
        <p>
          Leaders of all kinds! Business people, artists, corporate execs,  families, small groups, teams church members, seasoned leaders, brand new leaders, those in transition. Anyone who wants to experience transformation in their family, relationships, life and leadership!
        </p>
      </div>
    </div>
  </section>
  <section className="main style1">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>
            WHAT IS THE STRUCTURE OF THE TRAINING?  
          </h2>
        </header>
        <p>
          The Clearing can take place in a variety of constructs to best serve your purposes. The 18 hours of content is available in the following formats: two-day workshop, a series of four hour workshops, a series of two hour workshops. 
        </p>
        <p>
          During the training, there will be dynamic lecture, experiential exercises, group discussions, interactive coaching, networking and study materials.
        </p>
      </div>
    </div>
  </section>
  <section className="main style3">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>
            WHAT TOPICS ARE COVERED?
          </h2>
        </header>
        <ul>
          <li>
            Being a leader vs. Understanding leadership tactics and strategies
          </li>
          <li>
            Establishing vision
          </li>
          <li>
            Challenging personal and organizational complacency
          </li>
          <li>
            Discover assumptions and paradigms
          </li>
          <li>
            Become aware of your belief systems
          </li>
          <li>
            Giving and receiving feedback
          </li>
          <li>
            Measuring your impact
          </li>
          <li>
            Exploring possibilities
          </li>
          <li>
            Declaring commitments and a plan of action for your next steps toward the future you want
          </li>
        </ul>
      </div>
    </div>
  </section>
  </React.Fragment>
);
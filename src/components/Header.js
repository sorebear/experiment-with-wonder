import React from 'react'
import smoothscroll from 'smoothscroll';

export default ({ setPageState }) => (
  <section id="header">
    <div className="inner">
      <span className="icon major fa-flask"></span>
      <h1><strong style={{fontSize: '200%'}}>Wonderment, Inc.</strong><br />
      <span>Experiment with Wonder</span></h1>
      <p>Transformational Coaching to Explore Life’s Possibilities</p>
      <ul className="actions">
        <li>
          <button
            className="button scrolly"
            onClick={() => {
              smoothscroll(document.getElementById('contact'), 500, () => {
                setPageState({ 
                  contactMessage: `I'd like to start with a free coaching session!`,
                  interestOneOnOne: true
                });
              });
            }}
          >
            Free Coaching Session
          </button>
        </li>
      </ul>
    </div>
  </section>
);

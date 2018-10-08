import React from 'react'
import smoothscroll from 'smoothscroll';

export default ({ setPageState, children }) => (
  <section id="header">
    <div className="inner">
      { children }
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

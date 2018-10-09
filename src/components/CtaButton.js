import React from 'react';
import smoothscroll from 'smoothscroll';

const messages = {
  coaching: {
    contactMessage: `I'd like to start with a free coaching session!`,
    buttonText: 'Free Coaching Session',
    interestOneOnOne: true,
    interestGroup: false,
    interestWorkshop: false
  },
  coachingGetStarted: {
    contactMessage: `I'd like to start with a free coaching session!`,
    buttonText: 'Get Started',
    interestOneOnOne: true,
    interestGroup: false,
    interestWorkshop: false
  },
  workshop: {
    contactMessage: `I'd like to know when the next live workshop is happening!`,
    buttonText: 'Attend Next Event',
    interestOneOnOne: false,
    interestGroup: false,
    interestWorkshop: true
  },
  clearing: {
    contactMessage: `I'd like to know when The Clearing is happening next!`,
    buttonText: 'Attend Next Event',
    interestOneOnOne: false,
    interestGroup: false,
    interestWorkshop: true
  },
  wineAndWonder: {
    contactMessage: `I'd like to know when Wine and Wonder is happening next!`,
    buttonText: 'Attend Next Event',
    interestOneOnOne: false,
    interestGroup: false,
    interestWorkshop: true
  },
};

export default ({ buttonType, setPageState }) => (
  <button
    className="button scrolly"
    onClick={() => {
      smoothscroll(document.getElementById('contact'), 500, () => {
        setPageState({ 
          contactMessage: messages[buttonType].contactMessage,
          interestOneOnOne: messages[buttonType].interestOneOnOne,
          interestGroup: messages[buttonType].interestGroup,
          interestWorkshop: messages[buttonType].interestWorkshop
        });
      });
    }}
  >
    { messages[buttonType].buttonText }
  </button>
);
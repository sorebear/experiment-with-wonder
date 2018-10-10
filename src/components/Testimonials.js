import React from 'react';

// import amyMaxwell from '../assets/images/amy-maxwell.png';
import jeanMarieJobs from '../assets/images/jean-marie-jobs.png';
import johnOrtberg from '../assets/images/john-ortberg.png';
import steveCarter from '../assets/images/steve-carter.png';

export default () => (
  <section id="three" className="main style1 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>What Others Are Saying</h2>
        </header>
      </div>
      <div className="col-4">
        <span className="image fit"><img src={johnOrtberg} alt="John Ortberg" /></span>
        <h3 style={{ marginBottom: 0 }}>John Ortberg</h3>
        <p style={{ opacity: .65 }}>
          <em>
            Author of All the Places to Go, Soul Keeping, Who is this Man?, and many&nbsp;more.
          </em>
        </p>
        <p>"Caitlin has a wonderful gift for being able to communicate in a way that changes lives.  She is thoughtful, honest, warm, reflective, and deeply challenging."</p>
      </div>
      <div className="col-4">
        <span className="image fit"><img src={jeanMarieJobs} alt="Jean Marie Jobs" /></span>
        <h3 style={{ marginBottom: 0 }}>Jean Marie Jobs</h3>
        <p style={{ opacity: .65 }}>
          <em>
            Master trainer, Founder of GAP&nbsp;Community and author of The Art of Feeding&nbsp;Heroes.
          </em>
        </p>
        <p>"Caitlin’s coaching and training style is both creative and insightful. She continually challenges her self to go beyond perceived limitations and is courageous in her stand for others. She is an absolute delight!"</p>
      </div>
      <div className="col-4">
        <span className="image fit"><img src={steveCarter} alt="Steve Carter" /></span>
        <h3 style={{ marginBottom: 0 }}>Steve Carter</h3>
        <p style={{ opacity: .65 }}>
          <em>
            Author of This Invitational Life & Everything to Lose: Doing the Right Thing When the Stakes are&nbsp;High
          </em>
        </p>
        <p>"Caitlin is a dear friend who has taught me so much about grace. She has a way with words, is brave beyond measure and simply reminds me of the love of Christ by the way she chooses to orient her life. She will make you laugh, make you think and consistently ask you the right questions."</p>
      </div>
      {/* <div className="col-3">
        <span className="image fit"><img src={amyMaxwell} alt="Amy Maxwell" /></span>
        <h3 style={{ marginBottom: 0 }}>Amy Maxwell</h3>
        <p style={{ opacity: .65 }}>
          <em>
            Master trainer and coach, Director of International Projects, GAP&nbsp;Community
          </em>
        </p>
        <p>""</p>
      </div> */}
    </div>
  </section>
);
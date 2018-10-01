import React from 'react';
import pic02 from '../assets/images/pic02.jpg';
import pic03 from '../assets/images/pic03.jpg';
import pic04 from '../assets/images/pic04.jpg';

export default () => (
  <section id="three" className="main style1 special">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major">
          <h2>Kind Words from Trustworthy People</h2>
        </header>
      </div>

      <div className="col-3">
        <span className="image fit"><img src={pic02} alt="" /></span>
        <h3>John Ortberg</h3>
        <p>"Caitlin has a wonderful gift for being able to communicate in a way that changes lives.  She is thoughtful, honest, warm, reflective, and deeply challenging."</p>
      </div>
      <div className="col-3">
        <span className="image fit"><img src={pic03} alt="" /></span>
        <h3>Jean Marie Jobs</h3>
        <p>"Caitlin’s coaching and training style is both creative and insightful. She continually challenges her self to go beyond perceived limitations and is courageous in her stand for others.  She is an absolute delight!"</p>
      </div>
      <div className="col-3">
        <span className="image fit"><img src={pic04} alt="" /></span>
        <h3>Steve Carter</h3>
        <p>"Caitlin is a dear friend who has taught me so much about grace. She has a way with words, is brave beyond measure and simply reminds me of the love of Christ by the way she chooses to orient her life. She will make you laugh, make you think and consistently ask you the right questions."</p>
      </div>
      <div className="col-3">
        <span className="image fit"><img src={pic04} alt="" /></span>
        <h3>Amy Maxwell</h3>
        <p>""</p>
      </div>
    </div>
  </section>
);
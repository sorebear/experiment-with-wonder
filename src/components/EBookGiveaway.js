import React from 'react';

export default () => (
  <section id="four" className="main style2 style3 special">
    <div className="container">
      <header className="major">
        <h2>Give Away E-Book</h2>
      </header>
    </div>
    <div className="grid-wrapper">
      <div className="col-12">
        <p>Download my free e-book and start "wondering" now.</p>
        <form>
          <label className="align-left" style={{ color: 'rgba(255, 255, 255, .75)' }}>Email</label>
          <input type="email"></input>
          <ul className="actions uniform">
            <li><button type="submit" className="button" style={{ marginTop: '2em' }}>Get Free E-Book</button></li>
          </ul>
        </form>
      </div>
    </div>
  </section>
);
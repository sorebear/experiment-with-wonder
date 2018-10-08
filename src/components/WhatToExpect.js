import React from 'react';

const backgroundStyle = {
  backgroundColor: '#f7f9fc'
}

export default () => (
  <section id="two" className="main style1" style={backgroundStyle}>
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major align-center">
          <h2>What to Expect</h2>
        </header>
      </div>
        <div className="col-2"></div>
        <div className="col-4">
          <ul className="align-left" style={{ marginBottom: 0 }}>
            <li>Clarity</li>
            <li>Curiosity</li>
            <li>Empowerment</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="align-left">
            <li>Commitment</li>
            <li>New Possibilities</li>
            <li>WONDER</li>
          </ul>
        </div>
        <div className="col-2"></div>
        <div className="col-12 align-center">
        <ul className="actions uniform">
          <li><a href="#" className="button">Get Started</a></li>
        </ul>
      </div>
    </div>
  </section>
);
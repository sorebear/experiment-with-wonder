import React from 'react';
import PropTypes from 'prop-types';

const EBookGiveaway = ({ pageState, setPageState }) => (
  <section id="four" className="main style2 style4 special">
    <div className="container">
      <header className="major">
        <h2>Give Away E-Book</h2>
      </header>
    </div>
    <div className="grid-wrapper">
      <div className="col-12">
        <p>Download my free e-book and start &quot;wondering&quot; now.</p>
        <form>
          <label className="align-left" style={{ color: 'rgba(255, 255, 255, .75)' }}>Email</label>
          <input
            required
            type="email"
            value={pageState.ebookEmail}
            onChange={(e) => setPageState({ ebookEmail: e.target.value })}
          />
          <ul className="actions uniform">
            <li><button type="submit" className="button" style={{ marginTop: '2em' }}>Get Free E-Book</button></li>
          </ul>
        </form>
      </div>
    </div>
  </section>
);

export default EBookGiveaway;

EBookGiveaway.propTypes = {
  setPageState: PropTypes.func,
  pageState: PropTypes.object
};
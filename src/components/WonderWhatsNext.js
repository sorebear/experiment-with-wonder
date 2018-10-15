import React from 'react';
import caitlinBaird from '../assets/images/caitlin-baird.jpg';

const WonderWhatsNext = () => (
  <section id="one" className="main style1">
    <div className="grid-wrapper">
      <div className="col-4">
        <span className="image fit"><img src={caitlinBaird} alt="" /></span>
      </div>
      <div className="col-8">
        <header className="major">
          <h2>You may wonder how you got here.<br />
          I can help you &quot;wonder&quot; what&apos;s next.</h2>
        </header>
        <p>
          The drift of life can leave you feeling as though you’re missing out. Aimless/bored.This isn’t a problem—it’s just part of being human.<br />
          It’s normal—but it doesn’t have to be permanent.
        </p>
        <p>
          Hi, I&apos;m Caitlin Baird. As a transformational coach, I work with clients—both individuals, teams and small groups as well as corporations and non-profits—to cultivate wonder. During and after coaching, clients experience a renewed sense of passion, clarity around their vision and the courage to craft a life that’s worth living.
        </p>
      </div>
    </div>
  </section>
);

export default WonderWhatsNext;
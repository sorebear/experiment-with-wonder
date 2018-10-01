import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <section id="two" className="main style2">
                  <div className="grid-wrapper">
                    <div className="col-12">
                      <header className="major">
                        <h2>Feel like you're missing out?</h2>
                      </header>
                    </div>
                      <div className="col-6">
                        <ul>
                          <li>Do you long for something new in your relationships?</li>
                          <li>Does work feel like the same thing over and over again?</li>
                          <li>Have you lost your passion?</li>
                          <li>Do you feel stuck?</li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <ul>
                          <li>Do you wish you were more creative?</li>
                          <li>Do you regularly feel irritated or angry?</li>
                          <li>Are you struggling to get up in the morning?</li>
                          <li>Are you drifting more than living?</li>
                        </ul>
                      </div>
                  </div>
                </section>

                <section id="one" className="main style1">
                  <div className="grid-wrapper">
                    <div className="col-12">
                      <header className="major">
                        <h2>You may wonder how you got here.<br />
                        I can help you "wonder" what's next.</h2>
                      </header>
                      <p>
                        The drift of life can leave you feeling as though you’re missing out. Aimless/bored.This isn’t a problem—it’s just part of being human.<br />
                        It’s normal—but it doesn’t have to be permanent.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="one" className="main style1" style={{paddingTop: 0}}>
                  <div className="grid-wrapper">
                    <div className="col-6">
                      <span className="image fit"><img src={pic01} alt="" /></span>
                    </div>
                    <div className="col-6">
                      <header className="major">
                        <h2>Hi, I'm Caitlin Baird.<br />
                        As a transformational coach,</h2>
                      </header>
                      <p>
                        I work with clients—both individuals, teams and small groups as well as corporations and non-profits—to cultivate wonder. During and after coaching, clients experience a renewed sense of passion, clarity around their vision and the courage to craft a life that’s worth living.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="two" className="main style2">
                  <div className="grid-wrapper">
                    <div className="col-12">
                      <header>
                        <h2 style={{textAlign: 'center'}}>
                          "You won't wander into a meaningful life, but you can wonder your way into a life worth living."
                        </h2>
                      </header>
                    </div>
                  </div>
                </section>

                <section id="three" className="main style1 special">
                  <div className="grid-wrapper">
                    <div className="col-12">
                      <header className="major">
                        <h2>How do you want to experience your coaching?</h2>
                      </header>
                    </div>

                    <div className="col-4">
                      <span className="image fit"><img src={pic02} alt="" /></span>
                      <h3>ONE-ON-ONE COACHING</h3>
                      <p>Start immediately with an experienced coach. Non-Profit rates available</p>
                      <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <span className="image fit"><img src={pic03} alt="" /></span>
                      <h3>GROUP COACHING</h3>
                      <p>Join in with 4-6 other individuals plus your coach.</p>
                      <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <span className="image fit"><img src={pic04} alt="" /></span>
                      <h3>LIVE WORKSHOP</h3>
                      <p>“The Clearing” Two-Day leadership training for corporate teams and non-profits.</p>
                      <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="two" className="main style2">
                  <div className="grid-wrapper" style={{ textAlign: 'center' }}>
                    <div className="col-12">
                      <header className="major">
                        <h2 style={{textAlign: 'center'}}>
                          How it Works
                        </h2>
                      </header>
                    </div>
                    <div className="col-4">
                      <h3>Free Session</h3>
                      <p>"Try on" coaching without any pressure or&nbsp;obligation.</p>
                    </div>
                    <div className="col-4">
                      <h3>Decide</h3>
                      <p>Consider which coaching option is right for&nbsp;you.</p>
                    </div>
                    <div className="col-4">
                      <h3>GO</h3>
                      <p>Go after that new life you're committed to&nbsp;create.</p>
                    </div>
                    <div className="col-12">
                      <ul className="actions uniform">
                        <li><a href="#" className="button">Free Coaching Session</a></li>
                      </ul>
                    </div>
                  </div>
                </section>

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

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign Up</a></li>
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
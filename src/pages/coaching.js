import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Layout from '../components/layout';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import CoachingWhatsIncluded from '../components/CoachingWhatsIncluded';
import HowItWorks from '../components/HowItWorks';
import WhatToExpect from '../components/WhatToExpect';
import CoachingGetStarted from '../components/CoachingGetStarted';
import GetToKnow from '../components/GetToKnow';
import FAQs from '../components/FAQs';
import coachingHero from '../assets/images/coaching-hero.jpg';

const siteTitle = 'Individual and Group Coaching | Experiment With Wonder';

class Coaching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ebookEmail: '',
      contactName: '',
      contactEmail: '',
      contactMessage: '',
      interestOneOnOne: false,
      interestGroup: false,
      interestWorkshop: false
    };

    this.setState = this.setState.bind(this);
  }

  

  render() {
    return (
      <Layout>
        <Helmet title={siteTitle}></Helmet>
        <Header
          setPageState={this.setState}
          buttonType="coaching"
          backgroundImg={coachingHero}
        >
          <Fragment>
            <span className="icon major fa-flask"></span>
            <h1>
              <span style={{fontSize: '2rem'}}>Experiment with Wonder</span><br style={{ display: 'inline' }} />
              <strong>One-on-One and Group Coaching<br /><span className="space">&nbsp;</span>to Explore&nbsp;Life’s&nbsp;Possibilities</strong>
            </h1>
          </Fragment>
        </Header>
        <Testimonials />
        <CoachingWhatsIncluded />
        <HowItWorks setPageState={this.setState} />
        <WhatToExpect setPageState={this.setState} />
        <CoachingGetStarted />
        <GetToKnow />
        <FAQs />
        <Contact pageState={this.state} setPageState={this.setState} />
      </Layout>
    );
  }
}

export default Coaching;
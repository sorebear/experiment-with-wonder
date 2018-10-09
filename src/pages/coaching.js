import React from 'react';

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
    }

    this.setState = this.setState.bind(this);
  }
  
  render() {
    return (
      <Layout>
        <Header setPageState={this.setState} buttonType="coaching">
          <span className="icon major fa-flask"></span>
          <h1><strong style={{fontSize: '180%'}}>Experiment With</strong><br style={{ display: 'inline' }} />
          <span>One-on-One and Group Coaching to Explore Life’s Possibilities</span></h1>
          <p></p>
        </Header>
        <Testimonials />
        <CoachingWhatsIncluded />
        <HowItWorks />
        <WhatToExpect />
        <CoachingGetStarted />
        <GetToKnow />
        <FAQs />
        <Contact pageState={this.state} setPageState={this.setState} />
      </Layout>
    );
  }
};

export default Coaching;
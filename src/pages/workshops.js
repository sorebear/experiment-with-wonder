import React from 'react';

import Header from '../components/Header';
import Layout from '../components/layout';
import WorkshopOptions from '../components/WorkshopOptions';
import Contact from '../components/Contact';
import GetToKnow from '../components/GetToKnow';
import TheClearing from '../components/TheClearing';
import WineAndWonder from '../components/WineAndWonder';

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
        <Header setPageState={this.setState} buttonType="workshop">
          <span className="icon major fa-flask"></span>
          <h1><strong style={{fontSize: '180%'}}>Live Workshops</strong><br style={{ display: 'inline' }} />
          <span>One-on-One and Group Coaching to Explore Life’s Possibilities</span></h1>
        </Header>
        <WorkshopOptions />
        <TheClearing setPageState={this.setState} />
        <WineAndWonder setPageState={this.setState} />
        <GetToKnow />
        <Contact pageState={this.state} setPageState={this.setState} />
      </Layout>
    );
  }
};

export default Coaching;
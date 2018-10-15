import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Layout from '../components/layout';
import WorkshopOptions from '../components/WorkshopOptions';
import Contact from '../components/Contact';
import GetToKnow from '../components/GetToKnow';
import TheClearing from '../components/TheClearing';
import WineAndWonder from '../components/WineAndWonder';
import workshopHero from '../assets/images/workshop-hero.jpg';

const siteTitle = 'Workshops | Experiment With Wonder';

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
          buttonType="workshop"
          backgroundImg={workshopHero}
        >
          <span className="icon major fa-flask"></span>
          <h1>
            <span style={{fontSize: '2rem'}}>Experiment with Wonder</span><br style={{ display: 'inline' }} />
            <strong>Live Workshops<br /><span className="space">&nbsp;</span>to Explore&nbsp;Life’s&nbsp;Possibilities</strong>
          </h1>
        </Header>
        <WorkshopOptions />
        <TheClearing setPageState={this.setState} />
        <WineAndWonder setPageState={this.setState} />
        <GetToKnow />
        <Contact pageState={this.state} setPageState={this.setState} />
      </Layout>
    );
  }
}

export default Coaching;
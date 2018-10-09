import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import AboutCaitlin from '../components/AboutCaitlin';
import CoachingOptions from '../components/CoachingOptions';
import Contact from '../components/Contact';
import EBookGiveaway from '../components/EBookGiveaway';
import GetCurious from '../components/GetCurious';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import WonderWhatsNext from '../components/WonderWhatsNext';
import WonderYourWay from '../components/WonderYourWay';
import AreYouMissoungOut from "../components/AreYouMissoungOut";
import Header from "../components/Header";
import header from '../assets/images/header.jpg';

class Homepage extends React.Component {
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
    console.log('STATE', this.state);
    const siteTitle = "Wonderment, Inc. | Experiment with Wonder";

    return (
      <Layout>
        <Helmet title={siteTitle}>
        </Helmet>
        <Header
          setPageState={this.setState}
          buttonType="coaching"
          backgroundImg={header}
        >
          <span className="icon major fa-flask"></span>
          <h1><span style={{fontSize: '2rem'}}>Experiment with Wonder</span><br style={{ display: 'inline' }} />
          <strong>Transformational Coaching<br />to Explore&nbsp;Life’s&nbsp;Possibilities</strong></h1>
        </Header>
        <GetCurious />
        <AreYouMissoungOut />
        <WonderWhatsNext />
        <WonderYourWay />
        <CoachingOptions />
        <HowItWorks setPageState={this.setState} />
        {/* <EBookGiveaway pageState={this.state} setPageState={this.setState} /> */}
        <Testimonials />
        <AboutCaitlin />
        <Contact pageState={this.state} setPageState={this.setState} />
      </Layout>
    );
  }
}

export default Homepage;
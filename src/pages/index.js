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
          {/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link> */}
        </Helmet>
        <Header setPageState={this.setState}>
          <span className="icon major fa-flask"></span>
          <h1><strong style={{fontSize: '180%'}}>Wonderment, Inc.</strong><br style={{ display: 'inline' }} />
          <span>Experiment with Wonder</span></h1>
          <p>Transformational Coaching to Explore Life’s Possibilities</p>
        </Header>
        <GetCurious />
        <AreYouMissoungOut />
        <WonderWhatsNext />
        <WonderYourWay />
        <CoachingOptions />
        <HowItWorks />
        <EBookGiveaway pageState={this.state} setPageState={this.setState} />
        <Testimonials />
        <AboutCaitlin />
        <Contact pageState={this.state} setPageState={this.setState} />
      </Layout>
    );
  }
}

export default Homepage;
import React from 'react';
import Collapse from 'rc-collapse';
import aboutCaitlin from '../assets/images/about-caitlin.jpg';
import 'rc-collapse/assets/index.css';

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(rgba(51, 51, 51, .6), rgba(51, 51, 51, .6)), url(${aboutCaitlin})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

export default class GetToKnow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: null,
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion() {
    this.setState({ activeKey: this.state.activeKey ? null : ['0'] });
  }

  render() {
    return (
      <section className="main style2" style={backgroundImageStyle}>
        <div className="grid-wrapper">
          <div className="col-12 align-center">
            <header className="major">
              <h2>
                Get To Know Your Coach
              </h2>
            </header>
            <button
              className="button"
              onClick={this.toggleAccordion}
            >
              About Caitlin
            </button>
          </div>
          <div className="col-12">
            <Collapse
              accordion={true}
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              className="get-to-know-accordion"
              showArrow={false}
            >
              <Collapse.Panel>
                <p>
                  Caitlin experienced her first transformational training the winter of 2012 and has been pursuing the transformational life ever since. She received her Bachelor’s in Business from Belmont University (Nashville, TN), completed her Master’s at Talbot School of Theology. She has been certified by GAP (link) as both a trainer and coach.
                </p>
                <p>
                  In addition to her own coaching and training clients, Caitlin is a full-time corporate trainer for an international healthcare company. Here, she designs both character and leadership trainings and travels the US to facilitate said trainings.
                </p>
                <p>
                  She has written two workbooks, Learning to See (available for purchase here) and The 4 Theories of Transformation (available here – link to freebie).  She also volunteers her time with GAP Community, a non-profit designed facilitate training opportunities that empower individuals to come alive and create a lasting impact in their community.
                </p>
                <p>
                  Caitlin has a standing commitment to hope, curiosity and excitement.
                </p>
                <p>
                  She lives in Southern California with her husband of 5 years. She loves great books, red wine, dinners out with friends and the year-round smell of fall candles.
                </p>
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
      </section>
    );
  }
}


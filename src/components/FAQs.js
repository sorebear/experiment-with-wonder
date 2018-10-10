import React from 'react';
import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';


export default () => (
  <section className="main style1">
    <div className="grid-wrapper">
      <div className="col-12 align-center">
        <header className="major">
          <h2>
            FAQs
          </h2>
        </header>
      </div>
      <div className="col-12">
        <Collapse
          accordion={true}
          className="faq-accordion"
        >
          <Collapse.Panel header="What is coaching?">
            <p>
              The International Coaching Federation defines coaching as a “partnering with clients in a thought-provoking and creative process that inspires the client to maximize their personal and professional potential.” A coach helps the client clarify their vision, determine core values, investigate their current reality and commit to something new.
            </p>
            <p>
              In short, a coach helps you get from where you are to where you want to go.
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="What can Caitlin help me with?">
            <p>
              A coach can help you in a variety of areas, such as: confidence, communication, creating loving relationships, career change, living out your purpose, managing transitions, artistry, creativity, achieving optimal health, spirituality.
            </p>
            <p>
              Some people say
            </p>
            <ul>
              <li>
                I’m stuck. I don’t know what to do with my life
              </li>
              <li>
                I’m bored. Isn’t there supposed to be more than this?
              </li>
              <li>
                I want to handle conflict better
              </li>
              <li>
                I think I’m holding myself back
              </li>
              <li>
                I want something new
              </li>
              <li>
                I don’t do the things I say I want to do
              </li>
              <li>
                I feel like there’s something missing
              </li>
              <li>
                I’d like to lose weight but find I keep regaining the same 20 lbs
              </li>
            </ul>
          </Collapse.Panel>
          <Collapse.Panel header="How many sessions will I need?">
            <p>
              The amount of sessions varies from client to client based on their goals. One-on-one coaching sessions last one hour. Group sessions varies on the number of participants.
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="What experience do you have with coaching?">
            <p>
              I had my first taste of transformational coaching March of 2012 with the Association of Christian Character Development. I was instantly hooked! For the first time, I experienced honest feedback, unbiased accountability and left with a renewed sense of vision and purpose. Over the past six years I’ve pursued transformational certification in both training and coaching by <a href="http://www.gapcommunity.com" target="_blank" rel="noopener noreferrer" >GAP Community</a>.
            </p>
            <p>
              In the  fall of 2012, I piloted my first live workshop A Grace Experience for 72 brave souls in Fullerton, CA. Click here for more live workshop information (link to live workshop page). I also I currently am a full-time corporate trainer where I create character and leadership trainings for an international healthcare company.
            </p>
          </Collapse.Panel>
          <Collapse.Panel header="What else should I know?">
            <p>
              You might be staring at the screen right now, pouring over this page, wondering if you should choose to risk it and try coaching. Maybe you’ve tried a variety of programs before but found the results lacking. Maybe you’ve been disappointed a lot in life aren’t sure it’s worth it to try one . . . more . . . time. Only you can make that choice, but know you are courageous to me for even considering the risk. It is no small task to cultivate a life of wonder. I’m for you and I’m betting on you. And I’m betting you’ve got what it takes.
            </p>
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  </section>
);


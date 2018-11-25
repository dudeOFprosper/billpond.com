/*
	Quick history of my previous work experience and goals in the future!
*/

import React, { Component } from 'react';
import {css} from 'aphrodite';
import {GlobalStyle} from "../styleObjects/Global";


class History extends Component {
  render() {
    return (
      <section className={css(GlobalStyle.content)}>
	      <h1>A Little History</h1>
	      <p>Hey! I am a front-end web developer who currently lives in North Haven, Connecticut.</p>
	      <p>In 2010, I moved to Hoboken New Jersey to study Computer Science at Stevens Institute of Technology. While I was an undergrad there, I signed up to be part of their <a href="https://www.stevens.edu/directory/stevens-career-center/gaining-professional-experience/stevens-cooperative-education/co-op-undergrads">COOP</a> program. Through these internships, I learned that I loved front-end web programming and graduated with a bachelors in 2015.</p> 
	      <p>After graduation, I spent about 3 years working for Isobar as a Senior Interactive Developer. I had the chance to work closely with three awesome clients (Sothebys, HBO and Les Schwab Tire Centers) and gain a bunch of experience in creating real-world solutions to help them all keep up their technology demands. We worked on small and focused teams that were full of talented employees that covered a wide range of disciplines. Isobar gave me the opportunity to tackle a large amount of responsibility and get my hands on the technology that these large corporations rely on.</p>
	      <p>In May 2018, I decided to leave Isobar and take 6 months off from my web programming career and travel the world! Even though this was a really tough decision to make, the timing felt right and I wanted to experience this while I still had the chance. I visited a BUNCH of different countries, but Denmark and Germany were definite highlights of my trip. I really enjoyed how the time off allowed me follow some of my favorite bands and visit the places that I always wanted to explore. Now that I am back in the States, I plan on continuing my passion for front-end web development! I am also excited and willing to relocate if needed!</p>
			</section>
    );
  }
}

export default History;
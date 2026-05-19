/*
	Link to my resume, a quick callout to the places that I have worked and my education.
*/

import React, { Component } from 'react';
import {css} from 'aphrodite';
import {GlobalStyle} from "../styleObjects/Global";


class Experience extends Component {
  render() {
    return (
      <section className={css(GlobalStyle.content)}>
		    <h3> Please check out my full <a href="https://drive.google.com/file/d/13yCEQzVPLrQLfKr2YrwiDTXCm3i6lAX3/view?usp=sharing">resume</a> for details on my full experience and skill set!</h3>
		    <h1>Education</h1>
		    <p>Stevens Institute of Technology: Bachelor of Science in Computer Science, May 2015 (Graduated with Honors)</p>
		    <h2>Hands on Management Experience</h2>
			<p><a href="https://www.comparecredit.com">Compare Credit</a>: Director of Engineering: 11/2021 – 11/2023</p>
			<p><a href="https://www.dashlane.com">Dashlane</a>: Engineering Manager: 11/2021 – 11/2023</p>
			<h2>Web Developer Experience</h2>
			<p><a href="https://www.dashlane.com">Dashlane</a>: JavaScript Developer -> Senior JavaScript Developer: 02/2019 – 11/2021</p>
		    <p><a href="https://www.isobar.com/us/en/">Isobar</a>: Senior Interactive Developer: 7/2015 – 5/2018</p>
		    <h2>Internship Web Developer Experience</h2>
		    <p><a href="https://www.finalsite.com/">FinalSite</a>: Production Team Coop Intern: 5/2013 – 12/2014</p>
		    <p><a href="https://www.hess.com/">Hess</a>: Application Development Coop Intern 9/2012-12/2012</p>
		    <p><a href="https://www.bbh.com/en-us">BBH</a>: FUND Application Coop Intern: 5/2011 - 6/2012</p>
	  	</section>
    );
  }
}

export default Experience;
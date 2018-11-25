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
		    <h1> Please check out my full <a href="https://www.dropbox.com/s/wq8m8jmqf0v9882/William%20Edward%20Pond%20Resume.docx?dl=0">resume</a> for details on my full experience and skill set!</h1>
		    <h1>Education</h1>
		    <p>Stevens Institute of Technology: Bachelor of Science in Computer Science, May 2015 (Graduated with Honors)</p>
		    <h1>Web Developer Experience</h1>
		    <p><a href="https://www.isobar.com/us/en/">Isobar</a>: Senior Interactive Developer: 7/2015 – 5/2018</p>
		    <h1>Internship Web Developer Experience</h1>
		    <p><a href="https://www.finalsite.com/">FinalSite</a>: Production Team Coop Intern: 5/2013 – 12/2014</p>
		    <p><a href="https://www.hess.com/">Hess</a>: Application Development Coop Intern 9/2012-12/2012</p>
		    <p><a href="https://www.bbh.com/en-us">BBH</a>: FUND Application Coop Intern: 5/2011 - 6/2012</p>
	  	</section>
    );
  }
}

export default Experience;
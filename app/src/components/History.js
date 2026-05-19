/*
	Quick history of my previous work experience and goals in the future!
*/

import React, { Component } from "react";
import { css } from "aphrodite";
import { GlobalStyle } from "../styleObjects/Global";

class History extends Component {
  render() {
    return (
      <section className={css(GlobalStyle.content)}>
        <h1>Some History</h1>
        <p>
          In 2010, I moved to Hoboken New Jersey to study Computer Science at
          Stevens Institute of Technology. While I was an undergrad there, I
          signed up to be part of their{" "}
          <a href="https://www.stevens.edu/directory/stevens-career-center/gaining-professional-experience/stevens-cooperative-education/co-op-undergrads">
            COOP
          </a>{" "}
          program. Through these internships, I learned that I loved front-end
          web programming and graduated with a bachelors in 2015.
        </p>
        <p>
          After graduation, I spent about 3 years working for Isobar as a Senior
          Interactive Developer. I had the chance to work closely with three
          awesome clients (Sothebys, HBO and Les Schwab Tire Centers) and gain a
          bunch of experience in creating real-world solutions to help them all
          keep up their technology demands. We worked on small and focused teams
          that were full of talented employees that covered a wide range of
          disciplines. Isobar gave me the opportunity to tackle a large amount
          of responsibility and get my hands on the technology that these large
          corporations rely on.
        </p>
        <p>
          In May 2018, I decided to leave Isobar and take 6 months off from my
          web programming career and travel the world! Even though this was a
          really tough decision to make, the timing felt right and I wanted to
          experience this while I still had the chance. I visited a BUNCH of
          different countries, but Denmark and Germany were definite highlights
          of my trip. I really enjoyed how the time off allowed me follow some
          of my favorite bands and visit the places that I always wanted to
          explore.
        </p>
        <p>
          Once I returned from the trip, I landed a job at Dashlane which was a
          great experience. Seeing a company grow so quickly (during the COVID
          era) and getting to own so much of the process on the Growth teams was
          a great challenge. I spent about half my time there working as a JS
          Developer and then was promoted to a EM of three different teams.
        </p>
        <p>
          Most recently I joined CompareCredit which was a remote job...but
          allowed me to move myself and my wife Emma to Fort Collins Colorado.
          The job at CompareCredit lead me to learn a whole bunch about Chrome
          Extensions, building full ETL pipelines and of course
          comparecredit.com.
        </p>
        <p>
          Now I am looking for my next gig - hopefully finding somewhere that is
          excited to embrace the change that is coming to tech while also
          ensuring we don't lose the people along the way.
        </p>
      </section>
    );
  }
}

export default History;

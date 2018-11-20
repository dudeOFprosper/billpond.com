import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GlobalStyle} from "./styleObjects/Global";
import Header from './components/Header';
import './App.css';

import bannerPhoto from "./images/banner.png";
import profilePhoto from "./images/profile.jpg";
import tomPhoto from "./images/tom.jpg";
import kylePhoto from "./images/kyle.jpg";

const Styles = StyleSheet.create({
  columnSmall: {
    width: "38%", 
  }, 
  columnLarge: {
    width: "57%"
  },
  content: {
    backgroundColor: '#fff',
    border: "5px solid #b44131",
    margin: "20px 0px",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "left"
  },
  contentParagraph: {
    width: "100%",
    textAlign: "left"
  },
  userInfo: {
    fontSize: 14,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  profile: {
    height: "150px",
    marginRight: 20
  },
  userName: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold"
  }, 
  mood: {
    display: "block",
    fontSize: 14,
    marginTop: 10
  }, 
  topFriends: {
    justifyContent: "center",
    fontSize: 24
  },
  topFriendsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap"
  },
  topFriendsImg: {
    height: 128,
    margin: 5,
    border: "1px solid #000"
  },
  fullHeight: {
    height: "100%"
  }
});

const topFriendsImgName = css(Styles.topFriendsImg);

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="AppWrapper">
          <Header />
          <section className={css(Styles.columnSmall)}>
            <section className={css(Styles.content)}>
              <img className={css(Styles.profile)} src={profilePhoto} alt="Cool guy wearing sunglasses at PEOPLE festival" />
              <ul className={css(Styles.userInfo)}>
                <li className={css(Styles.userName)}>Bill Pond</li>
                <li>Male</li>
                <li>26 Years Old</li>
                <li>North Haven, Connecticut</li>
                <li className={css(GlobalStyle.marginTopAuto)}>Last Login: 11/13/2018</li> 
              </ul>
              <span className={css(Styles.mood)}>Mood: Alright thanks for asking &#x1F643;</span>
            </section>
            <section className={css(Styles.content)}>
              <p>"It's not like you to say sorry. I was waiting on a different story" - Nickelback</p>
              <p>"He was a skater boy. She said see you later boy. He wasn't good enough for her" - Avril Lavigne</p>
              <p>"Hey ya! Hey ya! Hey ya! Hey ya! Hey ya! Hey ya! Hey ya! Hey ya!" - OutKast</p>
            </section>
            <section className={css(Styles.content, Styles.topFriends)}>
              <h1>Top Friends</h1>
              <div className={css(Styles.topFriendsWrapper)}>
                <img className={topFriendsImgName} src={tomPhoto} alt="Tom wearing white shirt, looking over his shoulder"/>
                <img className={topFriendsImgName} src={kylePhoto} alt="Kyle with day9tv at Twitch Con"/>
                <img className={topFriendsImgName} src={tomPhoto} alt="Tom wearing white shirt, looking over his shoulder"/>
                <img className={topFriendsImgName} src={tomPhoto} alt="Tom wearing white shirt, looking over his shoulder"/>
                <img className={topFriendsImgName} src={tomPhoto} alt="Tom wearing white shirt, looking over his shoulder"/>
                <img className={topFriendsImgName} src={tomPhoto} alt="Tom wearing white shirt, looking over his shoulder"/>
                <img className={topFriendsImgName} src={tomPhoto} alt="Tom wearing white shirt, looking over his shoulder"/>
                <img className={topFriendsImgName} src={tomPhoto} alt="Tom wearing white shirt, looking over his shoulder"/>
              </div>
            </section>
          </section>
          <section className={css(Styles.columnLarge)}>
            <section className={css(Styles.content)}>
              <img src={bannerPhoto} className={css(Styles.fullHeight)} alt="Banner graphic that explains how I am a great programmer, golfer, gamer and guy"/>
            </section>
            <section className={css(Styles.content)}>
              <h1>A Little History</h1>
              <p>Hey! I am a front-end web developer who currently lives in North Haven, Connecticut.</p>
              <p>In 2010, I moved to Hoboken New Jersey to study Computer Science at Stevens Institute of Technology. While I was an undergrad there, I signed up to be part of their <a href="https://www.stevens.edu/directory/stevens-career-center/gaining-professional-experience/stevens-cooperative-education/co-op-undergrads">COOP</a> program. Through these internships, I learned that I loved front-end wbe programming and graduated with a bachelors in 2015.</p> 
              <p>After graduation, I spent about 3 years working for Isobar as a Senior Interactive Developer. I had the chance to work closely with three awesome clients (Sothebys, HBO and Les Schwab Tire Centers) and gain a bunch of experience in creating real-world solutions to help them all keep up their technology demands. We worked on small and focused teams that were full of talented employees that covered a wide range of disciplines. Isobar gave me the opportunity to tackle a large amount of responsibility and get my hands on the technology that these large corporations rely on.</p>
              <p>In May 2018, I decided to leave Isobar and take 6 months off from my web programming career and travel the world! Even though this was a really tough decision to make, the timing felt right and I wanted to experience this while I still had the chance. I visited a BUNCH of different countries, but Denmark and Germany were definte highlights of my trip. I really enjoyed how the time off allowed me follow some of my favorite bands and visit the places that I always wanted to explore. Now that I am back in the States, I plan on continuing my passion for front-end web development!</p>
            </section>
            <section className={css(Styles.content)}>
              <h1>Education</h1>
              <p>Stevens Institute of Technology: Bachelor of Science in Computer Science, May 2015 (Graduated with Honors)</p>
              <h1>Web Developer Experience</h1>
              <p><a href="https://www.isobar.com/us/en/">Isobar</a>: Senior Interactive Developer: 7/2015 – 5/2018</p>
              <h1>Internship Web Developer Experience</h1>
              <p><a href="https://www.finalsite.com/">FinalSite</a>: Production Team Coop Intern: 5/13 – 12/14</p>
              <p><a href="https://www.hess.com/">Hess</a>: Application Development Coop Intern 9/12-12/12</p>
              <p><a href="https://www.bbh.com/en-us">BBH</a>: FUND Application Coop Intern: 5/11 - 6/12</p>
              <span> Please check out my full <a href="/resume.docx">resume</a> for details on my full experience and skillset!</span>
            </section>
            <section className={css(Styles.content)}>
              <p>Thanks for checking out my silly website! I wanted it to feel like my old MySpace page, while also being a tiny place where I can host my resume and provide links to my other profiles on the internet. If you have any questions, plese don't be afraid to send me an email at <a href="mailto:william.e.pond@gmail.com">william.e.pond@gmail.com</a></p>
              <h1>Other Links</h1>
              <a href="https://www.linkedin.com/in/bill-pond-7775a25b/">LinkedIn</a>
              <a href="https://github.com/dudeOFprosper">GitHub</a>
              <a href="https://www.instagram.com/bill_pond/">Instagram</a> (Good place to see all my photos from my travels!)
              <a href="https://twitter.com/bill_pond">Twitter</a>
              <p>More information about this website can be found on my <a href="https://github.com/dudeOFprosper/billpond.com">my GitHub</a></p>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GlobalStyle} from "./styleObjects/Global";
import Header from './components/Header';
import './App.css';

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
    flexWrap: "wrap",
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
              Quick Bio with links to important pages with my stuff on it
            </section>
            <section className={css(Styles.content)}>
              Resume
            </section>
            <section className={css(Styles.content)}>
              Special Thanks?
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default App;

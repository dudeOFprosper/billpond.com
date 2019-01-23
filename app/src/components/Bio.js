/*
  Quick bio, used to display the profile photo and little quick information about myself.
*/

import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GlobalStyle} from "../styleObjects/Global";
import profilePhoto from "../images/profile.jpg";

const Styles = StyleSheet.create({
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
  }
});

class Bio extends Component {
  render() {
    return (
      <section className={css(GlobalStyle.content)}>
      	<img className={css(Styles.profile)} src={profilePhoto} alt="Cool guy wearing sunglasses at PEOPLE festival" />
        <ul className={css(Styles.userInfo)}>
          <li className={css(Styles.userName)}>Bill Pond</li>
          <li>Male</li>
          <li>26 Years Old</li>
          <li>Hoboken, NJ</li>
          <li className={css(GlobalStyle.marginTopAuto)}>Last Login: 1/23/2019</li> 
        </ul>
        <span className={css(Styles.mood)}>Mood: Alright thanks for asking <span role="img" aria-label="upside down smiley">&#x1F643;</span></span>
      </section>
    );
  }
}

export default Bio;
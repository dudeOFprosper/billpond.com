/*
	Grid of all the Friends that I have. 

	TO-DO: This could be restyled a bit to make it a bit more flexible in the future.
*/

import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GlobalStyle} from "../styleObjects/Global";

import tomPhoto from "../images/tom.jpg";
import kylePhoto from "../images/kyle.jpg";
import jordanPhoto from "../images/jordan.jpg";
import maxPhoto from "../images/max.jpg";
import ethanPhoto from "../images/ethan.jpg";
import solaPhoto from "../images/sola.jpg";

const Styles = StyleSheet.create({
  topFriendsImg: {
    margin: 5,
    border: "1px solid #000"
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
  }
});

const topFriendsImgName = css(Styles.topFriendsImg);

class Friends extends Component {
  render() {
    return (
      <section className={css(GlobalStyle.content, Styles.topFriends)}>
	      <h1>Top Friends</h1>
	      <div className={css(Styles.topFriendsWrapper)}>
	        <img height="128" width="128" className={topFriendsImgName} src={jordanPhoto} alt="Jordan holding a cat and thinking about something."/>
	        <img height="128" width="128" className={topFriendsImgName} src={kylePhoto} alt="Kyle with day9tv at Twitch Con"/>
	        <img height="128" width="128" className={topFriendsImgName} src={maxPhoto} alt="Max hanging out in Copenhagen with a great backpack and hoodie."/>
	        <img height="128" width="128" className={topFriendsImgName} src={ethanPhoto} alt="Ethan excited to be at TopGolf!"/>
	        <img height="128" width="128" className={topFriendsImgName} src={solaPhoto} alt="Sola having a beer at a local mexican restaurant"/>
	        <img height="128" width="128" className={topFriendsImgName} src={tomPhoto} alt="Tom wearing white shirt, looking over his shoulder"/>
	      </div>
   	  </section>
    );
  }
}

export default Friends;
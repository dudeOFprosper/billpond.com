import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GlobalStyle} from "./styleObjects/Global";

import Header from './components/Header';
import Bio from './components/Bio';
import Quotes from './components/Quotes';
import Friends from './components/Friends';
import History from './components/History';
import Experience from './components/Experience';
import Thanks from './components/Thanks';

import './App.css';

import bannerPhoto from "./images/banner.png";

const Styles = StyleSheet.create({
  columnSmall: {
    width: "38%", 
  }, 
  columnLarge: {
    width: "57%"
  },
  contentParagraph: {
    width: "100%",
    textAlign: "left"
  },
  fullHeight: {
    height: "100%"
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="AppWrapper">
          <Header />
          <section className={css(Styles.columnSmall)}>
            <Bio />
            <Quotes />
            <Friends />
          </section>
          <section className={css(Styles.columnLarge)}>
            <section className={css(GlobalStyle.content)}>
              <img src={bannerPhoto} className={css(Styles.fullHeight)} alt="Banner graphic that explains how I am a great programmer, golfer, gamer and guy"/>
            </section>
            <History />
            <Experience />
            <Thanks />
          </section>
        </section>
      </div>
    );
  }
}

export default App;

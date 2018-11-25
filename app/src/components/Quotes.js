/*
	A few quotes from some of the best songs in the early 00s.
*/

import React, { Component } from 'react';
import {css} from 'aphrodite';
import {GlobalStyle} from "../styleObjects/Global";


class Quotes extends Component {
  render() {
    return (
      <section className={css(GlobalStyle.content)}>
      <p>"It's not like you to say sorry. I was waiting on a different story" - Nickelback</p>
      <p>"He was a skater boy. She said see you later boy. He wasn't good enough for her" - Avril Lavigne</p>
      <p>"Hey ya! Hey ya! Hey ya! Hey ya! Hey ya! Hey ya! Hey ya! Hey ya!" - OutKast</p>
    </section>
    );
  }
}

export default Quotes;
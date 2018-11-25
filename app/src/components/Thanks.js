/*
	Links to my other internet profiles and a special thanks for checking out the site!
*/

import React, { Component } from 'react';
import {css} from 'aphrodite';
import {GlobalStyle} from "../styleObjects/Global";

class Thanks extends Component {
  render() {
    return (
     <section className={css(GlobalStyle.content)}>
		  <p>Thanks for checking out my silly website! I wanted it to feel like my old MySpace page, while also being a tiny place where I can host my resume and provide links to my other profiles on the internet. If you have any questions, please don't be afraid to send me an email at <a href="mailto:william.e.pond@gmail.com">william.e.pond@gmail.com</a></p>
		  <h1>Other Links</h1>
		  <p><a href="https://www.linkedin.com/in/bill-pond-7775a25b/">LinkedIn</a></p>
		  <p><a href="https://github.com/dudeOFprosper">GitHub</a></p>
		  <p><a href="https://www.instagram.com/bill_pond/">Instagram</a> (Good place to see all my photos from my travels!)</p>
		  <p><a href="https://twitter.com/bill_pond">Twitter</a></p>
		  <p>More information about this website can be found on <a href="https://github.com/dudeOFprosper/billpond.com">my GitHub</a></p>
		</section>
    );
  }
}

export default Thanks;
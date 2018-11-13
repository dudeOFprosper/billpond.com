import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GlobalStyle} from "../styleObjects/Global";

const Styles = StyleSheet.create({
	nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white'
  },
  navItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white'
  },
  navLink: {
  	color: 'white', 
    padding: '0px 10px'
  }
});

const undecorated = css(GlobalStyle.undecorated, Styles.navLink);

class Header extends Component {
  render() {
    return (
    	<header className={css(Styles.header)}>
    		<nav className={css(Styles.nav)}>
	    		<ul className={css(Styles.navItems)} role="navigation">
	    			<li><a className={undecorated} href="/">Home</a></li>
	  				<li><a className={undecorated} href="/">Browse People</a></li>
	  				<li><a className={undecorated} href="/">Find Friends</a></li>
	  				<li><a className={undecorated} href="/">Local</a></li>
	  				<li><a className={undecorated} href="/">Music</a></li>
	  				<li><a className={undecorated} href="/">Video</a></li>
	  				<li><a className={undecorated} href="/">Bill's Page</a></li>
	  				<li><a className={undecorated} href="/">Video</a></li>
	    		</ul>
	    		<ul className={css(Styles.navItems, GlobalStyle.marginLeft)} role="navigation">
		    		<li><a className={undecorated} href="/">Log In</a></li>
		  			<li><a className={undecorated} href="/">Sign Up</a></li>
	    		</ul>
	    	</nav>
      </header>
    );
  }
}

export default Header;
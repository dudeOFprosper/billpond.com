import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import {GlobalStyle} from "../styleObjects/Global";
import logo from "../images/myspace.jpg";

const Styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "#f6deb4", 
    padding: '30px 10px 0px 10px',
    width: "100%"
  },
	nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white',
    padding: '10px 0',
    marginTop: 10,
    borderTop: '1px solid #333'
  },
  navItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  navLink: {
  	color: '#000', 
    padding: '0px 20px 0px 0px'
  },
  logo: {
    width: '200px'
  }
});

const undecorated = css(GlobalStyle.undecorated, Styles.navLink);

class Header extends Component {
  render() {
    return (
    	<header className={css(Styles.header)}>
        <img src={logo} alt="Myspace Logo" className={css(Styles.logo)}/>
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
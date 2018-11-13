import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import './App.css';

const styles = StyleSheet.create({
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  }
});

const name = css(styles.welcome);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className={name}>
          <h1> Welcome to Bill Pond.com!</h1>
        </header>
      </div>
    );
  }
}

export default App;

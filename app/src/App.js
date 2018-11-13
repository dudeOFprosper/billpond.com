import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import Header from './components/Header';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="AppWrapper">
          <Header />
        </section>
      </div>
    );
  }
}

export default App;

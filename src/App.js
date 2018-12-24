import React, { Component } from 'react';
import logo from './SJ_Icon_small.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            This is Sarah's cool new website.
          </h1>
          <p>
            Made by Sam, her amazing husband for Christmas 2018
          </p>
          <img src={logo} className="App-logo" alt="logo" />

        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Home.css';
import logo from '../logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="Digital Patterns Company Logo" />
          <h1 className="home-title">BPMN Editor with Form IO integration</h1>
        </header>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#AboutMe"> About Me</a>
              </li>
              <li>
                <a href="#Projects"> My Projects</a>
              </li>
              <li>
                <a href="#Resume"> Resume</a>
              </li>
              <li>
                <a href="#Contact">Contact Me</a>
              </li>
            </ul>
          </nav>
          <div id="home">
            <Home />
          </div>
          <div id="AboutMe">
            <AboutMe />
          </div>
          <div id="Projects">
            <Projects />
          </div>
          <div id="Resume">
            <Resume />
          </div>
          <div id="Contact">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

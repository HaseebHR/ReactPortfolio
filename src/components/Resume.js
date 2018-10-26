import React, { Component } from 'react';

export default class Project extends Component {
  render() {
        return (
            <div id="resume">
                <h1>Resume</h1>
                <header>
                    <h2>Haseeb Ur Rehman</h2>
                    <div><a href="phone:5614549295">561-454-9295</a></div>
                    <a href="hrehman@email.lynn.edu">hrehman@email.lynn.edu</a>
                  <div id="add">  <p> Boca Raton, Fl </p> </div>
                </header>
                <ol id="content">
                    <li>
                        <h3>Professional Skills</h3>
                        <ul>
                            <li>C sharp</li>
                            <li>CSS3 & Html</li>
                            <li>JavaScript/ React</li>
                              <li>Ruby/ AngularJs</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Expereince</h3>
                        <h3>Associate Software Engineer</h3>
                        <p><b>  Systems Limited </b></p>
                        <ul>
                            <li>11/08/17 - 11/08/18</li>
                            <li>Associate Software Engineer</li>
                        </ul>
                    </li>
                </ol>
            </div>
        )
    }
}

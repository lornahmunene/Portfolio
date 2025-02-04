import React from 'react';
import './styles.css';

import reactLogo from '../assets/react-logo.png';
import javascriptLogo from '../assets/javascript-logo.png';
import htmlLogo from '../assets/html-logo.png';
import cssLogo from '../assets/css-logo.png';
import pythonLogo from '../assets/python-logo.png';
import flaskLogo from '../assets/flask-logo.png';

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Tech Stack</h2>
      
      <div className="skills-grid">
        <div className="skill-item">
          <img src={reactLogo} alt="React" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <img src={javascriptLogo} alt="JavaScript" />
          <p>Javascript</p>
        </div>
        <div className="skill-item">
          <img src={htmlLogo} alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src={cssLogo} alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src={pythonLogo} alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src={flaskLogo} alt="Flask" />
          <p>Flask</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

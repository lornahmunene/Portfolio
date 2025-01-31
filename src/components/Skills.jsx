import React from 'react';
import './styles.css';

function Skills() {
  return (
    <div className="skills-page">
      <h1 className="skills-header">My Skills</h1>
      <div className="skills-container">
        {/* Skill: HTML */}
        <div className="skill">
          <h3>HTML</h3>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: '90%' }}>90%</div>
          </div>
        </div>

        {/* Skill: CSS */}
        <div className="skill">
          <h3>CSS</h3>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: '85%' }}>85%</div>
          </div>
        </div>

        {/* Skill: JavaScript */}
        <div className="skill">
          <h3>JavaScript</h3>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: '80%' }}>80%</div>
          </div>
        </div>

        {/* Skill: React */}
        <div className="skill">
          <h3>React</h3>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: '75%' }}>75%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

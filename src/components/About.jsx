import React from 'react';
import './styles.css';
import myPhoto from '../assets/my-photo.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="about">
      <h1>About Me</h1>
      <h2>Name:Munene Lornah Wanjiku</h2>
      <h2>Age:19</h2>
      <h2>email:munenelornah9@gmail.com</h2>
      <h2>Education:2020-2023-AllianceGirls' High School</h2>
        <h2>2024-present-Jomo Kenyatta University of Agriculture and Technology
      </h2>

      </div>
      <div className="my-photo">
      <img src={myPhoto} alt="Lornah Wanjiku" className="profile-photo" />
        <h1>Lornah Wanjiku</h1>
      </div>
    </div>
  );
}

export default About;

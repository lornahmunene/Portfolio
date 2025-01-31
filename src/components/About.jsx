import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import myPhoto from '../assets/my-photo.jpg';

function About() {
  return (
    <div className="about-container">
      <Container>
        <h1>Lornah Wanjiku</h1>
        <p>
          Lornah Wanjiku is a passionate Full Stack Developer with a strong drive for building 
          innovative and efficient solutions. Her love for technology began at the age of 10, fueling her 
          curiosity and determination to excel in the field. Though she embraces the fact that there’s always 
          more to learn, her dedication and work ethic set her apart.
        </p>
        <p>
          Proficient in JavaScript and Python, Lornah has mastered frameworks such as React and backend 
          technologies like MySQL. She thrives on problem-solving, crafting seamless user experiences, and 
          continuously exploring new tools and technologies to stay ahead in the ever-evolving tech landscape.
        </p>

        {/* Social Media Icons Section */}
        <div className="social-media-icons">
          <a href="https://www.facebook.com/share/18BgD94juj/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/lornahs.pov/#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://x.com/LornahWanj93400" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </Container>

      <div className="about-my-photo">
        <img src={myPhoto} alt="Lornah Wanjiku" className="profile-photo" />
      </div>
    </div>
  );
}

export default About;

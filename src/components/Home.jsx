import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './styles.css';
import myPhoto from '../assets/my-photo.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-title">
          <h1>Hi! I am Lornah Wanjiku</h1>
        </div>
        <div className="home-description">
        <p>
          From a curious beginner to a passionate Full-Stack Developer, I love
          crafting meaningful digital experiences that solve real-world
          problems.
        </p>
        </div>
        <Link to="/about">
          <button className="learn-more">Learn More</button>
        </Link>
      </div>
      <div className="my-photo">
        <img src={myPhoto} alt="Lornah Wanjiku" className="profile-photo" />
        <div className="description">
        <h2>Full stack Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;

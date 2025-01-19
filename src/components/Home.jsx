import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './styles.css';
import myPhoto from '../assets/my-photo.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <h1>Hi! I am Lornah Wanjiku</h1>
        <p>
          From a curious beginner to a passionate Full-Stack Developer, I love
          crafting meaningful digital experiences that solve real-world
          problems.
        </p>
        <Link to="/about">
          <button className="learn-more">Learn More</button>
        </Link>
      </div>
      <div className="my-photo">
        <img src={myPhoto} alt="Lornah Wanjiku" className="profile-photo" />
        <div className="description">
        <h2>full stack</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import './styles.css';
import myPhoto from '../assets/my-photo.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <h1>Hi! I am Lornah.</h1>
        <h1>Full-Stack Developer</h1>
      </div>
      <div className="my-photo">
      <img src={myPhoto} alt="Lornah Wanjiku" className="profile-photo" />
        <h1>Lornah Wanjiku</h1>
      </div>
    </div>
  );
}

export default Home;



import { Link } from 'react-router-dom';
import './AboutMe.css';
import Profile from './Profile.jpg';

function AboutMe() {
  return (
    <div className="aboutme">
      <h1 className='aboutmeheader'>About Me</h1>
      <div className="content">
        <p>
        Hello! I am a  passionate and detail-oriented full-stack web developer. I have a strong drive for transforming ideas into real-life projects and enjoy bringing creativity to the world of coding.
          Feel free to take a look around my site to view my best work, resume, and if you have any questions, concerns,
          or business opportunities, please{" "}
          <Link to="/Contact">contact me</Link>.
        </p>
        <img src={Profile} alt="Profile Pic" />
      </div>
    </div>
  );
}

export default AboutMe;
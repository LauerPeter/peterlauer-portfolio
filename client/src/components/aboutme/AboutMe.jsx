

import { Link } from 'react-router-dom';
import './AboutMe.css';
import Profile from './Profile.jpg';

function AboutMe() {
  return (
    <div className="aboutme">
      <h1 className='aboutmeheader'>About Me</h1>
      <div className="content">
        <p>
          Hello! I am a young, passionate, and stubborn web-developer looking to apply my skills to the career world.
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
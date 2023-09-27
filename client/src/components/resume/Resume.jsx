

import React, { useRef } from 'react';
import './Resume.css';
import docxFile from './resume.docx'

class DocxDownload extends React.Component {
  handleDownload = () => {
    try {
      window.open(docxFile, '_blank');
    } catch (error) {
      console.error('Error downloading DOCX file:', error);
    }
  };

  render() {
    return (
      <button onClick={this.handleDownload}>Download DOCX</button>
    );
  }
}

function Resume() {

  const pdfContainerRef = useRef(null);

  return (
    <div className='resume-flex-container'>
      <div className='resume-container' style={{ backgroundColor: 'white'}} ref={pdfContainerRef}>
      
        <h1 className='resumeHeader'>Peter Lauer</h1>
        <div className='info'>
          <p> | Minneapolis, MN |
            LinkedIn: <a href="https://www.linkedin.com/in/peter-lauer-7898aa276/"> /PeterLauerLinkedIn</a> | 
            GitHub: <a href="https://github.com/LauerPeter"> /PeterLauerGitHub</a> | 
          </p>
        </div>
        <div className='intro'>
          <p>
          Full-Stack web developer eager to begin a programming career. Earned a Full-Stack Web Development certificate from the University of Minnesota Bootcamp as well as an Associate of Arts degree from Colorado Mountain College. The AA degree has provided significant leverage for development on the front-end interface of applications. Keen attention to detail and a passion for building and developing ideas into real-life projects. Constantly eager to problem-solve and think creatively to solve difficult problems.
          </p>
        </div>
        <div className='technicalSkills'>
          <h1 className='resumeHeader'>TECHNICAL SKILLS</h1>
          <ul>
            <li>HTML, Cascading Style Sheets (CSS), Bootstrap (Framework) </li>
            <li>JavaScript, React, Node, jQuery, Express</li>
            <li>Api, MongoDB, SQL, NoSQL, MySQL2</li>
            <li>GitHub, GitLab, Debugging, Project Management</li>
          </ul>
        </div>
        <div className='projects'>
          <h1 className='resumeHeader'>PROJECTS</h1>
          <ul>
            <p className='classBHeader'>Hull & Deck | <a href="https://github.com/bpoole53/group-project-3-fake-store">GitHub Link</a> | <a href="https://hull-and-anchor-a86df0a0dbad.herokuapp.com/">Deployed Link</a></p>
              <li>Summary: Hull & Deck is a fake ecommerce site for selling watercraft.</li>
              <li>Role: Back-end development</li>
              <li>Tools: Mongoose, Mongodb, Express, JavaScript, React, seeding</li>
            <p className='classBHeader'>nosql-socialnetwork | <a href="https://github.com/LauerPeter/nosql-socialnetwork">GitHub Link</a></p>
              <li>Summary: API set up for a social network platform.</li>
              <li>Role: Sole Author</li>
              <li>Tools: Mongoose, Mongodb, Express, JavaScript </li>
            <p className='classBHeader'>sql-employee-tracker | <a href="https://github.com/LauerPeter/sql-employee-tracker">GitHub Link</a></p>
              <li>Summary: View all departments, roles, and employees at any given time. Also update any information on employees etc.</li>
              <li>Role: Sole Author</li>
              <li>Tools: Mysql2, Inquirer, Express, JavaScript </li>
          </ul>
        </div>
        <div className='experience'>
          <h1 className='resumeHeader'>EXPERIENCE</h1>
            <p className='classBHeader'> GitHub | June 2023 - Present</p>
          <ul>
            <li>Refer to GitHub account to see a full list of projects - <a href="https://github.com/LauerPeter">GitHub Link</a></li>
          </ul>
            <p className='classBHeader'>Executive Home Management | 2021 - 2023</p>
          <ul>
            <li>Property management - abundance of responsibilities for home and lawn.</li>
          </ul>
        </div>
        <div className='education'>
          <h1 className='resumeHeader'>EDUCATION</h1>
          <p className='classBHeader'>Colorado Mountain College | Associate of Arts (AA)</p>
          <ul>
            <li>Writing</li>
            <li>Communication</li>
          </ul>
          <p className='classBHeader'>University of Minnesota Bootcamp | Full-Stack Web Development Certificate</p>
          <ul>
            <li>Full-Stack Web Development</li>
          </ul>
        </div>
         <DocxDownload />
      </div>
    </div>
  );
}


export default Resume;


import React, { useRef } from 'react';
import './Resume.css';


function Resume() {

  const pdfContainerRef = useRef(null);

  return (
    <div className='resume-flex-container'>
      <div className='resume-container' style={{ backgroundColor: 'white'}} ref={pdfContainerRef}>
        <h1 className='resumeHeader'>PETER LAUER</h1>
        <div className='info'>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/lauerpeter/">LinkedIn-URL</a> |
            GitHub: <a href="https://github.com/LauerPeter?tab=repositories">GitHub-URL</a> |
          </p>
        </div>
        <div className='intro'>
          <p>
            Full-Stack web developer with a strong passion for transforming ideas into real-life projects. Earned Full-Stack Web Development Certificate from the University of Minnesota Bootcamp and an Associate of Arts degree from Colorado Mountain College. Proficient in both front-end and back-end development, I bring keen attention to detail and a problem-solving mindset to every project.
          </p>
        </div>
        <div className='technicalSkills'>
          <h1 className='resumeHeader'>TECHNICAL SKILLS</h1>
          <ul>
            <li>HTML , Cascading Style Sheets (CSS), Bootstrap (Framework)</li>
            <li>JavaScript, React, Node, jQuery, Express</li>
            <li>API, MongoDB, SQL, NoSQL, MySQL2</li>
            <li>GitHub, GitLab, Debugging, Project Management</li>
            <li>Fast learner, team player, communication, writing</li>
          </ul>
        </div>
        <div className='projects'>
          <h1 className='resumeHeader'>PROJECTS</h1>
          <ul>
            <p className='classBHeader'>Hull & Deck | <a href="https://github.com/bpoole53/group-project-3-fake-store">GitHub Link</a> | <a href="https://hull-and-anchor-a86df0a0dbad.herokuapp.com/">Deployed Link</a> | Agile group development</p>
            <li>Summary: Hull & Deck is a fictitious e-commerce site for selling watercraft, showcasing React skills.</li>
            <li>Development: Designed and developed the back-end using MongoDB as the database and Express.js for routing. Seeded the database with 20 different watercraft ensuring the data accurately represented the products. Created robust routes for manipulating data across the site, allowing users to seamlessly browse and interact with products. Built product and user models and implemented a cart schema attached to the user model, enabling users to add products to their cart. To facilitate data manipulation and interaction, created controllers for cart, product, and user.</li>
            <li>Tools: MongoDB, Express, JavaScript, React, CSS, Mongoose</li>
            <p className='classBHeader'>NoSQL-SocialNetwork | <a href="https://github.com/LauerPeter/nosql-socialnetwork">GitHub Link</a> | Sole Author</p>
            <li>Summary: The NoSQL Social Network API is a robust backend solution for a social networking platform, utilizing MongoDB and Express.js. The back-end application is designed to handle vast amounts of unstructured data efficiently.</li>
            <li>Development: Uses MongoDB as the primary data storage solution. Designed and implemented thought and user models to represent the core data structures, allowing users to create accounts, share thoughts, react to thoughts, and manage their friend lists. Added a reaction schema to the thought model to enable users to interact with thoughts. Created a set of 15 different routes that facilitated data manipulation throughout the back-end of the application.</li>
            <li>Tools: MongoDB, Express, Mongoose</li>
            <p className='classBHeader'>SQL-Employee-Tracker | <a href="https://github.com/LauerPeter/sql-employee-tracker">GitHub Link</a> | Sole Author</p>
            <li>Summary: Application that utilizes the command line to build and maintain a database for a company using SQL. It runs on inquirer and uses queries to view all departments, roles, and employees, add new departments, roles, and employees, and update employee roles.</li>
            <li>Development: Utilized SQL to design and create tables corresponding to departments, employees, and roles. Added an intuitive user interface using inquirer prompts, allowing users to view all departments, roles, and employees, add new departments, roles, and employees, and update employee roles with ease. The schema for employees included essential details like ID, first name, last name, role, and a manager ID for that employee.</li>
            <li>Tools: MySQL2, Inquirer, JavaScript</li>
          </ul>
        </div>
        <div className='experience'>
          <h1 className='resumeHeader'>EXPERIENCE</h1>
          <p className='classBHeader'>GitHub | June 2023 - Present</p>
          <ul>
            <li>Actively contributing to past projects and creating new projects with different technologies to continue to gain experience.</li>
          </ul>
        </div>
        <div className='education'>
          <h1 className='resumeHeader'>EDUCATION</h1>
          <p className='classBHeader'>University of Minnesota | Full-Stack Web Development Certificate | 2023</p>
          <ul>
            <li>Skills Developed: Computer Science</li>
          </ul>
          <p className='classBHeader'>Colorado Mountain College | Associate of Arts (AA) | 2020-2022</p>
          <ul>
            <li>Skills Developed: Writing and Communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
  }

export default Resume;


import React, { useRef } from 'react';
import './Resume.css';

function Resume() {
  const pdfContainerRef = useRef(null);

  return (
    <div className='resume-flex-container'>
      <div className='resume-container' style={{ backgroundColor: 'white' }} ref={pdfContainerRef}>
        <h1 className='resumeHeader'>PETER LAUER</h1>
        <div className='info'>
          <ul>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/lauerpeter/">LinkedIn-URL</a> | GitHub: <a href="https://github.com/LauerPeter?tab=repositories">GitHub-URL</a> | Portfolio: Portfolio-URL</li>
          </ul>
        </div>
        <div className='intro'>
          <p>
            Full-Stack web developer with a strong passion for transforming ideas into real-life projects. Earned a Full-Stack Web Development Certificate from the University of Minnesota Bootcamp and an Associate of Arts degree from Colorado Mountain College. Proficient in both front-end and back-end development, I bring keen attention to detail and a problem-solving mindset to every project.
          </p>
        </div>
        <div className='technicalSkills'>
          <h1 className='resumeHeader'>TECHNICAL SKILLS</h1>
          <ul>
            <li>HTML , Cascading Style Sheets (CSS), Bootstrap (Framework), Tailwind (Framework)</li>
            <li>JavaScript, React, Node, jQuery</li>
            <li>API, MongoDB, SQL, NoSQL, MySQL2</li>
            <li>GitHub, GitLab, debugging, project management, version control</li>
            <li>Fast learner, team player, written and verbal communication, time and organizational management</li>
          </ul>
        </div>
        <div className='currentProject'>
          <h1 className='resumeHeader'>CURRENT PROJECT</h1>
          <p className='classBHeader'>FreeGamezHud | <a href="https://github.com/LauerPeter/FreeGamezHud">GitHub Link</a> | Sole Author</p>
          <ul>
            <li>Summary: FreeGamezHud is a React application designed to provide a platform for managing, exploring, and accessing free online games - utilizes Rapid API (freetogame.com).</li>
            <li>Development: Solely conceptualized and executed the entire development lifecycle of FreeGamezHud. Leveraged React.js for building a fully responsive and dynamic user interface. Implemented user authentication functionalities for secure sign-up and login processes. Developed a personalized user profile system, allowing users to save and manage their favorite games. Integrated a robust game sorting system based on various criteria such as alphabetical, popularity, release date, category, and platform. Engineered a backend infrastructure using Node.js and Express, with MongoDB as the primary database for seamless data storage when signing up and logging in. Utilized Axios for efficient API requests between the backend solution for authentication and the Rapid API when saving games to the user profile.</li>
            <li>Tools: MongoDB, Express, JavaScript, React.js, CSS, HTML, Mongoose, Webpack, Node.js, Axios, Cors.</li>
          </ul>
        </div>
        <div className='pastProjects'>
          <h1 className='resumeHeader'>PAST PROJECTS</h1>
          <ul>
           <p className='classBHeader'>Hull & Deck | <a href="https://github.com/bpoole53/group-project-3-fake-store">GitHub Link</a> | <a href="https://hull-and-anchor-a86df0a0dbad.herokuapp.com/">Deployed Link</a> | Agile group development</p>
            <li>Summary: Hull & Deck is a fictitious e-commerce site for selling watercraft, showcasing React skills.</li>
            <li>Development: Designed and developed the back-end using MongoDB as the database and Express.js for routing. Seeded the database with 20 different watercraft ensuring the data accurately represented the products. Created robust routes for manipulating data across the site, allowing users to seamlessly browse and interact with products. Built product and user models and implemented a cart schema attached to the user model, enabling users to add products to their cart. To facilitate data manipulation and interaction, created controllers for cart, product, and user.</li>
            <li>Tools: MongoDB, JavaScript, React, CSS, HTML, Mongoose, Node.js, Axios</li>

          <p className='classBHeader'>NoSQL-SocialNetwork | <a href="https://github.com/LauerPeter/nosql-socialnetwork">GitHub Link</a> | Sole Author</p>
            <li>Summary: The NoSQL Social Network API is a robust backend solution for a social networking platform, utilizing MongoDB and Express.js. The back-end application is designed to handle vast amounts of unstructured data efficiently.</li>
            <li>Development: Uses MongoDB as the primary data storage solution. Designed and implemented thought and user models to represent the core data structures, allowing users to create accounts, share thoughts, react to thoughts, and manage their friend lists. Added a reaction schema to the thought model to enable users to interact with thoughts. Created a set of 15 different routes that facilitated data manipulation throughout the back-end of the application.</li>
            <li>Tools: MongoDB, Mongoose, Node.js, JavaScript</li>

          <p className='classBHeader'>SQL-Employee-Tracker | <a href="https://github.com/LauerPeter/sql-employee-tracker">GitHub Link</a> | Sole Author</p>
            <li>Summary: Application that utilizes the command line to build and maintain a database for a company using SQL. It runs on inquirer and uses queries to view all departments, roles, and employees, add new departments, roles, and employees, and update employee roles.</li>
            <li>Development:  Utilized SQL to design and create tables corresponding to departments, employees, and roles. Added an intuitive user interface using inquirer prompts, allowing users to view all departments, roles, and employees, add new departments, roles, and employees, and update employee roles with ease. The schema for employees included essential details like ID, first name, last name, role, and a manager ID for that employee.</li>
            <li>Tools: MySQL2, Inquirer, JavaScript, Node.js</li>
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

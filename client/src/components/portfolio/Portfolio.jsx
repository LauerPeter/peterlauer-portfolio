

import React from 'react';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRocket } from 'react-icons/fa';



function Portfolio() {
  const projects = [
    {
      title: "Hull & Deck",
      description: "Hull & Deck is a fake eCommerce site that specializes in high-class watercraft. Search for several different watercrafts under large and small vessels. See listed prices and add these items to a shopping cart. Users are able to view as a guest or sign up for a account. The site is currently under maintence to get the shopping cart working.",
      role: "back-end development",
      tools: "HTML, CSS, JavaScript",
      githubUrl: "https://github.com/bpoole53/group-project-3-fake-store",
      deployedUrl:"https://hull-and-anchor-a86df0a0dbad.herokuapp.com/"
    },
    {
      title: "sql-employee-tracker",
      description: "Create a Data Base for your company using the command line. Keep track of all your employees, roles, and departments through this simple application.View all departments, roles, and employees at any given time. As well as update any information on employees etc.",
      role: "Sole author",
      tools: "JavaScript, SQL, MYSQL2, Inquirier",
      githubUrl: "https://github.com/LauerPeter/sql-employee-tracker"
    },
    {
      title: "password-generator",
      description: "This site will create a password for you. The password is generated based off your choosing of characters between 8-128 as well as, symbols, numbers, special, and upper and lower case characters.",
      role: "Sole author",
      tools: "JavaScript, HTML, CSS",
      githubUrl: "https://github.com/LauerPeter/password-generator",
      deployedUrl: "https://lauerpeter.github.io/password-generator/"
    },
    {
      title: "node-readme",
      description: "This application generates a readme file to use for projects. It works much quicker than mannually creating one.",
      role: "Sole author",
      tools: "JavaScript, Inquirier",
      githubUrl: "https://github.com/LauerPeter/node-readme"
    },
    {
      title: "weather-dashboard",
      description: "A simple weather dashboard application that allows users to search for the current weather and 5-day forecast of a city.",
      role: "Sole author",
      tools: "API, JavaScript, CSS",
      githubUrl: "https://github.com/LauerPeter/weather-dashboard",
      deployedUrl: "https://lauerpeter.github.io/weather-dashboard/"
    },
    {
      title: "nosql-socialnetwork",
      description: "API set up for a social network platform. Create thoughts to share with others. API works to create users, thoughts, and reactions to thoughts. You can add friends also.",
      role: "Sole author",
      tools: "JavaScript, Express, Mongoose, MongoDB",
      githubUrl: "https://github.com/LauerPeter/nosql-socialnetwork",
    }
  ];

  return (
    <div>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-background">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Role: {project.role}</p>
            <p>Tools: {project.tools}</p>
            <div>
              <button className="buttonlinkrepo" onClick={() => window.open(project.githubUrl, "GitHub")}>
              <FontAwesomeIcon icon={['fab', 'github']} />  GitHub Repo
              </button>
              {project.deployedUrl && (
              <button className="buttonlinkapp" onClick={() => window.open(project.deployedUrl, "live-site")}>
               <FaRocket /> Deployed App
              </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}


export default Portfolio;
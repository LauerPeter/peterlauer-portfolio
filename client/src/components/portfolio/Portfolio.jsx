

import React, {useState} from 'react';
import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaRocket } from 'react-icons/fa';



function Portfolio() {
  const [categoryFilter, setCategoryFilter] = useState('all');

  const fullStack = ["FreeGamezHud", "Hull & Deck", "weather-dashboard", "DeezerDen"];
  const frontEnd = ["password-generator", "Workday-schedular", "webapi-codequiz"];
  const backEnd = ["object-relational-mapping", "nosql-socialnetwork"];
  const pwa = "JATE";
  const commandLine = ["sql-employee-tracker", "node-readme"];
  const gitHubGist = "Regex Tutorial: Matching an Email";

  const projects = [
    {
      title: "FreeGamezHud",
      description: "FreeGamezHud is a React application designed to provide a platform for managing and exploring free online games. This project encompasses local storage and user authentication - Sign up/login, a dynamic header with navigation links, and a responsive layout for an enhanced user experience. All games are provided by http://freetogame.com/",
      role: "Sole Author",
      tools: "MongoDB, Express, JavaScript, React, CSS, Axios, API",
      githubUrl: "https://github.com/LauerPeter/freegamezhud",
    },
    {
      title: "Hull & Deck",
      description: "Hull & Deck is a fictitious e-commerce site for selling watercraft, showcasing React skills. Designed and developed the back-end using MongoDB as the database and Express.js for routing. Seeded the database with 20 different watercraft ensuring the data accurately represented the products. Created robust routes for manipulating data across the site, allowing users to seamlessly browse and interact with products. Built product and user models and implemented a cart schema attached to the user model, enabling users to add products to their cart. To facilitate data manipulation and interaction, created controllers for cart, product, and user.",
      role: "Back-end development, agile group enviroment",
      tools: "MongoDB, Express, JavaScript, React, CSS, Mongoose",
      githubUrl: "https://github.com/bpoole53/group-project-3-fake-store",
      deployedUrl:"https://hull-and-anchor-a86df0a0dbad.herokuapp.com/"
    },
    {
      title: "sql-employee-tracker",
      description: "Application that utilizes the command line to build and maintain a database for a company using SQL. It runs on inquirer and uses queries to view all departments, roles, and employees, add new departments, roles, and employees, and update employee roles. Utilized SQL to design and create tables corresponding to departments, employees, and roles. Added an intuitive user interface using inquirer prompts, allowing users to view all departments, roles, and employees, add new departments, roles, and employees, and update employee roles with ease. The schema for employees included essential details like ID, first name, last name, role, and a manager ID for that employee.",
      role: "Back-end development, sole author",
      tools: "JavaScript, SQL, MYSQL2, Inquirier",
      githubUrl: "https://github.com/LauerPeter/sql-employee-tracker"
    },
    {
      title: "password-generator",
      description: "The Application offers a solution to the challenge of devising strong and secure passwords. It provides a quick and easy way to generate unique passwords, reducing the need to create complex passwords manually and enhancing online security.",
      role: "Sole author",
      tools: "JavaScript, HTML, CSS",
      githubUrl: "https://github.com/LauerPeter/password-generator",
      deployedUrl: "https://lauerpeter.github.io/password-generator/"
    },
    {
      title: "node-readme",
      description: "The project is a command-line tool that automates the creation of README files for GitHub repositories. It streamlines the readme creation process, making it more efficient for developers.",
      role: "Sole author",
      tools: "JavaScript, Inquirier",
      githubUrl: "https://github.com/LauerPeter/node-readme"
    },
    {
      title: "weather-dashboard",
      description: "The Weather Dashboard is an application that allows users to search for the current weather and 5-day weather forecast of a city. When you first visit the website, a default city's weather information will be displayed, and you can search for any other city within the data available from OpenWeatherMap.",
      role: "Sole author",
      tools: "HTML, JavaScript, CSS, OpenWeatherMap API",
      githubUrl: "https://github.com/LauerPeter/weather-dashboard",
    },
    {
      title: "object-relational-mapping",
      description: "RESTful API for managing catagories, products, and product-tags for a fictitious online store . It supports CRUD operations, manages associations between these entities, ensures data integrity through error handling and validation, and follows RESTful design principles for a user-friendly and predictable API.",
      role: "Back-end Development, sole author",
      tools: "JavaScript, mysql2, REST API",
      githubUrl: "https://github.com/LauerPeter/object-relational-mapping",
    },
    {
      title: "Workday-schedular",
      description: "This project was created to demonstrate the use of JavaScript and jQuery for building interactive web applications. It serves as a practical tool for managing daily tasks and appointments. Task Management -- Adding and saving tasks for specific hours of the day. Dynamic Time Block Styling -- Highlighting past, present, and future time blocks based on the current time. Local Storage Integration -- Storing tasks in your browser's local storage for persistence. Current Date Display -- Displaying the current date in the header.",
      role: "Sole Author",
      tools: "HTML, CSS, JavaScript",
      githubUrl: "https://github.com/LauerPeter/workday-scheduler",
      deployedUrl: "https://lauerpeter.github.io/workday-scheduler/",
    },
    {
      title: "nosql-socialnetwork",
      description: "The NoSQL Social Network CRUD operation API is a robust backend solution for a social networking platform, utilizing MongoDB and Express.js. The back-end application is designed to handle vast amounts of unstructured data efficiently. Uses MongoDB as the primary data storage solution. Designed and implemented thought and user models to represent the core data structures, allowing users to create accounts, share thoughts, react to thoughts, and manage their friend lists. Added a reaction schema to the thought model to enable users to interact with thoughts. Created a set of 15 different routes that facilitated data manipulation throughout the back-end of the",
      role: "Back-end development, Sole author",
      tools: "JavaScript, Express, Mongoose, MongoDB",
      githubUrl: "https://github.com/LauerPeter/nosql-socialnetwork",
    },
    {
      title: "DeezerDen",
      description: "DeezerDen is a web application designed to assist users in searching for and accessing information related to artists, albums, and songs. It offers convenient links that direct users to the corresponding content on the Deezer music streaming platform.",
      role: "Full-stack development, agile group development",
      tools: "HTML, CSS, JavaScript, Bootstrap, Glide.js, Deezer Music API",
      githubUrl: "https://github.com/sanaasm/group-project1",
      deployedUrl: "https://sanaasm.github.io/group-project1/",
    },
    {
      title: "Regex Tutorial: Matching an Email",
      description: "This regex tutorial delves into the intricacies of a regular expression pattern designed for validating email addresses. It breaks down the various components, including anchors (^ and $), quantifiers (*, +, ?, {n}, {n,}, {n,m}), character classes (\d), grouping and capturing, bracket expressions, greedy and lazy matching, and the importance of boundaries. The tutorial provides a clear and comprehensive understanding of how this regex pattern works, making it a valuable resource for programmers seeking to validate email addresses in their applications.",
      role: "Sole Author",
      tools: "GitHub Gist",
      githubUrl: "https://github.com/LauerPeter/regex-tutorial/blob/main/gist-template.md",
    },
    {
      title: "JATE",
      description: "JATE is a web-based text editor with a primary focus on simplicity and lightweight functionality. It offers a range of features, including syntax highlighting for various programming languages, a clean and user-friendly interface, local storage support for saving your work, and the convenience of being installable as a Progressive Web App (PWA). ",
      role: "Sole Author",
      tools: "JavaScript, CodeMirror, IndexedDB",
      githubUrl: "https://github.com/LauerPeter/pwa-text-editor",
    },
    {
      title: "webapi-codequiz",
      description: "The WebAPI Code Quiz is a interactive quiz experience for testing users' knowledge of JavaScript. It features a timer that counts down from 100 seconds, during which users need to answer 5 JavaScript coding questions. Correct answers earn users 10 points, while incorrect answers result in a deduction of 5 points and 5 seconds from the timer. At the end of the quiz, users can enter their initials to save their scores for future reference in local storage.",
      role: "Sole Author",
      tools: "HTML, CSS, JavaScript",
      githubUrl: "https://github.com/LauerPeter/webapi-codequiz",
      deployedUrl: "https://lauerpeter.github.io/webapi-codequiz/",
    },
  ];

  const categoryOptions = [
    { label: 'All Categories', value: 'all' },
    { label: 'Full Stack', value: 'fullStack' },
    { label: 'Front End', value: 'frontEnd' },
    { label: 'Back End', value: 'backEnd' },
    { label: 'PWA', value: 'pwa' },
    { label: 'Command Line', value: 'commandLine' },
    { label: 'GitHub Gist', value: 'gitHubGist' },
  ];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      categoryFilter === 'all' ||
      (categoryFilter === 'fullStack' && fullStack.includes(project.title)) ||
      (categoryFilter === 'frontEnd' && frontEnd.includes(project.title)) ||
      (categoryFilter === 'backEnd' && backEnd.includes(project.title)) ||
      (categoryFilter === 'pwa' && pwa.includes(project.title)) ||
      (categoryFilter === 'commandLine' && commandLine.includes(project.title)) ||
      (categoryFilter === 'gitHubGist' && gitHubGist.includes(project.title));

    return categoryMatch;
  });

  return (
    <div>
      <div className='filterDropdown'>
        <label htmlFor='categoryDropdown'>Category: </label>
        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          value={categoryFilter}
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className='project-grid'>
        {filteredProjects.map((project, index) => (
          <div className='project-card' key={index}>
            <div className='project-background'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='project-role-tool'>
                <ul>
                  <li>Role: {project.role}</li>
                  <li>Tools: {project.tools}</li>
                </ul>
              </div>
              <div>
                <button
                  className='buttonlinkrepo'
                  onClick={() => window.open(project.githubUrl, 'GitHub')}
                >
                  <FontAwesomeIcon icon={['fab', 'github']} /> GitHub Repo
                </button>
                {project.deployedUrl && (
                  <button
                    className='buttonlinkapp'
                    onClick={() => window.open(project.deployedUrl, 'live-site')}
                  >
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
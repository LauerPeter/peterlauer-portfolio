

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import ParticleCom from './layout/Particles';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import AboutMe from './components/aboutme/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import ResumePage from './components/resume/Resume';
import Contact from './components/contact/Contact';

library.add(fab);

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <ParticleCom />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<ResumePage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
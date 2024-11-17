import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Certificates from './components/Certificates';

function App() {
  const navLinks = [
    { path: '/', text:'Home'},
    { path: '/about', text:'About'},
    { path: '/experiences', text:'Experiences'},
    { path: '/certificates', text:'Certificates'}
  ];

  return (
      <Router>
        <div>
          <Header navLinks={navLinks} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/experiences' element={<Experiences />} />
              <Route path='/certificates' element={<Certificates />} />
            </Routes>
        </div>
      </Router>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Architecture from './pages/Architecture';
import Interiors from './pages/Interiors';
import Landscaping from './pages/Landscaping';
import About from './pages/About';
import DesignApproach from './pages/DesignApproach';
import Contact from './pages/Contact';
import './index.css';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />

          <Route path="/architecture" element={<Architecture />} />
          <Route path="/interiors" element={<Interiors />} />
          <Route path="/landscaping" element={<Landscaping />} />
          <Route path="/about" element={<About />} />
          <Route path="/design-approach" element={<DesignApproach />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

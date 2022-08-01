import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import FloatingAction from './components/FloatingAction';
import About from './screens/About';
import Project from './screens/Project';
import Resume from './screens/Resume';

const App: FunctionComponent = () => {
  return (
    <Router>
      <div className="position-relative">
        <FloatingAction />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

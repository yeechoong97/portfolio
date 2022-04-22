import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Resume from './screens/Resume';
import Project from './screens/Project';
import FloatingAction from './components/FloatingAction';


const App = () => {
    return (
        <Router>
            <div className="position-relative">
                <Routes>
                    <Route exact path="/" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Project />} />
                </Routes>
                <FloatingAction />
            </div>
        </Router>
    );
}

export default App;
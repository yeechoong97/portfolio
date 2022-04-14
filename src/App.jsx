import React from 'react';
import NavMenu from './components/NavMenu';
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
                {/* <NavMenu /> */}
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
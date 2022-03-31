import React from 'react';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import About from './screens/About';
import Resume from './screens/Resume';
import Project from './screens/Project';


const App = () => {
    return (
        <Router>
            <div>
                <NavMenu />
                <Routes>
                    <Route exact path="/" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Project />} />
                </Routes>
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
import React from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Resume from './Resume';
import Project from './Project';


const App = () => {
    return (
        <Router>
            <div>
                <NavMenu />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/projects" component={Project} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
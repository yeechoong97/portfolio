import React from 'react';
import NavMenu from './components/NavMenu';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import About from './screens/About';
import Resume from './screens/Resume';
import Project from './screens/Project';


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
                {/* <Footer /> */}
            </div>
        </Router>
    );
}

export default App;
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import About from './About';


class LandingNav extends Component {
    render () {
        const landingNavStyle = {
            backgroundColor: "green",
            color: "white"
        }
        return(
            <Router>
                <div style={landingNavStyle}>
                    <nav classname="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/">Register</Link>
                        <Link to="/">About</Link> 
                    </nav>
                    <Switch>
                        <Route exact path="/home" component={Home}>
                        <Route exact path="/registration" component={Registration}>
                        <Route exact path="/about" component={About}>
                    </Switch>
                </div>
                
            </Router>
            
            
        )
    }
}

export default LandingNav
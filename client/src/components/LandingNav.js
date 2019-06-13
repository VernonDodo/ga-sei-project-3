import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import About from './About';


class LandingNav extends Component {
    render () {
        const landingNavStyle = {
            display: "flex",
            justifyContent: "space-evenly",
            backgroundColor: "green",
            color: "yellow"
        }
        return(
            <Router>
                <div>
                    <nav classname="navbar" style={landingNavStyle}>
                        <Link to="/home">Home</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/about">About</Link> 
                    </nav>
                    <Switch>
                        <Route exact path="/home" component={Home}/>
                        <Route exact path="/registration" component={Registration}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </div>
            </Router>
            
            
        )
    }
}

export default LandingNav
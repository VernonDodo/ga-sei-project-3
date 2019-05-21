import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class LandingNav extends Component {
    render () {
        const landingNavStyle = {
            backgroundColor: "green",
            color: "white"
        }
        return(
            
            <div style={landingNavStyle}>
                <span><a href="#">I am of legal drinking age. Let me in.</a></span>
                
            </div>
            
            
        )
    }
}

export default LandingNav
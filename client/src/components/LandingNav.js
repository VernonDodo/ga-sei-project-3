import React, {Component} from 'react';

class LandingNav extends Component {
    render () {
        const landingNavStyle = {
            backgroundColor: "green",
            color: "white"
        }
        return(
            <div style={landingNavStyle}>
                <span><a href="#">I am of legal drinking age. Let me in.</a></span>
                <p>By clicking on this link, you are agreeing to the term and conditions of using this site</p>
            </div>
        )
    }
}

export default LandingNav
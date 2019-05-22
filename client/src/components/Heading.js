import React, {Component} from 'react'

class Heading extends Component {
    render() {
        const headingStyles = {
            fontFamily: "Arial",
            color: "green",
            justifyContent: "center",
            textAlign: "center"
        }
    return(
        <div style={headingStyles}>
            <h1>Welcome to Wine Online</h1>
        </div>
    )
    }
}

export default Heading
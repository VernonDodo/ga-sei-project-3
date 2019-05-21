import React, {Component} from 'react';

class Warning extends Component{
    render() {
        const warningStyles = {
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
        return(
            <div style={warningStyles}>
                <span>Not For Persons Under The Legal Drinking Age. Drink Responsibly.</span>
                <p>By entering this site, you are agreeing to the terms and conditions of its use</p>
            </div>

        )
    }
    
}

export default Warning;
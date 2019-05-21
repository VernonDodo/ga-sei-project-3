import React, {Component} from 'react';

class Footer extends Component{
    render() {
        const footerStyles = {
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }
        return(
            <div style={footerStyles}>
                <span>Not For Persons Under The Legal Drinking Age. Drink Responsibly.</span>
                <p>By entering this site, you are agreeing to the terms and conditions of its use</p>
            </div>

        )
    }
    
}

export default Footer;
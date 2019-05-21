import React, {Component} from 'react';

class Banner extends Component {
    render() {
        const bannerStyles = {
        backgroundImage: "url('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cometocapetown.com%2Fwp-content%2Fuploads%2F2017%2F01%2FThe-Cape-Winelands-400x260.jpg&f=1')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "75vh",
        fontSize: "2rem",
        color: "white",
        fontFamily: "Permanent Marker, cursive",
        textShadow: "1px 2px 2px #000",
        display: "flex",
        justifyContent: "center"
        
        
        }
        return(
            <div style={bannerStyles}>
                <span>Bringing you the finest wines from the greatest South African wine regions</span>
            </div>
        )
    }
}

export default Banner;
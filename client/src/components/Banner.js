import React, {Component} from 'react';
import Heading from './Heading'

class Banner extends Component {
    render() {
        const bannerStyles = {
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url('https://images.pexels.com/photos/51947/tuscany-grape-field-nature-51947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "80vh",
        fontSize: "2rem",
        color: "white",
        fontFamily: "Permanent Marker, cursive",
        textShadow: "1px 2px 2px #000",
        justifyContent: "center"
        
        
        }
        return(
            <div style={bannerStyles}>
                <Heading/>
                <div>
                    <span>Bringing you the finest wines from the greatest South African wine regions</span>
                </div>
            </div>
        )
    }
}

export default Banner;
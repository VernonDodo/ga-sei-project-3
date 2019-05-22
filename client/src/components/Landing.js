import React, { Component } from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './LandingNav';

class Landing extends Component {
    render () {
      return (
        <div>
          <Banner/>
          <Footer/>
          <Navbar/>
        </div>
      )
    }
  }
  
  export default Landing;
  
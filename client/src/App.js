import React, { Component } from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/LandingNav'

class App extends Component {
  render () {
    return (
      <div>
        <Heading/>
        <Banner/>
        <Footer/>
        <Navbar/>
      </div>
    )
  }
}

export default App;

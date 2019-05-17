import React, { Component } from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading'
import Banner from './components/Banner'

class App extends Component {
  render () {
    return (
      <div>
        <Heading/>
        <Banner/>
      </div>
    )
  }
}

export default App;

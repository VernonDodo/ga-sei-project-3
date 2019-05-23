import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/Landing'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <LandingPage/>
        </div>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Router>
    )
  }
}

export default App;

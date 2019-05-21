import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import DatavizPage from './pages/DatavizPage.js';
import SinglePage from './pages/SinglePage.js';

class App extends Component {
  render() {
    const { data } = this.props;
    
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={() => <HomePage data={data} />}/>
            <Route exact path='/dataviz' component={DatavizPage}/>
            <Route exact path='/single/:id' component={SinglePage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
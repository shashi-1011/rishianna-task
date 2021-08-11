import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';


function App() {
  return (
    <div className="data">
    <Router>
      <Switch>
      <Route exact  path='/page1' component={Page1}/>
      <Route exact path ="/Page2" component={Page2}/>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;

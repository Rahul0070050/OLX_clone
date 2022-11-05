import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Route component={<Home />} exact path='/'/>
        <Route component={<Signup />} path='signup'/>
        <Route component={<Login />} path='/login'/>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
// import Show from './components/Show'
// import New from './components/New'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link, Router} from '@reach/router';
import Home from './components/Home'
import Camp from './components/Camp'
import Cake from './components/Cake'
import Park from './components/Park'

// import Details from './components/Details'


function App() {
  return (
    <div className="container">
    <h1>Madlibs</h1>
    <Router className = "my-3">
      <Home path="/"/>
      <Camp path="/camp"/>
      <Cake path="/cake"/>
      <Park path="/park"/>
    </Router>
    </div>
  );
}

export default App;


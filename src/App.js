import React from 'react'
import './CSS/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'


function App() {

  return (
    <div className="app">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;

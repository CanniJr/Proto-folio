import React from 'react'
import './CSS/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import Resume from './Components/Resume'
import Axios from 'axios'



function App() {

  //Fetch express.js backend for messaging purposes
  Axios({ 
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/resume'>
            <Resume />
          </Route>
          <Route path='/'>
           <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

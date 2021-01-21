import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Containers/Header'
import Home from './Components/Home'
import About from './Components/About'

function App() {

  return (
    <div className="app">
      {/* Header contains navbars to other components and sticks at the top in every page */}
      <Router>
        <Header />

        <Switch>
          <Route path='/About'>
            <About/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;

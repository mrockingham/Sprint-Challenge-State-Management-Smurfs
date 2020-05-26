import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {GlobalProvider} from './context/GlobalState'

import Town from './components/Town'
import AddSmurf from './components/AddSmurf'


import "./App.css";
const App = () => {
 
    return (
      <div className="App">
        <GlobalProvider>
          <Router>
        <h1>SMURFS! 2.0 W/ Redux</h1>
          <Switch>

        <Route exact path='/' component = {Town} />
        <Route path='/add' component = {AddSmurf} />
          </Switch>
          </Router>
        </GlobalProvider>
      </div>
    );
  }


export default App;

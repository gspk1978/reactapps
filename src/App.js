import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import VinLookup from './pages/VinLookup';

function App() {
  return (
    <Switch>
      <Route exact path="/vinlookup" component={VinLookup} />
    </Switch>
  )
}

export default App;

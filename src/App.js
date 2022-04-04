import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddContact from './addContact';
import ShowContact from './showContact';
import EditContact from './editContact';
import Home from './home';
import './App.css';


const App = () => {

  return ( 
    <Switch>
      <Route path="/add">
            <AddContact />
          </Route>
       <Route path="/show/:index">
            <ShowContact />
          </Route>
        <Route path="/edit/:index">
          <EditContact />
        </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>

   );
}

export default App;
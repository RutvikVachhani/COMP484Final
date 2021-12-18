import './App.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Homepage from "./components/homepage"
import Login from "./components/login"
import Register from "./components/register"
import BMIInsert from './components/bmiInsert'
import DisplayBMI from './components/displayBMI'


function App() {

  const [ user, setLoginUser] = useState({})

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/bmiInsert">
            <BMIInsert />
          </Route>
          <Route path="/homepage">
            <Homepage />
          </Route>
          <Route path="/displayBMI">
            <DisplayBMI />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

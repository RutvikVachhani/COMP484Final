import './App.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Homepage from "./components/homepage"
import Login from "./components/login"
import Register from "./components/register"
import BMIInsert from './components/bmiInsert'
import DisplayBMI from './components/displayBMI'
import BodyWeight from './components/bodyWeight'
import CalorieNeeds from './components/calorieNeeds'
import TDEE from './components/TDEE'
import DietPlans from './components/dietPlans'


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

          <Route path="/bodyWeight">
            <BodyWeight />
          </Route>
          <Route path="/calorieNeeds">
            <CalorieNeeds />
          </Route>
          <Route path="/TDEE">
            <TDEE />
          </Route>
          <Route path="/dietPlans">
            <DietPlans />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

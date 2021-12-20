import React, { useState } from "react";
import "../styles/global.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import Login from "./login";

import Nav from "./nav";
import Footer from "./footer";

const Homepage = ({ setLoginUser }) => {
  const history = useHistory();

  /* Set the width of the side navigation to 250px */
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <div>
      <Nav />
      <div className="center">
        <h1></h1>
        <br />
        <h2>Welcome, check side bar for information</h2>
      </div>
      <div id="mySidenav" className="sidenav">
        <Link to="/bmiInsert">Insert BMI info</Link>
        <br />
        <h3>Display your BMI</h3>
        <Link to="/displayBMI">Your BMI</Link>
        <br />
        <h3>Your Ideal Body Weight</h3>
        <Link to="/bodyWeight">Body Weight</Link>
        <br />
        <h3>Your Calorie Needs</h3>
        <Link to="/calorieNeeds">Calorie Needs</Link>
        <br />
        <h3>Total daily energy expenditure</h3>
        <Link to="/TDEE">TDEE</Link>
        <br />
        <h3>Diet-Plans</h3>
        <Link to="dietPlans">Diet Plan</Link>
        <br />
      </div>
      <Footer />
    </div>
  );
};
//2, 4, 5, 6, 7
export default Homepage;

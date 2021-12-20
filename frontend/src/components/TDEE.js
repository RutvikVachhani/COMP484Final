//importing node modules
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getInfo } from "../api";
import "../styles/global.css";
import treadmill from "../assets/treadmill.jpg";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
const fitnessCalculatorFunctions = require("fitness-calculator");

//function on returning html
const TDEE = () => {
  const [info, setInfo] = useState([]);

  //useeffect to fetch data from mongodb
  useEffect(() => {
    const fetchInfo = async () => {
      const i = await getInfo();
      setInfo(i);
    };
    fetchInfo();
  }, []);

  var gender = info.gender;
  var age = info.age;
  var height = info.height / 0.393;
  var weight = info.weight / 2.2;
  var activity = info.activity;
  var TDEE = fitnessCalculatorFunctions.TDEE(
    gender,
    age,
    height,
    weight,
    activity
  );

  const history = useHistory();
  
  return (
    <div>
      <Nav />
      <div id="mySidenav" className="sidenav">
      <Link to="/homepage">Home</Link>
        <h2>
          <u>TDEE(Total daily energy expenditure): {TDEE} </u>
        </h2>
        <br />
        <h3>Goal: {info.goal}</h3>
        <h3>Gender: {info.gender}</h3>
        <h3>Age: {info.age}</h3>
        <h3>Height: {info.height}</h3>
        <h3>Weight: {info.weight}</h3>
        <h3>Activity Level: {info.activity}</h3>
      </div>
      <img src={treadmill} alt="food" width="800" height="748"></img>
      <Footer />
    </div>
  );
};

export default TDEE;

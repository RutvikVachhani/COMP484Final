import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getInfo } from "../api";
import "../styles/global.css";
import scale from "../assets/scale.jpg";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
const fitnessCalculatorFunctions = require("fitness-calculator");

const DisplayBMI = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      const i = await getInfo();
      setInfo(i);
    };
    fetchInfo();
  }, []);

  var height = Number(info.height / 0.393);
  var weight = Number(info.weight / 2.2);
  var BMI = fitnessCalculatorFunctions.BMI(height, weight);

  const history = useHistory();

  return (
    <div>
      <Nav />
      <div id="mySidenav" className="sidenav">
        <br />
        <Link to="/homepage">Home</Link>
        <u>
          <h1>BMI: {BMI} </h1>
        </u>
        <h2>Age: {info.age}</h2>
        <h2>Height: {info.height}</h2>
        <h2>Weight: {info.weight}</h2>
      </div>
      <img src={scale} alt="food" width="656" height="748"></img>
      <Footer />
    </div>
  );
};

export default DisplayBMI;

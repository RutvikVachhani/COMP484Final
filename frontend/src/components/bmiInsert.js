//importing all node modules and exported modules from other files
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import scale from "../assets/scale.jpg";
import Nav from "./nav";
import Footer from "./footer";

const fitnessCalculatorFunctions = require("fitness-calculator");

  //functions returns html to the browser
const BMIInsert = () => {
  const history = useHistory();

//useState from react to save info
  const [info, setInfo] = useState({
    gender: String,
    age: Number,
    height: Number,
    weight: Number,
    activity: String,
    goal: String,
  });
//function which handles user input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
    console.log(name);
  };

  const InsertBMI = function(event) {
    event.preventDefault();
    const { gender, age, height, weight, activity, goal } = info;
    var h = Number(info.height / 0.393701);
    var w = Number(info.weight / 2.20462);
    var BMI = fitnessCalculatorFunctions.BMI(h, w);
    console.log(h + " " + w);
    document.getElementById("bmi").innerHTML = `Your BMI is ${BMI}`;
    axios.post("https://comp484finalbackend.herokuapp.com/bmiInput", info).then((res) => {
      alert(res.data.message);
      //history.push("/displayBMI")
    });
    //history.push("/displayBMI");
  };

  return (
    <div className="homepage">
      <Nav />
      <h1 className="center">Welcome Please input your information</h1>
      <div id="mySidenav" className="sidenav">
      <Link to="/homepage">Home</Link>
      </div>
      <div className="content-wrap">
        <form name="bmi" onSubmit={InsertBMI}>
          <label>Gender</label>
          <select
            name="gender"
            id="gender"
            value={info.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {/*<input type="text" name="gender" id="gender" value={info.gender} onChange={handleChange} placeholder="Enter gender" />*/}
          <br />
          <label>Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={info.age}
            onChange={handleChange}
            placeholder="Enter Age"
          />{" "}
          years
          <br />
          <label>Weight</label>
          <input
            type="number"
            name="weight"
            id="weight"
            value={info.weight}
            onChange={handleChange}
            placeholder="Enter Weight in lbs"
          />{" "}
          lbs
          <br />
          <label>Height</label>
          <input
            type="number"
            name="height"
            id="height"
            value={info.height}
            onChange={handleChange}
            placeholder="Enter height in inches"
          />{" "}
          inches
          <br />
          <label>Activity</label>
          {/*<input type="text" name="activity" id="activity" value={info.activity} onChange={handleChange} placeholder="Enter Activity" /> */}
          <select
            name="activity"
            id="activity"
            value={info.activity}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Activity Level
            </option>
            <option value="sedentary">Sedentary</option>
            <option value="light">Light</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
            <option value="extreme">Extreme</option>
          </select>
          <br />
          <label>Goal</label>
          {/*<input type="text" name="goal" id="goal" value={info.goal} onChange={handleChange} placeholder="Enter Goal" />*/}
          <select
            name="goal"
            id="goal"
            value={info.goal}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Goal
            </option>
            <option value="balance">Balance</option>
            <option value="mildWeightLoss">Mild Weight Loss</option>
            <option value="mildWeightGain">Mild Weight Gain</option>
            <option value="heavyWeightLoss">Heavy Weight Loss</option>
            <option value="heavyWeightGain">Heavy Weight Gain</option>
          </select>
          <br/>
          <br/>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        <p id="bmi"></p>
        </div>
        <div className="content-BMI">
        <img src={scale} alt="food" width="700"></img>
        </div>

      <Footer />
    </div>
  );
};

export default BMIInsert;

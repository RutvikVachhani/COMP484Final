//importing all node modules

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getInfo } from "../api";
import "../styles/global.css";
import food from "../assets/food.jpg";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
const fitnessCalculatorFunctions = require("fitness-calculator");

//functions returns html
const CalorieNeeds = () => {
    //useState to store info
  const [info, setInfo] = useState([]);

  //useEffect to fetching data from the backend

  useEffect(() => {
    const fetchInfo = async () => {
      const i = await getInfo();
      setInfo(i);
    };
    fetchInfo();
  }, []);

  //using the fitness-calculator api
  var gender = info.gender;
  var age = info.age;
  var height = info.height / 0.393;
  var weight = info.weight / 2.2;
  var activity = info.activity;
  var calories = new Object();
  var goal = info.goal;
  calories = fitnessCalculatorFunctions.calorieNeeds(
    gender,
    age,
    height,
    weight,
    activity
  );
  console.log(calories);
  const history = useHistory();

  return (
    <div>
      <Nav />
      <div id="mySidenav" className="sidenav">
      <Link to="/homepage">Home</Link> 
        <h2>Amount of Calories Needed</h2>
        <br/>
        <p>This amount is calculated depending on your activity and goal</p>
        <br />
        <h2 className="center">Goal: let's get you in shape.</h2>
        <br/>
        <h2>Gender: {info.gender}</h2>
        <h2>Age: {info.age}</h2>
        <h2>Height: {info.height}</h2>
        <h2>Weight: {info.weight}</h2>
        <h2>Activity Level: {info.activity}</h2>
        </div>
        <div className="content-wrap">
          {(() => {
            if (goal == "mildWeightGain") {
              return (
                <div>
                  <h2><u>Calorie Needs: {calories.mildWeightGain} cal</u></h2>
                  <ol>
                    <li>Homemade protein smoothies.</li>
                    <li>Milk</li>
                    <li>Rice</li>
                    <li>Nuts and nut butters.</li>
                    <li>Red meats.</li>
                    <li>Potatoes and starches</li>
                    <li>Salmon and oily fish</li>
                    <li>Protein supplements.</li>
                  </ol>
                </div>
              );
            } else if (goal == "balance") {
              return (
                <div>
                  <h2><u>Calorie Needs: {calories.balance} cal</u></h2>
                  <p>As your goal is set to balanced below is your diet plan</p>
                  <ol>
                    <li>
                      Fruits - They are nutritious, they make a tasty snack or
                      dessert, and they can satisfy a sweet tooth.{" "}
                    </li>
                    <li>
                      Vegetables are a key source of essential vitamins,
                      minerals, and antioxidants. Eat a variety of vegetables
                      with different colors for a full range of nutrients. Dark,
                      leafy greens are an excellent source of many nutrients
                    </li>
                    <li>
                      Grains - Whole grain products include the entire grain,
                      including the hull. They provide additional vitamins,
                      minerals, and fiber
                    </li>
                    <li>
                      Dairy - provide essential nutrients, including:protein,
                      calcium, vitamin D
                    </li>
                    <li>
                      Protein Foods - Meats and beans are primary sources of
                      protein, which is essential for wound healing and muscle
                      maintenance and development, among other functions.
                    </li>
                  </ol>
                </div>
              );
            } else if (goal == "mildWeightLoss") {
              return (
                <div>
                  <h2><u>Calorie Needs: {calories.mildWeightLoss} cal</u></h2>
                  <ol>
                    <li>Cut back on refined carbs</li>
                    <li>
                      Each one of your meals should include: a protein source,
                      fat source, vegetables
                    </li>
                    <li>
                      Move your body - Exercise, while not required to lose
                      weight, can help you lose weight more quickly
                    </li>
                  </ol>
                </div>
              );
            } else if (goal == "heavyWeightLoss") {
              return (
                <div>
                  <h2><u>Calorie Needs: {calories.heavyWeightLoss} cal</u></h2>
                  <ol>
                    <li>Cut back on refined carbs</li>
                    <li>
                      Each one of your meals should include: a protein source,
                      fat source, vegetables
                    </li>
                    <li>
                      Move your body - Exercise, while not required to lose
                      weight, can help you lose weight more quickly
                    </li>
                  </ol>
                </div>
              );
            } else if (goal == "heavyWeightGain") {
              return (
                <div>
                  <h2><u>Calorie Needs: {calories.heavyWeightGain} cal</u></h2>
                  <ol>
                    <li>Homemade protein smoothies.</li>
                    <li>Milk</li>
                    <li>Rice</li>
                    <li>Nuts and nut butters.</li>
                    <li>Red meats.</li>
                    <li>Potatoes and starches</li>
                    <li>Salmon and oily fish</li>
                    <li>Protein supplements.</li>
                  </ol>
                </div>
              );
            } else {
              return <div>Goal not choosen</div>;
            }
          })()}
          </div>
        <br />
      <img src={food} alt="food" width="700"></img>
      <Footer />
    </div>
  );
};

export default CalorieNeeds;

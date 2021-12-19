import React,{useState} from "react";
import "../styles/homepage.css";
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";

import Login from "./login";

import Nav from "./Nav";
import Footer from "./footer";

const Homepage = ({setLoginUser}) => {

    const history = useHistory();

    return (
        <div className="homepage">
            <Nav />
            <h1>
                Welcome
            </h1>
            <h2>Click below to input your Info and calculate you BMI</h2>
            <button className="button" onClick={ () => history.push('/bmiInsert')}>Click Me</button>
            <Link to="/displayBMI">Your BMI</Link>
            <br />
            <h2>Your Ideal Body Weight</h2>
            <Link to="/bodyWeight">Body Weight</Link>
            <br />
            <h2>Your Calorie Needs</h2>
            <Link to="/calorieNeeds">Calorie Needs</Link>
            <br />
            <h2>Total daily energy expenditure</h2>
            <Link to="/TDEE">TDEE</Link>
            <br/>
            <h2>Diet-Plans</h2>
            <Link to="dietPlans">Diet Plan</Link>
            <br />
            <Footer />
        </div>
    )
}
//2, 4, 5, 6, 7
export default Homepage
import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import "../styles/bmiInsert.css";
//import axios from "axios"
import { useHistory } from "react-router-dom"
import Nav from "./Nav";
import Footer from "./footer";

const fitnessCalculatorFunctions = require("fitness-calculator");

var axios = require("axios").default;

const BMIInsert = () => {

    const history = useHistory()

    const [ info, setInfo ] = useState({
        height: Number,
        weight: Number
    })

    const handleChange = e => {
        const { name, value } = e.target
        setInfo({
            ...info,
            [name]: value
        })
        console.log(name)
    }

    const InsertBMI = function(event) {
        event.preventDefault()
        const { height, weight } = info
        var h = Number(info.height/0.393701);
        var w = Number(info.weight/2.20462);
        var BMI = fitnessCalculatorFunctions.BMI(h, w);
        console.log(h+" "+w);
        document.getElementById("bmi").innerHTML = (`Your BMI is ${BMI}`);
        //history.push("/displayBMI");
    }
     
    return (
        <div className="homepage">
            <Nav />
            <h1>
                Welcome 
            </h1>
            <div>
            <form name="bmi" onSubmit={InsertBMI}>
                <label>Weight</label>
                <input type="number" name="weight" id="weight" value={info.weight} onChange={handleChange} placeholder="Enter Weight in lbs" /> lbs
                <br />
                <label>Height</label>
                <input type="number" name="height" id="height" value={info.height} onChange={handleChange} placeholder="Enter height in inches" /> inches
                <br />
                <button className="button" type="submit">Submit</button>
            </form>
            <p id="bmi"></p>
            </div>
            <Footer />
        </div>
    )
}

export default BMIInsert
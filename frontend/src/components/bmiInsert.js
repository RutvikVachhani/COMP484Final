import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import "../styles/bmiInsert.css";
import axios from "axios"
import { useHistory } from "react-router-dom"
import Nav from "./Nav";
import Footer from "./footer";

const fitnessCalculatorFunctions = require("fitness-calculator");

const BMIInsert = () => {

    const history = useHistory()

    const [ info, setInfo ] = useState({
        gender: String,
        age: Number,
        height: Number,
        weight: Number,
        activity: String,
        goal: String
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
        const { gender, age, height, weight, activity, goal } = info
        var h = Number(info.height/0.393701);
        var w = Number(info.weight/2.20462);
        var BMI = fitnessCalculatorFunctions.BMI(h, w);
        console.log(h+" "+w);
        document.getElementById("bmi").innerHTML = (`Your BMI is ${BMI}`);
        axios.post("http://localhost:4000/bmiInput", info)
        .then( res => {
            alert(res.data.message)
            //history.push("/displayBMI")
        })
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
                <label>Gender</label>
                <input type="text" name="gender" id="gender" value={info.gender} onChange={handleChange} placeholder="Enter gender" />
                <br />
                <label>Age</label>
                <input type="number" name="age" id="age" value={info.age} onChange={handleChange} placeholder="Enter Age" /> years
                <br />
                <label>Weight</label>
                <input type="number" name="weight" id="weight" value={info.weight} onChange={handleChange} placeholder="Enter Weight in lbs" /> lbs
                <br />
                <label>Height</label>
                <input type="number" name="height" id="height" value={info.height} onChange={handleChange} placeholder="Enter height in inches" /> inches
                <br />
                <label>Activity</label>
                <input type="text" name="activity" id="activity" value={info.activity} onChange={handleChange} placeholder="Enter Activity" /> [sedentary, light, moderate, active, extreme].
                <br />
                <label>Goal</label>
                <input type="text" name="goal" id="goal" value={info.goal} onChange={handleChange} placeholder="Enter Goal" /> [balance, mildWeightLoss, mildWeightGain, heavyWeightLoss, heavyWeightGain]
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
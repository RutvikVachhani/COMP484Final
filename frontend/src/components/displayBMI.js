import React,{useState} from "react";
import BMIInsert from "./bmiInsert";
import axios from "axios"
import { useHistory } from "react-router-dom"

const DisplayBMI = () => {

    const history = useHistory();

    const display = () => {
        axios.get("http://localhost:4000/display")
        .then(res => {
            alert("display done")
            //history.push("/bmiInsert")
        })
    }
    var bmi = BMIInsert.BMI;
    return(
        <div>
            <p>your weight</p>
            <p>your height</p>
            <p>your bmi</p>
            <button className="button" onClick={() => display}>click me</button>
        </div>
    )
}

export default DisplayBMI
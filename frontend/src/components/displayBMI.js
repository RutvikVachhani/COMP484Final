import React,{useState, useEffect} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Component } from "react";
import { getInfo } from "../api";
const fitnessCalculatorFunctions = require("fitness-calculator");

const DisplayBMI = () => {

    const [ info, setInfo ] = useState([])

    useEffect(() => {
        const fetchInfo = async () => {
            const i = await getInfo()
            setInfo(i)
        }
        fetchInfo()
    }, [])

    var height = (info.height/0.393).toFixed(2);
    var weight = (info.weight/2.2).toFixed(2);
    var BMI = fitnessCalculatorFunctions.BMI(height, weight).toFixed(2);

    const history = useHistory();
    
    return(
        <div>
            <h1>Your Age</h1>
            <h2>{info.username}</h2>
            <h2>{info.age}</h2>
            <h2>{info.height}</h2>
            <h2>{info.weight}</h2>
            <h2>{BMI}</h2>

        </div>
    )
}

export default DisplayBMI
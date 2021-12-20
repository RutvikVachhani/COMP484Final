import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
import { getInfo } from "../api";
import "../styles/global.css";
import Nav from "./nav";
import Footer from "./footer";
const fitnessCalculatorFunctions = require("fitness-calculator");

const TDEE = () => {

    const [ info, setInfo ] = useState([])

    useEffect(() => {
        const fetchInfo = async () => {
            const i = await getInfo()
            setInfo(i)
        }
        fetchInfo()
    }, [])


    var gender = info.gender
    var age = info.age
    var height = info.height/0.393
    var weight = info.weight/2.2
    var activity = info.activity
    var TDEE = fitnessCalculatorFunctions.TDEE(gender, age, height, weight, activity);

    const history = useHistory();
    
    return(
        <div>
            <Nav/>
            <h1></h1>
            <br/>
            <u><h1>TDEE(Total daily energy expenditure): {TDEE} </h1></u>
            <h2>Goal: {info.goal}</h2>
            <h2>Gender: {info.gender}</h2>
            <h2>Age: {info.age}</h2>
            <h2>Height: {info.height}</h2>
            <h2>Weight: {info.weight}</h2>
            <h2>Activity Level: {info.activity}</h2>
            <Footer/>

        </div>
    )
}

export default TDEE
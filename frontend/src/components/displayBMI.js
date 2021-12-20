import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
import { getInfo } from "../api";
import "../styles/global.css";
import Nav from "./nav";
import Footer from "./footer";
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

    var height = Number(info.height/0.393)
    var weight = Number(info.weight/2.2)
    var BMI = fitnessCalculatorFunctions.BMI(height, weight);

    const history = useHistory();
    
    return(
        <div>
            <Nav/>
            <u><h1>BMI: {BMI} </h1></u>
            <h2>Age: {info.age}</h2>
            <h2>Height: {info.height}</h2>
            <h2>Weight: {info.weight}</h2>
            <Footer/>

        </div>
    )
}

export default DisplayBMI
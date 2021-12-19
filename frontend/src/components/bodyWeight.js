import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
import { getInfo } from "../api";
const fitnessCalculatorFunctions = require("fitness-calculator");

const BodyWeight = () => {

    const [ info, setInfo ] = useState([])

    useEffect(() => {
        const fetchInfo = async () => {
            const i = await getInfo()
            setInfo(i)
        }
        fetchInfo()
    }, [])

    var height = info.height/0.393
    var gender = info.gender
    var Idealweight = ((fitnessCalculatorFunctions.idealBodyWeight(gender, height))*2.20462).toFixed(2);

    const history = useHistory();
    
    return(
        <div>
            <u><h1>Ideal Body Weight: {Idealweight}</h1></u>
            <h2>Gender: {info.gender}</h2>
            <h2>Height: {info.height}</h2>

        </div>
    )
}

export default BodyWeight
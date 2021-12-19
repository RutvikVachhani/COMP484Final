import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
import { getInfo } from "../api";
import Nav from "./Nav";
import Footer from "./footer";
const fitnessCalculatorFunctions = require("fitness-calculator");

const CalorieNeeds = () => {

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
    var calories = new Object()
    var goal= info.goal
    calories=(fitnessCalculatorFunctions.calorieNeeds(gender,age,height, weight,activity))
    console.log(calories)
    const history = useHistory();
    
    return(
        <div>
            <Nav/>
            <u>
            {(() => {
                if (goal == "mildWeightGain") {
                    return (
                        <div><h1>Calorie Needs: {calories.mildWeightGain} </h1></div>
                    )
                } 
                else if (goal == "balance") {
                    return (
                        <div><h1>Calorie Needs: {calories.balance} </h1></div>
                    )
                }
                else if (goal == "mildWeightLoss") {
                    return (
                        <div><h1>Calorie Needs: {calories.mildWeightLoss} </h1></div>
                    )
                } 
                else if (goal == "heavyWeightLoss") {
                    return (
                        <div><h1>Calorie Needs: {calories.heavyWeightLoss} </h1></div>
                    )
                } 
                else if (goal == "heavyWeightGain") {
                    return (
                        <div><h1>Calorie Needs: {calories.heavyWeightGain} </h1></div>
                    )
                } 
                else {
                    return (
                        <div>Goal not choosen</div>
                    )
                    }
            })()}
            </u>
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

export default CalorieNeeds
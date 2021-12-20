import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
import { getInfo } from "../api";
const fitnessCalculatorFunctions = require("fitness-calculator");

const DietPlan = () => {

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
    var goal= info.goal
    var plan = new Object()
    plan = fitnessCalculatorFunctions.macros(gender, age, height, weight, activity, goal)
    const history = useHistory();

    const display = (event) => {
        event.preventDefault();
        var dietplan = document.getElementById("diet").value
        if(dietplan == 'balancedDietPlan'){
            document.getElementById("showplan")
        }
    }
    
    return(
        <div>
            <lable>Select Diet Type</lable> <br />
            <form name="dietplan" id="dietplan" onSubmit={display}>
                <select name="diet" id="diet"> <br />
                    <option disabled>Select Diet Plan</option>
                    <option value="balancedDietPlan">Balanced</option>
                    <option value="lowCarbDietPlan">Low Carbs</option>
                    <option value="highCarbDietPlan">High Carbs</option>
                    <option value="highProteinDietPlan">High Protein</option>
                    <option value="lowFatDietPlan">Low Fat</option>
                    <option value="lowSugarDietPlan">Low Sugar</option>
                </select> <br />
                <button type="submit" className="button"> Submit</button>
            </form>
            <table>
                <tr>
                    <th>Diet Type</th>
                    <th>Carb</th>
                    <th>Protein</th>
                    <th>Fat</th>
                    <th>Sugar</th>
                </tr>
            </table>
            <h2>Goal: {info.goal}</h2>
            <h2>Gender: {info.gender}</h2>
            <h2>Age: {info.age}</h2>
            <h2>Height: {info.height}</h2>
            <h2>Weight: {info.weight}</h2>
            <h2>Activity Level: {info.activity}</h2>
            <div id="showplan" >

            </div>

        </div>
    )
}

export default DietPlan
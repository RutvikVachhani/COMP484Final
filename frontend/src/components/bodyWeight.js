import React,{useState, useEffect} from "react";
import { useHistory } from "react-router-dom"
import { getInfo } from "../api";
import Nav from "./Nav";
import Footer from "./footer";
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
    var Idealweight = ((fitnessCalculatorFunctions.idealBodyWeight(gender, height))*2.20462).toFixed(0);
    
    const history = useHistory();

    if(Idealweight > info.weight){
        document.getElementById("compare").innerHTML = "You need to gain around " + ((Idealweight - info.weight).toFixed(0)) + " lbs, here are some suggested video / diet plans"
        document.getElementById("gain").style.display="block";
        document.getElementById("gainList").style.display="block";
    }
    if(Idealweight < info.weight) {
        document.getElementById("compare").innerHTML = "You need to lose around " + ((info.weight - Idealweight).toFixed(0)) + " lbs, here are some suggested video / diet plans"
        document.getElementById("lose").style.display="block";
        document.getElementById("loseList").style.display="block";
    }

    return(
        <div>
            <h1>Ideal Body Weight Required Depending on Height</h1>
            <h2>Ideal Body Weight: {Idealweight}</h2>
            <h2>Your Info:</h2>
            <h3>Gender: {info.gender}</h3>
            <h3>Height: {info.height}</h3>
            <h3>Weight: {info.weight}</h3>
            <h3 id="compare"></h3>
            <embed id="gain" width="500" height="281" src='https://www.youtube.com/embed/zbw65VD1Xlg?mute=1;autoplay=1' frameborder="0" allowfullscreen style={{display: "none"}}></embed>
            <ol id="gainList" style={{display: "none"}}>
                <li>Don’t drink water before meals. This can fill your stomach and make it harder to get in enough calories.</li>
                <li>Eat more often. Squeeze in an additional meal or snack whenever you can, such as before bed.</li>
                <li>Drink milk. Drinking whole milk to quench thirst is a simple way to get in more high-quality protein and calories.</li>
                <li>Try weight gainer shakes. If you’re really struggling then you can try weight gainer shakes. These are very high in protein, carbs and calories.</li>
                <li>Use bigger plates. Definitely use large plates if you’re trying to get in more calories, as smaller plates cause people to automatically eat less.</li>
                <li>Add cream to your coffee. This is a simple way to add in more calories.</li>
                <li>Get quality sleep. Sleeping properly is very important for muscle growth.</li>
                <li>Don’t smoke. Smokers tend to weigh less than non-smokers, and quitting smoking often leads to weight gain.</li>
            </ol>
            <embed id="lose" width="500" height="281" src="https://www.youtube.com/embed/H3jJ29oE8Zg?mute=1" frameborder="0" allowfullscreen style={{display: "none"}}></embed>
            <ol id="loseList" style={{display: "none"}}>
                <li>Eat a high protein breakfast </li>
                <li>Avoid sugary drinks and fruit juice.</li>
                <li>Drink water before meals</li>
                <li>Choose weight-loss-friendly foods</li>
                <li>Eat soluble fiber</li>
                <li>Drink coffee or tea</li>
                <li>Base your diet on whole foods</li>
                <li>Eat slowly</li>
                <li>Get good quality sleep</li>
            </ol>
            <Nav/>
            <u><h1>Ideal Body Weight: {Idealweight}</h1></u>
            <h2>Gender: {info.gender}</h2>
            <h2>Height: {info.height}</h2>
            <Footer/>
        </div>
    )
}

export default BodyWeight
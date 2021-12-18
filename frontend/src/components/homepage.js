import React,{useState} from "react";
import "../styles/homepage.css";
import axios from "axios"
import { useHistory } from "react-router-dom"
const Homepage = ({setLoginUser}) => {

    const history = useHistory();

    return (
        <div className="homepage">
            <nav>
                 <div class="inline">
                    <h1>Get Healthier</h1>
                    <div class="Right">
                        <a class="active" href="homepage">Home</a>
                    </div>
                </div>
            </nav>
            <h1>
                Welcome
            </h1>
            <h2>Click below to input your Info and calculate you BMI</h2>
            <button className="button" onClick={ () => history.push('/bmiInsert')}>Click Me</button>
        </div>
    )
}

export default Homepage
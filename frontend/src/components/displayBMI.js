import React,{useState} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Component } from "react";

const DisplayBMI = () => {

    const [ info, setInfo ] = useState({
        i: []
    })

    const history = useHistory();

    const display = function(event) {
        event.preventDefault();
        axios.get("http://localhost:4000/display")
        .then((response) => {
            const data = response.data;
            console.log("data received");
            alert("info here");
        })
        .catch(() => {
            alert("error")
        })
    }
    
    return(
        <div>
            <p>your weight</p>
            <p>your height</p>
            <p>your bmi</p>
            <form name="display" onSubmit={display}>
                <button className="button" type="submit">Submit</button>
            </form>
            <div className="display">
            </div>
        </div>
    )
}

export default DisplayBMI
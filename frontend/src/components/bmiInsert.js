import React,{useState} from "react";
import "../styles/homepage.css";
import styles from "../styles/bmiInsert.scss";
import axios from "axios"
import { useHistory } from "react-router-dom"

import Nav from "./Nav";
import Footer from "./Footer";

const BMIInsert = () => {

    const history = useHistory()

    const [ info, setInfo ] = useState({
        height: "",
        weight: "",
    })

    const handleChange = e => {
        const { name, value } = e.target
        setInfo({
            ...info,
            [name]: value
        })
        console.log(name)
    }

    const InsertBMI = function(event){
        event.preventDefault()
        const { height, weight } = info
        if(height && weight){
            axios.post("http://localhost:4000/bmiInput", info)
            .then( res => {
                alert(res.data.message)
                //history.push("/")
            })
        }   
    }
     
    return (
        <div className="homepage">
            <Nav />
            <h1>
                Welcome 
            </h1>
            <div className={styles}>
            <form name="bmi" onSubmit={InsertBMI}>
                <label>Weight</label>
                <input type="text" name="weight" id="weight" value={info.weight} onChange={handleChange} placeholder="Enter Weight in lbs" /> lbs
                <br />
                <label>Height</label>
                <input type="text" name="height" id="height" value={info.height} onChange={handleChange} placeholder="Enter height in inches" /> inches
                <br />
                <button className="button" type="submit">Submit</button>
            </form>
            </div>
            <Footer />
        </div>
    )
}

export default BMIInsert